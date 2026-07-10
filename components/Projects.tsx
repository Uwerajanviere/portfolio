import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

// ── Pinned Java Projects (from GitHub profile) ─────────────────────────────
const pinnedProjects = [
  {
    name: "HospitalManagement",
    title: "Hospital Management System",
    description:
      "Hospital Management System using Java and Spring Core. Manages patients, doctors, appointments and hospital records with clean layered architecture.",
    tags: ["Java", "Spring Core", "OOP", "Backend"],
    github: "https://github.com/Uwerajanviere/HospitalManagement",
    emoji: "🏥",
    bg: "#e8f4f8",
  },
  {
    name: "neotrack_backend",
    title: "NeoTrack Backend",
    description:
      "Backend system built in Java, providing REST APIs and business logic for the NeoTrack application. Focuses on clean API design and service layers.",
    tags: ["Java", "REST API", "Backend", "Spring"],
    github: "https://github.com/Uwerajanviere/neotrack_backend",
    emoji: "📡",
    bg: "#e8f5e9",
  },
  {
    name: "student-management-system",
    title: "Student Management System",
    description:
      "A JavaFX desktop app for managing students using PostgreSQL and JDBC. Built with Java 21 and Maven following MVC architecture.",
    tags: ["Java 21", "JavaFX", "PostgreSQL", "JDBC", "MVC"],
    github: "https://github.com/Uwerajanviere/student-management-system",
    emoji: "🎓",
    bg: "#f3e5f5",
  },
  {
    name: "inventory-management-system",
    title: "Inventory Management System",
    description:
      "Java 21 + JavaFX + JDBC + PostgreSQL desktop app for inventory tracking with full CRUD operations and a clean UI.",
    tags: ["Java 21", "JavaFX", "PostgreSQL", "JDBC"],
    github: "https://github.com/Uwerajanviere/inventory-management-system",
    emoji: "📦",
    bg: "#fff8e1",
  },
  {
    name: "voting-app",
    title: "Voting App",
    description:
      "A Java-based voting application implementing secure ballot management, candidate registration, and result tallying.",
    tags: ["Java", "OOP", "Backend", "Security"],
    github: "https://github.com/Uwerajanviere/voting-app",
    emoji: "🗳️",
    bg: "#fce4ec",
  },
  {
    name: "SheCanCODE Capstone",
    title: "SheCanCODE Capstone — Assessment Platform",
    description:
      "Capstone project built during the She Can Code Advanced Java Backend apprenticeship. An assessment platform showcasing full backend development skills.",
    tags: ["Java", "Spring Boot", "Capstone", "She Can Code"],
    github: "https://github.com/Uwerajanviere/SheCanCODE_Capstone_Projects",
    emoji: "🏆",
    bg: "#f0efff",
  },
];

// ── Other notable projects ──────────────────────────────────────────────────
const otherProjects = [
  {
    name: "authLab",
    description: "Spring Boot auth lab exploring JWT, secure login, and role-based access control.",
    language: "Java",
    github: "https://github.com/Uwerajanviere/authLab",
  },
  {
    name: "gradeManager",
    description: "Java app for tracking, calculating, and reporting student grades across multiple courses.",
    language: "Java",
    github: "https://github.com/Uwerajanviere/gradeManager",
  },
  {
    name: "Functional-Calculator",
    description: "Java calculator using BiFunction lambdas, method references, and functional programming patterns.",
    language: "Java",
    github: "https://github.com/Uwerajanviere/Functional-Calculator-with-BiFunction-Lambdas",
  },
  {
    name: "govTech-System",
    description: "Java government tech system with citizen record management and service workflow processing.",
    language: "Java",
    github: "https://github.com/Uwerajanviere/govTech-Syste",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white dark:bg-[#0f0f0f] py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">

        {/* ── Pinned / Featured Projects ── */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Featured Projects
          </h2>
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-8">
            Pinned Java projects from my GitHub profile
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {pinnedProjects.map((p) => (
              <div
                key={p.name}
                className="rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-[#1a1a1a] flex flex-col"
              >
                {/* Coloured preview */}
                <div
                  className="h-32 flex items-center justify-center text-5xl"
                  style={{ backgroundColor: p.bg }}
                >
                  {p.emoji}
                </div>

                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 text-xs font-semibold text-white py-2 px-4 rounded transition-opacity hover:opacity-80 mt-auto"
                    style={{ backgroundColor: "#6C63FF" }}
                  >
                    <GithubIcon size={13} />
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Other Java Projects ── */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            More Java Projects
          </h2>
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-8">
            Other open source work on my GitHub
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {otherProjects.map((p) => (
              <div
                key={p.name}
                className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:border-purple-300 dark:hover:border-purple-500 hover:shadow-sm transition-all bg-white dark:bg-[#1a1a1a] flex flex-col gap-3"
              >
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200 font-semibold text-sm">
                  <GithubIcon size={16} />
                  {p.name}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                  {p.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="flex items-center gap-1.5 text-xs text-gray-400">
                    <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: "#007396" }} />
                    {p.language}
                  </span>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <GithubIcon size={13} /> View Code
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <a
              href="https://github.com/Uwerajanviere"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded text-white font-semibold text-sm tracking-widest uppercase hover:opacity-80 transition-opacity"
              style={{ backgroundColor: "#6C63FF" }}
            >
              All Projects on GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
