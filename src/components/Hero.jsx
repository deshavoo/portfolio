import Logo from "./Logo";
export default function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center px-6 pt-20 transition-colors duration-300
        ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <div className="max-w-4xl w-full text-center">
        <div className="max-w-4xl w-full text-center">
          <Logo />
        </div>
        {/* Badge */}
        <div
          className={`inline-block text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full border mb-6
            ${
              darkMode
                ? "bg-gray-800 border-white/10 text-green-400"
                : "bg-gray-100 border-black/10 text-green-600"
            }`}
        >
          ⚡ Available for work
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Frontend <br />
          <span className="text-blue-600">Developer.</span>
        </h1>

        {/* Description */}
        <p
          className={`text-lg max-w-2xl mx-auto mb-10 leading-relaxed
            ${darkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          I'm <span className="font-semibold">Mostafa Hadeer</span> — I build
          fast, responsive, and modern web applications using React & frontend
          tools.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="mailto:mostafahadeer909@gmail.com"
            className="px-6 py-3 rounded-lg font-semibold text-black text-sm transition hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #00f5a0, #00c4f0)",
            }}
          >
            Get in Touch
          </a>

          <a
            href="https://github.com/deshavoo"
            target="_blank"
            rel="noreferrer"
            className={`px-6 py-3 rounded-lg font-semibold text-sm border transition hover:scale-105
              ${
                darkMode
                  ? "border-white/10 text-white hover:border-green-400 hover:text-green-400"
                  : "border-black/10 text-gray-900 hover:border-green-600 hover:text-green-600"
              }`}
          >
            GitHub →
          </a>
        </div>

        {/* Stats */}
        <div
          className={`flex justify-center gap-10 pt-8 border-t
            ${darkMode ? "border-white/10" : "border-black/10"}`}
        >
          <div>
            <div className="text-3xl font-bold text-blue-600">2+</div>
            <div className="text-xs mt-1 text-gray-500">Years experience</div>
          </div>

          <div>
            <div className="text-3xl font-bold text-blue-600">4+</div>
            <div className="text-xs mt-1 text-gray-500">Projects built</div>
          </div>

          <div>
            <div className="text-3xl font-bold text-blue-600">10+</div>
            <div className="text-xs mt-1 text-gray-500">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
}
