import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import videoBg from '../assets/Victory/Video2.mp4';
import achievements from '../assets/Victory/Achievements.js';

gsap.registerPlugin(ScrollTrigger);

const Victory = () => {
    const container = useRef();

    useGSAP(() => {
        gsap.to('.glow-text', {
            opacity: 0.4,
            textShadow: "0 0 0px rgba(255,255,255,0)",
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: "power1.inOut"
        });
        gsap.from('.tree-line', {
            scaleY: 0,
            transformOrigin: "top",
            scrollTrigger: {
                trigger: ".tree-container",
                start: "top 20%",
                end: "bottom bottom",
                scrub: 1,
            }
        });
        const branches = gsap.utils.toArray('.branch-item');
        branches.forEach((branch) => {
            gsap.from(branch, {
                x: branch.classList.contains('left-side') ? -100 : 100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: branch,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1,
                }
            });
        });
    }, { scope: container });

    return (
        <div ref={container} className="relative min-h-[200vh] w-full bg-black overflow-x-hidden font-['VT323']">
            <video
                src={videoBg}
                autoPlay loop muted playsInline
                className="fixed top-0 left-0 w-full h-full object-cover z-0 scale-105 opacity-50"
            />

            <div className="relative z-10 py-20 pt-24 md:pt-32 md:pl-24 flex flex-col items-center">
                <h1 className="glow-text text-5xl md:text-8xl font-black text-purple-300 uppercase tracking-tighter mb-16 md:mb-32 text-center drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]">
                    Achievements
                </h1>

                <div className="tree-container relative w-full max-w-5xl px-4 md:px-0">
                    <div className="tree-line absolute left-8 md:left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-yellow-400 via-white to-transparent opacity-80" />

                    {achievements.map((item, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={`branch-item flex items-start md:items-center w-full mb-12 md:mb-24 
                                ${isLeft ? 'md:flex-row-reverse left-side' : 'right-side'}
                                `}
                            >
                                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div className="group p-6 md:p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-pink-600 transition-all duration-500 relative">
                                        
                                        <div className="md:hidden absolute top-6 -left-3 w-0 h-0 border-t-10 border-t-transparent border-r-12 border-r-white/10 border-b-10 border-b-transparent"></div>

                                        <span className="text-purple-400 font-mono text-xl md:text-2xl font-bold block mb-1">{item.year}</span>
                                        <h3 className="text-white text-2xl md:text-3xl font-bold mt-2 group-hover:translate-x-2 transition-transform leading-none">{item.title}</h3>
                                        <p className="text-gray-400 text-sm md:text-base mt-3 leading-relaxed font-sans">{item.desc}</p>
                                    </div>
                                </div>

                                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-black border-2 md:border-4 border-purple-400 rounded-full z-20 shadow-[0_0_15px_#facc15] mt-6 md:mt-0" />

                                <div className="hidden md:block w-1/2" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Victory;