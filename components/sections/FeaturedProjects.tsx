"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const customEase = [0.16, 1, 0.3, 1];

export default function FeaturedProjects() {
  const projects = [
    {
      id: "01",
      title: "Redesigning the B2B Admin Control Center",
      subtitle: "A scroll-heavy settings page had accumulated features without structure &mdash; no navigation, hidden descriptions, and no capacity to scale into a new platform migration.",
      role: "Solo UX Designer &middot; End-to-end: IA &rarr; Wireframes &rarr; Hi-Fi &rarr; 76 Screens &rarr; Dev Handoff",
      outcome: "Introduced a two-panel architecture with persistent left-panel navigation &mdash; transforming scroll-and-search into navigate-and-configure. All 8 settings categories now scannable in under 2 seconds.",
      tags: ["Enterprise SaaS", "Admin Panel", "B2B Web App", "Interaction Design"],
      accent: "#0066ff",
      caseStudyLink: "/projects/b2b-admin",
      image: "https://placehold.co/800x600/0033aa/ffffff?text=B2B+Admin+Control+Center",
    },
    {
      id: "02",
      title: "End-to-End UX Research on Preventive Healthcare",
      subtitle: "No structured research existed to guide product direction for a preventive healthcare app targeting urban Indian users &mdash; design decisions were being made without validated user understanding.",
      role: "Solo UX Researcher &middot; 187 Participants &middot; 3 Surveys &middot; 14 Interviews &middot; Full Research Synthesis",
      outcome: "18 validated problem statements synthesized from real user data, mapped to a prioritized feature set grounded in WHO, FICCI, and UN DESA insights.",
      tags: ["UX Research", "Persona Development", "Mobile Research Synthesis"],
      accent: "#cc63ff",
      caseStudyLink: "/projects/preventive-research",
      image: "https://placehold.co/800x600/6a1b9a/ffffff?text=Preventive+Healthcare+Research",
    },
    {
      id: "03",
      title: "Translating Research into the Dr.Health App Design",
      subtitle: "Research insights needed to become a usable, accessible mobile experience &mdash; bridging validated findings into a product that real users could navigate with confidence.",
      role: "Solo UI/UX Designer &middot; Research-to-Design Pipeline &middot; Moderated Usability Testing",
      outcome: "2 core features designed with Gestalt, Fitts&apos;s Law, and Hick&apos;s Law principles &mdash; validated with real users before final handoff.",
      tags: ["Mobile App", "UI Design", "Usability Testing", "Healthcare Interaction Design"],
      accent: "#00ffb7",
      caseStudyLink: "/projects/dr-health",
      image: "https://placehold.co/800x600/008f66/ffffff?text=Dr.Health+App+Design",
    },
    {
      id: "04",
      title: "Cohesive Icon System for Net Carbon Vision",
      subtitle: "The website lacked a unified visual language &mdash; existing icons were inconsistent in proportion, stroke weight, and geometry across sections.",
      role: "Solo Designer &middot; 55 Custom Icons &middot; Adobe Illustrator &middot; 64&times;64px Structured Grid System",
      outcome: "Unified icon set covering every major website section &mdash; navigation, products, services, verticals, and company &mdash; scalable across all screen sizes and responsive contexts.",
      tags: ["Design Systems", "Iconography", "Visual Design", "Brand Identity", "Web"],
      accent: "#ff6b00",
      caseStudyLink: "/projects/ncv-icons",
      image: "https://placehold.co/800x600/b34700/ffffff?text=Net+Carbon+Vision+Icons",
    },
  ];

  return (
    <section id="work" className="py-[120px] px-6 md:px-16 max-w-[1400px] mx-auto relative">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8 w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="text-[#0066ff] text-[12px] font-bold tracking-[0.2em] mb-4 uppercase"
          >
            Selected Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: customEase }}
            className="text-4xl md:text-6xl font-bold text-[#fafafa] leading-tight"
          >
            Featured <br />
            <span className="text-[#8888aa]">Projects.</span>
          </motion.h2>
        </div>
      </div>

      {/* Stacking Layout Container */}
      <div className="flex flex-col gap-[8vh] relative w-full pb-[10vh]">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} project={proj} index={idx} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ 
  project, 
  index
}: { 
  project: { 
    id: string; 
    title: string; 
    subtitle: string; 
    role: string; 
    outcome: string; 
    tags: string[]; 
    accent: string; 
    caseStudyLink: string | null;
    image: string;
  }; 
  index: number;
}) {
  // Calculate dynamic sticky top offset
  const stickyTop = `calc(30px + ${index * 20}px)`;
  


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: customEase }}
      className="sticky top-[var(--sticky-top)] w-full group bg-[#11111a] border border-white/5 hover:border-white/15 rounded-[40px] overflow-hidden transition-all duration-500 shadow-2xl"
      style={{ 
        "--sticky-top": stickyTop,
        zIndex: index * 10,
        transformOrigin: "top center",
      } as React.CSSProperties}
    >
      {/* Background Radial Glow */}
      <div 
        className="absolute -top-64 -right-64 w-[500px] h-[500px] rounded-full blur-[140px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none z-0"
        style={{ backgroundColor: project.accent }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-6 xl:col-span-5 p-6 md:p-8 lg:p-10 flex flex-col justify-between h-full">
          <div>
            {/* Top bar: Left-Aligned Pill Tags */}
            <div className="flex flex-wrap gap-2 justify-start items-center mb-6 w-full">
              {project.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 rounded-full text-[10px] font-semibold text-white/70 bg-white/5 border border-white/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-[1.1] transition-colors duration-300">
              {project.title}
            </h3>

            {/* Capsule Metadata Strip (Role and Scope) */}
            <div className="px-4 py-3 rounded-xl bg-white/4 border border-white/5 text-[11px] md:text-xs text-[#fafafa]/80 leading-relaxed font-medium mb-6 backdrop-blur-sm">
              <strong className="text-white block mb-1">Role &amp; Scope:</strong> 
              <span dangerouslySetInnerHTML={{ __html: project.role }} className="opacity-80 block" />
            </div>
          </div>

          {/* CTA block */}
          <div className="w-full mt-auto pt-6 border-t border-white/5 flex flex-col gap-4">
            {/* Custom Glow Button Link */}
            {project.caseStudyLink ? (
              <Link href={project.caseStudyLink}>
                <div className="flex items-center gap-2 text-white font-semibold text-sm mt-3 cursor-pointer group/link self-start">
                  <span 
                    className="underline underline-offset-8 decoration-white/20 group-hover/link:decoration-white transition-colors duration-300 pb-1"
                    style={{ textDecorationColor: `${project.accent}80` }}
                  >
                    View Case Study
                  </span>
                  <span 
                    className="inline-block transform translate-x-0 group-hover/link:translate-x-1.5 transition-transform duration-300 text-lg"
                    style={{ color: project.accent }}
                  >
                    &rarr;
                  </span>
                </div>
              </Link>
            ) : (
              <div className="flex items-center gap-2 text-white/50 font-semibold text-sm mt-3 self-start cursor-not-allowed">
                <span>Case Study Coming Soon</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Image Presentation */}
        <div className="lg:col-span-6 xl:col-span-7 bg-[#0a0a0f] border-l border-white/5 relative overflow-hidden group-hover:bg-[#0c0c14] transition-colors duration-500 flex items-center justify-center p-6 lg:p-8 min-h-[220px]">
          {/* Subtle grid background for the image section */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "32px 32px"
            }}
          />
          
          <motion.div 
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full max-h-[500px] relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10"
          >
            {/* Using a standard img tag with the placeholder URL */}
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            
            {/* Overlay gradient to blend nicely */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </motion.div>
        </div>

      </div>

      {/* Interactive Bottom Progress Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/5 overflow-hidden">
        <div 
          className="h-full w-full transform origin-left transition-transform duration-1000 ease-out opacity-60 group-hover:opacity-100"
          style={{ backgroundColor: project.accent }}
        />
      </div>
    </motion.div>
  );
}
