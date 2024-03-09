import { useState } from 'react'
import hamOpen from './assets/HamMenuOpen.svg'
import hamClosed from './assets/HamMenuClosed.svg'

export const NavBar = () => {
  const [openNavbar, setOpenNavbar] = useState(false)

  return (
    <nav className={
      `${openNavbar ? 'border-opacity-100 shadow-light-pr' : undefined}
      w-full h-fit fixed top-0 z-50  py-3 px-4 bg-light-bg_snd border
      border-light-pr border-opacity-0 shadow-xl transition-all duration-1000`}
    >
      <button onClick={() => setOpenNavbar(!openNavbar)} className='relative w-5 h-6'>
        <img className={`${openNavbar ? 'opacity-0' : 'opacity-100'} absolute top-0 left-0 transition-opacity duration-500`} src={ hamOpen }/>
        <img className={`${openNavbar ? 'opacity-100' : 'opacity-0'} absolute top-0 left-0 transition-opacity duration-500`} src={ hamClosed }/>
      </button>
      <ul className={
        `w-screen ${openNavbar ? 'max-h-60 !border-opacity-100' : 'max-h-0 py-0'}
        shadow-2xl top-14 left-0 duration-1000 flex flex-col gap-3
        p-7 overflow-hidden transition-all font-neue uppercase text-base text-light-snd
        font-light text-sm`}
      >
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a href='#projectView'>Projects</a></li>
        <li><a>Contact me</a></li>
      </ul>
    </nav>
  )
}
