import React from "react";
import { useProgress } from "@react-three/drei";
import Image from "next/image";
export default function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  const size = 300; // Diameter of the circle
  const strokeWidth = 14; // Stroke width
  const radius = (size - strokeWidth) / 2; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const offset = circumference - (progress / 100) * circumference;
  return (
    <div className="fixed left-0 top-0 z-[99999] flex h-screen w-full items-center justify-center bg-[#61352b]">
      <svg
        width={size}
        height={size}
        className="rotate-[-90deg] transform" // Rotate to make the progress start at the top
      >
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="transparent" // Tailwind gray-200
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#9cd4e6" // Tailwind blue-500
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-300" // Smooth transition
        />
      </svg>
      {/* Progress Label */}
      <Image
        src="/coffee.svg"
        alt="Coffee icon"
        width={100}
        height={100}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
