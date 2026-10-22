import React from "react";
import { achievements } from "../data";
import SectionHeader from "./SectionHeader";

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container px-5 py-16 mx-auto">
        <SectionHeader title="Achievements">
          Results in competitive programming, mathematics and university.
        </SectionHeader>
        <ol className="border-t border-line">
          {achievements.map((ach) => (
            <li
              key={ach.title}
              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 py-5 border-b border-line"
            >
              <span className="sm:w-16 flex-shrink-0 font-display text-lg">
                {ach.year}
              </span>
              <span className="sm:w-80 flex-shrink-0 font-display text-2xl font-semibold text-fg">
                {ach.title}
              </span>
              <span>{ach.event}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
