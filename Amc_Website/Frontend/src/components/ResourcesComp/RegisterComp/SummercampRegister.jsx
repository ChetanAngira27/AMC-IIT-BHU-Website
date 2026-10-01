import React from 'react';
import bgVideo from '../../../assets/Competetions/Register/Registervideo.mp4';

const SummercampRegister = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-['VT323']">
      <div className="absolute inset-0 h-full w-full">
        <video
            src={bgVideo}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover blur-xs brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
        <div className="flex flex-col items-center">
          <div className="mb-4 md:mb-2 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <p className="text-xs md:text-sm tracking-[0.3em] text-cyan-400 uppercase">System Active</p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.2em] text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.9)] wrap-break-words w-full">
            Coming Soon
          </h1>
          
          <div className="mt-6 md:mt-4 w-16 md:w-24 h-0.5 bg-cyan-500 shadow-[0_0_10px_#22d3ee] animate-pulse" />
          
          <p className="mt-4 md:mt-4 text-white/80 text-base md:text-lg uppercase tracking-widest drop-shadow-md">
            Mission Loading...
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px]" />
    </div>
  );
};

export default SummercampRegister;