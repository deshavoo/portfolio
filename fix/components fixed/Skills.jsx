export default function Skills() {
  const skills = [
    {
      title: "Frontend",
      level: 95,
      items: [
        "React",
        "Next.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Responsive Design",
        "Component Architecture",
      ],
    },
    {
      title: "Styling",
      level: 90,
      items: [
        "Tailwind CSS",
        "Bootstrap",
        "SASS",
        "Material UI",
        "Figma",
        "Photoshop",
        "Illustrator",
      ],
    },
    {
      title: "State & Tools",
      level: 90,
      items: [
        "Redux Toolkit",
        "Context API",
        "Git",
        "GitHub",
        "Vercel",
        "VS Code",
        "npm",
        "Yarn",
      ],
    },
    {
      title: "Backend & APIs",
      level: 80,
      items: [
        "REST APIs",
        "Axios",
        "Fetch API",
        "JSON",
        "Authentication",
        "Firebase",
        "Node.js Basics",
      ],
    },
    {
      title: "Computer Science",
      level: 88,
      items: [
        "Data Structures",
        "Algorithms",
        "Object-Oriented Programming",
        "Problem Solving",
        "Database Fundamentals",
        "Software Engineering",
        "Computer Networks",
      ],
    },
    {
      title: "Operating Systems & IT",
      level: 85,
      items: [
        "Windows",
        "Linux",
        "Operating Systems",
        "Computer Hardware",
        "Troubleshooting",
        "Networking Basics",
        "TCP/IP",
        "IT Support",
      ],
    },
  ];

  return (
    <section id="skills" className="relative pt-20 pb-28 px-6 overflow-hidden">
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2
        w-150 h-150
        bg-blue-500/20 blur-[140px] rounded-full"
      />

      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/80 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-blue-400 text-sm mb-3">
            What I Use
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Skills & Technologies
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-7">
            My expertise covers modern frontend development, UI technologies,
            software engineering fundamentals, and strong knowledge of computer
            systems and IT infrastructure.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.title}
              className="group rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              p-7
              transition-all duration-500
              hover:-translate-y-2
              hover:border-blue-400/40
              hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
            >
              {/* Title */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="uppercase tracking-wider text-blue-400 text-sm font-semibold">
                  {group.title}
                </h3>

                <span className="text-xs text-gray-400">{group.level}%</span>
              </div>

              {/* Progress */}
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mb-6">
                <div
                  className="h-full rounded-full bg-linear-to-r from-blue-500 to-cyan-400 transition-all duration-700"
                  style={{ width: `${group.level}%` }}
                />
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="
                    px-3 py-2
                    rounded-full
                    text-sm
                    border border-white/10
                    bg-white/5
                    text-gray-300
                    transition-all duration-300
                    hover:bg-blue-500/15
                    hover:text-blue-300
                    hover:border-blue-400/50
                    hover:scale-105"
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
