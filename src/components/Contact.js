// src/components/Contact.js

import React from "react";
import { email, phone, socials } from "../data";
import SectionHeader from "./SectionHeader";
import SocialIcon from "./SocialIcon";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [notification, setNotification] = React.useState(null); // {type: "success" | "error", text: string}
  const [visible, setVisible] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const showNotification = (v) => {
      setNotification(v);
      setVisible(true);

      setTimeout(() => setVisible(false), 2000);

      setTimeout(() => setNotification(null), 2500);
    };

    if (
      formData.message.trim().length === 0 ||
      formData.email.trim().length === 0 ||
      formData.name.trim().length === 0
    ) {
      showNotification({
        type: "error",
        text: "Fill in your name, email and message",
      });
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`Contact API responded ${response.status}`);
      }

      showNotification({
        type: "success",
        text: "Message sent",
      });
      setFormData({ name: "", email: "", message: "", website: "" });
    } catch (error) {
      showNotification({
        type: "error",
        text: `Message not sent. Try again or email ${email}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-16 mx-auto">
        <SectionHeader title="Contact">
          Have a project or a role in mind? Send me a message or reach me
          directly.
        </SectionHeader>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <form onSubmit={handleSubmit} className="md:w-3/5 flex flex-col gap-4">
            {/* Honeypot: hidden from people, filled in by spam bots. */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                value={formData.website}
                onChange={(e) =>
                  setFormData({ ...formData, website: e.target.value })
                }
                type="text"
                id="website"
                name="website"
                tabIndex="-1"
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="name" className="leading-7 text-sm">
                Name
              </label>
              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                className="w-full bg-surface rounded border border-line focus:border-gold focus:bg-ink focus:ring-2 focus:ring-gold focus:ring-opacity-30 text-base outline-none text-fg py-1 px-3 transition-colors leading-8"
              />
            </div>
            <div>
              <label htmlFor="email" className="leading-7 text-sm">
                Email
              </label>
              <input
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className="w-full bg-surface rounded border border-line focus:border-gold focus:bg-ink focus:ring-2 focus:ring-gold focus:ring-opacity-30 text-base outline-none text-fg py-1 px-3 transition-colors leading-8"
              />
            </div>
            <div>
              <label htmlFor="message" className="leading-7 text-sm">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                id="message"
                name="message"
                className="w-full bg-surface rounded border border-line focus:border-gold focus:bg-ink focus:ring-2 focus:ring-gold focus:ring-opacity-30 text-base outline-none text-fg py-1 px-3 transition-colors h-40 resize-none leading-6"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`inline-flex items-center font-medium py-2 px-8 rounded text-lg transition ${
                  loading
                    ? "bg-line text-muted cursor-not-allowed"
                    : "bg-gold text-ink hover:bg-gold-dark"
                }`}
              >
                {loading ? (
                  <span className="inline-flex items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Sending…
                  </span>
                ) : (
                  "Send message"
                )}
              </button>
            </div>
          </form>

          <div className="md:w-2/5">
            <p className="text-sm mb-1">Email</p>
            <a
              href={`mailto:${email}`}
              className="font-display text-2xl font-semibold text-fg hover:text-gold break-all"
            >
              {email}
            </a>
            <p className="text-sm mt-6 mb-1">Phone</p>
            <p className="text-fg text-lg">{phone}</p>
            <ul className="mt-8 border-t border-line">
              {socials.map((social) => (
                <li key={social.name} className="border-b border-line">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 py-3 text-fg hover:text-gold"
                  >
                    <SocialIcon name={social.icon} className="w-5 h-5" />
                    <span className="font-medium">{social.name}</span>
                    <span className="ml-auto text-muted">{social.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {notification && (
        <div
          role="status"
          className={`fixed bottom-6 right-6 left-6 sm:left-auto z-50 px-4 py-3 rounded-lg shadow-lg text-white transition-opacity duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          } ${notification.type === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          {notification.text}
        </div>
      )}
    </section>
  );
}
