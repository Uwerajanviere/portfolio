const experiences = [
  {
    company: "She Can Code",
    color: "#8B2FC9",
    role: "Advanced Java Backend Apprenticeship",
    type: "Apprenticeship",
    period: "Jan 2026 – May 2026",
    description:
      "Completed an intensive apprenticeship focused on advanced Java backend development, building robust server-side applications and REST APIs.",
    initials: "SCC",
  },
  {
    company: "She Code Africa",
    color: "#E91E8C",
    role: "Data Analysis Apprenticeship",
    type: "Apprenticeship",
    period: "Dec 2025 – May 2026",
    description:
      "Apprenticeship programme focused on data analysis — collecting, cleaning, and visualising data to extract actionable insights using Python and modern data tools.",
    initials: "SCA",
  },
  {
    company: "STES",
    color: "#1a5eb8",
    role: "IoT Trainee",
    type: "Training",
    period: "Jan 2023 – Jun 2023",
    description:
      "Trained in Internet of Things technologies, working with embedded systems, sensors, and connectivity protocols to build IoT solutions.",
    initials: "STES",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-50 dark:bg-[#111] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Experiences
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1a1a1a] shadow-sm"
            >
              {/* Colored header */}
              <div
                className="h-24 flex items-center justify-center"
                style={{ backgroundColor: exp.color }}
              >
                <h3 className="text-white font-semibold text-lg text-center px-4">
                  {exp.company}
                </h3>
              </div>

              {/* Logo circle */}
              <div className="flex justify-center -mt-8 mb-4">
                <div
                  className="w-16 h-16 rounded-full border-4 border-white dark:border-[#1a1a1a] flex items-center justify-center font-bold text-white text-xs shadow"
                  style={{ backgroundColor: exp.color }}
                >
                  {exp.initials}
                </div>
              </div>

              <div className="px-5 pb-6 flex flex-col gap-2 text-center">
                {/* Type badge */}
                <span
                  className="self-center text-[10px] font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: exp.color + "99" }}
                >
                  {exp.type}
                </span>
                <h4 className="font-semibold text-gray-900 dark:text-white leading-snug">
                  {exp.role}
                </h4>
                <p className="text-xs text-gray-400">{exp.period}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-1">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
