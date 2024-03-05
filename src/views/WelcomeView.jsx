import video from '/assets/wave.mp4'
import Arrow from '/assets/Arrow.svg'

export const WelcomeView = () => {
  return (
    <section className="w-svh h-svh flex flex-col items-center justify-start gap-2 pt-40 bg-light-bg_snd">
      <h1 className="text-5xl font-thin font-grozen text-light-pr tracking-wider">
          Facundo<br/>
          <span className="font-bold">Sánchez</span>
        </h1>
      <h2 className='font-neue font-normal text-light-snd uppercase'>Software Engineer</h2>
      <h3 className='font-neue text-xs uppercase font-light text-light-snd'>Welcome to my portfolio/2024</h3>
      <video
        className="w-full h-1/2 object-cover mt-auto"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4"/>
      </video>
      <img src={Arrow} className='w-10 h-10 absolute bottom-[18%] animate-bounce'/>
    </section>
  )
}
