import { useState } from 'react'
import gsap from 'gsap'
import hamOpen from './assets/HamMenuOpen.svg'
import hamClosed from './assets/HamMenuClosed.svg'
import { useGSAP } from '@gsap/react'

export const NavBar = () => {
  const [openNavbar, setOpenNavbar] = useState(false)
  useGSAP(() => {
    if (openNavbar) {
      const links = document.querySelectorAll('.navBarLink')
      gsap.from(links, {
        y: '100%',
        opacity: 0.5,
        duration: 0.5,
        delay: 0.4,
        stagger: 0.1,
        ease: 'power3.out'
      })
    }
  }, [openNavbar])

  return (
    <nav className={
      `${openNavbar ? 'border-opacity-100 shadow-light-pr' : undefined}
      w-full max-h-fit fixed top-0 z-50  py-3 px-4 bg-light-bg_snd border
      border-light-pr border-opacity-0 shadow-xl transition-all`}
    >
      <button onClick={() => setOpenNavbar(!openNavbar)} className='relative w-5 h-6 md:hidden'>
        <img className={`${openNavbar ? 'opacity-0' : 'opacity-100'} absolute top-0 left-0 transition-opacity duration-500`} src={ hamOpen }/>
        <img className={`${openNavbar ? 'opacity-100' : 'opacity-0'} absolute top-0 left-0 transition-opacity duration-500`} src={ hamClosed }/>
      </button>
      <ul className={
        `w-screen ${openNavbar ? 'max-h-60 !border-opacity-100' : 'max-h-0 py-0'}
        shadow-2xl top-12 left-0 duration-700 flex flex-col gap-3
        p-7 overflow-hidden transition-all font-neue uppercase text-light-snd
        font-light text-sm md:max-h-60 md:shadow-none md:flex-row justify-end md:w-full
        md:p-2 md:gap-8`}
      >
        <li onClick={() => setOpenNavbar(false)} className='navBarLink transition-colors md:hover:text-light-pr'>
          <a href='#home'>Home</a>
        </li>
        <li onClick={() => setOpenNavbar(false)} className='navBarLink transition-colors md:hover:text-light-pr'>
          <a href='#about-section'>About</a>
        </li>
        <li onClick={() => setOpenNavbar(false)} className='navBarLink transition-colors md:hover:text-light-pr'>
          <a href='#projects'>Projects</a>
        </li>
        <li onClick={() => setOpenNavbar(false)} className='navBarLink transition-colors md:hover:text-light-pr'>
          <a href='#contactme'>Contact me</a>
        </li>
      </ul>
    </nav>
  )
}
