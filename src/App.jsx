import About from "./componets/About"
import BlurBackground from "./componets/BlurBackground"
import Hero from "./componets/Hero"
import Me from "./componets/Me"
import Navbar from "./componets/Navbar"
import Projects from "./componets/Projects"


const App = () => {
  return (
    <>
    <BlurBackground/>
    <Navbar/>
    <main className="antiliased overflow-x-hidden max-w-7xl mx-auto relative z-10">
      <Navbar/>
      <Hero/>
      <Projects/>
      <About/>
      <Me/>
    </main>
    </>
  )
} 

export default App
