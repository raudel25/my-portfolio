// src/components/Contact.js

import {
  LinkIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/solid";
import React from "react";

export default function Contact() {
  const [formData, setFormData] = React.useState({ email: "", message: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const telegramToken = process.env.REACT_APP_TELEGRAM_BOT_ID;
    const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;

    const text = `Email: ${formData.email}\nMessage: ${formData.message}`;

    if (formData.message.length === 0 || formData.email.length === 0) {
      alert("Please, fill all the fields");
      return;
    }

    try {
      await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });
      alert("Message sent successfully");
    } catch (error) {
      alert("The message could not be sent");
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
      <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap pb-10 gap-10">
        <div className="container px-5 mx-auto ">
          <h3 className="text-white sm:text-4xl text-3xl mb-10 font-medium title-font">
            Send me a message
          </h3>
          <form
            netlify
            name="contact"
            onSubmit={handleSubmit}
            data-netlify="true"
            className="flex flex-wrap -m-2"
          >
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
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                  }}
                  id="message"
                  name="message"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                loading="lazy"
                type="submit"
                className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className=" flex flex-col md:ml-auto w-1/2">
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
          {/* Agrega más información de contacto si es necesario */}
        </div>
      </div>
    </section>
  );
}
