// src/components/Navbar.js

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React from "react";

const links = [
  { id: "achievements", label: "Achievements" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(null);

  // Highlight the link of the section crossing the middle of the viewport.
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document
      .querySelectorAll("section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `py-1 border-b-2 ${
      active === id
        ? "text-fg border-gold"
        : "border-transparent hover:text-fg"
    }`;

  return (
    <header className="sticky top-0 z-20 bg-ink bg-opacity-95 border-b border-line">
      <div className="container mx-auto px-5 h-16 flex items-center justify-between">
        <a
          href="#about"
          className="font-display font-semibold text-fg text-xl"
          onClick={() => setOpen(false)}
        >
          Raudel Gómez
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={linkClass(link.id)}
              aria-current={active === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-ink font-medium bg-gold py-1.5 px-4 rounded hover:bg-gold-dark"
          >
            Contact
          </a>
        </nav>
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-fg"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          className="md:hidden border-t border-line px-5 py-4 flex flex-col gap-4 text-lg"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "text-fg" : "hover:text-fg"}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-gold font-medium"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
