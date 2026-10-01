import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import rosimage from '../assets/ResourcesImages/Ros/image.png'
import gazeboimg from '../assets/ResourcesImages/Ros/gazebo.png'
import px4img from '../assets/ResourcesImages/Px4/Px4img.png'
import drone from '../assets/ResourcesImages/Px4/drone.png'
import cube from '../assets/ResourcesImages/Ardupilot/cube.png'
import motor from '../assets/ResourcesImages/Components/Motor.png'
import esc from '../assets/ResourcesImages/Components/Flight.png'

const ResourceItem = ({ title, route, images, activeId, setActiveId, id, scrollText }) => {
    const navigate = useNavigate();
    const isActive = activeId === id;

    const handleClick = () => {
        if (window.innerWidth < 1024) {
            if (isActive) {
                navigate(route);
            } else {
                setActiveId(id);
            }
        } else {
            navigate(route);
        }
    };

    return (
        <div 
            className='border-y origin-top group border-white relative overflow-hidden h-32 md:h-40 lg:h-[10vw] cursor-pointer' 
            onClick={handleClick}
            onMouseEnter={() => setActiveId(id)}
            onMouseLeave={() => setActiveId(null)}
        >
            <div className='flex items-center justify-center h-full w-full'>
                <h1 className='text-5xl md:text-7xl lg:text-[8vw] text-center leading-none uppercase text-white transition-opacity duration-300'>
                    {title}
                </h1>
            </div>
            <div className={`absolute left-0 top-0 h-full w-full flex items-center bg-linear-to-b to-purple-900 from-pink-900 transition-opacity duration-300 pointer-events-none
                ${isActive ? 'opacity-100' : 'opacity-0 lg:group-hover:opacity-100'}
            `}>
                <div className='flex flex-nowrap w-full items-center'>
                    <div className='flex min-w-full movex items-center justify-around shrink-0 gap-10 md:gap-20'>
                        <h2 className='whitespace-nowrap text-black text-4xl md:text-6xl lg:text-[8vw] uppercase shrink-0 font-normal opacity-90'>{scrollText}</h2>
                        <img className='h-16 w-24 md:h-24 md:w-40 lg:h-[7vw] lg:w-[15vw] object-cover shrink-0 rounded-full border-2 border-black' src={images[0]} alt="img1" />
                        <h2 className='whitespace-nowrap text-black text-4xl md:text-6xl lg:text-[8vw] uppercase shrink-0 font-normal opacity-90'>{scrollText}</h2>
                        <img className='h-16 w-24 md:h-24 md:w-40 lg:h-[7vw] lg:w-[15vw] object-cover shrink-0 rounded-full border-2 border-black' src={images[1]} alt="img2" />
                    </div>
                    <div className='flex min-w-full movex items-center justify-around shrink-0 gap-10 md:gap-20'>
                         <h2 className='whitespace-nowrap text-black text-4xl md:text-6xl lg:text-[8vw] uppercase shrink-0 font-normal opacity-90'>{scrollText}</h2>
                        <img className='h-16 w-24 md:h-24 md:w-40 lg:h-[7vw] lg:w-[15vw] object-cover shrink-0 rounded-full border-2 border-black' src={images[0]} alt="img1" />
                        <h2 className='whitespace-nowrap text-black text-4xl md:text-6xl lg:text-[8vw] uppercase shrink-0 font-normal opacity-90'>{scrollText}</h2>
                        <img className='h-16 w-24 md:h-24 md:w-40 lg:h-[7vw] lg:w-[15vw] object-cover shrink-0 rounded-full border-2 border-black' src={images[1]} alt="img2" />
                    </div>
                </div>

                <div className={`absolute bottom-2 w-full text-center text-white text-xs lg:hidden ${isActive ? 'block' : 'hidden'}`}>
                    TAP AGAIN TO OPEN
                </div>
            </div>
        </div>
    )
}

const Resources = () => {
    const [activeId, setActiveId] = useState(null);

    return (
        <div className='bg-black w-full min-h-screen overflow-x-hidden'>
            <div className='pt-32 lg:pt-40 vt323-regular pb-20'>
                
                <ResourceItem 
                    id="ros"
                    title="Ros2" 
                    route="/resources/ros" 
                    images={[rosimage, gazeboimg]} 
                    scrollText="perceive all"
                    activeId={activeId}
                    setActiveId={setActiveId}
                />

                <ResourceItem 
                    id="px4"
                    title="PX4" 
                    route="/resources/px4" 
                    images={[px4img, drone]} 
                    scrollText="Observe all"
                    activeId={activeId}
                    setActiveId={setActiveId}
                />

                <ResourceItem 
                    id="ardu"
                    title="Ardupilot" 
                    route="/resources/ardupilot" 
                    images={[cube, drone]} 
                    scrollText="perceive all"
                    activeId={activeId}
                    setActiveId={setActiveId}
                />

                <ResourceItem 
                    id="comp"
                    title="Components" 
                    route="/resources/components" 
                    images={[motor, esc]} 
                    scrollText="Observe all"
                    activeId={activeId}
                    setActiveId={setActiveId}
                />

            </div>
        </div>
    )
}

export default Resources