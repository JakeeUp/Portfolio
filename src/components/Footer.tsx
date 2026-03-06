"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#home"
          className="font-space font-bold text-xl tracking-tight select-none"
        >
          <span className="text-[#00d4ff]">J</span>acob
          <span className="text-[#00d4ff]">F</span>
        </a>

        {/* Copyright */}
        <p className="text-[#8892a4] text-xs font-mono text-center">
          © {year} Jacob Fernandez · Built with Next.js &amp; Three.js
        </p>

        {/* Back to top */}
        <a
          href="#home"
          className="text-[#8892a4] text-xs font-mono hover:text-[#00d4ff] transition-colors duration-200"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
