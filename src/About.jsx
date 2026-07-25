import React from "react";

/**
 * About Section
 * A short "who I am" summary built from the resume objective, plus
 * languages spoken and areas of interest.
 */

const INTERESTS = ["Problem Solving", "Front-end Development", "Continuous Learning"];

const LANGUAGES = [
  { name: "Tamil", level: "Native" },
  { name: "English", level: "Fluent" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-24">
      <div className="mb-10">
        <span className="mb-2 inline-block rounded-full border border-neutral-800 px-4 py-1 text-sm font-medium text-orange-500">
          Get to know me
        </span>
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">About</h2>
      </div>

      <p className="mb-12 max-w-3xl text-lg leading-relaxed text-gray-700 md:text-xl">
        I'm an aspiring Computer Science Engineer with a strong interest in
        programming, web development, SQL, and cloud technologies. I enjoy
        solving problems, building front-end experiences, and continuously
        learning new tools and techniques to grow as a developer.
      </p>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-xl font-bold">Areas of Interest</h3>
          <ul className="space-y-3">
            {INTERESTS.map((interest) => (
              <li key={interest} className="flex items-center gap-3 text-lg text-gray-700">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                {interest}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold">Languages</h3>
          <ul className="space-y-4">
            {LANGUAGES.map((lang) => (
              <li
                key={lang.name}
                className="flex items-center justify-between rounded-xl bg-white px-6 py-4 shadow-sm ring-1 ring-neutral-200"
              >
                <span className="text-lg font-semibold">{lang.name}</span>
                <span className="text-sm font-medium text-orange-500">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}