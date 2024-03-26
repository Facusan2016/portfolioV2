import video from '../assets/wave.mp4'
import Arrow from '../assets/Arrow.svg'
import FacundoImg from './assets/FacundoSanchez.jpg'

export const WelcomeView = () => {
  return (
    <section id='home' className="w-screen min-h-screen relative flex flex-col items-center justify-start gap-2 pt-24 md:pt-0 md:justify-center bg-light-bg_snd">
      <div className='w-3/4 gap-12 flex flex-col items-center justify-center relative z-20 md:flex-row md:justify-around'>
        <article className='flex items-center flex-col justify-center gap-2'>
          <h1 className="md:[font-size:_clamp(2rem,5vw,8rem)] text-5xl font-thin font-grozen text-light-pr tracking-wider">
              Facundo<br/>
              <span className="font-bold">Sánchez</span>
            </h1>
          <h2 className='font-neue font-normal text-light-snd uppercase'>Software Engineer</h2>
          <h3 className='font-neue text-xs uppercase font-light text-light-snd'>Welcome to my portfolio/2024</h3>
        </article>
        <img className='w-[25vw] min-w-[15rem] rounded-full' src={FacundoImg}/>
      </div>
      <video
        className="w-full absolute bottom-0 left-0 h-1/2 object-cover mt-auto"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4"/>
      </video>
      <img src={Arrow} className='w-10 h-10 absolute bottom-[12%] animate-bounce'/>
    </section>
  )
}
