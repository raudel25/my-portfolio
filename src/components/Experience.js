import React from "react";
import {
  BriefcaseIcon,
  CalendarIcon,
  OfficeBuildingIcon,
} from "@heroicons/react/solid";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container px-5 py-10 mx-auto text-center">
        <BriefcaseIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Experience
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-12">
          Positions held throughout my career as a developer
        </p>
        <div className="flex flex-wrap m-4">
          {experience.map((item) => (
            <div className="p-4 md:w-1/2 w-full relative">
              <div className="h-full bg-gray-800 bg-opacity-40 pl-8 pr-8 pb-8 pt-12 rounded">
                <div className="inline-flex items-center">
                  <img
                    alt="company"
                    src={item.image}
                    className="w-12 flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {item.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {item.company}
                    </span>
                  </span>
                  <div className="w-12" />
                </div>

                <p className="leading-relaxed mt-6">{item.quote}</p>

                <div className="mt-4">
                  <span className="font-medium text-green-500 text-sm">
                    {item.skills.join(", ")}
                  </span>
                </div>
              </div>
              <div className="flex absolute top-4 right-4 mt-4 mr-4">
                <CalendarIcon className="w-4 h-4 inline-block mr-1" />
                {item.dates.map((d, ind) => (
                  <span key={ind} className="text-gray-500 text-xs">
                    {d[0]} - {d[1]}
                    {ind != item.dates.length - 1 && (
                      <span className="h-8 w-px bg-gray-300 mx-2" />
                    )}
                  </span>
                ))}
              </div>
              <div className="flex absolute top-4 left-4 mt-4 ml-4">
                <OfficeBuildingIcon className="w-4 h-4 inline-block mr-1" />
                <span className="text-gray-500 text-xs">{item.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
