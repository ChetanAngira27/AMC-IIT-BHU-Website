import React from 'react';
import bgVideo from '/Users/sarvesh/Documents/Amc_Website/Frontend/src/assets/Competetions/Register/Registervideo.mp4';

const AeroArcadeComingSoon = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-['VT323']">
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover blur-xs brightness-[0.5]"
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="mb-2 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <p className="text-sm tracking-[0.3em] text-cyan-400 uppercase">System Active</p>
          </div>
          <h1 className="text-5xl md:text-6xl uppercase tracking-[0.2em] text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.9)]">
            Coming Soon
          </h1>
          <div className="mt-4 w-24 h-0.5 bg-cyan-500 shadow-[0_0_10px_#22d3ee] animate-pulse" />
          <p className="mt-4 text-white/80 text-lg uppercase tracking-widest text-center drop-shadow-md">
            Mission Loading...
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px]" />
    </div>
  );
};

export default AeroArcadeComingSoon;