import { Canvas } from "@react-three/fiber";
import Scene from "@/components/Scene";
import { Beans } from "@/components/Beans";

export default function Experience({ activeSection, backgroundColor }) {
  return (
    <div className="experience fixed left-0 top-0 z-[1] h-screen w-full">
      <Canvas shadows>
        <fog attach="fog" color={backgroundColor} near={3} far={15} />
        <Scene activeSection={activeSection} />
        <Beans
          count={100}
          ringRadius={6}
          tubeRadius={1}
          positionZ={-4}
          texture={0}
          direction="right"
          size={0.7}
          speed={170}
        />
        <Beans
          count={30}
          ringRadius={4}
          tubeRadius={2}
          positionZ={-10}
          texture={1}
          direction="left"
          size={1}
          speed={100}
        />
        <Beans
          count={50}
          ringRadius={4}
          tubeRadius={2}
          positionZ={-10}
          texture={2}
          direction="right"
          size={1}
          speed={120}
        />
      </Canvas>
    </div>
  );
}
