import { ProjectsDelivered } from "./data/ProjectsDelivered";
import { MotionDiv } from "./shared/MotionDiv";
import { PortfolioProject } from "./shared/PortfolioProject";

export const Portfolio = () => {
  return (
    <section>
      <div className="container pb-[100px] w-4/5 md:pb-[200px]">
        <MotionDiv>
          <div className="">
            <h3 className="text-2xl md:text-3xl md:pb-5">
              Proyectos destacados
            </h3>
            <div className="flex flex-col md:flex-row justify-around md:justify-between items-center md:items-start gap-5">
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
