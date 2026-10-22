import React from "react";
import { cvLink, socials } from "../data";
import SocialIcon from "./SocialIcon";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto px-5 pt-12 pb-20 md:pt-24 md:pb-28 flex flex-col-reverse md:flex-row md:items-center gap-10 md:gap-16">
        <div className="flex-1 max-w-2xl">
          <p className="reveal text-lg text-fg mb-4">Hi, I'm Raudel.</p>
          <h1
            className="reveal font-display text-5xl sm:text-6xl font-semibold leading-tight text-fg mb-6"
            style={{ animationDelay: "80ms" }}
          >
            Software developer and computer scientist.
          </h1>
          <p
            className="reveal text-lg leading-relaxed mb-8"
            style={{ animationDelay: "200ms" }}
          >
            I build web and mobile apps with React, .NET and Flutter, working
            with Claude Code and AI agents through spec-driven development. I
            graduated Summa Cum Laude in Computer Science from the University
            of Havana, where I also teach algorithms, and I'm an ICPC Caribbean
            silver medalist.
          </p>
          <div
            className="reveal flex flex-wrap items-center gap-4"
            style={{ animationDelay: "320ms" }}
          >
            <a
              href="#contact"
              className="inline-flex text-ink font-medium bg-gold py-2 px-6 rounded hover:bg-gold-dark text-lg"
            >
              Contact me
            </a>
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-fg bg-surface py-2 px-6 rounded hover:bg-line text-lg"
            >
              View CV
            </a>
            <div className="flex items-center gap-1 -ml-2 sm:ml-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2 hover:text-fg"
                >
                  <SocialIcon name={social.icon} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <img
          className="reveal w-32 h-32 md:w-64 md:h-64 lg:w-80 lg:h-80 flex-shrink-0 object-cover object-center rounded-full"
          style={{ animationDelay: "200ms" }}
          width="640"
          height="640"
          alt="Raudel Alejandro Gómez Molina"
          src="logo.jpg"
        />
      </div>
    </section>
  );
}
