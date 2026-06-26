"use client";

import { useState } from "react";

const links = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold tracking-tight">
          <span className="text-black">dev</span>
          <span style={{ color: "#6C63FF" }}>.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="text-sm font-medium px-4 py-2 rounded-md text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#6C63FF" }}
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-black transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-black transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-black transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4">
          <ul className="flex flex-col gap-4 mt-4">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-sm font-medium text-gray-600 hover:text-black"
                  onClick={() => setOpen(false)}
                >
                  {l}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                className="inline-block text-sm font-medium px-4 py-2 rounded-md text-white"
                style={{ backgroundColor: "#6C63FF" }}
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
