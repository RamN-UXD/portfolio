"use client";

import { motion } from "framer-motion";

const customEase = [0.16, 1, 0.3, 1];

export default function Experience() {
  const experiences = [
    {
      company: "Net Carbon Vision",
      role: "Specialist – Product Research & Digital Experience",
      period: "Jun 2026 – Present &middot; Chennai, India",
      color: "#0066ff",
      bullets: [
        "Promoted to lead product research direction and cross-functional design across a 20+ person team — recognized for translating ambiguous product briefs into validated, high-fidelity UX solutions aligned to business goals.",
        "Bridging design and engineering on the Vyxora B2B/B2C marketplace — resolving implementation gaps, optimizing user flows, and ensuring design intent is faithfully delivered end-to-end.",
      ]
    },
    {
      company: "Net Carbon Vision",
      role: "Digital Experience Specialist",
      period: "Oct 2024 – May 2026 &middot; Chennai, India",
      color: "#00f2ff",
      bullets: [
        "Contributed to UX design across SustainOS and SustainOS ESG — enterprise sustainability dashboards, compliance tools, and data visualization.",
        "Authored the PRD for a new Scope 3 Emissions Management Platform — defining core requirements and scope for enterprise carbon-accounting workflows.",
        "Authored the MRD for SustainOS ESG, translating market and stakeholder requirements into a single structured specification.",
        "Produced comprehensive audit documentation for SustainOS — covering existing screens, features, functionality, and journeys — supporting the software compliance audit.",
        "Owned end-to-end design for Vyxora across 3 major scope pivots — from an initial seller-only mobile MVP, shipped as APK with a full walkthrough video for client sign-off, to a full multi-persona platform spanning Seller, Buyer, QC, and Admin roles.",
        "Identified feasibility gaps in a client-submitted requirements document during discovery — preventing a misaligned build and driving a stakeholder-aligned requirements reset.",
        "Pushed back on a request to embed 82 form fields into the mobile product creation flow — proposed and defended a mandatory/optional field split that preserved usability without losing business requirements.",
        "Delivered 200+ screens across 4 personas and a full interactive prototype in 5 days using AI-assisted design workflows — compressing a typically weeks-long process into under a week.",
        "Took an internal expense management platform from research through IA and hi-fi design — mapping persona-driven flows for Admins, Financiers, and Employees.",
        "Designed the investor pitch presentation for Net Carbon Vision — helping secure external investment.",
        "Learned and built an AI agent to monitor Net Carbon Vision's website uptime — detecting downtime, identifying failure causes, sending real-time alerts, and logging incidents.",
      ]
    },
    {
      company: "Mindsbeam Technologies",
      role: "UI/UX Designer",
      period: "Dec 2021 – Apr 2024 &middot; Remote",
      color: "#cc63ff",
      bullets: [
        "Rebuilt Lystloc end-to-end across 5 core modules — eliminating workflows that previously required 11-15 clicks — from legacy UI audit to component-level redesign and structured developer handoff.",
        "Designed the Lystface mobile app end-to-end — from IA through hi-fi prototyping — shaping the core navigation and interaction model for its first mobile release.",
        "Took Lystdata from requirements gathering through lo-fi wireframes and IA, defining the product's information architecture and structure for a from-scratch B2B SaaS build.",
        "Redesigned the B2B admin control center: transformed a single scroll-heavy settings page into a structured two-panel system with 8 navigable categories and 76 annotated interaction states.",
        "Delivered brand identity systems for Lystloc, Lystface, Lystproof, and Mindsbeam itself — including a 15+ asset identity and responsive marketing site for Lystproof, plus logo, visual language, typography, and digital guidelines across the others.",
        "Delivered 25+ SEO-optimized landing pages, contributing to a 2x increase in inbound lead generation.",
      ]
    }
  ];

  return (
    <section className="py-[120px] px-6 md:px-16 max-w-[1400px] mx-auto">
      {/* Section Header */}
      <div className="mb-24 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-[#0066ff] text-tag-1 mb-4"
        >
          Experience
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: customEase }}
          className="text-h1 text-[#fafafa] leading-tight"
        >
          Experience That <br />
          <span className="text-[#8888aa]">Drives Outcomes.</span>
        </motion.h2>
      </div>

      {/* Experience Timeline Grid */}
      <div className="flex flex-col gap-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: idx * 0.15, ease: customEase }}
            className="group relative flex flex-col lg:flex-row gap-8 lg:gap-16 p-8 md:p-14 rounded-[48px] bg-[rgba(48,46,97,0.18)] border border-white/5 hover:border-white/12 hover:bg-[rgba(48,46,97,0.22)] transition-all duration-700 overflow-hidden"
          >
            {/* Background Accent Radial Glow */}
            <div 
              className="absolute -top-32 -left-32 w-72 h-72 rounded-full blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none"
              style={{ backgroundColor: exp.color }}
            />

            {/* Left Segment: Role & Company Identity (Sticky on Desktop) */}
            <div className="lg:w-[35%] flex flex-col justify-start items-start gap-4">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight group-hover:text-white transition-colors duration-300">
                {exp.company}
              </h3>
              
              <p 
                className="text-lg md:text-xl font-bold tracking-tight"
                style={{ color: exp.color }}
              >
                {exp.role}
              </p>

              <span 
                className="px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-xs font-semibold text-white/80 inline-block mt-2"
                dangerouslySetInnerHTML={{ __html: exp.period }}
              />
            </div>

            {/* Right Segment: Metric Bullets Cascade */}
            <div className="lg:w-[65%] flex flex-col gap-6 items-start">
              {exp.bullets.map((bullet, bIdx) => (
                <div 
                  key={bIdx} 
                  className="flex items-start gap-4 w-full text-left group/bullet"
                >
                  {/* Interactive Custom Check Icon */}
                  <CheckIcon color={exp.color} />
                  
                  {/* Bullet description text */}
                  <p 
                    className="text-[#8888aa] group-hover/bullet:text-[#fafafa] transition-colors duration-300 text-sm md:text-base lg:text-[1.05rem] leading-relaxed pt-0.5"
                    dangerouslySetInnerHTML={{ __html: bullet }}
                  />
                </div>
              ))}
            </div>

            {/* Premium Highlight Border Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: idx * 0.15 + 0.3, ease: customEase }}
                className="h-full w-full"
                style={{ backgroundColor: exp.color }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CheckIcon({ color }: { color: string }) {
  return (
    <svg 
      className="w-5 h-5 shrink-0 mt-1 transition-transform duration-300 group-hover/bullet:scale-110" 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle 
        cx="10" 
        cy="10" 
        r="9" 
        stroke={`${color}40`} 
        strokeWidth="2" 
        fill={`${color}08`} 
        className="transition-colors duration-300 group-hover/bullet:stroke-current" 
      />
      <path 
        d="M6 10L9 13L14 7" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}
