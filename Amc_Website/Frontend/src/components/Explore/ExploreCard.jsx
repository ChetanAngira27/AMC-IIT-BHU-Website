import React from 'react'
import { Link } from 'react-router-dom'
import bgVid from '../../assets/Competetions/e.mp4'
import leftmain from '../../assets/Competetions/leftmain.svg'
import rightmain from '../../assets/Competetions/rightmain.svg'

const ExploreCard = (props) => {
    return (
        <div className='relative w-full h-screen bg-black overflow-hidden'>
            <div className="absolute inset-0 w-full h-full z-0">
                <video
                    src={bgVid}
                    className='w-full h-full object-cover blur-sm opacity-60'
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className='absolute inset-0 z-10 overflow-y-auto overflow-x-hidden'>
                <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center min-h-full w-full p-6 gap-10 lg:gap-20 py-20'>
                    
                    <div className='flex flex-col items-center gap-8 w-full max-w-md lg:w-[25%]'>
                        <div className='w-full aspect-square relative'>
                            <img
                                src={props.image}
                                alt={props.name}
                                className="h-full w-full object-cover rounded-3xl border border-purple-400/30 shadow-[0_0_15px_1px_rgba(168,85,247,0.25)]"
                            />
                        </div>
                        <div className='flex flex-col gap-4 w-full px-4'>
                            <a href={props.whatsapp} className='vt323-regular text-white text-xl md:text-2xl text-center py-2 bg-black/80 border-2 border-pink-600 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 w-full'>
                                WhatsApp
                            </a>
                            <a href={props.ps} className='vt323-regular text-white text-xl md:text-2xl text-center py-2 bg-black/80 border-2 border-purple-600 rounded-2xl hover:bg-white hover:text-black transition-all duration-300 w-full'>
                                PS
                            </a>
                        </div>
                    </div>

                    <div className='flex flex-col items-center lg:items-start w-full max-w-4xl lg:w-[50%] pt-0 lg:pt-10'>
                        <div className='vt323-regular text-5xl md:text-6xl lg:text-7xl text-white mb-6 text-center lg:text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]'>
                            {props.name}
                        </div>
                        <div className='flex flex-row items-stretch justify-center lg:justify-between w-full gap-4'>
                            <img src={leftmain} className='hidden md:block h-auto w-12 lg:w-[5vw] object-contain opacity-80' alt="decoration left" />
                            <div className='text-white vt323-regular text-lg md:text-2xl leading-relaxed text-justify lg:text-left flex-1 px-2'>
                                {props.des}
                            </div>
                            <img src={rightmain} className='hidden md:block h-auto w-12 lg:w-[5vw] object-contain opacity-80' alt="decoration right" />
                        </div>
                        <div className='mt-12 w-full flex justify-center lg:justify-start pb-10'> 
                            <Link to={props.registerlink} className='vt323-regular text-3xl md:text-4xl text-white bg-black/90 border-2 border-purple-800 px-10 py-2 rounded-3xl hover:bg-white hover:text-purple-900 hover:border-white hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-400'>
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreCard