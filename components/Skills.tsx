const skills = [
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React / Next.js", level: 88 },
  { name: "Node.js", level: 80 },
  { name: "CSS / Tailwind", level: 85 },
  { name: "Git & GitHub", level: 82 },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">Skills</h2>
        <p className="text-gray-500 mb-12">Technologies I work with</p>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-black">{skill.name}</span>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${skill.level}%`, backgroundColor: "#6C63FF" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
