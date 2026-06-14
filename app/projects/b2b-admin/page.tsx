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
    <main className="bg-[#080810] min-h-screen text-[#fafafa] selection:bg-[#0066ff]/30 overflow-x-hidden">
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
      <section className="relative pt-40 pb-20 px-6 md:px-16 max-w-[1400px] mx-auto min-h-[85vh] flex flex-col justify-center items-center text-center">
        {/* Background Radial Glow */}
        <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-[#0066ff] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute -left-10 bottom-10 w-[400px] h-[400px] bg-[#00ffff] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-[#0066ff] text-tag-1 mb-6 flex items-center justify-center gap-2"
        >
          <span>Enterprise SaaS</span> &middot; <span>Admin Panel</span> &middot; <span>UX Case Study</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: customEase }}
          className="text-h1 leading-tight mb-8 max-w-5xl mx-auto text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#8888aa]"
        >
          Redesigning the B2B Admin Control Center
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: customEase }}
          className="text-[#8888aa] text-body-lg max-w-3xl mb-16 mx-auto text-center"
        >
          Transforming a flat, scroll-heavy settings page into a structured, navigable admin
          experience; across 8 feature categories and 76 interaction states.
        </motion.p>

        {/* NDA Warning Alert Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: customEase }}
          className="relative max-w-3xl mb-12 p-5 rounded-2xl bg-white/[0.02] border border-[#0066ff]/20 backdrop-blur-sm flex items-start gap-4 mx-auto text-left"
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
          <div className="absolute top-2 right-4 px-2 py-0.5 rounded bg-[#0066ff]/10 border border-[#0066ff]/20 text-[9px] tracking-widest text-[#0066ff]">
            SECURE ACCESS
          </div>
        </motion.div>

        {/* Hero Mockup Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: customEase }}
          className="w-full rounded-[40px] overflow-hidden mb-16 relative border border-white/5 group shadow-2xl shadow-[#0066ff]/5"
        >
          <img src="/projects/b2b-admin/hero.png" alt="B2B Admin Control Center Mockup Redesign" className="w-full h-auto object-contain opacity-80 group-hover:scale-[1.02] transition-transform duration-[1200ms] ease-out" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-[#080810]/20 to-transparent opacity-80 pointer-events-none" />
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
              <span className="text-h2 text-white">{stat.num}</span>
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
            <div className="text-[#0066ff] text-tag-1 mb-4">Project Context</div>
            <h2 className="text-h2 text-white leading-tight sticky top-32">
              What This Product Does and Who It Serves
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="md:col-span-8 text-[#8888aa] text-body-lg space-y-6"
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
                  <h4 className="text-[#0066ff] font-bold text-tag-3 tracking-wider mb-2">{item.title}</h4>
                  <p className="text-white/80 text-body-sm font-medium">{item.detail}</p>
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
            <div className="text-[#0066ff] text-tag-1 mb-4">The Trigger</div>
            <h2 className="text-h2 text-white leading-tight sticky top-32">
              Why This Redesign Happened When It Did
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="md:col-span-8 text-[#8888aa] text-body-lg space-y-6"
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
                  <div className="text-[#ff5555] text-xs mb-1 font-bold">LEGACY BASE</div>
                  <div className="text-white font-bold text-lg">AngularJS</div>
                  <div className="text-xs text-[#8888aa] mt-2">End-of-life tech, slow loading, flat content structures</div>
                </div>
                <div className="text-center text-[#8888aa] text-xl">&rarr;</div>
                <div className="p-4 rounded-xl bg-blue-950/20 border border-[#0066ff]/20 text-center">
                  <div className="text-[#0066ff] text-xs mb-1 font-bold">FUTURE-READY BASE</div>
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
          <div className="text-[#0066ff] text-tag-1 mb-4">The Problem</div>
          <h2 className="text-h2 text-white mb-6">A Settings Page That Had Grown Without a Plan</h2>
          <p className="text-[#8888aa] text-body-lg">
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
                  <span className="text-tag-2 text-[#0066ff] bg-[#0066ff]/10 px-3 py-1 rounded-full">{pain.num}</span>
                  <i className={`ti ${pain.icon} text-2xl text-[#8888aa] group-hover:text-[#0066ff] transition-colors`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{pain.title}</h3>
                <h4 className="text-tag-2 text-[#0066ff] mb-4">{pain.highlight}</h4>
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
          <div className="text-[#0066ff] text-tag-1 mb-4">Before & After</div>
          <h2 className="text-h2 text-white mb-6">The Transformation at a Glance</h2>
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
                    <span className="flex items-start gap-2"><span className="shrink-0 text-red-500 font-bold">&#10005;</span><span>{row.before}</span></span>
                  </td>
                  <td className="p-6 text-white text-xs leading-relaxed group-hover:text-blue-100 transition-colors bg-[#0066ff]/[0.01] group-hover:bg-[#0066ff]/[0.03]">
                    <span className="flex items-start gap-2"><span className="shrink-0 text-[#0066ff] font-bold">&#10003;</span><span>{row.after}</span></span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Interactive Layout Comparison Slider Hidden */}
        {/* Grids for Before & Redesigned Screens Showcases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 pt-16 border-t border-white/5">

          {/* Legacy Screens Showcase (Before) */}
          <div className="space-y-6">
            <div className="flex flex-col items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-950/20 text-red-500 flex items-center justify-center border border-red-500/20">
                <i className="ti ti-circle-x text-xl" />
              </div>
              <h3 className="text-h3 text-white leading-tight">Before Redesign: Legacy Screens Showcase</h3>
            </div>
            <p className="text-sm text-[#8888aa] leading-relaxed">
              Prior to structural intervention, all configuration rules were thrown together onto a single page, resulting in massive operational risk.
            </p>

            <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-5 group overflow-hidden">
              <div className="w-full overflow-hidden rounded-2xl border border-white/5 relative">
                <img
                  src="/projects/b2b-admin/gallery-before.png"
                  alt="Legacy Screens Collage"
                  className="w-full h-auto object-contain opacity-80 group-hover:scale-[1.02] transition-transform duration-700"
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
            <div className="flex flex-col items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-950/20 text-[#0066ff] flex items-center justify-center border border-[#0066ff]/20">
                <i className="ti ti-circle-check text-xl" />
              </div>
              <h3 className="text-h3 text-white leading-tight">After Redesign: Redesigned Screens Showcase</h3>
            </div>
            <p className="text-sm text-[#8888aa] leading-relaxed">
              Reconstructed in ReactJS with persistent two-panel IA, standardized alignments, inline helpers, and progressive disclosure overlays.
            </p>

            <div className="rounded-3xl border border-[#0066ff]/10 bg-[#0066ff]/[0.01] p-5 group overflow-hidden">
              <div className="w-full overflow-hidden rounded-2xl border border-white/5 relative">
                <img
                  src="/projects/b2b-admin/gallery-after.png"
                  alt="Redesigned Screens Collage"
                  className="w-full h-auto object-contain opacity-90 group-hover:scale-[1.02] transition-transform duration-700"
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
            <div className="text-[#0066ff] text-tag-1 mb-4">The Approach</div>
            <h2 className="text-h2 text-white leading-tight sticky top-32">
              Starting from Requirements, Not Assumptions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="md:col-span-8 text-[#8888aa] text-body-lg space-y-8"
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
                <p className="text-body-sm text-[#8888aa]">
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
                <p className="text-body-sm text-[#8888aa]">
                  Studied enterprise admin panel design patterns across SaaS products with comparable complexity;
                  analyzing how they handled navigation, progressive disclosure, and configuration depth without
                  overwhelming the user. The goal was to understand *why* patterns exist.
                </p>
              </div>
            </div>

            {/* Approach image mockup visual */}
            <div className="w-full rounded-[24px] overflow-hidden border border-white/5 relative group mt-8 bg-[#080810]">
              <img src="/projects/b2b-admin/approach.png" alt="UX Architecture Mapping Whiteboard" className="w-full h-auto object-contain opacity-95 group-hover:scale-[1.02] transition-transform duration-[1000ms]" />
            </div>

            <div className="p-8 rounded-3xl bg-[rgba(0,102,255,0.03)] border border-[#0066ff]/20">
              <div className="text-tag-2 text-[#0066ff] mb-2">The Pivotal Insight</div>
              <p className="text-white text-body-lg font-semibold">
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
        <div className="flex flex-col gap-16">

          {/* Header Text */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-[#0066ff] text-tag-1 mb-4 flex items-center justify-center">Interactive Showcase</div>
            <h2 className="text-h2 text-white mb-6">The Architecture & Patterns in Action</h2>
            <p className="text-[#8888aa] text-body-lg">
              Instead of a single endless scroll, we introduced a persistent two-panel layout: a left nav listing all eight operational domains, and a right content panel showing only the active category.
            </p>
          </div>

          {/* Full-width Image */}
          <div className="w-full rounded-[32px] overflow-hidden border border-white/5 shadow-2xl relative bg-[#080810]">
            <img src="/projects/b2b-admin/architecture-patterns.png" alt="Architecture Patterns" className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
          </div>

          {/* Pattern Cards (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-white font-bold text-tag-3 mb-3">Pattern 01: Progressive Disclosure</h4>
              <p className="text-body-sm text-[#8888aa] leading-relaxed">
                Default state is clean: a label, description, and toggle. Turning on **Auto-Logout** expands detailed configuration parameters dynamically inline.
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-white font-bold text-tag-3 mb-3">Pattern 02: Always-Visible Helper Text</h4>
              <p className="text-body-sm text-[#8888aa] leading-relaxed">
                Every setting carries its description directly beneath its title. Check **Fake Location Alerts** to see description visible at the point of decision before checking.
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-white font-bold text-tag-3 mb-3">Pattern 03: Contextual Side Panel</h4>
              <p className="text-body-sm text-[#8888aa] leading-relaxed">
                Deep settings (e.g. **Travel Reimbursements**) are layered using a slide-out panel, protecting the rhythm of the primary page.
              </p>
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
            <div className="text-[#0066ff] text-tag-1 mb-4">The Full Scope</div>
            <h2 className="text-h2 text-white leading-tight sticky top-32">
              76 Screens. 8 Categories. One Consistent System. Solo.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="md:col-span-8 text-[#8888aa] text-body-lg space-y-6"
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
                    <span className="text-xs font-bold">{idx + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-body-sm text-[#8888aa]">{item.detail}</p>
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
          <div className="text-[#0066ff] text-tag-1 mb-4">Outcomes</div>
          <h2 className="text-h2 text-white mb-6">What the Redesign Delivered</h2>
          <p className="text-[#8888aa] text-body-lg">
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
            <h2 className="text-h2 text-white mb-10 text-center">What This Project Taught Me About Enterprise UX</h2>

            <div className="text-[#8888aa] text-body-lg space-y-6">
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
