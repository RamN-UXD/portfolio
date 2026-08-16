"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // High-performance spring configuration for a buttery, responsive mouse follow
  const springConfig = { damping: 30, stiffness: 350, mass: 0.4 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    // Check if the device is a touch interface (disable custom cursor on mobile)
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    // Hide default system cursor globally
    document.documentElement.style.cursor = "none";

    const updateMousePosition = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for custom cursor text triggers (e.g. data-cursor="open")
      const textElement = target.closest('[data-cursor="open"], [data-cursor-text]');
      if (textElement) {
        setIsHovered(true);
        setCursorText(textElement.getAttribute("data-cursor-text") || "OPEN");
      } else {
        // Standard hover elements
        const hoverElement = target.closest('[data-cursor="magnetic"], [data-cursor="hover"], a, button, [role="button"]');
        setIsHovered(!!hoverElement);
        setCursorText("");
      }

      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.documentElement.style.cursor = "auto";
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[10000]">
      <motion.div
        className="absolute top-0 left-0 rounded-full flex items-center justify-center pointer-events-none overflow-hidden"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorText ? 84 : isHovered ? 64 : 20,
          height: cursorText ? 84 : isHovered ? 64 : 20,
          backgroundColor: cursorText ? "rgba(255, 255, 255, 0.12)" : "#fafafa",
          backdropFilter: cursorText ? "blur(8px)" : "none",
          border: cursorText ? "1px solid rgba(255, 255, 255, 0.35)" : "none",
          mixBlendMode: cursorText ? "normal" : "difference",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
        }}
      >
        <AnimatePresence>
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
              className="text-[10px] font-extrabold tracking-[0.2em] text-white uppercase select-none"
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
