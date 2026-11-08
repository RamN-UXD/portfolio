"use client";

import { motion } from "framer-motion";

const customEase = [0.16, 1, 0.3, 1];

const COLUMNS = [
  {
    label: "WHAT I DO",
    accent: "#00f0ff",
    content: (
      <>
        I design digital products across B2B and B2C ecosystems, from{" "}
        <span className="text-white font-medium">enterprise dashboards and e-commerce marketplaces</span>{" "}
        to <span className="text-white font-medium">field workforce tools</span>. I turn complex
        business requirements and user needs into{" "}
        <span className="text-white font-medium">intuitive, scalable product experiences</span>.
      </>
    ),
  },
  {
    label: "HOW I WORK",
    accent: "#0066ff",
    content: (
      <>
        <span className="text-white font-medium">Research first, architecture second, pixels last.</span>{" "}
        I uncover user pain points,{" "}
        <span className="text-white font-medium">simplify complex workflows</span>, structure
        information, and translate insights into purposeful interactions and{" "}
        <span className="text-white font-medium">detailed design specifications</span>.
      </>
    ),
  },
  {
    label: "WHERE IT WORKS",
    accent: "#cc63ff",
    content: (
      <>
        <span className="text-white font-medium">
          Sustainability SaaS, e-commerce, field workforce management
        </span>
        , and other complex digital ecosystems. I work alongside product managers, developers, and
        business stakeholders to{" "}
        <span className="text-white font-medium">
          align user needs, business goals, and technical possibilities
        </span>
        .
      </>
    ),
  },
  {
    label: "THE OUTCOME",
    accent: "#00ffb7",
    content: (
      <>
        <span className="text-white font-medium">Workflows simplified by ~30%</span>. Complex
        journeys requiring{" "}
        <span className="text-white font-medium">11&ndash;15 clicks redesigned for efficiency</span>.
        User experiences shaped by research, thoughtful design decisions, and{" "}
        <span className="text-white font-medium">measurable outcomes</span>.
      </>
    ),
  },
];

export default function StatementHero() {
  return (
    <section className="relative pt-32 sm:pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-16 max-w-[1400px] mx-auto overflow-hidden">
      {/* Subtle ambient background glow */}
      <div 
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#0066ff]/10 blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#00f0ff]/5 blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10">
        {/* Large Display Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: customEase }}
          className="max-w-5xl"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-[-0.03em] leading-[1.12] text-white">
            <span className="block text-white/90">I turn</span>
            <span className="block font-extrabold bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] via-[#818cf8] to-[#c084fc] bg-clip-text text-transparent pb-[0.14em] -mb-[0.14em]">
              ambiguous problems
            </span>
            <span className="block text-white">into products teams can build</span>
            <span className="block text-[#00ffb7]">and users can trust.</span>
          </h1>
        </motion.div>

        {/* 4-Column Layout */}
        <div className="border-t border-white/10 pt-10 md:pt-14 mt-16 md:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {COLUMNS.map((col, index) => (
              <motion.div
                key={col.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 + index * 0.1, ease: customEase }}
                className="flex flex-col items-start"
              >
                {/* Column Title with Accent Dot */}
                <div className="flex items-center gap-2 mb-3.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: col.accent }}
                  />
                  <h3 className="font-sans text-[12px] sm:text-[13px] font-semibold tracking-[0.16em] uppercase text-white/80">
                    {col.label}
                  </h3>
                </div>

                {/* Column Body with Medium Highlights */}
                <p className="font-sans text-[14px] sm:text-[15px] font-normal leading-[1.7] text-[#9e9eb4]">
                  {col.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

