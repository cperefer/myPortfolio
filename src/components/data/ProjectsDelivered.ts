export interface ProjectDelivered {
  name: string;
  stacks: string[];
  url: string;
}

export const ProjectsDelivered: ProjectDelivered[] = [
  {
    name: "Valladolid Penguins",
    url: "https://valladolidpenguins.vercel.app",
    stacks: ["NextJS", "Tailwind CSS"],
  },
  {
    name: 'SaaS Gestión deportiva "BoxUp"',
    url: "https://box-up-frontend.vercel.app/login?reference=portfolio",
    stacks: ["ReactJS", "Typescript", "Tailwind CSS"],
  },
];
