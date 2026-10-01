import React from 'react'
import bgvid from "../assets/Competetions/compvid.mp4";
import Card from "../components/ResourcesComp/CompCard/Card.jsx";
import { Competetion } from '../assets/Competetions/Comp'

const Competetions = () => {
    return (
        <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
            <div className="fixed top-0 left-0 w-full h-full z-0">
                <video
                    src={bgvid}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                ></video>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className='relative z-20 flex flex-col items-center w-full pt-10 pb-20'>
                <div className='w-full text-center mb-16 px-4 mt-10 md:mt-20'>
                    <h1 className="glow-text text-5xl md:text-7xl lg:text-8xl font-black text-blue-300 vt323-regular uppercase tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] animate-pulse">
                        Ready to Fly!!!
                    </h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-16 md:gap-y-20 px-6 max-w-400'>
                    {Competetion.map((comp, index) => (
                        <div key={index} className="flex justify-center">
                            <Card
                                name={comp.name}
                                des={comp.description}
                                image={comp.img}
                                explore={comp.ExploreLink}
                                register={comp.RegisterLink}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Competetions