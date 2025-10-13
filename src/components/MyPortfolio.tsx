import { useEffect } from "react"
import { Experience } from "./Experience"
import { Footer } from "./Footer"
import { Intro } from "./Intro"
import { Portfolio } from "./Portfolio"
import { Stack } from "./Stack"
import { AnimatedBackground } from 'animated-backgrounds';

export const MyPortfolio = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "transparent";
    document.documentElement.style.backgroundColor = "transparent";
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Fondo animado fijo que cubre toda la pantalla */}
      <div
        className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none"
        style={{
          backgroundColor: "transparent",
        }}
      >
        <AnimatedBackground
          animationName="neuralNetwork"
          theme="portfolio"
          fps={60}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            opacity: 1,
          }}
        />
      </div>

      {/* Contenido */}
      <main className="relative z-10">
        <Intro />
        <Stack />
        <Experience />
        <Portfolio />
        <Footer />
      </main>
    </div>
  );
}
