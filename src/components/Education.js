import React from "react";
import {
  AcademicCapIcon,
  CalendarIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education">
      <div className="container px-5 py-10 mx-auto text-center">
        <AcademicCapIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Education
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-12">
          Studies carried out
        </p>

        <div className="flex flex-wrap -m-4">
          {education.map((item, idx) => (
            <div key={idx} className="p-4 md:w-1/2 w-full relative">
              <div className="h-full bg-gray-800 bg-opacity-40 pl-8 pr-8 pb-8 pt-12 rounded">
                <div className="inline-flex items-center">
                  <img
                    alt="institution"
                    src={item.image}
                    className="w-12 flex-shrink-0 object-cover object-center rounded"
                  />
                  <span className="flex-grow flex flex-col pl-4 text-left">
                    <span className="title-font font-medium text-white">
                      {item.name}
                    </span>
                    <span className="text-gray-400 text-sm">{item.degree}</span>
                  </span>
                </div>

                <div className="mt-4 flex h-6 justify-center items-center">
                  <CalendarIcon className="w-4 h-4 block flex-shrink-0" />
                  <div className="ml-2 text-gray-500 text-xs leading-none flex flex-wrap">
                    {item.dates.map((d, ind) => (
                      <span key={ind} className="flex items-center">
                        {d[0]} - {d[1]}
                        {ind !== item.dates.length - 1 && (
                          <span className="h-4 w-px bg-gray-300 mx-2" />
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="leading-relaxed mt-4">{item.quote}</p>

                <div className="mt-4">
                  <span className="font-medium text-green-500 text-sm">
                    {item.skills.join(", ")}
                  </span>
                </div>
              </div>
              <div className="flex absolute top-4 left-4 mt-4 ml-4">
                <LocationMarkerIcon className="w-4 h-4 inline-block mr-1" />
                <span className="text-gray-500 text-xs">{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
