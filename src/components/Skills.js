import React from "react";
import { skillGroups } from "../data";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-16 mx-auto">
        <SectionHeader title="Skills" />
        <div className="flex flex-col gap-10">
          {skillGroups.map((group) => (
            <div key={group.name}>
              <h3 className="font-display text-xl font-semibold text-fg mb-4">
                {group.name}
              </h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {group.skills.map((skill) => (
                  <li
                    key={skill.text}
                    className="bg-surface rounded-lg flex items-center p-3 sm:p-4"
                  >
                    <img
                      src={skill.icon}
                      alt=""
                      loading="lazy"
                      width="40"
                      height="40"
                      className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 mr-3 sm:mr-4"
                    />
                    <span className="font-medium text-fg sm:text-lg">
                      {skill.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
