import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Languages &amp; Skills
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Languages &amp; Skills acquired during my time as a student,
            individual study and the professional world
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill, idx) => (
            <div key={idx} className="p-2 md:w-1/4 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <div className="text-green-400 w-12 h-12 flex-shrink-0 mr-4">
                  <img src={skill.icon} alt={skill.text} />
                </div>
                <span className="title-font font-medium text-white text-lg">
                  {skill.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
