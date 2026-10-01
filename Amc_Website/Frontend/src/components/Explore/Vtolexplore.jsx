import React from 'react'
import compimage from '../../assets/Competetions/Glider.png'
import ExploreCard from './ExploreCard'

const Vtolexplore = () => {
  return (
    <div>
        <div className='bg-black fixed h-screen w-full '>
            <ExploreCard image={compimage} name="SkyGlider" registerlink="/register/vtol" 

                des="SkyGlide is an unpowered glider design challenge held by the AeroModelling Club IIT BHU.
The competition focuses on testing aerodynamic efficiency, stability, and lightweight design through hand-launched gliders.
Act as a platform to promote fundamentals of aeromodelling and aircraft design."

            ></ExploreCard>
    </div>
      
    </div>
  )
}

export default Vtolexplore
