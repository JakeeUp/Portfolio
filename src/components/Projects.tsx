"use client";

import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { FiGithub, FiExternalLink, FiMaximize2 } from "react-icons/fi";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  status: "Completed" | "In Progress";
  highlight?: string;
  accentColor: string;
  videoSrc: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "OpenGL Graphics Engine",
    subtitle: "Graphics / Systems Programming",
    description:
      "Custom graphics engine built in C++ with a complete rendering pipeline, vertex and fragment shader systems, real-time GPU buffer management, and low-level OpenGL architecture.",
    tags: ["C++", "OpenGL", "GLSL", "Shaders", "VBOs", "Rendering Pipeline"],
    status: "Completed",
    accentColor: "#5586A4",
    videoSrc: "/videos/OpenGLProject.mp4",
    github: "https://github.com/JakeeUp/Engine_OpenGLProject",
  },
  {
    title: "Metal Gear Mechanics Clone",
    subtitle: "Game Development · Unity",
    description:
      "Faithful recreation of Metal Gear Solid stealth systems in Unity, featuring enemy AI with detection cones, alert states, cover mechanics, and CQC combat built from the ground up in C#.",
    tags: ["C#", "Unity", "AI Systems", "Stealth", "Animation", "Physics"],
    status: "Completed",
    accentColor: "#7c3aed",
    videoSrc: "/videos/MGS_Clone.mp4",
    github: "https://github.com/JakeeUp/MetalGearMechanics_Unity",
  },
  {
    title: "Hack & Slash Combat System",
    subtitle: "Game Development · UE5",
    description:
      "Fluid hack-and-slash combat prototype in Unreal Engine 5 featuring combo chains, directional attacks, enemy hit reactions, hitbox management, and polished feel through animation blueprints.",
    tags: ["C++", "UE5", "Blueprint", "Gameplay Ability System", "Animation"],
    status: "Completed",
    accentColor: "#00d4ff",
    videoSrc: "/videos/HackNSlash.mp4",
    github: "https://github.com/JakeeUp/HackAndSlash-Combat-System",
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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const status = statusConfig[project.status];

  const handleFullscreen = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if ((el as HTMLVideoElement & { webkitRequestFullscreen?: () => void }).webkitRequestFullscreen) {
      (el as HTMLVideoElement & { webkitRequestFullscreen: () => void }).webkitRequestFullscreen();
    }
  }, []);

  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.15 }}
      className="group glow-card rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:-translate-y-[7px] transition-all duration-300 flex flex-col relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse at top right, ${project.accentColor}10 0%, transparent 60%)`,
        }}
      />

      {/* Video thumbnail */}
      <div className="relative w-full overflow-hidden rounded-t-2xl bg-black/60" style={{ aspectRatio: "16/11" }}>
        <video
          ref={videoRef}
          src={project.videoSrc}
          autoPlay
          muted
          loop
          playsInline
          onClick={handleFullscreen}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] cursor-pointer"
        />
        {/* Accent gradient overlay at bottom of video */}
        <div
          className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${project.accentColor}22, transparent)`,
          }}
        />
        {/* Fullscreen button — appears on hover */}
        <button
          onClick={handleFullscreen}
          aria-label="View fullscreen"
          className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{
            background: "rgba(0,0,0,0.55)",
            border: `1px solid ${project.accentColor}40`,
          }}
        >
          <FiMaximize2 className="text-sm" style={{ color: project.accentColor }} />
          Fullscreen
        </button>
        {/* Status badge over video */}
        <div className="absolute top-3 right-3">
          <span
            className="px-2.5 py-1 rounded-full text-xs font-mono backdrop-blur-sm"
            style={{
              background: status.bg,
              border: `1px solid ${status.border}`,
              color: status.text,
            }}
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-8 relative">
        <p className="text-[#8892a4] text-sm font-mono mb-1.5">{project.subtitle}</p>
        <h3
          className="font-space font-semibold text-3xl text-white mb-4 transition-colors duration-200"
          style={{ color: hovered ? project.accentColor : "white" }}
        >
          {project.title}
        </h3>
        <p className="text-[#8892a4] text-base leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-md text-xs font-mono text-[#8892a4] border border-white/[0.06] bg-white/[0.02]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* GitHub link */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs font-mono transition-colors duration-200 w-fit group/link"
          style={{ color: project.accentColor }}
        >
          <FiGithub className="text-base" />
          <span className="group-hover/link:underline">View on GitHub</span>
          <FiExternalLink className="text-xs opacity-60" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6"
      style={{
        background:
          "linear-gradient(to bottom, transparent, rgba(6,6,18,0.6) 15%, rgba(6,6,18,0.6) 85%, transparent)",
      }}
    >
      <div className="max-w-[1600px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#00d4ff] text-[11px] font-mono tracking-[0.4em] uppercase mb-3"
        >
          02 / Projects
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
          From graphics engines to stealth AI and combat systems — projects
          spanning real-time rendering, Unity, and Unreal Engine 5.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
