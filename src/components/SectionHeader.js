import React from "react";

export default function SectionHeader({ title, children }) {
  return (
    <header className="mb-12 max-w-2xl">
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-fg">
        {title}
      </h2>
      {children && (
        <p className="mt-3 text-base leading-relaxed text-muted">{children}</p>
      )}
    </header>
  );
}
