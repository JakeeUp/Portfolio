"use client";

// Fixed gradient orbs that slowly drift — independent of scroll, always visible
export default function GradientOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

      {/* Cyan — top left */}
      <div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          top: -200,
          left: -180,
          background: "radial-gradient(circle, rgba(0,212,255,0.13) 0%, transparent 70%)",
          filter: "blur(20px)",
          animation: "orbDrift1 14s ease-in-out infinite alternate",
        }}
      />

      {/* Purple — right center */}
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: "25%",
          right: -200,
          background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
          filter: "blur(20px)",
          animation: "orbDrift2 18s ease-in-out infinite alternate",
        }}
      />

      {/* Blue — bottom left */}
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          bottom: "10%",
          left: -100,
          background: "radial-gradient(circle, rgba(0,102,255,0.10) 0%, transparent 70%)",
          filter: "blur(20px)",
          animation: "orbDrift3 20s ease-in-out infinite alternate",
        }}
      />

      {/* Cyan accent — top right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 350,
          height: 350,
          top: "5%",
          right: "10%",
          background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
          filter: "blur(16px)",
          animation: "orbDrift2 10s ease-in-out infinite alternate-reverse",
        }}
      />

      {/* Purple accent — bottom right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 450,
          height: 450,
          bottom: -100,
          right: "5%",
          background: "radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 70%)",
          filter: "blur(18px)",
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
      `}</style>
    </div>
  );
}
