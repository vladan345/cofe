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
        { clipPath: "polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)" },
        {
          clipPath: "polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)",
          duration: 1,
          delay: 1,
        },
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
    { scope: main },
  );

  return (
    <section className="pointer-events-none" ref={main}>
      <div className="trigger relative z-[1] h-[500vh] w-full">
        <div className="sticky left-0 top-0 flex h-screen w-full items-center justify-around">
          <div className="textWrap relative flex h-[calc(20vw*1.5)] flex-col items-center justify-center">
            <h1 className="cover text-center font-crimson text-[6vw] leading-[1.2]">
              Straight to the Good Stuff:
            </h1>
            <h1 className="cover text-[20vw] font-bold leading-[0.9] tracking-[0.05em]">
              COFFEE
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
