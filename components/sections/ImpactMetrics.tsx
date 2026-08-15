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
          className="text-[#0066ff] text-tag-1 mb-4"
        >
          Measurable Impact
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: customEase }}
          className="text-h1 text-[#fafafa] leading-tight"
        >
          Numbers that define <br /> 
          <span className="text-[#8888aa]">product success.</span>
        </motion.h2>
      </div>

      {/* 
        Symmetric 2x3 Bento Grid Layout:
        - Row 1: 3 columns (col-span-4 each)
        - Row 2: 3 columns (col-span-4 each)
      */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
        
        {/* Card 1: 300+ Product Screens */}
        <MetricCard
          className="md:col-span-4"
          number="300+"
          title="Product Screens"
          description="Designed across enterprise dashboards, admin panels, and workflow tools — each with full interaction states, edge cases, and developer-ready annotations."
          accent="#0066ff"
          delay={0.2}
          highlighted
        />
        
        {/* Card 2: 8x Faster Delivery With AI Tooling */}
        <MetricCard
          className="md:col-span-4"
          number="8x"
          title="Faster Delivery With AI Tooling"
          description="Designed 200+ screens across 4 personas — 3 mobile, 1 web — and built a full interactive prototype for Vyxora's marketplace platform in just 5 days, using AI-assisted design workflows to compress a typically weeks-long solo process into under a week."
          accent="#00f2ff"
          delay={0.3}
        />
        
        {/* Card 3: 7 Enterprise & Marketplace Products */}
        <MetricCard
          className="md:col-span-4"
          number="7"
          title="Enterprise & Marketplace Products"
          description="Designed across B2B SaaS platforms and a B2B/B2C marketplace — spanning full end-to-end ownership and early-stage research/IA definition, across sustainability, field operations, and expense management domains."
          accent="#ff6b00"
          delay={0.4}
        />
        
        {/* Card 4: 12 Persona-Driven Journeys Mapped */}
        <MetricCard
          className="md:col-span-4"
          number="12"
          title="Persona-Driven Journeys Mapped"
          description="Aligned product flows to distinct user roles across enterprise, marketplace, and field-operations platforms — spanning Admins, Financiers, Employees, Field Employees, Operators, Sellers, Buyers, and QC — reducing onboarding friction and matching features to real mental models."
          accent="#00ff66"
          delay={0.5}
        />
        
        {/* Card 5: 2x Inbound Lead Growth */}
        <MetricCard
          className="md:col-span-4"
          number="2x"
          title="Inbound Lead Growth"
          description="Driven by 25+ UX-optimized landing pages and content architecture built around user intent and search behavior."
          accent="#cc63ff"
          delay={0.6}
        />
        
        {/* Card 6: 3 Product Specs Authored */}
        <MetricCard
          className="md:col-span-4"
          number="3"
          title="Product Specs Authored"
          description="A PRD for a new emissions-management platform, an MRD for SustainOS ESG, and full audit documentation for SustainOS — spanning product definition, market alignment, and compliance review."
          accent="#ff0077"
          delay={0.7}
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
          className="text-h1 font-black tracking-tighter text-left"
          style={{ color: accent }}
        >
          {displayValue}
        </motion.div>
        <h3 className="text-h3 text-[#fafafa] text-left">
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
