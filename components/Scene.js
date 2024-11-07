import { PerspectiveCamera, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useFrame, useThree } from "@react-three/fiber";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const { nodes, materials } = useGLTF("/coffee3.glb");
  const cup = useRef();
  const cupWrap = useRef();
  const plain = useRef();

  const { pointer } = useThree();
  const transforms = [
    {
      position: { x: 0, y: 0.4, z: 0 }, // Section 1 on hold
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    },
    {
      position: { x: 0.5, y: 0.4, z: 0 }, // Break, transitioning
      rotation: { x: -Math.PI / 10, y: -Math.PI / 6, z: 0 },
      scale: { x: 1.2, y: 1.2, z: 1.2 },
    },
    {
      position: { x: 0.5, y: 0.4, z: 0 }, // Section 2 on hold
      rotation: { x: -Math.PI / 10, y: -Math.PI / 6, z: 0 },
      scale: { x: 1.2, y: 1.2, z: 1.2 },
    },
    {
      position: { x: -0.5, y: 0.7, z: 0 }, // position left large
      rotation: { x: 0, y: 0.1, z: 0 },
      scale: { x: 2.2, y: 2.2, z: 2.2 },
    },
    {
      position: { x: -0.5, y: 0.5, z: 0 }, // position left large
      rotation: { x: 0, y: 0.1, z: 0 },
      scale: { x: 2.2, y: 2.2, z: 2.2 },
    },
    {
      position: { x: 0, y: -0.4, z: 0 }, // position bottom peek
      rotation: { x: 0, y: Math.PI * 2, z: 0 },
      scale: { x: 1.5, y: 1.5, z: 1.5 },
    },
    {
      position: { x: 0, y: 0.4, z: 2.5 }, // position top view
      rotation: { x: Math.PI / 2, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    },
    {
      position: { x: 0, y: 0.4, z: 0 }, // position front flip
      rotation: { x: (Math.PI / 2) * 4, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    },
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

    transforms.forEach(({ position, rotation, scale }, index) => {
      tl.to(cup.current.position, {
        x: position.x,
        y: position.y,
        z: position.z,
        ease: "power2.inOut",
      });
      tl.to(
        cup.current.rotation,
        {
          x: rotation.x,
          y: rotation.y,
          z: rotation.z,
          ease: "power2.inOut",
        },
        "<",
      );
      tl.to(
        cup.current.scale,
        {
          x: scale.x,
          y: scale.y,
          z: scale.z,
          ease: "power2.inOut",
        },
        "<",
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
        y: pointer.x * 0.5 - 0.3,
        z: -0.2,
        duration: 2,
      });
      gsap.to(cupWrap.current.position, {
        x: pointer.x * 0.1,
        y: pointer.y * 0.1,
        z: 0,
        duration: 2,
      });
    } else {
      gsap.to(cupWrap.current.rotation, {
        x: 0,
        y: 0,
        z: 0,
        duration: 2,
      });
      gsap.to(cupWrap.current.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 2,
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
          near={0.1}
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
                intensity={0.5 * index}
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
