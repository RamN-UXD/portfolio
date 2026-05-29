"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "01",
    title: "Project Alpha",
    description: "A high-performance e-commerce platform with WebGL interactions.",
    tags: ["Next.js", "Three.js", "Tailwind"],
  },
  {
    id: "02",
    title: "Beta Protocol",
    description: "DeFi dashboard featuring real-time data visualization.",
    tags: ["React", "D3.js", "Framer Motion"],
  },
  {
    id: "03",
    title: "Gamma Studio",
    description: "Creative agency portfolio with seamless page transitions.",
    tags: ["Vue", "GSAP", "WebGL"],
  },
  {
    id: "04",
    title: "Delta Labs",
    description: "AI-powered web app with real-time collaborative editing.",
    tags: ["Next.js", "WebSockets", "shadcn/ui"],
  },
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="h-full bg-white/5 backdrop-blur-md border-white/10 hover:border-white/25 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(0,102,255,0.15),_0_0_60px_rgba(204,99,255,0.08)] flex flex-col rounded-xl overflow-hidden">
              <div className="p-8 flex-grow flex flex-col">
                <span className="text-sm text-white/40 mb-4">{project.id} —</span>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/60 mb-6 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-white/10 text-white/80 hover:bg-white/20 border-none">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" className="w-fit text-white/80 hover:text-white hover:bg-white/10 pl-0 group-hover:pl-4 transition-all duration-300">
                  <span className="mr-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span> View Project
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
