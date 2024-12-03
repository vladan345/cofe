import { Canvas } from "@react-three/fiber";
import Scene from "@/components/Scene";
import { Beans } from "@/components/Beans";

export default function Experience({ backgroundColor }) {
  return (
    <div className="experience fixed left-0 top-0 z-[1] h-screen w-full">
      <Canvas shadows>
        {/* <fog attach="fog" color={backgroundColor} near={3} far={15} /> */}
        <Scene />
        <group>
          <Beans
            count={70}
            ringRadius={3.5}
            tubeRadius={2}
            positionZ={-3.5}
            texture={0}
            direction="right"
            size={0.7}
            speed={170}
          />
          <Beans
            count={30}
            ringRadius={3}
            tubeRadius={2}
            positionZ={-7}
            texture={2}
            direction="left"
            size={1}
            speed={100}
          />
          <Beans
            count={20}
            ringRadius={3.5}
            tubeRadius={2}
            positionZ={-6.5}
            texture={1}
            direction="right"
            size={0.8}
            speed={120}
          />
        </group>
      </Canvas>
    </div>
  );
}
