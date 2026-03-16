"use client";

import { useEffect, useRef } from "react";

// Stays fully opaque until Hero dispatches "hero-ready", then fades out.
// Fallback: forces fade after 4s even if the event never fires.
export default function PageLoader() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fadeOut = () => {
      el.style.transition = "opacity 0.7s ease-out";
      el.style.opacity = "0";
      setTimeout(() => {
        el.style.display = "none";
      }, 700);
    };

    // Listen for Three.js first-frame signal from Hero.tsx
    window.addEventListener("hero-ready", fadeOut, { once: true });

    // Safety fallback — fade regardless after 4s
    const fallback = setTimeout(fadeOut, 4000);

    return () => {
      window.removeEventListener("hero-ready", fadeOut);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        background: "#04040f",
        zIndex: 99999,
        pointerEvents: "none",
        opacity: 1,
      }}
    />
  );
}
