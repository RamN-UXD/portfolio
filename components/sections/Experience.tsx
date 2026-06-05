"use client";

import { motion } from "framer-motion";

const customEase = [0.16, 1, 0.3, 1];

export default function Experience() {
  const experiences = [
    {
      company: "Net Carbon Vision",
      role: "Digital Experience Specialist",
      period: "Oct 2024 – Present &middot; Chennai, India",
      color: "#0066ff",
      bullets: [
        "Lead end-to-end UX and interface strategy across 9 enterprise sustainability products &mdash; covering dashboards, multi-persona tools, and data visualization modules.",
        "Designed and launched a 15+ page content-driven website &mdash; Products, Services, Verticals, Blogs, FAQs, and conversion funnels &mdash; from stakeholder brief to shipped version.",
        "Redesigned the B2B admin control center: transformed a single scroll-heavy settings page into a structured two-panel system with 8 navigable categories and 76 annotated interaction states.",
        "Built persona-driven UX flows for Admins, Financiers, and Field Employees in a role-based expense management platform &mdash; covering travel logging, per diem tracking, and approval workflows.",
        "Authored audit-ready UX documentation for 5 sustainability products &mdash; supporting internal compliance reviews and cross-functional process audits.",
        "Coordinated with data engineering teams on industrial schema transformation aligned with Apache Parquet standards &mdash; bridging design and technical delivery."
      ]
    },
    {
      company: "Mindsbeam Technologies",
      role: "UI/UX Designer",
      period: "Dec 2021 – Apr 2024 &middot; Remote",
      color: "#cc63ff",
      bullets: [
        "Rebuilt 4 B2B SaaS interfaces end-to-end &mdash; from legacy UI audits to component-level redesign, design system creation, and structured developer handoff.",
        "Designed and delivered 3 brand identity systems &mdash; logo, visual language, typography, color systems, and digital guidelines &mdash; from concept to client approval.",
        "Mapped 6+ user journeys across multiple personas for role-based software products &mdash; aligning feature sets with persona-specific mental models and task flows.",
        "Delivered 40+ responsive web pages across marketing, conversion, and product surfaces &mdash; contributing to a 2&times; increase in inbound lead generation.",
        "Scoped and designed UX for MVPs across early-stage product engagements &mdash; balancing speed, scope, and design quality within Agile sprint cycles.",
        "Managed design-to-development handoffs across cross-functional teams &mdash; producing annotated specs, component documentation, and design rationale for each delivery."
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
