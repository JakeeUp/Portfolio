"use client";

import { motion, type Variants } from "framer-motion";

const stats = [
  { value: "5+", label: "Years Programming" },
  { value: "10+", label: "Projects Built", url: "https://github.com/jakeeup" },
  { value: "MFA", label: "Graduate Degree" },
  { value: "2024", label: "Top Programmer Award" },
];

const codeLines = [
  { tokens: [{ text: "// GameProgrammer.cpp", cls: "text-[#6a9955]" }] },
  { tokens: [] },
  {
    tokens: [
      { text: "class ", cls: "text-[#569cd6]" },
      { text: "GameProgrammer ", cls: "text-[#4ec9b0]" },
      { text: "{", cls: "text-[#d4d4d4]" },
    ],
  },
  { tokens: [{ text: "public:", cls: "text-[#569cd6]" }] },
  {
    tokens: [
      { text: "  string ", cls: "text-[#569cd6]" },
      { text: "name ", cls: "text-[#9cdcfe]" },
      { text: "= ", cls: "text-[#d4d4d4]" },
      { text: '"Jacob Fernandez"', cls: "text-[#ce9178]" },
      { text: ";", cls: "text-[#d4d4d4]" },
    ],
  },
  {
    tokens: [
      { text: "  string ", cls: "text-[#569cd6]" },
      { text: "location ", cls: "text-[#9cdcfe]" },
      { text: "= ", cls: "text-[#d4d4d4]" },
      { text: '"San Antonio, TX"', cls: "text-[#ce9178]" },
      { text: ";", cls: "text-[#d4d4d4]" },
    ],
  },
  { tokens: [] },
  {
    tokens: [
      { text: "  vector", cls: "text-[#569cd6]" },
      { text: "<string> ", cls: "text-[#d4d4d4]" },
      { text: "engines ", cls: "text-[#9cdcfe]" },
      { text: "= {", cls: "text-[#d4d4d4]" },
    ],
  },
  {
    tokens: [
      { text: '    "Unreal Engine 5"', cls: "text-[#ce9178]" },
      { text: ", ", cls: "text-[#d4d4d4]" },
      { text: '"Unity"', cls: "text-[#ce9178]" },
    ],
  },
  { tokens: [{ text: "  };", cls: "text-[#d4d4d4]" }] },
  { tokens: [] },
  {
    tokens: [
      { text: "  vector", cls: "text-[#569cd6]" },
      { text: "<string> ", cls: "text-[#d4d4d4]" },
      { text: "focus ", cls: "text-[#9cdcfe]" },
      { text: "= {", cls: "text-[#d4d4d4]" },
    ],
  },
  {
    tokens: [
      { text: '    "Gameplay Systems"', cls: "text-[#ce9178]" },
      { text: ",", cls: "text-[#d4d4d4]" },
    ],
  },
  {
    tokens: [
      { text: '    "AI Programming"', cls: "text-[#ce9178]" },
      { text: ", ", cls: "text-[#d4d4d4]" },
      { text: '"API Dev"', cls: "text-[#ce9178]" },
    ],
  },
  { tokens: [{ text: "  };", cls: "text-[#d4d4d4]" }] },
  { tokens: [] },
  {
    tokens: [
      { text: "  void ", cls: "text-[#569cd6]" },
      { text: "build", cls: "text-[#dcdcaa]" },
      { text: "() {", cls: "text-[#d4d4d4]" },
    ],
  },
  {
    tokens: [{ text: "    while (passionate) {", cls: "text-[#d4d4d4]" }],
  },
  {
    tokens: [
      { text: "      learn", cls: "text-[#dcdcaa]" },
      { text: "(); create", cls: "text-[#d4d4d4]" },
      { text: "()", cls: "text-[#dcdcaa]" },
      { text: "; ship();", cls: "text-[#d4d4d4]" },
    ],
  },
  { tokens: [{ text: "    }", cls: "text-[#d4d4d4]" }] },
  { tokens: [{ text: "  }", cls: "text-[#d4d4d4]" }] },
  { tokens: [{ text: "};", cls: "text-[#d4d4d4]" }] },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#00d4ff] text-[11px] font-mono tracking-[0.4em] uppercase mb-3"
        >
          01 / About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-space font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-16"
        >
          Who I Am
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — text + stats */}
          <div>
            <motion.p
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-[#8892a4] text-lg leading-relaxed mb-5"
            >
              I&apos;m a game programmer and software engineer pursuing my{" "}
              <span className="text-white font-medium">
                MFA in Game Programming
              </span>{" "}
              at the University of the Incarnate Word, where I also serve as a
              Teaching Assistant for advanced C++ and Unreal Engine 5 courses.
            </motion.p>
            <motion.p
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-[#8892a4] text-lg leading-relaxed mb-12"
            >
              I specialize in{" "}
              <span className="text-white font-medium">gameplay programming</span>
              ,{" "}
              <span className="text-white font-medium">AI systems</span>
              , and{" "}
              <span className="text-white font-medium">
                software engineering
              </span>{" "}
              , from complex gameplay frameworks and behavior trees to REST APIs
              and production-ready C++ systems.
            </motion.p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {stats.map((stat, i) => {
                const card = (
                  <>
                    <p className="font-space font-bold text-2xl text-[#00d4ff] mb-1">
                      {stat.value}
                    </p>
                    <p className="text-[#8892a4] text-xs leading-tight">
                      {stat.label}
                    </p>
                  </>
                );
                return (
                  <motion.div
                    key={stat.label}
                    custom={4 + i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="rounded-2xl p-4 border border-white/[0.06] bg-white/[0.02] text-center"
                  >
                    {stat.url ? (
                      <a
                        href={stat.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:text-[#00d4ff] transition-colors duration-200"
                      >
                        {card}
                      </a>
                    ) : (
                      card
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right — VS Code card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-2xl overflow-hidden border border-white/[0.07] shadow-2xl"
            style={{ background: "rgba(12, 12, 28, 0.9)" }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-[#8892a4] text-xs ml-2 font-mono">
                GameProgrammer.cpp
              </span>
            </div>

            {/* Line numbers + code */}
            <div className="p-5 font-mono text-[13px] leading-[1.8] overflow-x-auto">
              {codeLines.map((line, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-[#4a4a6a] select-none w-4 text-right flex-shrink-0">
                    {i + 1}
                  </span>
                  <span>
                    {line.tokens.length === 0 ? (
                      <span>&nbsp;</span>
                    ) : (
                      line.tokens.map((token, j) => (
                        <span key={j} className={token.cls}>
                          {token.text}
                        </span>
                      ))
                    )}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
