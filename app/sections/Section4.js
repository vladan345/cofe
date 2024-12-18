import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

export default function Section4() {
  const main = useRef();
  useGSAP(
    () => {
      gsap.to(".cup", {
        top: "-=100%",
        yPercent: -100,
        scrollTrigger: {
          trigger: ".trigger",
          scrub: true,
          start: "20% top",
          end: "120% bottom",
        },
      });

      const text1 = new SplitType(".coffeeText1");
      const text2 = new SplitType(".coffeeText2");
      const text3 = new SplitType(".coffeeText3");
      gsap.to(text1.chars, {
        clipPath: "polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)",
        scrollTrigger: {
          trigger: ".trigger",
          start: "top top",
          end: "20% top",
          scrub: true,
          toggleActions: "play none none reverse",
        },
        stagger: 0.05,
      });
      gsap.to(text2.chars, {
        clipPath: "polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)",
        scrollTrigger: {
          trigger: ".trigger",
          start: "top top",
          end: "20% top",
          scrub: true,
          toggleActions: "play none none reverse",
        },
        stagger: 0.05,
      });
      gsap.to(text3.chars, {
        clipPath: "polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)",
        scrollTrigger: {
          trigger: ".trigger",
          start: "top top",
          end: "20% top",
          scrub: true,
          toggleActions: "play none none reverse",
        },
        stagger: 0.05,
      });
      gsap.to(".sticky h1", {
        scale: 1,
        scrollTrigger: {
          trigger: ".trigger",
          start: "top top",
          end: "bottom top",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: main },
  );
  return (
    <section
      id="section4"
      ref={main}
      className="relative z-[2] flex h-[300vh] w-full items-center"
    >
      <div className="trigger h-full w-full">
        <div className="sticky left-0 top-0 flex h-screen w-full flex-col items-center justify-center">
          <h1 className="coffeeText1 absolute left-1/2 top-1/2 z-[0] -translate-x-1/2 -translate-y-1/2 scale-[0.8] text-center font-[Arial] text-[12vw] font-semibold leading-[1] tracking-[0.05em] blur-[20px]">
            CLARITY BEGINS HERE
          </h1>
          <h1 className="coffeeText2 absolute left-1/2 top-1/2 z-[0] -translate-x-1/2 -translate-y-1/2 scale-[0.8] text-center font-[Arial] text-[12vw] font-semibold leading-[1] tracking-[0.05em]">
            CLARITY BEGINS HERE
          </h1>

          <Image
            src="/casa.png"
            alt="Coffee cup"
            width={1182}
            height={1560}
            className="cup absolute left-1/2 top-[100%] z-[1] max-w-[600px] -translate-x-1/2 md:max-w-[300px]"
          />
          <h1 className="coffeeText3 text-stroke absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 scale-[0.8] text-center font-[Arial] text-[12vw] font-semibold leading-[1] tracking-[0.05em] text-transparent">
            CLARITY BEGINS HERE
          </h1>
        </div>
      </div>
    </section>
  );
}
