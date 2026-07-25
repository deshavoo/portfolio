"use client";

import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// -----------------------------------------------------------------------
// PROJECTS DATA
// -----------------------------------------------------------------------
// status: "completed" | "in-progress" | "maintenance"
//
// Every project carries a single `media` object:
//   media: {
//     type: "image" | "video",
//     src: string | string[],   // array of images renders a carousel
//     poster?: string,          // optional poster frame for videos
//   }
//
// TODO: Add project image(s)
// Example:
// import deshflixCover from "@/assets/projects/deshflix-cover.webp";
// then set media: { type: "image", src: [deshflixCover] }
//
// TODO: Add project preview video
// Example:
// import previewVideo from "@/assets/projects/theme-preview.mp4";
// then set media: { type: "video", src: previewVideo, poster: "" }
//
// If src is empty/missing, the card automatically renders a premium
// "Preview Coming Soon" placeholder (image or video flavor).
//
// All status-driven UI (ribbon / badge / overlay / CTA / tooltip) is
// controlled centrally in `statusConfig` below — never hardcode a
// per-project status check inside the JSX.
// -----------------------------------------------------------------------
const projects = [
  {
    id: 1,
    title: "DeshFlix – Movie Streaming Web App",
    description:
      "A premium movie & TV streaming web app inspired by Netflix. Built with React and Tailwind CSS, featuring dynamic API integration, real-time search, category filtering, hover trailer previews, and a modern cinematic UI/UX experience.",
    tech: ["React", "Tailwind", "Framer Motion", "TMDB API"],
    // TODO: Add project image(s)
    media: {
      type: "image",
      src: [
        "/projects/deshflix1.png",
        "/projects/deshflix2.png",
        "/projects/deshflix.png",
      ],
    },
    // TODO: Replace with Live Demo URL
    url: "https://deshflix.vercel.app/",
    // TODO: Replace with GitHub Repository URL
    github: "#",
    status: "completed",
    badge: "Featured",
  },
  {
    id: 2,
    title: "Skyline Electrical Website",
    description:
      "A modern corporate website for an electrical company, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion, featuring smooth animations, responsive design, and an interactive user experience.",
    tech: ["Next", "TypeScript", "Tailwind", "Framer"],
    // TODO: Add project image(s)
    media: {
      type: "image",
      src: [
        "/projects/skyline1.png",
        "/projects/skyline2.png",
        "/projects/skyline3.png",
      ],
    },
    // TODO: Replace with Live Demo URL
    url: "https://skyline-lp.vercel.app/",
    // TODO: Replace with GitHub Repository URL
    github: "#",
    status: "completed",
  },
  {
    id: 3,
    title: "ServixaOS Website",
    description:
      "A responsive business website built with React, Tailwind CSS, and JavaScript, featuring modern UI components, appointment booking, contact forms, and performance optimization.",
    tech: ["React", "Tailwind", "JavaScript"],
    // TODO: Add project image(s)
    media: {
      type: "image",
      src: [
        "/projects/servixaos1.png",
        "/projects/serixaos2.png",
        "/projects/serivxaos3.png",
      ],
    },
    // TODO: Replace with Live Demo URL
    url: "https://www.servixaos.com/",
    // TODO: Replace with GitHub Repository URL
    github: "#",
    status: "completed",
  },
  {
    id: 4,
    title: "Company Website",
    description:
      "A corporate website developed during my Front-End internship using React, Tailwind CSS, and JavaScript, focused on responsive layouts, reusable components, and performance optimization.",
    tech: ["React", "CSS", "Git"],
    // TODO: Add project image(s)
    media: {
      type: "image",
      src: [
        "/projects/contact1.png",
        "/projects/contact2.png",
        "/projects/contact3.png",
      ],
    },
    // TODO: Replace with Live Demo URL
    url: "https://www.contactcars.com/",
    // TODO: Replace with GitHub Repository URL
    github: "#",
    status: "completed",
  },
  {
    id: 5,
    title: "Nova Fashion",
    description:
      "A modern landing page built with HTML5, CSS3, and JavaScript, featuring smooth animations, responsive design, and clean, user-friendly interfaces.",
    tech: ["HTML", "CSS", "JavaScript"],
    // TODO: Add project image(s)
    media: {
      type: "image",
      src: [
        "/projects/nova1.png",
        "/projects/nova2.png",
        "/projects/nova3.png",
      ],
    },
    // TODO: Replace with Live Demo URL
    url: "https://nova-test-demo.vercel.app/",
    // TODO: Replace with GitHub Repository URL
    github: "#",
    status: "completed",
  },
  {
    id: 6,
    title: "Real Estate App",
    description: "Dynamic property listing system.",
    tech: ["React", "API", "Tailwind"],
    // TODO: Add project image(s)
    media: {
      type: "image",
      src: ["/projects/realestate1.png", "/projects/realestate2.png"],
    },
    // TODO: Replace with Live Demo URL
    url: "#",
    // TODO: Replace with GitHub Repository URL
    github: "#",
    // Temporarily unavailable — kept visible with a maintenance ribbon
    // instead of being removed. Flip back to "completed" once it's back up.
    status: "maintenance",
  },
  {
    id: 7,
    title: "E-commerce Page",
    description: "Product page with cart functionality.",
    tech: ["React", "Context", "Strapi"],
    // TODO: Add project image(s)
    media: {
      type: "image",
      src: ["/projects/ecommerce1.png", "/projects/ecommerce2.png"],
    },
    // TODO: Replace with Live Demo URL
    url: "#",
    // TODO: Replace with GitHub Repository URL
    github: "#",
    status: "maintenance",
  },
  {
    id: 8,
    title: "Premium Theme",
    description:
      "A next-generation web experience showcasing advanced frontend architecture, premium UI/UX, smooth animations, and modern engineering practices.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    media: {
      type: "video",
      src: "/video/dehavoo-theme .mp4",
      // TODO: Add poster image
      poster: "",
    },
    // TODO: Replace with final production URL if needed
    url: "#",
    // TODO: Replace with GitHub Repository URL
    github: "#",
    status: "completed",
  },
];

// -----------------------------------------------------------------------
// STATUS CONFIG — single source of truth for how each status renders.
// Add a new status here and every card that uses it picks it up
// automatically; no per-project conditionals needed in the JSX.
// -----------------------------------------------------------------------
const statusConfig = {
  "in-progress": {
    variant: "pill",
    label: "🚧 In Progress",
    cta: "Under Development",
    tooltip: "This project is currently under active development.",
  },
  maintenance: {
    variant: "ribbon",
    label: "🚧 UNDER MAINTENANCE",
    cta: "Under Maintenance",
    tooltip:
      "This project is temporarily under maintenance and will be available again soon.",
  },
};

function ImagePlaceholder() {
  return (
    <div className="relative w-full h-60 flex flex-col items-center justify-center gap-3 bg-linear-to-br from-blue-950/40 via-black/40 to-black/60 text-gray-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-blue-400/50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 8.25A2.25 2.25 0 015.25 6h13.5A2.25 2.25 0 0121 8.25v7.5A2.25 2.25 0 0118.75 18H5.25A2.25 2.25 0 013 15.75v-7.5z"
        />
      </svg>
      <span className="text-xs uppercase tracking-widest text-gray-500">
        Preview Coming Soon
      </span>
    </div>
  );
}

function VideoPlaceholder() {
  return (
    <div className="relative w-full h-60 flex flex-col items-center justify-center gap-3 bg-linear-to-br from-blue-950/40 via-black/40 to-black/60 text-gray-500">
      <span className="text-3xl">🎬</span>
      <span className="text-xs uppercase tracking-widest text-gray-500">
        Preview Coming Soon
      </span>
    </div>
  );
}

// -----------------------------------------------------------------------
// ProjectImage — renders a single image, or a Swiper carousel when the
// project has more than one screenshot.
// -----------------------------------------------------------------------
function ProjectImage({ media, title }) {
  const sources = Array.isArray(media?.src)
    ? media.src
    : media?.src
    ? [media.src]
    : [];

  if (sources.length === 0) return <ImagePlaceholder />;

  if (sources.length === 1) {
    return (
      <img
        src={sources[0]}
        alt={title}
        loading="lazy"
        className="w-full h-60 object-cover transition-transform duration-700 ease-out hover:scale-110"
      />
    );
  }

  return (
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
      {sources.map((img) => (
        <SwiperSlide key={img} className="overflow-hidden">
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="w-full h-60 object-cover transition-transform duration-700 ease-out hover:scale-110"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

// -----------------------------------------------------------------------
// ProjectVideo — muted, autoplaying preview loop. Falls back to a
// premium placeholder when no source is available yet.
// -----------------------------------------------------------------------
function ProjectVideo({ media }) {
  if (!media?.src) return <VideoPlaceholder />;

  return (
    <video
      className="w-full h-60 object-cover transition-all duration-700 ease-out hover:scale-110 hover:brightness-110"
      src={media.src}
      poster={media.poster || undefined}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}

// -----------------------------------------------------------------------
// StatusBadge — soft pulsing glass pill, used by the "pill" variant
// (e.g. in-progress).
// -----------------------------------------------------------------------
function StatusBadge({ config }) {
  return (
    <div className="absolute top-4 left-4 z-20 group/badge">
      <motion.span
        animate={{
          boxShadow: [
            "0 0 0px rgba(37,99,235,0.4)",
            "0 0 20px rgba(37,99,235,0.7)",
            "0 0 0px rgba(37,99,235,0.4)",
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block bg-blue-600/80 backdrop-blur-md border border-blue-400/30 px-3 py-1 rounded-full text-xs font-medium cursor-default"
      >
        {config.label}
      </motion.span>

      <div
        role="tooltip"
        className="pointer-events-none absolute left-0 top-full mt-2 w-56 rounded-lg border border-white/10 bg-black/90 backdrop-blur-xl px-3 py-2 text-xs text-gray-300 opacity-0 translate-y-1 shadow-lg transition-all duration-300 group-hover/badge:opacity-100 group-hover/badge:translate-y-0 z-30"
      >
        {config.tooltip}
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------
// MaintenanceRibbon — premium diagonal corner ribbon, used by the
// "ribbon" variant (e.g. maintenance). Subtle shimmer sweep, glass
// finish, and a hover tooltip explaining the status.
// -----------------------------------------------------------------------
function MaintenanceRibbon({ config }) {
  return (
    <div className="absolute inset-0 z-30 pointer-events-none">
      <div className="group/ribbon pointer-events-auto absolute top-0 left-0 w-28 h-28 overflow-hidden">
        <motion.div
          animate={{ backgroundPositionX: ["0%", "200%"] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
          className="absolute top-5 -left-10 w-40 -rotate-45 rounded-xs py-1.5 text-center text-[10px] font-semibold tracking-wider uppercase text-white bg-linear-to-r from-orange-600 via-amber-400 to-orange-600 bg-size-[200%_100%] backdrop-blur-md border-y border-orange-200/40 shadow-md shadow-orange-900/40 cursor-default"
        >
          {config.label}
        </motion.div>
      </div>

      <div
        role="tooltip"
        className="pointer-events-none absolute top-16 left-2 w-56 rounded-lg border border-white/10 bg-black/90 backdrop-blur-xl px-3 py-2 text-xs text-gray-300 opacity-0 translate-y-1 shadow-lg transition-all duration-300 group-hover/ribbon:opacity-100 group-hover/ribbon:translate-y-0 z-40"
      >
        {config.tooltip}
      </div>
    </div>
  );
}

function LockIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-4 right-4 z-20 w-4 h-4 text-white/30"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  );
}

// -----------------------------------------------------------------------
// ProjectMedia — dispatches to <ProjectImage /> or <ProjectVideo />
// based on media.type, and renders the correct status indicator
// (pill / ribbon) purely from statusConfig[project.status].variant.
// ProjectCard never needs to know any of this.
// -----------------------------------------------------------------------
function ProjectMedia({ project }) {
  const config = statusConfig[project.status];
  const isSpecial = Boolean(config);

  return (
    <div className="relative overflow-hidden">
      {project.badge && !isSpecial && (
        <span className="absolute top-4 left-4 z-20 bg-blue-600 px-3 py-1 rounded-full text-xs font-medium shadow-md shadow-blue-900/40">
          {project.badge}
        </span>
      )}

      {isSpecial && config.variant === "pill" && (
        <StatusBadge config={config} />
      )}
      {isSpecial && config.variant === "ribbon" && (
        <MaintenanceRibbon config={config} />
      )}
      {isSpecial && <LockIcon />}

      <div className={isSpecial ? "opacity-60" : ""}>
        {project.media?.type === "video" ? (
          <ProjectVideo media={project.media} />
        ) : (
          <ProjectImage media={project.media} title={project.title} />
        )}
      </div>

      {/* Premium "under construction" treatment, shared by every special status */}
      {isSpecial && (
        <>
          <AnimatedGridOverlay />
          <div className="absolute inset-0 backdrop-blur-[2px] bg-black/30 pointer-events-none" />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
        </>
      )}
    </div>
  );
}

function AnimatedGridOverlay() {
  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none opacity-[0.15]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(96,165,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.5) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
      animate={{ backgroundPosition: ["0px 0px", "24px 24px"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    />
  );
}

// -----------------------------------------------------------------------
// ProjectCard — layout/content only. No media logic, no status logic;
// both are fully delegated to <ProjectMedia /> and `statusConfig`.
// -----------------------------------------------------------------------
function ProjectCard({ project }) {
  const config = statusConfig[project.status];
  const isSpecial = Boolean(config);

  return (
    <motion.div
      variants={card}
      whileHover={{ y: -8 }}
      className="rounded-2xl overflow-hidden border border-white/10 bg-white/4 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:border-blue-500/30 hover:shadow-[0_16px_50px_rgba(37,99,235,0.15)] transition-all duration-500"
    >
      <ProjectMedia project={project} />

      <div className="p-6">
        <h3 className="text-xl font-bold">{project.title}</h3>

        <p className="text-gray-400 mt-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-xs rounded-full bg-blue-500/15 border border-blue-500/25 text-blue-300"
            >
              {item}
            </span>
          ))}
        </div>

        {isSpecial ? (
          <motion.button
            type="button"
            disabled
            aria-disabled="true"
            title={config.tooltip}
            whileHover={{ x: 2 }}
            className="inline-flex items-center gap-1 mt-6 text-gray-500 cursor-not-allowed select-none"
          >
            {config.cta}
          </motion.button>
        ) : (
          <div className="flex items-center gap-5 mt-6">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
            >
              Live Demo
              <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                →
              </span>
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
            >
              GitHub
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative pt-16 pb-24 px-6 bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-blue-600/20 blur-[140px] rounded-full" />

      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/70 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-blue-400 mb-2">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
