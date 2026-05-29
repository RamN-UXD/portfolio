"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CTAFooter from "../../../components/sections/CTAFooter";
import CustomCursor from "../../../components/CustomCursor";

const customEase = [0.16, 1, 0.3, 1];

export default function DrHealthCaseStudy() {
  return (
    <main className="bg-[#080810] min-h-screen text-[#fafafa] selection:bg-[#00ffb7]/30">
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md bg-[#080810]/50 border-b border-white/5">
        <Link href="/" className="text-white font-bold text-lg tracking-wider hover:text-[#00ffb7] transition-colors">
          RAMAMOORTHY.
        </Link>
        <Link href="/#work" className="text-sm font-medium text-[#8888aa] hover:text-white transition-colors">
          &larr; Back to Work
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 max-w-[1400px] mx-auto min-h-[80vh] flex flex-col justify-center">
        {/* Background Radial Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00ffb7] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-[#00ffb7] text-[12px] font-bold tracking-[0.2em] mb-6 uppercase"
        >
          UX/UI Design &middot; Mobile App &middot; Case Study
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: customEase }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-8 max-w-5xl"
        >
          Translating Research Insights on Preventive Healthcare into App Design
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: customEase }}
          className="text-[#8888aa] text-lg md:text-2xl leading-relaxed max-w-3xl mb-16"
        >
          Dr.Health is a research-led mobile experience designed to empower urban Indians to take
          proactive control of their health; built on validated user problems, driven by
          evidence-based design decisions, and tested with real users.
        </motion.p>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: customEase }}
          className="w-full h-[350px] md:h-[500px] rounded-[32px] overflow-hidden mb-12 relative border border-white/5 group"
        >
          <img src="/images/dr-health/hero.png" alt="Dr Health Hero" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-transparent to-transparent opacity-80" />
        </motion.div>

        {/* Project Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: customEase }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-[32px] bg-white/[0.02] border border-white/5 backdrop-blur-sm"
        >
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-bold text-white">2</span>
            <span className="text-sm text-[#8888aa]">Features Designed End-to-End</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-bold text-white">2</span>
            <span className="text-sm text-[#8888aa]">User Personas Tested</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-bold text-white">11</span>
            <span className="text-sm text-[#8888aa]">Hi-Fi Screens</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-bold text-white">4</span>
            <span className="text-sm text-[#8888aa]">Design Principles Applied</span>
          </div>
        </motion.div>
      </section>

      {/* Section 2: Where This Design Came From */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="md:col-span-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight sticky top-32">
              Where This Design Came From
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
              This project doesn&apos;t begin with wireframes. It begins with 187 research participants, 3
              surveys, 14 interviews, and 18 validated user problems uncovered in the UX research phase.
            </p>
            <p>
              From those 18 problems, the design phase focused on a specific business case: Higher
              Healthcare Expenses; the domain where preventive design intervention could deliver the
              most measurable impact. Two user problems within that domain were prioritized for the
              design phase, each directly traceable to validated research findings.
            </p>
            <p className="text-white font-medium">
              Every layout decision, interaction pattern, and design principle applied in this project
              has a reason grounded in what users actually said, felt, and struggled with.
            </p>
            <div className="pt-4">
              <a href="#" className="inline-flex items-center gap-2 text-[#00ffb7] hover:text-white transition-colors font-medium">
                &rarr; Read the full research behind this project: [View Research Case Study]
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: What the Design Was Built to Solve */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto bg-white/[0.02] rounded-[40px] border border-white/5 my-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="md:col-span-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight sticky top-32">
              What the Design Was Built to Solve
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="md:col-span-8 space-y-12"
          >
            {/* Business Case */}
            <div>
              <h3 className="text-[#00ffb7] text-[12px] font-bold tracking-[0.2em] mb-4 uppercase">Business Case Focus Area</h3>
              <h4 className="text-2xl font-bold text-white mb-4">Higher Healthcare Expenses</h4>
              <p className="text-[#8888aa] text-lg leading-relaxed">
                The design phase was scoped around solving problems that directly contribute to higher
                healthcare expenses; addressing preventable conditions through better user experiences,
                earlier detection, and habit-building tools.
              </p>
            </div>

            {/* Problem Impacts Table */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Problem Impacts; The 3 Prioritized Disease Areas</h3>
              <p className="text-[#8888aa] text-lg leading-relaxed mb-6">
                From the broader set of validated problems, three critical areas were prioritized for the
                design phase, ensuring depth of focus and actionable solutions.
              </p>
              
              <div className="overflow-x-auto rounded-2xl border border-white/5 bg-[rgba(48,46,97,0.18)]">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 border-b border-white/5">
                    <tr>
                      <th className="p-4 text-white font-semibold">Disease Area</th>
                      <th className="p-4 text-white font-semibold">Financial Impact (2023)</th>
                      <th className="p-4 text-white font-semibold">Lives at Risk</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-[#8888aa]">
                    <tr>
                      <td className="p-4 font-medium text-white">Obesity &amp; Overweight</td>
                      <td className="p-4">~INR 9.90 crore (direct &amp; indirect total medical cost)</td>
                      <td className="p-4">~2.37 crore people at risk of mortality</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-white">Cardiovascular Diseases</td>
                      <td className="p-4">INR ~12.35K crore spent</td>
                      <td className="p-4">~16.88 lakh people at higher risk of mortality annually</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-white">Unhealthy habits-based Cancers</td>
                      <td className="p-4">INR 74.62 crore total amount spent</td>
                      <td className="p-4">~14.48K people at risk of mortality</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Problem Statements */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Problem Statements</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                  <h4 className="text-white font-bold mb-3">Unhealthy Habits</h4>
                  <p className="text-[#8888aa] text-sm leading-relaxed">
                    Fast-paced lifestyles often result in increased stress and boredom, leading to the adoption
                    of bad habits. Conflicting advice from various sources further contributes to the
                    development of unhealthy behaviors.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                  <h4 className="text-white font-bold mb-3">Late Diagnosis &amp; Treatment</h4>
                  <p className="text-[#8888aa] text-sm leading-relaxed">
                    Reactive healthcare, caused by decentralized medical information and a lack of health
                    tracking, leads to advanced diseases.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                  <h4 className="text-white font-bold mb-3">Higher Healthcare Expenses</h4>
                  <p className="text-[#8888aa] text-sm leading-relaxed">
                    Treating advanced diseases is more costly than preventive care, requiring additional
                    resources and specialized interventions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Design Principles */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Design Principles; The Foundation</h2>
          <p className="text-[#8888aa] text-lg leading-relaxed">
            These principles were established before any interface decisions were made. Every screen in this project can be traced back to at least one of these.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Gestalt Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="bg-[rgba(48,46,97,0.18)] border border-white/5 rounded-[32px] p-8"
          >
            <h3 className="text-xl font-bold text-[#00ffb7] mb-6">Gestalt Principles</h3>
            <div className="space-y-6 text-[#8888aa] text-sm leading-relaxed">
              <div>
                <strong className="text-white block mb-1">Proximity</strong>
                Elements such as &quot;Intelligent Time Manager&quot; and &quot;Personalized Health Plan&quot; are grouped closely, indicating they are related functions.
              </div>
              <div>
                <strong className="text-white block mb-1">Similarity</strong>
                Consistent use of colors and shapes, like the circular progress bars for &quot;Current Goals,&quot; signals that these elements belong to the same category.
              </div>
              <div>
                <strong className="text-white block mb-1">Continuity</strong>
                The curved lines of the golden ratio spiral guide the user&apos;s gaze smoothly across the interface; from the top dashboard to recent achievements.
              </div>
              <div>
                <strong className="text-white block mb-1">Closure</strong>
                Incomplete visual elements, such as the progress bars, are perceived as whole due to the principle of closure.
              </div>
            </div>
          </motion.div>

          {/* UX Laws */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
            className="bg-[rgba(48,46,97,0.18)] border border-white/5 rounded-[32px] p-8"
          >
            <h3 className="text-xl font-bold text-[#00ffb7] mb-6">UX Laws</h3>
            <div className="space-y-6 text-[#8888aa] text-sm leading-relaxed">
              <div>
                <strong className="text-white block mb-1">Law of Pr&auml;gnanz (Simplicity)</strong>
                The design is simple and clean, using clear icons and minimal text. This simplicity ensures that users can quickly understand and interact.
              </div>
              <div>
                <strong className="text-white block mb-1">Fitts&apos;s Law</strong>
                Interactive elements like buttons are appropriately sized for easy tapping, minimizing physical effort and enhancing usability.
              </div>
              <div>
                <strong className="text-white block mb-1">Hick&apos;s Law</strong>
                By grouping options under categories like &quot;Features&quot; and &quot;Current Goals,&quot; the design reduces choice overload and simplifies decision-making.
              </div>
            </div>
          </motion.div>

          {/* Design Psychology & Visual Structure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
            className="bg-[rgba(48,46,97,0.18)] border border-white/5 rounded-[32px] p-8"
          >
            <h3 className="text-xl font-bold text-[#00ffb7] mb-6">Design Psychology</h3>
            <div className="space-y-6 text-[#8888aa] text-sm leading-relaxed">
              <div>
                <strong className="text-white block mb-1">Golden Ratio</strong>
                The golden ratio is evident in the layout, guiding the user&apos;s eye naturally through the content. The spiral overlays and grid lines show how elements are proportioned harmoniously.
              </div>
              <div>
                <strong className="text-white block mb-1">User Cognition &amp; Adoption</strong>
                Harmonious proportions, clear grouping, and intuitive navigation make interactions feel instinctive, reducing effort and boosting satisfaction.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Grid System Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: customEase }}
          className="mt-12 overflow-x-auto rounded-3xl border border-white/5 bg-white/[0.02]"
        >
          <div className="p-6 border-b border-white/5">
            <h3 className="text-xl font-bold text-white">Rationale for Using the 4-Point Grid System</h3>
          </div>
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5">
              <tr>
                <th className="p-6 text-white font-semibold w-1/3">Benefit</th>
                <th className="p-6 text-white font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-[#8888aa]">
              <tr>
                <td className="p-6 font-medium text-white">Consistency</td>
                <td className="p-6">Ensures uniform spacing and alignment across all screens, creating a cohesive visual language.</td>
              </tr>
              <tr>
                <td className="p-6 font-medium text-white">Visual Hierarchy</td>
                <td className="p-6">Supports clear content prioritization by maintaining proportional spacing between elements.</td>
              </tr>
              <tr>
                <td className="p-6 font-medium text-white">Time-Saving Efficiency</td>
                <td className="p-6">Speeds up design decisions by providing a defined spatial framework, reducing guesswork.</td>
              </tr>
              <tr>
                <td className="p-6 font-medium text-white">Improved Collaboration</td>
                <td className="p-6">Shared grid understanding bridges the gap between design and development, reducing handoff friction.</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* Section 5: Light Mode Rationale */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto bg-white/[0.02] rounded-[40px] border border-white/5 my-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="md:col-span-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight sticky top-32">
              Why Light Mode; A Deliberate Decision
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="md:col-span-8 text-[#8888aa] text-lg leading-relaxed"
          >
            <p className="mb-8">
              Before designing a single screen, the display mode was evaluated against user context,
              demographics, and healthcare-specific usage patterns.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { n: "01", t: "Readability & Visibility", d: "Light mode ensures better text clarity, especially in bright environments — crucial for healthcare apps." },
                { n: "02", t: "Psychological Impact", d: "It creates a clean, trustworthy feel and keeps users alert when engaging with sensitive health information." },
                { n: "03", t: "User Demographics", d: "More accessible for older users and preferred during daytime use, aligning with typical app usage patterns." },
                { n: "04", t: "Content Presentation", d: "Charts, images, and forms are easier to interpret and interact with on a light background." },
                { n: "05", t: "Battery Consumption", d: "On modern screens, light mode has negligible battery impact — ideal for short, frequent sessions." },
                { n: "06", t: "Consistency & Standards", d: "It aligns with industry standards, offering a familiar and credible user experience." },
              ].map((item) => (
                <div key={item.n} className="p-6 rounded-2xl bg-[rgba(48,46,97,0.18)] border border-white/5">
                  <div className="text-[#00ffb7] font-mono text-xs mb-2">#{item.n}</div>
                  <h4 className="text-white font-bold mb-2">{item.t}</h4>
                  <p className="text-sm text-[#8888aa] leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Features */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">From Validated Problems to Designed Solutions</h2>
          <p className="text-[#8888aa] text-lg leading-relaxed">
            Two features were designed end-to-end; from the validated user problem through solution point, wireframe flow, and high-fidelity screens.
          </p>
        </motion.div>

        <div className="space-y-24">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            <div className="lg:col-span-5 space-y-8">
              <h3 className="text-2xl font-bold text-white border-l-4 border-[#00ffb7] pl-4">
                Feature 1; Motivational Reminders &amp; Rewards
              </h3>
              <div>
                <h4 className="text-[#ff0055] font-semibold mb-2">User Problem</h4>
                <p className="text-[#8888aa] text-sm leading-relaxed">
                  Urban users show fluctuating motivation towards fitness. Walking is often highlighted as an
                  accessible activity, but sticking to structured fitness routines consistently remains a
                  core behavioral challenge across personas.
                </p>
              </div>
              <div>
                <h4 className="text-[#00ffb7] font-semibold mb-2">Solution Point</h4>
                <p className="text-[#8888aa] text-sm leading-relaxed">
                  The app addresses fluctuating motivation by sending contextual motivational reminders
                  and messages tied to the user&apos;s own goals. A rewards system; points and badges for
                  achieving fitness targets; creates a positive reinforcement loop that sustains engagement.
                </p>
              </div>
              <div className="w-full h-[280px] rounded-[24px] overflow-hidden border border-white/5 relative group">
                <img src="/images/dr-health/feature-1.png" alt="Fitness Tracker App" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-transparent to-transparent" />
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="p-6 rounded-[32px] bg-[rgba(48,46,97,0.18)] border border-white/5">
                <h4 className="text-white font-bold mb-6">Wireframe Interaction Flow</h4>
                <div className="space-y-4">
                  {[
                    { step: "Setting Fitness Goals", desc: "The user sets their fitness goals in the app — steps walked, calories burned, hours of physical activity, etc." },
                    { step: "Enabling Motivational Reminders", desc: "The user enables the feature in the settings of the Mobile App." },
                    { step: "Customizing Reminders", desc: "The user customizes the reminders according to their preference — frequency, time, and type of messages." },
                    { step: "Engaging with the App", desc: "As the user engages with the fitness regimen, they receive motivational reminders at set times." },
                    { step: "Achieving Goals & Earning Rewards", desc: "When the user achieves their fitness goals, they earn points or badges in the app." },
                    { step: "Tracking Progress", desc: "The user tracks their progress in the \"Progress\" section — goals achieved, points earned, and badges won." }
                  ].map((flow, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5">
                      <div className="w-8 h-8 shrink-0 rounded-full bg-[#00ffb7]/10 text-[#00ffb7] flex items-center justify-center font-bold text-xs">{i+1}</div>
                      <div>
                        <strong className="text-white block text-sm mb-1">{flow.step}</strong>
                        <p className="text-[#8888aa] text-xs leading-relaxed">{flow.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            <div className="lg:col-span-5 space-y-8 lg:order-2">
              <h3 className="text-2xl font-bold text-white border-l-4 border-[#00ffb7] pl-4">
                Feature 2; Mental &amp; Cardiovascular Healthcare
              </h3>
              <div>
                <h4 className="text-[#ff0055] font-semibold mb-2">User Problem</h4>
                <p className="text-[#8888aa] text-sm leading-relaxed">
                  Urban users find it challenging to engage with mental health services, cardiovascular
                  checkups, and insurance due to personal time constraints and scheduling conflicts. The
                  barrier isn&apos;t awareness; it&apos;s accessibility and convenience.
                </p>
              </div>
              <div>
                <h4 className="text-[#00ffb7] font-semibold mb-2">Solution Point</h4>
                <p className="text-[#8888aa] text-sm leading-relaxed">
                  The app provides a platform for users to connect with mental health professionals through
                  video calls, overcoming both geographical and time constraints. Flexible scheduling,
                  professional profiles with ratings, and in-app follow-up tools make ongoing care management practical.
                </p>
              </div>
              <div className="w-full h-[280px] rounded-[24px] overflow-hidden border border-white/5 relative group">
                <img src="/images/dr-health/feature-2.png" alt="Telehealth UI" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-transparent to-transparent" />
              </div>
            </div>
            <div className="lg:col-span-7 lg:order-1">
              <div className="p-6 rounded-[32px] bg-[rgba(48,46,97,0.18)] border border-white/5">
                <h4 className="text-white font-bold mb-6">Wireframe Interaction Flow</h4>
                <div className="space-y-4">
                  {[
                    { step: "Navigate to Services", desc: "The user navigates to the mental health services section of the app through a main menu or a dashboard." },
                    { step: "Choose a Professional", desc: "The user is presented with a list of professionals and can view qualifications, expertise, and availability." },
                    { step: "Schedule a Consultation", desc: "The user selects a professional and schedules a consultation using flexible scheduling options." },
                    { step: "Attend the Consultation", desc: "At the scheduled time, the user attends the virtual consultation via a video call within the app." },
                    { step: "Follow-up & Continued Care", desc: "After consultation, the user can schedule follow-up appointments and track progress over time." }
                  ].map((flow, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5">
                      <div className="w-8 h-8 shrink-0 rounded-full bg-[#00ffb7]/10 text-[#00ffb7] flex items-center justify-center font-bold text-xs">{i+1}</div>
                      <div>
                        <strong className="text-white block text-sm mb-1">{flow.step}</strong>
                        <p className="text-[#8888aa] text-xs leading-relaxed">{flow.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: High-Fidelity Design */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto bg-white/[0.02] rounded-[40px] border border-white/5 my-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">High-Fidelity Design; Principles in Practice</h2>
          <p className="text-[#8888aa] text-lg leading-relaxed">
            Each screen was designed with the Gestalt principles, UX laws, and grid system established earlier. The design rationale is documented alongside each screen.
          </p>
        </motion.div>

        <div className="space-y-24">
          {/* Flow A */}
          <div>
            <h3 className="text-2xl font-bold text-[#00ffb7] mb-8 text-center uppercase tracking-widest">Flow A; Motivational Reminders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "01 — Set Fitness Goals", desc: "The screen allows users to set and save their fitness goals. This organized layout helps track progress.", rationale: "Fitts's Law applied to input field sizing. Hick's Law guided the decision to present only three goal categories to reduce decision fatigue." },
                { name: "02 — Motivational Reminders", desc: "Customize motivational reminders to suit personal needs. Ensures consistent reinforcement.", rationale: "Progressive disclosure keeps this screen uncluttered — only essential customization options are visible at first." },
                { name: "03 — Customize Reminders", desc: "Customize and save daily reminders for topics like quotes and health tips at preferred times.", rationale: "Proximity grouping clusters related reminder types together, so users understand what belongs to the same function." },
                { name: "04 — Achievement", desc: "Provides immediate positive reinforcement by congratulating users on reaching goals.", rationale: "Closure principle applied — the pop-up feels complete and celebratory. Two clear CTA options avoid decision paralysis." },
                { name: "05 — Progress Tracker", desc: "Provides a clear overview of fitness progress, including badges, activity graph, and goals.", rationale: "The Golden Ratio proportioning is visible here — creating a natural visual hierarchy. Similarity principle applied through consistent icon styles." }
              ].map((screen, i) => (
                <div key={i} className="bg-[rgba(48,46,97,0.18)] p-6 rounded-3xl border border-white/5 flex flex-col group">
                  <div className="w-full aspect-[9/16] rounded-2xl mb-6 border border-white/5 relative overflow-hidden bg-black/50">
                    <img src="/images/dr-health/feature-1.png" alt={screen.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" style={{ objectPosition: `center ${i * 20}%` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080810] to-transparent opacity-80" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/80 border border-white/20">
                        <i className={`ti ti-device-mobile text-3xl`} />
                      </div>
                    </div>
                  </div>
                  <h4 className="text-white font-bold mb-3">{screen.name}</h4>
                  <p className="text-[#8888aa] text-xs leading-relaxed mb-4 flex-grow">{screen.desc}</p>
                  <div className="bg-[#00ffb7]/10 text-[#00ffb7] p-4 rounded-2xl text-xs leading-relaxed">
                    <strong className="block mb-1 text-white">Design Rationale:</strong>
                    {screen.rationale}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flow B */}
          <div>
            <h3 className="text-2xl font-bold text-[#00ffb7] mb-8 text-center uppercase tracking-widest">Flow B; Healthcare Access</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "01 — Mental Health Services", desc: "Tracks progress in physical activities and provides an overview of achievements to encourage mental health.", rationale: "Continuity principle applied — the layout flows from summary to detail, guiding the user from awareness into action." },
                { name: "02 — Professional Selection", desc: "Displays names, profile pictures, ratings, and available times for healthcare professionals.", rationale: "Proximity and Similarity used together — professional cards are uniformly structured so users can scan and compare efficiently." },
                { name: "03 — Filters", desc: "Offers a streamlined way to find specialists. Select times, filter practitioners based on ratings.", rationale: "Hick's Law applied — filter options are grouped by specialty category rather than presented as a flat list, accelerating decisions." },
                { name: "04 — Appointment Booking", desc: "View available dates and times, select preferred slots, and access info about the doctor.", rationale: "4-point grid ensures calendar elements are proportionally spaced. Fitts's Law applied to slot tap targets." },
                { name: "05 — Virtual Consultation", desc: "Real-time consultations through video calls, plus text conversation feature for ongoing management.", rationale: "Law of Prägnanz kept the interface minimal — only the video feed, mute toggle, and chat panel are visible during the call." },
                { name: "06 — Consultation Summary", desc: "Centralizes educational materials and scheduling for follow-up appointments after a call.", rationale: "Closure principle applied post-consultation — signals a complete interaction and presents the logical next step without forcing it." }
              ].map((screen, i) => (
                <div key={i} className="bg-[rgba(48,46,97,0.18)] p-6 rounded-3xl border border-white/5 flex flex-col group">
                  <div className="w-full aspect-[9/16] rounded-2xl mb-6 border border-white/5 relative overflow-hidden bg-black/50">
                    <img src="/images/dr-health/feature-2.png" alt={screen.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" style={{ objectPosition: `center ${i * 15}%` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080810] to-transparent opacity-80" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/80 border border-white/20">
                        <i className={`ti ti-heart-rate-monitor text-3xl`} />
                      </div>
                    </div>
                  </div>
                  <h4 className="text-white font-bold mb-3">{screen.name}</h4>
                  <p className="text-[#8888aa] text-xs leading-relaxed mb-4 flex-grow">{screen.desc}</p>
                  <div className="bg-[#00ffb7]/10 text-[#00ffb7] p-4 rounded-2xl text-xs leading-relaxed">
                    <strong className="block mb-1 text-white">Design Rationale:</strong>
                    {screen.rationale}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Validation Section */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">User Validation &amp; Iteration</h2>
          <p className="text-[#8888aa] text-lg max-w-2xl mx-auto">
            Direct feedback from moderated usability testing drove the final polish of the experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* What Users Appreciated */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#00ffb7]/20 text-[#00ffb7] flex items-center justify-center text-sm">✓</span>
              What Users Appreciated
            </h3>

            <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-white font-semibold mb-4">On the Progress Tracker (Flow A; Screen 05)</h4>
              <blockquote className="text-[#8888aa] italic border-l-2 border-[#00ffb7] pl-4">
                &quot;The screen has a sleek, modern look that&apos;s easy on the eyes. Finding my achievements,
                points, and badges is effortless, thanks to the intuitive layout. The trophies, badges,
                and points add a fun, rewarding touch, making progress feel exciting. Plus, every
                activity is clearly listed with its time and date, so I always know exactly where I stand.&quot;
              </blockquote>
            </div>

            <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-white font-semibold mb-4">On the Mental Health Services Dashboard (Flow B; Screen 01)</h4>
              <blockquote className="text-[#8888aa] italic border-l-2 border-[#00ffb7] pl-4">
                &quot;The screen is simple and easy to navigate, making it accessible even for those who
                aren&apos;t tech-savvy. The features align well with my health and fitness goals, and it&apos;s
                great to have all this essential information in one place. Plus, being able to share
                progress and update goals directly from this screen keeps me more engaged and motivated
                to stay on track.&quot;
              </blockquote>
            </div>
          </motion.div>

          {/* What Users Flagged for Improvement */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#ff0055]/20 text-[#ff0055] flex items-center justify-center text-sm">!</span>
              What Users Flagged &amp; Iterations
            </h3>

            <div className="space-y-6">
              <div className="p-8 rounded-[32px] bg-[rgba(48,46,97,0.18)] border border-white/5 hover:border-white/10 transition-colors">
                <h4 className="text-white font-bold mb-2">1. Graph Legibility on the Progress Tracker</h4>
                <p className="text-[#8888aa] mb-4 text-sm">
                  The graph showing points earned lacked a legend or contextual labels; users couldn&apos;t interpret it at a glance.
                </p>
                <div className="bg-[#00ffb7]/10 text-[#00ffb7] p-4 rounded-2xl text-sm">
                  <strong className="block mb-1 text-white">Design Response:</strong>
                  A legend and axis labels were added to the progress graph to resolve ambiguity without adding visual clutter.
                </div>
              </div>

              <div className="p-8 rounded-[32px] bg-[rgba(48,46,97,0.18)] border border-white/5 hover:border-white/10 transition-colors">
                <h4 className="text-white font-bold mb-2">2. Goal Customization Depth</h4>
                <p className="text-[#8888aa] mb-4 text-sm">
                  Users wanted the ability to customize the types of goals and activities displayed based on their personal routines; the default set felt too generic.
                </p>
                <div className="bg-[#00ffb7]/10 text-[#00ffb7] p-4 rounded-2xl text-sm">
                  <strong className="block mb-1 text-white">Design Response:</strong>
                  A &quot;Customize Goals&quot; option was surfaced on the Progress Tracker screen, allowing users to add, remove, and reorder activity types.
                </div>
              </div>

              <div className="p-8 rounded-[32px] bg-[rgba(48,46,97,0.18)] border border-white/5 hover:border-white/10 transition-colors">
                <h4 className="text-white font-bold mb-2">3. In-App Goal Notifications</h4>
                <p className="text-[#8888aa] mb-4 text-sm">
                  Adding notifications or reminders for reaching goals and earning points was flagged as a missing engagement layer.
                </p>
                <div className="bg-[#00ffb7]/10 text-[#00ffb7] p-4 rounded-2xl text-sm">
                  <strong className="block mb-1 text-white">Design Response:</strong>
                  Achievement notifications were added as a configurable option within the Motivational Reminders settings; linked to the existing customization flow.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <CTAFooter />
    </main>
  );
}
