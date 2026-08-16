"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const projects = [
  {
    id: "01",
    title: "ADMIN CONTROL CENTER",
    ghost: "HEALTHCARE RESEARCH",
    leftPill: "76 Screens",
    rightPill: "Interaction Design",
    accent: "#0066ff",
    caseStudyLink: "/projects/b2b-admin",
    image: "/projects/b2b-admin/hero.png",
  },
  {
    id: "02",
    title: "HEALTHCARE RESEARCH",
    ghost: "DR. HEALTH APP",
    leftPill: "187 Participants",
    rightPill: "Persona Development",
    accent: "#cc63ff",
    caseStudyLink: "/projects/preventive-research",
    image: "/images/preventive/hero.png",
  },
  {
    id: "03",
    title: "DR. HEALTH APP",
    ghost: "NCV ICON SYSTEM",
    leftPill: "2 Core Features",
    rightPill: "Usability Testing",
    accent: "#00ffb7",
    caseStudyLink: "/projects/dr-health",
    image: "/projects/dr-health/hero.png",
  },
  {
    id: "04",
    title: "NCV ICON SYSTEM",
    ghost: "ADMIN CONTROL CENTER",
    leftPill: "55 Custom Icons",
    rightPill: "Design Systems",
    accent: "#ff6b00",
    caseStudyLink: "/projects/ncv-icons",
    image: "/projects/ncv-icons/hero.png",
  },
];

export default function FeaturedProjectsV2() {
  const router = useRouter();

  return (
    <section id="work-v2" className="relative w-full">
      {projects.map((project, idx) => (
        <div
          key={project.id}
          style={{
            position: "sticky",
            top: 0,
            zIndex: (idx + 1) * 10,
          }}
          className="h-screen w-full relative overflow-hidden"
        >
          {/* ─── Clickable overlay (invisible, full panel) ─── */}
          <div
            data-cursor="open"
            data-cursor-text="OPEN"
            onClick={() => router.push(project.caseStudyLink)}
            className="absolute inset-0 z-20 cursor-pointer"
          />

          {/* ─── FULL-BLEED IMAGE — no overlays, covers 100% width & height ─── */}
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.07, 1] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* ─── LEFT PILL — vertically centered, left edge ─── */}
          <div className="absolute left-8 md:left-14 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
            <div
              className="px-4 py-2 rounded-full text-white text-[11px] md:text-xs font-semibold tracking-wider border"
              style={{
                backgroundColor: "rgba(0,0,0,0.35)",
                backdropFilter: "blur(12px)",
                borderColor: "rgba(255,255,255,0.25)",
              }}
            >
              {project.leftPill}
            </div>
          </div>

          {/* ─── RIGHT PILL — vertically centered, right edge ─── */}
          <div className="absolute right-8 md:right-14 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
            <div
              className="px-4 py-2 rounded-full text-white text-[11px] md:text-xs font-semibold tracking-wider border"
              style={{
                backgroundColor: "rgba(0,0,0,0.35)",
                backdropFilter: "blur(12px)",
                borderColor: "rgba(255,255,255,0.25)",
              }}
            >
              {project.rightPill}
            </div>
          </div>

          {/* ─── TITLE — centered, single line, H2 size, no italic ─── */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none select-none">
            <h2
              className="text-center text-white uppercase font-black tracking-tight leading-none whitespace-nowrap"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontStyle: "normal",
              }}
            >
              {project.title}
            </h2>

            {/* Ghost text — next project's name, barely visible */}
            <div
              className="mt-4 text-center text-white uppercase font-black tracking-tight leading-none whitespace-nowrap"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(1.2rem, 2.8vw, 2.2rem)",
                fontStyle: "normal",
                opacity: 0.08,
                userSelect: "none",
              }}
            >
              {project.ghost}
            </div>
          </div>

          {/* ─── Bottom accent bar ─── */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[2px] opacity-50 z-30 pointer-events-none"
            style={{ backgroundColor: project.accent }}
          />
        </div>
      ))}
    </section>
  );
}
