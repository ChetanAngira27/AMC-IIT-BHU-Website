import React from 'react'
import bgVid from '../assets/Makers/BgVideMakers.mp4'
import SarveshImg from '../assets/Makers/Sarvesh_Mishra.png'
import DeveshImg from '../assets/Makers/Devesh_Mishra.png'

const Authors = () => {
  return (
    <div className='bg-black relative min-h-screen w-full overflow-x-hidden font-["VT323"]'>
      <video 
        src={bgVid} 
        className='fixed inset-0 w-full h-full object-cover brightness-[0.4] z-0' 
        autoPlay 
        loop 
        muted 
        playsInline
      ></video>

      <div className='relative z-10 w-full min-h-screen flex items-center justify-center p-4 pt-24 md:pl-32 pb-10'>
        <div className='w-full max-w-6xl backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 md:p-12 gap-8 md:gap-4'>
          <div className='order-1 md:order-2 flex flex-row md:flex-col gap-6 md:gap-12 items-center justify-center shrink-0'>
            <div className='w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-purple-500 overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-transform hover:scale-105'>
              <img src={SarveshImg} alt="Sarvesh" className='w-full h-full object-cover bg-neutral-800' />
            </div>
            <div className='w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-cyan-500 overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-transform hover:scale-105'>
              <img src={DeveshImg} alt="Devesh" className='w-full h-full object-cover bg-neutral-800' />
            </div>
          </div>
          <div className='order-2 md:order-1 text-center md:text-right flex flex-col items-center md:items-end w-full md:w-1/3'>
            <h2 className='text-3xl md:text-5xl text-white uppercase tracking-tighter font-bold'>Sarvesh Mishra</h2>
            <p className='text-purple-400 text-lg md:text-2xl mb-4 font-light tracking-wide'>Role: Developer & Maintainer</p>
            
            <div className='flex gap-4 mt-2'>
              <a href="https://github.com/Sarvesh-Mishra1981" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform group'>
                <svg className="w-8 h-8 md:w-10 md:h-10 fill-white group-hover:fill-purple-500 transition-colors duration-300" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/sarvesh-mishra-69a98b34b/" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform group'>
                <svg className="w-8 h-8 md:w-10 md:h-10 fill-white group-hover:fill-purple-500 transition-colors duration-300" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
            
            <div className='w-32 h-[px] bg-white/20 my-6 md:hidden'></div>
          </div>
          <div className='order-3 md:order-3 text-center md:text-left flex flex-col items-center md:items-start w-full md:w-1/3'>
            <h2 className='text-3xl md:text-5xl text-white uppercase tracking-tighter font-bold'>Devesh Mishra</h2>
            <p className='text-cyan-400 text-lg md:text-2xl mb-4 font-light tracking-wide'>Role: Developer & Maintainer</p>
            
            <div className='flex gap-4 mt-2'>
              <a href="https://github.com/Dev-sh21" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform group'>
                <svg className="w-8 h-8 md:w-10 md:h-10 fill-white group-hover:fill-cyan-500 transition-colors duration-300" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/devesh-mishra-7032a329a/" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-transform group'>
                <svg className="w-8 h-8 md:w-10 md:h-10 fill-white group-hover:fill-cyan-500 transition-colors duration-300" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Authors