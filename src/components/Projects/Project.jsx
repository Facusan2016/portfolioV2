import React from 'react'
import github from './assets/Github.svg'
import website from './assets/Website.svg'

export const Project = ({
  title,
  description,
  webLink,
  repoLink,
  img,

}) => {
  return (
    <article
      style={
        {
          backgroundImage: `url(${img})`,
          WebkitBorderRadius: '12px'
        }
      }
      className={
      `w-full relative project h-full
      flex border border-light-pr border-1 rounded-xl
      bg-cover overflow-hidden bg-center md:max-w-2xl md:!min-h-[20rem]`}
      >
        <div className='w-full h-full absolute top-0 -left-0 hover:-translate-y-full transition-all ease-in-out'>
          <div className='w-full min-h-full relative top-0 left-0 p-4 bg-black bg-opacity-50'>
            <h2 className='font-grozen text-xl font-bold text-light-snd'>
              {title}
            </h2>
          </div>
          <div className='w-full h-full p-4 flex flex-col items-center justify-around bg-black bg-opacity-50'>
            <p className='font-neue text-center text-sm md:text-xl font-regular text-light-snd'>
              {description}
            </p>
            <div className='flex gap-4 w-full items-center justify-center'>
              {
                repoLink
                  ? (
                  <a className='w-8 h-8 md:w-12 md:h-12' href={repoLink}>
                    <img alt='github' src={github}/>
                  </a>
                    )
                  : (
                      undefined
                    )
              }
              <a className='w-8 h-8 md:w-12 md:h-12' href={webLink}>
                <img alt='website' src={website}/>
              </a>
            </div>
          </div>
        </div>
    </article>
  )
}
