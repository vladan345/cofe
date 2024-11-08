import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function Section3() {
  const main = useRef(null);

  useGSAP(
    () => {
      const points = gsap.utils.toArray(".point");
      points.forEach((point, index) => {
        gsap.to(point, {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: ".trigger",
            scrub: true,
            start: `${20 * index}% top`,
            end: `${20 * (index + 1)}% center`,
          },
        });
      });
      gsap.to(".pointsWrap", {
        y: 100,
        scrollTrigger: {
          trigger: ".trigger",
          scrub: true,
          start: `top top`,
          end: "80% top",
        },
      });
      gsap.to(".points", {
        autoAlpha: 0,
        scrollTrigger: {
          trigger: ".trigger",
          scrub: true,
          start: `60% top`,
          end: "80% top",
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
      <div className="trigger relative h-full w-full">
        <div className="pointsWrap sticky left-0 top-0 flex h-screen w-full justify-end">
          <div className="points flex w-[calc(50%+30px)] flex-col justify-around">
            <div className="point ml-[37px] flex items-center gap-[20px] opacity-0">
              <div className="h-[20px] w-[20px] rounded-full bg-white outline outline-[2px] outline-offset-4"></div>
              <div className="h-[3px] w-[100px] bg-white"></div>
              <p className="max-w-[300px] text-[32px] leading-[1.2]">
                Traditional Italian Coffee Rituals
              </p>
            </div>
            <div className="point flex items-center gap-[20px] opacity-0">
              <div className="h-[20px] w-[20px] rounded-full bg-white outline outline-[2px] outline-offset-4"></div>
              <div className="h-[3px] w-[100px] bg-white"></div>
              <p className="max-w-[300px] text-[32px] leading-[1.2]">
                Specialty Coffee Blends
              </p>
            </div>
            <div className="point ml-[-40px] flex items-center gap-[20px] opacity-0">
              <div className="h-[20px] w-[20px] rounded-full bg-white outline outline-[2px] outline-offset-4"></div>
              <div className="h-[3px] w-[100px] bg-white"></div>
              <p className="max-w-[300px] text-[32px] leading-[1.2]">
                Popular Coffee Worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
