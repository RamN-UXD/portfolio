"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
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
      
      // Expand cursor when hovering over interactive elements
      const hoverElement = target.closest('[data-cursor="magnetic"], [data-cursor="hover"], a, button, [role="button"]');
      setIsHovered(!!hoverElement);

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
      {/* 
        Sleek Luxury Custom Cursor
        - mix-blend-difference: Dynamically inverts background and text colors underneath
        - Smooth spring transition: Buttery follow motion with zero lag
        - Interactive scaling spotlight: Magnifies elegantly on links and buttons
      */}
      <motion.div
        className="absolute top-0 left-0 rounded-full bg-[#fafafa] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 64 : 20,
          height: isHovered ? 64 : 20,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
        }}
      />
    </div>
  );
}
