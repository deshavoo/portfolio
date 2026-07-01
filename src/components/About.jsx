export default function About() {
  const info = [
    { label: "Location", value: "New Cairo, Egypt 🇪🇬" },
    { label: "Education", value: "CS — Thebes Academy" },
    { label: "Graduated", value: "2024" },
    { label: "Internship", value: "Contact Company" },
    { label: "Currently", value: "Concentrix (Tech Support)" },
    { label: "Email", value: "mostafahadeer909@gmail.com" },
  ];

  return (
    <section
      id="about"
      className="relative pt-16 pb-24 px-6 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* 🔥 Glow (نفس الهيرو بالظبط) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 
                   w-150 h-150 
                   bg-blue-500/20 blur-[120px] rounded-full"
      />

      {/* 🔥 Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/70 to-black" />

      {/* 💎 Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-400 mb-2">
            Who I am
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* 🧠 Text */}
          <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
            <p>
              I'm{" "}
              <span className="text-white font-semibold">Mostafa Hadeer</span> —
              a Frontend Developer based in New Cairo, Egypt. I build modern,
              responsive, and high-performance web applications.
            </p>

            <p>
              I graduated in 2024 with a Computer Science degree and gained
              real-world experience through internship and hands-on projects
              using React and modern frontend tools.
            </p>

            <p>
              My focus is on crafting clean UI, smooth user experience, and
              scalable frontend architecture.
            </p>
          </div>

          {/* 📦 Info Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-6">
              Quick Info
            </h4>

            <div className="space-y-4">
              {info.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between text-sm border-b border-white/10 pb-2"
                >
                  <span className="text-gray-400">{item.label}</span>

                  <span className="font-medium text-blue-400">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
