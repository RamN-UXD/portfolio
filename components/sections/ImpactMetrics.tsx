"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const customEase = [0.16, 1, 0.3, 1];

export default function ImpactMetrics() {
  return (
    <section className="py-[120px] px-6 md:px-16 max-w-[1400px] mx-auto">
      <div className="mb-20 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-[#0066ff] text-[12px] font-bold tracking-[0.2em] mb-4 uppercase"
        >
          Measurable Impact
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: customEase }}
          className="text-4xl md:text-6xl font-bold text-[#fafafa] leading-tight"
        >
          Numbers that define <br /> 
          <span className="text-[#8888aa]">product success.</span>
        </motion.h2>
      </div>

      {/* 
        Symmetric Bento Grid Layout:
        - Row 1 & 2: Balanced 3-column rows (col-span-4 each) for clean spacing.
        - Row 3: Balanced 2-column row (col-span-6 each) for grounding the grid.
      */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
        
        {/* Card 1: 300+ Product Screens (Compact + Highlighted) */}
        <MetricCard
          className="md:col-span-4"
          number="300+"
          title="Product Screens"
          description="Designed across enterprise dashboards, admin panels, and workflow tools; each with full interaction states, edge cases, and developer-ready annotations."
          accent="#0066ff"
          delay={0.2}
          highlighted
        />
        
        {/* Card 2: 40% Fewer Steps */}
        <MetricCard
          className="md:col-span-4"
          number="40%"
          title="Fewer Steps"
          description="Reduced steps in customer-contact workflows &mdash; cutting task completion time and lowering the margin for agent error."
          accent="#00f2ff"
          delay={0.3}
        />
        
        {/* Card 3: 9 Enterprise Products */}
        <MetricCard
          className="md:col-span-4"
          number="9"
          title="Enterprise Products"
          description="Delivered across a multi-product sustainability suite with consistent UX architecture and brand cohesion throughout."
          accent="#ff6b00"
          delay={0.4}
        />
        
        {/* Card 4: 11 Multi-Persona Journeys */}
        <MetricCard
          className="md:col-span-4"
          number="11"
          title="Multi-Persona Journeys"
          description="Mapped to reduce onboarding time and align product features with role-specific mental models &mdash; for Admins, Financiers, and Field Employees."
          accent="#00ff66"
          delay={0.5}
        />
        
        {/* Card 5: 40+ High-Impact Web Pages */}
        <MetricCard
          className="md:col-span-4"
          number="40+"
          title="High-Impact Web Pages"
          description="Designed and launched across marketing, conversion, and product surfaces &mdash; driving credibility and inbound growth."
          accent="#cc63ff"
          delay={0.6}
        />
        
        {/* Card 6: 2x Inbound Lead Growth */}
        <MetricCard
          className="md:col-span-4"
          number="2&times;"
          title="Inbound Lead Growth"
          description="Driven by UX-optimized landing pages and content architecture built around user intent and search behavior."
          accent="#ff0077"
          delay={0.7}
        />

        {/* Card 7: 5 Sustainability Products */}
        <MetricCard
          className="md:col-span-6"
          number="5"
          title="Sustainability Products"
          description="Translated into audit-ready UX documentation &mdash; supporting software compliance reviews and cross-functional process audits."
          accent="#00ffb7"
          delay={0.8}
        />

        {/* Card 8: 4 SaaS Platforms Rebuilt */}
        <MetricCard
          className="md:col-span-6"
          number="4"
          title="SaaS Platforms Rebuilt"
          description="End-to-end redesigns at Mindsbeam &mdash; from legacy UI audit to component-level redesign and structured developer handoff."
          accent="#ffcc00"
          delay={0.9}
        />
      </div>
    </section>
  );
}

function MetricCard({ 
  className, 
  number, 
  title, 
  description, 
  accent, 
  delay,
  highlighted = false
}: { 
  className: string; 
  number: string; 
  title: string; 
  description: string; 
  accent: string;
  delay: number;
  highlighted?: boolean;
}) {
  const [displayValue, setDisplayValue] = useState("0");
  const hasAnimated = useRef(false);

  const startAnimation = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    
    const numericPart = parseInt(number.replace(/\D/g, "")) || 0;
    const suffix = number.replace(/[0-9]/g, "");
    
    const duration = 1500;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      
      setDisplayValue(Math.round(eased * numericPart).toString() + suffix);
      
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [number]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      onViewportEnter={startAnimation}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: customEase }}
      whileHover={{ y: -10, transition: { duration: 0.4 } }}
      // Fixed: Replaced 'justify-between' with 'justify-start gap-6' to force all elements to align perfectly to the top and cascade down uniformly.
      className={`relative group border rounded-3xl p-8 pb-14 overflow-hidden flex flex-col justify-start items-start text-left gap-6 transition-colors duration-500 ${
        highlighted 
          ? "bg-[rgba(0,102,255,0.08)] border-[#0066ff]/40 shadow-[0_0_30px_rgba(0,102,255,0.1)]" 
          : "bg-[rgba(48,46,97,0.3)] border-white/10"
      } ${className}`}
    >
      {/* Background Glow */}
      <div 
        className={`absolute -top-24 -right-24 rounded-full blur-[80px] transition-opacity duration-700 ${
          highlighted 
            ? "w-64 h-64 bg-[#0066ff]/30 opacity-50 group-hover:opacity-75" 
            : "w-48 h-48 bg-[#8888aa] opacity-20 group-hover:opacity-40"
        }`}
        style={highlighted ? {} : { backgroundColor: accent }}
      />
      
      {/* Core Highlight Pill */}
      {highlighted && (
        <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-[#0066ff]/15 border border-[#0066ff]/35 text-[9px] font-bold text-white tracking-widest uppercase">
          Core Craft
        </div>
      )}

      <div className="w-full text-left flex flex-col items-start gap-2">
        <motion.div 
          className="text-6xl md:text-8xl font-black tracking-tighter text-left"
          style={{ color: accent }}
        >
          {displayValue}
        </motion.div>
        <h3 className="text-xl md:text-2xl font-bold text-[#fafafa] text-left">
          {title}
        </h3>
      </div>
      
      <p className="text-[#8888aa] text-[0.95rem] leading-relaxed text-left w-full">
        {description}
      </p>

      {/* Dynamic Progress Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: delay + 0.5, ease: customEase }}
          className="h-full w-full"
          style={{ backgroundColor: accent }}
        />
      </div>
    </motion.div>
  );
}
