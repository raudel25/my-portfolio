// src/components/Contact.js

import { LinkIcon, MailIcon, PhoneIcon } from "@heroicons/react/solid";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="./main.pdf"
          />
          <a href="./main.pdf" download="RaudelAlejandroGomezMolinaCV.pdf">
            <button className="relative ] rounded shadow-md text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Download CV
            </button>
          </a>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-10 font-medium title-font">
            Contact
          </h2>
          <div className="relative mb-2">
            <h3 className="leading-7 text-sm text-gray-400">Nombre</h3>
            <p className="text-white">Raudel Alejandro Gómez Molina</p>
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
