import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Section1() {
   const main = useRef();

   useGSAP(
      () => {
         gsap.fromTo(
            ".cover",
            { clipPath: "inset(0 0 100% 0)" },
            { clipPath: "inset(0 0 0% 0)", duration: 1, delay: 1 }
         );

         const text = new SplitType(".cover");
         gsap.to(text.chars, {
            clipPath: "inset(100% 0 0 0)",
            scrollTrigger: {
               trigger: ".trigger",
               start: "top top",
               end: "80% top",
               scrub: true,

               toggleActions: "play none none reverse",
            },
            stagger: 0.05,
         });
      },
      { scope: main }
   );

   return (
      <section className="pointer-events-none" ref={main}>
         <div className="h-[500vh] w-full relative z-[1] trigger">
            <div className="sticky h-screen w-full top-0 left-0 flex justify-around items-center">
               <div className="relative h-[calc(20vw*1.5)] textWrap">
                  <h1 className="text-[20vw] tracking-widest cover font-bold">
                     COFFEE
                  </h1>
               </div>
            </div>
         </div>
      </section>
   );
}
