"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, useSpring, MotionValue } from "framer-motion";

export default function OverlayExperiment({ progress }: { progress?: MotionValue<number> }) {
  const internalRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: internalProgress } = useScroll({ target: internalRef, offset: ["start start", "end end"] });
  const activeProgress = progress || internalProgress;
  
  const smoothProgress = useSpring(activeProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Map progress to 0-0.85 range for the text layers
  const textProgress = useTransform(smoothProgress, [0, 0.85], [0, 1]);

  // Scroll Indicator Fade Out
  const indicatorOpacity = useTransform(textProgress, [0, 0.02], [1, 0]);

  /* ── Section 1 — Cinematic Slide-In Name Reveal ────────────────── */
  const name1Opacity = useTransform(textProgress, [0.0, 0.08, 0.20, 0.28], [0, 1, 1, 0]);
  const name1Y = useTransform(textProgress, [0.0, 0.15, 0.20, 0.28], ["105%", "0%", "0%", "-105%"]);

  const name2Opacity = useTransform(textProgress, [0.04, 0.12, 0.20, 0.28], [0, 1, 1, 0]);
  const name2Y = useTransform(textProgress, [0.04, 0.19, 0.20, 0.28], ["105%", "0%", "0%", "-105%"]);

  /* ── Section 2 — Value Prop (Centered with perfect line height) ── */
  const opacity2 = useTransform(textProgress, [0.35, 0.43, 0.57, 0.65], [0, 1, 1, 0]);
  const y2       = useTransform(textProgress, [0.35, 0.65], [50, -30]);

  /* ── Section 3 — Specialization + CTAs (Centered) ─────────────── */
  const opacity3 = useTransform(textProgress, [0.68, 0.76], [0, 1]);
  const y3       = useTransform(textProgress, [0.68, 0.80], [50, 0]);

  /* ── Geometric Block Wipe (0.85 - 1.0) ─────────────────────────── */
  const wipeProgress = useTransform(smoothProgress, [0.85, 1.0], [0, 1]);
  
  const blockCount = 12;
  const blocks = Array.from({ length: blockCount });

  return (
    <div ref={internalRef} className="absolute inset-0 z-10 pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-6 md:px-16 overflow-hidden">

        {/* ── Section 1: Cinematic Split Name Slide-In Reveal ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="flex flex-col items-center gap-1 md:gap-3 overflow-hidden py-4">
            
            {/* First Line Container */}
            <div className="overflow-hidden py-1">
              <motion.h1
                style={{
                  opacity: name1Opacity,
                  y: name1Y,
                }}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[#fafafa] leading-[1.05]"
              >
                Ramamoorthy
              </motion.h1>
            </div>

            {/* Second Line Container */}
            <div className="overflow-hidden py-1">
              <motion.h2
                style={{
                  opacity: name2Opacity,
                  y: name2Y,
                }}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[#0066ff] leading-[1.05]"
              >
                Narayanan
              </motion.h2>
            </div>

          </div>
        </div>

        {/* ── Section 2: Value Prop (Left-Aligned, 2-Line Split, No Tag) ── */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center text-left px-6 md:px-16"
        >
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.18] lg:leading-[1.18] text-[#fafafa] tracking-tight">
              <span>Senior UX Designer &amp; Product Specialist</span>
              <br className="hidden sm:inline" />
              <span className="text-[#0066ff] block sm:inline"> for Complex Systems</span>
            </h2>
          </div>
        </motion.div>

        {/* ── Section 3: Specialization + CTAs (Left-Aligned) ── */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-start justify-center text-left px-6 md:px-16"
        >
          <div className="max-w-2xl">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed md:leading-normal lg:leading-[1.5] text-[#fafafa]/85 mb-8 md:mb-10">
              Owning products end-to-end; research, IA, and high-fidelity design through PRDs, roadmap input, and shipped delivery; across enterprise SaaS, B2B/B2C marketplaces, and sustainability platforms.
            </p>
            <div className="flex flex-col sm:flex-row items-start justify-start gap-4 pointer-events-auto w-full sm:w-auto">
              <a
                href="#showcase-reel-experiment"
                data-cursor="magnetic"
                className="flex justify-center items-center px-8 md:px-10 py-3.5 md:py-4 bg-[#0066ff] text-white rounded-lg font-medium text-base glow-btn-primary w-full sm:w-auto transition-transform duration-300 hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="mailto:moorthyr06@gmail.com"
                data-cursor="magnetic"
                className="flex justify-center items-center px-8 md:px-10 py-3.5 md:py-4 border border-white/40 sm:border-white/15 bg-white/5 sm:bg-transparent text-white rounded-lg font-medium text-base glow-btn-secondary w-full sm:w-auto transition-transform duration-300 hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Scroll Indicator (Fades out immediately on scroll) ── */}
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
        >
          <div className="w-[26px] h-[40px] rounded-[14px] border-2 border-white/20 flex justify-center items-start pt-[6px]">
             <motion.div 
               animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               className="w-[4px] h-[6px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.6)]"
             />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#8888aa] font-bold">Scroll</span>
        </motion.div>

        {/* ── Geometric Block Wipe (Bottom to Top) ── */}
        <div className="absolute inset-0 flex pointer-events-none z-30">
          {blocks.map((_, i) => (
            <WipeBlock key={i} index={i} progress={wipeProgress} />
          ))}
        </div>

      </div>
    </div>
  );
}

function WipeBlock({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const start = index * 0.05;
  const end = Math.min(start + 0.45, 1);
  const blockScaleY = useTransform(progress, [start, end], [0, 1]);

  return (
    <motion.div
      style={{
        scaleY: blockScaleY,
        transformOrigin: "bottom",
      }}
      className="flex-1 h-full bg-[#080810]"
    />
  );
}
