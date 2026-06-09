export default function Skills({ darkMode }) {
  const skills = [
    {
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "JavaScript ES6+",
        "TypeScript",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Styling",
      items: [
        "Tailwind CSS",
        "Bootstrap",
        "SASS",
        "Figma",
        "Photoshop",
        "Illustrator",
      ],
    },
    {
      title: "State & Tools",
      items: ["Redux", "Context API", "Git", "GitHub", "Vercel"],
    },
    {
      title: "Other",
      items: ["React Native", "Flutter", "WordPress", "REST APIs"],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 px-6 transition-colors duration-300
        ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-blue-600 mb-2">
            What I use
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.title}
              className={`rounded-xl border p-6 transition-all duration-300 hover:scale-[1.02]
                ${
                  darkMode
                    ? "bg-gray-800 border-white/10"
                    : "bg-white border-black/10"
                }`}
            >
              <h3 className="text-sm uppercase tracking-widest text-blue-600 mb-4">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-3 py-1 rounded-full border transition
                      ${
                        darkMode
                          ? "border-white/10 text-gray-300 hover:border-blue-400 hover:text-blue-400"
                          : "border-black/10 text-gray-700 hover:border-blue-600 hover:text-blue-600"
                      }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
