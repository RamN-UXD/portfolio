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
        "Adobe Illustrator",
        "Framer",
        "Miro",
        "Adobe Suite",
        "JIRA",
        "Slack",
        "Google Analytics",
        "Gen AI-enhanced workflows"
      ],
      proof: "55 custom icons built in Adobe Illustrator on a structured 64&times;64px grid. Portfolio site designed and published in Framer.",
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
      proof: "Coordinated with data engineering teams on .dat &rarr; Apache Parquet transformation. Authored design specifications adopted directly into React implementation without revision cycles.",
      accent: "#ff6b00"
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

      {/* Majestic Asymmetric 2x2 Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: customEase }}
            whileHover={{ y: -10, transition: { duration: 0.4 } }}
            className="relative group bg-[rgba(48,46,97,0.18)] border border-white/5 hover:border-white/15 rounded-[40px] p-8 md:p-10 flex flex-col justify-between items-start text-left min-h-[500px] overflow-hidden transition-all duration-500"
          >
            {/* Background Accent Glow */}
            <div 
              className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[100px] opacity-10 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none"
              style={{ backgroundColor: group.accent }}
            />

            {/* Top row: Dot Indicator */}
            <div className="w-full">
              <div className="mb-6">
                <div 
                  className="w-2.5 h-2.5 rounded-full" 
                  style={{ backgroundColor: group.accent }}
                />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight leading-tight">
                {group.title}
              </h3>

              {/* Tag Cloud of Individual Skills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {group.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-white/70 bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Segment: Case Proof Box */}
            <div className="w-full mt-auto pt-6 border-t border-white/5">
              <p className="text-[10px] uppercase tracking-widest text-[#8888aa] mb-2 font-bold">
                Real-World Execution &amp; Proof
              </p>
              <p 
                className="text-white/90 text-sm md:text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: group.proof }}
              />
            </div>

            {/* Progressive Bottom Highlight Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: idx * 0.1 + 0.3, ease: customEase }}
                className="h-full w-full"
                style={{ backgroundColor: group.accent }}
              />
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
