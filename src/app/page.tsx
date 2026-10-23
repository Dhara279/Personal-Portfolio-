import React from "react";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Work } from "@/components/sections/Work";
import { Journey } from "@/components/sections/Journey";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { MotionManager } from "@/components/motion/MotionManager";

export default function HomePage() {
  return (
    <SmoothScroll>
      <MotionManager />
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Expertise />
        <Work />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </SmoothScroll>
  );
}
