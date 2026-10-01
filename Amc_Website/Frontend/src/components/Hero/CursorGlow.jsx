import React, { useEffect, useRef, useState } from "react";

const CursorGlow = () => {
  const glowRef = useRef(null);
  const trailRefs = useRef([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't show on touch devices
    if ("ontouchstart" in window) return;

    const trails = [];
    const trailCount = 5;
    for (let i = 0; i < trailCount; i++) {
      trails.push({ x: 0, y: 0 });
    }

    let mouseX = 0;
    let mouseY = 0;

    const handleMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouse);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    let frame;
    const animate = () => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${mouseX - 20}px, ${mouseY - 20}px)`;
      }

      for (let i = trails.length - 1; i > 0; i--) {
        trails[i].x += (trails[i - 1].x - trails[i].x) * 0.3;
        trails[i].y += (trails[i - 1].y - trails[i].y) * 0.3;
      }
      trails[0].x += (mouseX - trails[0].x) * 0.5;
      trails[0].y += (mouseY - trails[0].y) * 0.5;

      trailRefs.current.forEach((el, i) => {
        if (el) {
          el.style.transform = `translate(${trails[i].x - 4}px, ${trails[i].y - 4}px)`;
          el.style.opacity = `${0.3 - i * 0.05}`;
        }
      });

      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouse);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [visible]);

  if ("ontouchstart" in (typeof window !== "undefined" ? window : {})) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9999, opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}
      aria-hidden="true"
    >
      {/* Main glow */}
      <div
        ref={glowRef}
        className="absolute w-10 h-10 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,245,255,0.25) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />
      {/* Trail dots */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: "rgba(0, 245, 255, 0.4)",
            filter: "blur(2px)",
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
};

export default CursorGlow;
