export default function About({ darkMode }) {
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
      className={`py-20 px-6 transition-colors duration-300
        ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-blue-600 mb-2">
            Who I am
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Text */}
          <div className="space-y-4 leading-relaxed">
            <p>
              I'm a <span className="font-semibold">Frontend Developer</span>{" "}
              based in New Cairo, Egypt. I graduated from Thebes Academy with a
              Bachelor's in Computer Science in 2024.
            </p>

            <p>
              I completed a 6-month frontend program at{" "}
              <span className="font-semibold">Eraa Soft</span> and gained real
              experience during my internship at{" "}
              <span className="font-semibold">Contact Company</span> building
              React-based interfaces.
            </p>

            <p>
              I enjoy turning ideas into clean, responsive and user-friendly web
              applications.
            </p>
          </div>

          {/* Info Card */}
          <div
            className={`rounded-xl border p-6 transition-colors duration-300
              ${
                darkMode
                  ? "bg-gray-800 border-white/10"
                  : "bg-white border-black/10"
              }`}
          >
            <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
              Quick Info
            </h4>

            <div className="space-y-3">
              {info.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between text-sm border-b last:border-b-0 pb-2
                    border-gray-200 dark:border-white/10"
                >
                  <span
                    className={darkMode ? "text-gray-400" : "text-gray-500"}
                  >
                    {item.label}
                  </span>

                  <span className="font-medium text-blue-600">
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
