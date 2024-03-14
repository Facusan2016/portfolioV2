import React from 'react'
import { icons, contactAssets } from '.'

export const ContactMe = () => {
  return (
    <section id='contactme' className=' overflow-hidden w-full min-h-svh relative pt-14 bg-light-bg flex items-center justify-start flex-col gap-20'>
      <div className='absolute top-0 left-0 bg-gradient-to-b from-light-bg_snd to-light-bg w-full h-1/2'/>
      <div className='relative z-20 *:h-full flex flex-col gap-16 items-center justify-center pt-8'>
        <h2 className='font-neue text-3xl text-light-snd font-semibold'>Let&apos;s get in touch!</h2>
        <ul className='grid grid-cols-2 gap-10 max-h-[10rem]'>
          <li className='active:scale-95 transition-transform'>
            <a href='https://github.com/Facusan2016'>
              <img src={icons.Github}/>
            </a>
          </li>
          <li className='active:scale-95 transition-transform'>
            <a href='https://www.linkedin.com/in/facundos%C3%A1nchez/'>
              <img src={icons.LinkedIn}/>
            </a>
          </li>
          <li className='active:scale-95 transition-transform'>
            <a href='https://api.whatsapp.com/send?phone=598093812892&text='>
              <img src={icons.Whatsapp}/>
            </a>
          </li>
          <li className='active:scale-95 transition-transform'>
            <a href='mailto: facusan2016@gmail.com'>
              <img src={icons.Email}/>
            </a>
          </li>
        </ul>
      </div>
      <div className='flex items-center justify-center flex-col mt-1/2 relative z-20'>
        <p className='font-neue font-semibold text-light-snd text-base'>
          or if you want...
        </p>
        <a href='https://drive.google.com/file/d/1oDIyY-Z0zZuksckbXpxmQQDAYp710MAf/view?usp=sharing' download className='font-neue text-light-pr text-2xl text-center mt-12'>
          Click <span className='font-semibold'>here</span> to download <br/> my resume
        </a>
      </div>
      <div className='mt-auto min-h-[10rem] w-full relative flex-1 bg-light-pr'>
        <img className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference' src={contactAssets.Arrow}/>
        <p className=' text-light-pr_snd text-xs absolute bottom-4 left-4 uppercase'>Hope you liked it ;)</p>
        <a className='w-fit h-fit absolute -bottom-20 -right-1/4 mix-blend-exclusion' href='https://www.youtube.com/watch?v=j-T8vVXUW2k&ab_channel=CharlyGarciaVEVO'>
          <img className='w-[16rem]' src={contactAssets.Charly}/>
        </a>
      </div>
    </section>
  )
}
