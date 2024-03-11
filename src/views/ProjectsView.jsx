import { Project } from '../components/Projects/Project'
import Lositur from './ProjectsImages/Lositur.png'
import Gymlink from './ProjectsImages/Gymlink.jpg'
import BeanScene from './ProjectsImages/BeanScene.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const pConfig = [
  {
    id: 1,
    title: 'Lositur',
    description: 'Lositur was a project that I made for a local store using technologies such as React and NodeJS',
    webLink: 'https://www.lositur.com.uy',
    repoLink: 'https://github.com/Facusan2016/Lositur',
    img: Lositur
  },
  {
    id: 2,
    title: 'Gymlink',
    description: 'Gymlink is an integral tool made for manage a gym as a final project for Holberton School where I developed the project manager and frontend developer roles.',
    webLink: 'https://gymlink.vercel.app/',
    repoLink: 'https://github.com/HolbertonFinalProjectFG/gymlink_frontend',
    img: Gymlink
  },
  {
    id: 3,
    title: 'BeanScene',
    description: 'BeanScene is the first project that I made following a figma design, it simulates a virtual store that has a cart, using Redux and ReactJS',
    webLink: 'https://beanscene.netlify.app/about',
    repoLink: 'https://beanscene.netlify.app/',
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
        end: '120% bottom',
        scrub: 1
      }
    })
  })

  return (
    <section className="project-section w-svh min-h-svh relative overflow-hidden flex flex-col p-5 items-center py-10 justify-evenyl gap-10 bg-light-bg_snd">
      <div>
        <h2 className='text-3xl font-grozen p-10 py-0 text-light-pr'>Projects</h2>
      </div>
      {
        pConfig.map((project) =>
          <Project key={project.id} {...project}/>
        )
      }
    </section>
  )
}
