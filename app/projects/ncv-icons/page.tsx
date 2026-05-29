"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CTAFooter from "../../../components/sections/CTAFooter";
import CustomCursor from "../../../components/CustomCursor";

const customEase = [0.16, 1, 0.3, 1];

/* ─── Inline SVG icon components (sustainability themed) ─── */
const icons = [
  { label: "Leaf",            path: "M32 8 C32 8 12 20 12 36 C12 48 22 56 32 56 C42 56 52 48 52 36 C52 20 32 8 32 8Z M32 56 L32 32 M32 32 L20 22" },
  { label: "Sun",             path: "M32 20 A12 12 0 1 1 31.99 20Z M32 8 V12 M32 52 V56 M8 32 H12 M52 32 H56 M15 15 L18 18 M46 46 L49 49 M49 15 L46 18 M18 46 L15 49" },
  { label: "Wind",            path: "M10 24 C20 24 40 24 50 24 C56 24 56 16 50 16 C44 16 44 24 44 24 M10 32 H52 M10 40 C20 40 36 40 44 40 C50 40 50 48 44 48 C38 48 38 40 38 40" },
  { label: "Recycle",         path: "M32 12 L22 28 H26 C26 28 20 44 32 52 C44 44 38 28 42 28 H46 Z M22 28 L16 40 M42 28 L48 40" },
  { label: "Factory",         path: "M10 52 H54 M10 52 V28 L22 36 V24 L34 32 V20 L46 28 V52 M18 52 V42 H26 V52 M34 52 V40 H42 V52" },
  { label: "Globe",           path: "M32 12 A20 20 0 1 1 31.99 12Z M12 32 H52 M20 14 C20 14 26 32 20 50 M44 14 C44 14 38 32 44 50 M32 12 V52" },
  { label: "Lightning",       path: "M36 10 L24 34 H32 L28 54 L44 26 H36 Z" },
  { label: "Chart",           path: "M12 52 H52 M12 52 V12 M20 40 V36 M28 40 V24 M36 40 V30 M44 40 V18" },
  { label: "Shield",          path: "M32 10 L12 20 V34 C12 44 22 52 32 56 C42 52 52 44 52 34 V20 Z M24 32 L30 38 L40 26" },
  { label: "Target",          path: "M32 12 A20 20 0 1 1 31.99 12Z M32 20 A12 12 0 1 1 31.99 20Z M32 28 A4 4 0 1 1 31.99 28Z M32 8 V14 M32 50 V56 M8 32 H14 M50 32 H56" },
  { label: "Cloud",           path: "M20 44 C14 44 10 40 10 35 C10 30 14 26 20 26 C20 26 22 18 30 18 C38 18 42 26 42 26 C46 26 50 30 50 35 C50 40 46 44 42 44 Z" },
  { label: "Compass",         path: "M32 12 A20 20 0 1 1 31.99 12Z M32 12 V18 M32 46 V52 M12 32 H18 M46 32 H52 M26 26 L32 32 L38 38 M38 26 L32 32" },
  { label: "Droplet",         path: "M32 10 C32 10 16 26 16 38 A16 16 0 0 0 48 38 C48 26 32 10 32 10Z" },
  { label: "Grid",            path: "M14 14 H26 V26 H14 Z M38 14 H50 V26 H38 Z M14 38 H26 V50 H14 Z M38 38 H50 V50 H38 Z" },
  { label: "Network",         path: "M20 32 A6 6 0 1 1 19.99 32Z M44 20 A6 6 0 1 1 43.99 20Z M44 44 A6 6 0 1 1 43.99 44Z M25 30 L39 23 M25 34 L39 41" },
  { label: "Diamond",         path: "M32 12 L52 28 L32 52 L12 28 Z M12 28 H52" },
  { label: "Hexagon",         path: "M32 10 L50 21 L50 43 L32 54 L14 43 L14 21 Z M32 10 V54 M14 21 L50 43 M50 21 L14 43" },
  { label: "Layers",          path: "M10 32 L32 22 L54 32 L32 42 Z M10 38 L32 48 L54 38 M10 26 L32 16 L54 26" },
  { label: "Settings",        path: "M32 22 A10 10 0 1 1 31.99 22Z M32 10 V14 M32 50 V54 M12 32 H16 M48 32 H52 M17 17 L20 20 M44 44 L47 47 M47 17 L44 20 M20 44 L17 47" },
  { label: "Star",            path: "M32 10 L36 24 H52 L40 34 L44 48 L32 40 L20 48 L24 34 L12 24 H28 Z" },
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

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md bg-[#080810]/60 border-b border-white/5">
        <Link href="/" className="text-white font-bold text-lg tracking-wider hover:text-[#ff6b00] transition-colors">
          RAMAMOORTHY.
        </Link>
        <Link href="/#work" className="text-sm font-medium text-[#8888aa] hover:text-white transition-colors">
          &larr; Back to Work
        </Link>
      </nav>

      {/* ── SECTION 1: HERO ── */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 max-w-[1400px] mx-auto">
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[#ff6b00] opacity-[0.04] blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0066ff] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: customEase }}
          className="text-[#ff6b00] text-[12px] font-bold tracking-[0.2em] mb-6 uppercase">
          Iconography &middot; Design Systems &middot; Case Study
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1, ease: customEase }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-8 max-w-5xl">
          Building a Cohesive Icon System for Net Carbon Vision
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: customEase }}
          className="text-[#8888aa] text-lg md:text-2xl leading-relaxed max-w-3xl mb-16">
          55 custom line icons; designed from scratch, built on a structured grid system, and delivered as production-ready SVG assets that unify the visual language of an entire enterprise sustainability website.
        </motion.p>

        {/* Hero Visual — animated icon grid */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: customEase }}
          className="relative w-full h-[360px] md:h-[480px] rounded-[40px] overflow-hidden border border-white/5 bg-[rgba(48,46,97,0.10)] mb-16 group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/5 via-transparent to-[#0066ff]/5" />
          <div className="absolute inset-0 grid grid-cols-5 md:grid-cols-10 gap-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i} className="border border-white/5 aspect-square" />
            ))}
          </div>
          <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-6 p-8">
            {icons.slice(0, 16).map((icon, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.05, ease: customEase }}
                whileHover={{ scale: 1.2, y: -4 }}
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff6b00]/50 hover:bg-[#ff6b00]/10 flex items-center justify-center transition-all duration-300 group/icon cursor-default">
                <svg viewBox="0 0 64 64" className="w-7 h-7 stroke-[#ff6b00]/70 group-hover/icon:stroke-[#ff6b00] transition-colors" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={icon.path} />
                </svg>
              </motion.div>
            ))}
          </div>
          <div className="absolute bottom-6 right-8 text-[#8888aa] text-xs font-mono tracking-widest">55 CUSTOM ICONS · 64×64 PX · SVG</div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease: customEase }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-[28px] overflow-hidden border border-white/5">
          {[
            { num: "55", label: "Custom Icons" },
            { num: "64×64", label: "px Structured Artboard" },
            { num: "4", label: "Process Stages" },
            { num: "5", label: "Website Sections Covered" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#080810] px-8 py-8 flex flex-col gap-2">
              <span className="text-3xl md:text-4xl font-bold text-white">{stat.num}</span>
              <span className="text-sm text-[#8888aa]">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── SECTION 2: THE PROBLEM ── */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }} className="md:col-span-4">
            <div className="text-[#ff6b00] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">The Problem</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight sticky top-32">
              What Was Broken Before This System Existed
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }} className="md:col-span-8 space-y-6">
            <p className="text-[#8888aa] text-lg md:text-xl leading-relaxed">
              When I joined the Net Carbon Vision website project, the iconography situation was a common one in fast-moving product teams: icons had been sourced, adapted, and added incrementally as sections were built; without a governing system.
            </p>
            <p className="text-[#8888aa] text-lg md:text-xl leading-relaxed">
              The result was visual inconsistency across the board. Icons varied in stroke weight, proportion, and geometric balance. Some felt heavy, others too thin. Nothing felt like it belonged to the same family.
            </p>
            <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
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
          <div className="text-[#ff6b00] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Design Specifications</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Technical Framework</h2>
          <p className="text-[#8888aa] text-lg max-w-2xl leading-relaxed">
            These specifications were defined upfront, not discovered during execution. Every one of the 55 icons was built within this framework.
          </p>
        </motion.div>

        {/* Artboard visual */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
          className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          {/* Grid diagram */}
          <div className="shrink-0 w-64 h-64 relative">
            <div className="absolute inset-0 rounded-2xl border-2 border-[#ff6b00]/30 flex items-center justify-center">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[#ff6b00] text-[10px] font-mono">64px</div>
              <div className="w-[80%] h-[80%] rounded-xl border-2 border-[#ff6b00]/60 flex items-center justify-center">
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 text-[#ff6b00]/60 text-[9px] font-mono">56px · 8px radius</div>
                <svg viewBox="0 0 64 64" className="w-16 h-16 stroke-white/80" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={icons[0].path} />
                </svg>
              </div>
            </div>
            {/* Grid overlay lines */}
            <div className="absolute inset-0 grid grid-cols-4 opacity-10">
              {Array.from({ length: 4 }).map((_, i) => <div key={i} className="border-l border-[#ff6b00]" />)}
            </div>
            <div className="absolute inset-0 grid grid-rows-4 opacity-10">
              {Array.from({ length: 4 }).map((_, i) => <div key={i} className="border-t border-[#ff6b00]" />)}
            </div>
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
                    <td className="p-4 text-white font-mono text-xs">{row.detail}</td>
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
          <div className="text-[#ff6b00] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Process</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Four-Stage Process</h2>
          <p className="text-[#8888aa] text-lg leading-relaxed">From Scattered to Systematic</p>
        </motion.div>

        {/* Process image */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="w-full h-[300px] md:h-[420px] rounded-[32px] overflow-hidden border border-white/5 mb-16 relative group">
          <img src="/images/ncv-process.png" alt="Icon design process" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-[#080810]/30 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <div className="text-[#ff6b00] text-xs font-mono tracking-widest mb-1">ADOBE ILLUSTRATOR · 64×64 ARTBOARD</div>
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
                  <div className="text-[#ff6b00] font-mono text-xs mb-1">Stage {stage.num}</div>
                  <h3 className="text-white font-bold text-lg">{stage.label}</h3>
                  <p className="text-[#8888aa] text-sm">{stage.sub}</p>
                </div>
              </div>
              <p className="text-[#8888aa] text-sm leading-relaxed">{stage.body}</p>
              <div className="bg-[#ff6b00]/10 border border-[#ff6b00]/10 p-4 rounded-2xl text-sm">
                <strong className="text-[#ff6b00] block mb-1 text-xs uppercase tracking-wider">Output</strong>
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
          <div className="text-[#ff6b00] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">The Icon System</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What 55 Icons Covers</h2>
          <p className="text-[#8888aa] text-lg max-w-2xl leading-relaxed">
            The complete icon set spans every major section of the Net Carbon Vision website, providing a unified visual language from the first navigation element to the last company page detail.
          </p>
        </motion.div>

        {/* Full icon grid */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
          className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-3 mb-16">
          {icons.map((icon, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.03, ease: customEase }}
              whileHover={{ scale: 1.2, y: -4 }}
              title={icon.label}
              className="aspect-square rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#ff6b00]/40 hover:bg-[#ff6b00]/10 flex items-center justify-center cursor-default group transition-all duration-300">
              <svg viewBox="0 0 64 64" className="w-6 h-6 stroke-white/40 group-hover:stroke-[#ff6b00] transition-colors" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={icon.path} />
              </svg>
            </motion.div>
          ))}
          {/* Fill remaining spots with placeholder dots to show 55 count */}
          {Array.from({ length: 35 }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square rounded-xl bg-white/[0.02] border border-white/[0.03] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
            </div>
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
          <div className="text-[#ff6b00] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Designed Outcomes</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What the System Delivered</h2>
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
              <p className="text-[#8888aa] text-sm leading-relaxed">{item.body}</p>
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">What This Project Reinforced</h2>

            <div className="text-[#8888aa] text-lg leading-relaxed space-y-6 text-left">
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

          {/* Decorative icon strip at bottom */}
          <div className="relative z-10 flex justify-center gap-4 mt-14 flex-wrap">
            {icons.slice(0, 8).map((icon, i) => (
              <div key={i} className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 64 64" className="w-5 h-5 stroke-[#ff6b00]" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={icon.path} />
                </svg>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <CTAFooter />
    </main>
  );
}
