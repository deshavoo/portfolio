"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  const projects = [
    {
      title: "DeshFlix – Movie Streaming Web App",
      desc: "A premium movie & TV streaming web app inspired by Netflix. Built with React and Tailwind CSS, featuring dynamic API integration, real-time search, category filtering, hover trailer previews, and a modern cinematic UI/UX experience.",
      stack: ["React", "Tailwind", "Framer Motion", "TMDB API"],
      link: "https://deshflix.vercel.app/",
      images: [
        "/projects/deshflix1.png",
        "/projects/deshflix2.png",
        "/projects/deshflix.png",
      ],
      badge: "Featured",
    },
    {
      title: "Skyline Electrical Website",
      desc: "A modern corporate website for an electrical company, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion, featuring smooth animations, responsive design, and an interactive user experience.",
      stack: ["Next", "TypeScript", "Tailwind", "Framer"],
      link: "https://skyline-lp.vercel.app/",
      images: [
        "/projects/skyline1.png",
        "/projects/skyline2.png",
        "/projects/skyline3.png",
      ],
    },
    {
      title: "ServixaOS Website",
      desc: "A responsive business website built with React, Tailwind CSS, and JavaScript, featuring modern UI components, appointment booking, contact forms, and performance optimization.",
      stack: ["React", "Tailwind", "JavaScript"],
      link: "https://www.servixaos.com/",
      images: [
        "/projects/servixaos1.png",
        "/projects/serixaos2.png",
        "/projects/serivxaos3.png",
      ],
    },
    {
      title: "Company Website",
      desc: "A corporate website developed during my Front-End internship using React, Tailwind CSS, and JavaScript, focused on responsive layouts, reusable components, and performance optimization.",
      stack: ["React", "CSS", "Git"],
      link: "https://www.contactcars.com/",
      images: [
        "/projects/contact1.png",
        "/projects/contact2.png",
        "/projects/contact3.png",
      ],
    },
    {
      title: "Nova Fashion",
      desc: "A modern landing page built with HTML5, CSS3, and JavaScript, featuring smooth animations, responsive design, and clean, user-friendly interfaces.",
      stack: ["HTML", "CSS", "JavaScript"],
      link: "https://nova-test-demo.vercel.app/",
      images: [
        "/projects/nova1.png",
        "/projects/nova2.png",
        "/projects/nova3.png",
      ],
    },
    {
      title: "Real Estate App",
      desc: "Dynamic property listing system.",
      stack: ["React", "API", "Tailwind"],
      link: "#",
      images: ["/projects/realestate1.png", "/projects/realestate2.png"],
    },
    {
      title: "E-commerce Page",
      desc: "Product page with cart functionality.",
      stack: ["React", "Context", "Strapi"],
      link: "#",
      images: ["/projects/ecommerce1.png", "/projects/ecommerce2.png"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative pt-16 pb-24 px-6 bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-blue-500/20 blur-[140px] rounded-full" />

      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/70 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-400 mb-2">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition duration-500"
            >
              <div className="relative">
                {project.badge && (
                  <span className="absolute top-4 left-4 z-20 bg-blue-600 px-3 py-1 rounded-full text-xs">
                    {project.badge}
                  </span>
                )}

                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  loop
                  className="h-60"
                >
                  {project.images.map((img) => (
                    <SwiperSlide key={img}>
                      <img
                        src={img}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-60 object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>

                <p className="text-gray-400 mt-2">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs rounded-full bg-blue-500/20 border border-blue-500/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-blue-400 hover:text-blue-300"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
