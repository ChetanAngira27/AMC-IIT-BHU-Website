import React from 'react'
import { HelmInfo } from '../assets/Helm_Images/2024-25/helm'

const Members = () => {
    return (
        <div className="bg-black w-full overflow-x-hidden">
            {HelmInfo.map((Members, key) => (
                <section className="h-screen relative overflow-hidden flex items-center justify-center border-b border-zinc-900" key={key}>
                    <div className="absolute w-full top-[5%] md:top-[20%] overflow-hidden flex items-center z-0 opacity-40">
                        <div className="helma flex whitespace-nowrap">
                            <div className="text-white text-[25vw] md:text-[15vw] lg:text-[11vw] uppercase vt323-regular leading-none">
                                {Members.role} • {Members.role} • {Members.role} •&nbsp;
                            </div>
                            <div className="text-white text-[25vw] md:text-[15vw] lg:text-[11vw] uppercase vt323-regular leading-none">
                                {Members.role} • {Members.role} • {Members.role} •&nbsp;
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 top-0 flex items-center justify-center">
                        <img
                            src={Members.img}
                            alt={Members.name}
                            className="h-[65vh] w-[90vw] md:h-[70vh] md:w-[60vw] lg:h-[80vh] lg:w-[40vw] object-cover rounded-[2.5rem] shadow-2xl"
                        />
                    </div>
                    <div className="absolute w-full top-[70%] md:top-[75%] overflow-hidden flex items-center z-20 pointer-events-none">
                        <div className="helmb flex whitespace-nowrap">
                            <div className="text-[#D3FD50] text-[15vw] md:text-[10vw] lg:text-[7vw] uppercase vt323-regular px-4">
                                {Members.name} &nbsp;&nbsp;&nbsp;&nbsp; {Members.name} &nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div className="text-[#D3FD50] text-[15vw] md:text-[10vw] lg:text-[7vw] uppercase vt323-regular px-4">
                                {Members.name} &nbsp;&nbsp;&nbsp;&nbsp; {Members.name} &nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}

export default Members