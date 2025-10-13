import { Project } from "../data/ExperienceData"

interface Props {
  project: Project;
}


export const ExperienceDetail = ({ project }: Props) => {
  return (
    <div className='pl-5 pb-2' key={project.name}>
      <p className="font-bold">{project.name}</p>
      <p>{project.description}</p>
      <p className="italic">{project.stack}</p>
    </div>
  )
}
