"use client";

import { motion } from "framer-motion";

export default function CredibilityBar() {
  const customEase = [0.16, 1, 0.3, 1];

  return (
    <motion.section
      id="work"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-80px", once: true }}
      transition={{ duration: 1, ease: customEase }}
      className="py-12 border-t border-b border-[rgba(255,255,255,0.06)] px-6 md:px-16"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        {/* Top Label & Companies */}
        <div className="flex flex-col items-center mb-10 gap-2">
          <span className="text-[11px] tracking-[0.15em] text-[#8888aa] uppercase">
            Experience at
          </span>
          <div className="text-[1.05rem] font-medium text-[#fafafa]">
            Net Carbon Vision <span className="mx-3 opacity-50">·</span> Mindsbeam Technologies
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl flex flex-col items-center">
          <span className="text-[4rem] leading-none text-[#0066ff] mb-4">
            &ldquo;
          </span>
          <p className="text-[1.1rem] md:text-[1.25rem] text-[#fafafa] leading-relaxed mb-6 font-medium">
            Ramamoorthy consistently translated ambiguous requirements into
            structured, interaction-rich interfaces that our dev team could
            build without back-and-forth.
          </p>
          <span className="text-[13px] text-[#8888aa]">
            — Director of Engineering, Net Carbon Vision
          </span>
        </div>
      </div>
    </motion.section>
  );
}
