"use client";

import { useEffect, useRef } from "react";

export function ParallaxGlow() {
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      if (blob1.current) {
        blob1.current.style.left = `${e.clientX - 300}px`;
        blob1.current.style.top = `${e.clientY - 300}px`;
      }
      if (blob2.current) {
        blob2.current.style.left = `${e.clientX - 200}px`;
        blob2.current.style.top = `${e.clientY + 100}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      <div
        ref={blob1}
        className="absolute w-[600px] h-[600px] rounded-full transition-all duration-[3000ms] ease-out"
        style={{
          background: "radial-gradient(circle, rgba(87, 108, 219, 0.08) 0%, transparent 70%)",
          left: "20%",
          top: "30%",
        }}
      />
      <div
        ref={blob2}
        className="absolute w-[500px] h-[500px] rounded-full transition-all duration-[3500ms] ease-out"
        style={{
          background: "radial-gradient(circle, rgba(242, 84, 91, 0.06) 0%, transparent 70%)",
          left: "60%",
          top: "50%",
        }}
      />
    </div>
  );
}
