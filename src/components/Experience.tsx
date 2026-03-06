"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  typeColor: string;
  current: boolean;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "University of the Incarnate Word",
    role: "Game Programming Teaching Assistant",
    period: "Sep 2025 – Jul 2026",
    type: "Teaching",
    typeColor: "#00d4ff",
    current: true,
    bullets: [
      "Teach advanced C++ and Unreal Engine 5 to students transitioning from C#/Unity, with a focus on systems programming, memory management, and design patterns.",
      "Develop comprehensive curriculum: PowerPoint presentations, coding labs, and project specifications covering pointers, file I/O, and gameplay systems.",
      "Mentor students on debugging techniques, code review practices, and professional software development workflows.",
      "Guide students through complex implementations including AI behavior trees, movement systems, and Gameplay Ability System architecture.",
    ],
  },
  {
    company: "UIW · MFA Graduate Prototyping Program",
    role: "Graduate Game Developer",
    period: "2024 – 2026",
    type: "Development",
    typeColor: "#7c3aed",
    current: true,
    bullets: [
      "Collaborate in a team-based environment completing multiple prototypes and production projects across the full development lifecycle.",
      "Developed a custom OpenGL graphics engine implementing a complete rendering pipeline and shader systems.",
      "Currently developing a turn-based horror game for the Summer 2026 semester, focusing on gameplay systems and technical design.",
      "Completed a hero-based prototype demonstrating the full development cycle from concept to playable build.",
    ],
  },
  {
    company: "University of the Incarnate Word",
    role: "UPGRADE Program Representative",
    period: "2022 – 2025",
    type: "Outreach",
    typeColor: "#10b981",
    current: false,
    bullets: [
      "Showcased personal projects and the programming curriculum to high school students to promote UIW's game programming track.",
      "Demonstrated real-world applications of C++, C#, Unreal Engine, and Unity workflows to prospective students.",
      "Represented the program at recruitment events, communicating technical concepts effectively to diverse audiences.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#00d4ff] text-[11px] font-mono tracking-[0.4em] uppercase mb-3"
        >
          05 / Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-space font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-16"
        >
          Experience &amp; Roles
        </motion.h2>

        <div className="relative">
          {/* Timeline line (desktop) */}
          <div
            className="absolute top-0 bottom-0 w-px hidden md:block"
            style={{
              left: "15px",
              background:
                "linear-gradient(to bottom, #00d4ff, #0066ff50, transparent)",
            }}
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                className="md:pl-14 relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute hidden md:flex items-center justify-center w-8 h-8 rounded-full border-2 bg-[#04040f]"
                  style={{ left: 0, top: "1.5rem", borderColor: exp.typeColor }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: exp.typeColor }}
                  />
                </div>

                {/* Card */}
                <div className="glow-card rounded-2xl p-6 md:p-7 border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.10] transition-colors duration-300">
                  {/* Card header */}
                  <div className="flex flex-wrap items-start gap-3 mb-5">
                    <div className="flex-1 min-w-0">
                      <p className="text-[#8892a4] text-sm mb-1 truncate">
                        {exp.company}
                      </p>
                      <h3 className="font-space font-semibold text-xl text-white leading-tight">
                        {exp.role}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 pt-0.5 flex-shrink-0">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-mono font-medium"
                        style={{
                          color: exp.typeColor,
                          border: `1px solid ${exp.typeColor}30`,
                          background: `${exp.typeColor}10`,
                        }}
                      >
                        {exp.type}
                      </span>
                      {exp.current && (
                        <span className="px-3 py-1 rounded-full text-xs font-mono text-[#00d4ff] border border-[#00d4ff]/20 bg-[#00d4ff]/[0.07]">
                          Current
                        </span>
                      )}
                      <span className="text-[#8892a4] text-xs font-mono whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-[#8892a4] text-sm leading-relaxed"
                      >
                        <span
                          className="flex-shrink-0 mt-[5px] text-[10px]"
                          style={{ color: exp.typeColor }}
                        >
                          ▸
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
