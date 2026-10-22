import React from "react";
import SectionHeader from "./SectionHeader";
import Timeline from "./Timeline";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container px-5 pt-16 pb-4 mx-auto">
        <SectionHeader title="Experience" />
        <Timeline items={experience} showDuration />
      </div>
    </section>
  );
}
