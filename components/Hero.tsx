import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-white pt-16"
    >
      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col gap-6">
        <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#6C63FF" }}>
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-black leading-tight">
          Your Name
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-500">
          Full-Stack Developer
        </h2>
        <p className="max-w-xl text-gray-600 text-base leading-relaxed">
          I build clean, fast, and accessible web applications. Passionate about
          great user experiences and solid code.
        </p>

        <div className="flex flex-wrap gap-4 mt-2">
          <a
            href="#projects"
            className="px-6 py-3 rounded-md text-white font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#6C63FF" }}
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-md border border-black text-black font-medium hover:bg-black hover:text-white transition-colors"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
