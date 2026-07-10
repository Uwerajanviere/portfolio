"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Skills", href: "#skills" },
  { label: "Work Experiences", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Resume", href: "https://drive.google.com/file/d/1O88I_47FCAxyJX77SjXzNDK6cN0h9tP7/view?usp=sharing" },
  { label: "Contact Me", href: "#contact" },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#0f0f0f]/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Script logo */}
        <a href="#hero" className="flex items-center gap-1 select-none">
          <span className="text-gray-400 text-lg font-mono">&lt;</span>
          <span
            className="font-script text-2xl"
            style={{ color: "#6C63FF" }}
          >
            Janviere
          </span>
          <span className="text-gray-400 text-lg font-mono">/&gt;</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}

          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="relative w-12 h-6 rounded-full transition-colors flex items-center px-1"
            style={{ backgroundColor: dark ? "#6C63FF" : "#e5e7eb" }}
            aria-label="Toggle dark mode"
          >
            <span
              className="w-5 h-5 rounded-full bg-white shadow transition-transform flex items-center justify-center text-xs"
              style={{ transform: dark ? "translateX(22px)" : "translateX(0)" }}
            >
              {dark ? "" : ""}
            </span>
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-gray-700 dark:bg-gray-200 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-gray-700 dark:bg-gray-200 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-gray-700 dark:bg-gray-200 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0f0f0f] border-t border-gray-100 dark:border-gray-800 px-6 pb-5">
          <ul className="flex flex-col gap-4 mt-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => setDark(!dark)}
                className="text-sm text-gray-600 dark:text-gray-300"
              >
                {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
