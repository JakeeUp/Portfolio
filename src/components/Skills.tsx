"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiCplusplus,
  SiPython,
  SiDotnet,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiUnrealengine,
  SiUnity,
  SiOpengl,
  SiGit,
  SiRider,
  SiPerforce,
  SiFfmpeg,
} from "react-icons/si";
import { FiCode, FiTerminal } from "react-icons/fi";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

interface Category {
  title: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C#", icon: SiDotnet, color: "#512BD4" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
    ],
  },
  {
    title: "Game Engines & Frameworks",
    skills: [
      { name: "Unreal Engine 5", icon: SiUnrealengine, color: "#e0e0e0" },
      { name: "Unity", icon: SiUnity, color: "#e0e0e0" },
      { name: "OpenGL", icon: SiOpengl, color: "#5586A4" },
      { name: "UE5 Blueprint", icon: SiUnrealengine, color: "#0ea5e9" },
      { name: "PyQt6", icon: SiPython, color: "#41c464" },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Visual Studio", icon: FiCode, color: "#5C2D91" },
      { name: "VS Code", icon: FiTerminal, color: "#007ACC" },
      { name: "Rider", icon: SiRider, color: "#e8458b" },
      { name: "Perforce", icon: SiPerforce, color: "#404040" },
      { name: "FFmpeg", icon: SiFfmpeg, color: "#007808" },
    ],
  },
];

const expertiseTags = [
  "Systems Programming",
  "Object-Oriented Programming",
  "Performance Optimization",
  "Multithreading",
  "File I/O",
  "UI Development",
  "Gameplay Programming",
  "AI Systems",
  "Memory Management",
  "Design Patterns",
  "Rendering Pipeline",
  "Shader Systems",
  "Behavior Trees",
  "Gameplay Ability System",
  "Enhanced Input",
  "Niagara VFX",
  "Data Tables",
  "Data Assets",
  "Blackboard",
  "Perforce / Version Control",
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.04 }}
      className="glow-card flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#00d4ff]/25 hover:bg-white/[0.04] transition-colors duration-300 cursor-default"
    >
      <div style={{ color: skill.color }} className="text-3xl">
        <Icon />
      </div>
      <span className="text-[#c8d4e0] text-xs font-medium text-center leading-tight">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
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
          02 / Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-space font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-16"
        >
          Technical Arsenal
        </motion.h2>

        <div className="space-y-14">
          {categories.map((cat, catIdx) => (
            <div key={cat.title}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.08 }}
                className="text-[#8892a4] text-xs font-mono uppercase tracking-[0.25em] mb-5 flex items-center gap-3"
              >
                <span className="text-[#00d4ff] text-base leading-none">
                  {'//'}
                </span>
                {cat.title}
              </motion.h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {cat.skills.map((skill, i) => (
                  <SkillCard key={`${cat.title}-${skill.name}`} skill={skill} index={i} />
                ))}
              </div>
            </div>
          ))}

          {/* Expertise tags */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#8892a4] text-xs font-mono uppercase tracking-[0.25em] mb-5 flex items-center gap-3"
            >
              <span className="text-[#00d4ff] text-base leading-none">{'//'}</span>
              Technical Expertise
            </motion.h3>
            <div className="flex flex-wrap gap-2.5">
              {expertiseTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.035 }}
                  className="px-4 py-2 rounded-full text-sm text-[#8892a4] border border-white/[0.08] bg-white/[0.02] hover:border-[#00d4ff]/35 hover:text-white transition-all duration-200 cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
