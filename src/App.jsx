import Navbar from "./components/navbar.jsx";
import About from "./pages/AboutSection.jsx";
import Contact from "./pages/ContactSection.jsx";
import Hero from "./pages/HeroSection.jsx";
import Projects from "./pages/ProjectSection.jsx";

export default function App(){
  return(
    <div className="relative w-full">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}