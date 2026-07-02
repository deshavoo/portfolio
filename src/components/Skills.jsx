export default function Skills() {
  const skills = [
    {
      title: "Frontend",
      items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3"],
    },
    {
      title: "Styling",
      items: [
        "Tailwind",
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
    <section id="skills" className="relative pt-16 pb-24 px-6  overflow-hidden">
      {/* 🔥 Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 
                      w-150 h-150 
                      bg-blue-500/20 blur-[120px] rounded-full"
      />

      {/* 🔥 Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/70 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-400 mb-2">
            What I use
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">Skills</h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group) => (
            <div
              key={group.title}
              className="group rounded-2xl border border-white/10 
                         bg-white/5 backdrop-blur-xl p-6
                         transition-all duration-300 
                         hover:scale-[1.04] hover:border-blue-400/40"
            >
              {/* Title */}
              <h3 className="text-xs uppercase tracking-widest text-blue-400 mb-4">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 
                               text-gray-300 transition
                               group-hover:border-blue-400/40 
                               group-hover:text-blue-300"
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
