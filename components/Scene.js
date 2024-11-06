import { PerspectiveCamera, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useFrame, useThree } from "@react-three/fiber";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
   const { nodes, materials } = useGLTF("/coffee2.glb");
   const cup = useRef();
   const cupWrap = useRef();
   const plain = useRef();

   const { pointer } = useThree();

   const positions = [
      { x: 0, y: 0.4, z: 0 },
      { x: 0.5, y: 0.4, z: 0 },
      { x: -0.3, y: 0.4, z: 0 },
      { x: 0, y: -0.4, z: 0 },
      { x: 0, y: 0.4, z: 0 },
      { x: 0, y: 0.4, z: 0 },
   ];
   const rotations = [
      { x: 0, y: 0, z: 0 },
      { x: -Math.PI / 10, y: -Math.PI / 6, z: 0 },
      { x: 0, y: 0, z: 0 },
      { x: 0, y: Math.PI * 2, z: 0 },
      { x: Math.PI / 2, y: 0, z: 0 },
      { x: (Math.PI / 2) * 4, y: 0, z: 0 },
   ];
   const scales = [
      { x: 1, y: 1, z: 1 },
      { x: 1.2, y: 1.2, z: 1.2 },
      { x: 2.5, y: 2.5, z: 2.5 },
      { x: 1.5, y: 1.5, z: 1.5 },
      { x: 1, y: 1, z: 1 },
      { x: 1, y: 1, z: 1 },
   ];

   useEffect(() => {
      gsap.from(cupWrap.current.scale, {
         x: 0,
         y: 0,
         z: 0,
         duration: 1.2,
      });

      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: ".content",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
         },
      });

      positions.forEach((pos, index) => {
         tl.to(cup.current.position, {
            x: pos.x,
            y: pos.y,
            z: pos.z,
            ease: "power2.inOut",
         });
         tl.to(
            cup.current.rotation,
            {
               x: rotations[index].x,
               y: rotations[index].y,
               z: rotations[index].z,
               ease: "power2.inOut",
            },
            "<"
         );
         tl.to(
            cup.current.scale,
            {
               x: scales[index].x,
               y: scales[index].y,
               z: scales[index].z,
               ease: "power2.inOut",
            },
            "<"
         );
      });
      gsap.to(plain.current.position, {
         y: -0.02,
         scrollTrigger: {
            trigger: "#section6",
            scrub: true,
            start: "top top",
            end: "bottom bottom",
         },
         ease: "power2.inOut",
      });
   }, []);

   useFrame(() => {
      if (window.scrollY <= window.innerHeight * 3.5) {
         gsap.to(cupWrap.current.rotation, {
            x: -0.3,
            y: pointer.x * 0.5,
            z: -0.2,
            duration: 0.7,
         });
      } else {
         gsap.to(cupWrap.current.rotation, {
            x: 0,
            y: 0,
            z: 0,
         });
      }
   });
   materials["Material.001"].metalness = 0.4;

   return (
      <>
         <group dispose={null}>
            <PerspectiveCamera
               makeDefault={true}
               far={100}
               near={1}
               fov={22.895}
               position={[-0.02, 0.42, 3.039]}
            />
            <mesh
               ref={plain}
               receiveShadow
               geometry={nodes.plane.geometry}
               material={materials["Material.001"]}
               position={[0, -3, 0]}
            />
            <group ref={cupWrap} rotation={[-0.3, -0.4, -0.2]}>
               <mesh
                  ref={cup}
                  castShadow
                  geometry={nodes.cup.geometry}
                  material={materials["Material.002"]}
                  position={[0, 0.4, 0]}
               />
            </group>

            {Object.keys(nodes).map((name, index) => {
               if (nodes[name].type === "Object3D") {
                  return (
                     <directionalLight
                        key={index}
                        position={nodes[name].position}
                        rotation={nodes[name].rotation}
                        intensity={0.2 * index}
                        decay={5}
                        castShadow
                     />
                  );
               }
            })}
            <ambientLight intensity={1.5} />
         </group>
      </>
   );
}

useGLTF.preload("/coffee.glb");
