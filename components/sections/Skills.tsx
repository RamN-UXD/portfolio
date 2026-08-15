"use client";

import { motion } from "framer-motion";

const customEase = [0.16, 1, 0.3, 1];

export default function Skills() {
  const skillGroups = [
    {
      id: "01",
      title: "UX Research & Strategy",
      skills: [
        "User Surveys",
        "Stakeholder Interviews",
        "Usability Testing",
        "Competitor Analysis",
        "Persona Development",
        "Journey Mapping",
        "Research Synthesis",
        "UX Documentation"
      ],
      proof: "187 participants across 3 surveys and 14 in-depth interviews &mdash; synthesized into 18 validated problem statements and a prioritized feature roadmap for a preventive healthcare product.",
      accent: "#0066ff"
    },
    {
      id: "02",
      title: "UX Design Execution",
      skills: [
        "Wireframing",
        "Hi-Fi UI Design",
        "Interaction States",
        "Progressive Disclosure",
        "Design Systems",
        "Responsive Design",
        "Iconography",
        "Micro-interactions",
        "Prototyping"
      ],
      proof: "76 screens across 8 settings categories &mdash; default, enabled, configured, and edge-case states &mdash; with full developer annotation delivered for React implementation.",
      accent: "#cc63ff"
    },
    {
      id: "03",
      title: "Tools & Systems",
      skills: [
        "Figma",
        "FigMake",
        "Framer",
        "Miro",
        "Adobe XD",
        "Adobe Illustrator",
        "Adobe InDesign",
        "Adobe Photoshop",
        "Adobe Premier Pro",
        "Adobe After Effects",
        "JIRA",
        "Slack",
        "Google Analytics",
        "Gen AI tools"
      ],
      proof: "55 custom icons built in Adobe Illustrator on a structured 64&times;64px grid. Interactive components and portfolio built across Figma and Framer.",
      accent: "#00ffb7"
    },
    {
      id: "04",
      title: "Strategic & Cross-Functional Collaboration",
      skills: [
        "Agile Sprints",
        "MVP Scoping",
        "Stakeholder Presentations",
        "Dev Handoff Documentation",
        "CRUD Specification",
        "Cross-functional Coordination"
      ],
      proof: "Coordinated cross-functionally across engineering, product, and business teams. Authored design specifications adopted directly into React implementation.",
      accent: "#ff6b00"
    },
    {
      id: "05",
      title: "Product Management",
      skills: [
        "Product Discovery",
        "PRD & MRD Authorship",
        "Roadmap Planning",
        "Backlog Management",
        "UAT",
        "Release Management",
        "Product Auditing",
        "Investor Pitch Preparation"
      ],
      proof: "Authored product specs, MRDs, and software audit documentation for SustainOS ESG &mdash; managing product definition, roadmap alignment, UAT, and release coordination.",
      accent: "#ff0077"
    }
  ];

  return (
    <section className="py-[120px] px-6 md:px-16 max-w-[1400px] mx-auto">
      {/* Section Header */}
      <div className="mb-20 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-[#0066ff] text-tag-1 mb-4"
        >
          Skills
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: customEase }}
          className="text-h1 text-[#fafafa] leading-tight"
        >
          Design Expertise <br />
          <span className="text-[#8888aa]">in Practice.</span>
        </motion.h2>
      </div>

      {/* Horizontal Strip Layout */}
      <div className="flex flex-col divide-y divide-white/5 border border-white/5 rounded-[32px] overflow-hidden">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: customEase }}
            className="relative group flex flex-col md:flex-row md:items-center gap-6 md:gap-12 px-8 md:px-12 py-8 bg-[rgba(48,46,97,0.1)] hover:bg-[rgba(48,46,97,0.25)] transition-all duration-500 overflow-hidden cursor-default"
          >
            {/* Left accent bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ backgroundColor: group.accent }}
            />

            {/* Background glow */}
            <div
              className="absolute -top-20 -left-20 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
              style={{ backgroundColor: group.accent }}
            />

            {/* Left: Category label */}
            <div className="md:w-64 shrink-0 flex items-start gap-4">
              <span
                className="text-xs font-black tracking-[0.2em] mt-0.5 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: group.accent }}
              >
                {group.id}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-white leading-snug group-hover:text-white transition-colors duration-300">
                {group.title}
              </h3>
            </div>

            {/* Right: Skill pills */}
            <div className="flex flex-wrap gap-2 flex-1">
              {group.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full text-[11px] font-semibold text-white/50 bg-white/5 border border-white/8 group-hover:text-white/80 group-hover:border-white/20 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
