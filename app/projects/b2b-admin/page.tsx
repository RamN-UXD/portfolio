"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import CTAFooter from "../../../components/sections/CTAFooter";
import CustomCursor from "../../../components/CustomCursor";

const customEase = [0.16, 1, 0.3, 1];

// Interactive Sandbox Categories
type CategoryId = "attendance" | "location" | "tasks" | "customers" | "reimbursement" | "fake-location" | "auto-logout" | "workforce";

interface Category {
  id: CategoryId;
  label: string;
  icon: string;
  configured: boolean;
}

export default function B2BAdminCaseStudy() {
  // Sandbox State
  const [activeCategory, setActiveCategory] = useState<CategoryId>("auto-logout");
  const [autoLogoutEnabled, setAutoLogoutEnabled] = useState(true);
  const [fakeLocationEnabled, setFakeLocationEnabled] = useState(false);
  const [logoutTime, setLogoutTime] = useState("2 hours");
  const [remindTime, setRemindTime] = useState("10 minutes");
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [isNestedModalOpen, setIsNestedModalOpen] = useState(false);
  const [transportRates, setTransportRates] = useState([
    { type: "Car", rate: "12.00", active: true },
    { type: "Motorbike", rate: "5.00", active: true },
    { type: "Bicycle", rate: "2.00", active: false },
    { type: "Public Transit", rate: "1.50", active: true },
  ]);
  const [newTransportType, setNewTransportType] = useState("");
  const [newTransportRate, setNewTransportRate] = useState("");
  const [sliderVal, setSliderVal] = useState(50);

  const categories: Category[] = [
    { id: "attendance", label: "Attendance & Shift Rules", icon: "ti-clock", configured: true },
    { id: "location", label: "Location & Geofencing", icon: "ti-map-pin", configured: true },
    { id: "tasks", label: "Task Workflows", icon: "ti-list-check", configured: true },
    { id: "customers", label: "Customer Portal Sync", icon: "ti-messages", configured: false },
    { id: "workforce", label: "Workforce Limits", icon: "ti-users", configured: false },
    { id: "reimbursement", label: "Travel Reimbursements", icon: "ti-wallet", configured: true },
    { id: "fake-location", label: "Fake Location Alerts", icon: "ti-bell-ringing", configured: false },
    { id: "auto-logout", label: "Session Auto-Logout", icon: "ti-logout", configured: true },
  ];

  const handleAddTransport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTransportType || !newTransportRate) return;
    setTransportRates([
      ...transportRates,
      { type: newTransportType, rate: parseFloat(newTransportRate).toFixed(2), active: true }
    ]);
    setNewTransportType("");
    setNewTransportRate("");
    setIsNestedModalOpen(false);
  };

  const toggleTransportRate = (index: number) => {
    const updated = [...transportRates];
    updated[index].active = !updated[index].active;
    setTransportRates(updated);
  };

  return (
    <main className="bg-[#080810] min-h-screen text-[#fafafa] selection:bg-[#0066ff]/30 overflow-x-hidden font-sans">
      <CustomCursor />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md bg-[#080810]/50 border-b border-white/5">
        <Link href="/" className="text-white font-bold text-lg tracking-wider hover:text-[#0066ff] transition-colors">
          RAMAMOORTHY.
        </Link>
        <Link href="/#work" className="text-sm font-medium text-[#8888aa] hover:text-white transition-colors flex items-center gap-2">
          <span>&larr;</span> Back to Work
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 max-w-[1400px] mx-auto min-h-[85vh] flex flex-col justify-center">
        {/* Background Radial Glow */}
        <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-[#0066ff] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute -left-10 bottom-10 w-[400px] h-[400px] bg-[#00ffff] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-[#0066ff] text-[12px] font-bold tracking-[0.2em] mb-6 uppercase flex items-center gap-2"
        >
          <span>Enterprise SaaS</span> &middot; <span>Admin Panel</span> &middot; <span>UX Case Study</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: customEase }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-8 max-w-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#8888aa]"
        >
          Redesigning the B2B Admin Control Center
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: customEase }}
          className="text-[#8888aa] text-lg md:text-2xl leading-relaxed max-w-3xl mb-16"
        >
          Transforming a flat, scroll-heavy settings page into a structured, navigable admin
          experience; across 8 feature categories and 76 interaction states.
        </motion.p>

        {/* NDA Warning Alert Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: customEase }}
          className="relative max-w-3xl mb-12 p-5 rounded-2xl bg-white/[0.02] border border-[#0066ff]/20 backdrop-blur-sm flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-[#0066ff]/10 text-[#0066ff] flex items-center justify-center shrink-0 border border-[#0066ff]/20 animate-pulse">
            <i className="ti ti-alert-triangle text-xl" />
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-1 uppercase tracking-wider flex items-center gap-2">
              ⚠️ NDA Notice
            </h4>
            <p className="text-[#8888aa] text-xs leading-relaxed">
              This project is presented under non-disclosure agreement (NDA). The product name, branding details, and private configurations have been anonymized.
            </p>
          </div>
          <div className="absolute top-2 right-4 px-2 py-0.5 rounded bg-[#0066ff]/10 border border-[#0066ff]/20 text-[9px] font-mono tracking-widest text-[#0066ff]">
            SECURE ACCESS
          </div>
        </motion.div>

        {/* Hero Mockup Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: customEase }}
          className="w-full h-[350px] md:h-[550px] rounded-[40px] overflow-hidden mb-16 relative border border-white/5 group shadow-2xl shadow-[#0066ff]/5"
        >
          <img src="/images/b2b-admin/hero.png" alt="B2B Admin Control Center Mockup Redesign" className="w-full h-full object-cover opacity-80 group-hover:scale-[1.02] transition-transform duration-[1200ms] ease-out" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-[#080810]/20 to-transparent opacity-80 pointer-events-none" />
          <div className="absolute bottom-6 right-8 text-[#8888aa] text-xs font-mono tracking-widest bg-black/40 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
            HI-FI DESIGN &middot; TWO-PANEL SYSTEM
          </div>
        </motion.div>

        {/* Project Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: customEase }}
          className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/5 rounded-[32px] overflow-hidden border border-white/5 backdrop-blur-sm"
        >
          {[
            { num: "76", label: "Screens Designed" },
            { num: "8", label: "Settings Categories" },
            { num: "Solo", label: "End-to-End UX" },
            { num: "Web", label: "Admin Panel" },
            { num: "ReactJS", label: "Migration Platform" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#080810]/80 p-8 flex flex-col gap-2 hover:bg-[#0066ff]/5 transition-colors duration-300">
              <span className="text-3xl md:text-4xl font-extrabold text-white">{stat.num}</span>
              <span className="text-xs md:text-sm text-[#8888aa]">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Section 2: Project Context */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="md:col-span-4"
          >
            <div className="text-[#0066ff] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Project Context</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight sticky top-32">
              What This Product Does and Who It Serves
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="md:col-span-8 text-[#8888aa] text-lg md:text-xl leading-relaxed space-y-6"
          >
            <p>
              The product is a B2B SaaS admin panel used by companies to manage their field workforce
              at scale. Admins use it to track attendance, monitor location activity, assign tasks,
              and manage customer interactions. Field employees interact with a companion mobile app.
            </p>
            <p>
              The Company Settings module is the control center of the entire platform; where
              admins decide which product features are active for their organization, and how those
              features behave. Every configuration decision made here directly shapes how field
              employees experience the product on their phones.
            </p>
            <p className="text-white font-medium border-l-4 border-[#0066ff] pl-6 italic">
              Getting this module wrong doesn&apos;t just inconvenience an admin. It misconfigures an
              entire workforce.
            </p>

            {/* Overview Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10">
              {[
                { title: "My Role", detail: "UX Designer — Solo ownership, end-to-end" },
                { title: "Contribution", detail: "IA · Wireframes · Hi-Fi Design · Interaction States · Dev Handoff" },
                { title: "Product Type", detail: "Field Employee Management — B2B SaaS" },
                { title: "Platform", detail: "Web (Admin Panel)" },
                { title: "Primary Users", detail: "Company Admins managing Field Employees" },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                  <h4 className="text-[#0066ff] font-bold text-xs uppercase tracking-wider mb-2">{item.title}</h4>
                  <p className="text-white/80 text-sm leading-relaxed font-medium">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: The Trigger */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto bg-white/[0.01] rounded-[40px] border border-white/5 my-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="md:col-span-4"
          >
            <div className="text-[#0066ff] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">The Trigger</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight sticky top-32">
              Why This Redesign Happened When It Did
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="md:col-span-8 text-[#8888aa] text-lg md:text-xl leading-relaxed space-y-6"
          >
            <p>
              The company was migrating the entire platform from AngularJS to ReactJS; a
              full technical rebuild that would touch every module in the product.
            </p>
            <p>
              For most modules, a migration is a rebuilding exercise: move the code, preserve the
              experience. But the Company Settings module had problems that a code migration alone
              couldn&apos;t fix.
            </p>
            <p className="text-white">
              This was an opportunity not just to rebuild, but to fundamentally rethink
              the settings experience; with a cleaner technical foundation, an expanded feature set
              coming in with the migration, and the space to do it right.
            </p>
            
            {/* Tech Migration visual element */}
            <div className="p-8 rounded-3xl bg-[rgba(0,102,255,0.03)] border border-[#0066ff]/20 mt-10">
              <h4 className="text-white font-bold text-base mb-6 flex items-center gap-2">
                <i className="ti ti-arrows-double-ne-sw text-[#0066ff] text-xl" />
                Technical Migration & Design Opportunity
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 text-center">
                  <div className="text-[#ff5555] font-mono text-xs mb-1 font-bold">LEGACY BASE</div>
                  <div className="text-white font-bold text-lg">AngularJS</div>
                  <div className="text-xs text-[#8888aa] mt-2">End-of-life tech, slow loading, flat content structures</div>
                </div>
                <div className="text-center text-[#8888aa] font-mono text-xl">&rarr;</div>
                <div className="p-4 rounded-xl bg-blue-950/20 border border-[#0066ff]/20 text-center">
                  <div className="text-[#0066ff] font-mono text-xs mb-1 font-bold">FUTURE-READY BASE</div>
                  <div className="text-white font-bold text-lg">ReactJS + Custom IA</div>
                  <div className="text-xs text-[#8888aa] mt-2">Modern framework, highly scalable, structured two-panel layout</div>
                </div>
              </div>
              <p className="text-xs text-[#8888aa] italic mt-6 text-center">
                &quot;That window doesn&apos;t always exist. When it opened, the priority was to use it.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: The Problem */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="text-[#0066ff] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">The Problem</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">A Settings Page That Had Grown Without a Plan</h2>
          <p className="text-[#8888aa] text-lg leading-relaxed">
            The existing Company Settings module had accumulated features incrementally over time;
            each addition made sense in isolation, but no one had stepped back to look at the whole.
            The result was a single, continuously scrolling page where every setting lived at the
            same level, without hierarchy, navigation, or structure.
          </p>
        </motion.div>

        {/* Pain Points Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              num: "01",
              title: "Single Endless Scroll",
              highlight: "No navigation, no orientation",
              body: "Admins had to scroll the entire page to locate one setting. There was no way to jump to a category or know how far through the settings they were.",
              icon: "ti-arrows-sort"
            },
            {
              num: "02",
              title: "Hidden Descriptions",
              highlight: "Hover tooltips instead of visible help",
              body: "Settings carried no visible descriptions. A small tooltip icon required hovering to reveal what a feature actually did — adding friction at exactly the point where an admin needed clarity.",
              icon: "ti-help"
            },
            {
              num: "03",
              title: "Inconsistent Toggle Placement",
              highlight: "No logical alignment rules",
              body: "Some toggles were center-aligned; others were placed side-by-side in the same row. No visual consistency, no predictable interaction model.",
              icon: "ti-layout"
            },
            {
              num: "04",
              title: "Raw Data Tables",
              highlight: "Zero interaction design",
              body: "Complex configurations — transport types, reimbursement rates, approval chains — were presented as raw tables with no inline editing or structured flows.",
              icon: "ti-table"
            },
            {
              num: "05",
              title: "No Capacity to Scale",
              highlight: "Layout blocker for future expansion",
              body: "When the ReactJS migration arrived with an expanded feature set, this layout had no room to accommodate new settings without making an already difficult page even longer.",
              icon: "ti-zoom-out"
            }
          ].map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: customEase }}
              className="bg-[rgba(48,46,97,0.12)] border border-white/5 hover:border-[#0066ff]/20 rounded-[32px] p-8 flex flex-col justify-between transition-all duration-500 group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-xs font-bold text-[#0066ff] bg-[#0066ff]/10 px-3 py-1 rounded-full">{pain.num}</span>
                  <i className={`ti ${pain.icon} text-2xl text-[#8888aa] group-hover:text-[#0066ff] transition-colors`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{pain.title}</h3>
                <h4 className="text-xs font-semibold text-[#0066ff] uppercase tracking-wider mb-4">{pain.highlight}</h4>
                <p className="text-sm text-[#8888aa] leading-relaxed">{pain.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 5: Before vs. After */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto bg-white/[0.01] rounded-[40px] border border-white/5 my-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="mb-16"
        >
          <div className="text-[#0066ff] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Before & After</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Transformation at a Glance</h2>
          <p className="text-[#8888aa] text-lg max-w-2xl leading-relaxed">
            Comparing the legacy, friction-heavy operational layout with the structured, highly scalable system designed for the React implementation.
          </p>
        </motion.div>

        {/* Hover Highlight Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
          className="overflow-x-auto rounded-3xl border border-white/5 bg-[#080810]"
        >
          <table className="w-full text-left text-sm min-w-[700px]">
            <thead className="bg-white/5 border-b border-white/5">
              <tr>
                <th className="p-6 text-white font-semibold w-1/4">Dimension</th>
                <th className="p-6 text-red-400 font-semibold w-3/8">Before (Legacy)</th>
                <th className="p-6 text-[#0066ff] font-semibold w-3/8">After (Redesign)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                {
                  dim: "Navigation",
                  before: "Single endless scroll — no structure, no category map.",
                  after: "Persistent left panel — 8 categories always visible, scannable in under 2 seconds."
                },
                {
                  dim: "Setting Descriptions",
                  before: "Hover tooltips — hidden until interaction, adding friction.",
                  after: "Inline helper text — always visible right at the point of decision."
                },
                {
                  dim: "Toggle Placement",
                  before: "Inconsistent — center-aligned or side-by-side, no logical rules.",
                  after: "Standardized — consistent placement in a clean layout system across all 76 screens."
                },
                {
                  dim: "Complex Configuration",
                  before: "Raw data tables with no interaction design.",
                  after: "Progressive disclosure + contextual side panels — clean default, deep configurations on demand."
                },
                {
                  dim: "Scalability",
                  before: "No room for new features without extending the endless scroll.",
                  after: "New categories = new left panel item — zero disruption to the existing layout."
                },
                {
                  dim: "Dev Handoff",
                  before: "Minimal specifications.",
                  after: "76 annotated screens covering all states, interactions, and edge cases — ready for React."
                }
              ].map((row, idx) => (
                <tr key={idx} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 font-bold text-white whitespace-nowrap">{row.dim}</td>
                  <td className="p-6 text-[#8888aa] text-xs leading-relaxed group-hover:text-red-300 transition-colors">
                    <span className="inline-block mr-2 text-red-500 font-mono">&#10005;</span> {row.before}
                  </td>
                  <td className="p-6 text-white text-xs leading-relaxed group-hover:text-blue-100 transition-colors bg-[#0066ff]/[0.01] group-hover:bg-[#0066ff]/[0.03]">
                    <span className="inline-block mr-2 text-[#0066ff] font-mono">&#10003;</span> {row.after}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Custom Interactive Before/After Slider */}
        <div className="mt-20 space-y-6 border-t border-white/5 pt-16">
          <h3 className="text-xl md:text-3xl font-bold text-white text-center flex items-center justify-center gap-3">
            <i className="ti ti-arrows-left-right text-[#0066ff] text-2xl" />
            Interactive Layout Comparison Slider
          </h3>
          <p className="text-sm text-[#8888aa] text-center max-w-xl mx-auto leading-relaxed">
            Drag the visual slider back and forth to inspect the transformation from the legacy, chaotic settings list to the structured, responsive two-panel system.
          </p>

          <div className="relative w-full max-w-[950px] aspect-[16/10] mx-auto rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-[#0c0c16] group mt-8">
            {/* Before Image (Bottom Layer) */}
            <div className="absolute inset-0 select-none">
              <img 
                src="/images/b2b-admin/slider-before.png" 
                alt="Before Redesign - Legacy AngularJS layout" 
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute top-4 left-4 bg-red-950/85 border border-red-500/20 text-red-400 text-[10px] font-mono tracking-widest px-3 py-1.5 rounded-full backdrop-blur-md">
                BEFORE: SINGLE-SCROLL SPRAWL
              </div>
            </div>

            {/* After Image (Top Clipped Layer) */}
            <div 
              className="absolute inset-0 select-none pointer-events-none transition-all duration-75"
              style={{ clipPath: `polygon(0 0, ${sliderVal}% 0, ${sliderVal}% 100%, 0 100%)` }}
            >
              <img 
                src="/images/b2b-admin/slider-after.png" 
                alt="After Redesign - Structured ReactJS Layout" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-950/85 border border-[#0066ff]/20 text-[#0066ff] text-[10px] font-mono tracking-widest px-3 py-1.5 rounded-full backdrop-blur-md">
                AFTER: TWO-PANEL SYSTEM
              </div>
            </div>

            {/* Slider Control Handle (Vertical line & handle circle) */}
            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-white/40 pointer-events-none z-10 transition-all duration-75"
              style={{ left: `${sliderVal}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#080810] border-4 border-[#0066ff] shadow-xl flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform duration-300">
                <i className="ti ti-arrows-left-right text-sm font-bold text-[#0066ff]" />
              </div>
            </div>

            {/* Stretched Invisible Range Input for Stately Smooth Dragging */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderVal} 
              onChange={(e) => setSliderVal(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-ew-resize z-20 w-full h-full"
            />
          </div>
        </div>

        {/* Grids for Before & Redesigned Screens Showcases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 pt-16 border-t border-white/5">
          
          {/* Legacy Screens Showcase (Before) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-950/20 text-red-500 flex items-center justify-center border border-red-500/20">
                <i className="ti ti-circle-x text-lg" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Before Redesign: Legacy Screens Showcase</h3>
            </div>
            <p className="text-sm text-[#8888aa] leading-relaxed">
              Prior to structural intervention, all configuration rules were thrown together onto a single page, resulting in massive operational risk.
            </p>

            <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-5 group overflow-hidden">
              <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl border border-white/5 relative bg-black">
                <img 
                  src="/images/b2b-admin/gallery-before.png" 
                  alt="Legacy Screens Collage" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080810]/80 via-transparent to-transparent pointer-events-none" />
              </div>
              
              <ul className="mt-6 space-y-3.5 text-xs text-[#8888aa] px-2">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold leading-none">&#8226;</span>
                  <span><strong>AngularJS Configuration Sprawl:</strong> Over 150 settings active concurrently without logical boundaries or navigational tabs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold leading-none">&#8226;</span>
                  <span><strong>Hidden Tooltip Dependency:</strong> Tooltip hovers required to understand what vital settings controlled (adding massive cognitive load).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold leading-none">&#8226;</span>
                  <span><strong>Static Tables & Form Sprawl:</strong> Adding custom rows forced users into rigid, wide tabular columns with no edit inline parameters.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Redesigned System Showcase (After) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-950/20 text-[#0066ff] flex items-center justify-center border border-[#0066ff]/20">
                <i className="ti ti-circle-check text-lg" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">After Redesign: Redesigned Screens Showcase</h3>
            </div>
            <p className="text-sm text-[#8888aa] leading-relaxed">
              Reconstructed in ReactJS with persistent two-panel IA, standardized alignments, inline helpers, and progressive disclosure overlays.
            </p>

            <div className="rounded-3xl border border-[#0066ff]/10 bg-[#0066ff]/[0.01] p-5 group overflow-hidden">
              <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl border border-white/5 relative bg-black">
                <img 
                  src="/images/b2b-admin/gallery-after.png" 
                  alt="Redesigned Screens Collage" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080810]/80 via-transparent to-transparent pointer-events-none" />
              </div>
              
              <ul className="mt-6 space-y-3.5 text-xs text-[#8888aa] px-2">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0066ff] font-bold leading-none">&#8226;</span>
                  <span><strong>8 Navigable Settings Category Hubs:</strong> Standardized persistent navigation layout reduces category access to &lt;2 seconds.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0066ff] font-bold leading-none">&#8226;</span>
                  <span><strong>Inline Helper Text Everywhere:</strong> Key settings carry visible helper copy right at the decision point before triggering toggles.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#0066ff] font-bold leading-none">&#8226;</span>
                  <span><strong>Contextual Slideout Sidebar Layouts:</strong> Deep setting configurations are containerized using overlays, preserving main page rhythm.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Section 6: The Approach */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="md:col-span-4"
          >
            <div className="text-[#0066ff] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">The Approach</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight sticky top-32">
              Starting from Requirements, Not Assumptions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="md:col-span-8 text-[#8888aa] text-lg md:text-xl leading-relaxed space-y-8"
          >
            <p>
              The brief arrived as a plain Word document; a flat list of settings and their expected
              behaviors. The instinct to treat this as a spec and start designing was there. It was
              resisted deliberately.
            </p>
            <p className="text-white">
              A flat list of settings isn&apos;t a design specification. It&apos;s raw material. The question
              wasn&apos;t &quot;how do I lay these out?&quot; It was &quot;how does an admin actually think about these?&quot;
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-[#0066ff]/10 text-[#0066ff] flex items-center justify-center mb-4">
                  <i className="ti ti-users text-xl" />
                </div>
                <h4 className="text-white font-bold text-sm mb-2">Stakeholder Discussions</h4>
                <p className="text-xs text-[#8888aa] leading-relaxed">
                  Sat with the Product Manager and Director of Engineering & Operations to understand mental models.
                  Identified which features admins configure together, which settings need immediate sub-configuration
                  upon enabling, and which ones are touched once and never revisited.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-[#0066ff]/10 text-[#0066ff] flex items-center justify-center mb-4">
                  <i className="ti ti-search text-xl" />
                </div>
                <h4 className="text-white font-bold text-sm mb-2">Pattern Research</h4>
                <p className="text-xs text-[#8888aa] leading-relaxed">
                  Studied enterprise admin panel design patterns across SaaS products with comparable complexity;
                  analyzing how they handled navigation, progressive disclosure, and configuration depth without
                  overwhelming the user. The goal was to understand *why* patterns exist.
                </p>
              </div>
            </div>

            {/* Approach image mockup visual */}
            <div className="w-full h-[280px] rounded-[24px] overflow-hidden border border-white/5 relative group mt-8">
              <img src="/images/b2b-admin/approach.png" alt="UX Architecture Mapping Whiteboard" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-[1000ms]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="text-[10px] font-mono tracking-widest text-[#0066ff] uppercase bg-[#0066ff]/10 px-2 py-1 rounded">RESEARCH PIPELINE</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[rgba(0,102,255,0.03)] border border-[#0066ff]/20">
              <div className="text-xs font-mono font-bold text-[#0066ff] uppercase tracking-wider mb-2">The Pivotal Insight</div>
              <p className="text-white text-base md:text-lg leading-relaxed font-semibold">
                Once the eight operational domains were identified, the architectural decision became clear.
                The settings didn&apos;t need better visual styling on a scroll page; they needed a navigation
                system that reflected the mental model of the admin using them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7 & 8: Interactive Showcase (The Architecture Decision & Patterns) */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto bg-white/[0.01] rounded-[40px] border border-white/5 my-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar Copy */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <div className="text-[#0066ff] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Interactive Showcase</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Architecture & Patterns in Action</h2>
              <p className="text-[#8888aa] text-sm leading-relaxed mb-6">
                Instead of a single endless scroll, we introduced a persistent two-panel layout: a left nav listing all eight operational domains, and a right content panel showing only the active category.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="text-white font-bold text-xs uppercase mb-1">Pattern 01: Progressive Disclosure</h4>
                <p className="text-xs text-[#8888aa] leading-relaxed">
                  Default state is clean: a label, description, and toggle. Turning on **Auto-Logout** expands detailed configuration parameters dynamically inline.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="text-white font-bold text-xs uppercase mb-1">Pattern 02: Always-Visible Helper Text</h4>
                <p className="text-xs text-[#8888aa] leading-relaxed">
                  Every setting carries its description directly beneath its title. Check **Fake Location Alerts** to see description visible at the point of decision before checking.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="text-white font-bold text-xs uppercase mb-1">Pattern 03: Contextual Side Panel</h4>
                <p className="text-xs text-[#8888aa] leading-relaxed">
                  Deep settings (e.g. **Travel Reimbursements**) are layered using a slide-out panel, protecting the rhythm of the primary page.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Live Mini-Control Panel Widget */}
          <div className="lg:col-span-8">
            <div className="w-full rounded-3xl border border-white/10 bg-[#0c0c16] overflow-hidden shadow-2xl relative min-h-[580px]">
              
              {/* Header Bar */}
              <div className="bg-[#121222] border-b border-white/10 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="text-[11px] font-mono text-[#8888aa] ml-4">admin-settings-v2.tsx</span>
                </div>
                <div className="px-3 py-1 rounded bg-[#0066ff]/20 text-[#0066ff] text-[10px] font-mono tracking-widest font-bold">
                  LIVE INTERACTIVE SANDBOX
                </div>
              </div>

              {/* Control Panel Layout */}
              <div className="flex flex-col md:flex-row min-h-[480px]">
                
                {/* Left Panel - Navigation (Persistent List) */}
                <div className="w-full md:w-2/5 bg-[#0e0e1a] border-r border-white/5 p-4 flex flex-col justify-between shrink-0">
                  <div className="space-y-1.5">
                    <div className="text-[9px] font-mono text-[#8888aa] uppercase tracking-wider px-3 mb-3">
                      Settings Category Map
                    </div>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setActiveCategory(cat.id);
                          if (cat.id === "reimbursement") {
                            setIsSidePanelOpen(true);
                          }
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs font-medium transition-all duration-300 ${
                          activeCategory === cat.id
                            ? "bg-[#0066ff]/15 text-white border-l-2 border-[#0066ff] font-semibold"
                            : "text-[#8888aa] hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <i className={`ti ${cat.icon} text-sm ${activeCategory === cat.id ? "text-[#0066ff]" : ""}`} />
                          <span className="truncate">{cat.label}</span>
                        </div>
                        {cat.configured && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff] shrink-0" title="Configured" />
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/5 text-[10px] text-[#8888aa] italic px-3">
                    Scannable in under 2 seconds
                  </div>
                </div>

                {/* Right Panel - Active Content */}
                <div className="flex-1 p-6 relative overflow-hidden flex flex-col justify-between">
                  <div className="space-y-6">
                    
                    {/* Active State View switcher */}
                    {activeCategory === "auto-logout" && (
                      <div className="space-y-5">
                        <div className="pb-3 border-b border-white/5">
                          <div className="text-[#0066ff] text-[9px] font-mono uppercase tracking-wider mb-1">Active Category</div>
                          <h3 className="text-lg font-bold text-white">Session Auto-Logout</h3>
                        </div>

                        {/* Setting Item with Progressive Disclosure */}
                        <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-4">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h4 className="text-white font-bold text-sm flex items-center gap-2">
                                Auto Logout Inactive Users
                                <span className="text-[9px] font-mono bg-[#0066ff]/20 text-[#0066ff] px-2 py-0.5 rounded font-normal">PATTERN 01</span>
                              </h4>
                              <p className="text-xs text-[#8888aa] leading-relaxed mt-1">
                                Automatically log field staff out of the companion mobile app after a prolonged period of inactivity.
                              </p>
                            </div>
                            
                            {/* Toggle Button */}
                            <button 
                              onClick={() => setAutoLogoutEnabled(!autoLogoutEnabled)}
                              className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 shrink-0 ${
                                autoLogoutEnabled ? "bg-[#0066ff]" : "bg-white/10"
                              }`}
                            >
                              <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                                autoLogoutEnabled ? "translate-x-6" : "translate-x-0"
                              }`} />
                            </button>
                          </div>

                          {/* Progressive Content (Expands inline if toggle is true) */}
                          <AnimatePresence initial={false}>
                            {autoLogoutEnabled && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden border-t border-white/5 pt-4 space-y-4"
                              >
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label className="block text-[10px] font-bold text-[#8888aa] uppercase mb-1.5">Inactivity Timeout</label>
                                    <select 
                                      value={logoutTime} 
                                      onChange={(e) => setLogoutTime(e.target.value)}
                                      className="w-full bg-[#121222] border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-[#0066ff]"
                                    >
                                      <option>30 minutes</option>
                                      <option>1 hour</option>
                                      <option>2 hours</option>
                                      <option>4 hours</option>
                                    </select>
                                  </div>
                                  <div>
                                    <label className="block text-[10px] font-bold text-[#8888aa] uppercase mb-1.5">Prior Notification</label>
                                    <select 
                                      value={remindTime} 
                                      onChange={(e) => setRemindTime(e.target.value)}
                                      className="w-full bg-[#121222] border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-[#0066ff]"
                                    >
                                      <option>2 minutes</option>
                                      <option>5 minutes</option>
                                      <option>10 minutes</option>
                                      <option>15 minutes</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="p-3 rounded-lg bg-[#0066ff]/5 border border-[#0066ff]/10 text-[10px] text-[#8888aa] leading-relaxed">
                                  <strong className="text-white">Active Rule:</strong> Employees will be prompted on their phone <span className="text-[#0066ff] font-semibold">{remindTime}</span> before logging out if no GPS coordinates change for <span className="text-[#0066ff] font-semibold">{logoutTime}</span>.
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    )}

                    {activeCategory === "fake-location" && (
                      <div className="space-y-5">
                        <div className="pb-3 border-b border-white/5">
                          <div className="text-[#0066ff] text-[9px] font-mono uppercase tracking-wider mb-1">Active Category</div>
                          <h3 className="text-lg font-bold text-white">Fake Location Alerts</h3>
                        </div>

                        {/* Setting Item for Helper Text Pattern */}
                        <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-4">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h4 className="text-white font-bold text-sm flex items-center gap-2">
                                Flag GPS Spoofing Applications
                                <span className="text-[9px] font-mono bg-[#0066ff]/20 text-[#0066ff] px-2 py-0.5 rounded font-normal">PATTERN 02</span>
                              </h4>
                              {/* ALWAYS VISIBLE HELPER TEXT */}
                              <p className="text-xs text-blue-100 font-medium leading-relaxed mt-1.5 p-3 rounded bg-blue-950/20 border border-[#0066ff]/20">
                                💡 <span className="text-white font-semibold">Always-Visible Helper Text:</span> Instantly registers a security infraction on the admin log and silences attendance approvals if mock coordinates software is active on the employee device.
                              </p>
                            </div>
                            
                            {/* Toggle Button */}
                            <button 
                              onClick={() => setFakeLocationEnabled(!fakeLocationEnabled)}
                              className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 shrink-0 ${
                                fakeLocationEnabled ? "bg-[#0066ff]" : "bg-white/10"
                              }`}
                            >
                              <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                                fakeLocationEnabled ? "translate-x-6" : "translate-x-0"
                              }`} />
                            </button>
                          </div>

                          <div className="p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20 text-[10px] text-[#8888aa] leading-relaxed">
                            <strong className="text-white">⚠️ Operational Consequence:</strong> Enabling this setting means workforce logs will capture automatic background audits. There is no tooltip dependency; clarity is upfront.
                          </div>
                        </div>
                      </div>
                    )}

                    {activeCategory === "reimbursement" && (
                      <div className="space-y-5">
                        <div className="pb-3 border-b border-white/5">
                          <div className="text-[#0066ff] text-[9px] font-mono uppercase tracking-wider mb-1">Active Category</div>
                          <h3 className="text-lg font-bold text-white">Travel Reimbursements</h3>
                        </div>

                        <div className="bg-white/5 p-5 rounded-xl border border-white/5 text-center space-y-4">
                          <div className="w-12 h-12 rounded-full bg-[#0066ff]/10 text-[#0066ff] flex items-center justify-center mx-auto border border-[#0066ff]/20">
                            <i className="ti ti-wallet text-2xl" />
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-sm">Complex Configuration Layer</h4>
                            <p className="text-xs text-[#8888aa] leading-relaxed mt-1 max-w-sm mx-auto">
                              Reimbursement calculations contain multi-tier transport definitions, rate settings, and custom approval logs. Open the side panel to manage.
                            </p>
                          </div>

                          <button
                            onClick={() => setIsSidePanelOpen(true)}
                            className="px-4 py-2 rounded-xl bg-[#0066ff] hover:bg-[#0052cc] text-white font-semibold text-xs transition-colors duration-300"
                          >
                            Open Contextual Side Panel &rarr;
                          </button>
                        </div>
                      </div>
                    )}

                    {activeCategory !== "auto-logout" && activeCategory !== "fake-location" && activeCategory !== "reimbursement" && (
                      <div className="space-y-5 py-8 text-center text-[#8888aa] italic text-xs">
                        <i className="ti ti-circle-dashed text-3xl block mx-auto mb-2 text-[#8888aa]/30 animate-spin" />
                        This category ({activeCategory.toUpperCase()}) is structured using standard parameters in the full set of 76 screens. Click Session Auto-Logout, Fake Location Alerts, or Travel Reimbursements to test the interactive UX patterns.
                      </div>
                    )}

                  </div>

                  {/* Anchored Bottom Actions */}
                  <div className="pt-6 border-t border-white/5 flex items-center justify-end gap-3 mt-auto bg-[#0c0c16]">
                    <span className="text-[10px] text-[#8888aa] mr-auto">
                      💡 Anchored save position
                    </span>
                    <button className="px-4 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 text-white font-semibold text-[11px] transition-colors duration-300">
                      Cancel
                    </button>
                    <button className="px-4 py-1.5 rounded-lg bg-[#0066ff] hover:bg-[#0052cc] text-white font-semibold text-[11px] transition-colors duration-300">
                      Save Changes
                    </button>
                  </div>
                </div>

              </div>

              {/* Contextual Side Panel Overlay (Pattern 03) */}
              <AnimatePresence>
                {isSidePanelOpen && (
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.4, ease: customEase }}
                    className="absolute top-[52px] right-0 bottom-0 w-full md:w-3/4 bg-[#10101f] border-l border-white/15 p-6 shadow-2xl z-20 flex flex-col justify-between"
                  >
                    <div>
                      {/* Side Panel Header */}
                      <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                        <div>
                          <div className="text-[#0066ff] text-[9px] font-mono uppercase tracking-wider mb-1">Contextual Config Layer &middot; PATTERN 03</div>
                          <h3 className="text-base font-bold text-white">Configure Transport Reimbursement</h3>
                        </div>
                        <button 
                          onClick={() => setIsSidePanelOpen(false)}
                          className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white flex items-center justify-center transition-colors"
                        >
                          <span className="text-lg">&times;</span>
                        </button>
                      </div>

                      <p className="text-xs text-[#8888aa] leading-relaxed mb-6">
                        Define global per-kilometer reimbursement levels for employee transit. Toggling a type off silences claims for that transport class.
                      </p>

                      {/* Config List */}
                      <div className="space-y-3">
                        {transportRates.map((trans, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                            <div className="flex items-center gap-3">
                              <button 
                                onClick={() => toggleTransportRate(idx)}
                                className={`w-8 h-5 rounded-full p-0.5 transition-colors duration-300 ${
                                  trans.active ? "bg-[#0066ff]" : "bg-white/10"
                                }`}
                              >
                                <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                                  trans.active ? "translate-x-3" : "translate-x-0"
                                }`} />
                              </button>
                              <span className={`text-xs font-semibold ${trans.active ? "text-white" : "text-[#8888aa] line-through"}`}>{trans.type}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] text-[#8888aa]">Rate/km:</span>
                              <input 
                                type="text"
                                value={`INR ${trans.rate}`}
                                disabled
                                className="w-20 bg-[#121222] border border-white/10 rounded px-2 py-1 text-right text-xs font-mono text-white/80"
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => setIsNestedModalOpen(true)}
                        className="w-full py-2.5 rounded-xl border border-dashed border-white/20 hover:border-[#0066ff]/50 hover:bg-[#0066ff]/5 text-[#8888aa] hover:text-white transition-all text-xs font-semibold mt-4"
                      >
                        + Add Custom Transport Type
                      </button>
                    </div>

                    {/* Side Panel Footer */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-end gap-2 mt-6">
                      <button 
                        onClick={() => setIsSidePanelOpen(false)}
                        className="px-4 py-2 rounded-lg border border-white/10 text-white text-xs font-bold transition-all hover:bg-white/5"
                      >
                        Close Panel
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Nested Modal Popup for additions (Double-layer test) */}
              <AnimatePresence>
                {isNestedModalOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm z-30 flex items-center justify-center p-6"
                  >
                    <motion.div
                      initial={{ scale: 0.9, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0.9, y: 20 }}
                      className="w-full max-w-sm bg-[#121224] border border-white/15 rounded-2xl p-6 shadow-2xl space-y-4"
                    >
                      <h4 className="text-white font-bold text-sm">Add Custom Transport Class</h4>
                      <form onSubmit={handleAddTransport} className="space-y-3">
                        <div>
                          <label className="block text-[9px] font-mono text-[#8888aa] uppercase mb-1">Transit Class Name</label>
                          <input 
                            type="text" 
                            placeholder="e.g. Electric Scooter" 
                            value={newTransportType}
                            onChange={(e) => setNewTransportType(e.target.value)}
                            required
                            className="w-full bg-[#1c1c34] border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-[#0066ff]"
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] font-mono text-[#8888aa] uppercase mb-1">Rate per Kilometer (INR)</label>
                          <input 
                            type="number" 
                            step="0.01" 
                            placeholder="e.g. 4.50" 
                            value={newTransportRate}
                            onChange={(e) => setNewTransportRate(e.target.value)}
                            required
                            className="w-full bg-[#1c1c34] border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-[#0066ff]"
                          />
                        </div>
                        <div className="flex items-center justify-end gap-2 pt-2">
                          <button
                            type="button"
                            onClick={() => setIsNestedModalOpen(false)}
                            className="px-3 py-1.5 rounded-lg border border-white/10 text-[#8888aa] text-xs font-semibold hover:bg-white/5"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="px-3 py-1.5 rounded-lg bg-[#0066ff] hover:bg-[#0052cc] text-white text-xs font-semibold"
                          >
                            Add Class
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>
      </section>

      {/* Section 9: The Full Scope */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="md:col-span-4"
          >
            <div className="text-[#0066ff] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">The Full Scope</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight sticky top-32">
              76 Screens. 8 Categories. One Consistent System. Solo.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="md:col-span-8 text-[#8888aa] text-lg md:text-xl leading-relaxed space-y-6"
          >
            <p>
              Every category was designed end-to-end. Not just the default state; the enabled state,
              the configured state, the edge cases, the interaction overlays. Every state an admin
              could encounter had a designed answer.
            </p>
            <p>
              This is what &quot;solo, end-to-end&quot; meant on this project: no design team to divide
              categories between, no second designer to review interaction states in parallel.
            </p>
            <p className="text-white font-medium">
              Every toggle pattern, every helper text placement, every progressive disclosure
              behavior, every side panel; designed, reviewed, iterated, and annotated by one person,
              held to the same standard across all 76 screens.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10">
              {[
                { title: "8 Settings Categories", detail: "With persistent left-panel navigation governing operational separation." },
                { title: "76 Interaction States", detail: "Across all categories — covering default, enabled, configured, and edge cases." },
                { title: "Interaction Overlays", detail: "Contextual side panels, popups, and dynamic inline expansion layers." },
                { title: "Dev Handoff Specification", detail: "Fully annotated covering all states, interactions, and edge cases, ready for React implementation." },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#0066ff]/10 text-[#0066ff] flex items-center justify-center shrink-0 border border-[#0066ff]/20">
                    <span className="font-mono text-xs font-bold">{idx + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-[#8888aa] leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-[#8888aa] italic mt-6">
              * Note: High-fidelity screen visuals are anonymized per NDA guidelines. Selected interaction workflows have been simulated live in the sandbox widget above.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 10: Key Outcomes */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto bg-white/[0.01] rounded-[40px] border border-white/5 my-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="text-[#0066ff] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Outcomes</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What the Redesign Delivered</h2>
          <p className="text-[#8888aa] text-lg leading-relaxed">
            Tangible design improvements that bridged the gap between complex settings and developer-ready code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Scalable Information Architecture",
              icon: "ti-layout-grid",
              body: "The split-panel layout can accommodate any number of future settings categories without disrupting the existing structure or requiring a layout rethink. What was previously a scalability blocker is now a scalability advantage."
            },
            {
              title: "Self-Explanatory Interface",
              icon: "ti-bulb",
              body: "Every setting now answers 'what does this do?' at the point of decision — eliminating tooltip dependency and reducing the cognitive load on admins operating a high-stakes platform. Clarity is built into the layout."
            },
            {
              title: "Configuration Without Clutter",
              icon: "ti-clear-formatting",
              body: "Progressive disclosure and contextual side panels mean the default view stays clean for all admins, while power users can reach deep configuration without losing context. The interface serves both audiences."
            },
            {
              title: "Developer-Ready Specification",
              icon: "ti-code",
              body: "76 annotated screens — covering all states, interactions, and edge cases — delivered as a complete, structured handoff for React implementation. Design that gets built correctly the first time."
            }
          ].map((outcome, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: customEase }}
              whileHover={{ y: -6 }}
              className="bg-white/[0.02] border border-white/5 hover:border-[#0066ff]/20 rounded-[32px] p-8 flex gap-6 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0066ff]/10 text-[#0066ff] flex items-center justify-center shrink-0 border border-[#0066ff]/20">
                <i className={`ti ${outcome.icon} text-xl`} />
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-bold text-base">{outcome.title}</h4>
                <p className="text-xs md:text-sm text-[#8888aa] leading-relaxed">{outcome.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 11: Reflection */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto my-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="relative rounded-[40px] overflow-hidden border border-white/5 p-10 md:p-16 bg-[rgba(0,102,255,0.02)]"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066ff]/30 to-transparent" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-[#0066ff] text-[11px] font-bold tracking-[0.2em] mb-6 uppercase text-center">Reflection</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 text-center">What This Project Taught Me About Enterprise UX</h2>

            <div className="text-[#8888aa] text-lg md:text-xl leading-relaxed space-y-6">
              <p>
                The biggest design challenge wasn&apos;t any individual screen; it was establishing a system
                that could hold together across 76 states without feeling repetitive or fragile.
              </p>
              <p className="text-white font-medium">
                Every decision had to work at scale: the toggle pattern, the helper text placement,
                the progressive disclosure behavior, the side panel approach. One inconsistency in the
                pattern compounds across 76 screens.
              </p>
              <p>
                The IA work was the most impactful contribution. Grouping eight categories into a
                persistent left panel seems simple in hindsight, but it fundamentally changed how an
                admin navigates the module; from scroll and search to navigate and configure.
                That shift in mental model is what made every other design decision easier.
              </p>
              <p className="text-white font-medium border-l-4 border-[#0066ff] pl-6 italic">
                &ldquo;That gap; between a list of plain requirements and a system that works in production; is where enterprise UX design actually lives.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Reused homepage CTAFooter */}
      <CTAFooter />
    </main>
  );
}
