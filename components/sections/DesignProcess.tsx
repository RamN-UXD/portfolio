"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

export default function DesignProcess() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const steps = [
    {
      id: "01",
      title: "Discover",
      desc: "Before opening Figma, I go into the domain. Stakeholder interviews, competitor teardowns, secondary research, and business context; so that every design decision that follows is grounded in reality, not assumption.",
      color: "#0066ff",
    },
    {
      id: "02",
      title: "Define",
      desc: "Personas, journey maps, and validated problem statements tied to business cases. The output of this phase isn&apos;t wireframes; it&apos;s a shared, written understanding of what problem is actually worth solving.",
      color: "#cc63ff",
    },
    {
      id: "03",
      title: "Architect",
      desc: "Information architecture, navigation logic, and interaction models; established before any visual decisions are made. Structure determines usability. No amount of visual polish fixes a broken IA.",
      color: "#00f2ff",
    },
    {
      id: "04",
      title: "Design",
      desc: "Wireframes into high-fidelity screens with complete interaction states; default, enabled, configured, error, and edge cases. Every screen is designed for the developer who has to build it, not just the reviewer who has to approve it.",
      color: "#ff6b00",
    },
    {
      id: "05",
      title: "Handoff",
      desc: "Annotated specs, CRUD documentation, component-level notes, and design rationale; packaged so the team has everything they need to build it right the first time. Design doesn&apos;t end at Figma export.",
      color: "#00ff66",
    },
  ];

  return (
    <section ref={containerRef} className="relative h-[500vh] px-6 md:px-16">
      <div className="sticky top-0 h-screen flex flex-col justify-center max-w-[1400px] mx-auto overflow-hidden">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 h-full py-16 lg:py-24">
          {/* Left Column: Fixed Labeling */}
          <div className="flex-1 w-full text-left">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#0066ff] text-[12px] font-bold tracking-[0.2em] mb-4 uppercase"
            >
              Design Process
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#fafafa] leading-tight mb-8">
              How I Work <br />
              <span className="text-[#8888aa] text-2xl md:text-3xl font-medium mt-4 block">
                From Ambiguity to <br />
                a Product That Ships
              </span>
            </h2>
            <div className="relative w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                style={{ scaleX: scrollYProgress }}
                className="absolute inset-0 bg-[#0066ff] origin-left"
              />
            </div>
          </div>

          {/* Right Column: Stacking Cards */}
          <div className="flex-1 w-full relative h-[420px] md:h-[550px] flex items-center justify-center">
            {steps.map((step, idx) => (
              <ProcessCard 
                key={idx} 
                step={step} 
                index={idx} 
                total={steps.length} 
                progress={scrollYProgress} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function ProcessCard({ 
  step, 
  index, 
  total, 
  progress 
}: { 
  step: { 
    id: string; 
    title: string; 
    desc: string; 
    color: string 
  }; 
  index: number; 
  total: number; 
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  
  const opacity = useTransform(progress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, start + 0.1], [0.8, 1]);
  const y = useTransform(progress, [start, start + 0.1], [100, 0]);
  const rotate = useTransform(progress, [start, end], [idxToRotation(index), idxToRotation(index) + 5]);

  function idxToRotation(i: number) {
    const rotations = [-4, 3, -2, 4, -3];
    return rotations[i % rotations.length];
  }

  return (
    <motion.div
      style={{ opacity, scale, y, rotate }}
      // Fixed: Converted to 'h-auto min-h-[460px] md:min-h-[520px]' with 'text-sm md:text-base' for luxurious spacing of long text blocks.
      className="absolute w-full max-w-md bg-[rgba(48,46,97,0.4)] backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-12 flex flex-col justify-between h-auto min-h-[440px] md:min-h-[500px]"
    >
      <div className="flex justify-between items-start">
        <span className="text-5xl md:text-7xl font-black text-white/10">{step.id}</span>
        <div 
          className="w-12 h-12 rounded-full blur-xl opacity-50"
          style={{ backgroundColor: step.color }}
        />
      </div>
      <div className="my-auto flex flex-col gap-4">
        <h3 className="text-2xl md:text-4xl font-bold text-white leading-none">
          {step.title}
        </h3>
        <p className="text-[#8888aa] text-sm md:text-base leading-relaxed">
          {step.desc}
        </p>
      </div>
      <div className="h-1.5 w-16 rounded-full mt-4" style={{ backgroundColor: step.color }} />
    </motion.div>
  );
}
