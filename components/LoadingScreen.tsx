"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<1 | 2 | 3>(1);
  const progress = useMotionValue(0);
  const progressWidth = useTransform(progress, (p) => `${p}%`);

  const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  // Counter display
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      setDisplayCount(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [progress]);

  // Manual linear interpolation for the progress bar (avoids framer animate() API issues)
  const animateProgress = useCallback(() => {
    const duration = 1600; // 1.6s in ms
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      // Cubic bezier approximation for custom ease
      const eased = 1 - Math.pow(1 - t, 3);
      progress.set(eased * 100);

      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        setPhase(3);
      }
    };
    requestAnimationFrame(tick);
  }, [progress]);

  useEffect(() => {
    // Phase 1 (0-0.8s) -> Phase 2
    const phase2Timer = setTimeout(() => {
      setPhase(2);
      animateProgress();
    }, 800);

    // Phase 3 ends at 3.2s -> fire onComplete
    const exitTimer = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => {
      clearTimeout(phase2Timer);
      clearTimeout(exitTimer);
    };
  }, [onComplete, animateProgress]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#080810] flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: customEase }}
    >
      <div className="flex flex-col items-center">
        {/* Monogram */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: phase === 3 ? 1.4 : 1,
            opacity: phase === 3 ? 0 : 1,
          }}
          transition={{ duration: phase === 3 ? 0.4 : 0.8, ease: customEase }}
          className="italic text-6xl text-[#fafafa] mb-8"
        >
          RN
        </motion.div>

        {/* Progress Bar & Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 2 && phase < 3 ? 1 : 0 }}
          transition={{ duration: 0.4, ease: customEase }}
          className="w-48 flex flex-col items-center"
        >
          {/* Bar container */}
          <div className="w-full h-[1px] bg-[rgba(255,255,255,0.08)] mb-2 relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 bottom-0"
              style={{
                width: progressWidth,
                background: "linear-gradient(90deg, #0066ff, #cc63ff)",
              }}
            />
          </div>
          {/* Counter */}
          <div
            className="text-[#8888aa]"
            style={{ fontSize: "11px", letterSpacing: "0.2em" }}
          >
            {displayCount.toString().padStart(3, "0")}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
