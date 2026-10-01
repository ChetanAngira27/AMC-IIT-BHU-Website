import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const SUGGESTIONS = [
  "What projects has AMC built?",
  "How can I join AMC?",
  "Show drone tech stack",
  "Tell me about competitions",
];

const MOCK_RESPONSES = {
  "What projects has AMC built?":
    "AMC has built custom FPV racing drones, fixed-wing surveillance aircraft, VTOL platforms, autonomous delivery drones, and tilt-rotor experimental UAVs. Our latest project is an AI-powered gesture-controlled quadcopter!",
  "How can I join AMC?":
    "You can join AMC through our annual recruitment drive during the first semester. We conduct workshops and selection rounds. Visit the 'Join the Club' section or reach out to us on Instagram @amc_iitbhu.",
  "Show drone tech stack":
    "Our tech stack includes: PX4 & Ardupilot (flight controllers), ROS2 (robotics middleware), Gazebo (simulation), Python & C++ (programming), and custom PCB designs for ESCs and power distribution boards.",
  "Tell me about competitions":
    "We participate in SAE Aero Design (USA), SUAS (Autonomous Systems), Aero Arcade (in-house), VTOL competitions, and various national-level drone racing events. We've won 15+ awards!",
};

const AIPanel = () => {
  const panelRef = useRef(null);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [history, setHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    gsap.from(panelRef.current, {
      x: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 2.5,
    });
  });

  const typeResponse = (text) => {
    setIsTyping(true);
    setResponse("");
    let i = 0;
    const interval = setInterval(() => {
      setResponse(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 18);
  };

  const handleSubmit = (q) => {
    const question = q || query;
    if (!question.trim()) return;

    const matchedKey = Object.keys(MOCK_RESPONSES).find(
      (k) => k.toLowerCase() === question.toLowerCase()
    );
    const answer =
      matchedKey
        ? MOCK_RESPONSES[matchedKey]
        : "I'm AMC's AI assistant. I can help with information about our projects, competitions, workshops, and how to join. Try one of the suggested questions!";

    setHistory((prev) => [{ q: question, a: answer }, ...prev].slice(0, 3));
    typeResponse(answer);
    setQuery("");
    setIsOpen(true);
  };

  return (
    <div
      ref={panelRef}
      className="ai-panel w-full max-w-sm"
      role="complementary"
      aria-label="AI Assistant Panel"
    >
      {/* Header */}
      <div
        className="flex items-center gap-2 px-4 py-3 rounded-t-2xl cursor-pointer"
        style={{
          background: "rgba(0, 245, 255, 0.08)",
          borderBottom: "1px solid rgba(0, 245, 255, 0.15)",
        }}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        aria-expanded={isOpen}
        tabIndex={0}
      >
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="font-orbitron text-xs sm:text-sm font-semibold text-cyan-300 tracking-wider">
          ASK AMC AI
        </span>
        <span className="ml-auto text-cyan-400/60 text-xs">
          {isOpen ? "▲" : "▼"}
        </span>
      </div>

      {/* Expandable body */}
      <div
        className="overflow-hidden transition-all duration-500"
        style={{
          maxHeight: isOpen ? "500px" : "0px",
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        {/* Suggestions */}
        <div className="px-4 pt-3 pb-2 flex flex-wrap gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => handleSubmit(s)}
              className="text-[10px] sm:text-xs px-2.5 py-1.5 rounded-full font-inter transition-all duration-200 cursor-pointer"
              style={{
                background: "rgba(0, 245, 255, 0.08)",
                border: "1px solid rgba(0, 245, 255, 0.2)",
                color: "#b0bec5",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(0, 245, 255, 0.18)";
                e.target.style.color = "#00F5FF";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(0, 245, 255, 0.08)";
                e.target.style.color = "#b0bec5";
              }}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="px-4 pb-3">
          <div className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-2 rounded-lg text-xs sm:text-sm font-inter text-white placeholder-gray-500 outline-none transition-all duration-300 focus:ring-1 focus:ring-cyan-400/40"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
              aria-label="Ask AMC AI a question"
            />
            <button
              onClick={() => handleSubmit()}
              className="px-3 py-2 rounded-lg font-orbitron text-xs font-semibold text-black transition-all duration-200 cursor-pointer hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #00F5FF, #00BCD4)",
              }}
              aria-label="Send question"
            >
              ➜
            </button>
          </div>
        </div>

        {/* Response */}
        {(response || isTyping) && (
          <div
            className="mx-4 mb-3 p-3 rounded-lg text-xs sm:text-sm font-inter leading-relaxed"
            style={{
              background: "rgba(0, 245, 255, 0.05)",
              border: "1px solid rgba(0, 245, 255, 0.1)",
              color: "#b0bec5",
            }}
          >
            {response}
            {isTyping && (
              <span className="inline-block w-1.5 h-4 bg-cyan-400 ml-0.5 animate-pulse" />
            )}
          </div>
        )}

        {/* History */}
        {history.length > 0 && (
          <div className="px-4 pb-3">
            <p className="text-[10px] text-gray-500 font-inter mb-2 tracking-wider uppercase">
              Recent Queries
            </p>
            {history.map((h, i) => (
              <button
                key={i}
                onClick={() => handleSubmit(h.q)}
                className="block w-full text-left text-[10px] sm:text-xs text-gray-400 hover:text-cyan-300 py-1 truncate font-inter transition-colors cursor-pointer"
              >
                → {h.q}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Bottom border glow */}
      <div
        className="h-px w-full rounded-b-2xl"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,245,255,0.3), transparent)",
        }}
        aria-hidden="true"
      />
    </div>
  );
};

export default AIPanel;
