import { Project } from '../components/Projects/Project'
import Lositur from './assets/ProjectsImages/Lositur.png'
import Gymlink from './assets/ProjectsImages/Gymlink.jpg'
import BeanScene from './assets/ProjectsImages/BeanScene.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const pConfig = [
  {
    id: 1,
    title: 'Gymlink',
    description: 'Gymlink is an integral tool created to manage a gym, serving as my final project for Holberton School. Throughout the development process, I took on the roles of project manager and frontend developer.',
    webLink: 'https://gymlink.vercel.app/',
    repoLink: 'https://github.com/HolbertonFinalProjectFG/gymlink_frontend',
    img: Gymlink
  },
  {
    id: 2,
    title: 'Lositur',
    description: 'Lositur is a full-stack project that I created for a local store, utilizing React and Node.js.',
    webLink: 'https://www.lositur.com.uy',
    img: Lositur
  },
  {
    id: 3,
    title: 'BeanScene',
    description: 'BeanScene is the first project I developed based on a Figma design. It simulates a virtual store featuring a cart functionality, built with Redux and ReactJS.',
    webLink: 'https://beanscene.netlify.app/',
    repoLink: 'https://github.com/Facusan2016/CoffeeShop',
    img: BeanScene
  }
]

export const ProjectsView = () => {
  useGSAP(() => {
    gsap.fromTo('.project', {
      minHeight: 0
    }, {
      minHeight: '12rem',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.project-section',
        start: '33.3% bottom',
        end: '100% bottom',
        scrub: 0.5
      }
    })
  })

  return (
    <section id='projects' className="project-section md:justify-evenly md:gap-4 w-svh min-h-svh relative overflow-hidden flex flex-col p-5 items-center py-10 gap-10 bg-light-bg_snd">
      <div>
        <h2 className='text-3xl md:text-5xl font-grozen p-10 py-0 text-light-pr'>Projects</h2>
      </div>
      <article className='w-full md:max-w-7xl flex items-center justify-center gap-8 flex-col md:flex-row'>
        {
          pConfig.map((project) =>
            <Project key={project.id} {...project}/>
          )
        }
      </article>
    </section>
  )
}
