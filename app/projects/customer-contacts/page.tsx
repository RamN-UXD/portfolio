"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CTAFooter from "../../../components/sections/CTAFooter";
import CustomCursor from "../../../components/CustomCursor";
import Navbar from "../../../components/Navbar";

const customEase = [0.16, 1, 0.3, 1];

interface LightboxItem {
  src: string;
  title: string;
  caption?: string;
  tag?: string;
}

export default function CustomerContactsCaseStudy() {
  const [activeStepTab, setActiveStepTab] = useState<"comparison" | "before" | "after">("comparison");
  const [showLegacyGallery, setShowLegacyGallery] = useState(false);
  const [lightboxData, setLightboxData] = useState<{ items: LightboxItem[]; index: number } | null>(null);

  const openLightbox = (items: LightboxItem[], index: number = 0) => {
    setLightboxData({ items, index });
  };

  const closeLightbox = () => setLightboxData(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!lightboxData) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") {
        setLightboxData((prev) =>
          prev ? { ...prev, index: prev.index > 0 ? prev.index - 1 : prev.items.length - 1 } : null
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxData((prev) =>
          prev ? { ...prev, index: prev.index < prev.items.length - 1 ? prev.index + 1 : 0 } : null
        );
      }
    },
    [lightboxData]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (lightboxData) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxData]);

  // Gallery of all 7 legacy flow screens
  const legacyFlowScreens: LightboxItem[] = [
    {
      src: "/projects/customer-contact/Old Screen 1 - Settings Menu.png",
      title: "Step 1: Settings Menu",
      caption: "Customers and Contacts lived as separate, disconnected items buried under Settings.",
      tag: "Old Flow",
    },
    {
      src: "/projects/customer-contact/Old Screen 2 - Customers List.png",
      title: "Step 2: Customer List",
      caption: "Flat table with unstructured address text and a separate eye icon needed to view details.",
      tag: "Old Flow",
    },
    {
      src: "/projects/customer-contact/Old Screen 3 - Add Customers.png",
      title: "Step 3: Add Customer Modal",
      caption: "Rigid centered modal with only Name and Address fields. No owner or geolocation.",
      tag: "Old Flow",
    },
    {
      src: "/projects/customer-contact/Old Screen 4 - View Customer Detail.png",
      title: "Step 4: Customer Details",
      caption: "Customer page showed only a name and an address. No contacts were visible anywhere on the screen.",
      tag: "Old Flow",
    },
    {
      src: "/projects/customer-contact/Old Screen 5 - Contacts List.png",
      title: "Step 5: Contacts List",
      caption: "Forced module exit: Admins had to back out to Settings and open a separate Contacts module.",
      tag: "Old Flow",
    },
    {
      src: "/projects/customer-contact/Old Screen 6 - Add Contacts.png",
      title: "Step 6: Add Contact Modal",
      caption: "The first field forced the admin to search and pick the customer from an ambiguous dropdown.",
      tag: "Old Flow",
    },
    {
      src: "/projects/customer-contact/Old Screen 7 - View Contact Detail.png",
      title: "Step 7: View Contact Detail",
      caption: "Contact details isolated from the broader customer context and meeting notes.",
      tag: "Old Flow",
    },
  ];

  return (
    <main className="bg-[#080810] min-h-screen text-[#fafafa] selection:bg-[#0066ff]/30 overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 max-w-[1400px] mx-auto min-h-[85vh] flex flex-col justify-center items-center text-center">
        {/* Background Radial Glows */}
        <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-[#0066ff] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute -left-10 bottom-10 w-[450px] h-[450px] bg-[#00ffff] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-[#0066ff] text-tag-1 mb-6 flex items-center justify-center gap-2 flex-wrap"
        >
          <span>Enterprise SaaS</span> &middot; <span>Admin Panel</span> &middot; <span>UX Case Study</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: customEase }}
          className="text-h1 leading-tight mb-8 max-w-5xl mx-auto text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#8888aa]"
        >
          One Relationship, One Place: Redesigning Customer &amp; Contact Management
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: customEase }}
          className="text-[#8888aa] text-body-lg max-w-3xl mb-12 mx-auto text-center"
        >
          Merging two disconnected modules into one - cutting the journey from 11 steps to 8 and removing the module switch, across 50 screens.
        </motion.p>

        {/* NDA Warning Alert Banner (b2b-admin pattern) */}
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
              NDA Notice
            </h4>
            <p className="text-[#8888aa] text-xs leading-relaxed">
              This project is presented under non-disclosure agreement (NDA). The product name, branding details, and the data&apos;s have been anonymized.
            </p>
          </div>
          <div className="hidden sm:block absolute top-2 right-4 px-2 py-0.5 rounded bg-[#0066ff]/10 border border-[#0066ff]/20 text-[9px] tracking-widest text-[#0066ff]">
            SECURE ACCESS
          </div>
        </motion.div>

        {/* ── HERO MOCKUP IMAGE CARD (b2b-admin pattern) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: customEase }}
          className="w-full h-[550px] md:h-[750px] rounded-[40px] overflow-hidden mb-16 relative border border-white/5 group shadow-2xl shadow-[#0066ff]/5 bg-[#0c0c16]/30 cursor-pointer"
          onClick={() =>
            openLightbox([
              {
                src: "/projects/customer-contact/hero.png",
                title: "Redesigned Two-Column Master-Detail View",
                caption: "The customer list stays permanently anchored on the left, with all customer details, custom fields, and contacts in the right column.",
                tag: "New Interface",
              },
            ])
          }
        >
          <img
            src="/projects/customer-contact/hero.png"
            alt="Redesigned Customer & Contact Management Module"
            className="w-full h-full object-cover object-top opacity-90 group-hover:scale-[1.015] transition-transform duration-[1200ms] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-transparent to-transparent opacity-60 pointer-events-none" />
        </motion.div>

        {/* ── WORKFLOW OPTIMIZATION STEP BAR (HIDDEN AS REQUESTED, CODE PRESERVED) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: customEase }}
          className="hidden w-full max-w-5xl rounded-[32px] p-6 md:p-8 bg-white/[0.02] border border-white/10 backdrop-blur-md mb-12 text-left"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-white/5 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#0066ff] font-bold block mb-1">Workflow Optimization</span>
              <h3 className="text-xl font-bold text-white">Journey Comparison: 11 Steps Down to 8</h3>
            </div>
            {/* View Switcher Tabs */}
            <div className="flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/5 text-xs">
              <button
                onClick={() => setActiveStepTab("comparison")}
                className={`px-3 py-1.5 rounded-lg transition-all ${activeStepTab === "comparison" ? "bg-[#0066ff] text-white font-semibold" : "text-white/60 hover:text-white"
                  }`}
              >
                Comparison
              </button>
              <button
                onClick={() => setActiveStepTab("before")}
                className={`px-3 py-1.5 rounded-lg transition-all ${activeStepTab === "before" ? "bg-red-500/20 text-red-300 font-semibold border border-red-500/30" : "text-white/60 hover:text-white"
                  }`}
              >
                Old Flow (11)
              </button>
              <button
                onClick={() => setActiveStepTab("after")}
                className={`px-3 py-1.5 rounded-lg transition-all ${activeStepTab === "after" ? "bg-[#00f0ff]/20 text-[#00f0ff] font-semibold border border-[#00f0ff]/30" : "text-white/60 hover:text-white"
                  }`}
              >
                New Flow (8)
              </button>
            </div>
          </div>

          {/* Stepper Display */}
          <div className="space-y-6">
            {/* Old Journey */}
            {(activeStepTab === "comparison" || activeStepTab === "before") && (
              <div className="p-5 rounded-2xl bg-red-500/[0.03] border border-red-500/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="text-xs uppercase font-mono font-bold text-red-300 tracking-wider">Before Redesign · 11 Steps</span>
                  </div>
                  <span className="text-[11px] font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                    Includes Forced Module Exit &amp; Re-entry
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-11 gap-2 text-center text-xs">
                  {[
                    { step: "1", label: "Settings", status: "normal" },
                    { step: "2", label: "Customers", status: "normal" },
                    { step: "3", label: "Customer List", status: "normal" },
                    { step: "4", label: "Add Customer", status: "normal" },
                    { step: "5", label: "Back to Settings", status: "friction" },
                    { step: "6", label: "Contacts Menu", status: "friction" },
                    { step: "7", label: "Contacts List", status: "friction" },
                    { step: "8", label: "Add Contact", status: "normal" },
                    { step: "9", label: "Pick Customer Dropdown", status: "friction" },
                    { step: "10", label: "Fill Form", status: "normal" },
                    { step: "11", label: "Save Record", status: "normal" },
                  ].map((s, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xl border flex flex-col justify-between items-center min-h-[78px] transition-all ${s.status === "friction"
                        ? "bg-red-500/20 border-red-500/40 text-red-200 ring-1 ring-red-500/30"
                        : "bg-white/[0.02] border-white/5 text-white/70"
                        }`}
                    >
                      <span className="font-mono text-[10px] text-white/40 mb-1">{s.step}</span>
                      <span className="font-medium text-[11px] leading-tight line-clamp-2">{s.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-[11px] text-red-300/80 flex items-center gap-2">
                  <i className="ti ti-alert-circle text-red-400 text-sm shrink-0" />
                  <span>Steps 5, 6, 7 &amp; 9 represent the disruptive module exit and redundant customer re-linking.</span>
                </div>
              </div>
            )}

            {/* New Journey */}
            {(activeStepTab === "comparison" || activeStepTab === "after") && (
              <div className="p-5 rounded-2xl bg-[#0066ff]/[0.05] border border-[#0066ff]/30">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff]" />
                    <span className="text-xs uppercase font-mono font-bold text-[#00f0ff] tracking-wider">After Redesign · 8 Steps</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#00f0ff] bg-[#0066ff]/20 px-2 py-0.5 rounded border border-[#0066ff]/30">
                    One Unified Context · 0 Module Switches
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2 text-center text-xs">
                  {[
                    { step: "1", label: "Meeting Notes" },
                    { step: "2", label: "Customers Hub" },
                    { step: "3", label: "Add Customer (Side Panel)" },
                    { step: "4", label: "Fill Details & Custom Fields" },
                    { step: "5", label: "Save & Auto-Land on Profile" },
                    { step: "6", label: "Click Add on Contacts Card" },
                    { step: "7", label: "Fill 3 Fields (No Dropdown)" },
                    { step: "8", label: "Save Contact (Finished)" },
                  ].map((s, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl border bg-[#0066ff]/10 border-[#0066ff]/30 text-white flex flex-col justify-between items-center min-h-[82px]"
                    >
                      <span className="font-mono text-[10px] text-[#00f0ff] mb-1">0{s.step}</span>
                      <span className="font-semibold text-[11px] leading-tight text-white/95">{s.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-[11px] text-[#00f0ff]/80 flex items-center gap-2">
                  <i className="ti ti-circle-check text-[#00f0ff] text-sm shrink-0" />
                  <span>The contact is created directly inside the customer. Zero module exits, zero customer dropdowns.</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Project Stats Bar (b2b-admin pattern) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: customEase }}
          className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/5 rounded-[32px] overflow-hidden border border-white/5 backdrop-blur-sm w-full"
        >
          {[
            { num: "11 → 8", label: "Steps Reduced" },
            { num: "2 → 1", label: "Modules Merged" },
            { num: "50", label: "Interaction States" },
            { num: "Solo", label: "End-to-End UX" },
            { num: "Web", label: "Admin Panel" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#080810]/80 p-8 flex flex-col items-center justify-center gap-2 hover:bg-[#0066ff]/5 transition-colors duration-300 text-center">
              <span className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight text-[#00f0ff]">{stat.num}</span>
              <span className="text-xs md:text-sm text-[#8888aa]">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── SECTION: OVERVIEW (b2b-admin editorial pattern) ── */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="md:col-span-4"
          >
            <div className="text-[#0066ff] text-tag-1 mb-4">Overview</div>
            <h2 className="text-h2 text-white leading-tight sticky top-32">
              What This Product Does and Who It Serves
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="md:col-span-8 space-y-8"
          >
            {/* Introductory Context Copy */}
            <div className="text-[#8888aa] text-body-lg space-y-6">
              <p>
                The product is a B2B SaaS admin panel used by companies to manage their field workforce at scale. Admins use it to track attendance, monitor location activity, assign tasks, and manage customer interactions. Field employees interact with a companion mobile app.
              </p>
              <p>
                The <strong className="text-white">Customers &amp; Contacts module</strong> is where admins record the companies their teams visit &mdash; and the people to meet at each one. Every site visit and task is assigned to a customer and a contact, so this data directly shapes what field employees see on their phones. It is a core module for on-field sales, on a platform used by 3,500+ companies when this revamp launched.
              </p>
              <p className="text-white font-medium border-l-4 border-[#0066ff] pl-6 italic">
                When this data is slow to create, everything built on top of it starts late.
              </p>
            </div>

            {/* Overview Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                { title: "My Role", detail: "UX Designer — Solo ownership, end-to-end" },
                { title: "What I Owned", detail: "Problem identification, requirement gathering, IA, user flows, UI design, interaction states, dev handoff" },
                { title: "Product Type", detail: "Field Employee Management — B2B SaaS (web admin panel and mobile app)" },
                { title: "Primary Users", detail: "Company Admins managing Field Employees" },
                { title: "Result", detail: "2 modules merged into 1, zero module switch, 11 steps down to 8" },
                { title: "Scale", detail: "50 screens covering every interaction state" },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                  <h4 className="text-[#0066ff] font-bold text-tag-3 tracking-wider mb-2">{item.title}</h4>
                  <p className="text-white/80 text-body-sm font-medium leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: THE TRIGGER (company settings pattern) ── */}
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
              experience. But the Customers &amp; Contacts module had problems that a code migration alone
              couldn&apos;t fix.
            </p>
            <p className="text-white">
              This was an opportunity not just to rebuild, but to fundamentally rethink
              the customer and contact management experience; with a cleaner technical foundation, an expanded feature set
              coming in with the migration, and the space to do it right.
            </p>

            {/* Tech Migration visual element */}
            <div className="p-8 rounded-3xl bg-[rgba(0,102,255,0.03)] border border-[#0066ff]/20 mt-10">
              <h4 className="text-white font-bold text-base mb-6 flex items-center gap-2">
                <i className="ti ti-arrows-double-ne-sw text-[#0066ff] text-xl" />
                Technical Migration &amp; Design Opportunity
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

      {/* ── SECTION: THE PROBLEM ── */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="mb-14 max-w-3xl"
        >
          <div className="text-[#0066ff] text-tag-1 mb-4">The Problem</div>
          <h2 className="text-h2 text-white mb-6">One Task, Split Across Two Modules</h2>
          <p className="text-[#8888aa] text-body-lg leading-relaxed">
            The old product treated customers and their contacts as two unrelated modules. Adding one client and the person to meet there took two separate trips:
          </p>
        </motion.div>

        {/* 3 Step Tripping Flow (Open, clean cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              num: "01",
              title: "Create Customer in Settings",
              desc: "Open Settings → Customers → Customer List → Add Customer. Fill the form and save.",
              badge: "Module 1",
            },
            {
              num: "02",
              title: "Leave Module & Find Contacts",
              desc: "Go back to Settings through the breadcrumb, open a different module (Contacts), then Contacts List → Add Contact.",
              badge: "Forced Exit",
            },
            {
              num: "03",
              title: "Pick Customer from Dropdown",
              desc: "Pick the customer from a dropdown first, then fill in the contact and save.",
              badge: "Error Risk",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#0066ff]">{item.num}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${item.badge === "Forced Exit" || item.badge === "Error Risk"
                    ? "bg-red-500/10 text-red-300 border border-red-500/20"
                    : "bg-white/5 text-white/50"
                    }`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-xs md:text-sm text-[#8888aa] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-14">
          <p className="text-[#8888aa] text-body-lg max-w-4xl leading-relaxed">
            Mapped click by click, the journey came to <strong className="text-white">11 steps</strong>, including a full module exit and a manual link to a customer created minutes earlier. The cost wasn&apos;t only the clicks. It was the interruption: a task stopped halfway, another module to find, and a connection to rebuild in the admin&apos;s head.
          </p>
        </div>

        {/* ── BEFORE DESIGN EVIDENCE: 2 PROBLEM SCREENS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Old Screen 4 */}
          <div
            className="cursor-pointer group"
            onClick={() =>
              openLightbox([
                {
                  src: "/projects/customer-contact/Old Screen 4 - View Customer Detail.png",
                  title: "Old Customer Details Page",
                  caption: "The old customer page showed a name and an address. No contacts.",
                  tag: "Legacy Flow",
                },
              ])
            }
          >
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#090913] border border-white/10 mb-4 relative shadow-2xl shadow-black/50">
              <img
                src="/projects/customer-contact/Old Screen 4 - View Customer Detail.png"
                alt="Old Customer Details Page"
                className="w-full h-full object-cover object-top group-hover:scale-[1.015] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <span className="px-4 py-2 rounded-full bg-[#080810]/90 border border-white/20 text-xs font-semibold text-white flex items-center gap-2">
                  <i className="ti ti-zoom-in text-red-400 text-sm" /> Click to inspect
                </span>
              </div>
            </div>
            <h4 className="text-base font-bold text-white mb-1">Old Customer Details Page</h4>
            <p className="text-xs text-[#8888aa] leading-relaxed">The old customer page showed a name and an address. No contacts.</p>
          </div>

          {/* Old Screen 6 */}
          <div
            className="cursor-pointer group"
            onClick={() =>
              openLightbox([
                {
                  src: "/projects/customer-contact/Old Screen 6 - Add Contacts.png",
                  title: "Old Add Contact Modal",
                  caption: "The first field in the old Add Contact form was a customer dropdown.",
                  tag: "Legacy Flow",
                },
              ])
            }
          >
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#090913] border border-white/10 mb-4 relative shadow-2xl shadow-black/50">
              <img
                src="/projects/customer-contact/Old Screen 6 - Add Contacts.png"
                alt="Old Add Contact Modal"
                className="w-full h-full object-cover object-top group-hover:scale-[1.015] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <span className="px-4 py-2 rounded-full bg-[#080810]/90 border border-white/20 text-xs font-semibold text-white flex items-center gap-2">
                  <i className="ti ti-zoom-in text-red-400 text-sm" /> Click to inspect
                </span>
              </div>
            </div>
            <h4 className="text-base font-bold text-white mb-1">Old Add Contact Modal</h4>
            <p className="text-xs text-[#8888aa] leading-relaxed">The first field in the old Add Contact form was a customer dropdown.</p>
          </div>
        </div>

        {/* Expandable Legacy Flow Button */}
        <div className="mb-16">
          <button
            onClick={() => setShowLegacyGallery(!showLegacyGallery)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-medium text-white transition-all"
          >
            <i className={`ti ${showLegacyGallery ? "ti-chevron-up" : "ti-layout-grid"} text-sm text-[#0066ff]`} />
            <span>{showLegacyGallery ? "Hide Legacy 7-Step Journey Gallery" : "View All 7 Legacy Screens (Step-by-Step Audit)"}</span>
          </button>

          {showLegacyGallery && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left"
            >
              {legacyFlowScreens.map((screen, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox(legacyFlowScreens, idx)}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-all cursor-pointer group"
                >
                  <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#090913] border border-white/10 mb-3 relative">
                    <img
                      src={screen.src}
                      alt={screen.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                  </div>
                  <span className="text-[10px] font-mono text-red-400 font-bold block mb-1">{screen.tag}</span>
                  <h5 className="text-sm font-bold text-white mb-1">{screen.title}</h5>
                  <p className="text-[11px] text-[#8888aa] line-clamp-2 leading-relaxed">{screen.caption}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* 5 Architectural Flaws (What was really wrong) */}
        <div>
          <h3 className="text-xl font-bold text-white mb-8">Pain Points</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "ti-database",
                title: "Split by data, not by how admins think",
                desc: "A customer and its contacts are one relationship, but the product treated them as unrelated records.",
              },
              {
                icon: "ti-eye-off",
                title: "One-way visibility",
                desc: "The contact page showed its customer. The customer page showed only a name and an address, no contacts at all. To see who works at a customer, an admin had to leave and search.",
              },
              {
                icon: "ti-arrow-back-up",
                title: "Dead ends everywhere",
                desc: "Details opened as a full page. To look at the next customer, the admin used the browser back button or the breadcrumb, found the row again, and clicked the eye icon. Going back through Home or Settings meant clicking through the menus all over again.",
              },
              {
                icon: "ti-file-text",
                title: "Thin records",
                desc: "The form captured a name and an address and nothing else; no precise location, no room for business-specific details.",
              },
              {
                icon: "ti-user-off",
                title: "No owner, no follow-up link",
                desc: "Nothing on a customer said who follows up with it. When a task was created, the person to assign it to had to be worked out each time.",
              },
            ].map((flaw, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0066ff]/10 text-[#0066ff] flex items-center justify-center text-lg mb-4">
                    <i className={`ti ${flaw.icon}`} />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{flaw.title}</h4>
                  <p className="text-xs md:text-sm text-[#8888aa] leading-relaxed">{flaw.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: BEFORE VS. AFTER ── */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="mb-14 max-w-3xl"
        >
          <div className="text-[#0066ff] text-tag-1 mb-4">Before vs. After</div>
          <h2 className="text-h2 text-white mb-6">The Transformation at a Glance</h2>
        </motion.div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-white/5 bg-white/[0.01]">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 border-b border-white/5">
              <tr>
                <th className="p-5 text-white font-semibold w-1/4">Dimension</th>
                <th className="p-5 text-red-400 font-semibold w-5/12">Before</th>
                <th className="p-5 text-[#00f0ff] font-semibold w-5/12">After</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                {
                  dimension: "Journey",
                  before: "11 steps to add a customer and a contact",
                  after: "8 steps",
                },
                {
                  dimension: "Module Switch",
                  before: "Full exit and re-entry",
                  after: "None — contacts are added from the customer's own screen",
                },
                {
                  dimension: "Customer–Contact Link",
                  before: "Admin picks the customer from a dropdown",
                  after: "Automatic — the contact is created inside the customer",
                },
                {
                  dimension: "After Saving a Customer",
                  before: "Back to the list, then the eye icon",
                  after: "Lands directly on the customer's details",
                },
                {
                  dimension: "Seeing Contacts",
                  before: "Leave, open Contacts, search",
                  after: "Contacts card on the same screen",
                },
                {
                  dimension: "Menu Location",
                  before: "Two items under Settings",
                  after: "One Customers item under Meeting Notes",
                },
                {
                  dimension: "Customer Record",
                  before: "Name and address",
                  after: "Owner, map location, custom fields",
                },
                {
                  dimension: "Follow-Up Ownership",
                  before: "None — nothing on the record says who follows up",
                  after: "Each customer is assigned to one, several, or all users — and tasks follow that assignment",
                },
                {
                  dimension: "Dev Handoff",
                  before: "—",
                  after: "50 screens covering all states, interactions, and edge cases — ready for React implementation",
                },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-5 text-white font-medium align-top">{row.dimension}</td>
                  <td className="p-5 text-red-300/80 align-top leading-relaxed">{row.before}</td>
                  <td className="p-5 text-[#00f0ff] font-medium align-top leading-relaxed">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 6: THE APPROACH ── */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5">
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
              Starting from the Journey, Not the Screens
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="md:col-span-8 space-y-8"
          >
            <p className="text-[#8888aa] text-body-lg leading-relaxed">
              Before any screen was drawn, the work started with how an admin actually moves through this module &mdash; and where that movement breaks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0066ff]/10 text-[#0066ff] flex items-center justify-center text-lg mb-4">
                    <i className="ti ti-users" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Stakeholder Discussions</h3>
                  <p className="text-xs md:text-sm text-[#8888aa] leading-relaxed">
                    Sat with the Product Manager and the Director to gather requirements and understand how customers and contacts are used across the product &mdash; and what had to carry over into the rebuild.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0066ff]/10 text-[#0066ff] flex items-center justify-center text-lg mb-4">
                    <i className="ti ti-route" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Flow Mapping</h3>
                  <p className="text-xs md:text-sm text-[#8888aa] leading-relaxed">
                    Laid out the old journey click by click &mdash; Settings, Customers, the list, the form, back out, into Contacts, the list, the form, and the customer dropdown. Eleven steps, one of them a full module switch. Nothing made the problem plainer than seeing it written down.
                  </p>
                </div>
              </div>
            </div>

            {/* The Pivotal Insight Highlight Block */}
            <div className="p-8 md:p-10 rounded-3xl bg-[rgba(0,102,255,0.03)] border border-[#0066ff]/20">
              <div className="flex items-center gap-2 mb-4">
                <i className="ti ti-bulb text-[#0066ff] text-xl" />
                <h4 className="text-white font-bold text-base uppercase tracking-wider">The Pivotal Insight</h4>
              </div>
              <p className="text-white text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-[#0066ff] pl-6 mb-4">
                &ldquo;The map showed that the problem wasn&apos;t how either module looked. It was that there were two of them. A customer and its contacts are one relationship &mdash; and the fix had to be structural, not cosmetic.&rdquo;
              </p>
              <p className="text-[#8888aa] text-body-md pl-7 leading-relaxed">
                That insight drove every decision that followed. The proposal to merge the two modules went through approval before the full design began.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 7: THE ARCHITECTURE DECISION ── */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="md:col-span-4"
          >
            <div className="text-[#0066ff] text-tag-1 mb-4">The Architecture Decision</div>
            <h2 className="text-h2 text-white leading-tight sticky top-32">
              One Structural Change That Changed Everything
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
              Instead of two modules, one. The customer became the home for everything about that relationship &mdash; and contacts moved inside it. No second module, no dropdown, no manual link. A contact is added from the customer&apos;s own screen, so the relationship is never declared by hand. It is implied by where the contact is created.
            </p>
            <p>
              <strong className="text-white">Moving it out of Settings.</strong> Settings is for configuring the system. Customers and contacts are the prospects and leads a sales team works with every day. So the merged module moved into the <strong className="text-white">Meeting Notes</strong> menu &mdash; alongside the work of meeting prospects and leads. Because the migration rolled out one module at a time, admins met the change gradually, not all at once.
            </p>
          </motion.div>
        </div>

        {/* ── VISUAL 1: IA DIAGRAM ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="mb-12 p-6 md:p-10 rounded-[32px] bg-white/[0.02] border border-white/5"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-white/5 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#0066ff] font-bold block mb-1">Information Architecture</span>
              <h3 className="text-xl font-bold text-white">Two Disconnected Modules &rarr; One Integrated Entity</h3>
            </div>
            <span className="text-xs font-mono text-white/50 bg-white/5 px-3 py-1 rounded-full">
              Structural IA Mapping
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Before Architecture */}
            <div className="p-6 rounded-2xl bg-red-500/[0.03] border border-red-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-500/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="text-xs uppercase font-mono font-bold text-red-300 tracking-wider">Before &middot; Disconnected Modules</span>
                  </div>
                  <span className="text-[11px] font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
                    Settings Menu
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-red-500/30">
                    <div className="flex items-center gap-2 mb-2 text-white font-semibold text-sm">
                      <i className="ti ti-building text-red-400" />
                      <span>Module 1: Customers</span>
                    </div>
                    <p className="text-xs text-[#8888aa]">Captures only company name and address. No contacts visible on screen.</p>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs text-red-400 font-mono py-1">
                    <i className="ti ti-unlink text-sm" />
                    <span>Disconnected across system navigation</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-red-500/30">
                    <div className="flex items-center gap-2 mb-2 text-white font-semibold text-sm">
                      <i className="ti ti-users text-red-400" />
                      <span>Module 2: Contacts</span>
                    </div>
                    <p className="text-xs text-[#8888aa]">Forced to link customer manually through error-prone dropdown list.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-red-500/10 text-[11px] text-red-300/80 flex items-center gap-2">
                <i className="ti ti-alert-triangle text-red-400 shrink-0" />
                <span>Admins had to exit to Settings and bridge the link manually in their heads.</span>
              </div>
            </div>

            {/* After Architecture */}
            <div className="p-6 rounded-2xl bg-[#0066ff]/[0.05] border border-[#0066ff]/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#0066ff]/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff]" />
                    <span className="text-xs uppercase font-mono font-bold text-[#00f0ff] tracking-wider">After &middot; Unified Hierarchy</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#00f0ff] bg-[#0066ff]/20 px-2 py-0.5 rounded">
                    Meeting Notes Menu
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-[#080810]/80 border border-[#0066ff]/40 shadow-xl space-y-3">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <i className="ti ti-box text-[#00f0ff]" />
                    <span>Single Customer Record (Home for Everything)</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-2">
                    <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/5 text-white/80 flex items-center gap-2">
                      <i className="ti ti-id text-[#0066ff]" />
                      <span>Customer Details</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/5 text-white/80 flex items-center gap-2">
                      <i className="ti ti-user-check text-[#0066ff]" />
                      <span>Assigned Owner</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/5 text-white/80 flex items-center gap-2">
                      <i className="ti ti-map-pin text-[#0066ff]" />
                      <span>Map Location</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/5 text-white/80 flex items-center gap-2">
                      <i className="ti ti-forms text-[#0066ff]" />
                      <span>Custom Fields</span>
                    </div>
                  </div>

                  <div className="mt-2 p-3 rounded-xl bg-[#0066ff]/15 border border-[#0066ff]/40">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#00f0ff] mb-1">
                      <i className="ti ti-users" />
                      <span>Embedded Contacts Card</span>
                    </div>
                    <p className="text-[11px] text-white/70">
                      Contacts created directly inside customer view. Context is inherited automatically without dropdowns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0066ff]/20 text-[11px] text-[#00f0ff]/80 flex items-center gap-2">
                <i className="ti ti-circle-check text-[#00f0ff] shrink-0" />
                <span>One relationship, one place &mdash; the link is established by context of creation.</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── VISUAL 2: NEW FLOW DIAGRAM (8 STEPS) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="mb-16 p-6 md:p-10 rounded-[32px] bg-white/[0.02] border border-white/5"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-white/5 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#0066ff] font-bold block mb-1">Streamlined Journey</span>
              <h3 className="text-xl font-bold text-white">New Flow Diagram: 8 Continuous Steps</h3>
            </div>
            <span className="text-xs font-mono text-[#00f0ff] bg-[#0066ff]/20 px-3 py-1 rounded-full border border-[#0066ff]/30">
              0 Module Switches
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {[
              { step: "01", title: "Meeting Notes", desc: "Top-level menu" },
              { step: "02", title: "Customers Hub", desc: "Permanent table" },
              { step: "03", title: "Add Customer", desc: "Side panel opens" },
              { step: "04", title: "Fill Details", desc: "Owner & custom fields" },
              { step: "05", title: "Save Customer", desc: "Auto-lands on profile" },
              { step: "06", title: "Click Add", desc: "On Contacts card" },
              { step: "07", title: "Fill Contact", desc: "3 fields (no dropdown)" },
              { step: "08", title: "Save Contact", desc: "Finished in context" },
            ].map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#0066ff]/40 flex flex-col justify-between min-h-[110px] transition-all group"
              >
                <div>
                  <span className="font-mono text-[10px] text-[#0066ff] group-hover:text-[#00f0ff] font-bold block mb-1.5 transition-colors">
                    Step {s.step}
                  </span>
                  <h4 className="text-xs font-bold text-white leading-tight mb-1">{s.title}</h4>
                </div>
                <p className="text-[10px] text-[#8888aa] leading-tight">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between flex-wrap gap-2 text-xs">
            <p className="text-[#8888aa] italic">
              Caption: The contact is added from the Contacts card, on the same screen.
            </p>
            <span className="text-[#00f0ff] font-medium flex items-center gap-1.5 text-xs">
              <i className="ti ti-check text-sm" /> 3 steps eliminated, 100% in-context
            </span>
          </div>
        </motion.div>

        {/* ── LAYOUT BREAKDOWN TABLE ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
        >
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-2">Layout Breakdown</h3>
            <p className="text-[#8888aa] text-body-sm">
              The spatial mechanics that make one-screen customer management possible.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/5 bg-white/[0.01]">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 border-b border-white/5">
                <tr>
                  <th className="p-5 text-white font-semibold w-1/4">Panel</th>
                  <th className="p-5 text-[#0066ff] font-semibold w-3/4">Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  {
                    panel: "Left Panel",
                    detail: "The customer list — search, filter, add, import. Always visible. Switching customers is one click.",
                  },
                  {
                    panel: "Right Panel",
                    detail: "Three collapsible cards — Customer Details, Custom Fields, Contacts.",
                  },
                  {
                    panel: "Side Panels",
                    detail: "Add and edit forms open beside the page, not over it. The page behind stays visible.",
                  },
                  {
                    panel: "Close",
                    detail: "One close button returns to the full list.",
                  },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 text-white font-semibold align-top whitespace-nowrap">{row.panel}</td>
                    <td className="p-5 text-[#8888aa] text-body-sm align-top leading-relaxed">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* ── SECTION: KEY DESIGN DECISIONS (No Nested Boxes) ── */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="mb-16 max-w-3xl"
        >
          <div className="text-[#0066ff] text-tag-1 mb-4">Key Design Decisions</div>
          <h2 className="text-h2 text-white mb-6">Three Structural Moves</h2>
        </motion.div>

        {/* ── DECISION 01: TWO COLUMN VIEW ── */}
        <div className="mb-24 space-y-8">
          <div>
            <span className="text-[#0066ff] text-xs font-bold uppercase tracking-wider block mb-2">Decision 01</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">A Two-Column View That Keeps the Admin in Context</h3>
            <p className="text-[#8888aa] text-body-lg max-w-3xl leading-relaxed">
              The details page is a two-column view. The customer list stays on the left; the selected customer&apos;s details, custom fields and contacts sit on the right. Nothing needs a trip back to the list.
            </p>
          </div>

          {/* New Screen 4 */}
          <div
            className="cursor-pointer group"
            onClick={() =>
              openLightbox([
                {
                  src: "/projects/customer-contact/New Screen 4 - Full page Customer List - 2 Column.png",
                  title: "Two-Column Customer View",
                  caption: "The customer list stays on the left, so switching customers is one click, not a trip back to the list.",
                  tag: "After Redesign",
                },
              ])
            }
          >
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#090913] border border-white/10 mb-3 relative shadow-2xl shadow-black/50">
              <img
                src="/projects/customer-contact/New Screen 4 - Full page Customer List - 2 Column.png"
                alt="Two-Column Customer View"
                className="w-full h-full object-cover object-top group-hover:scale-[1.015] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <span className="px-4 py-2 rounded-full bg-[#080810]/90 border border-white/20 text-xs font-semibold text-white flex items-center gap-2">
                  <i className="ti ti-zoom-in text-[#00f0ff] text-sm" /> Click to inspect
                </span>
              </div>
            </div>
            <p className="text-xs text-[#8888aa] italic">
              Two-column customer view with an empty Contacts card. The customer list stays on the left, so switching customers is one click, not a trip back to the list.
            </p>
          </div>

          {/* Decision 1 Steps Table */}
          <div className="overflow-x-auto rounded-3xl border border-white/5 bg-white/[0.01]">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 border-b border-white/5">
                <tr>
                  <th className="p-5 text-white font-semibold w-24">Step</th>
                  <th className="p-5 text-[#0066ff] font-semibold w-36">State</th>
                  <th className="p-5 text-white font-semibold">What the Admin Sees</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs md:text-sm">
                {[
                  {
                    step: "Step 1",
                    state: "Create",
                    sees: "Add Customer side panel — name, owner, location, address",
                  },
                  {
                    step: "Step 2",
                    state: "Land",
                    sees: "The customer's details open directly; the Contacts card is empty, with an add button",
                  },
                  {
                    step: "Step 3",
                    state: "Add Contact",
                    sees: "A three-field side panel opens from the card — name, phone, email. No customer dropdown",
                  },
                  {
                    step: "Step 4",
                    state: "Switch",
                    sees: "Pick another customer in the left column; the right side updates",
                  },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 text-white font-mono font-bold whitespace-nowrap">{row.step}</td>
                    <td className="p-5 text-[#00f0ff] font-semibold whitespace-nowrap">{row.state}</td>
                    <td className="p-5 text-[#8888aa] leading-relaxed">{row.sees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Before vs After Add Contact Comparison */}
          <div className="pt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Old Screen 6 */}
              <div
                className="cursor-pointer group"
                onClick={() =>
                  openLightbox([
                    {
                      src: "/projects/customer-contact/Old Screen 6 - Add Contacts.png",
                      title: "Old Add Contact Modal",
                      caption: "Old: A modal that starts by asking which customer.",
                      tag: "Before Redesign",
                    },
                  ])
                }
              >
                <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#090913] border border-white/10 mb-3 relative shadow-2xl shadow-black/50">
                  <img
                    src="/projects/customer-contact/Old Screen 6 - Add Contacts.png"
                    alt="Old Add Contact Modal"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.015] transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-3 py-1.5 rounded-full bg-[#080810]/90 border border-white/20 text-xs font-semibold text-white flex items-center gap-1.5">
                      <i className="ti ti-zoom-in text-red-400" /> Inspect Old
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#8888aa] italic">Old: A modal that starts by asking which customer.</p>
              </div>

              {/* New Screen 5 */}
              <div
                className="cursor-pointer group"
                onClick={() =>
                  openLightbox([
                    {
                      src: "/projects/customer-contact/New Screen 5 - Add Contact side panel, filled, opened from the Contacts card.png",
                      title: "New Add Contact Side Panel",
                      caption: "New: Three fields, opened from the customer's Contacts card.",
                      tag: "After Redesign",
                    },
                  ])
                }
              >
                <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#090913] border border-white/10 mb-3 relative shadow-2xl shadow-black/50">
                  <img
                    src="/projects/customer-contact/New Screen 5 - Add Contact side panel, filled, opened from the Contacts card.png"
                    alt="New Add Contact Side Panel"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.015] transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-3 py-1.5 rounded-full bg-[#080810]/90 border border-white/20 text-xs font-semibold text-white flex items-center gap-1.5">
                      <i className="ti ti-zoom-in text-[#00f0ff]" /> Inspect New
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#8888aa] italic">New: Three fields, opened from the customer&apos;s Contacts card.</p>
              </div>
            </div>
          </div>

          {/* New Screen 6: Contacts Card Populated */}
          <div
            className="cursor-pointer group pt-4"
            onClick={() =>
              openLightbox([
                {
                  src: "/projects/customer-contact/New Screen 6 - Contacts card populated with contacts inside the detail view.png",
                  title: "Contacts Card Populated",
                  caption: "Contacts listed in the same view, with their own search, import and add. Custom Fields collapsed to save space.",
                  tag: "In-Context Management",
                },
              ])
            }
          >
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#090913] border border-white/10 mb-3 relative shadow-2xl shadow-black/50">
              <img
                src="/projects/customer-contact/New Screen 6 - Contacts card populated with contacts inside the detail view.png"
                alt="Contacts card populated with contacts inside the detail view"
                className="w-full h-full object-cover object-top group-hover:scale-[1.015] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <span className="px-4 py-2 rounded-full bg-[#080810]/90 border border-white/20 text-xs font-semibold text-white flex items-center gap-2">
                  <i className="ti ti-zoom-in text-[#00f0ff] text-sm" /> Click to inspect
                </span>
              </div>
            </div>
            <p className="text-xs text-[#8888aa] italic">
              Contacts card populated, Custom Fields collapsed. Contacts listed in the same view, with their own search, import and add. Custom Fields collapsed to save space.
            </p>
          </div>
        </div>

        {/* ── DECISION 02: CUSTOM FIELDS ── */}
        <div className="mb-24 space-y-8 pt-12 border-t border-white/5">
          <div>
            <span className="text-[#0066ff] text-xs font-bold uppercase tracking-wider block mb-2">Decision 02</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom Fields, Added Where the Work Happens</h3>
            <p className="text-[#8888aa] text-body-lg max-w-3xl leading-relaxed">
              No two businesses track the same things about their customers. Instead of forcing one fixed form on everyone, I let admins add their own fields <strong className="text-white">right inside the customer form</strong>, with no separate settings area.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-1">
              <h4 className="text-white font-bold text-base">Seven field types</h4>
              <p className="text-xs md:text-sm text-[#8888aa] leading-relaxed">Text, Paragraph, Pill, Cash, Date &amp; Time, Link and Image.</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-white font-bold text-base">Easy to manage</h4>
              <p className="text-xs md:text-sm text-[#8888aa] leading-relaxed">Each field has a title and a value, with drag handles to reorder, delete and collapse.</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-white font-bold text-base">Per customer</h4>
              <p className="text-xs md:text-sm text-[#8888aa] leading-relaxed">Each record carries the details that matter for that relationship, such as type, category or source.</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-white font-bold text-base">Optional by design</h4>
              <p className="text-xs md:text-sm text-[#8888aa] leading-relaxed">The Custom Fields card only appears on a customer that has them.</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-white font-bold text-base">Readable at a glance</h4>
              <p className="text-xs md:text-sm text-[#8888aa] leading-relaxed">Pill values show as tags in the details view.</p>
            </div>
          </div>

          {/* New Screen 3 */}
          <div
            className="cursor-pointer group pt-4"
            onClick={() =>
              openLightbox([
                {
                  src: "/projects/customer-contact/New Screen 3 - Add Customer form with the new custom field, filled.png",
                  title: "Add Customer Form with Custom Fields",
                  caption: "The field-type menu opens beside the form. Customer Type, Business Category and Source are already added.",
                  tag: "In-Form Custom Fields",
                },
              ])
            }
          >
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#090913] border border-white/10 mb-3 relative shadow-2xl shadow-black/50">
              <img
                src="/projects/customer-contact/New Screen 3 - Add Customer form with the new custom field, filled.png"
                alt="Add Customer form with custom fields"
                className="w-full h-full object-cover object-top group-hover:scale-[1.015] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <span className="px-4 py-2 rounded-full bg-[#080810]/90 border border-white/20 text-xs font-semibold text-white flex items-center gap-2">
                  <i className="ti ti-zoom-in text-[#00f0ff] text-sm" /> Click to inspect
                </span>
              </div>
            </div>
            <p className="text-xs text-[#8888aa] italic">
              Add Customer form with the field-type menu open. The field-type menu opens beside the form. Customer Type, Business Category and Source are already added.
            </p>
          </div>
        </div>

        {/* ── DECISION 03: OWNERSHIP THAT FOLLOWS THE CUSTOMER ── */}
        <div className="space-y-8 pt-12 border-t border-white/5">
          <div>
            <span className="text-[#0066ff] text-xs font-bold uppercase tracking-wider block mb-2">Decision 03</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ownership That Follows the Customer</h3>
            <p className="text-[#00f0ff] font-semibold text-base mb-4">Assign the customer once. Let the follow-up carry through.</p>
            <p className="text-[#8888aa] text-body-lg max-w-3xl leading-relaxed">
              A customer now has an owner. Assign To records who follows up with that customer &mdash; one person, several, or everyone. The assignment doesn&apos;t stop at the record. In the task module, selecting a customer assigns the task automatically to the people already responsible for it. When several people are assigned, the task can go to any one of them &mdash; or to more than one. The follow-up chain doesn&apos;t depend on someone remembering who handles whom.
            </p>
          </div>

          {/* Decision 3 Steps Table */}
          <div className="overflow-x-auto rounded-3xl border border-white/5 bg-white/[0.01]">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 border-b border-white/5">
                <tr>
                  <th className="p-5 text-white font-semibold w-24">Step</th>
                  <th className="p-5 text-[#0066ff] font-semibold w-36">State</th>
                  <th className="p-5 text-white font-semibold">What the Admin Sees</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs md:text-sm">
                {[
                  {
                    step: "Step 1",
                    state: "Assign",
                    sees: "Assign To in the Add Customer panel — one user, several, or all",
                  },
                  {
                    step: "Step 2",
                    state: "See",
                    sees: 'The customer list shows assignees as avatars — stacked, labeled "Multiple", when there is more than one',
                  },
                  {
                    step: "Step 3",
                    state: "Create a Task",
                    sees: "Select the customer in the task module — the task is assigned to the people already responsible",
                  },
                  {
                    step: "Step 4",
                    state: "Share",
                    sees: "With several owners, the task goes to one of them, or to more than one",
                  },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 text-white font-mono font-bold whitespace-nowrap">{row.step}</td>
                    <td className="p-5 text-[#00f0ff] font-semibold whitespace-nowrap">{row.state}</td>
                    <td className="p-5 text-[#8888aa] leading-relaxed">{row.sees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* What Else Was Added - and What Was Kept */}
          <div className="pt-6 space-y-3">
            <h4 className="text-xl font-bold text-white">What Else Was Added &mdash; and What Was Kept</h4>
            <p className="text-[#8888aa] text-body-md leading-relaxed">
              The old record was a name and an address. The new one carries what field teams need, and every existing capability carried forward.
            </p>
            <p className="text-[#8888aa] text-body-md leading-relaxed">
              The list changed too. It shows what an admin scans for &mdash; owner, creator, dates. The long address moved into the details, and the customer name is the link, so the eye icon is gone.
            </p>
          </div>

          {/* Added vs Kept Table */}
          <div className="overflow-x-auto rounded-3xl border border-white/5">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 border-b border-white/5">
                <tr>
                  <th className="p-5 text-[#00f0ff] font-semibold">Added</th>
                  <th className="p-5 text-white/70 font-semibold">Kept from the old design</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs md:text-sm">
                {[
                  { added: "Assign To: one user, several, or all", kept: "Import customers and contacts" },
                  { added: "Map-based location with latitude and longitude", kept: "Search" },
                  { added: "Customer ID and created and updated details", kept: "Edit and delete" },
                  { added: "Sorting on dates, plus filtering", kept: "" },
                  { added: "Bulk select for actions on many customers", kept: "" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 text-white font-medium">{row.added}</td>
                    <td className="p-5 text-[#8888aa]">{row.kept}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pair 1: Customer List Comparison */}
          <div className="pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Old Screen 2 */}
              <div
                className="cursor-pointer group"
                onClick={() =>
                  openLightbox([
                    {
                      src: "/projects/customer-contact/Old Screen 2 - Customers List.png",
                      title: "Old Customer List",
                      caption: "Old list: Name, a long address and three icons.",
                      tag: "Before",
                    },
                  ])
                }
              >
                <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#090913] border border-white/10 mb-3 relative shadow-2xl shadow-black/50">
                  <img
                    src="/projects/customer-contact/Old Screen 2 - Customers List.png"
                    alt="Old customer list"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.015] transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-3 py-1.5 rounded-full bg-[#080810]/90 border border-white/20 text-xs font-semibold text-white flex items-center gap-1.5">
                      <i className="ti ti-zoom-in text-red-400" /> Inspect Old
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#8888aa] italic">Old customer list: Name, a long address and three icons.</p>
              </div>

              {/* New Screen 1 */}
              <div
                className="cursor-pointer group"
                onClick={() =>
                  openLightbox([
                    {
                      src: "/projects/customer-contact/New Screen 1 - Full page Customer List - Table View.png",
                      title: "New Customer List",
                      caption: "New list: Who owns it, who created it and when. The name is the link, so the eye icon is gone.",
                      tag: "After",
                    },
                  ])
                }
              >
                <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#090913] border border-white/10 mb-3 relative shadow-2xl shadow-black/50">
                  <img
                    src="/projects/customer-contact/New Screen 1 - Full page Customer List - Table View.png"
                    alt="New customer list"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.015] transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-3 py-1.5 rounded-full bg-[#080810]/90 border border-white/20 text-xs font-semibold text-white flex items-center gap-1.5">
                      <i className="ti ti-zoom-in text-[#00f0ff]" /> Inspect New
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#8888aa] italic">New customer list: Who owns it, who created it and when. The name is the link, so the eye icon is gone.</p>
              </div>
            </div>
          </div>

          {/* Pair 2: Add Customer Form Comparison */}
          <div className="pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Old Screen 3 */}
              <div
                className="cursor-pointer group"
                onClick={() =>
                  openLightbox([
                    {
                      src: "/projects/customer-contact/Old Screen 3 - Add Customers.png",
                      title: "Old Add Customer Modal",
                      caption: "Old form: A name and an address.",
                      tag: "Before",
                    },
                  ])
                }
              >
                <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#090913] border border-white/10 mb-3 relative shadow-2xl shadow-black/50">
                  <img
                    src="/projects/customer-contact/Old Screen 3 - Add Customers.png"
                    alt="Old Add Customer modal"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.015] transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-3 py-1.5 rounded-full bg-[#080810]/90 border border-white/20 text-xs font-semibold text-white flex items-center gap-1.5">
                      <i className="ti ti-zoom-in text-red-400" /> Inspect Old
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#8888aa] italic">Old Add Customer modal: A name and an address.</p>
              </div>

              {/* New Screen 2 */}
              <div
                className="cursor-pointer group"
                onClick={() =>
                  openLightbox([
                    {
                      src: "/projects/customer-contact/New Screen 2 - Add Customer side panel, filled, with Assigned To visible.png",
                      title: "New Add Customer Side Panel",
                      caption: "New form: Owner, a map-based location and room for custom fields.",
                      tag: "After",
                    },
                  ])
                }
              >
                <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#090913] border border-white/10 mb-3 relative shadow-2xl shadow-black/50">
                  <img
                    src="/projects/customer-contact/New Screen 2 - Add Customer side panel, filled, with Assigned To visible.png"
                    alt="New Add Customer side panel"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.015] transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-3 py-1.5 rounded-full bg-[#080810]/90 border border-white/20 text-xs font-semibold text-white flex items-center gap-1.5">
                      <i className="ti ti-zoom-in text-[#00f0ff]" /> Inspect New
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#8888aa] italic">New Add Customer side panel: Owner, a map-based location and room for custom fields.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: KEY OUTCOMES ── */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="mb-16 max-w-3xl"
        >
          <div className="text-[#0066ff] text-tag-1 mb-4">Key Outcomes</div>
          <h2 className="text-h2 text-white mb-6">What the Redesign Delivered</h2>
        </motion.div>

        {/* 4 Outcome Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#0066ff]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0066ff]/10 text-[#0066ff] flex items-center justify-center text-lg mb-6 border border-[#0066ff]/20">
                <i className="ti ti-arrows-join" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">One Module, No Switch</h3>
              <p className="text-body-sm text-[#8888aa] leading-relaxed">
                Merging two modules into one removed the module switch &mdash; and the dropdown where a wrong customer could be picked &mdash; from a task admins repeat constantly. The journey went from 11 steps to 8.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#0066ff]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0066ff]/10 text-[#0066ff] flex items-center justify-center text-lg mb-6 border border-[#0066ff]/20">
                <i className="ti ti-brain" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Less to Remember</h3>
              <p className="text-body-sm text-[#8888aa] leading-relaxed">
                Contacts live on the customer. Switching customers is a click in the left column. One close button replaces breadcrumbs and menus. The list shows what an admin scans for, and opens details on demand. The cognitive load moved from the admin&apos;s head into the layout.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#0066ff]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0066ff]/10 text-[#0066ff] flex items-center justify-center text-lg mb-6 border border-[#0066ff]/20">
                <i className="ti ti-link" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">A Follow-Up Chain That Doesn&apos;t Break</h3>
              <p className="text-body-sm text-[#8888aa] leading-relaxed">
                Every customer has an owner, and every task created for that customer starts with the right people assigned. Follow-up stops depending on memory. Location, custom fields and filtering add the context field teams work from &mdash; and admins can capture business-specific details themselves, without waiting on a new release.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#0066ff]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0066ff]/10 text-[#0066ff] flex items-center justify-center text-lg mb-6 border border-[#0066ff]/20">
                <i className="ti ti-shield-check" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">A Safe Migration</h3>
              <p className="text-body-sm text-[#8888aa] leading-relaxed">
                Every existing feature carried over. One module to build and maintain instead of two. After launch, the Product Manager reported that onboarding customers and contacts felt faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION: REFLECTION (Identical UI to b2b-admin Reflection) ── */}
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
            <h2 className="text-h2 text-white mb-10 text-center">What This Project Taught Me About Structure</h2>

            <div className="text-[#8888aa] text-body-lg space-y-6">
              <p>
                The real problem wasn&apos;t a missing feature &mdash; it was a mismatch between how the product was built and how admins think about their work. Customers and contacts were split because that is how the data was organized, not because that is how an admin experiences onboarding a client.
              </p>
              <p>
                The structural decision was the most impactful contribution. Merging two modules into one changed the unit of work from managing two records to managing one relationship. That shift is what made every other decision easier &mdash; contacts inside the customer, a view that keeps the list in sight, forms that open beside the page instead of over it.
              </p>
              <p>
                This project also sharpened something specific: counting in whole journeys, not single screens. Writing the old flow down step by step turned a vague sense that something was clumsy into a number the team could see &mdash; eleven steps, one of them a full module switch.
              </p>
              <p className="text-white text-lg md:text-xl font-medium border-l-4 border-[#0066ff] pl-6 italic pt-2">
                &ldquo;Good structure doesn&apos;t make a task prettier. It makes parts of it disappear.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── FULL RESOLUTION LIGHTBOX MODAL ── */}
      <AnimatePresence>
        {lightboxData !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-6"
            onClick={closeLightbox}
          >
            {/* Top Bar */}
            <div
              className="flex items-center justify-between w-full max-w-7xl mx-auto pb-3 border-b border-white/10 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                {lightboxData.items[lightboxData.index].tag && (
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0066ff]/20 text-[#00f0ff] border border-[#0066ff]/40 font-bold">
                    {lightboxData.items[lightboxData.index].tag}
                  </span>
                )}
                <span className="text-sm md:text-base font-bold text-white hidden sm:inline-block">
                  {lightboxData.items[lightboxData.index].title}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-[#8888aa] hidden md:inline-block font-mono">
                  Press ESC to close &middot; Use &larr; &rarr; to navigate
                </span>
                <button
                  onClick={closeLightbox}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <i className="ti ti-x text-lg" />
                </button>
              </div>
            </div>

            {/* Main Stage */}
            <div
              className="relative flex-1 flex items-center justify-center max-w-7xl w-full mx-auto my-2 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              {lightboxData.items.length > 1 && (
                <button
                  onClick={() =>
                    setLightboxData((prev) =>
                      prev
                        ? {
                          ...prev,
                          index: prev.index > 0 ? prev.index - 1 : prev.items.length - 1,
                        }
                        : null
                    )
                  }
                  className="absolute left-2 md:left-4 z-20 w-11 h-11 rounded-full bg-[#080810]/80 border border-white/20 text-white hover:bg-[#0066ff] hover:border-[#0066ff] flex items-center justify-center transition-all shadow-2xl"
                  aria-label="Previous screen"
                >
                  <i className="ti ti-chevron-left text-xl" />
                </button>
              )}

              {/* Display Image */}
              <div className="max-w-full max-h-[75vh] flex items-center justify-center rounded-2xl overflow-hidden border border-white/10 bg-[#07070e] shadow-2xl shadow-black">
                <img
                  src={lightboxData.items[lightboxData.index].src}
                  alt={lightboxData.items[lightboxData.index].title}
                  className="w-auto h-auto max-w-full max-h-[75vh] object-contain select-none"
                />
              </div>

              {/* Next Button */}
              {lightboxData.items.length > 1 && (
                <button
                  onClick={() =>
                    setLightboxData((prev) =>
                      prev
                        ? {
                          ...prev,
                          index: prev.index < prev.items.length - 1 ? prev.index + 1 : 0,
                        }
                        : null
                    )
                  }
                  className="absolute right-2 md:right-4 z-20 w-11 h-11 rounded-full bg-[#080810]/80 border border-white/20 text-white hover:bg-[#0066ff] hover:border-[#0066ff] flex items-center justify-center transition-all shadow-2xl"
                  aria-label="Next screen"
                >
                  <i className="ti ti-chevron-right text-xl" />
                </button>
              )}
            </div>

            {/* Bottom Bar */}
            <div
              className="w-full max-w-7xl mx-auto pt-3 border-t border-white/10 z-10 flex flex-col sm:flex-row items-center justify-between gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-left w-full sm:w-auto">
                <p className="text-sm font-semibold text-white">
                  {lightboxData.items[lightboxData.index].title}
                </p>
                {lightboxData.items[lightboxData.index].caption && (
                  <p className="text-xs text-[#8888aa] mt-0.5">
                    {lightboxData.items[lightboxData.index].caption}
                  </p>
                )}
              </div>

              {lightboxData.items.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto max-w-full">
                  {lightboxData.items.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setLightboxData((prev) => (prev ? { ...prev, index: idx } : null))}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${lightboxData.index === idx
                        ? "bg-[#0066ff] text-white font-bold ring-1 ring-[#00f0ff]"
                        : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                        }`}
                    >
                      0{idx + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTAFooter />
    </main>
  );
}
