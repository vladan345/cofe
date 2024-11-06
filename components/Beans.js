import React, { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useTexture } from "@react-three/drei";

export function Beans({
   count = 100,
   radius = 5,
   xScale = 1,
   yScale = 0.7,
   zScale = 1,
   texture,
}) {
   const mesh = useRef();

   // Load three textures using `useTexture`
   const textures = useTexture(["/cofi1.png", "/cofi2.png", "/cofi3.png"]);

   // GSAP animations for scaling and rotation
   useEffect(() => {
      if (mesh.current) {
         gsap.from(mesh.current?.scale, {
            x: 0,
            y: 0,
            z: 0,
            duration: 2,
            ease: "power2.inOut",
         });
         gsap.to(mesh.current?.rotation, {
            y: Math.PI * 2,
            duration: 100,
            repeat: -1,
            ease: "linear",
         });

         gsap.to(mesh.current.position, {
            y: "+=6",
            scrollTrigger: {
               trigger: "#section6",
               scrub: true,
               start: "top top",
               end: "bottom bottom",
            },
            ease: "power2.inOut",
         });
      }
   }, []);

   // Generate particles' positions and randomly assign each a texture index
   const particles = useMemo(() => {
      const positions = [];
      const textureIndices = [];

      for (let i = 0; i < count; i++) {
         // Generate random position within a sphere
         const phi = Math.acos(2 * Math.random() - 1);
         const theta = 2 * Math.PI * Math.random();
         const distance = radius * Math.cbrt(Math.random()); // cbrt for uniform distribution

         let x = distance * Math.sin(phi) * Math.cos(theta);
         let y = distance * Math.sin(phi) * Math.sin(theta);
         let z = distance * Math.cos(phi);

         // Apply scale factors to create an elliptical effect
         x *= xScale; // Stretch or squish along the x-axis
         y *= yScale; // Stretch or squish along the y-axis
         z *= zScale; // Stretch or squish along the z-axis

         positions.push(x, y, z);

         // Randomly assign a texture index (0, 1, or 2)
         textureIndices.push(Math.floor(Math.random() * 3));
      }

      return {
         positions: new Float32Array(positions),
         textureIndices: new Float32Array(textureIndices),
      };
   }, [count, radius, xScale, yScale, zScale]);

   return (
      <group ref={mesh} position={[0, 0, -6]}>
         <points>
            <bufferGeometry>
               <bufferAttribute
                  attach="attributes-position"
                  array={particles.positions}
                  count={count}
                  itemSize={3}
               />
            </bufferGeometry>
            {/* Use a single material, but we'll apply the right texture via pointsMaterial */}
            <pointsMaterial
               size={1}
               transparent
               depthWrite={false}
               depthTest={true}
               vertexColors={false}
               map={textures[texture]} // Default texture
            />
         </points>
      </group>
   );
}
