import SplitType from 'split-type'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
    <section id='about-section' className="about-section w-svh min-h-svh p-10 relative overflow-hidden flex flex-col items-center justify-center gap-2 bg-light-pr">
      <p className="text-[8rem] font-bold about-bg-text
       text-transparent green-outline
       break-all leading-[7rem] uppercase absolute top-0"
      >
        {'FRONTEND DEVELOPER SOFTWARE DEVELOPER <3'}
      </p>
      <p className="font-neue text-xl main-about-text">
        Hi! My name is Facundo Sánchez, and I&apos;m a Software and Frontend Developer
        based in Uruguay with a strong passion for designing and creating websites
        that provide a unique user experience. With a keen eye for detail and a
        strong interest in the IT world, I have been part of projects that have
        given me the necessary knowledge to create applications from scratch,
        develop my soft skills, and work in multidisciplinary groups.
      </p>
    </section>
  )
}
