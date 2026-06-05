"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, useSpring, MotionValue } from "framer-motion";

const TOTAL_FRAMES = 192;
const pad = (n: number) => String(n).padStart(3, "0");
const frames = Array.from({ length: TOTAL_FRAMES }, (_, i) =>
  `/sequence/frame_${pad(i)}_delay-0.041s.webp`
);

export default function ScrollyCanvas({ progress }: { progress?: MotionValue<number> }) {
  const internalRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isReady, setIsReady] = useState(false);

  // Resize handler
  useEffect(() => {
    if (!isReady) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    let resizeTimer: NodeJS.Timeout;

    const setupCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      // Force draw of current frame
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const latest = docHeight > 0 ? scrollY / docHeight : 0;
      const index = Math.min(
        Math.floor(latest * (TOTAL_FRAMES - 1)),
        TOTAL_FRAMES - 1
      );
      drawFrame(index);
    };

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setupCanvas();
      }, 150);
    };

    setupCanvas();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, [isReady]);

  // Image preloading
  useEffect(() => {
    const imgs = frames.map((src, idx) => {
      const img = new Image();
      if (idx === 0) {
        img.onload = () => {
          console.log("First frame loaded successfully!");
          setIsReady(true);
        };
        img.onerror = () => {
          console.error("Failed to load first frame:", src);
        };
      }
      img.src = src;
      if (idx === 0 && img.complete) {
        // img.complete might be true even if it failed (e.g. broken image). Check naturalWidth.
        if (img.naturalWidth > 0) {
          setIsReady(true);
        }
      }
      return img;
    });
    imagesRef.current = imgs;
  }, []);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const img = imagesRef.current[index];
    if (!img?.complete) return;

    const dpr = window.devicePixelRatio || 1;
    const cw = canvas.width / dpr;
    const ch = canvas.height / dpr;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const scale = Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const sx = (cw - sw) / 2;
    const sy = (ch - sh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);
  };

  const { scrollYProgress: internalProgress } = useScroll({ target: internalRef, offset: ["start start", "end end"] });
  const activeProgress = progress || internalProgress;
  
  const smoothProgress = useSpring(activeProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (!isReady) return;
    // Map the first 85% of scroll to the image sequence
    const frameProgress = Math.min(latest / 0.85, 1);
    const index = Math.min(
      Math.floor(frameProgress * (TOTAL_FRAMES - 1)),
      TOTAL_FRAMES - 1
    );
    drawFrame(index);
  });

  return (
    <div ref={internalRef} className="relative h-[1000vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className={`block transition-opacity duration-500 ${isReady ? "opacity-100" : "opacity-0"}`}
        />
        {!isReady && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white/20 border-t-[#0066ff] rounded-full animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
}
