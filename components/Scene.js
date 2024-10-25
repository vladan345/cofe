import { PerspectiveCamera, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Scene({ activeSection }) {
   const { nodes, materials } = useGLTF("/coffee.glb");
   const cup = useRef();
   useEffect(() => {
      const tl = gsap.timeline();

      // Define different camera positions and colors for each section
      const positions = [
         { x: 0, y: 0, z: 0 },
         { x: 0.5, y: 0, z: 0 },
         { x: -0.3, y: -0.5, z: 0 },
         { x: 0, y: -1, z: 0 },
         { x: 0, y: 0.4, z: 0 },
      ];
      const rotations = [
         { x: 0, y: 0, z: 0 },
         { x: -Math.PI / 10, y: -Math.PI / 6, z: 0 },
         { x: 0, y: 0, z: 0 },
         { x: 0, y: Math.PI * 2, z: 0 },
         { x: Math.PI / 2, y: 0, z: 0 },
      ];
      const scales = [
         { x: 1, y: 1, z: 1 },
         { x: 1.2, y: 1.2, z: 1.2 },
         { x: 2.5, y: 2.5, z: 2.5 },
         { x: 1.5, y: 1.5, z: 1.5 },
         { x: 1, y: 1, z: 1 },
      ];

      // Camera position animation
      tl.to(cup.current.position, {
         ...positions[activeSection],
         ease: "power4.inOut",
         duration: 3,
      });
      tl.to(
         cup.current.rotation,
         {
            ...rotations[activeSection],
            ease: "power4.inOut",

            duration: 2,
         },
         "<"
      );
      tl.to(
         cup.current.scale,
         {
            ...scales[activeSection],
            ease: "power4.inOut",
            duration: 2,
         },
         "<"
      );
   }, [activeSection]);

   return (
      <>
         <group dispose={null}>
            <PerspectiveCamera
               makeDefault={true}
               far={1000}
               near={0.1}
               fov={22.895}
               position={[-0.02, 0.42, 3.039]}
            />

            <mesh
               ref={cup}
               castShadow
               receiveShadow
               geometry={nodes.cup.geometry}
               material={materials.Material}
            />
            {Object.keys(nodes).map((name, index) => {
               if (nodes[name].type == "Object3D") {
                  return (
                     <directionalLight
                        key={index}
                        position={nodes[name].position}
                        rotation={nodes[name].rotation}
                        intensity={2}
                        castShadow
                     />
                  );
               }
            })}
         </group>
      </>
   );
}

useGLTF.preload("/coffee.glb");
