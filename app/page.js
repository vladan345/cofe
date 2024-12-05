"use client";

import { useState, useEffect, Suspense } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Section1 from "./sections/Section1";
import Experience from "@/components/Experience";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Loader from "@/components/Loader";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const backgroundColor = "#61352b";
  // Section handling for cup animation
  useEffect(() => {
    gsap.to(".bar", {
      height: "calc(100% - 20px)",
      scrollTrigger: {
        trigger: ".content",
        scrub: true,
        start: "top top",
        end: "bottom bottom",
      },
    });
  }, []);

  return (
    <main className="content" style={{ backgroundColor }}>
      <div className="bar fixed right-[10px] top-[10px] z-[10] h-0 w-[13px] rounded-full bg-[#9cd4e6] md:right-[5px] md:w-[6px]"></div>
      <Suspense fallback={<Loader />}>
        <Experience backgroundColor={backgroundColor} />
      </Suspense>
      <Section1 />

      <Section2 />
      <section className="transitionSection relative z-[3] h-[100vh]"></section>
      <Section3 />
      <section className="transitionSection relative z-[3] h-[200vh]"></section>
      <section className="transitionSection relative z-[3] h-[200vh]"></section>
      <Section4 />

      <Section5 />
    </main>
  );
}
