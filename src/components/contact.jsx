"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setLoading(false);
          alert("Something went wrong ❌");
        }
      );
  };
  return (
    <section
      id="contact"
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
            Contact
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">Let's Connect</h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Got a project in mind? I'm open to freelance work, internships, and
            full-time frontend roles.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* 💎 Info Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>

            <p>
              📧 Email:{" "}
              <a
                href="mailto:mostafahadeer909@gmail.com"
                className="text-blue-400 hover:underline"
              >
                mostafahadeer909@gmail.com
              </a>
            </p>

            <p>
              📱 Phone:{" "}
              <a
                href="tel:+201140027672"
                className="text-blue-400 hover:underline"
              >
                01140027672
              </a>
            </p>

            <p>
              💼 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/mostafa-hadeer-b2a0bb371"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Profile
              </a>
            </p>

            <p>
              🐙 GitHub:{" "}
              <a
                href="https://github.com/deshavoo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                deshavoo
              </a>
            </p>
          </div>

          {/* 💎 Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl space-y-5"
          >
            <label htmlFor="user_name" className="sr-only">
              Your Name
            </label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/10 
                         focus:border-blue-400 outline-none text-white placeholder-gray-400"
            />

            <label htmlFor="user_email" className="sr-only">
              Your Email
            </label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/10 
                         focus:border-blue-400 outline-none text-white placeholder-gray-400"
            />

            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/10 
                         focus:border-blue-400 outline-none text-white placeholder-gray-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-black py-3 rounded-xl font-semibold 
                         hover:bg-blue-400 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-400 text-sm text-center" role="status">
                Message sent successfully ✅
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
