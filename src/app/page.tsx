"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GitHubSection from "@/components/GitHubSection";
import Reel from "@/components/Reel";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Hero uses Three.js which requires a browser — disable SSR
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });

export default function Home() {
  return (
    <main className="bg-[#04040f] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <GitHubSection />
      <Reel />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
