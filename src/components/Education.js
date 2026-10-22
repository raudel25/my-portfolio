import React from "react";
import SectionHeader from "./SectionHeader";
import Timeline from "./Timeline";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education">
      <div className="container px-5 pt-16 pb-4 mx-auto">
        <SectionHeader title="Education" />
        <Timeline items={education} />
      </div>
    </section>
  );
}
