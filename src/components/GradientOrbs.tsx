"use client";

// Fixed gradient orbs that slowly drift — independent of scroll, always visible.
//
// PERFORMANCE NOTE: CSS `filter: blur()` on fixed/animated elements forces the
// browser to re-rasterize on the GPU every frame, causing mobile scroll stutter.
// Solution: remove blur entirely — the radial-gradient already produces a soft
// falloff. Add `will-change: transform` so each orb gets its own compositor layer
// and never triggers a repaint during scroll.
export default function GradientOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

      {/* Cyan — top left */}
      <div
        className="absolute rounded-full"
        style={{
          width: 800,
          height: 800,
          top: -250,
          left: -220,
          background: "radial-gradient(circle, rgba(0,212,255,0.18) 0%, rgba(0,212,255,0.06) 45%, transparent 70%)",
          willChange: "transform",
          animation: "orbDrift1 14s ease-in-out infinite alternate",
        }}
      />

      {/* Purple — right center */}
      <div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          top: "20%",
          right: -240,
          background: "radial-gradient(circle, rgba(124,58,237,0.16) 0%, rgba(124,58,237,0.05) 45%, transparent 70%)",
          willChange: "transform",
          animation: "orbDrift2 18s ease-in-out infinite alternate",
        }}
      />

      {/* Blue — bottom left */}
      <div
        className="absolute rounded-full"
        style={{
          width: 580,
          height: 580,
          bottom: "8%",
          left: -130,
          background: "radial-gradient(circle, rgba(0,102,255,0.14) 0%, rgba(0,102,255,0.04) 45%, transparent 70%)",
          willChange: "transform",
          animation: "orbDrift3 20s ease-in-out infinite alternate",
        }}
      />

      {/* Cyan accent — top right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          top: "5%",
          right: "10%",
          background: "radial-gradient(circle, rgba(0,212,255,0.11) 0%, rgba(0,212,255,0.03) 45%, transparent 70%)",
          willChange: "transform",
          animation: "orbDrift2 10s ease-in-out infinite alternate-reverse",
        }}
      />

      {/* Purple accent — bottom right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 520,
          height: 520,
          bottom: -120,
          right: "5%",
          background: "radial-gradient(circle, rgba(124,58,237,0.13) 0%, rgba(124,58,237,0.04) 45%, transparent 70%)",
          willChange: "transform",
          animation: "orbDrift1 16s ease-in-out infinite alternate-reverse",
        }}
      />

      <style>{`
        @keyframes orbDrift1 {
          from { transform: translate(0px, 0px); }
          to   { transform: translate(50px, 35px); }
        }
        @keyframes orbDrift2 {
          from { transform: translate(0px, 0px); }
          to   { transform: translate(-40px, 50px); }
        }
        @keyframes orbDrift3 {
          from { transform: translate(0px, 0px); }
          to   { transform: translate(35px, -45px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .orb-animated { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
