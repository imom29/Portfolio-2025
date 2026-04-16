import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollVelocity from "./components/ScrollVelocity";
import AnimatedGradient from "./components/AnimatedGradient";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Global animated gradient at 20% opacity (behind everything except Hero which has its own) */}
        <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
          <AnimatedGradient config={{ preset: "Aurora" }} noise={{ opacity: 0.1, scale: 1 }} />
        </div>
        <div className="relative z-10">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero />
          <div className="py-8 bg-background overflow-hidden">
            <ScrollVelocity
              text="SOFTWARE ENGINEER • FULL STACK DEVELOPER • PROBLEM SOLVER •"
              defaultVelocity={1}
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground/10 select-none"
            />
          </div>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Blogs />
          <Contact />
        </main>
        <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
