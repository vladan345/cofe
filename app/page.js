"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Section1 from "./sections/Section1";
import Experience from "@/components/Experience";
import Section2 from "./sections/Section2";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const backgroundColor = "#83d0fc";
  // Section handling for cup animation

  useEffect(() => {
    const sections = gsap.utils.toArray("section");
    console.log(sections);
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        onEnter: () => setActiveSection(index),
        onEnterBack: () => setActiveSection(index),
        start: "top top",
        end: "bottom bottom",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="content" style={{ backgroundColor }}>
      <Experience
        activeSection={activeSection}
        backgroundColor={backgroundColor}
      />
      <Section1 />
      <section className="transitionSection relative z-[3] h-[200vh]"></section>
      <Section2 />
      <section className="transitionSection relative z-[3] h-[200vh]"></section>

      <section className="relative z-[2] flex h-[200vh] w-full items-center">
        <div className="flex h-screen w-full items-center justify-end">
          <div className="mr-[10%] w-[400px]">
            <h2 className="text-[20vw] uppercase leading-[1] md:text-[140px]">
              Best cofe ever
            </h2>
            <h2 className="text-[20vw] uppercase leading-[1] md:text-[140px]">
              Best cofe ever
            </h2>
            <h2 className="text-[20vw] uppercase leading-[1] md:text-[140px]">
              Best cofe ever
            </h2>
            <h2 className="text-[20vw] uppercase leading-[1] md:text-[140px]">
              Best cofe ever
            </h2>
            <h2 className="text-[20vw] uppercase leading-[1] md:text-[140px]">
              Best cofe ever
            </h2>
            <h2 className="text-[20vw] uppercase leading-[1] md:text-[140px]">
              Best cofe ever
            </h2>
          </div>
        </div>
      </section>
      <section className="relative z-[0] flex h-[500vh] w-full items-center">
        <div className="left-0 top-0 flex h-screen w-full flex-col items-center justify-center">
          <h1 className="text-[25vw] tracking-[3vw]">COFE</h1>
          <h1 className="text-[25vw] tracking-[3vw]">COFE</h1>
        </div>
      </section>
      <section className="relative z-[2] h-[500vh] w-full">
        <div className="sticky left-0 top-0 flex h-screen w-full items-center justify-around">
          <h1 className="text-[30vw] md:text-[160px]">CO</h1>
          <h1 className="text-[30vw] md:text-[160px]">FE</h1>
        </div>
      </section>
      <section id="section6" className="relative z-[2] h-[500vh] w-full">
        <div className="sticky left-0 top-0 flex h-screen w-full items-center justify-around">
          <h1 className="text-[30vw] md:text-[160px]">CO</h1>
          <h1 className="text-[30vw] md:text-[160px]">FE</h1>
        </div>
      </section>
    </main>
  );
}
