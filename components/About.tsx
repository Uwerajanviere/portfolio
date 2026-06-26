export default function About() {
  return (
    <section id="about" className="bg-black text-white py-24">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Avatar placeholder */}
        <div className="flex justify-center">
          <div
            className="w-56 h-56 rounded-full flex items-center justify-center text-5xl font-bold text-white"
            style={{ backgroundColor: "#6C63FF" }}
          >
            YN
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I&apos;m a passionate developer with experience building modern web
            applications. I enjoy turning complex problems into simple, beautiful
            solutions.
          </p>
          <p className="text-gray-300 leading-relaxed">
            When I&apos;m not coding, you can find me exploring new technologies,
            contributing to open source, or enjoying a good book.
          </p>
          <div className="flex gap-6 mt-2">
            <div>
              <span className="text-3xl font-bold" style={{ color: "#6C63FF" }}>3+</span>
              <p className="text-sm text-gray-400 mt-1">Years Experience</p>
            </div>
            <div>
              <span className="text-3xl font-bold" style={{ color: "#6C63FF" }}>20+</span>
              <p className="text-sm text-gray-400 mt-1">Projects Done</p>
            </div>
            <div>
              <span className="text-3xl font-bold" style={{ color: "#6C63FF" }}>10+</span>
              <p className="text-sm text-gray-400 mt-1">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
