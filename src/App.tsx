import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
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
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="w-full text-center py-2 px-4 text-sm font-medium border-b border-yellow-300 bg-yellow-100 text-yellow-900 dark:bg-yellow-800 dark:text-yellow-100 dark:border-yellow-600">
      🚧 This site is a work in progress. Thanks for your patience!
    </div>

        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
