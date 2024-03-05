import React from 'react'
import github from './assets/Github.svg'
import website from './assets/Website.svg'

export const Project = ({
  title,
  description,
  webLink,
  repoLink,
  img

}) => {
  return (
    <article
      style={
        {
          backgroundImage: `url(${img})`
        }
      }
      className={
      `w-full max-h-50 relative
      flex flex-1 outline outline-light-pr outline-1
      outline-x-transparent rounded-xl
      bg-cover overflow-hidden`}
      >
        <div className='w-full h-full absolute top-0 -left-0 hover:-translate-y-full transition-all ease-in-out'>
          <div className='w-full min-h-full relative top-0 left-0 p-4 bg-black bg-opacity-50'>
            <h2 className='font-grozen text-xl font-bold text-light-snd'>
              {title}
            </h2>
          </div>
          <div className='w-full h-full p-4 flex flex-col items-center justify-around bg-black bg-opacity-50'>
            <p className='font-neue text-center text-sm font-light text-light-snd'>
              {description}
            </p>
            <div className='flex gap-4 w-full items-center justify-center'>
              <a className='w-8 h-8' href={repoLink}>
                <img src={github}/>
              </a>
              <a className='w-8 h-8' href={webLink}>
                <img src={website}/>
              </a>
            </div>
          </div>
        </div>
    </article>
  )
}