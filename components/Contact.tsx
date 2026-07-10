import { Mail, MapPin } from "lucide-react";

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

export default function Contact() {
  return (
    <section id="contact" className="bg-white dark:bg-[#0f0f0f] py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Reach Out to me!
          </h2>
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
            Discuss a project or just want to say hi? My inbox is open for all.
          </p>

          <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
            &quot;I&apos;m a Java backend and desktop application developer,
            passionate about building robust systems with Spring Boot and
            JavaFX. Currently expanding my skills in web development with
            Angular and React.&quot;
          </p>

          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
            <MapPin size={16} />
            Kigali / Rwanda
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span
              className="w-2 h-2 rounded-full bg-green-400 inline-block"
            />
            Open for opportunities: <span className="font-semibold text-green-500">Yes</span>
          </div>

          {/* Social icons */}
          <div className="flex gap-3 mt-2">
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
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Right — Avatar */}
        <div className="flex justify-center md:justify-end">
          <div
            className="w-52 h-52 rounded-full overflow-hidden border-4 shadow-lg"
            style={{ borderColor: "#6C63FF" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://avatars.githubusercontent.com/u/124252344?v=4"
              alt="Uwera Janviere"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
