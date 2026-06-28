"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CTAFooter from "../../../components/sections/CTAFooter";
import CustomCursor from "../../../components/CustomCursor";

const customEase = [0.16, 1, 0.3, 1];

export default function PreventiveResearchCaseStudy() {
  return (
    <main className="bg-[#080810] min-h-screen text-[#fafafa] selection:bg-[#cc63ff]/30 overflow-x-hidden">
      <CustomCursor />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md bg-[#080810]/50 border-b border-white/5">
        <Link href="/" className="text-white font-bold text-lg tracking-wider hover:text-[#cc63ff] transition-colors">
          RAMAMOORTHY.
        </Link>
        <Link href="/#work" className="text-sm font-medium text-[#8888aa] hover:text-white transition-colors flex items-center gap-2">
          <span>&larr;</span> Back to Work
        </Link>
      </nav>

      {/* ═══════════════════════════════════════════════════════════════
          1. HERO — Immersive Centered Hero + Metadata Bar
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 max-w-[1400px] mx-auto min-h-[85vh] flex flex-col justify-center items-center text-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#cc63ff] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute -left-20 bottom-10 w-[500px] h-[500px] bg-[#00ffd1] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-[#cc63ff] text-tag-1 mb-6 flex items-center justify-center gap-2"
        >
          <span>End-to-End UX Research &amp; Strategy</span> &middot; <span>Solo Researcher</span> &middot; <span>6-Month Engagement</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: customEase }}
          className="text-h1 leading-tight mb-8 max-w-5xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#8888aa]"
        >
          Validating a Preventive Healthcare System Through End-to-End UX Research
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: customEase }}
          className="text-[#8888aa] text-body-lg max-w-3xl mb-16 mx-auto leading-relaxed"
        >
          Urban India has a healthcare crisis that no one talks about — not because people are sick, but because they&apos;re waiting to get sick. I spent 6 months researching this gap — across surveys, interviews, and behavioral analysis — to identify 18 validated user problems, map &#x20b9;35.72 lakh crores in financial risk, and design 114 solutions grounded in real user behavior.
        </motion.p>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: customEase }}
          className="w-full max-w-5xl mx-auto mb-16 rounded-[32px] overflow-hidden border border-white/10 shadow-2xl relative"
        >
          <img
            src="/images/preventive/hero.png"
            alt="Urban India — preventive healthcare research context"
            className="w-full h-auto object-cover max-h-[55vh]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-transparent to-transparent opacity-70" />
        </motion.div>

        {/* Project Metadata Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: customEase }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-[32px] overflow-hidden border border-white/5 backdrop-blur-sm w-full max-w-4xl mx-auto"
        >
          {[
            { label: "My Role", value: "Lead UX Researcher & Strategist" },
            { label: "Duration", value: "6 months" },
            { label: "Team Size", value: "Solo" },
            { label: "Project Type", value: "End-to-End Research + Design" },
          ].map((meta, i) => (
            <div key={i} className="bg-[#080810]/80 p-8 flex flex-col gap-2 hover:bg-[#cc63ff]/5 transition-colors duration-300">
              <span className="text-[10px] uppercase tracking-widest text-[#8888aa]">{meta.label}</span>
              <span className="text-sm font-bold text-white">{meta.value}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. RESEARCH CONFIDENCE — Tripartite Stat Grid
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="text-[#cc63ff] text-tag-1 mb-4 flex justify-center items-center gap-2">
            <i className="ti ti-shield-check text-xl" /> Confidence &amp; Validation
          </div>
          <h2 className="text-h2 text-white mb-6">Built on Triangulated Data</h2>
          <p className="text-[#8888aa] text-body-sm leading-relaxed">
            Problems were validated through a three-layer method: thematic coding of interview transcripts, statistical cross-referencing with survey data, and a dedicated validation survey sent back to participants. Consensus across all three layers determined inclusion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              metric: "18",
              title: "Problems Identified",
              desc: "Every problem maps directly to a validated user pain, a business case, and a measurable metric — not assumptions.",
            },
            {
              metric: "~99%",
              title: "Research Coverage",
              desc: "Problems were identified using triangulated data (surveys + interviews + thematic analysis). Coverage cross-checked across all three data sources.",
            },
            {
              metric: "~94%",
              title: "User Validation Rate",
              desc: "94% of surveyed users confirmed these problems affected them, establishing statistical relevance across the target population.",
            },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: customEase }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#cc63ff]/30 transition-colors group flex flex-col justify-between"
            >
              <div>
                <div className="text-5xl font-bold text-white mb-4 group-hover:text-[#cc63ff] transition-colors">{stat.metric}</div>
                <h3 className="text-xl font-bold text-white mb-4">{stat.title}</h3>
              </div>
              <p className="text-sm text-[#8888aa] leading-relaxed border-t border-white/10 pt-4 mt-4">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-[#cc63ff]/10 border border-[#cc63ff]/20 text-center max-w-4xl mx-auto">
          <p className="text-[#cc63ff] font-medium text-sm md:text-base">
            These aren&apos;t problems I assumed existed. They were surfaced from 187 users, tested against secondary data, and confirmed by the same users — making them safe to build products on.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. COST OF INACTION — Split Editorial Box
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto bg-[#0c0c16] rounded-[40px] border border-white/5 my-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00ffd1]/30 to-transparent" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="space-y-6"
          >
            <div className="text-[#00ffd1] text-tag-1 mb-2 flex items-center gap-2">
              <i className="ti ti-alert-triangle text-xl" /> Macro Impact
            </div>
            <h2 className="text-h2 text-white">The Cost of Inaction<br />— What&apos;s at Stake by 2030</h2>
            <p className="text-[#8888aa] text-body-sm leading-relaxed">
              These aren&apos;t projections built to alarm. They are aggregated estimates from WHO, World Obesity Federation, ICMR, and India&apos;s National Health Profile — recalculated specifically for the urban preventive healthcare gap this project addresses.
            </p>
            <p className="text-white text-sm font-medium leading-relaxed bg-white/5 p-5 rounded-2xl border border-white/5">
              At this scale, no single app solves the problem. But design done right — research-driven, validated, and precise — can meaningfully shift individual behavior. Even a 1% reduction in preventable disease incidence across urban India translates to millions of lives and tens of thousands of crores saved.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
              className="p-8 rounded-3xl bg-[#080810] border border-white/5 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[50px] rounded-full group-hover:bg-red-500/20 transition-colors" />
              <div className="text-xs uppercase tracking-widest text-[#8888aa] mb-2">Financial Burden</div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-1">&#x20b9;35.72 <span className="text-2xl text-red-400">Lakh Crores</span></div>
              <div className="text-xs text-[#8888aa] border-t border-white/5 pt-3 mt-4">Primary Sources: World Obesity Federation, ICMR, FICCI Health Reports</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
              className="p-8 rounded-3xl bg-[#080810] border border-white/5 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#00ffd1]/10 blur-[50px] rounded-full group-hover:bg-[#00ffd1]/20 transition-colors" />
              <div className="text-xs uppercase tracking-widest text-[#8888aa] mb-2">Lives at Risk</div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-1">~4.26 <span className="text-2xl text-[#00ffd1]">Crore people</span></div>
              <div className="text-xs text-[#8888aa] border-t border-white/5 pt-3 mt-4">Primary Sources: WHO Mortality Projections, India NHP 2023</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. RESEARCH AT SCALE — Bento Grid
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <div className="text-[#cc63ff] text-tag-1 mb-4 flex justify-center items-center gap-2">
            <i className="ti ti-chart-dots text-xl" /> Scope &amp; Scale
          </div>
          <h2 className="text-h2 text-white mb-6">What 6 Months of Structured UX Work Looks Like</h2>
          <p className="text-[#8888aa] text-body-sm max-w-2xl mx-auto">
            Solutions were not brainstormed freely — each of the 114 was derived directly from a validated problem, scoped to a user goal, and assigned a trackable success metric.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { metric: "187", label: "Users Participated", desc: "Large enough for statistical confidence across 3 distinct urban segments." },
            { metric: "3", label: "Surveys Conducted", desc: "Progressive surveys: discovery → validation → post-concept feedback." },
            { metric: "14", label: "User Interviews", desc: "In-depth, semi-structured; used for nuance and behavioral context beyond surveys." },
            { metric: "17", label: "UX Processes Used", desc: "Spanning generative, formative, and summative phases of the UCD framework." },
            { metric: "18", label: "Problems Validated", desc: "Reduced from 40+ raw observations through thematic analysis and validation." },
            { metric: "114", label: "Solutions Designed", desc: "Mapped 1:1 to validated problems and prioritized using impact-effort analysis." },
            { metric: "78", label: "User Goals Mapped", desc: "Structured into the product information architecture to guide feature logic." },
            { metric: "18", label: "Success Metrics Defined", desc: "One measurable metric per validated problem — tied to product and business KPIs." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: customEase }}
              className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl hover:bg-white/[0.04] transition-colors flex flex-col justify-between min-h-[220px] group"
            >
              <div>
                <div className="text-[#8888aa] text-xs font-bold uppercase tracking-wider mb-2 group-hover:text-white transition-colors">{item.label}</div>
                <div className="text-4xl font-bold text-white mb-4 group-hover:text-[#cc63ff] transition-colors">{item.metric}</div>
              </div>
              <p className="text-[11px] text-[#666688] leading-relaxed group-hover:text-[#8888aa] transition-colors">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. PRODUCT GOALS — Vertical Expanding Timeline
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto bg-gradient-to-b from-[#080810] to-[#0c0c16] rounded-[40px] border border-white/5 my-12 relative">
        <div className="mb-16">
          <div className="text-[#00ffd1] text-tag-1 mb-4 flex items-center gap-2">
            <i className="ti ti-target-arrow text-xl" /> Product Goals
          </div>
          <h2 className="text-h2 text-white mb-6">Derived from Research, Not Assumptions</h2>
          <p className="text-[#8888aa] text-body-sm max-w-2xl leading-relaxed">
            These three goals were not defined upfront. They emerged from clustering 18 validated user problems into behavioral themes — each goal directly addresses a root cause pattern identified in the research.
          </p>
        </div>

        <div className="relative pl-8 md:pl-12 space-y-12 before:absolute before:inset-0 before:ml-[15px] md:before:ml-[23px] before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#00ffd1] before:via-[#cc63ff] before:to-transparent">
          {[
            {
              id: "01",
              title: "Build Sustainable Healthy Habits",
              root: "Fast-paced urban lifestyles create stress, boredom, and conflicting advice — the core triggers for unhealthy behavior.",
              direction: "Personalized, low-friction habit systems with behavioral nudges.",
              signal: "Users report consistent routine adherence after 4 weeks of engagement.",
            },
            {
              id: "02",
              title: "Enable Early and Proactive Diagnosis",
              root: "Fragmented medical records and absence of tracking tools cause delayed detection of preventable conditions.",
              direction: "Centralized health history + proactive screening reminders.",
              signal: "Increase in early-stage diagnoses and reduction in emergency healthcare visits among users.",
            },
            {
              id: "03",
              title: "Reduce the Financial Burden of Healthcare",
              root: "Reactive treatment costs 3–5x more than preventive care for the same conditions.",
              direction: "Cost transparency tools, preventive plan recommendations, and insurance literacy features.",
              signal: "Measured reduction in out-of-pocket spending for active product users.",
            },
          ].map((goal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: customEase }}
              className="relative"
            >
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#080810] border-2 border-[#00ffd1] flex items-center justify-center z-10">
                <span className="text-[10px] md:text-xs font-bold text-white">{goal.id}</span>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl group hover:border-[#cc63ff]/30 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-[#00ffd1] transition-colors">{goal.title}</h3>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                    <div className="w-full md:w-1/4 text-xs font-bold text-[#8888aa] uppercase tracking-wider pt-1">Root Cause</div>
                    <div className="w-full md:w-3/4 text-sm text-[#fafafa] leading-relaxed">{goal.root}</div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                    <div className="w-full md:w-1/4 text-xs font-bold text-[#8888aa] uppercase tracking-wider pt-1">Design Direction</div>
                    <div className="w-full md:w-3/4 text-sm text-white font-medium bg-white/5 p-4 rounded-xl border border-white/5">{goal.direction}</div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                    <div className="w-full md:w-1/4 text-xs font-bold text-[#8888aa] uppercase tracking-wider pt-1">Success Signal</div>
                    <div className="w-full md:w-3/4 text-sm text-[#00ffd1] font-bold bg-[#00ffd1]/10 p-4 rounded-xl border border-[#00ffd1]/20">{goal.signal}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6. WHY I CHOSE THIS PROBLEM — Asymmetric Editorial Layout
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="mb-16">
          <div className="text-[#cc63ff] text-tag-1 mb-4 flex items-center gap-2">
            <i className="ti ti-bulb text-xl" /> The Rationale
          </div>
          <h2 className="text-h2 text-white mb-8 max-w-4xl">Why I Chose This Problem</h2>
          <p className="text-xl md:text-2xl text-white font-medium max-w-4xl leading-relaxed bg-white/[0.02] p-8 rounded-3xl border border-white/5 border-l-4 border-l-[#cc63ff]">
            India ranks among the top 3 countries globally for diabetes burden, cardiovascular mortality, and lifestyle-disease incidence — yet the digital health market is flooded with wellness apps that are barely distinguishable from each other. Most fail because they&apos;re built on assumptions, not research.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "The Gap is in Understanding",
              body: "Nobody had done rigorous, user-validated, end-to-end research that connected individual behavioral patterns to a scalable product architecture. That&apos;s what I set out to build.",
            },
            {
              title: "The Empathy Gap",
              body: "In 14 in-depth interviews, not a single user mentioned downloading an app as a barrier. The real barriers were trust in the information, relevance to their lifestyle, and not knowing where to start. These are design problems, not technology problems.",
            },
            {
              title: "Unusually High Stakes",
              body: "Unlike e-commerce or fintech, bad UX in healthcare doesn&apos;t just cause churn — it causes people to disengage from their own wellbeing. The cost of a confusing interface here is someone skipping a health check or abandoning medication.",
            },
          ].map((col, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: customEase }}
            >
              <h4 className="text-lg font-bold text-white mb-3">{col.title}</h4>
              <p className="text-sm text-[#8888aa] leading-relaxed" dangerouslySetInnerHTML={{ __html: col.body }} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          7. DESIGN PROBLEM & 8 CONDITIONS — Statement Block + Grid
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto bg-white/[0.01] rounded-[40px] border border-white/5 my-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="text-[#00ffd1] text-tag-1 mb-4 flex justify-center items-center gap-2">
            <i className="ti ti-focus-2 text-xl" /> Scope Definition
          </div>
          <h2 className="text-h2 text-white mb-6">The Design Problem — Precisely Defined</h2>
          <div className="p-8 rounded-3xl bg-[#00ffd1]/10 border border-[#00ffd1]/20 mt-8">
            <p className="text-xl md:text-2xl text-[#00ffd1] font-bold leading-relaxed">
              &ldquo;How might we design a system that makes preventive health behavior the default choice for urban Indian adults, rather than a forced response to illness?&rdquo;
            </p>
          </div>
          <p className="text-[#8888aa] text-body-sm mt-8">
            The 8 conditions below were selected because they share a common trait: all are significantly influenced by behavior before they are influenced by biology. That makes them designable problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Obesity & Overweight", why: "Highest urban prevalence; directly linked to 4 other conditions in this list" },
            { name: "Diabetes", why: "2nd highest global burden; preventable with early behavioral intervention" },
            { name: "Cardiovascular Diseases", why: "Leading cause of urban mortality; largely lifestyle-driven" },
            { name: "Habit-driven Cancers", why: "Lung, oral, colorectal — all with strong behavioral prevention levers" },
            { name: "Anxiety & Stress Disorders", why: "Directly linked to lifestyle; affects all other conditions on this list" },
            { name: "Digestive Issues", why: "Affects 70% of urban population; most under-addressed in digital health" },
            { name: "Nutritional Deficiency", why: "Root-cause contributor to 5 of the other 7 conditions" },
            { name: "Thyroid Dysfunction", why: "Often lifestyle-linked; significantly under-diagnosed in urban women" },
          ].map((condition, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: customEase }}
              className="p-6 rounded-2xl bg-[#080810] border border-white/5 hover:border-[#00ffd1]/30 transition-colors group"
            >
              <h4 className="text-white font-bold mb-3 group-hover:text-[#00ffd1] transition-colors">{condition.name}</h4>
              <p className="text-xs text-[#8888aa] leading-relaxed border-t border-white/10 pt-3">
                <span className="text-[#666688] uppercase tracking-wider block mb-1 text-[10px]">Why it&apos;s in scope</span>
                {condition.why}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          8. THREE ROOT CAUSES — Horizontal Carousel
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5 overflow-hidden">
        <div className="mb-16">
          <div className="text-[#cc63ff] text-tag-1 mb-4 flex items-center gap-2">
            <i className="ti ti-git-fork text-xl" /> Thematic Synthesis
          </div>
          <h2 className="text-h2 text-white mb-6">Three Root Causes</h2>
          <p className="text-[#8888aa] text-body-sm max-w-2xl leading-relaxed">
            After thematic analysis across 14 interviews and 3 surveys, 18 individual user problems consistently mapped back to three behavioral and systemic root causes.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 pb-4">
          {[
            {
              id: "01",
              title: "Unhealthy Habits",
              problem: "Urban adults know healthy behavior is important, but environmental friction — time pressure, conflicting advice, social norms — makes unhealthy behavior the easier default.",
              confirmed: "12 of 18 validated problems trace back to this root cause.",
              insight: "Users don&apos;t lack motivation — they lack a frictionless entry point.",
            },
            {
              id: "02",
              title: "Late Diagnosis & Reactive Treatment",
              problem: "Health information is decentralized, tracking is fragmented, and the system only engages users when something goes wrong — by which point cost and risk have escalated.",
              confirmed: "9 of 18 validated problems include a &lsquo;delayed action&rsquo; pattern.",
              insight: "Users regularly reported &lsquo;I knew something was off, but I didn&apos;t know where to check.&rsquo;",
            },
            {
              id: "03",
              title: "Higher Healthcare Expenses",
              problem: "Treating advanced disease costs 3–5x more than prevention — but users don&apos;t feel this cost asymmetry until it&apos;s too late. Absence of financial transparency amplifies this.",
              confirmed: "6 of 18 validated problems relate to cost avoidance behavior.",
              insight: "Users actively delayed diagnosis to avoid anticipated costs — making their eventual treatment more expensive, not less.",
            },
          ].map((cause, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: customEase }}
              className="flex-1 bg-white/[0.02] border border-white/5 p-8 rounded-3xl flex flex-col group hover:bg-white/[0.04] transition-colors"
            >
              <div className="text-5xl font-black text-white/5 mb-6 group-hover:text-[#cc63ff]/10 transition-colors">{cause.id}</div>
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-[#cc63ff] transition-colors" dangerouslySetInnerHTML={{ __html: cause.title }} />
              <div className="space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#cc63ff] font-bold mb-2">The Real Problem</div>
                  <p className="text-sm text-white leading-relaxed" dangerouslySetInnerHTML={{ __html: cause.problem }} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#8888aa] font-bold mb-2">Confirmed By</div>
                  <p className="text-sm text-[#8888aa]" dangerouslySetInnerHTML={{ __html: cause.confirmed }} />
                </div>
                <div className="bg-[#cc63ff]/10 border border-[#cc63ff]/20 p-4 rounded-xl mt-4">
                  <div className="text-[10px] uppercase tracking-widest text-[#cc63ff] font-bold mb-1">Key Behavioral Insight</div>
                  <p className="text-sm text-white font-medium" dangerouslySetInnerHTML={{ __html: cause.insight }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          9. HOW BIG IS THIS PROBLEM — Data Comparison Table
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto bg-[#080810] border-y border-white/5 my-12">
        <div className="mb-16">
          <div className="text-[#00ffd1] text-tag-1 mb-4 flex items-center gap-2">
            <i className="ti ti-chart-bar text-xl" /> Scope &amp; Sourcing
          </div>
          <h2 className="text-h2 text-white mb-6">How Big Is This Problem?</h2>
          <p className="text-[#8888aa] text-body-sm max-w-3xl leading-relaxed">
            All three figures are normalized to the urban Indian adult population as the relevant scope. Market size figures are cited separately and not conflated with affected population.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-white/5 bg-[#0c0c16]">
          <table className="w-full text-left text-sm min-w-[800px]">
            <thead className="bg-white/5 border-b border-white/5">
              <tr>
                <th className="p-6 text-white font-semibold">Problem Area</th>
                <th className="p-6 text-[#8888aa] font-semibold">People Affected (2023)</th>
                <th className="p-6 text-[#00ffd1] font-semibold">Projected (2030)</th>
                <th className="p-6 text-[#8888aa] font-semibold">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { area: "Unhealthy Habits", current: "~475 million urban adults", projected: "~607 million", source: "World Bank; UN DESA World Urbanization Prospects 2022" },
                { area: "Late Diagnosis", current: "Estimated 3 in 10 urban adults delay diagnosis", projected: "4 in 10 by 2030", source: "ICMR National Disease Burden Study" },
                { area: "High Healthcare Costs", current: "Avg urban household spends ₹22K–₹45K/yr on reactive care", projected: "Projected to rise 30–40% by 2030", source: "National Health Accounts 2023" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 font-bold text-white whitespace-nowrap">{row.area}</td>
                  <td className="p-6 text-white/80">{row.current}</td>
                  <td className="p-6 text-[#00ffd1] font-medium">{row.projected}</td>
                  <td className="p-6 text-[#666688] text-xs">{row.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-4 items-start">
          <div className="w-8 h-8 rounded-full bg-[#00ffd1]/10 flex items-center justify-center shrink-0">
            <i className="ti ti-info-circle text-[#00ffd1]" />
          </div>
          <div>
            <span className="text-white font-bold block mb-1">Market Opportunity (separated intentionally):</span>
            <span className="text-[#8888aa] text-sm leading-relaxed">
              The preventive healthcare market in India is projected at $400 billion by 2025 (FICCI), but this is a market figure — not the problem size. The problem is behavioral, not commercial. The product opportunity sits at their intersection.
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          10. HOW I WORKED — Stepped Process Pipeline
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5 relative">
        <div className="mb-16">
          <div className="text-[#cc63ff] text-tag-1 mb-4 flex items-center gap-2">
            <i className="ti ti-route text-xl" /> Methodology
          </div>
          <h2 className="text-h2 text-white mb-6">How I Worked — Process With Intent</h2>
          <p className="text-[#8888aa] text-body-sm max-w-3xl leading-relaxed">
            I followed a structured UCD framework, but the most valuable moments came from the decisions I made within the process — what to pursue, what to drop, and why.
          </p>
        </div>

        <div className="relative pl-8 md:pl-16 space-y-16 before:absolute before:inset-0 before:ml-[15px] md:before:ml-[31px] before:h-full before:w-px before:bg-gradient-to-b before:from-[#cc63ff]/50 before:via-white/10 before:to-transparent">
          {[
            {
              phase: "Phase 1 — Generative (Understand)",
              steps: ["Market Research → identified 3 underserved behavioral segments in urban preventive healthcare", "Secondary Research → scoped the 8 focus conditions based on behavioral modifiability, not just prevalence", "Primary Research → 3 progressive surveys + 14 semi-structured interviews"],
              decision: "Shifted from broad health app research to a narrower preventive-behavior focus after survey 1 showed users weren&apos;t looking for treatment tools — they wanted prevention systems.",
            },
            {
              phase: "Phase 2 — Formative Analysis (Synthesize)",
              steps: ["Sentiment Analysis → mapped emotional states to behavior patterns", "Thematic Analysis → clustered 40+ raw observations into 18 validated problems", "Experience Analysis → mapped the full user journey from health awareness to action"],
              decision: "Kept only problems that appeared across at least 2 research methods. Rejected 22 observations that appeared in only one source.",
            },
            {
              phase: "Phase 2 — Formative Design (Shape)",
              steps: ["Information Design → defined interaction flows, CRUD logic, and feature architecture", "Visual Design → applied to high-fidelity prototypes"],
              decision: "Designed information hierarchy before visual design — features were named and structured before any pixels.",
            },
            {
              phase: "Phase 3 — Summative (Validate)",
              steps: ["Moderated Testing", "Survey Scale Testing", "Unmoderated Testing"],
              decision: "Used SUS (System Usability Scale) for quantified usability measurement, not just qualitative feedback.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: customEase }}
              className="relative"
            >
              <div className="absolute -left-[45px] md:-left-[77px] top-1 w-8 h-8 rounded-full bg-[#080810] border-2 border-[#cc63ff] flex items-center justify-center z-10">
                <span className="w-2 h-2 rounded-full bg-[#cc63ff]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">{item.phase}</h3>
              <ul className="space-y-4 mb-8">
                {item.steps.map((step, sIdx) => {
                  const parts = step.split(" → ");
                  return (
                    <li key={sIdx} className="flex items-start gap-3">
                      <i className="ti ti-check text-[#8888aa] mt-1 shrink-0" />
                      <span className="text-sm text-[#8888aa]">
                        {parts.length > 1 ? (
                          <><strong className="text-white font-semibold">{parts[0]}</strong> &rarr; {parts.slice(1).join(" → ")}</>
                        ) : (
                          <strong className="text-white font-semibold">{step}</strong>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="bg-[#cc63ff]/10 border border-[#cc63ff]/30 p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#cc63ff]" />
                <div className="text-[10px] uppercase tracking-widest text-[#cc63ff] font-bold mb-2 flex items-center gap-2 pl-6">
                  <i className="ti ti-bulb text-lg" /> Key Decision
                </div>
                <p className="text-sm text-white leading-relaxed font-medium pl-6" dangerouslySetInnerHTML={{ __html: item.decision }} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          11. PERSONAS — Profile Cards Grid
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5 bg-[#0c0c16] rounded-[40px] my-12">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="text-[#00ffd1] text-tag-1 mb-4 flex justify-center items-center gap-2">
            <i className="ti ti-users text-xl" /> Target Audience
          </div>
          <h2 className="text-h2 text-white mb-6">Who I Designed For — Research-Derived Personas</h2>
          <p className="text-[#8888aa] text-body-sm leading-relaxed">
            Each persona was constructed from clusters of interview participants who shared behavioral patterns — not from demographic assumptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              num: "Persona 1",
              title: "The Regretful Converter",
              note: "Based on: 4 interview participants, 23% survey respondents",
              meta: [{ k: "Age Range", v: "56–65" }, { k: "Life Stage", v: "Post-peak career; health event occurred" }, { k: "Income", v: "₹75K–₹1L/month" }, { k: "Health Spend", v: "₹2,001–₹5,000/month" }],
              behavior: "Reactive until a health scare — now motivated but unsure where to start.",
              quote: "I always knew I should take better care of myself. But I kept waiting for the right time. Now I&apos;m paying for it, and I just want someone to tell me what to do first.",
              implication: "Progressive disclosure — show one habit at a time. Avoid data-heavy home screens.",
            },
            {
              num: "Persona 2",
              title: "The Time-Starved Professional",
              note: "28–42, urban, high-earning, health-aware but action-poor",
              meta: [],
              behavior: "Knows what they should do. Doesn&apos;t do it because friction outweighs motivation. Needs automation, reminders, and minimal cognitive load.",
              quote: "",
              implication: "Default-on features, smart scheduling, one-tap logging. Every interaction should take under 15 seconds.",
            },
            {
              num: "Persona 3",
              title: "The Overwhelmed Beginner",
              note: "22–34, recently health-conscious, suffering from information overload",
              meta: [],
              behavior: "Just starting their health journey. Confused by conflicting online advice. Needs curated, personalized, trustworthy content — not another calorie counter.",
              quote: "",
              implication: "Strong editorial content strategy + onboarding quiz to personalize from day one. Build trust before building habit.",
            },
          ].map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: customEase }}
              className="bg-[#080810] border border-white/5 rounded-3xl p-8 flex flex-col justify-between group hover:border-[#00ffd1]/30 transition-colors"
            >
              <div>
                <div className="text-[#00ffd1] text-xs font-bold uppercase tracking-wider mb-2">{p.num}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                <div className="text-[10px] text-[#8888aa] mb-6">{p.note}</div>
                {p.meta.length > 0 && (
                  <div className="space-y-2 mb-6 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                    {p.meta.map((m, i) => (
                      <div key={i} className="flex justify-between text-xs">
                        <span className="text-[#666688]">{m.k}</span>
                        <span className="text-white font-medium text-right w-2/3">{m.v}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="mb-4">
                  <div className="text-[10px] uppercase tracking-widest text-[#8888aa] font-bold mb-2">Core Behavior</div>
                  <p className="text-sm text-white leading-relaxed" dangerouslySetInnerHTML={{ __html: p.behavior }} />
                </div>
                {p.quote && (
                  <blockquote className="border-l-2 border-[#00ffd1] pl-4 text-sm text-[#8888aa] italic mb-4" dangerouslySetInnerHTML={{ __html: `&ldquo;${p.quote}&rdquo;` }} />
                )}
              </div>
              <div className="bg-[#00ffd1]/10 border border-[#00ffd1]/20 p-4 rounded-xl mt-4">
                <div className="text-[10px] uppercase tracking-widest text-[#00ffd1] font-bold mb-1">Design Implication</div>
                <p className="text-sm text-white font-medium">{p.implication}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          12. FEATURE DEEP-DIVE — Split Screen
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="mb-16">
          <div className="text-[#cc63ff] text-tag-1 mb-4 flex items-center gap-2">
            <i className="ti ti-layout-sidebar text-xl" /> Feature Deep-Dive
          </div>
          <h2 className="text-h2 text-white mb-6">From Problem to Feature</h2>
          <p className="text-[#8888aa] text-body-sm max-w-2xl leading-relaxed">
            Each feature was designed backwards from a validated user problem. The solution came after the problem was understood — not before.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#0c0c16] rounded-[40px] border border-white/5 overflow-hidden">
          {/* Left: Narrative */}
          <div className="p-10 md:p-12 space-y-8">
            <div className="text-3xl font-bold text-white mb-6">Breakfast Reminder System</div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#8888aa] font-bold mb-2">The Problem It Solves</div>
              <p className="text-sm text-white leading-relaxed bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                Urban users skip breakfast due to time constraints, leading to poor dietary patterns. 38% of survey respondents identified this as a daily occurrence. Left unaddressed, this compounds into nutritional deficiency and energy depletion that affects other health behaviors.
              </p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#cc63ff] font-bold mb-4">Design Decisions</div>
              <div className="space-y-4">
                <div className="border-l-2 border-[#cc63ff] pl-4">
                  <strong className="text-white text-sm block mb-1">Why a reminder and not a tracker?</strong>
                  <p className="text-sm text-[#8888aa]">Because users don&apos;t fail to eat breakfast due to forgetfulness — they fail due to feeling like they don&apos;t have time. The reminder surfaces quick healthy options, not just a push notification.</p>
                </div>
                <div className="border-l-2 border-[#cc63ff] pl-4">
                  <strong className="text-white text-sm block mb-1">Why Progressive Disclosure + Hub-and-Spoke architecture?</strong>
                  <p className="text-sm text-[#8888aa]">To avoid overwhelming a user who&apos;s starting their health journey. The entry is low-friction (a reminder); the depth is available for those who want it (nutritional details). Nobody is forced into a dashboard they didn&apos;t ask for.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#00ffd1] font-bold mb-4">Interaction Flow</div>
              <ul className="space-y-3">
                {["Morning Reminder (personalized based on user's past wake-up time)", "Quick Options Surface (3 options in under 10 seconds)", "One-Tap Log (no form, no scrolling)", "Streak Building (consecutive days tracked visually)", "Nutritional Insight (available on demand, not forced)"].map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-white">
                    <span className="text-[#00ffd1]">&rarr;</span> {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Technical */}
          <div className="bg-[#080810] p-10 md:p-12 border-t lg:border-t-0 lg:border-l border-white/5 flex flex-col justify-center">
            <div className="mb-10">
              <div className="text-[10px] uppercase tracking-widest text-[#8888aa] font-bold mb-4">CRUD Logic Mapping</div>
              <div className="overflow-hidden rounded-2xl border border-white/5">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="p-4 text-white font-semibold">Screen</th>
                      <th className="p-4 text-[#cc63ff] font-semibold">Operation</th>
                      <th className="p-4 text-[#8888aa] font-semibold">What It Does</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { screen: "Goal Setup", op: "Create", desc: "User sets a breakfast goal for the first time" },
                      { screen: "Reminder Settings", op: "Update", desc: "User adjusts notification timing or frequency" },
                      { screen: "Quick Options", op: "Read", desc: "App surfaces relevant, personalized options" },
                      { screen: "Log Breakfast", op: "Create", desc: "User records the meal in one tap" },
                      { screen: "Progress View", op: "Read", desc: "Streak and consistency data displayed visually" },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02]">
                        <td className="p-4 text-white font-medium">{row.screen}</td>
                        <td className="p-4 text-[#cc63ff]">{row.op}</td>
                        <td className="p-4 text-[#8888aa]">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00ffd1]/10 to-[#cc63ff]/10 border border-[#00ffd1]/20 rounded-2xl p-6">
              <div className="text-[10px] uppercase tracking-widest text-white font-bold mb-4">Success Metrics</div>
              <div className="space-y-4">
                {[
                  { type: "Product KPI", val: "7-day breakfast logging rate (target: >60% of active users)" },
                  { type: "Health KPI", val: "Self-reported energy level improvement at 30 days" },
                  { type: "Business KPI", val: "Engagement with partner food and nutrition content" },
                ].map((m, i) => (
                  <div key={i}>
                    <div className="text-xs text-[#8888aa] uppercase">{m.type}</div>
                    <div className="text-white font-bold">{m.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          13. REFLECTION — Two-Column Magazine Layout
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5 mb-24">
        <div className="mb-16">
          <div className="text-[#cc63ff] text-tag-1 mb-4 flex items-center gap-2">
            <i className="ti ti-book text-xl" /> Reflection
          </div>
          <h2 className="text-h2 text-white mb-6">What This Project Taught Me</h2>
          <p className="text-[#8888aa] text-body-sm max-w-3xl leading-relaxed">
            Six months of end-to-end research changes how you think — not just about the problem, but about your own process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Reflections */}
          <div className="lg:col-span-8 space-y-12">
            {[
              { heading: "On Research", body: "I started this project believing more data meant more confidence. I ended it believing the opposite — that knowing when to stop collecting and when to start interpreting is the harder, more important skill. I had 40+ raw observations at the end of my interview phase. Narrowing those to 18 validated problems required judgment, not more data. That was uncomfortable. I made those calls anyway." },
              { heading: "On Scope", body: "I scoped too wide initially. Eight diseases, three root causes, 114 solutions — in hindsight, a focused product would have pushed me to prioritize ruthlessly rather than design comprehensively. If I did this again, I&apos;d pick the top 3 problems, go deeper on them, and validate a prototype before mapping 114 solutions. Breadth felt rigorous while I was doing it. Looking back, depth would have been braver." },
              { heading: "On the ~99% Confidence Figure", body: "This is the number I&apos;m most critical of in my own work. It was calculated through triangulation — cross-referencing themes across surveys and interviews — but I didn&apos;t document the methodology clearly enough to make it defensible to an external reviewer on first read. I know what it means. I can&apos;t prove it the way I should be able to. That&apos;s a research integrity gap I&apos;ve closed in subsequent projects." },
              { heading: "On Working Alone", body: "Doing end-to-end research solo taught me what I&apos;m actually good at and what I use collaboration as a crutch for. I&apos;m strong at synthesis — finding the pattern no one explicitly said. I&apos;m weaker at challenging my own framing mid-project. A second researcher in the interview phase would have pushed back on my interview guide in ways I couldn&apos;t push back on myself. Solo work reveals your blind spots faster than anything else." },
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold text-white mb-4">{item.heading}</h3>
                <p className="text-[#8888aa] leading-relaxed" dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>

          {/* Right: Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32 self-start">
            <div className="bg-[#cc63ff]/5 border border-[#cc63ff]/20 p-8 rounded-3xl">
              <div className="text-[#cc63ff] font-bold text-lg mb-6 flex items-center gap-2">
                <i className="ti ti-rotate text-xl" /> What I&apos;d Do Differently
              </div>
              <ul className="space-y-4">
                {[
                  "Build a validation prototype earlier — after problem clustering, before full information design",
                  "Recruit more age diversity; the 56–65 skew narrowed my persona landscape",
                  "Document methodological decisions in real time, not retrospectively",
                  "Show less, explain more — 114 solutions looks impressive; 10 deeply justified ones would be more honest",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#8888aa]">
                    <span className="text-[#cc63ff] font-bold">&rarr;</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#00ffd1]/5 border border-[#00ffd1]/20 p-8 rounded-3xl">
              <div className="text-[#00ffd1] font-bold text-lg mb-6 flex items-center gap-2">
                <i className="ti ti-arrow-right text-xl" /> What I Carry Forward
              </div>
              <p className="text-sm text-[#8888aa] leading-relaxed italic">
                &ldquo;The most important thing this project gave me wasn&apos;t the deliverables. It was the conviction that design without research is just opinion with good typography — and that the researcher&apos;s job isn&apos;t to find answers, it&apos;s to ask questions that make the right answers unavoidable.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTAFooter />
    </main>
  );
}
