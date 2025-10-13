import { ExperienceContainer } from "./shared/ExperienceContainer";
import { madison, maspc, ntt } from "./data/ExperienceData";

export const Experience = () => {
  return (
    <section className="!items-start text-lg md:text-xl">
      <div className="container pb-[100px] md:pb-[200px]">
        <div className="w-[90vw] md:w-[70vw]">
          <h3 className="text-2xl md:text-3xl">Experiencia</h3>
          <ExperienceContainer experience={ntt} />
          <ExperienceContainer experience={madison} />
          <ExperienceContainer experience={maspc} />
        </div>
      </div>
    </section>
  )
}
