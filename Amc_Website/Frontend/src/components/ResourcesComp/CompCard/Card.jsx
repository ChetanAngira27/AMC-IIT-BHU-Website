import React from 'react'
import { Link } from 'react-router-dom'
import mainCard from "../../../assets/Competetions/cardCoponent/MainCard.svg";
import bottomleft from "../../../assets/Competetions/cardCoponent/BottomLeft.png";
import bottomright from "../../../assets/Competetions/cardCoponent/bottomright.png";
const Card = (props) => {
    return (
        <div className='relative w-72 h-96 md:w-[20vw] md:h-[26vw] lg:w-[15vw] lg:h-[20vw] group transition-all duration-300 mx-auto'>
            <div className='relative z-10 w-full h-full'>
                <img src={mainCard} className='w-full h-full object-contain' alt="main" />
            </div>
            <div className='absolute z-30 top-4 left-[25%] w-[50%] text-center text-white vt323-regular text-2xl md:text-3xl group-hover:top-8 transition-all duration-400'>
                {props.name}
            </div>
            <div className='absolute z-10 top-[18%] left-[16%] w-[70%] h-[60%] group-hover:blur-sm transition-all duration-400'>
                <img src={props.image} className='h-full w-full object-cover rounded-sm' alt={props.name}></img>
            </div>
            <div className='absolute z-30 top-[25%] left-[18%] w-[65%] h-[40%] text-white vt323-regular text-sm md:text-[1.2vw] leading-tight opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center text-center'>
                {props.des}
            </div>
            <div className='absolute bottom-[2%] left-[5%] w-full h-full z-0 transition-all duration-400 group-hover:-left-[2%] pointer-events-none'>
                <img src={bottomleft} className='h-full w-full object-contain' alt="decoration" />
            </div>
            <div className='absolute bottom-[2%] -left-[5%] w-full h-full z-0 transition-all duration-400 group-hover:left-[2%] pointer-events-none'>
                <img src={bottomright} className='h-full w-full object-contain' alt="decoration" />
            </div>
            <div className='absolute bottom-[12%] left-[12%] w-[76%] z-40 flex justify-between items-center'>
                <Link className='text-white text-lg md:text-[1.2vw] vt323-regular px-3 py-1 border-2 border-purple-500 bg-black hover:text-black hover:bg-white transition-colors' to={props.explore}>Explore </Link>
                <Link className='text-white text-lg md:text-[1.2vw] vt323-regular px-3 py-1 border-2 border-purple-500 bg-black hover:text-black hover:bg-white transition-colors' to={props.register}>Register </Link>
            </div>
        </div>
    )
}

export default Card