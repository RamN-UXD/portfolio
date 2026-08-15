"use client";

import { motion } from "framer-motion";

const customEase = [0.16, 1, 0.3, 1];

export default function About() {
  const paragraphs = [
    "I&apos;m a UX Designer and Product Specialist with 4+ years building interfaces &mdash; and the specifications behind them &mdash; for products that don&apos;t have simple problems. Enterprise admin panels, sustainability data dashboards, multi-persona workflow tools, B2B/B2C marketplaces; the kind of products where getting the information architecture or the product logic wrong means the whole thing fails, no matter how polished the UI looks.",
    "At Net Carbon Vision, I was recently promoted to Specialist &ndash; Product Research &amp; Digital Experience, where I bridge design and engineering on a B2B/B2C marketplace, own product research direction, and lead cross-functional design across a 20+ person team &mdash; recognized for translating ambiguous product briefs into validated, high-fidelity solutions.",
    "Before the promotion, as Digital Experience Specialist at Net Carbon Vision, I contributed to UX design across SustainOS and SustainOS ESG &mdash; authoring product specs, MRDs, and audit-ready documentation &mdash; alongside early-stage research and IA work on an internal expense management platform. Before that, at Mindsbeam Technologies, I spent 2.5 years rebuilding B2B SaaS interfaces end-to-end, shaping brand identities, and designing user journeys across role-based platforms &mdash; 7 products in total across both companies, spanning full end-to-end ownership and early-stage discovery work.",
    "My process starts at the IA layer, whether the deliverable is a screen or a spec. I think in systems &mdash; how information is organized, how navigation distributes complexity, how one configuration decision ripples through the rest of the product and the roadmap behind it. Visual design is the last layer, not the first instinct.",
    "I write detailed handoff documentation &mdash; and own it through UAT and release &mdash; because a design that doesn&apos;t get built correctly, or a spec that doesn&apos;t survive contact with engineering, is a failed outcome regardless of how good it looked upstream.",
    "Currently based in Chennai. Open to senior UX and Product Management roles where design complexity is the standard, not the exception."
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
