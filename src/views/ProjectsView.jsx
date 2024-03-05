import { Project } from '../components/Projects/Project'
import Lositur from './ProjectsImages/Lositur.png'
import Gymlink from './ProjectsImages/Gymlink.jpg'
import BeanScene from './ProjectsImages/BeanScene.png'

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
    webLink: 'www.lositur.com.uy',
    repoLink: 'https://github.com/HolbertonFinalProjectFG/gymlink_frontend',
    img: Gymlink
  },
  {
    id: 3,
    title: 'BeanScene',
    description: 'BeanScene is the first project that I made following a figma design, it simulates a virtual store that has a cart, using Redux and ReactJS',
    webLink: 'https://beanscene.netlify.app/about',
    repoLink: 'www.lositur.com.uy',
    img: BeanScene
  }
]

export const ProjectsView = () => {
  return (
    <section className="w-svh h-svh relative overflow-hidden flex flex-col items-center py-10 justify-evenyl gap-10 bg-light-bg_snd">
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
