"use client";

import { motion } from "framer-motion";
import CTAFooter from "../../../components/sections/CTAFooter";
import CustomCursor from "../../../components/CustomCursor";
import Navbar from "../../../components/Navbar";

const customEase = [0.16, 1, 0.3, 1];

/* ─── All 55 NCV icon assets ─── */
const icons = [
  { label: "Icon 1",  defaultSrc: "/projects/ncv-icons/icon 1 - default.svg",  src: "/projects/ncv-icons/icon 1.svg" },
  { label: "Icon 2",  defaultSrc: "/projects/ncv-icons/icon 2 - default.svg",  src: "/projects/ncv-icons/icon 2.svg" },
  { label: "Icon 3",  defaultSrc: "/projects/ncv-icons/icon 3 - default.svg",  src: "/projects/ncv-icons/icon 3.svg" },
  { label: "Icon 4",  defaultSrc: "/projects/ncv-icons/icon 4 - default.svg",  src: "/projects/ncv-icons/icon 4.svg" },
  { label: "Icon 5",  defaultSrc: "/projects/ncv-icons/icon 5 - default.svg",  src: "/projects/ncv-icons/icon 5.svg" },
  { label: "Icon 6",  defaultSrc: "/projects/ncv-icons/icon 6 - default.svg",  src: "/projects/ncv-icons/icon 6.svg" },
  { label: "Icon 7",  defaultSrc: "/projects/ncv-icons/icon 7 - default.svg",  src: "/projects/ncv-icons/icon 7.svg" },
  { label: "Icon 8",  defaultSrc: "/projects/ncv-icons/icon 8 - default.svg",  src: "/projects/ncv-icons/icon 8.svg" },
  { label: "Icon 9",  defaultSrc: "/projects/ncv-icons/icon 9 - default.svg",  src: "/projects/ncv-icons/icon 9.svg" },
  { label: "Icon 10", defaultSrc: "/projects/ncv-icons/icon 10 - default.svg", src: "/projects/ncv-icons/icon 10.svg" },
  { label: "Icon 11", defaultSrc: "/projects/ncv-icons/icon 11 - default.svg", src: "/projects/ncv-icons/icon 11.svg" },
  { label: "Icon 12", defaultSrc: "/projects/ncv-icons/icon 12 - default.svg", src: "/projects/ncv-icons/icon 12.svg" },
  { label: "Icon 13", defaultSrc: "/projects/ncv-icons/icon 13 - default.svg", src: "/projects/ncv-icons/icon 13.svg" },
  { label: "Icon 14", defaultSrc: "/projects/ncv-icons/icon 14 - default.svg", src: "/projects/ncv-icons/icon 14.svg" },
  { label: "Icon 15", defaultSrc: "/projects/ncv-icons/icon 15 - default.svg", src: "/projects/ncv-icons/icon 15.svg" },
  { label: "Icon 16", defaultSrc: "/projects/ncv-icons/icon 16 - default.svg", src: "/projects/ncv-icons/icon 16.svg" },
  { label: "Icon 17", defaultSrc: "/projects/ncv-icons/icon 17 - default.svg", src: "/projects/ncv-icons/icon 17.svg" },
  { label: "Icon 18", defaultSrc: "/projects/ncv-icons/icon 18 - default.svg", src: "/projects/ncv-icons/icon 18.svg" },
  { label: "Icon 19", defaultSrc: "/projects/ncv-icons/icon 19 - default.svg", src: "/projects/ncv-icons/icon 19.svg" },
  { label: "Icon 20", defaultSrc: "/projects/ncv-icons/icon 20 - default.svg", src: "/projects/ncv-icons/icon 20.svg" },
  { label: "Icon 21", defaultSrc: "/projects/ncv-icons/icon 21 - default.svg", src: "/projects/ncv-icons/icon 21.svg" },
  { label: "Icon 22", defaultSrc: "/projects/ncv-icons/icon 22 - default.svg", src: "/projects/ncv-icons/icon 22.svg" },
  { label: "Icon 23", defaultSrc: "/projects/ncv-icons/icon 23 - default.svg", src: "/projects/ncv-icons/icon 23.svg" },
  { label: "Icon 24", defaultSrc: "/projects/ncv-icons/icon 24 - default.svg", src: "/projects/ncv-icons/icon 24.svg" },
  { label: "Icon 25", defaultSrc: "/projects/ncv-icons/icon 25 - default.svg", src: "/projects/ncv-icons/icon 25.svg" },
  { label: "Icon 26", defaultSrc: "/projects/ncv-icons/icon 26 - default.svg", src: "/projects/ncv-icons/icon 26.svg" },
  { label: "Icon 27", defaultSrc: "/projects/ncv-icons/icon 27 - default.svg", src: "/projects/ncv-icons/icon 27.svg" },
  { label: "Icon 28", defaultSrc: "/projects/ncv-icons/icon 28 - default.svg", src: "/projects/ncv-icons/icon 28.svg" },
  { label: "Icon 29", defaultSrc: "/projects/ncv-icons/icon 29 - default.svg", src: "/projects/ncv-icons/icon 29.svg" },
  { label: "Icon 30", defaultSrc: "/projects/ncv-icons/icon 30 - default.svg", src: "/projects/ncv-icons/icon 30.svg" },
  { label: "Icon 31", defaultSrc: "/projects/ncv-icons/icon 31 - default.svg", src: "/projects/ncv-icons/icon 31.svg" },
  { label: "Icon 32", defaultSrc: "/projects/ncv-icons/icon 32 - default.svg", src: "/projects/ncv-icons/icon 32.svg" },
  { label: "Icon 33", defaultSrc: "/projects/ncv-icons/icon 33 - default.svg", src: "/projects/ncv-icons/icon 33.svg" },
  { label: "Icon 34", defaultSrc: "/projects/ncv-icons/icon 34 - default.svg", src: "/projects/ncv-icons/icon 34.svg" },
  { label: "Icon 35", defaultSrc: "/projects/ncv-icons/icon 35 - default.svg", src: "/projects/ncv-icons/icon 35.svg" },
  { label: "Icon 36", defaultSrc: "/projects/ncv-icons/icon 36 - default.svg", src: "/projects/ncv-icons/icon 36.svg" },
  { label: "Icon 37", defaultSrc: "/projects/ncv-icons/icon 37 - default.svg", src: "/projects/ncv-icons/icon 37.svg" },
  { label: "Icon 38", defaultSrc: "/projects/ncv-icons/icon 38 - default.svg", src: "/projects/ncv-icons/icon 38.svg" },
  { label: "Icon 39", defaultSrc: "/projects/ncv-icons/icon 39 - default.svg", src: "/projects/ncv-icons/icon 39.svg" },
  { label: "Icon 40", defaultSrc: "/projects/ncv-icons/icon 40 - default.svg", src: "/projects/ncv-icons/icon 40.svg" },
  { label: "Icon 41", defaultSrc: "/projects/ncv-icons/icon 41 - default.svg", src: "/projects/ncv-icons/icon 41.svg" },
  { label: "Icon 42", defaultSrc: "/projects/ncv-icons/icon 42 - default.svg", src: "/projects/ncv-icons/icon 42.svg" },
  { label: "Icon 43", defaultSrc: "/projects/ncv-icons/icon 43 - default.svg", src: "/projects/ncv-icons/icon 43.svg" },
  { label: "Icon 44", defaultSrc: "/projects/ncv-icons/icon 44 - default.svg", src: "/projects/ncv-icons/icon 44.svg" },
  { label: "Icon 45", defaultSrc: "/projects/ncv-icons/icon 45 - default.svg", src: "/projects/ncv-icons/icon 45.svg" },
  { label: "Icon 46", defaultSrc: "/projects/ncv-icons/icon 46 - default.svg", src: "/projects/ncv-icons/icon 46.svg" },
  { label: "Icon 47", defaultSrc: "/projects/ncv-icons/icon 47 - default.svg", src: "/projects/ncv-icons/icon 47.svg" },
  { label: "Icon 48", defaultSrc: "/projects/ncv-icons/icon 48 - default.svg", src: "/projects/ncv-icons/icon 48.svg" },
  { label: "Icon 49", defaultSrc: "/projects/ncv-icons/icon 49 - default.svg", src: "/projects/ncv-icons/icon 49.svg" },
  { label: "Icon 50", defaultSrc: "/projects/ncv-icons/icon 50 - default.svg", src: "/projects/ncv-icons/icon 50.svg" },
  { label: "Icon 51", defaultSrc: "/projects/ncv-icons/icon 51 - default.svg", src: "/projects/ncv-icons/icon 51.svg" },
  { label: "Icon 52", defaultSrc: "/projects/ncv-icons/icon 52 - default.svg", src: "/projects/ncv-icons/icon 52.svg" },
  { label: "Icon 53", defaultSrc: "/projects/ncv-icons/icon 53 - default.svg", src: "/projects/ncv-icons/icon 53.svg" },
  { label: "Icon 54", defaultSrc: "/projects/ncv-icons/icon 54 - default.svg", src: "/projects/ncv-icons/icon 54.svg" },
  { label: "Icon 55", defaultSrc: "/projects/ncv-icons/icon 55 - default.svg", src: "/projects/ncv-icons/icon 55.svg" },
];

const specRows = [
  { spec: "Artboard", detail: "64×64 px", why: "Ensures crisp rendering at any size — from favicon to full-screen display." },
  { spec: "Background", detail: "56×56 px / 8px radius", why: "Consistent visual frame — modern, approachable, harmonious at every breakpoint." },
  { spec: "Stroke Weight", detail: "Uniform across all 55", why: "Eliminates the heavy/thin inconsistency that disrupted the original icon set." },
  { spec: "Alignment", detail: "Pixel-perfect to grid", why: "Every icon optically centered — not just visually close, but mathematically precise." },
  { spec: "Delivery Format", detail: "SVG assets", why: "Resolution-independent, lightweight, ready for direct integration into the live website." },
  { spec: "Accessibility", detail: "Tested at small sizes", why: "Confirms usability across devices and responsive contexts." },
];

const stages = [
  {
    num: "01", label: "Exploration",
    sub: "Mapping the Full Scope",
    body: "Before drawing anything, I mapped every icon needed across all five sections of the Net Carbon Vision website — navigation, products, services, verticals, and company. This wasn't just a count exercise. It was about understanding the range of concepts the icon system needed to represent.",
    output: "A complete inventory of 55 required icons, categorized by website section.",
    icon: "ti-map-search",
  },
  {
    num: "02", label: "System Thinking",
    sub: "Establishing the Rules Before the Work",
    body: "This is where the real design decisions happened — before Adobe Illustrator was opened for a single icon. The existing icons were audited for inconsistencies: stroke weights, proportions, geometric imbalances. Rather than patching individually, a grid-based framework was established.",
    output: "The complete design specification — a system that made every downstream decision faster, cleaner, and consistent.",
    icon: "ti-ruler-2",
  },
  {
    num: "03", label: "Execution",
    sub: "Building 55 Icons Within the System",
    body: "Each of the 55 icons was drawn in Adobe Illustrator — reconstructed, not adapted. Icons weren't resized from existing assets; they were rebuilt from scratch within the grid, ensuring stroke weights, proportions, and geometry were native to the system rather than approximated.",
    output: "55 production-ready icons, each built to the same standard, each feeling like it was drawn by the same hand.",
    icon: "ti-pencil",
  },
  {
    num: "04", label: "Validation",
    sub: "Confirming the System Works in the Real World",
    body: 'Icons were tested across screen sizes, device types, and the actual website contexts they were designed for — not just on a design canvas. The key test wasn\'t \'does this look good at 64px?\' — it was \'does this still communicate clearly at 20px on a mobile screen?\'',
    output: "A validated, production-ready set of 55 SVG icons confirmed for clarity, scalability, and visual consistency.",
    icon: "ti-check",
  },
];

const sectionCoverage = [
  { section: "Navigation", role: "Supports wayfinding — icons that orient users and communicate section identity at a glance.", count: "8" },
  { section: "Products", role: "Represents distinct product offerings — each icon communicates a unique capability without relying on text alone.", count: "14" },
  { section: "Services", role: "Differentiates service categories — icons that make a complex services portfolio scannable and intuitive.", count: "12" },
  { section: "Verticals", role: "Communicates industry verticals — icons that quickly signal which sector content or features belong to.", count: "13" },
  { section: "Company", role: "Supports company identity and informational pages — icons that feel professional and authoritative.", count: "8" },
];

const outcomes = [
  {
    title: "Clarity & Recognition",
    icon: "ti-eye",
    color: "#ff6b00",
    body: "Icons that once required users to read accompanying text to understand their meaning now communicate independently. The line-based style, consistent proportions, and geometric simplicity mean each symbol is immediately legible.",
  },
  {
    title: "Consistency & Cohesion",
    icon: "ti-layout-grid",
    color: "#ff6b00",
    body: "The Net Carbon Vision website now has a visual rhythm that holds across every section. The same stroke weight, the same corner radius, the same spatial logic — whether on the Products page or the Verticals section, the icons feel like they belong to the same system.",
  },
  {
    title: "Scalability & Future-Readiness",
    icon: "ti-trending-up",
    color: "#ff6b00",
    body: "The grid system and specification framework don't just govern the existing 55 icons — they govern every icon that will ever be added to the platform. The system is ready to grow.",
  },
  {
    title: "Developer-Ready Delivery",
    icon: "ti-code",
    color: "#ff6b00",
    body: "Delivered as SVG assets — resolution-independent, lightweight, and structured for direct integration. No rework, no conversion, no interpretation required. Icons went from Illustrator to the live website without friction.",
  },
];

export default function NCVIconSystem() {
  return (
    <main className="bg-[#080810] min-h-screen text-[#fafafa] selection:bg-[#ff6b00]/30">
      <CustomCursor />
      <Navbar />

      {/* ── SECTION 1: HERO ── */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 max-w-[1400px] mx-auto">
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[#ff6b00] opacity-[0.04] blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0066ff] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: customEase }}
          className="text-[#ff6b00] text-tag-1 mb-6 text-center">
          Iconography &middot; Design Systems &middot; Case Study
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1, ease: customEase }}
          className="text-h1 leading-tight mb-8 max-w-5xl text-center mx-auto">
          Building a Cohesive Icon System for Net Carbon Vision
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: customEase }}
          className="text-[#8888aa] text-body-lg max-w-3xl mb-16 text-center mx-auto">
          55 custom line icons; designed from scratch, built on a structured grid system, and delivered as production-ready SVG assets that unify the visual language of an entire enterprise sustainability website.
        </motion.p>

        {/* Hero Visual */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: customEase }}
          className="relative w-full h-[600px] md:h-[900px] rounded-[40px] overflow-hidden border border-white/5 bg-[#0c0c16]/30 mb-16 group shadow-2xl shadow-[#ff6b00]/5">
          <img src="/projects/ncv-icons/hero.png" alt="NCV Icons Hero" className="w-full h-full object-cover opacity-80 group-hover:scale-[1.02] transition-transform duration-[1200ms] ease-out" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-[#080810]/20 to-transparent opacity-80 pointer-events-none" />
        </motion.div>

        {/* Stats Bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease: customEase }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-[32px] overflow-hidden border border-white/5 backdrop-blur-sm w-full">
          {[
            { num: "55", label: "Custom Icons" },
            { num: "64×64", label: "px Structured Artboard" },
            { num: "4", label: "Process Stages" },
            { num: "5", label: "Website Sections Covered" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#080810]/80 p-8 flex flex-col items-center justify-center gap-2 hover:bg-[#ff6b00]/5 transition-colors duration-300 text-center">
              <span className="text-h2 text-white">{stat.num}</span>
              <span className="text-xs md:text-sm text-[#8888aa]">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── SECTION 2: THE PROBLEM ── */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }} className="md:col-span-4">
            <div className="text-[#ff6b00] text-tag-1 mb-4">The Problem</div>
            <h2 className="text-h2 text-white leading-tight sticky top-32">
              What Was Broken Before This System Existed
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }} className="md:col-span-8 space-y-6">
            <p className="text-[#8888aa] text-body-lg">
              When I joined the Net Carbon Vision website project, the iconography situation was a common one in fast-moving product teams: icons had been sourced, adapted, and added incrementally as sections were built; without a governing system.
            </p>
            <p className="text-[#8888aa] text-body-lg">
              The result was visual inconsistency across the board. Icons varied in stroke weight, proportion, and geometric balance. Some felt heavy, others too thin. Nothing felt like it belonged to the same family.
            </p>
            <p className="text-white text-body-lg font-medium">
              The fix wasn&apos;t to replace individual problem icons. The fix was to build a system from scratch that every current and future icon would conform to.
            </p>

            {/* Inconsistency Visual */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              {["Varied Stroke Weight", "Broken Proportion", "No Geometric Grid"].map((label, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[rgba(255,107,0,0.06)] border border-[#ff6b00]/10 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center">
                    <i className={`ti ${["ti-arrows-diff", "ti-layout-off", "ti-grid-dots"][i]} text-xl text-[#ff6b00]`} />
                  </div>
                  <p className="text-white/70 text-xs font-medium">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: DESIGN SPECS ── */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto bg-white/[0.02] rounded-[40px] border border-white/5 my-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }} className="mb-14">
          <div className="text-[#ff6b00] text-tag-1 mb-4">Design Specifications</div>
          <h2 className="text-h2 text-white mb-6">The Technical Framework</h2>
          <p className="text-[#8888aa] text-lg max-w-2xl leading-relaxed">
            These specifications were defined upfront, not discovered during execution. Every one of the 55 icons was built within this framework.
          </p>
        </motion.div>

        {/* Artboard visual */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
          className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          {/* Grid diagram image */}
          <div className="shrink-0 w-full lg:w-[400px] h-auto relative rounded-2xl overflow-hidden border border-white/5">
            <img src="/projects/ncv-icons/framework.png" alt="Icon framework grid" className="w-full h-auto object-cover" />
          </div>

          {/* Spec table */}
          <div className="flex-1 overflow-x-auto rounded-2xl border border-white/5">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 border-b border-white/5">
                <tr>
                  <th className="p-4 text-white font-semibold">Specification</th>
                  <th className="p-4 text-white font-semibold">Detail</th>
                  <th className="p-4 text-white font-semibold">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {specRows.map((row, i) => (
                  <tr key={i}>
                    <td className="p-4 font-bold text-[#ff6b00] whitespace-nowrap">{row.spec}</td>
                    <td className="p-4 text-white text-xs">{row.detail}</td>
                    <td className="p-4 text-[#8888aa] text-xs leading-relaxed">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 4: PROCESS ── */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }} className="text-center mb-16 max-w-3xl mx-auto">
          <div className="text-[#ff6b00] text-tag-1 mb-4">Process</div>
          <h2 className="text-h2 text-white mb-6">The Four-Stage Process</h2>
          <p className="text-[#8888aa] text-body-lg">From Scattered to Systematic</p>
        </motion.div>

        {/* Process image */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="w-full rounded-[32px] overflow-hidden border border-white/5 mb-16 relative group">
          <img src="/projects/ncv-icons/illustrator.png" alt="Icon design process" className="w-full h-auto opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-[#080810]/30 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <div className="text-[#ff6b00] text-xs tracking-widest mb-1">ADOBE ILLUSTRATOR · 64×64 ARTBOARD</div>
            <div className="text-white font-bold text-xl">Icon Construction Process</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stages.map((stage, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: customEase }}
              className="bg-[rgba(48,46,97,0.18)] border border-white/5 hover:border-[#ff6b00]/20 rounded-[32px] p-8 flex flex-col gap-6 transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#ff6b00]/10 border border-[#ff6b00]/20 flex items-center justify-center shrink-0 group-hover:bg-[#ff6b00]/20 transition-colors">
                  <i className={`ti ${stage.icon} text-xl text-[#ff6b00]`} />
                </div>
                <div>
                  <div className="text-[#ff6b00] text-xs mb-1">Stage {stage.num}</div>
                  <h3 className="text-white font-bold text-lg">{stage.label}</h3>
                  <p className="text-[#8888aa] text-sm">{stage.sub}</p>
                </div>
              </div>
              <p className="text-[#8888aa] text-body-sm">{stage.body}</p>
              <div className="bg-[#ff6b00]/10 border border-[#ff6b00]/10 p-4 rounded-2xl text-sm">
                <strong className="text-[#ff6b00] block mb-1 text-tag-3 tracking-wider">Output</strong>
                <p className="text-white/80 text-xs leading-relaxed">{stage.output}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: ICON SYSTEM ── */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto bg-white/[0.02] rounded-[40px] border border-white/5 my-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }} className="mb-16">
          <div className="text-[#ff6b00] text-tag-1 mb-4">The Icon System</div>
          <h2 className="text-h2 text-white mb-6">What 55 Icons Covers</h2>
          <p className="text-[#8888aa] text-lg max-w-2xl leading-relaxed">
            The complete icon set spans every major section of the Net Carbon Vision website, providing a unified visual language from the first navigation element to the last company page detail.
          </p>
        </motion.div>

        {/* Full icon grid */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
          className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-3 mb-16">
          {icons.map((icon, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.03, ease: customEase }}
              title={icon.label}
              className="relative aspect-square rounded-xl overflow-hidden cursor-default group transition-all duration-300">
              {/* Default state */}
              <img
                src={icon.defaultSrc}
                alt={icon.label}
                className="w-full h-full object-cover absolute inset-0 opacity-40 group-hover:opacity-0 transition-opacity duration-300"
              />
              {/* Hover state — colored gradient version */}
              <img
                src={icon.src}
                alt={icon.label}
                className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Section coverage table */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
          className="overflow-x-auto rounded-2xl border border-white/5">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 border-b border-white/5">
              <tr>
                <th className="p-5 text-white font-semibold">Website Section</th>
                <th className="p-5 text-white font-semibold">Role of Iconography</th>
                <th className="p-5 text-white font-semibold text-right">Icons</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {sectionCoverage.map((row, i) => (
                <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="p-5 font-bold text-[#ff6b00]">{row.section}</td>
                  <td className="p-5 text-[#8888aa] text-xs leading-relaxed max-w-xs">{row.role}</td>
                  <td className="p-5 text-right">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20">{row.count}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* ── SECTION 6: OUTCOMES ── */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }} className="text-center mb-16 max-w-3xl mx-auto">
          <div className="text-[#ff6b00] text-tag-1 mb-4">Designed Outcomes</div>
          <h2 className="text-h2 text-white mb-6">What the System Delivered</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {outcomes.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: customEase }}
              whileHover={{ y: -8, transition: { duration: 0.4 } }}
              className="relative group bg-[rgba(48,46,97,0.18)] border border-white/5 hover:border-[#ff6b00]/20 rounded-[32px] p-8 overflow-hidden transition-all duration-500">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#ff6b00] opacity-0 group-hover:opacity-5 blur-[60px] rounded-full transition-opacity duration-700" />
              <div className="w-14 h-14 rounded-2xl bg-[#ff6b00]/10 border border-[#ff6b00]/20 flex items-center justify-center mb-6 group-hover:bg-[#ff6b00]/20 transition-colors">
                <i className={`ti ${item.icon} text-2xl text-[#ff6b00]`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-[#8888aa] text-body-sm">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SECTION 7: REFLECTION ── */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto my-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="relative rounded-[40px] overflow-hidden border border-white/5 p-10 md:p-16 bg-[rgba(48,46,97,0.15)]">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/5 via-transparent to-[#0066ff]/5" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b00]/40 to-transparent" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="text-[#ff6b00] text-[11px] font-bold tracking-[0.2em] mb-6 uppercase">Reflection</div>
            <h2 className="text-h2 text-white mb-10">What This Project Reinforced</h2>

            <div className="text-[#8888aa] text-body-lg space-y-6 text-left">
              <p>
                The most valuable outcome of this project wasn&apos;t the 55 icons. It was the framework that produced them.
              </p>
              <p className="text-white font-medium">
                Any designer can make a good-looking icon. The harder skill; and the more useful one; is building the system that makes 55 icons look like they were made by the same hand, under the same rules, with the same intent. That requires making decisions before the work starts, not during it.
              </p>
              <p>
                This project also clarified something about the relationship between design and development: a system that&apos;s well-specified at the design stage costs the development team almost nothing to implement. SVG assets built to a consistent artboard, named clearly, and delivered in a structured format; that&apos;s not extra work, that&apos;s the right way to work.
              </p>
              <p className="text-white font-medium border-l-4 border-[#ff6b00] pl-6 italic">
                &ldquo;Establish the rules, then execute within them. The output takes care of itself.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <CTAFooter />
    </main>
  );
}
