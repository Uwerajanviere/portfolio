
const achievements = [
  {
    title: "IoT Training Certificate",
    issuer: "STES – 2023",
    description:
      "Successfully completed IoT training covering embedded systems, sensors, and connectivity protocols.",
    icon: "IoT",
    bg: "#e8f4f8",
  },
  {
    title: "Java Backend Apprenticeship",
    issuer: "She Can Code – 2026",
    description:
      "Completed an advanced Java backend apprenticeship building REST APIs and server-side applications.",
    icon: "Java",
    bg: "#fff8e1",
  },
  {
    title: "Data Analysis Apprenticeship",
    issuer: "She Code Africa – 2026",
    description:
      "Completed a data analysis apprenticeship, mastering Python-based data cleaning, analysis, and visualisation.",
    icon: "Data",
    bg: "#f0efff",
  },
];

const education = [
  {
    school: "University / Institution",
    degree: "Bachelor of Computer and Software Engineering",
    period: "2022 – 2026",
    description:
      "Pursuing a Bachelor's degree in Computer and Software Engineering, covering software development, algorithms, data structures, databases, and systems design.",
    details: [
      "Focus on software engineering principles and practices",
      "Hands-on projects in web and mobile development",
      "Strong foundation in algorithms and data structures",
    ],
    // ── Place your photo at: portfolio/public/profile.jpg ──
    // Then it will display here automatically.
    photo: "/profile.jpg",
    initials: "UJ",
    color: "#6C63FF",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-gray-50 dark:bg-[#111] py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">

        {/* Achievements */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Achievements And Certifications 
          </h2>
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-8">
            Achievements, certifications, and cool stuff I&apos;ve done
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((a) => (
              <div
                key={a.title}
                className="rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] overflow-hidden shadow-sm"
              >
                <div
                  className="h-32 flex items-center justify-center text-5xl"
                  style={{ backgroundColor: a.bg }}
                >
                  {a.icon}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {a.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-2">{a.issuer}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {a.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Education
          </h2>

          <div className="flex flex-col gap-8">
            {education.map((e) => (
              <div
                key={e.school}
                className="flex flex-col gap-4 border-b border-gray-200 dark:border-gray-700 pb-8"
              >
                <div className="flex items-center gap-4">
                  {/* Photo — uses GitHub avatar, falls back to initials */}
                  <div
                    className="w-16 h-16 rounded-full overflow-hidden border-2 shrink-0 relative"
                    style={{ borderColor: e.color }}
                  >
                    <div
                      className="absolute inset-0 flex items-center justify-center font-bold text-white text-sm"
                      style={{ backgroundColor: e.color }}
                    >
                      {e.initials}
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://avatars.githubusercontent.com/u/124252344?v=4"
                      alt="Uwera Janviere"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {e.school}
                    </h3>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {e.degree}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{e.period}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {e.description}
                </p>
                <ul className="list-disc list-inside text-sm text-gray-400 flex flex-col gap-1 pl-1">
                  {e.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
