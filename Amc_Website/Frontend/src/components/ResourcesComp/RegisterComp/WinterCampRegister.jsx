import React from 'react';
import bgVideo from '../../../assets/Competetions/Register/Registervideo.mp4';

const nameOfComp = "WinterCamp"; //edit the name

const AeroArcadeRegister = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-['VT323']">
      <div className="absolute inset-0 h-full w-full">
        <video
            src={bgVideo}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover brightness-[0.3] grayscale-[0.5]"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-4 md:flex-row md:gap-8">
        <div className="flex flex-col items-center text-center md:items-end md:text-right">
            <h2 className="text-white/40 text-sm md:text-xl tracking-[0.5em] uppercase mb-1 md:mb-0">Status</h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl uppercase tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Registration
            </h1>
        </div>

        <div className="h-0.5 w-24 bg-linear-to-r from-transparent via-red-600 to-transparent shadow-[0_0_15px_#ef4444] md:h-24 md:w-0.5 md:bg-linear-to-b" />

        <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex items-center gap-2 mb-1 justify-center md:justify-start">
                <span className="text-red-600 animate-pulse text-xs">●</span>
                <p className="text-red-500/60 text-xs md:text-sm tracking-widest uppercase">Unauthorized</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl uppercase text-red-600 tracking-widest animate-[glitch_3s_infinite] drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
              Closed
            </h1>
        </div>

        <div className="absolute bottom-8 md:bottom-10 md:left-10 w-full md:w-auto text-center md:text-left">
             <div className="inline-block md:block border-l border-white/20 pl-4 text-left">
                <p className="text-white/30 text-[10px] md:text-xs tracking-widest uppercase">Error Code: REG_LOCKED_01</p>
                <p className="text-white/30 text-[10px] md:text-xs tracking-widest uppercase">System: {nameOfComp}</p>
             </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-size-[100%_4px]" />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes glitch {
          0% { transform: translate(0); }
          2% { transform: translate(-2px, 2px); }
          4% { transform: translate(-2px, -2px); }
          6% { transform: translate(2px, 2px); }
          8% { transform: translate(2px, -2px); }
          10% { transform: translate(0); }
          100% { transform: translate(0); }
        }
      `}} />
    </div>
  );
};

export default AeroArcadeRegister;