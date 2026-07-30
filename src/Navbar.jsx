import { useState } from "react";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative bg-neutral-800 px-6 py-4 text-white shadow-md md:px-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-orange-500">Logeshwaran</h1>

        {/* Desktop links — hidden on mobile, shown from md: up */}
        <ul className="hidden gap-6 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-orange-400">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button — shown only on mobile, hidden from md: up */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-white transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <ul className="mt-4 flex flex-col gap-4 border-t border-neutral-700 pt-4 md:hidden">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block hover:text-orange-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}