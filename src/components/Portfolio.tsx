import { ProjectsDelivered } from "./data/ProjectsDelivered"
import { MotionDiv } from "./shared/MotionDiv"
import { PortfolioProject } from "./shared/PortfolioProject"

export const Portfolio = () => {
  return (
    <section>
      <div className="container pb-[100px] md:pb-[200px]">
        <MotionDiv>
          <div className="w-[90vw] md:w-[60vw]">
            <h3 className="text-2xl md:text-3xl md:pb-5">Portfolio</h3>
            {
              ProjectsDelivered.map((project) => (
                <PortfolioProject key={project.name} projectDelivered={project} />
              ))
            }

          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
