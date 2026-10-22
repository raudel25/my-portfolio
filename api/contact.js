// Vercel serverless function: forwards contact form messages to Telegram.
// The bot token never reaches the browser; set TELEGRAM_BOT_TOKEN and
// TELEGRAM_CHAT_ID in the Vercel project's environment variables.

const LIMITS = { name: 100, email: 200, message: 4000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readField(body, field) {
  const value = body && body[field];
  return typeof value === "string" ? value.trim() : "";
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = typeof req.body === "string" ? safeParse(req.body) : req.body;

  // Honeypot: real visitors never see or fill this field.
  if (readField(body, "website")) {
    return res.status(200).json({ ok: true });
  }

  const name = readField(body, "name");
  const email = readField(body, "email");
  const message = readField(body, "message");

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Fill in your name, email and message" });
  }
  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    message.length > LIMITS.message
  ) {
    return res.status(400).json({ error: "Message too long" });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ error: "Enter a valid email" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
    return res.status(500).json({ error: "Contact form is not configured" });
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        }),
      }
    );
    if (!response.ok) {
      console.error(`Telegram responded ${response.status}`);
      return res.status(502).json({ error: "Message not sent" });
    }
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
    return res.status(502).json({ error: "Message not sent" });
  }
};

function safeParse(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    return null;
  }
}
