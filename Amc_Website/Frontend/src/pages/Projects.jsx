import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/ResourcesComp/projects/Projectcard.tsx'
import gsap from 'gsap'
import { projects } from '../assets/Projects/AllProject.js'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

  useGSAP(() => {
    gsap.from('.hero', {
      height: '10px', 
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 80%', 
        end: 'bottom center',
        scrub: 1, 
      },
      clearProps: "height, opacity" 
    })
  })

  return (
    <div className='lg:p-4 p-0 bg-black w-full min-h-screen'>
      <div className='pt-[20vh] pl-[5vw] lg:pt-[45vh] lg:pl-[7vw]'>
        <h2 className='font-[font2] text-6xl md:text-8xl lg:text-[9.5vw] text-white uppercase leading-none tracking-tighter'>
          Projects
        </h2>
      </div>

      <div className='lol mt-10 lg:mt-20 px-2 lg:px-0'>
        {projects.map(function (elem, idx) {
          return (
            <div key={idx} className='hero w-full mb-4 lg:mb-8 flex flex-col lg:flex-row gap-4 lg:gap-4 overflow-hidden lg:h-[80vh]'>
              <ProjectCard 
                image1={elem.display1.img} 
                image2={elem.display2.img} 
                nav1={elem.display1.navilik} 
                nav2={elem.display2.navilik}
                name1={elem.display1.name}  
                name2={elem.display2.name}
                gitlink1={elem.display1.githubLink} 
                gitlink2={elem.display2.githubLink}
                des1={elem.display1.projectDescription} 
                des2={elem.display2.projectDescription}
                vid1={elem.display1.VideoLink} 
                vid2={elem.display2.VideoLink}
              />
            </div>
          )
        })}
      </div>
      <div className="h-[10vh] lg:h-[20vh] w-full"></div>
    </div>
  )
}

export default Projects