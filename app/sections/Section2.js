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

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".trigger",
          pin: true,
          end: () => `+=${document.querySelector(".trigger").offsetWidth * 5}`,
          scrub: true,
        },
      });
    },
    { scope: main },
  );
  return (
    <section ref={main} className="relative z-[2] w-full">
      <div className="trigger flex h-screen w-[500%] flex-nowrap">
        {/* <div className="absolute left-0 top-0 h-full w-full bg-green-200 opacity-20"></div> */}
        <div className="panel spacer w-full"></div>

        <div className="panel w-full">
          <div className="container flex items-center">
            <div className="max-w-[40vw] gap-[20px]">
              <div className="flex items-start leading-[1]">
                <span className="text-[12vw] font-bold leading-[0.8]">01</span>
                <div>
                  <h2 className="text-[5vw]">The Art of Espresso</h2>
                  <p className="my-[30px] text-[2vw]">
                    Discover how Italy became a world-renowned coffee hub.
                  </p>
                  <p className="text-[1vw]">
                    Italy's love for coffee dates back centuries, making it a
                    coffee epicenter. From the first sip of espresso to the
                    last, Italy's coffee culture is unrivaled.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="panel w-full">
          <div className="container flex items-center">
            <div className="max-w-[45vw]">
              <div className="flex items-start gap-[20px] leading-[1]">
                <span className="text-[12vw] font-bold leading-[0.8]">02</span>
                <div>
                  <h2 className="text-[5vw]">Italian Coffee Culture</h2>
                  <p className="my-[30px] text-[2vw]">
                    Italian espresso is more than a drink; it's a way of life.
                  </p>
                  <p className="text-[1vw]">
                    Italian coffee culture varies regionally, with each town
                    bringing its unique flavor to this iconic drink.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="panel w-full">
          <div className="container flex items-center">
            <div className="max-w-[40vw]">
              <div className="flex items-start gap-[20px] leading-[1]">
                <span className="text-[12vw] font-bold leading-[0.8]">03</span>
                <div>
                  <h2 className="text-[5vw]">Espresso Machines in Italy</h2>
                  <p className="my-[30px] text-[2vw]">
                    Espresso machines play a crucial role in Italian coffee
                    making.
                  </p>
                  <p className="text-[1vw]">
                    Italians savor coffee, usually standing at the bar and
                    taking a moment to appreciate the taste and aroma.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="panel spacer w-full"></div>
      </div>
    </section>
  );
}
