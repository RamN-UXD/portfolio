"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const customEase = [0.16, 1, 0.3, 1];

const projects = [
  {
    id: "01",
    title: "ADMIN CONTROL CENTER",
    year: "8 Categories",
    role: "Interaction Design",
    link: "/projects/b2b-admin",
    image: "/projects/b2b-admin/hero.png",
  },
  {
    id: "02",
    title: "HEALTHCARE RESEARCH",
    year: "187 Participants",
    role: "Persona Development",
    link: "/projects/preventive-research",
    image: "/images/preventive/hero.png",
  },
  {
    id: "03",
    title: "DR. HEALTH APP",
    year: "2 Core Features",
    role: "Usability Testing",
    link: "/projects/dr-health",
    image: "/projects/dr-health/hero.png",
  },
  {
    id: "04",
    title: "NCV ICON SYSTEM",
    year: "55 Custom Icons",
    role: "Design Systems",
    link: "/projects/ncv-icons",
    image: "/projects/ncv-icons/hero.png",
  },
];

const ITEM_HEIGHT = 105; // Balanced height in pixels for each title row in the vertical drum

// ─────────────────────────────────────────────────────────────────────────────
// 1. MASKED IMAGE LAYER (Fixed Image with Sliding Clip-Mask Reveal)
// ─────────────────────────────────────────────────────────────────────────────
function MaskedImageSlide({
  project,
  index,
  scrollYProgress,
}: {
  project: (typeof projects)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const outerY = useTransform(
    scrollYProgress,
    index === 0
      ? [0, 1]
      : index === 1
      ? [0.12, 0.33]
      : index === 2
      ? [0.45, 0.66]
      : [0.78, 0.99],
    index === 0 ? ["0%", "0%"] : ["100%", "0%"]
  );

  const innerY = useTransform(
    scrollYProgress,
    index === 0
      ? [0, 1]
      : index === 1
      ? [0.12, 0.33]
      : index === 2
      ? [0.45, 0.66]
      : [0.78, 0.99],
    index === 0 ? ["0%", "0%"] : ["-100%", "0%"]
  );

  return (
    <motion.div
      style={{ y: outerY, zIndex: (index + 1) * 5 }}
      className="absolute inset-0 w-full h-full will-change-transform overflow-hidden bg-[#06060a]"
    >
      <motion.div
        style={{ y: innerY }}
        className="relative w-full h-full will-change-transform overflow-hidden"
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />

        {/* Ambient Dark Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06060a]/80 via-black/25 to-[#06060a]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. CENTRAL TITLE DRUM (Vertical Filmstrip of All Titles)
// ─────────────────────────────────────────────────────────────────────────────
function TitleDrum({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const drumY = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1.0],
    [
      `0px`,
      `-${ITEM_HEIGHT}px`,
      `-${ITEM_HEIGHT * 2}px`,
      `-${ITEM_HEIGHT * 3}px`,
    ]
  );

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40 overflow-visible px-20 sm:px-28 md:px-36 lg:px-48">
      {/* Pinned Viewport Window for the Active Title line */}
      <div
        className="relative flex items-center justify-center max-w-[65vw]"
        style={{ height: `${ITEM_HEIGHT}px`, width: "100%" }}
      >
        {/* Animated Vertical Filmstrip */}
        <motion.div
          style={{ y: drumY }}
          className="absolute top-0 flex flex-col items-center justify-start w-full will-change-transform"
        >
          {projects.map((proj, idx) => (
            <TitleRow
              key={proj.id}
              project={proj}
              index={idx}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function TitleRow({
  project,
  index,
  scrollYProgress,
}: {
  project: (typeof projects)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const opacity = useTransform(
    scrollYProgress,
    index === 0
      ? [0, 0.20, 0.33]
      : index === 1
      ? [0.12, 0.33, 0.53, 0.66]
      : index === 2
      ? [0.45, 0.66, 0.86, 0.99]
      : [0.78, 0.99, 1.0],
    index === 0
      ? [1, 1, 0.10]
      : index === 1
      ? [0.10, 1, 1, 0.10]
      : index === 2
      ? [0.10, 1, 1, 0.10]
      : [0.10, 1, 1]
  );

  const scale = useTransform(
    scrollYProgress,
    index === 0
      ? [0, 0.20, 0.33]
      : index === 1
      ? [0.12, 0.33, 0.53, 0.66]
      : index === 2
      ? [0.45, 0.66, 0.86, 0.99]
      : [0.78, 0.99, 1.0],
    index === 0
      ? [1, 1, 0.92]
      : index === 1
      ? [0.92, 1, 1, 0.92]
      : index === 2
      ? [0.92, 1, 1, 0.92]
      : [0.92, 1, 1]
  );

  return (
    <div
      style={{ height: `${ITEM_HEIGHT}px` }}
      className="flex items-center justify-center w-full select-none px-4"
    >
      <motion.h2
        style={{
          opacity,
          scale,
          fontFamily: "'Barlow Condensed', sans-serif",
          fontStyle: "normal",
          letterSpacing: "-0.01em",
          fontSize: "clamp(2.25rem, 4.3vw, 4.35rem)",
        }}
        className="font-bold text-white uppercase text-center leading-none tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)] whitespace-nowrap will-change-transform"
      >
        {project.title}
      </motion.h2>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. LEFT & RIGHT AUTO-ADAPTIVE EDGE PILLS
// ─────────────────────────────────────────────────────────────────────────────
function EdgePills({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  return (
    <>
      {/* LEFT PILLS (Year - Anchored to Left Edge) */}
      <div className="absolute left-6 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
        <div className="relative flex items-center justify-start">
          {projects.map((proj, idx) => (
            <SinglePill
              key={proj.id}
              text={proj.year}
              index={idx}
              align="left"
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>

      {/* RIGHT PILLS (Role - Anchored to Right Edge) */}
      <div className="absolute right-6 md:right-12 lg:right-16 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
        <div className="relative flex items-center justify-end">
          {projects.map((proj, idx) => (
            <SinglePill
              key={proj.id}
              text={proj.role}
              index={idx}
              align="right"
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function SinglePill({
  text,
  index,
  align,
  scrollYProgress,
}: {
  text: string;
  index: number;
  align: "left" | "right";
  scrollYProgress: MotionValue<number>;
}) {
  const opacity = useTransform(
    scrollYProgress,
    index === 0
      ? [0, 0.20, 0.33]
      : index === 1
      ? [0.15, 0.33, 0.53, 0.66]
      : index === 2
      ? [0.48, 0.66, 0.86, 0.99]
      : [0.81, 0.99, 1.0],
    index === 0
      ? [1, 1, 0]
      : index === 1
      ? [0, 1, 1, 0]
      : index === 2
      ? [0, 1, 1, 0]
      : [0, 1, 1]
  );

  return (
    <motion.div
      style={{
        opacity,
        backgroundColor: "rgba(255, 255, 255, 0.12)",
        backdropFilter: "blur(16px)",
        borderColor: "rgba(255, 255, 255, 0.2)",
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.4)",
      }}
      className={`${
        index === 0
          ? "relative"
          : `absolute top-1/2 -translate-y-1/2 ${
              align === "left" ? "left-0 origin-left" : "right-0 origin-right"
            }`
      } inline-flex items-center justify-center px-4 py-1.5 rounded-full text-white text-xs md:text-sm font-medium tracking-wider border whitespace-nowrap will-change-transform`}
    >
      <span>{text}</span>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. CLICKABLE HIT TARGET & NAVIGATION
// ─────────────────────────────────────────────────────────────────────────────
function ClickTarget({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const router = useRouter();

  const activeIndex = useTransform(scrollYProgress, (progress) => {
    if (progress < 0.25) return 0;
    if (progress < 0.58) return 1;
    if (progress < 0.88) return 2;
    return 3;
  });

  const handleClick = () => {
    const idx = activeIndex.get();
    const targetProject = projects[idx] || projects[0];
    router.push(targetProject.link);
  };

  return (
    <div
      onClick={handleClick}
      data-cursor="open"
      data-cursor-text="OPEN"
      className="absolute inset-0 z-40 cursor-pointer"
      title="Click to view project"
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN FEATURED PROJECTS SHOWCASE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="work" className="relative w-full">
      {/* ─── SECTION HEADER: Selected Work / Featured Projects ─── */}
      <div className="pt-24 pb-12 px-6 md:px-16 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-[#0066ff] text-tag-1 mb-4"
        >
          Selected Work
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: customEase }}
          className="text-h1 text-[#fafafa] leading-tight"
        >
          My <br />
          <span className="text-[#8888aa]">Projects.</span>
        </motion.h2>
      </div>

      {/* ─── DESKTOP FULL-SCREEN REEL SLIDER (md and up) ─── */}
      <div className="hidden md:block">
        {/* Scroll Track of 450vh that pins the 100vh viewport */}
        <div ref={containerRef} className="relative h-[450vh]">
          {/* Pinned 100vh Viewport */}
          <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#06060a]">
            {/* Click Hit Target for Full Screen with OPEN Cursor */}
            <ClickTarget scrollYProgress={scrollYProgress} />

            {/* 1. MASKED IMAGES LAYER */}
            <div className="absolute inset-0 w-full h-full">
              {projects.map((project, index) => (
                <MaskedImageSlide
                  key={project.id}
                  project={project}
                  index={index}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>

            {/* 2. CENTRAL VERTICAL TITLE DRUM / REEL */}
            <TitleDrum scrollYProgress={scrollYProgress} />

            {/* 3. LEFT & RIGHT EDGE PILLS */}
            <EdgePills scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </div>

      {/* ─── MOBILE / TABLET VERTICAL STACK (Full-bleed feel with native touch) ─── */}
      <div className="block md:hidden px-4 pb-20">
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="relative h-[75vh] w-full rounded-3xl overflow-hidden block group border border-white/10"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <span className="text-[10px] font-mono tracking-widest text-[#00ffb7] uppercase mb-2">
                  {project.id} / 04
                </span>
                <h3
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-2"
                >
                  {project.title}
                </h3>
                <p className="text-xs text-white/70 uppercase tracking-wider">
                  {project.year} · {project.role}
                </p>
                <div className="mt-6 px-4 py-2 rounded-full border border-white/20 text-xs font-semibold text-white bg-white/10 backdrop-blur-sm">
                  View Project &rarr;
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
