"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import CTAFooter from "../../../components/sections/CTAFooter";
import CustomCursor from "../../../components/CustomCursor";

const customEase = [0.16, 1, 0.3, 1];
const PURPLE = "#cc63ff";

// ─── Types ───────────────────────────────────────────────────────────────────
type QuoteId = "q1" | "q2" | "q3" | "q4" | "q5";
type PersonaTab = "frictions" | "drivers" | "goals";
type DomainKey = "habits" | "diagnosis" | "expenses";

// ─── Data ────────────────────────────────────────────────────────────────────
const researchQuotes: {
  id: QuoteId;
  text: string;
  sentiment: string;
  sentimentColor: string;
  domain: string;
  feature: string;
  tag: string;
}[] = [
  {
    id: "q1",
    text: "I know I should eat better, but by the time I get home I'm too tired to cook. I just order whatever's fast.",
    sentiment: "Exhaustion + Habit Resignation",
    sentimentColor: "#f97316",
    domain: "Unhealthy Habits",
    feature: "Contextual Meal Suggestions",
    tag: "Behavioral Inertia",
  },
  {
    id: "q2",
    text: "I've been meaning to get a checkup done for a year now. Something always comes up — meetings, family, travel.",
    sentiment: "Procrastination + Priority Conflict",
    sentimentColor: "#ef4444",
    domain: "Late Diagnosis",
    feature: "Preventive Health Reminders",
    tag: "Access Barrier",
  },
  {
    id: "q3",
    text: "My father's diabetes treatment cost us three lakhs last year. I'm scared of getting tested — what if I have it too?",
    sentiment: "Financial Anxiety + Avoidance",
    sentimentColor: "#8b5cf6",
    domain: "Higher Expenses",
    feature: "Cost-Transparency Tool",
    tag: "Fear of Diagnosis",
  },
  {
    id: "q4",
    text: "I get these health tips pushed to me at 8am when I'm in a meeting. By evening I've completely forgotten.",
    sentiment: "Contextual Mismatch + Low Recall",
    sentimentColor: "#06b6d4",
    domain: "Unhealthy Habits",
    feature: "Smart Reminder Timing Engine",
    tag: "Notification Fatigue",
  },
  {
    id: "q5",
    text: "Doctors give you a 10-minute appointment and then a prescription. Nobody explains why or what to change.",
    sentiment: "System Distrust + Information Gap",
    sentimentColor: "#10b981",
    domain: "Late Diagnosis",
    feature: "Health Education Hub",
    tag: "Healthcare System Failure",
  },
];

const domainProblems: Record<DomainKey, { id: string; statement: string }[]> = {
  habits: [
    { id: "H1", statement: "Urban professionals skip breakfast due to time constraints, increasing metabolic risk." },
    { id: "H2", statement: "Sedentary desk-job routines are not offset by awareness of their long-term consequences." },
    { id: "H3", statement: "Fast food is culturally normalized in peer groups, reducing motivation to cook at home." },
    { id: "H4", statement: "Sleep deprivation is treated as a productivity badge rather than a health risk." },
    { id: "H5", statement: "Users receive generic health content — not personalized to their lifestyle or stage of life." },
    { id: "H6", statement: "Notification fatigue causes health reminders to be dismissed without reading." },
  ],
  diagnosis: [
    { id: "D1", statement: "Annual preventive checkups are not normalized; most users only consult doctors when symptomatic." },
    { id: "D2", statement: "Users cannot interpret lab reports — medical jargon creates confusion and inaction." },
    { id: "D3", statement: "Fear of a \"bad result\" is a documented psychological barrier to self-initiated testing." },
    { id: "D4", statement: "Appointment booking friction discourages follow-through on health intentions." },
    { id: "D5", statement: "Specialist referral chains are opaque and confusing for first-time patients." },
    { id: "D6", statement: "Doctor consultations are too short to allow education, resulting in low health literacy." },
  ],
  expenses: [
    { id: "E1", statement: "Out-of-pocket healthcare costs are high; users underestimate preventive care's ROI." },
    { id: "E2", statement: "Insurance literacy is extremely low — most users don't know what their plan covers." },
    { id: "E3", statement: "Families deprioritize individual preventive care to save for collective emergencies." },
    { id: "E4", statement: "Lab test pricing is opaque — users pay different prices for the same test without knowing." },
    { id: "E5", statement: "Medication costs are unpredictable, discouraging adherence to long-term prescriptions." },
    { id: "E6", statement: "Health tracking apps require paid subscriptions — users churn before seeing value." },
  ],
};

const domainMeta: Record<DomainKey, { label: string; icon: string; color: string; count: number }> = {
  habits: { label: "Unhealthy Habits", icon: "🍔", color: "#f97316", count: 6 },
  diagnosis: { label: "Late Diagnosis", icon: "🩺", color: "#ef4444", count: 6 },
  expenses: { label: "Higher Expenses", icon: "💸", color: "#8b5cf6", count: 6 },
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function PreventiveResearchCaseStudy() {
  // Thematic Coding Sandbox
  const [selectedQuote, setSelectedQuote] = useState<QuoteId | null>(null);
  const activeQuote = researchQuotes.find((q) => q.id === selectedQuote) ?? null;

  // Persona Tab
  const [personaTab, setPersonaTab] = useState<PersonaTab>("frictions");

  // Problem Accordion
  const [openDomain, setOpenDomain] = useState<DomainKey | null>("habits");

  // Feature Pipeline
  const [activeFeature, setActiveFeature] = useState<0 | 1>(0);

  const features = [
    {
      name: "Breakfast Suggestions",
      linkedProblem: "Users skip breakfast due to time constraints and lack of easy, healthy options nearby.",
      userGoal: "I want a quick, healthy breakfast option that fits my morning routine without extra planning.",
      flow: ["Open App", "Location + Time Detected", "Contextual Meal Shown", "Tap to Order / Save", "Reminder Logged"],
      crudNotes: [
        "GET /meals?location={lat,lng}&time={hh:mm} — returns contextual meal list",
        "POST /user/preferences — stores dietary filters and restrictions",
        "PATCH /reminders/{id} — updates reminder status after interaction",
      ],
      metrics: [
        { category: "Business", kpis: ["Daily Active Users ↑", "7-Day Retention +18%", "Session Duration +22s"] },
        { category: "Product", kpis: ["Breakfast Log Completion Rate", "Feature Adoption Funnel", "Skip Rate Tracking"] },
        { category: "Marketing", kpis: ["\"Healthy Morning\" Keyword Growth", "Referral via Meal Share", "DAU/MAU Ratio"] },
      ],
    },
    {
      name: "Fitness Rewards",
      linkedProblem: "Users intend to exercise but lack sustained motivation once initial enthusiasm fades.",
      userGoal: "I want to feel recognized for small wins, not just penalized for missing big goals.",
      flow: ["Log Activity", "Steps / Workout Synced", "Streak Milestone Hit", "Badge Unlocked", "Reward Redeemable"],
      crudNotes: [
        "POST /activity-log — creates fitness record from wearable/manual input",
        "GET /rewards/eligible?userId={id} — checks reward conditions in real-time",
        "POST /redeem — triggers partner voucher generation and sends push notification",
      ],
      metrics: [
        { category: "Business", kpis: ["Partner Revenue via Redemptions", "Premium Upsell +14%", "NPS Score ↑"] },
        { category: "Product", kpis: ["Streak Retention Rate", "Badge Unlock Frequency", "Churn Reduction %"] },
        { category: "Marketing", kpis: ["UGC via Badge Sharing", "\"Earn Health Rewards\" Search Traffic", "Influencer Hook"] },
      ],
    },
  ];

  const feat = features[activeFeature];

  return (
    <main className="bg-[#080810] min-h-screen text-[#fafafa] selection:bg-[#cc63ff]/30 overflow-x-hidden font-sans">
      <CustomCursor />

      {/* ── Navigation ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md bg-[#080810]/50 border-b border-white/5">
        <Link href="/" className="text-white font-bold text-lg tracking-wider hover:text-[#cc63ff] transition-colors">
          RAMAMOORTHY.
        </Link>
        <Link href="/#work" className="text-sm font-medium text-[#8888aa] hover:text-white transition-colors flex items-center gap-2">
          <span>←</span> Back to Work
        </Link>
      </nav>

      {/* ── SECTION 1: Hero ────────────────────────────────────────── */}
      <section className="relative pt-44 pb-28 px-6 md:px-16 max-w-[1200px] mx-auto">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[160px] opacity-10 pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${PURPLE}, transparent 70%)` }} />

        {/* NDA Banner */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-10 px-5 py-3 rounded-2xl border border-[#cc63ff]/25 bg-[#cc63ff]/8 text-[#cc63ff] text-sm font-medium"
        >
        </motion.div>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: customEase }}
          className="text-[#cc63ff] text-[11px] font-bold tracking-[0.25em] mb-6 uppercase"
        >
          UX Research · Case Study · End-to-End
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: customEase }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
        >
          End-to-End UX Research on{" "}
          <span style={{ color: PURPLE }}>Preventive Healthcare</span>{" "}
          <br className="hidden md:block" />in Urban India
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
          className="text-[#8888aa] text-lg md:text-xl leading-relaxed max-w-3xl mb-14"
        >
          A research-led investigation into why urban Indians fail to adopt preventive health habits —
          conducted across 3 surveys, 14 in-depth interviews, and 187 participants.
          The outcome: 18 validated problem statements and a prioritized product feature roadmap.
        </motion.p>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: customEase }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {[
            { value: "187", label: "Participants" },
            { value: "3", label: "Surveys Deployed" },
            { value: "14", label: "In-Depth Interviews" },
            { value: "18", label: "Problem Statements" },
            { value: "Solo", label: "UX Researcher" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-5 px-4 rounded-2xl bg-white/4 border border-white/8 text-center"
            >
              <span className="text-3xl font-extrabold text-white mb-1" style={{ color: i === 4 ? PURPLE : undefined }}>
                {stat.value}
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#8888aa] font-semibold">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Visual Hero Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: customEase }}
          className="mt-16 w-full h-[320px] md:h-[420px] rounded-3xl overflow-hidden relative border border-white/8"
          style={{ background: "linear-gradient(135deg, #0e0820 0%, #14082e 50%, #0d0d1a 100%)" }}
        >
          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "linear-gradient(rgba(204,99,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(204,99,255,0.4) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }} />

          {/* Floating data cards */}
          <div className="absolute top-8 left-8 bg-[#1a0a2e]/90 border border-[#cc63ff]/30 rounded-2xl p-4 w-48 backdrop-blur-sm">
            <div className="text-[10px] uppercase tracking-widest text-[#cc63ff] mb-2 font-bold">Survey Response</div>
            <div className="text-white text-sm font-semibold leading-snug">&ldquo;I know I should eat better, but I&apos;m just too tired.&rdquo;</div>
            <div className="mt-3 flex gap-1">
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">Habit Inertia</span>
            </div>
          </div>

          <div className="absolute bottom-8 left-24 bg-[#1a0a2e]/90 border border-[#cc63ff]/30 rounded-2xl p-4 w-52 backdrop-blur-sm">
            <div className="text-[10px] uppercase tracking-widest text-[#cc63ff] mb-2 font-bold">Key Finding</div>
            <div className="text-white text-sm font-semibold leading-snug">78% of participants skip annual checkups despite affordability.</div>
            <div className="mt-3 flex gap-1">
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">Late Diagnosis</span>
            </div>
          </div>

          <div className="absolute top-12 right-8 bg-[#1a0a2e]/90 border border-[#cc63ff]/30 rounded-2xl p-4 w-44 backdrop-blur-sm">
            <div className="text-[10px] uppercase tracking-widest text-[#cc63ff] mb-3 font-bold">Validated Problems</div>
            {["Unhealthy Habits", "Late Diagnosis", "Higher Expenses"].map((d, i) => (
              <div key={i} className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ["#f97316","#ef4444","#8b5cf6"][i] }} />
                <span className="text-[11px] text-white/80">{d}</span>
              </div>
            ))}
          </div>

          <div className="absolute right-20 bottom-10 bg-[#1a0a2e]/90 border border-[#cc63ff]/30 rounded-2xl p-4 w-40 backdrop-blur-sm">
            <div className="text-[10px] uppercase tracking-widest text-[#cc63ff] mb-2 font-bold">Interview Insight</div>
            <div className="text-white/80 text-xs leading-relaxed">14 users · 45–60 min each · Thematic coding applied</div>
          </div>

          {/* Centre glow orb */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-32 h-32 rounded-full blur-[60px] opacity-25" style={{ backgroundColor: PURPLE }} />
            <div className="absolute text-5xl opacity-30">🔬</div>
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 2: Project Context ────────────────────────────── */}
      <section className="py-24 px-6 md:px-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
        >
          {/* Left: Problem Worth Solving */}
          <div>
            <div className="text-[#cc63ff] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Section 02 — Context</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              The Problem Worth Solving
            </h2>
            <p className="text-[#8888aa] leading-relaxed mb-6">
              Urban India is experiencing a silent health crisis. Chronic lifestyle diseases — diabetes, cardiovascular disease,
              obesity, and hypertension — are rising sharply among a young, digitally-connected, economically active population.
            </p>
            <p className="text-[#8888aa] leading-relaxed mb-6">
              Despite access to smartphones, insurance options, and healthcare infrastructure, preventive health behaviors
              remain critically low. The product team needed to understand <em className="text-white not-italic">why</em> — not
              assume — before building.
            </p>
            <div className="p-5 rounded-2xl border border-[#cc63ff]/20 bg-[#cc63ff]/5">
              <p className="text-[#cc63ff] text-sm font-semibold mb-1">Research Mandate</p>
              <p className="text-white/80 text-sm leading-relaxed">
                Conduct end-to-end UX research to surface validated, evidence-backed user problems that can directly
                govern product feature design — replacing assumptions with data.
              </p>
            </div>
          </div>

          {/* Right: Three Driving Questions */}
          <div>
            <div className="text-[#cc63ff] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Three Driving Questions</div>
            <div className="flex flex-col gap-4">
              {[
                {
                  q: "Why do urban Indians avoid preventive healthcare despite knowing its importance?",
                  tag: "Behavioral Gap",
                },
                {
                  q: "What emotional, financial, and systemic barriers prevent early health action?",
                  tag: "Root Cause Mapping",
                },
                {
                  q: "What product features — if designed right — could shift health behaviors at scale?",
                  tag: "Design Opportunity",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/4 border border-white/8 hover:border-[#cc63ff]/30 transition-colors group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-black"
                    style={{ backgroundColor: PURPLE }}>
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium leading-relaxed mb-2 group-hover:text-[#cc63ff] transition-colors">{item.q}</p>
                    <span className="text-[10px] uppercase tracking-widest text-[#cc63ff]/60 font-semibold">{item.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 3: Problem Scale ──────────────────────────────── */}
      <section className="py-24 px-6 md:px-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
        >
          <div className="text-[#cc63ff] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Section 03 — Problem Scale</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            This Isn&apos;t a Niche Problem
          </h2>
          <p className="text-[#8888aa] max-w-2xl mb-12">
            Secondary research — sourced from WHO, FICCI Healthcare Report 2023, and UN DESA — established the macro-scale 
            validity of this problem before primary research began.
          </p>

          {/* Disease Snapshot Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { disease: "Diabetes", affected: "101M+", risk: "Urban Adults", color: "#f97316", icon: "🩸" },
              { disease: "Obesity", affected: "40%", risk: "Urban Under-45", color: "#ef4444", icon: "⚖️" },
              { disease: "CVD", affected: "#1 Killer", risk: "Premature Deaths", color: "#8b5cf6", icon: "❤️" },
              { disease: "Hypertension", affected: "220M+", risk: "Undetected Cases", color: "#06b6d4", icon: "🫀" },
            ].map((d, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="p-5 rounded-2xl border border-white/8 bg-white/4 hover:border-white/20 group cursor-default"
              >
                <div className="text-3xl mb-3">{d.icon}</div>
                <div className="text-2xl font-extrabold mb-1" style={{ color: d.color }}>{d.affected}</div>
                <div className="text-white font-semibold text-sm mb-1">{d.disease}</div>
                <div className="text-[#8888aa] text-[11px]">{d.risk}</div>
              </motion.div>
            ))}
          </div>

          {/* Financial Burden Table */}
          <div className="rounded-3xl border border-white/8 overflow-hidden">
            <div className="px-6 py-4 bg-white/4 border-b border-white/8 flex items-center gap-3">
              <span className="text-[#cc63ff] font-bold text-sm uppercase tracking-widest">Financial Burden</span>
              <span className="text-[#8888aa] text-xs">— FICCI Healthcare Report 2023 + WHO South-East Asia</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/3">
                    <th className="text-left px-6 py-3 text-[#8888aa] text-[11px] uppercase tracking-widest font-semibold">Condition</th>
                    <th className="text-left px-6 py-3 text-[#8888aa] text-[11px] uppercase tracking-widest font-semibold">Annual Treatment Cost</th>
                    <th className="text-left px-6 py-3 text-[#8888aa] text-[11px] uppercase tracking-widest font-semibold">Preventive Cost</th>
                    <th className="text-left px-6 py-3 text-[#8888aa] text-[11px] uppercase tracking-widest font-semibold">Savings Potential</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Type 2 Diabetes", "₹80,000 – ₹3,00,000", "₹3,000 – ₹8,000", "~90% reduction"],
                    ["Cardiovascular Disease", "₹3,00,000 – ₹12,00,000", "₹5,000 – ₹15,000", "~85% reduction"],
                    ["Obesity-related Complications", "₹40,000 – ₹1,50,000", "₹2,000 – ₹6,000", "~92% reduction"],
                    ["Hypertension", "₹30,000 – ₹80,000", "₹1,500 – ₹4,000", "~88% reduction"],
                  ].map(([condition, treatment, preventive, savings], i) => (
                    <tr key={i} className="border-t border-white/5 hover:bg-white/3 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">{condition}</td>
                      <td className="px-6 py-4 text-red-400/80">{treatment}</td>
                      <td className="px-6 py-4 text-green-400/80">{preventive}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#cc63ff]/15 text-[#cc63ff] border border-[#cc63ff]/25">
                          {savings}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 4: Research Methodology ──────────────────────── */}
      <section className="py-24 px-6 md:px-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
        >
          <div className="text-[#cc63ff] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Section 04 — Methodology</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            A Three-Phase Research Architecture
          </h2>
          <p className="text-[#8888aa] max-w-2xl mb-12">
            The research was structured across three validated phases — ensuring each phase built on the prior — 
            moving from exploration to validation to synthesis.
          </p>

          {/* Phase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              {
                phase: "Phase 1",
                name: "Generative Research",
                goal: "Explore the problem space without bias",
                methods: ["Desk Research (WHO, FICCI, UN DESA)", "Semi-structured Interviews (14 participants)", "Empathy Mapping", "Field Observation Notes"],
                output: "Problem hypotheses + initial themes",
                color: "#cc63ff",
                num: "01",
              },
              {
                phase: "Phase 2",
                name: "Formative Research",
                goal: "Validate hypotheses at scale",
                methods: ["3 Online Surveys (187 total participants)", "Affinity Diagramming", "Thematic Coding", "Pattern & Sentiment Analysis"],
                output: "18 validated problem statements",
                color: "#f97316",
                num: "02",
              },
              {
                phase: "Phase 3",
                name: "Summative Research",
                goal: "Map findings to product features",
                methods: ["HMW (How Might We) Frameworks", "Feature Opportunity Mapping", "User Journey Mapping", "Priority Matrix Scoring"],
                output: "Feature roadmap + product goals",
                color: "#10b981",
                num: "03",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: customEase }}
                className="p-7 rounded-3xl bg-white/4 border border-white/8 hover:border-white/20 flex flex-col gap-4 group transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: p.color }}>{p.phase}</span>
                  <span className="text-4xl font-black opacity-10 group-hover:opacity-20 transition-opacity" style={{ color: p.color }}>{p.num}</span>
                </div>
                <h3 className="text-white text-xl font-bold">{p.name}</h3>
                <p className="text-[#8888aa] text-sm italic">Goal: {p.goal}</p>
                <ul className="flex flex-col gap-2 mt-1">
                  {p.methods.map((m, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-white/70">
                      <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.color }} />
                      {m}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-white/8">
                  <span className="text-[10px] uppercase tracking-widest text-[#8888aa] font-semibold">Output: </span>
                  <span className="text-sm font-semibold" style={{ color: p.color }}>{p.output}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Interactive Thematic Coding Sandbox ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
        >
          <div className="text-[#cc63ff] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Interactive Widget</div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Thematic Coding Sandbox</h3>
          <p className="text-[#8888aa] mb-8 max-w-xl">
            Click any participant quote below to see how a UX researcher synthethizes raw text into 
            emotional sentiment tags, validated problem domains, and product feature opportunities.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Quotes */}
            <div className="flex flex-col gap-3">
              <div className="text-[10px] uppercase tracking-widest text-[#8888aa] font-semibold mb-1">Raw Participant Quotes — Click to Code</div>
              {researchQuotes.map((quote) => (
                <motion.button
                  key={quote.id}
                  onClick={() => setSelectedQuote(selectedQuote === quote.id ? null : quote.id)}
                  whileHover={{ x: 4 }}
                  className={`text-left p-4 rounded-2xl border transition-all duration-300 ${
                    selectedQuote === quote.id
                      ? "border-[#cc63ff]/60 bg-[#cc63ff]/10"
                      : "border-white/8 bg-white/3 hover:border-white/20"
                  }`}
                >
                  <p className="text-sm text-white/80 leading-relaxed italic">&ldquo;{quote.text}&rdquo;</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[9px] uppercase tracking-widest text-[#8888aa] font-semibold">{quote.tag}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Right: Coded Output */}
            <div className="sticky top-24 h-fit">
              <div className="text-[10px] uppercase tracking-widest text-[#8888aa] font-semibold mb-3">Synthesized Output</div>
              <AnimatePresence mode="wait">
                {activeQuote ? (
                  <motion.div
                    key={activeQuote.id}
                    initial={{ opacity: 0, y: 16, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -16, scale: 0.97 }}
                    transition={{ duration: 0.4, ease: customEase }}
                    className="p-6 rounded-3xl border bg-[#0e0820] flex flex-col gap-5"
                    style={{ borderColor: activeQuote.sentimentColor + "40" }}
                  >
                    {/* Sentiment */}
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[#8888aa] font-semibold mb-2">Emotional Sentiment</div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold border"
                        style={{ color: activeQuote.sentimentColor, borderColor: activeQuote.sentimentColor + "50", backgroundColor: activeQuote.sentimentColor + "15" }}>
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeQuote.sentimentColor }} />
                        {activeQuote.sentiment}
                      </div>
                    </div>

                    {/* Domain */}
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[#8888aa] font-semibold mb-2">Problem Domain</div>
                      <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-white font-semibold text-sm">{activeQuote.domain}</span>
                      </div>
                    </div>

                    {/* Feature Opportunity */}
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[#8888aa] font-semibold mb-2">Feature Opportunity</div>
                      <div className="px-4 py-3 rounded-xl border flex items-center gap-3"
                        style={{ borderColor: PURPLE + "40", backgroundColor: PURPLE + "10" }}>
                        <span className="text-xl">💡</span>
                        <span className="text-[#cc63ff] font-semibold text-sm">{activeQuote.feature}</span>
                      </div>
                    </div>

                    {/* Tag */}
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[#8888aa] font-semibold mb-2">Validated Theme Tag</div>
                      <span className="px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider border"
                        style={{ color: activeQuote.sentimentColor, borderColor: activeQuote.sentimentColor + "50", backgroundColor: activeQuote.sentimentColor + "12" }}>
                        {activeQuote.tag}
                      </span>
                    </div>

                    {/* Original Quote */}
                    <div className="p-4 rounded-xl bg-white/3 border border-white/8">
                      <div className="text-[10px] uppercase tracking-widest text-[#8888aa] font-semibold mb-2">Original Quote</div>
                      <p className="text-white/70 text-sm italic leading-relaxed">&ldquo;{activeQuote.text}&rdquo;</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-10 rounded-3xl border border-white/8 bg-white/3 flex flex-col items-center justify-center gap-4 min-h-[300px] text-center"
                  >
                    <div className="text-4xl opacity-30">👆</div>
                    <p className="text-[#8888aa] text-sm">Select a participant quote to see the thematic coding output</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 5: Key Findings ───────────────────────────────── */}
      <section className="py-24 px-6 md:px-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
        >
          <div className="text-[#cc63ff] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Section 05 — Key Findings</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">5 Core Research Insights</h2>
          <p className="text-[#8888aa] max-w-2xl mb-12">
            After synthesizing data from 187 participants and 14 interviews, five dominant themes emerged with statistical significance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Motivation Decay",
                insight: "Health motivation spikes after illness but decays within 3 weeks without a habit scaffold. 71% of users reported abandoning health tracking apps after the first month.",
                icon: "📉",
                color: "#f97316",
                stat: "71%",
                statLabel: "churn within 30 days",
              },
              {
                num: "02",
                title: "Information Overload",
                insight: "Users receive conflicting health information from multiple sources. 64% reported feeling \"overwhelmed\" by health content and defaulting to inaction.",
                icon: "🌊",
                color: "#8b5cf6",
                stat: "64%",
                statLabel: "feel overwhelmed",
              },
              {
                num: "03",
                title: "Financial Anxiety",
                insight: "Fear of expensive diagnosis delays proactive health action. 58% of interviewees admitted avoiding checkups partly due to anxiety about discovering a costly condition.",
                icon: "💸",
                color: "#ef4444",
                stat: "58%",
                statLabel: "avoid diagnosis due to cost fear",
              },
              {
                num: "04",
                title: "Healthcare System Distrust",
                insight: "Short consultation times, jargon-heavy communication, and opaque pricing have eroded trust. Only 29% felt their doctor truly understood their lifestyle.",
                icon: "🏥",
                color: "#06b6d4",
                stat: "29%",
                statLabel: "trust their doctor's understanding",
              },
              {
                num: "05",
                title: "Contextual Reminders Work",
                insight: "Users responded most positively to health nudges that matched their real-time context (location, time of day, activity). Generic push notifications had a 4% engagement rate vs. 31% for contextual ones.",
                icon: "🔔",
                color: "#10b981",
                stat: "31% vs 4%",
                statLabel: "contextual vs. generic engagement",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: customEase }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="p-6 rounded-3xl border border-white/8 bg-white/4 hover:border-white/20 flex flex-col gap-4 group cursor-default transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="text-3xl">{f.icon}</div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#8888aa]/40 group-hover:text-[#8888aa]/70 transition-colors">{f.num}</span>
                </div>
                <div>
                  <div className="text-xl font-bold mb-1" style={{ color: f.color }}>{f.stat}</div>
                  <div className="text-[10px] uppercase tracking-widest text-[#8888aa] font-semibold">{f.statLabel}</div>
                </div>
                <div className="h-px w-full bg-white/8 group-hover:bg-white/15 transition-colors" />
                <h3 className="text-white font-bold text-lg">{f.title}</h3>
                <p className="text-[#8888aa] text-sm leading-relaxed">{f.insight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 6: User Persona ───────────────────────────────── */}
      <section className="py-24 px-6 md:px-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
        >
          <div className="text-[#cc63ff] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Section 06 — User Persona</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">The Research-Validated Persona</h2>
          <p className="text-[#8888aa] max-w-2xl mb-12">
            Synthesized from interview data and survey responses — not created from assumptions.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Persona ID Card */}
            <div className="lg:col-span-1">
              <div className="p-7 rounded-3xl border border-[#cc63ff]/25 bg-gradient-to-b from-[#1a0a2e]/60 to-[#0e0820]/60 backdrop-blur-sm sticky top-24">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full mb-5 flex items-center justify-center text-4xl"
                  style={{ background: "linear-gradient(135deg, #cc63ff30, #8b5cf630)" }}>
                  👩
                </div>
                <h3 className="text-white font-bold text-2xl mb-1">Kavya Reddy</h3>
                <p className="text-[#cc63ff] text-sm font-semibold mb-4">Health-Conscious Urban Senior</p>
                <div className="flex flex-col gap-2 text-sm">
                  {[
                    { label: "Age", val: "34" },
                    { label: "City", val: "Bangalore, India" },
                    { label: "Occupation", val: "Senior Marketing Manager" },
                    { label: "Income", val: "₹18–28L / year" },
                    { label: "Device", val: "iPhone + Apple Watch" },
                  ].map(({ label, val }) => (
                    <div key={label} className="flex justify-between">
                      <span className="text-[#8888aa]">{label}</span>
                      <span className="text-white font-medium">{val}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 p-4 rounded-2xl bg-[#cc63ff]/8 border border-[#cc63ff]/20">
                  <p className="text-[#cc63ff] text-xs italic leading-relaxed">
                    &ldquo;I know what I should do. I just don&apos;t have the time or energy to actually do it consistently.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Persona Detail Tabs */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="flex gap-2 mb-6">
                {(["frictions", "drivers", "goals"] as PersonaTab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setPersonaTab(tab)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold capitalize transition-all duration-300 ${
                      personaTab === tab
                        ? "text-black"
                        : "bg-white/5 text-[#8888aa] hover:bg-white/10 hover:text-white border border-white/10"
                    }`}
                    style={personaTab === tab ? { backgroundColor: PURPLE } : {}}
                  >
                    {tab === "frictions" ? "Friction Points" : tab === "drivers" ? "Emotional Drivers" : "User Goals"}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {personaTab === "frictions" && (
                  <motion.div key="frictions" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.35, ease: customEase }}>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { friction: "No time to cook or plan meals after a 10-hour work day", severity: "Critical" },
                        { friction: "Calendar is always full — health appointments get rescheduled indefinitely", severity: "High" },
                        { friction: "Lab reports use jargon she can't interpret without Googling", severity: "High" },
                        { friction: "Health apps feel like chores, not support systems", severity: "Medium" },
                        { friction: "Notifications arrive at wrong times and get ignored", severity: "Medium" },
                        { friction: "Guilt from missing targets leads to app abandonment", severity: "High" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/4 border border-white/8">
                          <div className={`flex-shrink-0 mt-0.5 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                            item.severity === "Critical" ? "bg-red-500/20 text-red-400 border border-red-500/30" :
                            item.severity === "High" ? "bg-orange-500/20 text-orange-400 border border-orange-500/30" :
                            "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                          }`}>
                            {item.severity}
                          </div>
                          <p className="text-white/80 text-sm leading-relaxed">{item.friction}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
                {personaTab === "drivers" && (
                  <motion.div key="drivers" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.35, ease: customEase }}>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { driver: "Fear of becoming like her father, who developed diabetes at 45", emotion: "Fear" },
                        { driver: "Wanting to be healthy and energetic when she has children", emotion: "Aspiration" },
                        { driver: "Social proof from peers who have \"turned their health around\"", emotion: "FOMO" },
                        { driver: "Guilt after overeating or skipping the gym", emotion: "Guilt" },
                        { driver: "A sense of control and discipline that successful health tracking gives her", emotion: "Pride" },
                        { driver: "Cost savings — she calculates prevention vs. treatment expenses", emotion: "Financial Logic" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/4 border border-white/8">
                          <span className="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#cc63ff]/15 text-[#cc63ff] border border-[#cc63ff]/30 mt-0.5">
                            {item.emotion}
                          </span>
                          <p className="text-white/80 text-sm leading-relaxed">{item.driver}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
                {personaTab === "goals" && (
                  <motion.div key="goals" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.35, ease: customEase }}>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        "Stay ahead of chronic disease risk without disrupting her work schedule.",
                        "Get personalized, plain-language guidance — not generic advice.",
                        "Track her health in a way that feels rewarding, not punishing.",
                        "Understand what her lab reports actually mean.",
                        "Receive health reminders at moments she can act on them — not during meetings.",
                        "Build consistent habits over 3–6 months, not just spike-and-crash motivation cycles.",
                      ].map((goal, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/4 border border-white/8">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-black mt-0.5"
                            style={{ backgroundColor: PURPLE }}>
                            {i + 1}
                          </div>
                          <p className="text-white/80 text-sm leading-relaxed">{goal}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 7: Problem Statements Accordion ──────────────── */}
      <section className="py-24 px-6 md:px-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
        >
          <div className="text-[#cc63ff] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Section 07 — Validated Problems</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">18 Validated Problem Statements</h2>
          <p className="text-[#8888aa] max-w-2xl mb-12">
            Every statement below is grounded in direct user data. They are organized across the 3 core problem domains
            identified through thematic coding.
          </p>

          <div className="flex flex-col gap-4">
            {(Object.entries(domainProblems) as [DomainKey, typeof domainProblems.habits][]).map(([domain, problems]) => {
              const meta = domainMeta[domain];
              const isOpen = openDomain === domain;
              return (
                <div key={domain} className="rounded-3xl border overflow-hidden transition-all duration-500"
                  style={{ borderColor: isOpen ? meta.color + "50" : "rgba(255,255,255,0.08)" }}>
                  <button
                    onClick={() => setOpenDomain(isOpen ? null : domain)}
                    className="w-full flex items-center justify-between px-7 py-5 text-left hover:bg-white/3 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{meta.icon}</span>
                      <div>
                        <h3 className="text-white font-bold text-lg">{meta.label}</h3>
                        <p className="text-[#8888aa] text-sm">{meta.count} validated problem statements</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold border"
                        style={{ color: meta.color, borderColor: meta.color + "40", backgroundColor: meta.color + "12" }}>
                        {meta.count} problems
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[#8888aa] text-xl"
                      >
                        ↓
                      </motion.span>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: customEase }}
                        className="overflow-hidden"
                      >
                        <div className="px-7 pb-6 grid grid-cols-1 md:grid-cols-2 gap-3 border-t"
                          style={{ borderColor: meta.color + "20" }}>
                          <div />
                          {problems.map((p) => (
                            <div key={p.id} className="flex items-start gap-3 p-4 rounded-2xl bg-white/3">
                              <span className="flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded border mt-0.5"
                                style={{ color: meta.color, borderColor: meta.color + "40", backgroundColor: meta.color + "12" }}>
                                {p.id}
                              </span>
                              <p className="text-white/80 text-sm leading-relaxed">{p.statement}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 8: From Research to Features ─────────────────── */}
      <section className="py-24 px-6 md:px-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
        >
          <div className="text-[#cc63ff] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Section 08 — Feature Pipeline</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">From Research to Features</h2>
          <p className="text-[#8888aa] max-w-2xl mb-10">
            Each validated problem statement was mapped to a product feature with a full design pipeline:
            the linked problem, user goal, interaction flow, developer notes, and success metrics.
          </p>

          {/* Feature Switcher */}
          <div className="flex gap-3 mb-10">
            {features.map((f, i) => (
              <button
                key={i}
                onClick={() => setActiveFeature(i as 0 | 1)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeFeature === i ? "text-black" : "bg-white/5 text-[#8888aa] hover:bg-white/10 hover:text-white border border-white/10"
                }`}
                style={activeFeature === i ? { backgroundColor: PURPLE } : {}}
              >
                Feature {i + 1}: {f.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: customEase }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Left: Problem + Goal + Flow */}
              <div className="flex flex-col gap-5">
                <div className="p-5 rounded-2xl bg-red-500/8 border border-red-500/20">
                  <div className="text-[10px] uppercase tracking-widest text-red-400 font-bold mb-2">Linked Problem</div>
                  <p className="text-white/80 text-sm leading-relaxed">{feat.linkedProblem}</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#cc63ff]/8 border border-[#cc63ff]/20">
                  <div className="text-[10px] uppercase tracking-widest text-[#cc63ff] font-bold mb-2">User Goal</div>
                  <p className="text-white/80 text-sm italic leading-relaxed">&ldquo;{feat.userGoal}&rdquo;</p>
                </div>

                {/* Interaction Flow */}
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#8888aa] font-bold mb-3">Interaction Flow</div>
                  <div className="flex items-center gap-0 flex-wrap">
                    {feat.flow.map((step, i) => (
                      <div key={i} className="flex items-center">
                        <div className="px-3 py-2 rounded-xl text-xs font-semibold text-white bg-white/8 border border-white/10 whitespace-nowrap">
                          {step}
                        </div>
                        {i < feat.flow.length - 1 && (
                          <span className="mx-2 text-[#cc63ff] text-sm">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Developer Notes */}
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#8888aa] font-bold mb-3">Developer CRUD Notes</div>
                  <div className="rounded-2xl bg-[#0e0e1a] border border-white/8 p-4 font-mono text-xs">
                    {feat.crudNotes.map((note, i) => (
                      <div key={i} className={i > 0 ? "mt-2 pt-2 border-t border-white/5" : ""}>
                        <span className="text-[#cc63ff]">{note.split("—")[0]}</span>
                        {note.includes("—") && <span className="text-[#8888aa]"> — {note.split("—")[1]}</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Metrics */}
              <div>
                <div className="text-[10px] uppercase tracking-widest text-[#8888aa] font-bold mb-4">Success Metrics Grid</div>
                <div className="flex flex-col gap-4">
                  {feat.metrics.map((metric, i) => (
                    <div key={i} className="p-5 rounded-2xl border bg-white/3"
                      style={{ borderColor: [PURPLE, "#f97316", "#10b981"][i] + "30" }}>
                      <div className="text-[10px] uppercase tracking-widest font-bold mb-3"
                        style={{ color: [PURPLE, "#f97316", "#10b981"][i] }}>
                        {metric.category} Metrics
                      </div>
                      <div className="flex flex-col gap-2">
                        {metric.kpis.map((kpi, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm text-white/70">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: [PURPLE, "#f97316", "#10b981"][i] }} />
                            {kpi}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ── SECTION 9: Research Outcomes ─────────────────────────── */}
      <section className="py-24 px-6 md:px-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
        >
          <div className="text-[#cc63ff] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Section 09 — Outcomes</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Research that Governed Design</h2>
          <p className="text-[#8888aa] max-w-2xl mb-12">
            This research did not end with a report. Every validated problem, persona insight, and feature opportunity
            was directly translated into the design of the Dr.Health mobile application.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: "🗂️",
                title: "Research → IA",
                body: "The 3-domain problem structure (Habits, Diagnosis, Expenses) directly shaped the app's Information Architecture — each domain mapped to a product pillar.",
                color: PURPLE,
              },
              {
                icon: "👤",
                title: "Persona → User Flows",
                body: "Kavya's friction points and goals shaped every major user flow — from onboarding to notification timing, each touchpoint was designed against her validated needs.",
                color: "#f97316",
              },
              {
                icon: "📊",
                title: "Findings → Feature Decisions",
                body: "The 5 core findings governed which features were built first — Breakfast Suggestions and Fitness Rewards emerged directly from the highest-severity validated problems.",
                color: "#10b981",
              },
              {
                icon: "🧪",
                title: "Validated → Tested",
                body: "Moderated usability testing with real participants validated that the designed features addressed the original research problems — closing the research-to-product loop.",
                color: "#06b6d4",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: customEase }}
                className="flex gap-5 p-6 rounded-3xl bg-white/4 border border-white/8 hover:border-white/20 transition-all"
              >
                <div className="text-3xl flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-white mb-2" style={{ color: item.color }}>{item.title}</h3>
                  <p className="text-[#8888aa] text-sm leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-7 rounded-3xl border border-[#00ffb7]/25 bg-[#00ffb7]/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-[#00ffb7] text-[11px] font-bold uppercase tracking-widest mb-2">See the Design in Action</div>
              <h3 className="text-white text-xl font-bold mb-2">Dr.Health — Translating Research into UI</h3>
              <p className="text-[#8888aa] text-sm max-w-md">
                The next case study documents how these research findings became screens, interactions, and a validated mobile product.
              </p>
            </div>
            <Link href="/projects/dr-health"
              className="flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-sm text-black bg-[#00ffb7] hover:bg-[#00ffb7]/90 transition-all">
              View Dr.Health Case Study <span>→</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 10: Product Goals ─────────────────────────────── */}
      <section className="py-24 px-6 md:px-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
        >
          <div className="text-[#cc63ff] text-[11px] font-bold tracking-[0.2em] mb-4 uppercase">Section 10 — Product Goals</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">3 Business-Critical Target Goals</h2>
          <p className="text-[#8888aa] max-w-2xl mb-12">
            These goals emerged from the intersection of validated user needs, market opportunity data, and business viability assessment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                goal: "Shift Behavior from Reactive to Proactive",
                description: "Design a product experience that embeds preventive health habits into daily urban routines — reducing the time gap between health intention and health action.",
                kpi: "Target: 60% users logging at least one preventive health action per week by Day 30",
                color: PURPLE,
              },
              {
                num: "02",
                goal: "Reduce Financial Anxiety Around Healthcare",
                description: "Surface transparent cost data, insurance coverage information, and cost-prevention comparisons to replace health avoidance with informed confidence.",
                kpi: "Target: 40% reduction in \"I'll deal with it later\" responses in follow-up surveys",
                color: "#f97316",
              },
              {
                num: "03",
                goal: "Build Trust Through Contextual Intelligence",
                description: "Replace generic health content with AI-driven contextual guidance — the right nudge at the right time — eliminating notification fatigue and driving action.",
                kpi: "Target: Contextual notification CTR > 25% vs. industry benchmark of 4%",
                color: "#10b981",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: customEase }}
                className="p-7 rounded-3xl border border-white/8 bg-white/4 flex flex-col gap-4 hover:border-white/20 transition-all"
              >
                <div className="text-5xl font-black opacity-15" style={{ color: item.color }}>{item.num}</div>
                <h3 className="text-xl font-bold" style={{ color: item.color }}>{item.goal}</h3>
                <p className="text-[#8888aa] text-sm leading-relaxed flex-1">{item.description}</p>
                <div className="p-3 rounded-xl bg-white/4 border border-white/8">
                  <p className="text-xs font-semibold" style={{ color: item.color }}>📊 {item.kpi}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 11: Reflection ────────────────────────────────── */}
      <section className="py-28 px-6 md:px-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-center"
        >
          <div className="text-[#cc63ff] text-[11px] font-bold tracking-[0.2em] mb-8 uppercase">Section 11 — Reflection</div>

          {/* Large quote */}
          <div className="relative max-w-4xl mx-auto">
            <div className="text-[100px] md:text-[140px] font-black leading-none opacity-5 text-white absolute -top-8 left-0 select-none pointer-events-none">&ldquo;</div>
            <blockquote className="relative z-10 text-2xl md:text-4xl font-light text-white leading-relaxed italic text-center px-8 md:px-16">
              Good research doesn&apos;t just uncover problems.
              <span className="block mt-3 text-[#cc63ff] font-medium not-italic">
                It earns the right to solve them.
              </span>
            </blockquote>
            <div className="text-[100px] md:text-[140px] font-black leading-none opacity-5 text-white absolute -bottom-16 right-0 select-none pointer-events-none">&rdquo;</div>
          </div>

          <div className="mt-16 max-w-2xl mx-auto">
            <p className="text-[#8888aa] text-base leading-relaxed mb-6">
              This project taught me that the most valuable thing a researcher can do is protect the product team
              from building the wrong thing. Every assumption challenged, every bias checked, every data point
              triangulated — that is the work.
            </p>
            <p className="text-[#8888aa] text-base leading-relaxed">
              187 participants shared their honest health struggles with me. This research is my commitment to 
              honoring that data — by ensuring it shapes a product that genuinely helps.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-12">
            {["UX Research", "End-to-End", "Survey Design", "Thematic Coding", "Persona Development", "Feature Mapping", "Urban India", "Preventive Healthcare"].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full text-sm border border-[#cc63ff]/25 text-[#cc63ff]/80 bg-[#cc63ff]/6">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────── */}
      <CTAFooter />
    </main>
  );
}
