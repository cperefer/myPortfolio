import { ProjectsDelivered } from "./data/ProjectsDelivered";
import { MotionDiv } from "./shared/MotionDiv";
import { PortfolioProject } from "./shared/PortfolioProject";

export const Portfolio = () => {
  return (
    <section>
      <div className="container pb-[100px] md:pb-[200px]">
        <MotionDiv>
          <div className="w-[90vw]">
            <h3 className="text-2xl md:text-3xl md:pb-5">
              Proyectos destacados
            </h3>
            <div className="flex row justify-between items-start">
              {ProjectsDelivered.map((project) => (
                <PortfolioProject
                  key={project.name}
                  projectDelivered={project}
                />
              ))}
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};
