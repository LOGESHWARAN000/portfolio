import React, { useState } from "react";
import Reveal from "./Reveal";

// Replace this with the Form ID Formspree gives you (e.g. "xyzabcde")
const FORMSPREE_FORM_ID = "mnjebevq";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-24">
      <Reveal>
        <div className="mb-10">
          <span className="mb-2 inline-block rounded-full border border-neutral-800 px-4 py-1 text-sm font-medium text-orange-500">
            Get in Touch
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Contact</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-orange-500 p-10 text-white shadow-md">
            <h3 className="mb-6 text-2xl font-bold">Let's connect</h3>
            <div className="space-y-5">
              <a href="tel:+919943915199" className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-white" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span className="text-lg font-medium group-hover:underline">+91 99439 15199</span>
              </a>
              <a href="mailto:logeshwaran31032006@gmail.com" className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-white" strokeWidth="2">
                    <path d="M4 4h16v16H4z" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                </span>
                <span className="break-all text-lg font-medium group-hover:underline">
                  logeshwaran31032006@gmail.com
                </span>
              </a>
            </div>
          </div>

          <form
            className="rounded-2xl border border-neutral-200 p-8 shadow-sm"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full rounded-md border border-neutral-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-md border border-neutral-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Say hello..."
                required
                className="w-full rounded-md border border-neutral-300 px-4 py-3 focus:border-orange-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-md bg-neutral-800 px-8 py-3 text-lg font-medium text-white shadow-md transition-all hover:bg-black disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="mt-4 text-sm font-medium text-green-600">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm font-medium text-red-600">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </Reveal>
    </section>
  );
}