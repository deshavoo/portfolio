import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_0ldcqv2",
        "template_pc7cext",
        form.current,
        "l5AMqt3kPqmat5Gxn"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.log(error);
          setLoading(false);
          alert("Something went wrong ❌");
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-white text-[#0b1220]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold">Let's Connect</h2>

        <p className="mt-4 text-gray-500 max-w-2xl">
          Got a project in mind? I'm open to freelance work, internships, and
          full-time frontend roles.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="bg-[#f5f9ff] border border-blue-100 rounded-2xl p-6 space-y-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>

            <p>
              📧 Email:{" "}
              <span className="text-blue-600">mostafahadeer909@gmail.com</span>
            </p>

            <p>
              📱 Phone: <span className="text-blue-600">01140027672</span>
            </p>

            <p>
              💼 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/mostafa-hadeer-b2a0bb371"
                className="text-blue-600"
              >
                Profile
              </a>
            </p>

            <p>
              🐙 GitHub:{" "}
              <a href="https://github.com/deshavoo" className="text-blue-600">
                deshavoo
              </a>
            </p>
          </div>

          {/* Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-5"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-500 text-sm text-center">
                Message sent successfully ✅
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
