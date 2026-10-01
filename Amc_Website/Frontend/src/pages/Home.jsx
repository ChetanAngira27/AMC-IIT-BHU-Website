import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../assets/Logo.png";
import ParticleField from "../components/Hero/ParticleField";
import HeroDrone from "../components/Hero/HeroDrone";
import ActivityCards from "../components/Hero/ActivityCards";
import AIPanel from "../components/Hero/AIPanel";
import CursorGlow from "../components/Hero/CursorGlow";

const HeroHome = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const [userName, setUserName] = useState("Chetan");

  // Personalization from local storage
  useEffect(() => {
    const stored = localStorage.getItem("amc_user_name");
    if (stored) {
      setUserName(stored);
    }
  }, []);

  // Hero load sequence
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-badge", { y: -30, opacity: 0, duration: 0.8, delay: 0.3 })
      .from(".hero-drone-wrapper", { y: 80, opacity: 0, duration: 1.2 }, "-=0.4")
      .from(".hero-title", { y: 40, opacity: 0, duration: 0.9 }, "-=0.7")
      .from(".hero-subtitle", { y: 25, opacity: 0, duration: 0.7 }, "-=0.4")
      .from(".hero-tagline", { y: 20, opacity: 0, duration: 0.7 }, "-=0.3")
      .from(".hero-cta", { y: 20, opacity: 0, duration: 0.5, stagger: 0.12 }, "-=0.2")
      .from(".scroll-indicator", { y: 15, opacity: 0, duration: 0.6 }, "-=0.1")
      .from(".stat-card", { y: 40, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.5");
  }, { scope: heroRef });

  // Parallax on mouse move (desktop only)
  useEffect(() => {
    if ("ontouchstart" in window) return;
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      if (bgRef.current) {
        bgRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const scrollToContent = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <>
      <CursorGlow />
      <section
        ref={heroRef}
        className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center"
        style={{ background: "linear-gradient(180deg, #0A0F1C 0%, #0d1530 40%, #1a0a2e 70%, #0A0F1C 100%)" }}
        role="banner"
        aria-label="AMC IIT BHU Hero Section"
      >
        {/* Animated gradient background overlay */}
        <div
          ref={bgRef}
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(0,245,255,0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(255,0,255,0.04) 0%, transparent 50%)",
            willChange: "transform",
          }}
          aria-hidden="true"
        />

        {/* HUD Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,245,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />

        {/* Particles */}
        <ParticleField />

        {/* ═══ MAIN CONTENT ═══ */}
        <div className="relative z-10 flex flex-col items-center w-full px-4 pt-20 sm:pt-24 pb-10 gap-4 sm:gap-6">

          {/* Welcome badge */}
          {userName && (
            <div
              className="hero-badge flex items-center gap-2 px-4 py-1.5 rounded-full mb-2"
              style={{
                background: "rgba(0, 245, 255, 0.08)",
                border: "1px solid rgba(0, 245, 255, 0.2)",
              }}
            >
              <span className="text-xs sm:text-sm font-inter text-cyan-300">
                Welcome back, {userName} 👋
              </span>
            </div>
          )}

          {/* Logo + Title block */}
          <div className="flex flex-col items-center gap-2">
            <img
              src={logo}
              alt="AMC IIT BHU Logo"
              className="hero-title w-[260px] sm:w-[320px] md:w-[380px] h-auto drop-shadow-[0_0_20px_rgba(0,245,255,0.3)]"
            />
            <h1 className="hero-subtitle font-orbitron text-lg sm:text-xl md:text-2xl font-bold tracking-[0.25em] text-white text-center"
              style={{ textShadow: "0 0 30px rgba(0,245,255,0.4)" }}
            >
              AERO MODELLING CLUB
            </h1>
            <p className="hero-subtitle font-inter text-xs sm:text-sm text-gray-400 tracking-[0.3em] text-center uppercase">
              IIT (BHU) Varanasi • Since 2012
            </p>
          </div>

          {/* Drone */}
          <div className="hero-drone-wrapper my-2 sm:my-4">
            <HeroDrone />
          </div>

          {/* Tagline */}
          <h2
            className="hero-tagline font-orbitron text-xl sm:text-2xl md:text-4xl font-extrabold tracking-wider text-center"
            style={{
              background: "linear-gradient(135deg, #00F5FF 0%, #FF00FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "none",
              filter: "drop-shadow(0 0 20px rgba(0,245,255,0.3))",
            }}
          >
            SKY IS NOT THE LIMIT
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
            <a
              href="/projects"
              className="hero-cta group relative px-6 sm:px-8 py-3 rounded-xl font-orbitron text-xs sm:text-sm font-semibold text-black tracking-wider text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,245,255,0.4)]"
              style={{
                background: "linear-gradient(135deg, #00F5FF, #00BCD4)",
              }}
            >
              EXPLORE PROJECTS
            </a>
            <a
              href="/register/AeroArcade"
              className="hero-cta group relative px-6 sm:px-8 py-3 rounded-xl font-orbitron text-xs sm:text-sm font-semibold tracking-wider text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,255,0.3)]"
              style={{
                background: "transparent",
                border: "1px solid rgba(255, 0, 255, 0.5)",
                color: "#FF00FF",
              }}
            >
              JOIN THE CLUB
            </a>
          </div>

          {/* Activity Cards */}
          <div className="mt-6 sm:mt-10 w-full">
            <ActivityCards />
          </div>

          {/* AI Panel — positioned bottom-right on desktop, stacked on mobile */}
          <div className="w-full flex justify-center lg:justify-end lg:absolute lg:bottom-8 lg:right-8 lg:w-auto mt-6 lg:mt-0">
            <AIPanel />
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToContent}
            className="scroll-indicator mt-6 sm:mt-10 flex flex-col items-center gap-2 cursor-pointer group"
            aria-label="Scroll to explore"
          >
            <span className="text-[10px] sm:text-xs font-inter text-gray-500 tracking-[0.2em] uppercase group-hover:text-cyan-400 transition-colors">
              Scroll to Explore
            </span>
            <div
              className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />
            </div>
          </button>
        </div>

        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: "linear-gradient(transparent, #0A0F1C)",
          }}
          aria-hidden="true"
        />
      </section>
    </>
  );
};

export default HeroHome;