const techStack = [
  { name: "HTML5",      color: "#E44D26", icon: "📄" },
  { name: "CSS3",       color: "#1572B6", icon: "🎨" },
  { name: "Bootstrap",  color: "#7952B3", icon: "B"  },
  { name: "JavaScript", color: "#F7DF1E", icon: "JS", dark: true },
  { name: "TypeScript", color: "#3178C6", icon: "TS" },
  { name: "Angular",    color: "#DD0031", icon: "A"  },
  { name: "React.js",   color: "#61DAFB", icon: "⚛", dark: true },
  { name: "Next.js",    color: "#111111", icon: "N"  },
  { name: "Java",       color: "#007396", icon: "☕" },
  { name: "Python",     color: "#3776AB", icon: "🐍" },
  { name: "MongoDB",    color: "#47A248", icon: "🍃" },
  { name: "PostgreSQL", color: "#336791", icon: "🐘" },
  { name: "Git",        color: "#F05032", icon: "⎇"  },
  { name: "Figma",      color: "#F24E1E", icon: "✦"  },
];

const proficiency = [
  { label: "Frontend / Design", value: 88 },
  { label: "Backend", value: 78 },
  { label: "Programming", value: 80 },
  { label: "Tools", value: 72 },
  { label: "DevOps", value: 60 },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white dark:bg-[#0f0f0f] py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        {/* Left — illustration */}
        <div className="flex flex-col items-center justify-start gap-4">
          {/* Coder SVG */}
          <div
            className="w-64 h-64 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: "#f5f5ff" }}
          >
            <svg viewBox="0 0 180 180" className="w-52 h-52" fill="none">
              {/* Speech bubble */}
              <rect x="10" y="10" width="70" height="40" rx="8" fill="#6C63FF" />
              <text x="45" y="35" textAnchor="middle" fill="white" fontSize="14" fontFamily="monospace">&lt;/&gt;</text>
              <polygon points="25,50 35,60 45,50" fill="#6C63FF" />
              {/* Desk */}
              <rect x="20" y="110" width="140" height="8" rx="4" fill="#333" />
              <rect x="30" y="118" width="8" height="30" rx="3" fill="#333" />
              <rect x="142" y="118" width="8" height="30" rx="3" fill="#333" />
              {/* Laptop */}
              <rect x="45" y="78" width="80" height="32" rx="4" fill="#6C63FF" />
              <rect x="35" y="108" width="100" height="5" rx="2" fill="#4a41cc" />
              {/* Screen glow */}
              <rect x="50" y="82" width="70" height="24" rx="2" fill="#8b85ff" opacity="0.5" />
              {/* Person body */}
              <circle cx="90" cy="52" r="14" fill="#FFD166" />
              <rect x="76" y="66" width="28" height="30" rx="6" fill="#333" />
              {/* Cat */}
              <ellipse cx="145" cy="135" rx="18" ry="12" fill="#555" />
              <circle cx="138" cy="130" r="6" fill="#555" />
              <polygon points="135,124 138,130 141,124" fill="#555" />
              <polygon points="141,124 144,130 147,124" fill="#555" />
            </svg>
          </div>
        </div>

        {/* Right — What I do */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              What I do
            </h2>
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
              Passionate full stack developer who wants to explore every tech
              stack
            </p>
          </div>

          {/* Tech icons grid */}
          <div className="grid grid-cols-7 gap-4">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-1">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold shadow-sm"
                  style={{
                    backgroundColor: tech.color,
                    color: tech.dark ? "#333" : "white",
                  }}
                >
                  {tech.icon}
                </div>
                <span className="text-[9px] text-gray-400 text-center leading-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Bullet points */}
          <ul className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
            <li>⚡ Build interactive front-end UIs with React, Angular, Next.js, and TypeScript</li>
            <li>⚡ Backend development with Java, Python, MongoDB and PostgreSQL</li>
            <li>⚡ Integration with third-party services like Firebase and Supabase</li>
            <li>⚡ Proficient in JavaScript, TypeScript, Java, Python and modern tooling</li>
          </ul>
        </div>
      </div>

      {/* Proficiency bars */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Proficiency
        </h2>
        <div className="flex flex-col gap-5 max-w-3xl">
          {proficiency.map((item) => (
            <div key={item.label}>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                {item.label}
              </p>
              <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${item.value}%`, backgroundColor: "#8b85ff" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
