import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectCard = (props: any) => {
    const renderCard = (img: string, name: string, des: string, gitLink: string, vidLink: string) => (
        <div className='w-full lg:w-1/2 group transition-all relative rounded-none hover:rounded-[30px] lg:hover:rounded-[70px] overflow-hidden h-[50vh] lg:h-full bg-black border-b-2 lg:border-b-0 border-zinc-800 lg:border-none last:border-none'>
            <img className='h-full w-full object-cover opacity-60 lg:opacity-80 lg:group-hover:opacity-60 transition-opacity duration-500' src={img} alt={name} />
            <div className='absolute top-4 right-0 z-10 text-white vt323-regular text-right pr-4 lg:pr-10 w-3/4 pointer-events-none'>
                <div className='text-4xl md:text-5xl lg:text-6xl text-white vt323-regular leading-none mb-1'>
                    {name}
                </div>
                <div className='text-lg md:text-xl lg:text-2xl text-gray-300 lg:text-black font-semibold lg:font-normal leading-tight'>
                    {des}
                </div>
            </div>
            <div className='absolute inset-0 flex items-center justify-center 
                            bg-black/10 lg:bg-black/40 backdrop-blur-[0px] lg:backdrop-blur-[2px]
                            transition-opacity duration-300 
                            opacity-100 lg:opacity-0 lg:group-hover:opacity-100'>
                
                <div className='flex items-center gap-4 uppercase font-[font1] 
                                border-2 lg:border-4 py-2 lg:py-4 px-6 lg:px-8 
                                text-white border-white rounded-full 
                                bg-black/40 lg:bg-black/30 backdrop-blur-md shadow-lg'>
                    <a href={gitLink} target="_blank" rel="noreferrer" className='group/git'>
                        <div className='w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center cursor-pointer'>
                            <svg className="w-8 h-8 lg:w-[2.3vw] lg:h-[2.3vw] fill-white group-hover/git:fill-purple-500 group-active:fill-purple-500 transition-all drop-shadow-md" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                            </svg>
                        </div>
                    </a>
                    <div className="w-0.5 h-8 bg-white/50"></div>
                    <a href={vidLink} target="_blank" rel="noreferrer" className='group/vid'>
                        <div className='w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center cursor-pointer'>
                            <svg className="w-8 h-8 lg:w-[2.3vw] lg:h-[2.3vw] fill-white group-hover/vid:fill-cyan-400 group-active:fill-cyan-400 transition-all drop-shadow-md" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M19.6069 6.99482C19.5307 6.69695 19.3152 6.47221 19.0684 6.40288C18.6299 6.28062 16.501 6 12.001 6C7.50098 6 5.37252 6.28073 4.93225 6.40323C4.68776 6.47123 4.4723 6.69593 4.3951 6.99482C4.2863 7.41923 4.00098 9.19595 4.00098 12C4.00098 14.804 4.2863 16.5808 4.3954 17.0064C4.47126 17.3031 4.68676 17.5278 4.93251 17.5968C5.37252 17.7193 7.50098 18 12.001 18C16.501 18 18.6299 17.7194 19.0697 17.5968C19.3142 17.5288 19.5297 17.3041 19.6069 17.0052C19.7157 16.5808 20.001 14.8 20.001 12C20.001 9.2 19.7157 7.41923 19.6069 6.99482ZM21.5442 6.49818C22.001 8.28 22.001 12 22.001 12C22.001 12 22.001 15.72 21.5442 17.5018C21.2897 18.4873 20.547 19.2618 19.6056 19.5236C17.8971 20 12.001 20 12.001 20C12.001 20 6.10837 20 4.39637 19.5236C3.45146 19.2582 2.70879 18.4836 2.45774 17.5018C2.00098 15.72 2.00098 12 2.00098 12C2.00098 12 2.00098 8.28 2.45774 6.49818C2.71227 5.51273 3.45495 4.73818 4.39637 4.47636C6.10837 4 12.001 4 12.001 4C12.001 4 17.8971 4 19.6056 4.47636C20.5505 4.74182 21.2932 5.51636 21.5442 6.49818ZM10.001 15.5V8.5L16.001 12L10.001 15.5Z"></path>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )

    return (
        <>
            {renderCard(props.image1, props.name1, props.des1, props.gitlink1, props.vid1)}
            {renderCard(props.image2, props.name2, props.des2, props.gitlink2, props.vid2)}
        </>
    )
}

export default ProjectCard