import React from "react";

const EDUCATION = [
  {
    school: "Annai Vailankanni College of Engineering",
    degree: "B.E. Computer Science and Engineering",
    meta: "CGPA: 7.28",
    years: "2023 – 2027",
  },
  {
    school: "Government Higher Secondary School",
    degree: "Higher Secondary (Class XII)",
    meta: "Percentage: 60.5%",
    years: "2022 – 2023",
  },
];

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-24">
      <div className="mb-10">
        <span className="mb-2 inline-block rounded-full border border-neutral-800 px-4 py-1 text-sm font-medium text-orange-500">
          Background
        </span>
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Education</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {EDUCATION.map((edu) => (
          <div
            key={edu.school}
            className="rounded-2xl border border-neutral-200 p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <p className="mb-1 text-sm font-medium text-orange-500">{edu.years}</p>
            <h3 className="mb-2 text-xl font-bold">{edu.school}</h3>
            <p className="mb-1 text-gray-700">{edu.degree}</p>
            <p className="text-sm text-gray-500">{edu.meta}</p>
          </div>
        ))}
      </div>
    </section>
  );
}