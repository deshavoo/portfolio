"use client";

import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const projects = [
  {
    id: 10,
    title: "KOPÍ — Premium Specialty Coffee",
    description:
      "A premium café landing page built with React, Tailwind CSS, and Framer Motion, featuring a refined dark aesthetic, responsive design, interactive sections, and smooth animations.",
    tech: [
      "React.js",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Responsive Design",
      "Google Maps API",
    ],
    media: {
      type: "image",
      src: [
        "/projects/kopi1.png",
        "/projects/kopi2.png",
        "/projects/kopi3.png",
      ],
    },
    url: "https://kopi-cafe-lyart.vercel.app/",
    github: "https://kopi-cafe-lyart.vercel.app/",
    status: "completed",
    badge: "Featured",
  },

  {
    id: 9,
    title: "Ria Store Lookbook & Storefront - Minimalist Luxury E-Commerce",
    description:
      "An elegant E-commerce storefront and lookbook web application designed for luxury fashion brands. Engineered with a responsive multi-page layout, custom Tailwind CSS styling, dynamic collection views, and a sophisticated minimalist aesthetic.",
    tech: ["React", "Tailwind", "Framer Motion", "React Icons", "Lucide React"],
    media: {
      type: "image",
      src: ["/projects/ria1.png", "/projects/ria2.png", "/projects/ria3.png"],
    },
    url: "https://riaa-store.vercel.app/",
    github: "#",
    status: "completed",
    badge: "Featured",
  },

  {
    id: 0,
    title: "STARK — Premium Sneaker Store",
    description:
      "A premium Arabic-first sneaker store built with React and Vite, featuring product discovery, brand filtering, sorting, product details, shopping cart, WhatsApp checkout, customer reviews, responsive design, smooth animations, and SEO optimization.",
    tech: [
      "React",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "React Icons",
      "Vercel",
    ],
    media: {
      type: "image",
      src: [
        "/projects/stark1.png",
        "/projects/stark2.png",
        "/projects/stark3.png",
      ],
    },
    url: "https://stark-store.vercel.app/",
    github: "#",
    status: "completed",
    badge: "Featured",
  },

  {
    id: 1,
    title: "DeshFlix – Movie Streaming Web App",
    description:
      "A premium movie & TV streaming web app inspired by Netflix. Built with React and Tailwind CSS, featuring dynamic API integration, real-time search, category filtering, hover trailer previews, and a modern cinematic UI/UX experience.",
    tech: ["React", "Tailwind", "Framer Motion", "TMDB API"],
    media: {
      type: "image",
      src: [
        "/projects/deshflix1.png",
        "/projects/deshflix2.png",
        "/projects/deshflix.png",
      ],
    },
    url: "https://deshflix.vercel.app/",
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
    media: {
      type: "image",
      src: [
        "/projects/skyline1.png",
        "/projects/skyline2.png",
        "/projects/skyline3.png",
      ],
    },
    url: "https://skyline-lp.vercel.app/",
    github: "#",
    status: "completed",
  },

  {
    id: 3,
    title: "ServixaOS Website",
    description:
      "A responsive business website built with React, Tailwind CSS, and JavaScript, featuring modern UI components, appointment booking, contact forms, and performance optimization.",
    tech: ["React", "Tailwind", "JavaScript"],
    media: {
      type: "image",
      src: [
        "/projects/servixaos1.png",
        "/projects/serixaos2.png",
        "/projects/serivxaos3.png",
      ],
    },
    url: "https://www.servixaos.com/",
    github: "#",
    status: "completed",
  },

  {
    id: 4,
    title: "Company Website",
    description:
      "A corporate website developed during my Front-End internship using React, Tailwind CSS, and JavaScript, focused on responsive layouts, reusable components, and performance optimization.",
    tech: ["React", "CSS", "Git"],
    media: {
      type: "image",
      src: [
        "/projects/contact1.png",
        "/projects/contact2.png",
        "/projects/contact3.png",
      ],
    },
    url: "https://www.contactcars.com/",
    github: "#",
    status: "completed",
  },

  {
    id: 5,
    title: "Nova Fashion",
    description:
      "A modern landing page built with HTML5, CSS3, and JavaScript, featuring smooth animations, responsive design, and clean, user-friendly interfaces.",
    tech: ["HTML", "CSS", "JavaScript"],
    media: {
      type: "image",
      src: [
        "/projects/nova1.png",
        "/projects/nova2.png",
        "/projects/nova3.png",
      ],
    },
    url: "https://nova-test-demo.vercel.app/",
    github: "#",
    status: "completed",
  },

  {
    id: 6,
    title: "Real Estate App",
    description: "Dynamic property listing system.",
    tech: ["React", "API", "Tailwind"],
    media: {
      type: "image",
      src: ["/projects/realestate1.png", "/projects/realestate2.png"],
    },
    url: "#",
    github: "#",
    status: "maintenance",
  },

  {
    id: 7,
    title: "E-commerce Page",
    description: "Product page with cart functionality.",
    tech: ["React", "Context", "Strapi"],
    media: {
      type: "image",
      src: ["/projects/ecommerce1.png", "/projects/ecommerce2.png"],
    },
    url: "#",
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
      poster: "",
    },
    url: "#",
    github: "#",
    status: "in-progress",
  },
];

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
    <div className="relative flex h-60 w-full flex-col items-center justify-center gap-3 bg-linear-to-br from-blue-950/40 via-black/40 to-black/60 text-gray-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-blue-400/50"
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
    <div className="relative flex h-60 w-full flex-col items-center justify-center gap-3 bg-linear-to-br from-blue-950/40 via-black/40 to-black/60 text-gray-500">
      <span className="text-3xl">🎬</span>

      <span className="text-xs uppercase tracking-widest text-gray-500">
        Preview Coming Soon
      </span>
    </div>
  );
}

function ProjectImage({ media, title }) {
  const sources = Array.isArray(media?.src)
    ? media.src
    : media?.src
    ? [media.src]
    : [];

  if (sources.length === 0) {
    return <ImagePlaceholder />;
  }

  if (sources.length === 1) {
    return (
      <img
        src={sources[0]}
        alt={title}
        loading="lazy"
        className="h-60 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
            className="h-60 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function ProjectVideo({ media }) {
  if (!media?.src) {
    return <VideoPlaceholder />;
  }

  return (
    <video
      className="h-60 w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
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

function StatusBadge({ config }) {
  return (
    <div className="absolute left-4 top-4 z-20 group/badge">
      <motion.span
        animate={{
          boxShadow: [
            "0 0 0px rgba(37,99,235,0.4)",
            "0 0 20px rgba(37,99,235,0.7)",
            "0 0 0px rgba(37,99,235,0.4)",
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="inline-block cursor-default rounded-full border border-blue-400/30 bg-blue-600/80 px-3 py-1 text-xs font-medium backdrop-blur-md"
      >
        {config.label}
      </motion.span>

      <div
        role="tooltip"
        className="pointer-events-none absolute left-0 top-full z-30 mt-2 w-56 translate-y-1 rounded-lg border border-white/10 bg-black/90 px-3 py-2 text-xs text-gray-300 opacity-0 shadow-lg backdrop-blur-xl transition-all duration-300 group-hover/badge:translate-y-0 group-hover/badge:opacity-100"
      >
        {config.tooltip}
      </div>
    </div>
  );
}

function MaintenanceRibbon({ config }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-30">
      <div className="group/ribbon pointer-events-auto absolute left-0 top-0 h-28 w-28 overflow-hidden">
        <motion.div
          animate={{
            backgroundPositionX: ["0%", "200%"],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-10 top-5 w-40 -rotate-45 cursor-default rounded-xs border-y border-orange-200/40 bg-linear-to-r from-orange-600 via-amber-400 to-orange-600 bg-size-[200%_100%] py-1.5 text-center text-[10px] font-semibold uppercase tracking-wider text-white shadow-md shadow-orange-900/40 backdrop-blur-md"
        >
          {config.label}
        </motion.div>
      </div>

      <div
        role="tooltip"
        className="pointer-events-none absolute left-2 top-16 z-40 w-56 translate-y-1 rounded-lg border border-white/10 bg-black/90 px-3 py-2 text-xs text-gray-300 opacity-0 shadow-lg backdrop-blur-xl transition-all duration-300 group-hover/ribbon:translate-y-0 group-hover/ribbon:opacity-100"
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
      className="absolute right-4 top-4 z-20 h-4 w-4 text-white/30"
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

function AnimatedGridOverlay() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.15]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(96,165,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.5) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
      animate={{
        backgroundPosition: ["0px 0px", "24px 24px"],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

function ProjectMedia({ project }) {
  const config = statusConfig[project.status];
  const isSpecial = Boolean(config);

  return (
    <div className="relative overflow-hidden">
      {project.badge && !isSpecial && (
        <span className="absolute left-4 top-4 z-20 rounded-full border border-blue-300/20 bg-blue-600/80 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-blue-900/40 backdrop-blur-md">
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

      {isSpecial && (
        <>
          <AnimatedGridOverlay />

          <div className="pointer-events-none absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
        </>
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  const config = statusConfig[project.status];
  const isSpecial = Boolean(config);

  return (
    <motion.div
      variants={card}
      whileHover={{
        y: -8,
      }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-[0_8px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-500 hover:border-blue-400/25 hover:shadow-[0_20px_60px_rgba(37,99,235,0.14)]"
    >
      <ProjectMedia project={project} />

      <div className="p-6">
        <h3 className="text-xl font-bold">{project.title}</h3>

        <p className="mt-2 text-gray-400">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-blue-500/25 bg-blue-500/15 px-3 py-1 text-xs text-blue-300"
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
            whileHover={{
              x: 2,
            }}
            className="mt-6 inline-flex cursor-not-allowed select-none items-center gap-1 text-gray-500"
          >
            {config.cta}
          </motion.button>
        ) : (
          <div className="mt-6 flex items-center gap-5">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1 text-blue-400 transition-colors hover:text-blue-300"
            >
              Live Demo
              <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                →
              </span>
            </a>

            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition-colors hover:text-gray-200"
              >
                GitHub
              </a>
            )}
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
      className="relative overflow-hidden bg-[#0a0a0a] px-6 pb-24 pt-16 text-white"
    >
      <div className="absolute left-1/2 top-0 h-175 w-175 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/70 to-black" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm uppercase tracking-widest text-blue-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
            A selection of modern web experiences focused on performance,
            responsive design, and premium user interfaces.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
