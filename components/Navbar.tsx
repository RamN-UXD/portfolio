"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, MotionValue, useTransform, useMotionValue } from "framer-motion";

const projectLinks = [
  {
    name: "Admin Control Center",
    href: "/projects/b2b-admin",
    tag: "Enterprise SaaS",
    accent: "#0066ff",
  },
  {
    name: "Healthcare Research",
    href: "/projects/preventive-research",
    tag: "UX Research",
    accent: "#cc63ff",
  },
  {
    name: "Dr.Health App",
    href: "/projects/dr-health",
    tag: "Mobile Product",
    accent: "#00ffb7",
  },
  {
    name: "NCV Icon System",
    href: "/projects/ncv-icons",
    tag: "Design System",
    accent: "#ff6b00",
  },
];

export default function Navbar({ progress }: { progress?: MotionValue<number> }) {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const fallbackProgress = useMotionValue(1);
  const activeProgress = progress || fallbackProgress;

  // On the homepage, animate navbar in only after hero section is passed
  const navOpacity = useTransform(activeProgress, [0, 0.3, 1], [0, 0.2, 1]);
  const navY = useTransform(activeProgress, [0, 1], [-40, 0]);
  const navPointerEvents = useTransform(activeProgress, (v: number) => (v > 0.1 ? "auto" : "none"));

  const isHomeWithProgress = pathname === "/" && progress !== undefined;

  return (
    <motion.header 
      style={isHomeWithProgress ? { opacity: navOpacity, y: navY, pointerEvents: navPointerEvents } : undefined}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 backdrop-blur-xl bg-[#080810]/75 border-b border-white/5 transition-colors duration-300"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        
        {/* Left Side: Avatar Image + Name */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group"
        >
          <div className="relative w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden ring-1 ring-white/20 group-hover:ring-[#0066ff]/60 transition-all duration-300 shrink-0">
            <img
              src="/designer_portrait.jpg"
              alt="Ramamoorthy Narayanan"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-sm md:text-base tracking-tight group-hover:text-[#0066ff] transition-colors duration-300">
              Ramamoorthy Narayanan
            </span>
          </div>
        </Link>

        {/* Right Side: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          
          {/* Home Link */}
          <Link
            href="/"
            className={`transition-colors duration-200 ${
              pathname === "/" ? "text-white font-semibold" : "text-[#8888aa] hover:text-white"
            }`}
          >
            Home
          </Link>

          {/* My Projects Hover Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsProjectsOpen(true)}
            onMouseLeave={() => setIsProjectsOpen(false)}
          >
            <button
              type="button"
              className={`flex items-center gap-1.5 transition-colors duration-200 py-1 ${
                pathname.startsWith("/projects")
                  ? "text-white font-semibold"
                  : "text-[#8888aa] hover:text-white"
              }`}
              onClick={() => setIsProjectsOpen((prev) => !prev)}
              aria-expanded={isProjectsOpen}
            >
              <span>My Projects</span>
              <svg
                viewBox="0 0 24 24"
                className={`w-4 h-4 transition-transform duration-200 ${
                  isProjectsOpen ? "rotate-180 text-[#0066ff]" : "text-[#8888aa]"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isProjectsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute right-0 top-full pt-2 w-64 z-50"
                >
                  <div className="p-2 rounded-2xl bg-[#0e0e18]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col gap-1">
                    {projectLinks.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsProjectsOpen(false)}
                          className={`flex flex-col px-3.5 py-2.5 rounded-xl transition-all duration-200 group/item ${
                            isActive
                              ? "bg-white/10 text-white"
                              : "hover:bg-white/5 text-[#cccccc] hover:text-white"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-xs tracking-tight group-hover/item:text-white">
                              {item.name}
                            </span>
                            <span
                              className="w-1.5 h-1.5 rounded-full opacity-70 group-hover/item:opacity-100"
                              style={{ backgroundColor: item.accent }}
                            />
                          </div>
                          <span className="text-[10px] text-[#777799] mt-0.5">
                            {item.tag}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Symmetrical Vertical Divider */}
          <div className="h-4 w-px bg-white/10 mx-1" />

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {/* Gmail Icon */}
            <a
              href="mailto:moorthyr06@gmail.com"
              title="Email (moorthyr06@gmail.com)"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#0066ff]/20 border border-white/10 hover:border-[#0066ff]/40 flex items-center justify-center text-[#8888aa] hover:text-white transition-all duration-200"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/nram-uxd/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#0066ff]/20 border border-white/10 hover:border-[#0066ff]/40 flex items-center justify-center text-[#8888aa] hover:text-white transition-all duration-200"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.62c-.91 0-1.64.73-1.64 1.64 0 .91.73 1.64 1.64 1.64.91 0 1.64-.73 1.64-1.64 0-.91-.73-1.64-1.64-1.64z" />
              </svg>
            </a>
          </div>

        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="mailto:moorthyr06@gmail.com"
            title="Email"
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#8888aa]"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/nram-uxd/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#8888aa]"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.62c-.91 0-1.64.73-1.64 1.64 0 .91.73 1.64 1.64 1.64.91 0 1.64-.73 1.64-1.64 0-.91-.73-1.64-1.64-1.64z" />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white"
            aria-label="Toggle menu"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 stroke-current"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden pt-4 pb-2"
          >
            <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-xl text-sm font-medium ${
                  pathname === "/" ? "bg-white/10 text-white" : "text-[#8888aa]"
                }`}
              >
                Home
              </Link>
              <div className="px-3 pt-2 text-[10px] uppercase font-bold tracking-widest text-[#666688]">
                Projects
              </div>
              {projectLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm ${
                    pathname === item.href
                      ? "bg-white/10 text-white font-medium"
                      : "text-[#aaaaaa] hover:text-white"
                  }`}
                >
                  <span>{item.name}</span>
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: item.accent }}
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
