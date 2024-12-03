import React, { useRef, useMemo, useEffect } from "react";
import gsap from "gsap";
import { useTexture } from "@react-three/drei";

export function Beans({
  count = 50,
  ringRadius = 2, // Major radius: distance from center to center of tube
  tubeRadius = 2, // Minor radius: radius of the tube forming the torus
  positionZ = -10,
  texture,
  direction = "left",
  size = 1,
  speed = 100,
}) {
  const mesh = useRef();

  // Load three textures using `useTexture`
  const textures = useTexture(["/cofi1n.png", "/cofi2n.png", "/cofi3n.png"]);

  // GSAP animations for rotation and position
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
        y: direction == "left" ? -Math.PI * 2 : Math.PI * 2,
        duration: speed,
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

  // Generate particles' positions in a torus shape and randomly assign each a texture index
  const particles = useMemo(() => {
    const positions = [];
    const textureIndices = [];

    for (let i = 0; i < count; i++) {
      // Generate random angles for torus shape
      const u = Math.random() * 2 * Math.PI; // Angle around the ring
      const v = Math.random() * 2 * Math.PI; // Angle around the tube

      // Calculate x, y, z coordinates based on torus geometry
      const x = (ringRadius + tubeRadius * Math.cos(v)) * Math.cos(u);
      const y = tubeRadius * Math.sin(v);
      const z = (ringRadius + tubeRadius * Math.cos(v)) * Math.sin(u);

      positions.push(x, y, z);

      // Randomly assign a texture index (0, 1, or 2)
      textureIndices.push(Math.floor(Math.random() * 3));
    }

    return {
      positions: new Float32Array(positions),
      textureIndices: new Float32Array(textureIndices),
    };
  }, [count, ringRadius, tubeRadius]);

  return (
    <group ref={mesh} position={[0, 0, positionZ]}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={particles.positions}
            count={count}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={size}
          transparent
          depthWrite={true}
          alphaTest={0.1}
          vertexColors={false}
          map={textures[texture]} // Default texture
        />
      </points>
    </group>
  );
}
