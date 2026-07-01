"use client";

export default function Projects() {
  const projects = [
    {
      title: "Skyline Electrical Website",
      desc: "Modern company website with smooth animations and responsive UI.",
      stack: ["Next", "TypeScript", "Tailwind", "Framer"],
      link: "https://skyline-lp.vercel.app/",
      img: "/src/projects/p2skyline.png",
      badge: "Featured",
    },
    {
      title: "ServixaOS Website",
      desc: "Modern business website with responsive design.",
      stack: ["React", "Tailwind", "JS"],
      link: "https://www.servixaos.com/",
      img: "/src/projects/p1servixaos.png",
    },
    {
      title: "Company Website",
      desc: "Improved UI/UX during internship.",
      stack: ["React", "CSS", "Git"],
      link: "https://www.contactcars.com/",
      img: "/src/projects/p3contact.png",
    },
    {
      title: "Real Estate App",
      desc: "Dynamic property listing system.",
      stack: ["React", "API", "Tailwind"],
      link: "#",
      img: "/projects/realestate.png",
    },
    {
      title: "E-commerce Page",
      desc: "Product page with cart functionality.",
      stack: ["React", "Context", "Strapi"],
      link: "#",
      img: "/projects/ecommerce.png",
    },
  ];

  return (
    <section
      id="projects"
      className="relative pt-16 pb-24 px-6 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* 🔥 Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 
                      w-175 h-175 
                      bg-blue-500/20 blur-[140px] rounded-full"
      />

      {/* 🔥 Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/70 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-400 mb-2">
            My Work
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">Featured Projects</h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden border border-white/10 
                         bg-white/5 backdrop-blur-xl
                         hover:scale-[1.03] transition-all duration-500"
            >
              {/* 🏆 Badge */}
              {project.badge && (
                <span
                  className="absolute top-4 left-4 z-20 
                                 bg-blue-500/90 text-xs px-3 py-1 rounded-full text-white shadow"
                >
                  {project.badge}
                </span>
              )}

              {/* 🖼 Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover 
                             group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* 🔥 Overlay */}
              <div
                className="absolute inset-0 
                              bg-linear-to-t from-black via-black/80 to-transparent 
                              opacity-0 group-hover:opacity-100 
                              transition duration-500 flex flex-col justify-end p-6"
              >
                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-300 mt-1">{project.desc}</p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2 py-1 bg-white/10 rounded text-white border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-sm text-blue-400 hover:underline"
                  >
                    Live Demo →
                  </a>

                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
