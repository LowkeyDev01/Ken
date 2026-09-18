import Navbar from "./components/navbar.jsx";
import Hero from "./pages/HeroSection.jsx";

export default function App(){
  return(
    <div className="relative w-full">
      <Navbar />
      <Hero />
    </div>
  )
}