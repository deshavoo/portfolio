export default function Projects({ darkMode }) {
  const projects = [
    {
      title: "ServixaOS Website",
      desc: "Developed a modern business website with responsive design, reusable components, and smooth user experience. Integrated interactive features like contact forms and live chat, and deployed using Vercel with custom domain.",
      stack: ["React", "Tailwind", "JavaScript", "Vercel"],
      link: "https://www.servixaos.com/",
    },
    {
      title: "Company Website (Internship)",
      desc: "Contributed to building and improving the official company website during internship. Implemented responsive UI, fixed UX issues, and followed production-level development workflows using Git.",
      stack: ["React", "JavaScript", "CSS", "Git"],
      link: "https://www.contactcars.com/",
    },
    {
      title: "Real Estate Web App",
      desc: "Built a scalable real estate application with dynamic property listings and filtering system. Focused on responsive design, performance, and clean UI architecture.",
      stack: ["React", "Tailwind", "API"],
      link: "#",
    },
    {
      title: "E-commerce Product Page",
      desc: "Developed a dynamic product page with filtering, search, and cart functionality using Context API. Integrated Strapi CMS for managing product data.",
      stack: ["React", "Context API", "Strapi", "Bootstrap"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className={`py-20 px-6 transition-colors duration-300
        ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-blue-600 mb-2">
            My Work
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`rounded-xl border p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg
                ${
                  darkMode
                    ? "bg-gray-800 border-white/10"
                    : "bg-gray-50 border-black/10"
                }`}
            >
              {/* Title */}
              <h3 className="text-lg font-bold mb-2 text-blue-600">
                {project.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed mb-4
                  ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                {project.desc}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className={`text-xs px-3 py-1 rounded-full border
                      ${
                        darkMode
                          ? "border-white/10 text-gray-300"
                          : "border-black/10 text-gray-600"
                      }`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Button */}
              <a
                href={project.link}
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
