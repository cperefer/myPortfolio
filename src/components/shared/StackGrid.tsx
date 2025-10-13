import { TechStack } from "./TechStacks";

interface Props {
  stack: string;
  technologies: TechStack[]
}

export const StackGrid = ({ stack, technologies }: Props) => {
  return (
    <>
      <div className="col-span-12 md:col-span-5 flex items-center pt-5">
        <p className="text-lg font-semibold uppercase tracking-wider w-full text-center md:text-left">{stack}</p>
      </div>
      <div className="col-span-12 md:col-span-7">
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 transition-all"
        >
          {technologies.map(({ name, img }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center text-center"
            >
              <img src={img} alt={name} className="w-12 h-12 object-contain mb-2" />
              <p className="text-sm font-medium">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
