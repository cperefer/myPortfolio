import { StackGrid } from "./shared/StackGrid"
import { MotionDiv } from "./shared/MotionDiv"
import { frontend, backend, database, tools } from "./shared/TechStacks"

export const Stack = () => {
  return (
    <section>
      <MotionDiv>
        <div className="w-[90vw] md:w-[70vw]">
          <h3 className="text-2xl md:text-3xl md:pb-5">Conocimientos</h3>
          <div className="content grid grid-cols-12">
            <StackGrid stack={'FRONTEND'} technologies={frontend} />
            <StackGrid stack={'BACKEND'} technologies={backend} />
            <StackGrid stack={'DATABASE'} technologies={database} />
            <StackGrid stack={'HERRAMIENTAS'} technologies={tools} />
          </div>
        </div>
      </MotionDiv>
    </section>
  )
}
