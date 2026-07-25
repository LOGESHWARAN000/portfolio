import React from "react";

const PROJECTS = [
  {
    title: "To-Do List Application",
    stack: "Python, SQLite",
    description:
      "A task management app with add, edit, and delete functionality for organizing daily tasks.",
  },
  {
    title: "Personal Portfolio Website",
    stack: "HTML, CSS, JavaScript",
    description:
      "A responsive portfolio site designed and deployed to showcase skills and projects.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-24">
      <div className="mb-10">
        <span className="mb-2 inline-block rounded-full border border-neutral-800 px-4 py-1 text-sm font-medium text-orange-500">
          Selected Work
        </span>
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Projects</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="flex flex-col rounded-2xl bg-neutral-800 p-8 text-white shadow-md"
          >
            <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
            <p className="mb-4 text-sm font-medium text-orange-400">{project.stack}</p>
            <p className="leading-relaxed text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}