"use client";

import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FiExternalLink, FiStar, FiCode } from "react-icons/fi";

const GITHUB_USERNAME = "jakeeup";
const GITHUB_URL = "https://github.com/jakeeup";

const repos = [
  {
    name: "TopDown_Mechanics",
    desc: "Unity 6 third/first-person hybrid shooter inspired by Rainbow Six Vegas perspective system.",
    lang: "C#",
    langColor: "#9B4F96",
    stars: 0,
    url: `${GITHUB_URL}/TopDown_Mechanics`,
  },
  {
    name: "Engine_OpenGLProject",
    desc: "Rendering pipeline from scratch: shaders, 3D model loading, ImGui integration.",
    lang: "C++",
    langColor: "#f34b7d",
    stars: 0,
    url: `${GITHUB_URL}/Engine_OpenGLProject`,
  },
  {
    name: "cs-skin-api",
    desc: "C++ REST API serving live CS2 market data with a knapsack budget optimizer. Uses Crow, libcurl, nlohmann/json.",
    lang: "C++",
    langColor: "#f34b7d",
    stars: 0,
    url: `${GITHUB_URL}/cs-skin-api`,
  },
  {
    name: "HandTracking-TileGame",
    desc: "Tile game using Python and the MediaPipe hand tracking library.",
    lang: "Python",
    langColor: "#3572A5",
    stars: 1,
    url: `${GITHUB_URL}/HandTracking-TileGame`,
  },
];

export default function GitHubSection() {
  return (
    <section
      id="github"
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
          06 / GitHub
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-space font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-16"
        >
          Open Source &amp; Work
        </motion.h2>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">

          {/* ── Profile card ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glow-card rounded-2xl p-6 border border-white/[0.06] bg-white/[0.02] flex flex-col items-center text-center gap-4"
          >
            {/* Avatar */}
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github.com/${GITHUB_USERNAME}.png`}
                alt="Jacob Fernandez GitHub avatar"
                className="w-24 h-24 rounded-full border-2 border-[#00d4ff]/30"
              />
              <div
                className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center border border-white/10"
                style={{ background: "#0d1117" }}
              >
                <SiGithub className="text-white text-sm" />
              </div>
            </div>

            {/* Name & handle */}
            <div>
              <p className="font-space font-bold text-lg text-white">
                Jacob Fernandez
              </p>
              <p className="text-[#8892a4] text-sm font-mono">@JakeeUp</p>
            </div>

            {/* Bio */}
            <p className="text-[#8892a4] text-sm leading-relaxed">
              UIW MGD Programmer · C++ systems programmer who does it for the
              love of the game.
            </p>

            {/* Stats */}
            <div className="w-full grid grid-cols-2 gap-2 pt-2 border-t border-white/[0.06]">
              <div className="text-center">
                <p className="font-space font-bold text-xl text-white">70+</p>
                <p className="text-[#8892a4] text-xs">Repositories</p>
              </div>
              <div className="text-center">
                <p className="font-space font-bold text-xl text-white">
                  San Antonio
                </p>
                <p className="text-[#8892a4] text-xs">Texas</p>
              </div>
            </div>

            {/* Link */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-black transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)",
              }}
            >
              <SiGithub className="text-base" />
              View Profile
            </a>
          </motion.div>

          {/* ── Repo grid ── */}
          <div className="grid sm:grid-cols-2 gap-4">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group glow-card rounded-2xl p-5 border border-white/[0.06] bg-white/[0.02] hover:border-[#00d4ff]/25 hover:bg-white/[0.04] transition-all duration-300 flex flex-col gap-3"
              >
                {/* Repo header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <FiCode className="text-[#8892a4] text-sm flex-shrink-0" />
                    <span className="font-space font-semibold text-sm text-white group-hover:text-[#00d4ff] transition-colors duration-200 truncate">
                      {repo.name}
                    </span>
                  </div>
                  <FiExternalLink className="text-[#8892a4] text-xs flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>

                {/* Description */}
                <p className="text-[#8892a4] text-xs leading-relaxed flex-1">
                  {repo.desc}
                </p>

                {/* Footer */}
                <div className="flex items-center gap-3 pt-1">
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ background: repo.langColor }}
                    />
                    <span className="text-[#8892a4] text-xs font-mono">
                      {repo.lang}
                    </span>
                  </div>
                  {repo.stars > 0 && (
                    <div className="flex items-center gap-1 text-[#8892a4]">
                      <FiStar className="text-xs" />
                      <span className="text-xs font-mono">{repo.stars}</span>
                    </div>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
