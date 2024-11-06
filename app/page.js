"use client";
import { Canvas } from "@react-three/fiber";
import Scene from "@/components/Scene";
import { Beans } from "@/components/Beans";
import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Section1 from "./sections/Section1";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
   const [activeSection, setActiveSection] = useState(0);

   useEffect(() => {
      const sections = gsap.utils.toArray("section");

      sections.forEach((section, index) => {
         ScrollTrigger.create({
            trigger: section,
            // start: "top center",
            // end: "bottom center",
            onEnter: () => setActiveSection(index),
            onEnterBack: () => setActiveSection(index),
         });
      });

      return () => {
         ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
   }, []);

   return (
      <div className="bg-[#b68c49] content">
         <div className="h-screen fixed top-0 left-0 w-full z-[1]">
            <Canvas shadows>
               <fog attach="fog" color="#b68c49" near={10} far={15} />
               <Scene activeSection={activeSection} />
               <Beans
                  count={30}
                  radius={5}
                  xScale={1}
                  yScale={0.7}
                  zScale={1}
                  texture={0}
               />
               <Beans
                  count={10}
                  radius={5}
                  xScale={1}
                  yScale={0.7}
                  zScale={1}
                  texture={1}
               />
               <Beans
                  count={20}
                  radius={5}
                  xScale={1}
                  yScale={0.7}
                  zScale={1}
                  texture={2}
               />
            </Canvas>
         </div>

         <Section1 />
         <section className="h-[200vh] w-full flex items-center relative z-[2]">
            <div className="h-screen w-full  flex items-center">
               <div className="w-[700px] ml-[10%]">
                  <h2 className="text-[68px] uppercase leading-[1] mb-[40px]">
                     Best coffee ever
                  </h2>
                  <p className="text-[18px] max-w-[500px] mb-[40px]">
                     Contrary to popular belief, Lorem Ipsum is not simply
                     random text. It has roots in a piece of classical Latin
                     literature from 45 BC, making it over 2000 years old.
                     Richard McClintock, a Latin professor at Hampden-Sydney
                     College in Virginia, looked up one of the more obscure
                     Latin words, consectetur, from a Lorem Ipsum passage, and
                     going through the cites of the word in classical
                     literature, discovered the undoubtable source. Lorem Ipsum
                     comes from sections 1.10.32 and 1.10.33 of "de Finibus
                     Bonorum et Malorum" (The Extremes of Good and Evil) by
                     Cicero, written in 45 BC. This book is a treatise on the
                     theory of ethics, very popular during the Renaissance. The
                     first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                     comes from a line in section 1.10.32.
                  </p>
                  <p className="text-[18px] max-w-[500px]">
                     Contrary to popular belief, Lorem Ipsum is not simply
                     random text. It has roots in a piece of classical Latin
                     literature from 45 BC, making it over 2000 years old.
                     Richard McClintock, a Latin professor at Hampden-Sydney
                     College in Virginia, looked up one of the more obscure
                     Latin words, consectetur, from a Lorem Ipsum passage, and
                     going through the cites of the word in classical
                     literature, discovered the undoubtable source. Lorem Ipsum
                     comes from sections 1.10.32 and 1.10.33 of "de Finibus
                     Bonorum et Malorum" (The Extremes of Good and Evil) by
                     Cicero, written in 45 BC. This book is a treatise on the
                     theory of ethics, very popular during the Renaissance. The
                     first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                     comes from a line in section 1.10.32.
                  </p>
               </div>
            </div>
         </section>
         <section
            className="h-[200vh] w-full flex items-center relative z-[2]"
            id="section3"
         >
            <div className="h-screen w-full flex justify-end items-center">
               <div className="w-[400px] mr-[10%]">
                  <h2 className="text-[20vw] md:text-[140px] uppercase leading-[1] ">
                     Best cofe ever
                  </h2>
                  <h2 className="text-[20vw] md:text-[140px] uppercase leading-[1] ">
                     Best cofe ever
                  </h2>
                  <h2 className="text-[20vw] md:text-[140px] uppercase leading-[1] ">
                     Best cofe ever
                  </h2>
                  <h2 className="text-[20vw] md:text-[140px] uppercase leading-[1] ">
                     Best cofe ever
                  </h2>
                  <h2 className="text-[20vw] md:text-[140px] uppercase leading-[1] ">
                     Best cofe ever
                  </h2>
                  <h2 className="text-[20vw] md:text-[140px] uppercase leading-[1] ">
                     Best cofe ever
                  </h2>
               </div>
            </div>
         </section>
         <section className="h-[200vh] w-full relative z-[0] flex items-center">
            <div className="h-screen w-full top-0 left-0 flex flex-col justify-center items-center">
               <h1 className="text-[25vw] tracking-[3vw]">COFE</h1>
               <h1 className="text-[25vw] tracking-[3vw]">COFE</h1>
            </div>
         </section>
         <section className="h-[200vh] w-full relative z-[2]">
            <div className="sticky h-screen w-full top-0 left-0 flex justify-around items-center">
               <h1 className="md:text-[160px] text-[30vw]">CO</h1>
               <h1 className="md:text-[160px] text-[30vw]">FE</h1>
            </div>
         </section>
         <section id="section6" className="h-[200vh] w-full relative z-[2]">
            <div className="sticky h-screen w-full top-0 left-0 flex justify-around items-center">
               <h1 className="md:text-[160px] text-[30vw]">CO</h1>
               <h1 className="md:text-[160px] text-[30vw]">FE</h1>
            </div>
         </section>
      </div>
   );
}
