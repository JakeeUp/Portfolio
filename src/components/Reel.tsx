"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SiVimeo } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FiExternalLink, FiPlay } from "react-icons/fi";

// ─── Update this URL with your specific LinkedIn post link ───────────────────
const LINKEDIN_VIDEO_URL = "https://www.linkedin.com/in/jacobfernandezprogrammer/";
// ─────────────────────────────────────────────────────────────────────────────

// Vimeo video ID — update if you re-upload to a new URL
const VIMEO_VIDEO_ID = "1078568958";

const VIMEO_BASE = `https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?title=0&byline=0&portrait=0&color=00d4ff&quality=1080p`;
const VIMEO_AUTOPLAY = `${VIMEO_BASE}&autoplay=1&muted=1`;

export default function Reel() {
  const sectionRef = useRef<HTMLElement>(null);
  const [src, setSrc] = useState(VIMEO_BASE);

  // Autoplay when the section scrolls into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSrc(VIMEO_AUTOPLAY);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="reel" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#00d4ff] text-[11px] font-mono tracking-[0.4em] uppercase mb-3"
        >
          05 / Reel &amp; Media
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-space font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-5"
        >
          Gameplay Reel
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#8892a4] text-lg mb-14 max-w-2xl"
        >
          A showcase of gameplay systems, mechanics, and engine work. Updated
          directly on Vimeo, always reflecting the latest version.
        </motion.p>

        <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">

          {/* ── Vimeo embed ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden border border-white/[0.06] bg-black relative"
            style={{ aspectRatio: "16/9" }}
          >
            <iframe
              src={src}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="JacobF Gameplay Programming Reel"
            />
          </motion.div>

          {/* ── Side cards ── */}
          <div className="flex flex-col gap-4">

            {/* Vimeo link card */}
            <motion.a
              href={`https://vimeo.com/${VIMEO_VIDEO_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="group glow-card rounded-2xl p-5 border border-white/[0.06] bg-white/[0.02] hover:border-[#1ab7ea]/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#1ab7ea]/10 border border-[#1ab7ea]/20">
                  <SiVimeo className="text-[#1ab7ea] text-lg" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm group-hover:text-[#1ab7ea] transition-colors duration-200">
                    Gameplay Programming Reel
                  </p>
                  <p className="text-[#8892a4] text-xs font-mono">vimeo.com</p>
                </div>
                <FiExternalLink className="text-[#8892a4] ml-auto text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
              <p className="text-[#8892a4] text-xs leading-relaxed">
                Full gameplay programming reel featuring systems built in UE5,
                Unity, and custom engines. Hosted on Vimeo, always current.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <SiVimeo className="text-[#1ab7ea] text-xs" />
                <span className="text-[#1ab7ea] text-xs font-mono">
                  JacobF_GameplayProgrammingReel
                </span>
              </div>
            </motion.a>

            {/* LinkedIn video card */}
            <motion.a
              href={LINKEDIN_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="group glow-card rounded-2xl p-5 border border-white/[0.06] bg-white/[0.02] hover:border-[#0077b5]/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#0077b5]/10 border border-[#0077b5]/20">
                  <FaLinkedin className="text-[#0077b5] text-lg" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm group-hover:text-[#0077b5] transition-colors duration-200">
                    Class Project Showcase
                  </p>
                  <p className="text-[#8892a4] text-xs font-mono">linkedin.com</p>
                </div>
                <FiExternalLink className="text-[#8892a4] ml-auto text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
              <p className="text-[#8892a4] text-xs leading-relaxed">
                Featured class project video posted to LinkedIn. Demonstrates
                gameplay systems and technical implementation in a production
                context.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <FiPlay className="text-[#0077b5] text-xs" />
                <span className="text-[#0077b5] text-xs font-mono">
                  Watch on LinkedIn →
                </span>
              </div>
            </motion.a>

            {/* Note */}
            <p className="text-[#8892a4] text-xs font-mono text-center px-2 leading-relaxed">
              Videos link directly to their sources, content stays current
              when updated on Vimeo or LinkedIn.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
