import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Section4() {
  const main = useRef();
  useGSAP(
    () => {
      gsap.to(".trigger", {
        background: "#010300",
        scrollTrigger: {
          trigger: ".trigger",
          scrub: true,
          start: "center top",
          end: "bottom top",
          markers: true,
        },
      });
    },
    { scope: main },
  );
  return (
    <section
      ref={main}
      className="relative z-[2] flex h-[500vh] w-full items-center"
    >
      <div className="trigger h-full w-full">
        <div className="left-0 top-0 flex h-screen w-full flex-col items-center justify-center">
          <h1 className="text-[25vw] tracking-[3vw]">COFFEE</h1>
          <h1 className="text-[25vw] tracking-[3vw]">COFFEE</h1>
        </div>
      </div>
    </section>
  );
}
