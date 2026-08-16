"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const projects = [
  {
    id: "01",
    title: "ADMIN CONTROL\nCENTER",
    ghost: "HEALTHCARE RESEARCH",
    leftPill: "76 Screens",
    rightPill: "Interaction Design",
    accent: "#0066ff",
    caseStudyLink: "/projects/b2b-admin",
    image: "/projects/b2b-admin/hero.png",
    imagePosition: "right center",
  },
  {
    id: "02",
    title: "HEALTHCARE\nRESEARCH",
    ghost: "DR. HEALTH APP",
    leftPill: "187 Participants",
    rightPill: "Persona Development",
    accent: "#cc63ff",
    caseStudyLink: "/projects/preventive-research",
    image: "/images/preventive/hero.png",
    imagePosition: "center center",
  },
  {
    id: "03",
    title: "DR. HEALTH\nAPP",
    ghost: "NCV ICON SYSTEM",
    leftPill: "2 Core Features",
    rightPill: "Usability Testing",
    accent: "#00ffb7",
    caseStudyLink: "/projects/dr-health",
    image: "/projects/dr-health/hero.png",
    imagePosition: "center center",
  },
  {
    id: "04",
    title: "NCV ICON\nSYSTEM",
    ghost: "ADMIN CONTROL CENTER",
    leftPill: "55 Custom Icons",
    rightPill: "Design Systems",
    accent: "#ff6b00",
    caseStudyLink: "/projects/ncv-icons",
    image: "/projects/ncv-icons/hero.png",
    imagePosition: "right center",
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
          className="h-screen w-full relative overflow-hidden bg-[#060609]"
        >
          {/* ─── Full Panel: clickable via router, cursor triggers OPEN state ─── */}
          <div
            data-cursor="open"
            data-cursor-text="OPEN"
            onClick={() => router.push(project.caseStudyLink)}
            className="absolute inset-0 z-0 cursor-pointer"
          />

          {/* ─── 1. RIGHT-ANCHORED HERO IMAGE ─── */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
                className="absolute top-0 right-0 h-full w-[68%] object-cover"
                style={{ objectPosition: project.imagePosition }}
              />
            </motion.div>

            {/* Left dark fade — image bleeds into near-black on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#060609] via-[#060609]/80 to-transparent" />
            {/* Bottom fade for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060609]/70 via-transparent to-transparent" />
            {/* Top vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#060609]/30 via-transparent to-transparent" />
          </div>

          {/* ─── 2. LEFT PILL — vertically centered, left edge ─── */}
          <div className="absolute left-8 md:left-14 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div
              className="px-4 py-2 rounded-full text-white text-[11px] md:text-xs font-semibold tracking-wider border"
              style={{
                backgroundColor: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
                borderColor: "rgba(255,255,255,0.14)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.4)",
              }}
            >
              {project.leftPill}
            </div>
          </div>

          {/* ─── 3. RIGHT PILL — vertically centered, right edge ─── */}
          <div className="absolute right-8 md:right-14 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div
              className="px-4 py-2 rounded-full text-white text-[11px] md:text-xs font-semibold tracking-wider border"
              style={{
                backgroundColor: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
                borderColor: "rgba(255,255,255,0.14)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.4)",
              }}
            >
              {project.rightPill}
            </div>
          </div>

          {/* ─── 4. ACTIVE TITLE — large condensed, centered vertically & horizontally ─── */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none select-none px-20">
            <div
              className="text-center leading-[0.88] tracking-tight text-white uppercase font-black"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(4.5rem, 11vw, 10rem)",
                fontStyle: "italic",
                whiteSpace: "pre-line",
                textShadow: "0 8px 60px rgba(0,0,0,0.8), 0 2px 20px rgba(0,0,0,0.9)",
              }}
            >
              {project.title}
            </div>

            {/* ─── 5. GHOST TITLE — the next project's name, barely visible below ─── */}
            <div
              className="mt-3 md:mt-5 text-center leading-none tracking-tighter text-white uppercase font-black"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(2.5rem, 6.5vw, 6rem)",
                fontStyle: "italic",
                opacity: 0.06,
                whiteSpace: "nowrap",
                letterSpacing: "-0.02em",
                userSelect: "none",
              }}
            >
              {project.ghost}
            </div>
          </div>

          {/* ─── 6. Bottom Accent Line ─── */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[2px] opacity-40 z-30 pointer-events-none"
            style={{ backgroundColor: project.accent }}
          />
        </div>
      ))}
    </section>
  );
}
