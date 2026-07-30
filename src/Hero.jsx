import "./App.css";

import React from "react";
/**
 * Hero Section
 * Combines the "Hello!" badge, name/title/objective text, and the
 * monogram visual block into one self-contained section.
 */

function HelloBadge() {
  return (
    <div className="relative mb-8">
      <div className="inline-block rounded-[30px] border border-neutral-800 bg-white px-6 py-2 shadow-sm">
        <span className="font-serif text-2xl italic">Hello!</span>
      </div>
      <div className="absolute -right-4 -top-6 h-10 w-10">
        <svg className="h-full w-full fill-none stroke-orange-500" viewBox="0 0 40 40">
          <path d="M5,35 Q15,10 35,5" strokeWidth="2" />
          <path d="M15,35 Q25,15 38,15" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <main id="top" className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-24">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <section className="flex flex-col items-start">
          <HelloBadge />
          <h2 className="mb-2 text-3xl font-semibold md:text-4xl">I am</h2>
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight md:text-7xl">
            Logeshwaran K
          </h1>
          <p className="mb-6 text-lg font-medium text-orange-500 md:text-xl">
            Aspiring Computer Science Engineer
          </p>
          <p className="mb-12 max-w-lg text-lg leading-relaxed text-gray-700 md:text-xl">
            Seeking to apply skills in programming, web development, SQL, and
            cloud technologies to contribute to organizational growth while
            continuously learning.
          </p>
          <a
            href="#contact"
            className="rounded-md bg-neutral-800 px-12 py-4 text-lg font-medium text-white shadow-md transition-all hover:bg-black"
          >
            Contact
          </a>
        </section>

        <section className="relative flex justify-center md:justify-end">
          <div
            className="relative flex aspect-[4/5] w-full max-w-md items-center justify-center overflow-hidden bg-orange-500 shadow-2xl"
            style={{ borderRadius: "80px" }}
          >
            <img
              src="./img/loki1.png"
              alt="Logeshwaran K"
              className="h-full w-full object-cover"
            />
          </div>
        </section>
      </div>
    </main>
  );
}