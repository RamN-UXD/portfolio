"use client";

import { motion } from "framer-motion";

const customEase = [0.16, 1, 0.3, 1];

export default function CTAFooter() {
  return (
    <footer className="relative py-24 px-6 md:px-16 overflow-hidden bg-[#080810] border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0066ff] opacity-[0.04] blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-[#0066ff] text-[12px] font-bold tracking-[0.3em] uppercase mb-6"
        >
          Let&apos;s Work Together
        </motion.div>

        {/* Narrative Headline Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: customEase }}
          className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#fafafa] leading-tight text-center max-w-4xl tracking-tight mb-8"
        >
          Open to senior UX roles
        </motion.h2>

        {/* Narrative Description Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: customEase }}
          className="flex flex-col gap-4 text-center max-w-2xl text-[#8888aa] text-body-lg mb-16"
        >
          <p>
            If you&apos;re building something with real structural complexity and need a designer who can own the research, lead the IA, and deliver clean; I&apos;d like to hear about it.
          </p>
        </motion.div>

        {/* Two-Column Grid: Contact & Connect Online (Custom Reinterpretation of User Image) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: customEase }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-20"
        >
          {/* Card 1: Get in Touch */}
          <div className="bg-[rgba(48,46,97,0.18)] hover:bg-[rgba(48,46,97,0.22)] border border-white/5 hover:border-white/12 p-8 md:p-10 rounded-[36px] flex flex-col gap-6 transition-all duration-500 text-left">
            <h3 className="text-h3 text-white mb-2">
              Get in Touch
            </h3>
            
            <div className="flex flex-col gap-4">
              {/* Email Link Row */}
              <a 
                href="mailto:moorthyr06@gmail.com" 
                className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/12 hover:bg-white/10 transition-all duration-300 w-full group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-[#0066ff]/10 text-[#0066ff] transition-colors group-hover:bg-[#0066ff]/20">
                  <i className="ti ti-mail text-xl transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8888aa] truncate">Email</span>
                  <span className="text-white text-base md:text-lg font-bold group-hover:text-[#00ffb7] transition-colors truncate block w-full">
                    moorthyr06@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone Link Row */}
              <a 
                href="tel:+919840325802" 
                className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/12 hover:bg-white/10 transition-all duration-300 w-full group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-[#0066ff]/10 text-[#0066ff] transition-colors group-hover:bg-[#0066ff]/20">
                  <i className="ti ti-phone text-xl transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8888aa] truncate">Phone</span>
                  <span className="text-white text-base md:text-lg font-bold group-hover:text-[#00ffb7] transition-colors truncate block w-full">
                    +91 98403 25802
                  </span>
                </div>
              </a>

              {/* Location Row */}
              <div 
                className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 w-full text-left"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-[#0066ff]/10 text-[#0066ff]">
                  <i className="ti ti-map-pin text-xl" />
                </div>
                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8888aa] truncate">Location</span>
                  <span className="text-white text-base md:text-lg font-bold truncate block w-full">
                    Chennai, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Connect Online */}
          <div className="bg-[rgba(48,46,97,0.18)] hover:bg-[rgba(48,46,97,0.22)] border border-white/5 hover:border-white/12 p-8 md:p-10 rounded-[36px] flex flex-col gap-6 transition-all duration-500 text-left">
            <h3 className="text-h3 text-white mb-2">
              Connect Online
            </h3>
            
            <div className="flex flex-col gap-4">
              {/* LinkedIn Link Row */}
              <a 
                href="https://www.linkedin.com/in/nram-uxd/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/12 hover:bg-white/10 transition-all duration-300 w-full group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-[#cc63ff]/10 text-[#cc63ff] transition-colors group-hover:bg-[#cc63ff]/20">
                  <i className="ti ti-brand-linkedin text-xl transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8888aa] truncate">LinkedIn</span>
                  <span className="text-white text-base md:text-lg font-bold group-hover:text-[#00ffb7] transition-colors truncate block w-full">
                    linkedin.com/in/nram-uxd/
                  </span>
                </div>
              </a>

              {/* Behance Link Row */}
              <a 
                href="https://www.behance.net/ramamoorthy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/12 hover:bg-white/10 transition-all duration-300 w-full group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-[#cc63ff]/10 text-[#cc63ff] transition-colors group-hover:bg-[#cc63ff]/20">
                  <i className="ti ti-brand-behance text-xl transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8888aa] truncate">Behance</span>
                  <span className="text-white text-base md:text-lg font-bold group-hover:text-[#00ffb7] transition-colors truncate block w-full">
                    behance.net/ramamoorthy
                  </span>
                </div>
              </a>

              {/* Resume Download Row */}
              <a 
                href="/resume.pdf" 
                download
                className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/12 hover:bg-white/10 transition-all duration-300 w-full group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-[#cc63ff]/10 text-[#cc63ff] transition-colors group-hover:bg-[#cc63ff]/20">
                  <i className="ti ti-download text-xl transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8888aa] truncate">Resume</span>
                  <span className="text-white text-base md:text-lg font-bold group-hover:text-[#00ffb7] transition-colors truncate block w-full">
                    Download PDF
                  </span>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="w-full max-w-4xl mx-auto border-t border-white/5 pt-16 mt-16 text-center">
        {/* Professional Statement */}
        <p className="text-[#8888aa] text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10">
          UX Designer crafting interfaces that solve real problems, scale with complexity, and ship with clarity. Always learning. Always improving.
        </p>

        {/* Symmetrical Centered Divider */}
        <div className="w-12 h-[1px] bg-white/10 mx-auto mb-10" />

        {/* Copyright */}
        <div className="text-[#8888aa]/50 text-xs font-medium tracking-widest uppercase leading-loose">
          &copy; 2026 Ramamoorthy Narayanan. All rights reserved. Built with passion for great UX.
        </div>
      </div>
    </footer>
  );
}
