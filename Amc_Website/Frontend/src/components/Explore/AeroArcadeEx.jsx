import React from 'react'
import compimage from '../../assets/Competetions/Aerorcade.png'
import { Link } from 'react-router-dom'
import ExploreCard from './ExploreCard'
const AeroArcadeEx = () => {
    return (
        <div className='bg-black fixed h-screen w-full '>
            <ExploreCard image={compimage} name="AeroArcade" registerlink="/register/AeroArcade" whatsapp="https://chat.whatsapp.com/GLCd70iKk7QEHfAFIDqXyn" ps="https://drive.google.com/file/d/1yD4Eth_QnaG0O6qb_Thpyb5UwxwWQ8iG/view?usp=drive_link" 

                des="AeroArcade is a flagship drone-flying competition organized by Aero Modelling Club IIT BHU.
It introduces participants to hands-on drone piloting through an exciting arena-based challenge featuring precision loops and obstacle navigation.
Typically held during August–September, the competition blends fun with fundamentals of drone dynamics and control.
AeroArcade serves as an engaging entry point into the world of competitive and autonomous drone flying."

            ></ExploreCard>

        </div>
    )
}

export default AeroArcadeEx
