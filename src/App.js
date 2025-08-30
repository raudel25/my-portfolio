import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import EducationAndAchievements from "./components/Education";
import Achievements from "./components/Achievements";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <EducationAndAchievements />
      <Achievements />
      <Contact />
    </main>
  );
}
