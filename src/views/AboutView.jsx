import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { techIcons } from '.'

gsap.registerPlugin(ScrollTrigger)

export const AboutView = () => {
  useGSAP(() => {
    gsap.fromTo('.main-about-text', {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: '.about-section',
        start: '40% bottom',
        end: '60% bottom',
        scrub: 1
      }
    })

    const bgTextSplitText = SplitType.create('.about-bg-text', { types: 'chars' })
    const chars = bgTextSplitText.chars

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 10
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: '.about-section',
          start: '25% bottom',
          end: '+=' + (window.innerHeight * 1.5),
          scrub: 1
        },
        stagger: 0.05
      }
    )
  })

  return (
    <section
      id='about-section'
      className="about-section w-svw min-h-screen
      p-10 relative overflow-hidden flex flex-col
      items-center justify-center gap-2 bg-light-pr"
      >

      <p className="text-[8rem] font-neue font-bold about-bg-text
       text-transparent green-outline md:hidden
       break-all leading-[7rem] uppercase absolute top-0"
      >
        {'FRONTEND DEVELOPER SOFTWARE DEVELOPER <3'}
      </p>
      <div className='w-full md:max-w-7xl flex items-center justify-around gap-12 xl:gap-48'>
        <p className="font-neue flex-1 text-xl md:text-2xl xl:text-3xl main-about-text">
          Hi! My name is Facundo Sánchez and I&apos;m a <b>Software and Frontend</b> Developer
          based in Uruguay with a strong passion for designing and creating websites
          that provide a <b>unique user experience.</b> With a keen eye for detail and a
          strong interest in the IT world, I have been part of projects that have
          given me the <b>necessary knowledge to create applications from scratch</b>,
          develop my soft skills, and work in multidisciplinary groups. <b/>
          I&apos;m currently using <b>ReactJS</b> as the primary technology in my projects
          but I also possess expertise in backend technologies like <b> Node.js, Express, and PostgreSQL.</b>
        </p>
        <div className='hidden md:grid grid-cols-2 grid-rows-4 gap-14 [grid-template-columns: repeat(3, 1fr)]'>
          <img alt='React' className='w-[12vh] max-w-32' src={techIcons.React}/>
          <img alt='Redux' className='w-[12vh] max-w-32' src={techIcons.Redux}/>
          <img alt='Python' className='w-[12vh] max-w-32' src={techIcons.Python}/>
          <img alt='Node' className='w-[12vh] max-w-32' src={techIcons.Node}/>
          <img alt='Javascript' className='w-[12vh] max-w-32' src={techIcons.Js}/>
          <img alt='Html' className='w-[12vh] max-w-32' src={techIcons.Html}/>
          <img alt='Css' className='w-[12vh] max-w-32' src={techIcons.Css}/>
          <img alt='Postgres' className='w-[12vh] max-w-32' src={techIcons.Postgres}/>
        </div>
      </div>
    </section>
  )
}
