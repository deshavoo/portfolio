import Logo from "./Logo";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-10 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 w-125 h-125 -translate-x-1/2 -translate-y-1/2 bg-blue-500/20 blur-[120px] rounded-full" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/70 to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Logo />
        </div>

        {/* Badge */}
        <div className="inline-block text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full border border-white/10 bg-white/5 text-green-400 mb-6">
          ⚡ Available for work
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Frontend <br />
          <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Developer.
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          I'm <span className="text-white font-semibold">Mostafa Hadeer</span> —
          I build fast, responsive, and modern web applications using React &
          frontend tools.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="mailto:mostafahadeer909@gmail.com"
            className="px-6 py-3 rounded-xl font-semibold text-black text-sm 
            bg-linear-to-r from-blue-400 to-cyan-400 
            hover:scale-105 transition shadow-lg"
          >
            Get in Touch
          </a>

          <a
            href="https://github.com/deshavoo"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl font-semibold text-sm border border-white/10 
            text-white hover:border-blue-400 hover:text-blue-400 
            hover:scale-105 transition"
          >
            GitHub →
          </a>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-10 pt-8 border-t border-white/10">
          <div>
            <div className="text-3xl font-bold text-blue-400">2+</div>
            <div className="text-xs mt-1 text-gray-400">Years experience</div>
          </div>

          <div>
            <div className="text-3xl font-bold text-blue-400">4+</div>
            <div className="text-xs mt-1 text-gray-400">Projects built</div>
          </div>

          <div>
            <div className="text-3xl font-bold text-blue-400">10+</div>
            <div className="text-xs mt-1 text-gray-400">Technologies</div>
          </div>
        </div>
      </div>

      {/* 🔥 Smooth Transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-b from-transparent to-[#0a0a0a]" />
    </section>
  );
}
