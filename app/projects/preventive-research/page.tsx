"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import CTAFooter from "../../../components/sections/CTAFooter";
import CustomCursor from "../../../components/CustomCursor";

const customEase = [0.16, 1, 0.3, 1];

const detailedPersonasData = [
  {
    num: 'Persona 1',
    title: 'Determined Urban Homemaker',
    participant: 'Sivaprial',
    quote: 'I want to eat healthy, but my family doesn\'t always eat what I want to eat. By the time I finish all my work at home, I have no energy left for myself.',
    meta: [
      { k: 'Age Range', v: '46–55' },
      { k: 'Gender', v: 'Female' },
      { k: 'Income', v: 'Below ₹30,000/month' },
      { k: 'Health Budget', v: '₹501–₹1,000/month' },
      { k: 'Monthly Health Spend', v: '₹1,001–₹5,000/month' },
      { k: 'Residence', v: 'Single-family home, urban India' },
      { k: 'Life Stage', v: 'Active homemaker; primary caregiver for family' }
    ],
    who: 'In the middle of managing a household, Sivaprial carries a quiet determination to take care of her own health — but she\'s doing it almost entirely alone. Her health goals regularly clash with her family\'s food preferences, her income limits what she can spend, and her days leave little room for herself by the time everyone else\'s needs are met. She relies on park walks for physical activity because structured fitness programs feel out of reach — not because of laziness, but because of cost and a lack of awareness about what\'s even available to her.<br/><br/>She is one of the most motivated users in this research — and one of the most underserved.',
    problems: [
      {
        title: 'Nutritional Misalignment within Household',
        desc: 'She wants to eat better, but cooking separately for herself while managing a family\'s meals is neither practical nor affordable. Her dietary goals are compromised daily — not by personal weakness, but by family circumstances that the current market of health apps completely ignores.',
        frustrations: 'Dietary conflicts at home, compromised nutrition, healthcare struggles',
        motivations: 'Determined to pursue her health goals, aware of preventive healthcare importance, taking gym initiative despite barriers'
      },
      {
        title: 'Time Management for Physical Activity',
        desc: 'Her day is structured around others\' needs. By the time household responsibilities are met, the motivation and energy for exercise has significantly depleted. Her current solution — walking in a nearby park — is a workaround, not a plan.',
        frustrations: 'Time constraints, inconsistent routine, healthcare struggles',
        motivations: 'Recognises importance of time management, committed to gym initiative'
      },
      {
        title: 'Lack of Awareness and Support for Fitness Programs',
        desc: 'She doesn\'t know what structured fitness programs exist, what they cost, or whether any of them are realistic for someone in her situation. The gap is not motivation — it is information and accessibility.',
        frustrations: 'Time constraints, inconsistent routine, healthcare struggles',
        motivations: 'Time management awareness, self-guided fitness interest'
      }
    ],
    achieve: 'She wants to maintain a healthier lifestyle by managing her diet and fitness goals despite family constraints — through personalized diet recommendations that work around her household, family meal planning that doesn\'t force her to cook two separate meals, and progress tracking that fits her budget and time.<br/><br/>She also wants to access healthcare services on her own terms — convenient scheduling, virtual consultations when physical visits aren\'t practical, and guidance that acknowledges she\'s not starting from zero.',
    business: 'Sivaprial represents the intersection of two validated problems: Higher Healthcare Expenses (treating advanced disease costs far more than prevention) and Unhealthy Habits (fast-paced lifestyles compounded by conflicting advice). She is a user who will benefit enormously from preventive intervention — and who the current market has almost entirely failed to design for.',
    implications: [
      'Family meal planning must be a first-class feature — not a premium add-on. Her dietary goal cannot be separated from her family context.',
      'Cost-sensitive design throughout: every feature must be achievable on a ₹501–₹1,000/month health budget. No paywalled essentials.',
      'Fitness recommendations must be accessible without a gym membership — home-based, park-based, zero-equipment options.',
      'Content must be in plain language. She is not consuming health content through professional channels.',
      'Trust before tools: she needs to feel that the product understands her specific situation before she will engage with any feature.'
    ],
    features: ['Family Meal Planner', 'Nutrition Tracker', 'Healthcare Services Directory', 'Virtual Workout Classes', 'Preventive Health Reminders', 'Smart Schedule', 'Goal Setting & Progress Tracking', 'Urban Health Tips', 'Routine Reminder', 'Time Management', 'Rewards', 'Virtual Gym', 'Self-Guided Workout Plans', 'Health Education', 'Healthcare Consultation'],
    flows: 'Progressive Disclosure Flow · Hub-and-Spoke Flow',
    metrics: [
      { type: 'Business', val: 'Increase in adoption of health products by users in the ₹30K-and-below income bracket' },
      { type: 'Product', val: 'Family meal plan feature engagement rate; 30-day retention for users in this segment' },
      { type: 'Marketing', val: 'Conversion rate of campaigns addressing household-first health barriers' }
    ]
  },
  {
    num: 'Persona 2',
    title: 'Health-Conscious Urban Senior',
    participant: 'Vasudevan Kannaiyan',
    quote: 'I regret not taking care of my health when I was younger. Now I\'m trying to learn from my mistakes — but I don\'t always know where to start.',
    meta: [
      { k: 'Age Range', v: '56–65' },
      { k: 'Gender', v: 'Male' },
      { k: 'Income', v: '₹75,001–₹1,00,000/month' },
      { k: 'Health Budget', v: '₹2,001–₹5,000/month' },
      { k: 'Monthly Health Spend', v: '₹1,001–₹5,000/month' },
      { k: 'Residence', v: 'Single-family home, urban India' },
      { k: 'Life Stage', v: 'Late career or retired; post-health-scare, now proactive' }
    ],
    who: 'Vasudevan spent most of his working life deprioritising his health. He knew it. He just kept waiting for the right time. That time came when it was no longer optional — a health event forced him to face the consequences of years of reactive living. Now he is genuinely motivated to change. He incorporates yoga and walking into his routine. He monitors his health through regular tests. He adjusts his diet based on the results. But he\'s doing all of this largely by trial and error, guided by whatever information he encounters rather than a structured, trustworthy system.<br/><br/>His barriers are not financial. They are not motivational. They are navigational. He does not know what to do first, what to prioritise, or who to trust.',
    problems: [
      {
        title: 'Poor Dietary Habits driven by Time and Habit',
        desc: 'Skipping breakfast is the entry point — but it signals a broader pattern. Decades of deprioritising structured nutrition have left him without the habits or systems to course-correct easily. He understands the importance now. He struggles to implement it consistently, especially on days when his schedule disrupts his routine (social gatherings, travel, irregular commitments).',
        frustrations: 'Skipping breakfast, regret over past health neglect, dietary restrictions',
        motivations: 'Learning from past mistakes, actively striving for better health'
      }
    ],
    achieve: 'He wants to maintain a healthier lifestyle through consistent dietary habits — with personalized reminders that meet him where he is rather than overwhelming him. He needs progress tracking that shows him the cumulative impact of small improvements, a personalized diet plan that accounts for his restrictions, and a healthcare navigator that helps him understand what tests, checkups, and services he should actually be engaging with.<br/><br/>He is not looking for motivation. He has that. He is looking for a clear, trustworthy starting point and a system that helps him stay consistent.',
    business: 'Vasudevan maps directly to the Higher Healthcare Expenses problem: the cost of treating advanced preventable disease versus the cost of early, consistent prevention. He is already spending ₹1,001–₹5,000/month on reactive healthcare. A product that shifts even part of that spend toward preventive behavior generates measurable savings — for him personally and for the healthcare system he relies on.',
    implications: [
      'First interaction must not be a dashboard. It must be one clear, gentle action — something he can do in the next five minutes.',
      'Breakfast reminder is the anchor feature for this persona. Not because breakfast is the whole solution, but because it is the behavioral entry point — a small daily win that builds the foundation for larger habit change.',
      'Progress must be visible over time. He needs to see that the last 30 days of consistent behavior have made a measurable difference. This is what sustains him through the setbacks.',
      'Healthcare Navigator must be simple enough that he can understand it without a medical background. Dense clinical language will cause him to disengage.',
      'Trust is built through consistency, not sophistication. No gamification, no viral features. Calm, reliable, clear.'
    ],
    features: ['Breakfast Reminder', 'Health History Tracker', 'Personalized Diet Plan', 'Health Improvement Tips', 'Progress Tracker', 'Healthcare Navigator'],
    flows: 'Progressive Disclosure Flow · Hub-and-Spoke Flow',
    metrics: [
      { type: 'Business', val: 'Reduction in out-of-pocket reactive care spend among users in this age and income segment' },
      { type: 'Product', val: '7-day breakfast logging consistency rate; 30-day diet plan adherence; health test reminder completion rate' },
      { type: 'Marketing', val: 'Conversion rate of campaigns addressing regret-to-action behavioral motivation' }
    ]
  },
  {
    num: 'Persona 3',
    title: 'The Struggling Urbanite',
    participant: 'Raghul',
    quote: 'I know I should take care of my health, but between work, budgeting, and everything else — it always feels like health is the thing I\'ll get to later.',
    meta: [
      { k: 'Age Range', v: '26–35' },
      { k: 'Gender', v: 'Male' },
      { k: 'Income', v: '₹30,000–₹50,000/month' },
      { k: 'Health Budget', v: '₹501–₹1,000/month' },
      { k: 'Monthly Health Spend', v: 'Below ₹1,000/month' },
      { k: 'Residence', v: 'Single-family home, urban India' },
      { k: 'Life Stage', v: 'Early-to-mid career; balancing financial pressure, work demands, and health intent' }
    ],
    who: 'Raghul is not indifferent to his health. He thinks about it constantly — and then deprioritises it constantly. The gap between intention and action for him is not motivational. It is structural. His income places him above poverty but below the threshold where health feels financially comfortable to prioritise. Every rupee is accounted for. Preventive healthcare — when it means clinic visits, lab tests, or paid fitness programs — sits in direct competition with rent, food, and other non-negotiable expenses.<br/><br/>On top of the money pressure, the system itself feels inaccessible. Long wait times at clinics. Confusing pricing for healthcare services. No clear sense of what\'s covered, what\'s not, or where to even start. He has tried to exercise consistently and failed — not from laziness, but because his motivation fluctuates and he has no structured plan to fall back on when it drops.<br/><br/>He is the urban Indian who the preventive health system needs to reach most urgently — and who it currently reaches least effectively.',
    problems: [
      {
        title: 'Time Constraints and Fluctuating Motivation',
        desc: 'The challenge isn\'t finding an hour to exercise. It\'s that when motivation dips — as it will, for everyone — he has no system that carries him through. He also has no one helping him find the time slots in his day where self-care is genuinely feasible.',
        frustrations: 'Time constraints, stressful budgeting, fluctuating motivation levels',
        motivations: 'Committed to balanced priorities despite pressures',
        neutral: 'Aware of self-care need; recognises the demands of modern life'
      },
      {
        title: 'Accessibility Barrier to Preventive Care',
        desc: 'He perceives — correctly — that affordable, accessible preventive healthcare is hard to find. Long wait times, unclear pricing, and limited affordable options create a barrier that causes him to delay or abandon healthcare engagement entirely. This is where late diagnosis begins: not in a doctor\'s office, but in the decision not to go.',
        frustrations: 'Limited affordable healthcare options, long wait times, perceived healthcare hurdles, preventive care concerns',
        motivations: 'Health-first mindset when barriers are removed; committed to balanced priorities',
        neutral: 'Aware of self-care need; navigating modern life demands'
      }
    ],
    achieve: 'He wants to integrate health into his life without it costing more money or time than he actually has. Specifically: an app that finds the realistic slots in his schedule for exercise and self-care, gives him budget-friendly health and nutrition options, helps him navigate the healthcare system without getting lost or overcharged, sends reminders that keep him consistent on low-motivation days, and shows him his progress so the effort feels worthwhile.<br/><br/>He also needs cost transparency — the ability to compare healthcare service costs so he can make decisions with confidence rather than anxiety.',
    business: 'Raghul maps to two validated root causes simultaneously: Higher Healthcare Expenses (reactive treatment is the inevitable outcome if prevention is never accessible) and Late Diagnosis and Treatment (decentralised medical information and no tracking tools mean conditions worsen silently). He is the user who cannot afford to get sick — and who is most likely to if preventive design doesn\'t reach him.',
    implications: [
      'Every feature must work within a ₹501–₹1,000/month health budget. Budget-conscious design is not a feature — it is the foundation.',
      'Smart scheduling must be genuinely intelligent: not \'set your own workout time\' but \'here is when in your existing schedule there is realistic space.\' The product does the thinking for him.',
      'Motivation architecture matters for this persona more than any other. Motivational reminders, micro-wins, and streaks carry him through low-motivation periods when willpower alone would fail.',
      'Cost Comparison for healthcare services is a table-stakes feature — not a nice-to-have. For Raghul, not knowing what something costs means not going at all.',
      'Healthcare Navigator must simplify the system, not explain it. He doesn\'t need to understand how the system works. He needs to know what to do next and where to go.',
      'Reduce friction at every step. For this persona, any form that takes more than 60 seconds is a form he will abandon.'
    ],
    features: ['Smart Schedule', 'Budget-Friendly Wellness Tips', 'Motivation Booster', 'Priority Planner', 'Self-Care Reminder', 'Stress Management Techniques', 'Virtual Consultations', 'Cost Comparison', 'Healthcare Navigator', 'Preventive Care Reminders', 'Personalized Health Dashboard', 'Health and Lifestyle Integration', 'Self-Care Tips and Resources', 'Flexible Appointment Scheduling'],
    flows: 'Progressive Disclosure Flow · Hub-and-Spoke Flow',
    metrics: [
      { type: 'Business', val: 'Increase in utilisation of preventive healthcare services among ₹30K–₹50K income segment; improvement in brand accessibility perception' },
      { type: 'Product', val: 'Smart Schedule adoption rate; Cost Comparison feature engagement; 14-day self-care reminder streak rate' },
      { type: 'Marketing', val: 'Conversion rate of accessibility-first campaigns; engagement rate on budget-conscious health content' }
    ]
  }
];

const personaSummaryTable = [
  { persona: 'Determined Urban Homemaker', barrier: 'Family context + cost', motivation: 'High', income: 'Below ₹30K/month', root: 'Unhealthy Habits + High Costs', priority: 'Family-first, cost-sensitive', critical: 'Family Meal Planner' },
  { persona: 'Health-Conscious Urban Senior', barrier: 'Navigation + habit', motivation: 'High', income: '₹75K–₹1L/month', root: 'High Costs', priority: 'Trust-first, one step at a time', critical: 'Breakfast Reminder' },
  { persona: 'The Struggling Urbanite', barrier: 'Affordability + system access', motivation: 'High — but fragile', income: '₹30K–₹50K/month', root: 'High Costs + Late Diagnosis', priority: 'Budget-first, friction-zero', critical: 'Smart Schedule + Cost Comparison' }
];
export default function PreventiveResearchCaseStudy() {
  const [activePersona, setActivePersona] = useState(0);

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: customEase }}
              className="bg-[#0c0c16] border border-white/5 p-8 md:p-10 rounded-[32px] hover:border-white/10 transition-colors group flex flex-col h-full shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 md:p-8 text-6xl font-black text-white/5 group-hover:text-[#00ffd1]/10 transition-colors pointer-events-none select-none">{goal.id}</div>
              <h3 className="text-2xl font-bold text-white mb-8 group-hover:text-[#00ffd1] transition-colors mt-8 relative z-10 pr-8">{goal.title}</h3>
              
              <div className="space-y-6 flex-1 flex flex-col relative z-10">
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-widest text-[#8888aa] font-bold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#cc63ff]"></span> Root Cause
                  </div>
                  <p className="text-sm text-[#fafafa] leading-relaxed">{goal.root}</p>
                </div>
                
                <div className="flex-1 border-t border-white/5 pt-6 mt-6">
                  <div className="text-[10px] uppercase tracking-widest text-[#8888aa] font-bold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white/20"></span> Design Direction
                  </div>
                  <div className="text-sm text-white font-medium leading-relaxed">{goal.direction}</div>
                </div>
                
                <div className="mt-auto pt-6">
                  <div className="text-[10px] uppercase tracking-widest text-[#00ffd1] font-bold mb-3 flex items-center gap-2">
                    <i className="ti ti-check text-[#00ffd1]" /> Success Signal
                  </div>
                  <div className="text-sm text-[#00ffd1] font-bold bg-[#00ffd1]/10 p-4 rounded-2xl border border-[#00ffd1]/20">{goal.signal}</div>
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
          11. PERSONAS — Detailed Research Profiles
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto border-t border-white/5 my-12">
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <div className="text-[#00ffd1] text-tag-1 mb-4 flex justify-center items-center gap-2">
            <i className="ti ti-users text-xl" /> Target Audience
          </div>
          <h2 className="text-h2 text-white mb-6">Who I Designed For — Research-Derived Personas</h2>
          <p className="text-[#8888aa] text-lg leading-relaxed">
            Each persona below was constructed directly from interview participants and survey respondents — not invented archetypes. The demographics, problems, goals, and frustrations are sourced from real people who took part in this research. Names used are those of the actual research participants.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {detailedPersonasData.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setActivePersona(idx)}
              className={`px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 border ${
                activePersona === idx 
                  ? 'bg-[#cc63ff] text-white border-[#cc63ff] shadow-[0_0_30px_rgba(204,99,255,0.3)]'
                  : 'bg-white/[0.02] text-[#8888aa] border-white/5 hover:bg-white/5 hover:text-white'
              }`}
            >
              {p.num}: {p.title}
            </button>
          ))}
        </div>

        {/* Active Persona Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activePersona}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: customEase }}
              className="bg-[#0c0c16] border border-white/5 rounded-[40px] overflow-hidden shadow-2xl shadow-black/50"
            >
              {/* Header block */}
              <div className="bg-[#080810] p-8 md:p-16 border-b border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#cc63ff]/5 to-transparent pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                  <div className="w-full md:w-1/3">
                    <div className="text-[#00ffd1] text-xs font-bold uppercase tracking-wider mb-2">{detailedPersonasData[activePersona].num}</div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{detailedPersonasData[activePersona].title}</h3>
                    <div className="text-sm text-[#8888aa] bg-white/[0.02] p-3 rounded-lg inline-block border border-white/5">
                      Based on: <strong className="text-white">{detailedPersonasData[activePersona].participant}</strong>
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed italic border-l-4 border-[#cc63ff] pl-6 md:pl-8">
                      &ldquo;{detailedPersonasData[activePersona].quote}&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-16 grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16">
                
                {/* Left Column: Demographics & Core Problems */}
                <div className="xl:col-span-5 space-y-12">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                      <i className="ti ti-id text-[#cc63ff]" /> Demographics & Profile
                    </h4>
                    <div className="bg-white/[0.02] rounded-2xl border border-white/5 overflow-hidden">
                      {detailedPersonasData[activePersona].meta.map((m, i) => (
                        <div key={i} className="flex flex-col sm:flex-row sm:justify-between p-4 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                          <span className="text-[#8888aa] text-sm w-full sm:w-1/2 mb-1 sm:mb-0">{m.k}</span>
                          <span className="text-white font-medium text-sm w-full sm:w-1/2 sm:text-right">{m.v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                      <i className="ti ti-alert-triangle text-[#cc63ff]" /> Core Problems
                    </h4>
                    <div className="space-y-6">
                      {detailedPersonasData[activePersona].problems.map((prob: { title: string; desc: string; frustrations: string; motivations: string; neutral?: string }, i) => (
                        <div key={i} className="bg-white/[0.02] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                          <h5 className="text-white font-bold mb-3">{i + 1}. {prob.title}</h5>
                          <p className="text-[#8888aa] text-sm leading-relaxed mb-4">{prob.desc}</p>
                          <div className="space-y-2 text-xs border-t border-white/10 pt-4">
                            <div className="flex gap-2">
                              <span className="text-[#ff4d4d] font-bold uppercase tracking-wider w-24 shrink-0 mt-0.5">Frustrations</span>
                              <span className="text-[#dcdcaa] leading-relaxed">{prob.frustrations}</span>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-[#00ffd1] font-bold uppercase tracking-wider w-24 shrink-0 mt-0.5">Motivations</span>
                              <span className="text-[#aaddcc] leading-relaxed">{prob.motivations}</span>
                            </div>
                            {prob.neutral && (
                              <div className="flex gap-2">
                                <span className="text-[#8888aa] font-bold uppercase tracking-wider w-24 shrink-0 mt-0.5">Neutral</span>
                                <span className="text-[#8888aa] leading-relaxed">{prob.neutral}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Narrative & Business */}
                <div className="xl:col-span-7 space-y-12">
                  <div>
                    <h4 className="text-sm font-bold text-[#8888aa] uppercase tracking-widest mb-4">Who {detailedPersonasData[activePersona].meta.find(m => m.k === 'Gender')?.v === 'Male' ? 'He' : 'She'} Is</h4>
                    <p className="text-base text-white/90 leading-relaxed bg-white/[0.01] p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors" dangerouslySetInnerHTML={{ __html: detailedPersonasData[activePersona].who }} />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[#8888aa] uppercase tracking-widest mb-4">What {detailedPersonasData[activePersona].meta.find(m => m.k === 'Gender')?.v === 'Male' ? 'He\'s' : 'She\'s'} Trying to Achieve</h4>
                    <p className="text-base text-[#00ffd1]/90 leading-relaxed bg-[#00ffd1]/5 p-6 rounded-2xl border border-[#00ffd1]/20 border-l-4 border-l-[#00ffd1] hover:bg-[#00ffd1]/10 transition-colors" dangerouslySetInnerHTML={{ __html: detailedPersonasData[activePersona].achieve }} />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[#8888aa] uppercase tracking-widest mb-4">Business Case</h4>
                    <p className="text-base text-white/90 leading-relaxed bg-white/[0.01] p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors" dangerouslySetInnerHTML={{ __html: detailedPersonasData[activePersona].business }} />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[#8888aa] uppercase tracking-widest mb-4">Design Implications</h4>
                    <ul className="space-y-3 bg-white/[0.01] p-4 rounded-2xl border border-white/5">
                      {detailedPersonasData[activePersona].implications.map((imp, i) => (
                        <li key={i} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/[0.03] transition-colors">
                          <i className="ti ti-bulb text-[#cc63ff] mt-1 shrink-0 text-xl" />
                          <span className="text-sm text-white/90 leading-relaxed">{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[#8888aa] uppercase tracking-widest mb-4">Features Designed for {detailedPersonasData[activePersona].meta.find(m => m.k === 'Gender')?.v === 'Male' ? 'Him' : 'Her'}</h4>
                    <div className="flex flex-wrap gap-2 mb-6 p-6 bg-white/[0.01] rounded-2xl border border-white/5">
                      {detailedPersonasData[activePersona].features.map((feat, i) => (
                        <span key={i} className="text-xs font-medium text-white bg-white/5 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 transition-colors">
                          {feat}
                        </span>
                      ))}
                    </div>
                    
                    <h4 className="text-sm font-bold text-[#8888aa] uppercase tracking-widest mb-4">Solution Flows & Metrics</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 bg-white/[0.01] rounded-2xl border border-white/5">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          <i className="ti ti-route text-[#8888aa]" />
                        </div>
                        <div className="text-sm">
                          <span className="text-[#8888aa]">Solution Flows: </span>
                          <strong className="text-white font-medium">{detailedPersonasData[activePersona].flows}</strong>
                        </div>
                      </div>

                      <div className="bg-[#cc63ff]/5 rounded-2xl border border-[#cc63ff]/20 overflow-hidden">
                        {detailedPersonasData[activePersona].metrics.map((m, i) => (
                          <div key={i} className="flex flex-col sm:flex-row p-4 border-b border-[#cc63ff]/10 last:border-0 hover:bg-[#cc63ff]/10 transition-colors">
                            <span className="text-[#cc63ff] font-bold uppercase tracking-wider text-xs w-full sm:w-1/4 mb-1 sm:mb-0 shrink-0 mt-0.5">{m.type}</span>
                            <span className="text-white text-sm leading-relaxed">{m.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Persona Comparison Table */}

        <div className="mt-32">
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">What These Three Personas Tell Us Together</h3>
            <p className="text-[#8888aa] text-sm max-w-3xl mx-auto leading-relaxed">
              Together, these three personas cover three income brackets, two genders, three distinct life stages, and three fundamentally different barriers to preventive healthcare. No two of them need the same solution — which is precisely why they were identified as distinct research profiles rather than generalised user types.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/5 bg-[#0c0c16]">
            <table className="w-full text-left text-sm min-w-[1000px]">
              <thead className="bg-[#cc63ff]/10 border-b border-[#cc63ff]/20">
                <tr>
                  <th className="p-6 text-white font-semibold">Persona</th>
                  <th className="p-6 text-[#cc63ff] font-semibold">Primary Barrier</th>
                  <th className="p-6 text-[#8888aa] font-semibold">Motivation Level</th>
                  <th className="p-6 text-[#8888aa] font-semibold">Income</th>
                  <th className="p-6 text-[#8888aa] font-semibold">Root Cause</th>
                  <th className="p-6 text-white font-semibold">Design Priority</th>
                  <th className="p-6 text-[#00ffd1] font-semibold">Most Critical Feature</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {personaSummaryTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 font-bold text-white whitespace-nowrap">{row.persona}</td>
                    <td className="p-6 text-[#cc63ff] font-medium">{row.barrier}</td>
                    <td className="p-6 text-white/80">{row.motivation}</td>
                    <td className="p-6 text-[#8888aa] whitespace-nowrap">{row.income}</td>
                    <td className="p-6 text-[#8888aa]">{row.root}</td>
                    <td className="p-6 text-white font-medium">{row.priority}</td>
                    <td className="p-6 text-[#00ffd1] font-medium">{row.critical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center text-sm text-[#00ffd1] font-medium flex items-center justify-center gap-2">
            <i className="ti ti-check text-lg" /> The 114 solutions in this project trace back, in some form, to one or more of these three people.
          </div>
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
