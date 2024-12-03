import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Section2() {
  const main = useRef();
  useGSAP(
    () => {
      const panels = gsap.utils.toArray(".panel");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".wrapper",
          scrub: true,
        },
      });

      panels.forEach((panel) => {
        tl.from(panel, {
          autoAlpha: 0,
          x: -50,
        }).to(panel, {
          autoAlpha: 0,
        });
      });
    },
    { scope: main },
  );
  return (
    <section ref={main} className="relative z-[2] h-[700vh] w-full">
      <div className="wrapper h-full w-full">
        <div className="sticky left-0 top-0 h-screen w-full">
          <div className="panel spacer absolute left-0 top-0 h-screen w-full"></div>

          <div className="panel absolute left-0 top-0 h-screen w-full">
            <div className="container flex items-center">
              <div className="text-container max-w-[40vw] gap-[20px] pl-[2vw] md:max-w-[300px]">
                <div className="flex flex-col items-start leading-[0.9]">
                  <div className="flex border-b border-b-[#9cd4e6] pb-[1.5vw] md:pb-[10px]">
                    <span className="mx-[1vw] text-[10vw] font-extralight leading-[0.9] md:text-[60px]">
                      01
                    </span>
                    <h2 className="font-crimson text-[5vw] md:text-[30px]">
                      Brewed to the point.
                    </h2>
                  </div>
                  <p className="font-crimson my-[20px] ml-[12vw] text-[2vw] leading-[1.2] text-white md:ml-0 md:text-[16px]">
                    Simple. Bold. No fluff.
                  </p>
                  <p className="ml-[12vw] text-[1vw] leading-[1.4] text-white md:ml-0 md:text-[14px]">
                    Pour it, sip it, love it. The perfect cup? It’s all in the
                    beans. No fancy rituals, just pure joy in every drop.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="panel absolute left-0 top-0 h-screen w-full">
            <div className="container flex items-center">
              <div className="text-container max-w-[40vw] gap-[20px] pl-[2vw] md:max-w-[300px]">
                <div className="flex flex-col items-start leading-[0.9]">
                  <div className="flex border-b border-b-[#9cd4e6] pb-[1.5vw] md:pb-[10px]">
                    <span className="mx-[1vw] text-[10vw] font-extralight leading-[0.9] md:text-[60px]">
                      02
                    </span>
                    <h2 className="font-crimson text-[5vw] md:text-[30px]">
                      The Art of Espresso
                    </h2>
                  </div>
                  <p className="font-crimson my-[20px] ml-[12vw] text-[2vw] leading-[1.2] text-white md:ml-0 md:text-[16px]">
                    Discover how Italy became a world-renowned coffee hub.
                  </p>
                  <p className="ml-[12vw] text-[1vw] leading-[1.4] text-white md:ml-0 md:text-[14px]">
                    Italy's love for coffee dates back centuries, making it a
                    coffee epicenter. From the first sip of espresso to the
                    last, Italy's coffee culture is unrivaled.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="panel absolute left-0 top-0 h-screen w-full">
            <div className="container flex items-center">
              <div className="text-container max-w-[40vw] gap-[20px] pl-[2vw] md:max-w-[300px]">
                <div className="flex flex-col items-start leading-[0.9]">
                  <div className="flex border-b border-b-[#9cd4e6] pb-[1.5vw] md:pb-[10px]">
                    <span className="mx-[1vw] text-[10vw] font-extralight leading-[0.9] md:text-[60px]">
                      03
                    </span>
                    <h2 className="font-crimson text-[5vw] md:text-[30px]">
                      The Art of Espresso
                    </h2>
                  </div>
                  <p className="font-crimson my-[20px] ml-[12vw] text-[2vw] leading-[1.2] text-white md:ml-0 md:text-[16px]">
                    Discover how Italy became a world-renowned coffee hub.
                  </p>
                  <p className="ml-[12vw] text-[1vw] leading-[1.4] text-white md:ml-0 md:text-[14px]">
                    Italy's love for coffee dates back centuries, making it a
                    coffee epicenter. From the first sip of espresso to the
                    last, Italy's coffee culture is unrivaled.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="panel spacer absolute left-0 top-0 h-screen w-full"></div>
        </div>
      </div>
    </section>
  );
}
