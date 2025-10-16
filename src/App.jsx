import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import Navbar from "./components/ui/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import LeetCode from "./sections/LeetCode";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer"; // UPDATE 1: Import the Footer

function App() {
  return (
    // UPDATE 2: Wrap the entire app in a relative container
    <div className="relative z-0 bg-slate-900 text-white min-h-screen">
      {/* Hero and Navbar remain separate for their unique background */}
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      {/* All other sections are now siblings of the Stars canvas */}
      <About />
      <Skills />
      <Projects />
      <LeetCode />
      <Achievements />
      <Contact />
      <Footer /> {/* UPDATE 3: Add the Footer component */}
      {/* UPDATE 4: Move the Canvas here to act as a background for all sections */}
      <div className="absolute inset-0 z-[-1]">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
