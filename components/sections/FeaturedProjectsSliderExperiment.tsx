"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "ADMIN CONTROL CENTER",
    year: "2025",
    role: "Interaction Design",
    link: "/projects/b2b-admin",
    image: "/projects/b2b-admin/hero.png",
  },
  {
    id: "02",
    title: "HEALTHCARE RESEARCH",
    year: "2024",
    role: "UX Research & Strategy",
    link: "/projects/preventive-research",
    image: "/images/preventive/hero.png",
  },
  {
    id: "03",
    title: "DR. HEALTH APP",
    year: "2024",
    role: "Mobile Usability Testing",
    link: "/projects/dr-health",
    image: "/projects/dr-health/hero.png",
  },
  {
    id: "04",
    title: "NCV ICON SYSTEM",
    year: "2024",
    role: "Design Systems & Icons",
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
      style={{ y: outerY, zIndex: (index + 1) * 10 }}
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
  // Opacity: 1.0 when active in center, ~0.10 when ghosted above or below
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
// 3. LEFT & RIGHT EDGE-PINNED PILLS
// ─────────────────────────────────────────────────────────────────────────────
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
// MAIN SHOWCASE SECTION COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function FeaturedProjectsSliderExperiment() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="showcase-reel-experiment" className="relative w-full">
      {/* ─── DESKTOP FULL-SCREEN REEL SLIDER (md and up) ─── */}
      <div className="hidden md:block">
        {/* Scroll Track of 450vh that pins the 100vh viewport */}
        <div ref={containerRef} className="relative h-[450vh]">
          {/* Pinned 100vh Viewport */}
          <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#06060a]">
            {/* Click Hit Target for Full Screen with OPEN Cursor */}
            <ClickTarget scrollYProgress={scrollYProgress} />

            {/* 1. SECTION TITLE (Pinned Top-Left) */}
            <div className="absolute top-10 left-10 md:top-14 md:left-14 z-50 pointer-events-none">
              <h6 className="text-xs md:text-sm font-semibold tracking-[0.2em] text-white/75 uppercase">
                Things I’ve done…
              </h6>
            </div>

            {/* 2. PROGRESS INDICATOR (Pinned Top-Right) */}
            <div className="absolute top-10 right-10 md:top-14 md:right-14 z-50 pointer-events-none font-mono text-xs md:text-sm text-white/75 tracking-widest">
              <span>01 &mdash; 04</span>
            </div>

            {/* 3. MASKED IMAGES LAYER (Fixed Image with Sweeping Mask) */}
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

            {/* 4. CENTRAL VERTICAL TITLE DRUM / REEL */}
            <TitleDrum scrollYProgress={scrollYProgress} />

            {/* 5. LEFT & RIGHT EDGE PILLS */}
            <EdgePills scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </div>

      {/* ─── MOBILE / TABLET VERTICAL STACK ─── */}
      <div className="block md:hidden">
        <div className="px-6 pt-16 pb-8">
          <h6 className="text-xs font-semibold tracking-[0.2em] text-white/70 uppercase mb-2">
            Things I’ve done…
          </h6>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Selected Works
          </h2>
        </div>

        <div className="flex flex-col">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="relative h-[80vh] w-full block overflow-hidden group border-b border-white/10"
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
                  className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-2"
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
