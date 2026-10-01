import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const cardData = [
  {
    icon: "🛩️",
    title: "Competitions",
    value: "12+",
    detail: "SAE Aero Design, VTOL, Aero Arcade & more",
    color: "#00F5FF",
  },
  {
    icon: "🔧",
    title: "Projects",
    value: "20+",
    detail: "Custom drones, fixed-wing aircraft, FPV racers",
    color: "#FF00FF",
  },
  {
    icon: "📚",
    title: "Workshops",
    value: "8+",
    detail: "ROS, Ardupilot, PX4, Drone Components",
    color: "#00F5FF",
  },
  {
    icon: "🏆",
    title: "Victories",
    value: "15+",
    detail: "National & international accolades",
    color: "#FF00FF",
  },
];

const ActivityCard = ({ icon, title, value, detail, color, index }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="stat-card group relative p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300"
      style={{
        background: "rgba(255, 255, 255, 0.04)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: `0 0 0px ${color}00, 0 4px 30px rgba(0,0,0,0.3)`,
        transform: `perspective(600px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        willChange: "transform, box-shadow",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="article"
      aria-label={`${title}: ${value}`}
    >
      {/* Glow border on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          border: `1px solid ${color}66`,
          boxShadow: `0 0 20px ${color}22, inset 0 0 20px ${color}08`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <span className="text-3xl sm:text-4xl block mb-3">{icon}</span>
        <h3
          className="font-orbitron text-sm sm:text-base font-semibold tracking-wider mb-1"
          style={{ color }}
        >
          {title}
        </h3>
        <p className="font-orbitron text-2xl sm:text-3xl font-bold text-white mb-2">
          {value}
        </p>
        <p className="text-xs sm:text-sm text-gray-400 font-inter leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {detail}
        </p>
      </div>
    </div>
  );
};

const ActivityCards = () => {
  const containerRef = useRef(null);

  // Animation is now driven centrally by the timeline in Home.jsx

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 w-full max-w-5xl mx-auto px-4"
    >
      {cardData.map((card, idx) => (
        <ActivityCard key={card.title} {...card} index={idx} />
      ))}
    </div>
  );
};

export default ActivityCards;
