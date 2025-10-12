import { motion } from "motion/react"

export const Intro = () => {
  const yearsOfExperience: number = new Date().getFullYear() - 2018;

  return (
    <section className="flex items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.2 }}
        style={{
          height: "200px",
          margin: "100vh 0",
        }}
      >
        <div className="w-[70vw]">
          <h1 className="text-2xl md:text-3xl md:pb-2">Miguel Pérez</h1>
          <h2 className="text-4xl md:text-6xl/[4rem] text-[#3827F5]">Frontend<br /><span className="text-[#E4F527] pl-5">Developer</span></h2>
          <p className="text-lg md:text-xl pt-3">Hola, soy Miguel! Desarrollador Frontend con más de {yearsOfExperience} años de experiencia creando aplicaciones web modernas en proyectos de gran escala</p>
        </div>
      </motion.div>
    </section>
  )
}
