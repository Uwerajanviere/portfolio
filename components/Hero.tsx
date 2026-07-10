function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-white dark:bg-[#0f0f0f] pt-16"
    >
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-snug">
            Hi all, I&apos;m Uwera Janviere 
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            A passionate Full Stack Software Developer 🚀 with experience
            building Java backend systems and JavaFX desktop applications.
            I work with Java / Spring Boot / JavaFX / Angular / React.js and
            other cool libraries and frameworks.
          </p>

          {/* Social icons */}
          <div className="flex gap-3 mt-1">
            <a
              href="https://github.com/Uwerajanviere"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              style={{ backgroundColor: "#0077b5" }}
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href="mailto:janviereuwera43@gmail.com"
              className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              style={{ backgroundColor: "#EA4335" }}
              aria-label="Email"
            >
              <MailIcon />
            </a>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#contact"
              className="px-6 py-3 rounded text-white font-semibold text-sm tracking-wider uppercase transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#6C63FF" }}
            >
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1O88I_47FCAxyJX77SjXzNDK6cN0h9tP7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded text-white font-semibold text-sm tracking-wider uppercase transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#6C63FF" }}
            >
              Download My Resume
            </a>
          </div>
        </div>

        {/* Right — illustration placeholder */}
        <div className="flex justify-center">
          <div
            className="w-72 h-72 md:w-96 md:h-96 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#f0efff" }}
          >
            {/* SVG developer illustration */}
            <svg viewBox="0 0 200 200" className="w-64 h-64" fill="none">
              {/* Target/bullseye */}
              <circle cx="110" cy="100" r="55" stroke="#6C63FF" strokeWidth="2" fill="none" />
              <circle cx="110" cy="100" r="35" stroke="#6C63FF" strokeWidth="2" fill="none" />
              <circle cx="110" cy="100" r="15" stroke="#6C63FF" strokeWidth="2" fill="none" />
              {/* Arrow */}
              <line x1="55" y1="55" x2="100" y2="96" stroke="#6C63FF" strokeWidth="3" strokeLinecap="round" />
              <polygon points="100,96 90,85 105,88" fill="#6C63FF" />
              {/* Stand */}
              <line x1="110" y1="155" x2="90" y2="180" stroke="#333" strokeWidth="3" strokeLinecap="round" />
              <line x1="110" y1="155" x2="130" y2="180" stroke="#333" strokeWidth="3" strokeLinecap="round" />
              <line x1="80" y1="180" x2="145" y2="180" stroke="#333" strokeWidth="3" strokeLinecap="round" />
              {/* Figure */}
              <circle cx="60" cy="60" r="14" fill="#FFD166" />
              <rect x="48" y="74" width="24" height="36" rx="5" fill="#6C63FF" />
              <line x1="48" y1="82" x2="30" y2="100" stroke="#6C63FF" strokeWidth="6" strokeLinecap="round" />
              <line x1="72" y1="82" x2="90" y2="95" stroke="#6C63FF" strokeWidth="6" strokeLinecap="round" />
              <line x1="52" y1="110" x2="45" y2="135" stroke="#333" strokeWidth="6" strokeLinecap="round" />
              <line x1="68" y1="110" x2="75" y2="135" stroke="#333" strokeWidth="6" strokeLinecap="round" />
              {/* Cloud */}
              <ellipse cx="148" cy="50" rx="20" ry="12" fill="#c4c0ff" />
              <ellipse cx="135" cy="56" rx="14" ry="10" fill="#c4c0ff" />
              <ellipse cx="160" cy="57" rx="12" ry="9" fill="#c4c0ff" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
