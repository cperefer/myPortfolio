import { MotionDiv } from './shared/MotionDiv'

export const Footer = () => {
  return (
    <section>
      <div className="container pb-[100px]">
        <MotionDiv>
          <div className="w-[90vw] md:w-[60vw] text-center">
            <h3 className="text-2xl md:text-3xl pb-2 md:pb-5">¿Te convence lo que has visto?<br />Contacta conmigo!</h3>
            <p><a target="_blank" href='mailto:cmiguelperfer@gmail.com'>📩 Email</a> - <a target="_blank" href='https://www.linkedin.com/in/miguel-pérez-fernández-1571b6a6'>🏢 Linkedin</a> - <a target="_blank" href='https://github.com/cperefer'>🐈‍⬛ Github</a>

            </p>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
