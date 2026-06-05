"use client";

import { motion } from "framer-motion";

const customEase = [0.16, 1, 0.3, 1];

export default function DomainExpertise() {
  const expertises = [
    {
      index: "01",
      title: "Enterprise SaaS & Admin Systems",
      description: "Role-based admin panels, permission hierarchies, complex configuration workflows, multi-state interaction design, and developer handoff at scale.",
      projects: ["Company Settings Redesign", "Expense Management SaaS"],
      icon: "ti-building-skyscraper",
      accent: "#0066ff",
    },
    {
      index: "02",
      title: "Sustainability & Data Platforms",
      description: "Real-time dashboards for sustainability metrics, audit-ready UX documentation, and translating SME domain knowledge into intuitive product interfaces.",
      projects: ["Net Carbon Vision Enterprise Suite", "Sustainability Dashboard"],
      icon: "ti-leaf",
      accent: "#00ffb7",
    },
    {
      index: "03",
      title: "Research-Led Product Design",
      description: "End-to-end UX research, user surveys, stakeholder interviews, synthesis, persona creation; directly wired to design decisions and feature prioritization.",
      projects: ["Preventive Healthcare Research", "Dr.Health App Design"],
      icon: "ti-search",
      accent: "#cc63ff",
    },
  ];

  return (
    <section className="py-[120px] px-6 md:px-16 overflow-hidden max-w-[1400px] mx-auto">
      <div className="mb-20 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-[#0066ff] text-tag-1 mb-4"
        >
          Specialized Knowledge
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: customEase }}
          className="text-h1 text-[#fafafa] leading-tight"
        >
          Where My Design Thinking <br />
          <span className="text-[#8888aa]">Runs Deep.</span>
        </motion.h2>
      </div>

      {/* 3-Column Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {expertises.map((item, idx) => (
          <ExpertiseCard key={idx} item={item} delay={idx * 0.1} />
        ))}
      </div>
    </section>
  );
}

function ExpertiseCard({
  item,
  delay
}: {
  item: {
    index: string;
    title: string;
    description: string;
    projects: string[];
    icon: string;
    accent: string;
  };
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: customEase }}
      whileHover={{ y: -10, transition: { duration: 0.4 } }}
      className="relative group bg-[rgba(48,46,97,0.18)] border border-white/5 hover:border-white/15 rounded-[40px] p-8 md:p-10 flex flex-col justify-between items-start text-left min-h-[580px] overflow-hidden transition-all duration-500"
    >
      {/* Background Radial Accent Glow */}
      <div
        className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[100px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
        style={{ backgroundColor: item.accent }}
      />

      {/* Top Banner: Icon */}
      <div className="w-full flex justify-start items-center mb-8">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 text-white/80 group-hover:text-white transition-colors duration-500"
          style={{ boxShadow: `0 0 20px rgba(0, 0, 0, 0.2)` }}
        >
          <i className={`ti ${item.icon} text-2xl`} style={{ color: item.accent }} />
        </div>
      </div>

      {/* Title & Description Column Flow */}
      <div className="w-full flex flex-col items-start gap-4 mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
          {item.title}
        </h3>
        <p className="text-[#8888aa] text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description }} />
      </div>

      {/* Bottom Segment: Featured Projects Showcase */}
      <div className="mt-auto pt-8 border-t border-white/5 w-full">
        <p className="text-tag-2 text-[#8888aa] mb-4">
          Featured Projects
        </p>
        <div className="flex flex-col gap-3">
          {item.projects.map((proj, idx) => (
            <div key={idx} className="flex items-center gap-3 text-[#fafafa]/85 group-hover/proj:text-white transition-colors">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.accent }} />
              <span className="text-sm font-medium leading-none">{proj}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Highlight Border Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: delay + 0.4, ease: customEase }}
          className="h-full w-full"
          style={{ backgroundColor: item.accent }}
        />
      </div>
    </motion.div>
  );
}
