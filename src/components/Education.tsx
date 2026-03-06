"use client";

import { motion } from "framer-motion";
import { FiAward, FiZap } from "react-icons/fi";

export default function Education() {
  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#00d4ff] text-[11px] font-mono tracking-[0.4em] uppercase mb-3"
        >
          07 / Education
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-space font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-5"
        >
          Academic Background
        </motion.h2>

        {/* Accelerated program banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#00d4ff]/20 bg-[#00d4ff]/[0.05] mb-14 w-fit"
        >
          <FiZap className="text-[#00d4ff] flex-shrink-0" />
          <span className="text-[#00d4ff] text-sm font-medium">
            Accelerated Concurrent Program: B.F.A. &amp; M.F.A. simultaneously · 2021 – 2026
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* ── MFA Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="glow-card rounded-2xl p-8 border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.10] transition-colors duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00d4ff]/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-start justify-between mb-6 relative">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-[#00d4ff] text-xs font-mono tracking-wider uppercase">
                    2024 – 2026
                  </p>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-[#7c3aed] border border-[#7c3aed]/30 bg-[#7c3aed]/[0.08]">
                    Accelerated
                  </span>
                </div>
                <h3 className="font-space font-bold text-2xl text-white leading-tight">
                  Master of Fine Arts
                </h3>
                <p className="text-[#8892a4] text-lg">Game Programming</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono text-[#10b981] border border-[#10b981]/25 bg-[#10b981]/[0.08] mt-1 whitespace-nowrap flex-shrink-0">
                Expected 2026
              </span>
            </div>

            <p className="text-white font-medium relative mb-0.5">
              University of the Incarnate Word
            </p>
            <p className="text-[#8892a4] text-sm relative mb-6">
              San Antonio, Texas
            </p>

            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#f59e0b]/[0.06] border border-[#f59e0b]/20 mb-6 relative">
              <FiAward className="text-[#f59e0b] text-lg flex-shrink-0" />
              <span className="text-[#f59e0b] text-sm font-medium">
                Triple A Programmer Award · 2024
              </span>
            </div>

            <div className="relative">
              <p className="text-[#8892a4] text-[11px] font-mono uppercase tracking-[0.2em] mb-3">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Advanced C++ Programming",
                  "C# Programming",
                  "Unity",
                  "Unreal Engine 5",
                  "Systems Architecture",
                  "Gameplay Programming",
                  "AI Systems",
                  "Performance Optimization",
                  "Object-Oriented Programming",
                  "Web Development",
                ].map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1 rounded-full text-xs text-[#8892a4] border border-white/[0.06] bg-white/[0.02]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── BFA Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glow-card rounded-2xl p-8 border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.10] transition-colors duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#7c3aed]/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-start justify-between mb-6 relative">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-[#00d4ff] text-xs font-mono tracking-wider uppercase">
                    2021 – 2026
                  </p>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-[#7c3aed] border border-[#7c3aed]/30 bg-[#7c3aed]/[0.08]">
                    Concurrent
                  </span>
                </div>
                <h3 className="font-space font-bold text-2xl text-white leading-tight">
                  Bachelor of Fine Arts
                </h3>
                <p className="text-[#8892a4] text-lg">Game Programming</p>
                <p className="text-[#8892a4] text-sm mt-1">
                  Minor: Computer Interactive Systems (CIS)
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono text-[#10b981] border border-[#10b981]/25 bg-[#10b981]/[0.08] mt-1 whitespace-nowrap flex-shrink-0">
                Expected 2026
              </span>
            </div>

            <p className="text-white font-medium relative mb-0.5">
              University of the Incarnate Word
            </p>
            <p className="text-[#8892a4] text-sm relative mb-6">
              San Antonio, Texas
            </p>

            {/* Core coursework */}
            <div className="relative mb-5">
              <p className="text-[#8892a4] text-[11px] font-mono uppercase tracking-[0.2em] mb-3">
                Core Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures & Algorithms",
                  "Computer Graphics",
                  "Game Engine Architecture",
                  "Software Engineering",
                  "Database Systems",
                ].map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1 rounded-full text-xs text-[#8892a4] border border-white/[0.06] bg-white/[0.02]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* CIS Minor coursework */}
            <div className="relative">
              <p className="text-[#8892a4] text-[11px] font-mono uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                <span className="text-[#7c3aed]">{'//'}</span> CIS Minor Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Web Development",
                  "Object-Oriented Programming",
                  "Database Systems",
                  "Python Programming",
                ].map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1 rounded-full text-xs text-[#8892a4] border border-[#7c3aed]/20 bg-[#7c3aed]/[0.04]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
