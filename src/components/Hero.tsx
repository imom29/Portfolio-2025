import type React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/20 dark:from-primary/10 dark:to-secondary/30 z-0"
      />

      <div className="container mx-auto px-4 md:px-8 relative z-1">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="block">Hello, I'm</span>
            <span className="block text-primary">Om Tita</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8">
            Software Engineer specializing in Full-Stack Development
          </h2>

          <p className="text-lg mb-8 max-w-2xl">
            I build robust applications with modern technologies including Python, Django, React,
            and more. Passionate about creating efficient solutions that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-colors"
            >
              View Projects
            </a>
            <a
              href="/assets/om-tita-resume.pdf"
              download="Om_Tita_Resume.pdf"
              className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tl from-primary/30 to-transparent rounded-full filter blur-3xl"
      />
    </section>
  );
};

export default Hero;
