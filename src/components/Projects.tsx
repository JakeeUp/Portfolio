"use client";

import { motion } from "framer-motion";
import { FiLayers, FiCpu, FiZap } from "react-icons/fi";
import type { IconType } from "react-icons";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  status: "Completed" | "In Progress";
  highlight?: string;
  icon: IconType;
  accentColor: string;
}

const projects: Project[] = [
  {
    title: "OpenGL Graphics Engine",
    subtitle: "Graphics / Systems Programming",
    description:
      "Custom graphics engine developed in a collaborative team environment, implementing a complete rendering pipeline with vertex and fragment shader systems. Demonstrates low-level GPU architecture, buffer management, and real-time rendering techniques.",
    tags: ["C++", "OpenGL", "GLSL", "Shaders", "Rendering Pipeline", "VBOs"],
    status: "Completed",
    icon: FiLayers,
    accentColor: "#5586A4",
  },
  {
    title: "Turn-Based Horror Game",
    subtitle: "Game Development · UE5",
    description:
      "Currently in production for the Summer 2026 semester. A atmospheric turn-based horror title with complex AI decision trees, procedural tension systems, and scalable gameplay architecture. Focus on technical design and system-level programming.",
    tags: ["C++", "Unreal Engine 5", "Blueprint", "AI Systems", "Gameplay"],
    status: "In Progress",
    highlight: "Summer 2026",
    icon: FiCpu,
    accentColor: "#7c3aed",
  },
  {
    title: "Hero-Based Prototype",
    subtitle: "Game Development · Full Cycle",
    description:
      "End-to-end development from initial concept to a fully playable build. Features hero mechanics, an ability system, responsive controls, and polished gameplay, demonstrating a complete production pipeline and strong software engineering fundamentals.",
    tags: ["C++", "UE5", "Gameplay Ability System", "Blueprint", "Animation"],
    status: "Completed",
    icon: FiZap,
    accentColor: "#00d4ff",
  },
];

const statusConfig = {
  Completed: {
    bg: "rgba(16,185,129,0.07)",
    border: "rgba(16,185,129,0.25)",
    text: "#10b981",
  },
  "In Progress": {
    bg: "rgba(245,158,11,0.07)",
    border: "rgba(245,158,11,0.25)",
    text: "#f59e0b",
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6"
      style={{ background: "rgba(6,6,18,0.6)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#00d4ff] text-[11px] font-mono tracking-[0.4em] uppercase mb-3"
        >
          04 / Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-space font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4"
        >
          What I&apos;ve Built
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#8892a4] text-lg mb-16 max-w-2xl"
        >
          From graphics engines to production games, selected projects from my
          MFA program and personal development.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            const status = statusConfig[project.status];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.15 }}
                whileHover={{ y: -7 }}
                className="group glow-card rounded-2xl p-6 border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                {/* Background glow */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${project.accentColor}15 0%, transparent 70%)`,
                  }}
                />

                {/* Icon + Status */}
                <div className="flex items-start justify-between mb-6 relative">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border"
                    style={{
                      borderColor: `${project.accentColor}30`,
                      background: `${project.accentColor}10`,
                    }}
                  >
                    <Icon
                      className="text-xl"
                      style={{ color: project.accentColor }}
                    />
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-mono"
                      style={{
                        background: status.bg,
                        border: `1px solid ${status.border}`,
                        color: status.text,
                      }}
                    >
                      {project.status}
                    </span>
                    {project.highlight && (
                      <span className="text-[#8892a4] text-[11px] font-mono">
                        {project.highlight}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <p className="text-[#8892a4] text-xs font-mono mb-1 relative">
                  {project.subtitle}
                </p>
                <h3 className="font-space font-semibold text-xl text-white mb-3 group-hover:text-[#00d4ff] transition-colors duration-200 relative">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#8892a4] text-sm leading-relaxed mb-5 flex-1 relative">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto relative">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-[#8892a4] border border-white/[0.06] bg-white/[0.02]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
