import React from 'react'

const Card = (props) => {
  return (
    <div className='flex flex-col md:flex-row items-center w-full md:w-[90%] lg:w-[85%] mx-auto bg-white/10 rounded-3xl backdrop-blur-md border border-white/20 p-6 md:px-10 shadow-2xl transition-all hover:bg-white/15 h-auto' >
      <div className='h-40 w-40 md:h-[14vw] md:w-[14vw] md:min-h-40 md:min-w-40 shrink-0 mb-6 md:mb-0'>
        <img 
          src={props.image} 
          className='h-full w-full rounded-2xl object-cover shadow-lg border border-white/10' 
          alt={props.name} 
        />
      </div>

      <div className='md:ml-8 text-white text-center md:text-left w-full'>
        <h1 className='text-2xl md:text-[2.2vw] font-bold leading-tight'>
          {props.name} <span className='text-blue-400 text-sm md:text-[1.4vw] block md:inline md:ml-1'>{props.branch}</span>
        </h1>
        <h2 className='text-sm md:text-[1.1vw] font-semibold text-pink-300 uppercase tracking-wide mt-1'>
          {props.role}
        </h2>
        <p className='text-sm md:text-[0.9vw] text-gray-300 italic mb-4 mt-2 md:mt-0'>
          {props.project}
        </p>
        
        <div className='space-y-1 border-t border-white/10 pt-3 flex flex-col items-center md:items-start'>
          {props.award1 && (
            <p className='text-xs md:text-[1vw] flex items-center gap-2'>
              <span className='h-1.5 w-1.5 bg-white rounded-full'></span>
              {props.award1}
            </p>
          )}
          {props.award2 && (
            <p className='text-sm md:text-[1.1vw] font-bold text-pink-400 flex items-center gap-2'>
              <span className='h-1.5 w-1.5 bg-pink-400 rounded-full'></span>
              {props.award2}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card