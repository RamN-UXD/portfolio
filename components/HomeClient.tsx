"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./LoadingScreen";
import CustomCursor from "./CustomCursor";
import Navbar from "./Navbar";

// Section imports
import StatementHero from "./sections/StatementHero";
import ImpactMetrics from "./sections/ImpactMetrics";
import FeaturedProjects from "./sections/FeaturedProjects";
// import FeaturedProjectsV2 from "./sections/FeaturedProjectsV2"; // Hidden — work in progress
import DesignProcess from "./sections/DesignProcess";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import CTAFooter from "./sections/CTAFooter";

export default function HomeClient() {
  const [isLoaded, setIsLoaded] = useState(false);

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
        <Navbar />

        {/* HERO SECTION */}
        <StatementHero />

        {/* CONTENT SECTIONS */}
        <div className="relative z-20">
          <ImpactMetrics />
          <FeaturedProjects />
          {/* <FeaturedProjectsV2 /> */}{/* Hidden — work in progress */}
          <DesignProcess />
          <About />
          <Skills />
          <Experience />
          <CTAFooter />
        </div>
      </div>
    </main>
  );
}
