"use client";
import { Canvas } from "@react-three/fiber";
import Scene from "@/components/Scene";
import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
      <div className="bg-orange-900 content">
         <div className="h-screen fixed top-0 left-0 w-full z-[1]">
            <Canvas>
               <Scene activeSection={activeSection} />
            </Canvas>
         </div>

         <section className="h-[300vh] w-full relative z-[2]">
            <div className="sticky h-screen w-full top-0 left-0 flex justify-around items-center">
               <h1 className="md:text-[160px] text-[30vw]">CO</h1>
               <h1 className="md:text-[160px] text-[30vw]">FE</h1>
            </div>
         </section>
         <section className="h-[300vh] w-full flex items-center relative z-[2]">
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
            className="h-[300vh] w-full flex items-center relative z-[2]"
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
         <section className="h-[300vh] bg-black w-full relative z-[0] flex  items-center">
            <div className="h-screen w-full top-0 left-0 flex flex-col justify-center items-center">
               <h1 className="text-[25vw] tracking-[3vw]">COFE</h1>
               <h1 className="text-[25vw] tracking-[3vw]">COFE</h1>
            </div>
         </section>
         <section className="h-[300vh] w-full relative z-[2]">
            <div className="sticky h-screen w-full top-0 left-0 flex justify-around items-center">
               <h1 className="md:text-[160px] text-[30vw]">CO</h1>
               <h1 className="md:text-[160px] text-[30vw]">FE</h1>
            </div>
         </section>
      </div>
   );
}
