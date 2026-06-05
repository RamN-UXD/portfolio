"use client";

import { motion } from "framer-motion";

const customEase = [0.16, 1, 0.3, 1];

export default function About() {
  const paragraphs = [
    "I&apos;m a UX designer with 4 years of experience building interfaces for products that don&apos;t have simple problems. Enterprise admin panels, sustainability data dashboards, multi-persona workflow tools, field workforce management systems; the kind of products where getting the information architecture wrong means the whole thing fails, no matter how polished the UI looks.",
    "At Net Carbon Vision, I lead design across 9 enterprise products; from dashboard architecture and real-time data visualization to developer handoff documentation and audit-ready UX specs. Before that, at Mindsbeam Technologies, I spent 2.5 years rebuilding SaaS interfaces from the ground up, shaping brand identities, and designing user journeys across role-based platforms.",
    "My process starts at the IA layer. I think in systems; how information is organized, how navigation distributes complexity, how a configuration decision in one part of the product ripples into another. Visual design is the last layer, not the first instinct.",
    "I write detailed handoff documentation because a design that doesn&apos;t get built correctly is a failed design, regardless of how good it looked in Figma.",
    "Currently based in Chennai. Open to senior UX roles where design complexity is the standard, not the exception."
  ];

  return (
    <section className="py-[160px] px-6 md:px-16 overflow-hidden max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Premium Cinematic Image Framing (spans 5 cols) */}
        <div className="lg:col-span-5 w-full flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: customEase }}
            className="relative rounded-[40px] overflow-hidden border border-white/10 bg-white/5 aspect-[4/5] w-full group"
          >
            {/* Interactive Portrait Image */}
            <img 
              src="/designer_portrait.jpg" 
              alt="Ramamoorthy Portrait" 
              className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
            
            {/* Elegant Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />

            {/* Glowing Accent Ring */}
            <div className="absolute inset-0 border border-[#0066ff]/0 group-hover:border-[#0066ff]/20 rounded-[40px] transition-colors duration-700 pointer-events-none" />
          </motion.div>
        </div>

        {/* Right Column: Editorial Typography Narrative (spans 7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="text-[#0066ff] text-tag-1 mb-4"
          >
            About
          </motion.div>

          {/* Headline Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: customEase }}
            className="text-h1 text-[#fafafa] leading-tight mb-10 tracking-tight"
          >
            Identity, Approach, <br />
            <span className="text-[#8888aa]">Intent.</span>
          </motion.h2>

          {/* Narrative Body Paragraphs Stack */}
          <div className="flex flex-col gap-6 text-[#8888aa] text-body-lg font-normal max-w-2xl">
            {paragraphs.map((para, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: customEase }}
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
