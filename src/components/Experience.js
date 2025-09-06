import React from "react";
import { BriefcaseIcon } from "@heroicons/react/solid";
import Card from "./Card.js";
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
        <div className="flex flex-wrap -m-4">
          {experience.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
