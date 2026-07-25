"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 " +
    "focus:border-blue-500 focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.12)] " +
    "outline-none text-white placeholder-gray-500 transition-all duration-300";

  return (
    <section
      id="contact"
      className="relative pt-16 pb-24 px-6 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* 🔥 Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 
                      w-175 h-175 
                      bg-blue-600/20 blur-[140px] rounded-full"
      />

      {/* 🔥 Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/70 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-blue-400 mb-2">
            Contact
          </p>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Let's Connect
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Got a project in mind? I'm open to freelance work, internships, and
            full-time frontend roles.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* 💎 Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/4 border border-white/10 rounded-2xl p-6 backdrop-blur-xl space-y-4 shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:border-blue-500/30 transition-colors duration-500"
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>

            <p>
              📧 Email:{" "}
              <a
                href="mailto:mostafahadeer909@gmail.com"
                className="text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline transition-colors"
              >
                mostafahadeer909@gmail.com
              </a>
            </p>

            <p>
              📱 Phone:{" "}
              <a
                href="tel:+201140027672"
                className="text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline transition-colors"
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
                className="text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline transition-colors"
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
                className="text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline transition-colors"
              >
                deshavoo
              </a>
            </p>
          </motion.div>

          {/* 💎 Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/4 border border-white/10 rounded-2xl p-6 backdrop-blur-xl space-y-5 shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:border-blue-500/30 transition-colors duration-500"
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
              className={inputClasses}
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
              className={inputClasses}
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
              className={inputClasses}
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={
                !loading
                  ? { scale: 1.02, boxShadow: "0 0 26px rgba(37,99,235,0.5)" }
                  : {}
              }
              whileTap={!loading ? { scale: 0.98 } : {}}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-full bg-linear-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl font-semibold shadow-md shadow-blue-900/40 transition-opacity disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            <AnimatePresence>
              {success && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="text-green-400 text-sm text-center"
                  role="status"
                >
                  Message sent successfully ✅
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
