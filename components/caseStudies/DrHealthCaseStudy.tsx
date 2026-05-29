"use client";

import { motion } from "framer-motion";
import CTAFooter from "@/components/sections/CTAFooter";

const customEase = [0.16, 1, 0.3, 1] as const;
const PROJECT_ACCENT = "#00ffb7";

const SECTION_NAV = [
  { id: "origin", label: "Research Origin" },
  { id: "scope", label: "Design Scope" },
  { id: "principles", label: "Principles" },
  { id: "light-mode", label: "Light Mode" },
  { id: "features", label: "Features" },
  { id: "hifi", label: "Hi-Fi Screens" },
  { id: "testing", label: "Usability Testing" },
];

const ImagePlaceholder = ({
  label,
  className = "",
  size = "default",
}: {
  label: string;
  className?: string;
  size?: string;
}) => {
  const heights: Record<string, string> = {
    small: "min-h-[200px]",
    default: "min-h-[300px]",
    large: "min-h-[400px]",
    xl: "min-h-[480px]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: customEase }}
      className={`relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm ${heights[size]} ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${PROJECT_ACCENT}18, transparent 70%)`,
        }}
      />
      <div className="relative flex h-full min-h-[inherit] flex-col items-center justify-center p-8 text-center">
        <p className="text-sm font-medium text-[#8888aa] transition-colors group-hover:text-white/80">
          {label}
        </p>
        <p className="mt-2 text-xs text-[#8888aa]/50">Mockup / Screenshot</p>
      </div>
    </motion.div>
  );
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#0066ff]">
      {children}
    </p>
  );
}

function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`text-balance text-3xl font-bold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-[3.25rem] ${className}`}
    >
      {children}
    </h2>
  );
}

function SectionIntro({ children }: { children: React.ReactNode }) {
  return <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#8888aa]">{children}</p>;
}

function CaseStudySection({
  id,
  children,
  bordered = true,
}: {
  id?: string;
  children: React.ReactNode;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-28 py-24 md:py-32 ${bordered ? "border-t border-white/[0.06]" : ""}`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-16">{children}</div>
    </section>
  );
}

function GlassCard({
  children,
  className = "",
  accent,
}: {
  children: React.ReactNode;
  className?: string;
  accent?: string;
}) {
  return (
    <div
      className={`rounded-[28px] border border-white/[0.08] bg-[rgba(48,46,97,0.14)] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-white/[0.14] md:p-10 ${className}`}
      style={
        accent
          ? { boxShadow: `inset 0 1px 0 0 ${accent}22` }
          : undefined
      }
    >
      {children}
    </div>
  );
}

export default function DrHealthCaseStudy() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#080810] text-[#fafafa]">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
        <div
          className="absolute -left-[20%] top-[8%] h-[520px] w-[520px] rounded-full blur-[140px]"
          style={{ background: `${PROJECT_ACCENT}12` }}
        />
        <div className="absolute -right-[15%] top-[35%] h-[480px] w-[480px] rounded-full bg-[#0066ff]/[0.06] blur-[120px]" />
        <div className="absolute bottom-[10%] left-[30%] h-[400px] w-[400px] rounded-full bg-[#cc63ff]/[0.05] blur-[100px]" />
      </div>

      {/* Sticky section nav — desktop */}
      <nav
        className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
        aria-label="Case study sections"
      >
        <ul className="flex flex-col gap-1 rounded-full border border-white/[0.08] bg-[#080810]/80 p-2 backdrop-blur-md">
          {SECTION_NAV.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#8888aa] transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="relative z-10">
        {/* HERO */}
        <header className="relative pb-8 pt-12 md:pt-20">
          <div className="mx-auto max-w-[1400px] px-6 md:px-16">
            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: customEase }}
              href="/#work"
              className="group mb-10 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-[#8888aa] transition-colors hover:border-white/[0.15] hover:text-white"
            >
              <span className="transition-transform group-hover:-translate-x-0.5">←</span>
              <span>Back to Work</span>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: customEase }}
              className="mb-8 flex flex-wrap gap-2"
            >
              {["UX/UI Design", "Mobile App", "Case Study"].map((tag, i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold text-white/70"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-end">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: customEase }}
                className="lg:col-span-7"
              >
                <p
                  className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em]"
                  style={{ color: PROJECT_ACCENT }}
                >
                  Dr.Health · Case Study
                </p>
                <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl">
                  Translating Research Insights on Preventive Healthcare into App Design
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#8888aa] md:text-xl">
                  Dr.Health is a research-led mobile experience designed to empower urban Indians to take proactive control of their health — built on validated user problems, driven by evidence-based design decisions, and tested with real users.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: customEase }}
                className="lg:col-span-5"
              >
                <ImagePlaceholder label="App Hero Visual / Device Mockup" size="xl" />
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: customEase }}
              className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5"
            >
              {[
                { label: "Features Designed", value: "2", accent: "#0066ff", icon: "✨" },
                { label: "User Personas Tested", value: "2", accent: "#cc63ff", icon: "👥" },
                { label: "Hi-Fi Screens", value: "11", accent: "#00ffb7", icon: "📱" },
                { label: "Design Principles", value: "4", accent: "#ff6b00", icon: "⚡" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[rgba(48,46,97,0.16)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14] md:p-8"
                >
                  <div
                    className="absolute left-0 top-0 h-full w-1 rounded-l-[24px]"
                    style={{ backgroundColor: stat.accent }}
                  />
                  <p className="mb-3 text-2xl">{stat.icon}</p>
                  <p
                    className="text-3xl font-bold tracking-tight md:text-4xl"
                    style={{ color: stat.accent }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-medium text-[#8888aa] md:text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </header>

        {/* SECTION 2 */}
        <CaseStudySection id="origin">
          <span id="research" className="sr-only" aria-hidden />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <div className="mb-14 md:mb-20">
              <SectionEyebrow>Section 2</SectionEyebrow>
              <SectionTitle>Where This Design Came From</SectionTitle>
            </div>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="space-y-6 lg:col-span-6">
                <p className="text-lg leading-relaxed text-[#8888aa]">
                  This project doesn&apos;t begin with wireframes. It begins with{" "}
                  <strong className="text-white">187 research participants, 3 surveys, 14 interviews</strong>, and{" "}
                  <strong className="text-white">18 validated user problems</strong> uncovered in the UX research phase.
                </p>
                <p className="text-lg leading-relaxed text-[#8888aa]">
                  From those 18 problems, the design phase focused on a specific business case:{" "}
                  <strong className="text-white">Higher Healthcare Expenses</strong> — the domain where preventive design intervention could deliver the most measurable impact.
                </p>
                <p className="text-lg leading-relaxed text-[#8888aa]">
                  Every layout decision, interaction pattern, and design principle applied in this project has a reason grounded in what users actually said, felt, and struggled with.
                </p>
                <a
                  href="#research"
                  className="inline-flex items-center gap-2 font-semibold transition-all hover:gap-3"
                  style={{ color: PROJECT_ACCENT }}
                >
                  <span>→ Read the full research behind this project</span>
                </a>
              </div>
              <div className="lg:col-span-6">
                <ImagePlaceholder label="Research Synthesis / Affinity Mapping" size="large" />
              </div>
            </div>
          </motion.div>
        </CaseStudySection>

        {/* SECTION 3 */}
        <CaseStudySection id="scope">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <div className="mb-14 md:mb-20">
              <SectionEyebrow>Section 3</SectionEyebrow>
              <SectionTitle>What the Design Was Built to Solve</SectionTitle>
            </div>

            <div className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              <GlassCard accent={PROJECT_ACCENT}>
                <p className="mb-4 text-sm font-bold uppercase tracking-widest" style={{ color: PROJECT_ACCENT }}>
                  Business Case
                </p>
                <h3 className="mb-4 text-2xl font-bold text-white">Focus Area</h3>
                <p className="mb-3 text-xl font-bold text-white">Higher Healthcare Expenses</p>
                <p className="text-sm leading-relaxed text-[#8888aa]">
                  Scoped around solving problems that directly contribute to higher healthcare expenses through better user experiences.
                </p>
              </GlassCard>

              {[
                {
                  disease: "Obesity & Overweight",
                  impact: "~INR 9.90 crore",
                  lives: "~2.37 crore at risk",
                  accent: "#ff6b00",
                },
                {
                  disease: "Cardiovascular Diseases",
                  impact: "INR ~12.35K crore",
                  lives: "~16.88 lakh at risk",
                  accent: "#0066ff",
                },
                {
                  disease: "Unhealthy Habits-based Cancers",
                  impact: "INR 74.62 crore",
                  lives: "~14.48K at risk",
                  accent: "#cc63ff",
                },
              ].map((disease, idx) => (
                <GlassCard key={idx} accent={disease.accent}>
                  <p className="mb-5 text-sm font-bold" style={{ color: disease.accent }}>
                    {disease.disease}
                  </p>
                  <div className="space-y-5">
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-widest text-[#8888aa]">Financial Impact</p>
                      <p className="font-semibold text-white">{disease.impact}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-widest text-[#8888aa]">Lives at Risk</p>
                      <p className="font-semibold text-white">{disease.lives}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            <p className="mb-10 text-lg text-[#8888aa]">
              These three validated problems from the research phase directly shaped the design scope:
            </p>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
              {[
                {
                  title: "Unhealthy Habits",
                  desc: "Fast-paced lifestyles often result in increased stress and boredom, leading to the adoption of bad habits. Conflicting advice from various sources further contributes to the development of unhealthy behaviors.",
                  num: "01",
                },
                {
                  title: "Late Diagnosis & Treatment",
                  desc: "Reactive healthcare, caused by decentralized medical information and a lack of health tracking, leads to advanced diseases.",
                  num: "02",
                },
                {
                  title: "Higher Healthcare Expenses",
                  desc: "Treating advanced diseases is more costly than preventive care, requiring additional resources and specialized interventions.",
                  num: "03",
                },
              ].map((problem, idx) => (
                <GlassCard key={idx} className="group relative">
                  <span className="absolute right-8 top-8 text-5xl font-bold text-[#0066ff]/15 transition-opacity group-hover:text-[#0066ff]/30">
                    {problem.num}
                  </span>
                  <h4 className="mb-4 text-xl font-bold text-white">{problem.title}</h4>
                  <p className="text-sm leading-relaxed text-[#8888aa]">{problem.desc}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </CaseStudySection>

        {/* SECTION 4 */}
        <CaseStudySection id="principles">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <div className="mb-14 md:mb-20">
              <SectionEyebrow>Section 4</SectionEyebrow>
              <SectionTitle>Design Principles — The Foundation Before the First Screen</SectionTitle>
              <SectionIntro>
                These principles were established before any interface decisions were made. Every screen in this project can be traced back to at least one of these.
              </SectionIntro>
            </div>

            <div className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
              {[
                {
                  num: "1",
                  title: "Gestalt Principles",
                  accent: "#0066ff",
                  items: ["Proximity", "Similarity", "Continuity", "Closure"],
                  note: "Design principle applied for visual grouping",
                },
                {
                  num: "2",
                  title: "UX Laws",
                  accent: "#cc63ff",
                  items: ["Law of Prägnanz", "Fitts's Law", "Hick's Law"],
                  note: "Applied to enhance usability",
                },
                {
                  num: "3",
                  title: "Design Psychology",
                  accent: PROJECT_ACCENT,
                  items: ["Golden Ratio", "User Cognition", "Visual Harmony"],
                  note: "Subconscious perception & alignment",
                },
              ].map((group, idx) => (
                <div
                  key={idx}
                  className="rounded-[28px] border p-8 md:p-10"
                  style={{
                    borderColor: `${group.accent}33`,
                    background: `${group.accent}0c`,
                  }}
                >
                  <div
                    className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-bold"
                    style={{ background: `${group.accent}22`, color: group.accent }}
                  >
                    {group.num}
                  </div>
                  <h3 className="mb-6 text-xl font-bold text-white">{group.title}</h3>
                  <div className="space-y-4 border-t border-white/[0.06] pt-6">
                    {group.items.map((item, i) => (
                      <div key={i}>
                        <p className="text-sm font-semibold text-white">{item}</p>
                        <p className="mt-1 text-xs leading-relaxed text-[#8888aa]">{group.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="mb-8 text-2xl font-bold text-white">
                Rationale for Using the 4-Point Grid System
              </h3>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                {[
                  { benefit: "Consistency", desc: "Ensures uniform spacing and alignment across all screens, creating a cohesive visual language." },
                  { benefit: "Visual Hierarchy", desc: "Supports clear content prioritization by maintaining proportional spacing between elements." },
                  { benefit: "Time-Saving Efficiency", desc: "Speeds up design decisions by providing a defined spatial framework, reducing guesswork." },
                  { benefit: "Improved Collaboration", desc: "Shared grid understanding bridges the gap between design and development, reducing handoff friction." },
                ].map((item, idx) => (
                  <GlassCard key={idx}>
                    <p className="mb-3 text-sm font-bold text-[#0066ff]">0{idx + 1}</p>
                    <p className="mb-2 font-semibold text-white">{item.benefit}</p>
                    <p className="text-sm leading-relaxed text-[#8888aa]">{item.desc}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </motion.div>
        </CaseStudySection>

        {/* SECTION 5 */}
        <CaseStudySection id="light-mode">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <div className="mb-14 md:mb-20">
              <SectionEyebrow>Section 5</SectionEyebrow>
              <SectionTitle>Why Light Mode — A Deliberate Decision</SectionTitle>
              <SectionIntro>
                Before designing a single screen, the display mode was evaluated against user context, demographics, and healthcare-specific usage patterns.
              </SectionIntro>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
              <div className="relative lg:col-span-5">
                <div className="absolute left-[19px] top-6 bottom-6 hidden w-px bg-gradient-to-b from-[#0066ff]/40 via-white/10 to-transparent md:block" />
                <div className="space-y-4">
                  {[
                    { num: "01", principle: "Readability & Visibility", rationale: "Light mode ensures better text clarity, especially in bright environments — crucial for healthcare apps." },
                    { num: "02", principle: "Psychological Impact", rationale: "It creates a clean, trustworthy feel and keeps users alert when engaging with sensitive health information." },
                    { num: "03", principle: "User Demographics", rationale: "More accessible for older users and preferred during daytime use, aligning with typical app usage patterns." },
                    { num: "04", principle: "Content Presentation", rationale: "Charts, images, and forms are easier to interpret and interact with on a light background." },
                    { num: "05", principle: "Battery Consumption", rationale: "On modern screens, light mode has negligible battery impact — ideal for short, frequent sessions." },
                    { num: "06", principle: "Consistency & Standards", rationale: "It aligns with industry standards, offering a familiar and credible user experience." },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="relative flex gap-5 rounded-[20px] border border-white/[0.06] bg-[rgba(48,46,97,0.12)] p-5 pl-6 transition-colors hover:border-white/[0.12] md:pl-8"
                    >
                      <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0066ff]/15 text-xs font-bold text-[#0066ff]">
                        {item.num}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{item.principle}</p>
                        <p className="mt-1 text-sm leading-relaxed text-[#8888aa]">{item.rationale}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7 lg:sticky lg:top-28">
                <ImagePlaceholder label="Light Mode UI Comparison / Before & After" size="xl" />
              </div>
            </div>
          </motion.div>
        </CaseStudySection>

        {/* SECTION 6 */}
        <CaseStudySection id="features">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <div className="mb-16 md:mb-24">
              <SectionEyebrow>Section 6</SectionEyebrow>
              <SectionTitle>From Validated Problems to Designed Solutions</SectionTitle>
              <SectionIntro>
                Two features were designed end-to-end — from the validated user problem through solution point, wireframe flow, and high-fidelity screens.
              </SectionIntro>
            </div>

            {/* Feature 1 */}
            <article className="mb-24 border-b border-white/[0.06] pb-24">
              <div className="mb-10 flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0066ff]/15 text-lg font-bold text-[#0066ff]">
                  1
                </span>
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  Motivational Reminders and Rewards
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-12 xl:grid-cols-2 xl:gap-16">
                <div className="space-y-6">
                  <div className="rounded-[28px] border border-[#0066ff]/25 bg-[#0066ff]/[0.08] p-8">
                    <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#0066ff]">User Problem</p>
                    <p className="mb-3 text-lg font-semibold text-white">Motivation and Engagement with Fitness Regimens</p>
                    <p className="leading-relaxed text-[#8888aa]">
                      Urban users show fluctuating motivation towards fitness. Walking is often highlighted as an accessible activity, but sticking to structured fitness routines consistently remains a core behavioral challenge across personas.
                    </p>
                  </div>
                  <GlassCard>
                    <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#8888aa]">Solution Point</p>
                    <p className="leading-relaxed text-[#8888aa]">
                      The app addresses fluctuating motivation by sending contextual motivational reminders and messages tied to the user&apos;s own goals. A rewards system — points and badges for achieving fitness targets — creates a positive reinforcement loop that sustains engagement beyond initial adoption.
                    </p>
                  </GlassCard>
                  <div>
                    <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#8888aa]">
                      Wireframe Flow (6 Steps)
                    </p>
                    <ol className="relative space-y-0">
                      {[
                        "Setting Fitness Goals",
                        "Enabling Motivational Reminders",
                        "Customizing Reminders",
                        "Engaging with the App",
                        "Achieving Goals & Earning Rewards",
                        "Tracking Progress",
                      ].map((step, idx) => (
                        <li key={idx} className="relative flex gap-4 pb-6 last:pb-0">
                          {idx < 5 && (
                            <span className="absolute left-[15px] top-10 h-[calc(100%-16px)] w-px bg-white/10" />
                          )}
                          <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0066ff]/20 text-xs font-bold text-[#0066ff]">
                            {idx + 1}
                          </span>
                          <p className="pt-1 text-sm text-[#8888aa]">{step}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <ImagePlaceholder label="Screen 1: Set Fitness Goals" size="large" className="col-span-2" />
                  <ImagePlaceholder label="Screen 2: Reminders" size="default" />
                  <ImagePlaceholder label="Screen 3: Customize" size="default" />
                  <ImagePlaceholder label="Screen 4: Achievement" size="default" />
                  <ImagePlaceholder label="Screen 5: Progress" size="default" />
                </div>
              </div>
            </article>

            {/* Feature 2 */}
            <article>
              <div className="mb-10 flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#cc63ff]/15 text-lg font-bold text-[#cc63ff]">
                  2
                </span>
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  Mental & Cardiovascular Healthcare
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-12 xl:grid-cols-2 xl:gap-16">
                <div className="order-2 grid grid-cols-2 gap-4 xl:order-1">
                  <ImagePlaceholder label="Screen 1: Healthcare" size="large" className="col-span-2" />
                  <ImagePlaceholder label="Screen 2: Professionals" size="default" />
                  <ImagePlaceholder label="Screen 3: Filters" size="default" />
                  <ImagePlaceholder label="Screen 4: Booking" size="default" />
                  <ImagePlaceholder label="Screen 5: Consultation" size="default" />
                </div>
                <div className="order-1 space-y-6 xl:order-2">
                  <div className="rounded-[28px] border border-[#cc63ff]/25 bg-[#cc63ff]/[0.08] p-8">
                    <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#cc63ff]">User Problem</p>
                    <p className="mb-3 text-lg font-semibold text-white">Access and Engagement with Healthcare Services</p>
                    <p className="leading-relaxed text-[#8888aa]">
                      Urban users find it challenging to engage with mental health services, cardiovascular checkups, and insurance due to personal time constraints and scheduling conflicts. The barrier isn&apos;t awareness — it&apos;s accessibility and convenience.
                    </p>
                  </div>
                  <GlassCard>
                    <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#8888aa]">Solution Point</p>
                    <p className="leading-relaxed text-[#8888aa]">
                      The app provides a platform for users to connect with mental health professionals through video calls, overcoming both geographical and time constraints. Flexible scheduling, professional profiles with ratings, and in-app follow-up tools make ongoing care management practical rather than aspirational.
                    </p>
                  </GlassCard>
                  <div>
                    <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#8888aa]">
                      Wireframe Flow (5 Steps)
                    </p>
                    <ol className="relative space-y-0">
                      {[
                        "Navigate to Mental Health Services",
                        "Choose a Professional",
                        "Schedule a Consultation",
                        "Attend the Consultation",
                        "Follow-up and Continued Care",
                      ].map((step, idx) => (
                        <li key={idx} className="relative flex gap-4 pb-6 last:pb-0">
                          {idx < 4 && (
                            <span className="absolute left-[15px] top-10 h-[calc(100%-16px)] w-px bg-white/10" />
                          )}
                          <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#cc63ff]/20 text-xs font-bold text-[#cc63ff]">
                            {idx + 1}
                          </span>
                          <p className="pt-1 text-sm text-[#8888aa]">{step}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </article>
          </motion.div>
        </CaseStudySection>

        {/* SECTION 7 */}
        <CaseStudySection id="hifi">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <div className="mb-16 md:mb-24">
              <SectionEyebrow>Section 7</SectionEyebrow>
              <SectionTitle>High-Fidelity Design — Principles in Practice</SectionTitle>
              <SectionIntro>
                Each screen below was designed with the Gestalt principles, UX laws, and grid system established in Section 4. The design rationale is documented alongside each screen.
              </SectionIntro>
            </div>

            {/* Flow A */}
            <div className="mb-24">
              <div className="mb-12 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#0066ff]/20 px-4 py-1.5 text-sm font-bold text-[#0066ff]">Flow A</span>
                <h3 className="text-2xl font-bold text-white">Motivational Reminders and Rewards</h3>
              </div>

              <div className="space-y-16">
                {[
                  {
                    screen: "Screen 01 — Set Fitness Goals",
                    desc: "The screen allows users to set and save their fitness goals, such as daily steps, calories burned, and activity hours. This organized layout helps users track their progress and stay motivated, leading to better health outcomes through consistent monitoring and goal-setting.",
                    rationale: "Fitts's Law applied to input field sizing ensures effortless entry for older users. Hick's Law guided the decision to present only three goal categories rather than an exhaustive list — reducing decision fatigue at the point of commitment.",
                  },
                  {
                    screen: "Screen 02 — Motivational Reminders",
                    desc: "The screen allows users to customize motivational reminders to suit their personal needs and preferences. This personalization can help users stay motivated and productive by receiving tailored reminders. The Save Settings button ensures that these preferences are saved, providing consistent reinforcement of motivational content.",
                    rationale: "Progressive disclosure keeps this screen uncluttered — only the most essential customization options are visible at first, with advanced settings accessible on demand. This respects the user's cognitive load.",
                  },
                  {
                    screen: "Screen 03 — Customize Reminders",
                    desc: "The screen allows users to customize and save daily reminders for topics like quotes and health tips at their preferred times. This helps users stay organized and motivated by receiving timely, personalized reminders without needing to set them manually each time.",
                    rationale: "Proximity grouping clusters related reminder types together, so users understand at a glance which settings belong to the same function.",
                  },
                  {
                    screen: "Screen 04 — Achievement",
                    desc: "The pop-up content on the screen provides immediate positive reinforcement by congratulating users on reaching their daily steps goal. This can motivate users to stay engaged with the app and maintain healthy habits. The Close and View Progress buttons offer simple options for users to either return to the main dashboard or review their activity data.",
                    rationale: "Closure principle applied — the achievement pop-up feels complete and celebratory, triggering a positive emotional response. Two clear CTA options avoid decision paralysis at a high-engagement moment.",
                  },
                  {
                    screen: "Screen 05 — Progress Tracker",
                    desc: "This screen provides users with a clear and organized overview of their fitness progress. It includes motivational achievement badges, a graph to visualize daily activity levels, and icons for different exercises with corresponding times. Additionally, it offers options to share progress and update goals, helping users stay accountable and adjust their fitness objectives as needed.",
                    rationale: "The Golden Ratio proportioning is most visible here — the graph, badge row, and activity list are sized and spaced to create a natural visual hierarchy that the eye follows without effort. Similarity principle applied through consistent badge shapes and exercise icon style.",
                  },
                ].map((screen, idx) => (
                  <div
                    key={idx}
                    className={`grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12 ${
                      idx % 2 === 1 ? "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1" : ""
                    }`}
                  >
                    <div className="space-y-5 lg:col-span-7">
                      <h4 className="text-xl font-bold text-white">{screen.screen}</h4>
                      <p className="text-sm leading-relaxed text-[#8888aa]">{screen.desc}</p>
                      <GlassCard className="!p-6">
                        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#0066ff]">Design Rationale</p>
                        <p className="text-sm leading-relaxed text-[#8888aa]">{screen.rationale}</p>
                      </GlassCard>
                    </div>
                    <div className="lg:col-span-5">
                      <ImagePlaceholder label={`${screen.screen} Mockup`} size="large" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Flow B */}
            <div>
              <div className="mb-12 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#cc63ff]/20 px-4 py-1.5 text-sm font-bold text-[#cc63ff]">Flow B</span>
                <h3 className="text-2xl font-bold text-white">Mental & Cardiovascular Healthcare</h3>
              </div>

              <div className="space-y-16">
                {[
                  {
                    screen: "Screen 01 — Mental Health Services",
                    desc: "The screen provides users with tools to manage their mental health effectively. The Current Goals feature tracks progress in physical activities like jogging and swimming, promoting a sense of accomplishment. The dashboard offers a clear overview of daily achievements and encourages users to prioritize their mental health.",
                    rationale: "Continuity principle applied — the layout flows from summary to detail, guiding the user from awareness of their current state into action.",
                  },
                  {
                    screen: "Screen 02 — Professional Selection",
                    desc: "The screen provides a convenient way for users to find and schedule appointments with professionals. It displays names, profile pictures, ratings, and available times, allowing users to make informed decisions quickly and efficiently.",
                    rationale: "Proximity and Similarity used together — professional cards are uniformly structured so users can scan and compare without re-learning the layout on each card. This reduces cognitive load in a high-stakes decision moment.",
                  },
                  {
                    screen: "Screen 03 — Filters",
                    desc: "The screen offers a streamlined way to find and schedule appointments with healthcare specialists. Users can easily navigate through various medical specialties, select convenient appointment times, and filter practitioners based on ratings, ensuring they receive quality care efficiently.",
                    rationale: "Hick's Law directly applied — filter options are grouped by specialty category rather than presented as a flat list, cutting perceived complexity and accelerating the path to a decision.",
                  },
                  {
                    screen: "Screen 04 — Appointment Booking",
                    desc: "The screen provides a clear and user-friendly interface for booking appointments with a healthcare professional. Users can easily view available dates and times, select their preferred slots, and access additional information about the doctor and patient reviews — making scheduling convenient and efficient.",
                    rationale: "4-point grid ensures the calendar and slot selection elements are proportionally spaced for comfortable touch interaction. Fitts's Law applied to slot tap targets — large enough for confident selection without accidental booking.",
                  },
                  {
                    screen: "Screen 05 — Virtual Consultation",
                    desc: "The screen provides users with a convenient platform for real-time consultations with healthcare professionals. It allows for immediate communication through video calls, which can be more reassuring and informative than text or voice calls alone. The text conversation feature supports ongoing care management by tracking patient progress and concerns.",
                    rationale: "Law of Prägnanz kept the consultation interface minimal — only the video feed, a mute toggle, and the chat panel are visible during the call. No unnecessary controls to distract during a sensitive healthcare interaction.",
                  },
                  {
                    screen: "Screen 06 — Consultation Summary",
                    desc: "The screen provides users with easy access to essential health resources and information. It allows users to conveniently schedule follow-up appointments and centralizes educational materials related to health, empowering users to take proactive steps in their healthcare journey.",
                    rationale: "Closure principle applied post-consultation — the summary screen signals a complete interaction and presents the logical next step (follow-up booking) without forcing it. The user feels resolved, not abandoned.",
                  },
                ].map((screen, idx) => (
                  <div
                    key={idx}
                    className={`grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12 ${
                      idx % 2 === 1 ? "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1" : ""
                    }`}
                  >
                    <div className="space-y-5 lg:col-span-7">
                      <h4 className="text-xl font-bold text-white">{screen.screen}</h4>
                      <p className="text-sm leading-relaxed text-[#8888aa]">{screen.desc}</p>
                      <GlassCard className="!p-6">
                        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#cc63ff]">Design Rationale</p>
                        <p className="text-sm leading-relaxed text-[#8888aa]">{screen.rationale}</p>
                      </GlassCard>
                    </div>
                    <div className="lg:col-span-5">
                      <ImagePlaceholder label={`${screen.screen} Mockup`} size="large" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </CaseStudySection>

        {/* SECTION 8 */}
        <CaseStudySection id="testing">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase }}
          >
            <div className="mb-14 md:mb-20">
              <SectionEyebrow>Section 8</SectionEyebrow>
              <SectionTitle>Moderated Usability Testing — What Users Said and What Changed</SectionTitle>
              <SectionIntro>
                <strong className="text-white">Personas Tested:</strong> Urban Health Enthusiast · Urban Health-Conscious Professional
              </SectionIntro>
            </div>

            <h3 className="mb-8 text-2xl font-bold text-white">What Users Appreciated</h3>
            <div className="mb-20 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
              {[
                {
                  label: "⭐ Progress Tracker (Flow A — Screen 05)",
                  quote:
                    "The screen has a sleek, modern look that's easy on the eyes. Finding my achievements, points, and badges is effortless, thanks to the intuitive layout. The trophies, badges, and points add a fun, rewarding touch, making progress feel exciting. Plus, every activity is clearly listed with its time and date, so I always know exactly where I stand.",
                },
                {
                  label: "⭐ Mental Health Dashboard (Flow B — Screen 01)",
                  quote:
                    "The screen is simple and easy to navigate, making it accessible even for those who aren't tech-savvy. The features align well with my health and fitness goals, and it's great to have all this essential information in one place. Plus, being able to share progress and update goals directly from this screen keeps me more engaged and motivated to stay on track.",
                },
              ].map((item, idx) => (
                <blockquote
                  key={idx}
                  className="relative rounded-[28px] border p-8 md:p-10"
                  style={{
                    borderColor: `${PROJECT_ACCENT}33`,
                    background: `${PROJECT_ACCENT}0a`,
                  }}
                >
                  <p className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest" style={{ color: PROJECT_ACCENT }}>
                    {item.label}
                  </p>
                  <p className="text-lg italic leading-relaxed text-[#8888aa]">&ldquo;{item.quote}&rdquo;</p>
                </blockquote>
              ))}
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">What Users Flagged for Improvement</h3>
              <p className="mb-12 text-[#8888aa]">
                These three friction points were identified during testing and fed back into the design iteration cycle:
              </p>

              <div className="space-y-6">
                {[
                  {
                    issue: "Graph Legibility on the Progress Tracker",
                    problem: "The graph showing points earned lacked a legend or contextual labels — users couldn't interpret it at a glance.",
                    response: "A legend and axis labels were added to the progress graph to resolve ambiguity without adding visual clutter.",
                    num: "01",
                  },
                  {
                    issue: "Goal Customization Depth",
                    problem: "Users wanted the ability to customize the types of goals and activities displayed based on their personal routines — the default set felt too generic.",
                    response: "A Customize Goals option was surfaced on the Progress Tracker screen, allowing users to add, remove, and reorder activity types.",
                    num: "02",
                  },
                  {
                    issue: "In-App Goal Notifications",
                    problem: "Adding notifications or reminders for reaching goals and earning points was flagged as a missing engagement layer.",
                    response: "Achievement notifications were added as a configurable option within the Motivational Reminders settings — linked to the existing customization flow.",
                    num: "03",
                  },
                ].map((item, idx) => (
                  <GlassCard key={idx}>
                    <div className="flex flex-col gap-6 md:flex-row md:gap-10">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold text-[#cc63ff]"
                        style={{ background: "#cc63ff22" }}
                      >
                        {item.num}
                      </div>
                      <div className="min-w-0 flex-1 space-y-5">
                        <h4 className="text-lg font-bold text-white">{item.issue}</h4>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
                          <div>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#8888aa]">
                              Problem Identified
                            </p>
                            <p className="text-sm leading-relaxed text-[#8888aa]">{item.problem}</p>
                          </div>
                          <div className="md:border-l md:border-white/[0.08] md:pl-10">
                            <p
                              className="mb-2 text-xs font-semibold uppercase tracking-widest"
                              style={{ color: PROJECT_ACCENT }}
                            >
                              Design Response
                            </p>
                            <p className="text-sm leading-relaxed text-[#8888aa]">{item.response}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </motion.div>
        </CaseStudySection>

        <CTAFooter />
      </div>
    </main>
  );
}
