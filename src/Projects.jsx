import React from "react";
import Reveal from "./Reveal";

const PROJECTS = [
  {
    title: "To-Do List Application",
    stack: "Python, SQLite",
    description:
      "A task management app with add, edit, and delete functionality for organizing daily tasks.",
    link: "https://github.com/LOGESHWARAN000/todo-list-app",
  },
  {
    title: "Personal Portfolio Website",
    stack: "React, Tailwind CSS",
    description:
      "A responsive portfolio site designed and deployed to showcase skills and projects.",
    link: "https://github.com/LOGESHWARAN000/portfolio",
  },
  {
    title: "GitHub Profile Viewer",
    stack: "React, Tailwind CSS, GitHub REST API",
    description:
      "A web app to search any GitHub username and view their profile stats and latest repositories.",
    link: "https://github.com/LOGESHWARAN000/github-profile-viewer",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-24">
      <Reveal>
        <div className="mb-10">
          <span className="mb-2 inline-block rounded-full border border-neutral-800 px-4 py-1 text-sm font-medium text-orange-500">
            Selected Work
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Projects</h2>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 120}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col rounded-2xl bg-neutral-800 p-8 text-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
              <p className="mb-4 text-sm font-medium text-orange-400">{project.stack}</p>
              <p className="mb-4 leading-relaxed text-gray-300">{project.description}</p>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-orange-400 hover:underline">
                View on GitHub
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2">
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}