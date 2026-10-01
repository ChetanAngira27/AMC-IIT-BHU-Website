import React from 'react'
import bgvid from '../assets/Alumni/Alumni.mp4'
import Card from '../components/Alumni/Card'
import { AlumniInfo } from '../assets/Alumni/AlumniInfo'

const Alumni = () => {
  return (
    <div className='min-h-screen w-full relative overflow-x-hidden bg-black'>
      <video 
        src={bgvid} 
        autoPlay 
        muted 
        loop 
        className='h-full w-full fixed top-0 left-0 z-0 object-cover blur-[2px]'
      />
      <div className='fixed inset-0 z-1 bg-pink-500/20 mix-blend-overlay pointer-events-none'></div>
      <div className='relative z-10 flex flex-wrap justify-center gap-6 p-10 mt-30'>
        {AlumniInfo.map((ele, idx) => (
            <Card 
              key={idx}
              name={ele.name} 
              image={ele.image} 
              role={ele.role} 
              project={ele.project} 
              branch={ele.branch} 
              award1={ele.award1} 
              award2={ele.award2} 
            />
        ))}
      </div>
    </div>
  )
}

export default Alumni