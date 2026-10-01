import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import droneImg from "../../assets/HeroDrone.png";

const HeroDrone = () => {
  const containerRef = useRef(null);
  const glowRef = useRef(null);

  useGSAP(() => {
    // Float animation
    gsap.to(containerRef.current, {
      y: "-=18",
      yoyo: true,
      repeat: -1,
      duration: 2.5,
      ease: "sine.inOut",
    });

    // Subtle rotation
    gsap.to(containerRef.current, {
      rotateZ: 2,
      yoyo: true,
      repeat: -1,
      duration: 4,
      ease: "sine.inOut",
    });

    // Glow pulse
    gsap.to(glowRef.current, {
      opacity: 0.6,
      scale: 1.15,
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: "sine.inOut",
    });
  });

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center"
      role="img"
      aria-label="AMC Club Drone"
      style={{ willChange: "transform" }}
    >
      {/* Glow underneath */}
      <div
        ref={glowRef}
        className="absolute w-[80%] h-[40%] bottom-[-20%] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,245,255,0.3) 0%, rgba(255,0,255,0.1) 50%, transparent 70%)",
          filter: "blur(30px)",
          willChange: "opacity, transform",
        }}
        aria-hidden="true"
      />

      {/* Propeller glow rings */}
      <div className="absolute w-full h-full pointer-events-none" aria-hidden="true">
        <div className="propeller-glow absolute top-[8%] left-[12%] w-[22%] h-[22%] rounded-full border border-cyan-400/20 animate-spin-slow" />
        <div className="propeller-glow absolute top-[8%] right-[12%] w-[22%] h-[22%] rounded-full border border-cyan-400/20 animate-spin-slow-reverse" />
        <div className="propeller-glow absolute bottom-[18%] left-[12%] w-[22%] h-[22%] rounded-full border border-cyan-400/20 animate-spin-slow" />
        <div className="propeller-glow absolute bottom-[18%] right-[12%] w-[22%] h-[22%] rounded-full border border-cyan-400/20 animate-spin-slow-reverse" />
      </div>

      {/* Drone image */}
      <img
        src={droneImg}
        alt="AMC Club Racing Drone"
        className="relative w-[280px] h-auto sm:w-[360px] md:w-[420px] lg:w-[480px] drop-shadow-[0_0_40px_rgba(0,245,255,0.4)]"
        loading="lazy"
        style={{ willChange: "transform", mixBlendMode: "screen" }}
      />
    </div>
  );
};

export default HeroDrone;
