import { ProjectDelivered } from "../data/ProjectsDelivered"
import { Lineicons } from "@lineiconshq/react-lineicons";
import {
  LocationArrowRightSolid,
} from "@lineiconshq/free-icons";

interface Props {
  projectDelivered: ProjectDelivered
}

export const PortfolioProject = ({ projectDelivered }: Props) => {
  return (
    <div className="flex align-middle items-center gap-2">
      <div>
        <p className="text-lg md:text-xl font-bold">{projectDelivered.name}</p>
        <p>Construido con: {projectDelivered.stacks.join(' - ')}</p>
      </div>
      <div>
        <p><a href={projectDelivered.url} target="_blank"><Lineicons icon={LocationArrowRightSolid} size={50} color="white" /></a></p>
      </div>
    </div>
  )
}
