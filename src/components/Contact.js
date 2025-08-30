// src/components/Contact.js

import {
  LinkIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/solid";
import React from "react";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
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
        text: "Please, fill all the fields",
      });
      return;
    }

    const telegramToken = process.env.REACT_APP_TELEGRAM_BOT_ID;
    const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

    try {
      setLoading(true);
      await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      showNotification({
        type: "success",
        text: "Message sent successfully",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      showNotification({
        type: "error",
        text: "The message could not be sent",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full">
          <MailIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Contact
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Write a message
          </p>
        </div>
      </div>

      {notification && (
        <div
          className={`fixed bottom-10 right-10 z-50 px-4 py-2 rounded-lg shadow-lg text-white transition-opacity duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          } ${notification.type === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          {notification.text}
        </div>
      )}

      <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap pb-10 gap-10">
        <div className="container px-5 mx-auto ">
          <h3 className="text-white sm:text-4xl text-3xl mb-10 font-medium title-font">
            Send me a message
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-400"
                >
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
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-400"
                >
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
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-400"
                >
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  id="message"
                  name="message"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                disabled={loading}
                className={`flex mx-auto text-white border-0 py-2 px-8 rounded text-lg transition ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600"
                }`}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
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
                    Sending...
                  </span>
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Panel de datos de contacto */}
        <div className="flex flex-col md:ml-auto w-1/2">
          <h3 className="text-white sm:text-4xl text-3xl mb-10 font-medium title-font">
            My contact data
          </h3>
          <div className="relative mb-2">
            <h3 className="leading-7 text-sm text-gray-400">Full name</h3>
            <p className="text-white flex items-center">
              <UserIcon className="w-4 mr-2" />
              Raudel Alejandro Gómez Molina
            </p>
          </div>
          <div className="relative mb-2">
            <h3 className="leading-7 text-sm text-gray-400">Email</h3>
            <a
              className="text-white flex items-center"
              href="mailto:raudel.gmolina@gmail.com"
            >
              <MailIcon className="w-4 mr-2" /> raudel.gmolina@gmail.com
            </a>
          </div>
          <div className="relative mb-2">
            <h3 className="leading-7 text-sm text-gray-400">Phone</h3>
            <p className="text-white flex items-center">
              <PhoneIcon className="w-4 mr-2" />
              +53 59253662
            </p>
          </div>
          <div className="relative mb-2">
            <h3 className="leading-7 text-sm text-gray-400">Github</h3>
            <a
              className="text-white flex items-center"
              href="https://github.com/raudel25"
            >
              <LinkIcon className="w-4 mr-2" />
              raudel25
            </a>
          </div>
          <div className="relative mb-2">
            <h3 className="leading-7 text-sm text-gray-400">LinkedIn</h3>
            <a
              className="text-white flex items-center"
              href="https://www.linkedin.com/in/raudel25/"
            >
              <LinkIcon className="w-4 mr-2" />
              raudel25
            </a>
          </div>
          <div className="relative mb-2">
            <h3 className="leading-7 text-sm text-gray-400">Codeforces</h3>
            <a
              className="text-white flex items-center"
              href="https://codeforces.com/profile/raudel25"
            >
              <LinkIcon className="w-4 mr-2" />
              raudel25
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
