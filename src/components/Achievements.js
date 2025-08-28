import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import { achievements } from "../data";

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <StarIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Achievements
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Recognitions, awards and accomplishments obtained during my academic
            and professional journey
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {achievements.map((ach, idx) => (
            <div key={idx} className="p-2 md:w-1/3 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <div className="text-green-400 w-12 h-12 flex-shrink-0 mr-4 flex items-center">
                  <img src={ach.icon} alt={ach.text} />
                </div>
                <span className="title-font font-medium text-white text-sm flex items-center">
                  {ach.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
