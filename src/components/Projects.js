import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import React from "react";
import { projects } from "../data";
import SectionHeader from "./SectionHeader";

function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-fg hover:text-gold"
        >
          <ExternalLinkIcon className="w-4 h-4 mr-1.5" />
          {project.liveLabel || "Live demo"}
        </a>
      )}
      {project.sourceUrl && (
        <a
          href={project.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-fg hover:text-gold"
        >
          <CodeIcon className="w-4 h-4 mr-1.5" />
          Source code
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container px-5 py-16 mx-auto">
        <SectionHeader title="Projects">
          Web, mobile and desktop apps I've built, with live demos and source
          code.
        </SectionHeader>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-surface rounded-lg overflow-hidden flex flex-col"
            >
              <img
                alt={project.title}
                className="w-full h-48 object-cover object-top"
                src={project.image}
                loading="lazy"
                width="800"
                height="400"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-xl font-semibold text-fg mb-2">
                  {project.title}
                </h3>
                <p className="leading-relaxed mb-4">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="px-2 py-1 bg-line text-fg rounded-full text-xs font-medium"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <ProjectLinks project={project} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
