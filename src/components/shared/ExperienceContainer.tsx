import { useState } from "react"
import { Experience, Project } from "../data/ExperienceData"
import { MotionDiv } from "./MotionDiv"
import { ExperienceDetail } from "./ProjectDetail"

interface Props {
  experience: Experience
}

export const ExperienceContainer = ({ experience }: Props) => {
  const [areProjectShown, setAreProjectShown] = useState(false);

  return (
    <>
      <MotionDiv>
        <div className="cursor-pointer pt-5 inline-block" onClick={() => setAreProjectShown(!areProjectShown)}>
          <h4>{experience.company}</h4>
          <div className="pl-2">
            <p className="monoBold">{experience.position}</p>
            <h4>{experience.time}</h4>
          </div>
          {areProjectShown &&
            <div>
              {
                experience.projects.map((project: Project) => (
                  <ExperienceDetail key={project.name} project={project} />
                ))
              }
            </div>
          }
        </div>
      </MotionDiv>
    </>
  )
}
