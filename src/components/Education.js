import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";
import Card from "./Card.js";
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
          {education.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
