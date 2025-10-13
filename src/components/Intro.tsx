import { MotionDiv } from "./shared/MotionDiv";

export const Intro = () => {
  const yearsOfExperience: number = new Date().getFullYear() - 2018;

  return (
    <section className="items-center">
      <div className="container">
        <MotionDiv>
          <div className="w-[90vw] md:w-[70vw]">
            <h1 className="text-2xl md:text-3xl md:pb-2">Miguel Pérez</h1>
            <h2 className="text-4xl md:text-6xl/[4rem] text-[#3827F5]">Frontend<br /><span className="text-[#E4F527] pl-5">Developer</span></h2>
            <p className="text-lg md:text-xl pt-3">Hola, soy Miguel! Desarrollador Frontend con más de {yearsOfExperience} años de experiencia creando aplicaciones web modernas en proyectos de gran escala</p>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
