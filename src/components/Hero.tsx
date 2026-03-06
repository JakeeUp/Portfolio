"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ─── Scene ───────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x04040f, 0.022);

    // ─── Camera ───────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 2, 9);

    // ─── Renderer ────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x04040f);

    // ─── Main wireframe: Torus Knot ──────────────────────────
    const torusGeo = new THREE.TorusKnotGeometry(2, 0.45, 180, 20);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    scene.add(torus);

    // ─── Outer shell: Icosahedron ────────────────────────────
    const outerGeo = new THREE.IcosahedronGeometry(4.5, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x0055ff,
      wireframe: true,
      transparent: true,
      opacity: 0.05,
    });
    const outer = new THREE.Mesh(outerGeo, outerMat);
    scene.add(outer);

    // ─── Inner ring: Octahedron accent ───────────────────────
    const ringGeo = new THREE.OctahedronGeometry(1.2, 1);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    scene.add(ring);

    // ─── Ground grid ─────────────────────────────────────────
    const grid = new THREE.GridHelper(60, 60, 0x0a1a30, 0x05101e);
    grid.position.y = -4;
    scene.add(grid);

    // ─── Particles ───────────────────────────────────────────
    const count = 1800;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 7 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0x00aaff,
      size: 0.035,
      transparent: true,
      opacity: 0.45,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ─── Mouse tracking ──────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 1.5;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // ─── Touch tracking (mobile) ─────────────────────────────
    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      mouseRef.current.x = (touch.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = -(touch.clientY / window.innerHeight - 0.5) * 1.5;
    };
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    // ─── Resize ──────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", onResize, { passive: true });

    // ─── Animation loop ──────────────────────────────────────
    let raf: number;
    const camTarget = { x: 0, y: 0 };
    const clock = new THREE.Clock();

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      torus.rotation.x = t * 0.12;
      torus.rotation.y = t * 0.19;
      outer.rotation.x = t * -0.04;
      outer.rotation.y = t * 0.07;
      ring.rotation.x = t * 0.3;
      ring.rotation.z = t * 0.2;
      particles.rotation.y = t * 0.015;

      // Smooth camera follow mouse
      camTarget.x += (mouseRef.current.x * 0.9 - camTarget.x) * 0.05;
      camTarget.y += (mouseRef.current.y * 0.4 - camTarget.y) * 0.05;
      camera.position.x = camTarget.x;
      camera.position.y = 2 + camTarget.y;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    // ─── Cleanup ─────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Three.js canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#04040f] to-transparent pointer-events-none" />

      {/* Dark backdrop behind text for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 45%, rgba(4,4,15,0.72) 0%, rgba(4,4,15,0.35) 50%, transparent 75%)",
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Eyebrow label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[#00d4ff] text-[11px] font-mono tracking-[0.45em] uppercase mb-6"
        >
          Game Programmer · Software Engineer
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-space font-bold leading-[0.9] tracking-tight mb-6 gradient-text"
          style={{ fontSize: "clamp(3.2rem, 10vw, 8.5rem)", filter: "drop-shadow(0 2px 24px rgba(0,0,0,0.95))" }}
        >
          Jacob Fernandez
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-[#b8c4d0] text-lg md:text-xl max-w-lg mx-auto mb-10 leading-relaxed"
          style={{ textShadow: "0 2px 16px rgba(0,0,0,0.9)" }}
        >
          Game programmer and software engineer specializing in{" "}
          <span className="text-white font-medium">C++</span>,{" "}
          <span className="text-white font-medium">C#</span>,{" "}
          <span className="text-white font-medium">Python</span>,{" "}
          <span className="text-white font-medium">Unreal Engine 5</span>, and{" "}
          <span className="text-white font-medium">Unity</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col items-center gap-4"
        >
          {/* Top row — 3 outline buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://linkedin.com/in/JacobFernandezProgrammer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold tracking-wide text-white border border-white/20 hover:border-[#0a66c2] hover:text-[#0a66c2] transition-all duration-300"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <FaLinkedin />
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold tracking-wide text-white border border-white/20 hover:border-[#00d4ff]/60 hover:text-[#00d4ff] transition-all duration-300"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <FiDownload />
              Download Resume
            </a>
            <a
              href="https://github.com/JakeeUp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold tracking-wide text-white border border-white/20 hover:border-white/60 hover:text-white transition-all duration-300"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <FaGithub />
              GitHub
            </a>
          </div>

          {/* Bottom row — View Projects CTA */}
          <a
            href="#projects"
            className="px-10 py-3.5 rounded-full text-sm font-semibold tracking-wide text-black transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)",
              boxShadow: "0 0 30px rgba(0,212,255,0.3)",
            }}
          >
            View Projects
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.9 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[#8892a4] text-[10px] font-mono tracking-[0.35em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ scaleY: [1, 0.4, 1], opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 origin-top"
            style={{
              background:
                "linear-gradient(to bottom, #00d4ff, transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
