import React from 'react'

export const TemporalDesktopAdvice = () => {
  return (
    <div className='hidden w-screen h-screen fixed top-0 left-0 md:flex flex-col items-center justify-center bg-light-pr z-50'>
      <div className='w-2/4 flex flex-col items-center justify-center text-light-pr_snd font-neue text-5xl gap-8'>
        <p className='text-center'>The desktop version of<br/> this website is still in<br/> development, it will be ready<br/> soon, <b> enter from a mobile <br/> device</b> and stay tuned!</p>
        <p className='text-[7rem] mt-20 rotate-90'>:)</p>
      </div>
    </div>
  )
}
