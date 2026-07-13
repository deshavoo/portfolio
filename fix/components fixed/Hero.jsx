import Logo from "./Logo";

export default function Hero() {
  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux",
    "Git",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-10 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 w-130 h-130 -translate-x-1/2 -translate-y-1/2 bg-blue-500/20 blur-[140px] rounded-full" />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/70 to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Logo />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-green-400/20 bg-green-400/10 text-green-400 text-xs uppercase tracking-[3px] font-semibold mb-8">
          🚀 Open to Frontend Opportunities
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Frontend
          <br />
          <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            React Developer
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-8 mb-10">
          I'm <span className="text-white font-semibold">Mostafa Hadeer</span>,
          a{" "}
          <span className="text-blue-400 font-semibold">
            Frontend React Developer
          </span>{" "}
          with{" "}
          <span className="text-white font-semibold">
            2+ years of experience
          </span>{" "}
          and a strong{" "}
          <span className="text-blue-400 font-semibold">Computer Science</span>{" "}
          background. I build fast, scalable, responsive, and user-friendly web
          applications using React, Next.js, TypeScript, and modern frontend
          technologies.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="mailto:mostafahadeer909@gmail.com"
            className="px-7 py-3 rounded-xl font-semibold text-black bg-linear-to-r from-blue-400 to-cyan-400 hover:scale-105 transition duration-300 shadow-lg shadow-blue-500/20"
          >
            Get in Touch
          </a>

          <a
            href="/CV.pdf"
            download
            className="px-7 py-3 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Download CV
          </a>

          <a
            href="https://github.com/deshavoo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-xl border border-white/10 text-white hover:border-blue-400 hover:text-blue-400 transition duration-300"
          >
            GitHub →
          </a>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur text-sm text-gray-300 hover:border-blue-400 hover:text-blue-300 transition"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 max-w-xl mx-auto border border-white/10 rounded-2xl bg-white/5 backdrop-blur-lg overflow-hidden">
          <div className="py-6 border-r border-white/10">
            <h3 className="text-3xl font-bold text-blue-400">2+</h3>
            <p className="text-xs text-gray-400 mt-2 uppercase tracking-wider">
              Years Experience
            </p>
          </div>

          <div className="py-6 border-r border-white/10">
            <h3 className="text-3xl font-bold text-blue-400">6+</h3>
            <p className="text-xs text-gray-400 mt-2 uppercase tracking-wider">
              Projects Completed
            </p>
          </div>

          <div className="py-6">
            <h3 className="text-3xl font-bold text-blue-400">20+</h3>
            <p className="text-xs text-gray-400 mt-2 uppercase tracking-wider">
              Technologies
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 mt-2 rounded-full bg-blue-400"></div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-b from-transparent to-[#0a0a0a]" />
    </section>
  );
}
