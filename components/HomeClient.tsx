"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import LoadingScreen from "./LoadingScreen";
import CustomCursor from "./CustomCursor";

// Phase 1 components
import ScrollyCanvas from "./ScrollyCanvas";
import Overlay from "./Overlay";

// Section imports
import ImpactMetrics from "./sections/ImpactMetrics";
import DomainExpertise from "./sections/DomainExpertise";
import FeaturedProjects from "./sections/FeaturedProjects";
import DesignProcess from "./sections/DesignProcess";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import CTAFooter from "./sections/CTAFooter";

export default function HomeClient() {
  const [isLoaded, setIsLoaded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Track scroll for the Hero Section
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });

  // We want to fade in the content sections as they scroll into view 
  // after the long sticky hero section completes.
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "start center"]
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <main className="bg-[#080810] text-[#fafafa]" style={{ overflowX: "clip" }}>
      <CustomCursor />

      <AnimatePresence>
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      </AnimatePresence>

      <div
        className="transition-opacity duration-800"
        style={{
          opacity: isLoaded ? 1 : 0,
          pointerEvents: isLoaded ? "auto" : "none",
        }}
      >
        {/* IMAGE SEQUENCE HERO — FIRST SECTION (1000vh total height) */}
        <section ref={heroRef} className="relative">
          <ScrollyCanvas progress={heroProgress} />
          <Overlay progress={heroProgress} />
        </section>

        {/* 
          CONTENT SECTIONS
          This starts after the 1000vh hero.
          We use a motion div to slowly fade them in and slide them up
          as the geometric wipe from the hero sticky container completes.
        */}
        <motion.div 
          ref={contentRef}
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-20"
        >
          {/* Content sections */}
          <ImpactMetrics />
          <DomainExpertise />
          <FeaturedProjects />
          <DesignProcess />
          <About />
          <Skills />
          <Experience />
          <CTAFooter />
        </motion.div>
      </div>
    </main>
  );
}
