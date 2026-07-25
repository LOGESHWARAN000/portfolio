import React from "react";

const SKILLS = [
  "Problem Solving",
  "Python",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "SQL",
  "Cloud Technologies (Basics)",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-neutral-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <div className="mb-10">
          <span className="mb-2 inline-block rounded-full border border-neutral-800 px-4 py-1 text-sm font-medium text-orange-500">
            Toolkit
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Skills</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-800 shadow-sm ring-1 ring-neutral-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}