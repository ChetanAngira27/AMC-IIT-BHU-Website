import React from 'react'
import compimage from '../../assets/Competetions/SummerCamp.png'
import ExploreCard from './ExploreCard'

const SummerCamp = () => {
  return (
    <div>
        <div className='bg-black fixed h-screen w-full '>
            <ExploreCard image={compimage} name="SummerCamp" registerlink="/register/summer" 

                des="Summer Camp is an immersive training program held during the May–July summer break, focused on advanced drone systems and applications.
Participants explore ROS-based drone workflows, gain a strong understanding of aerodynamics, and dive deep into end-to-end drone development.
The camp covers everything from flight principles and simulations to real-world integration and testing.
Successful participants earn entry into the club, making it the gateway to hands-on drone projects and competitive teams."

            ></ExploreCard>
    </div>
      
    </div>
  )
}

export default SummerCamp
