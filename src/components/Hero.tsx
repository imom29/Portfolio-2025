import type React from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiDjango,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiGit,
} from "react-icons/si";

const Hero: React.FC = () => {
  const techIcons = [
    { Icon: SiPython, delay: 0, x: "20%", y: "10%" },
    { Icon: SiDjango, delay: 0.2, x: "60%", y: "15%" },
    { Icon: SiReact, delay: 0.4, x: "35%", y: "40%" },
    { Icon: SiJavascript, delay: 0.6, x: "70%", y: "35%" },
    { Icon: SiTypescript, delay: 0.8, x: "25%", y: "60%" },
    { Icon: SiNodedotjs, delay: 1, x: "55%", y: "65%" },
    { Icon: SiPostgresql, delay: 1.2, x: "75%", y: "70%" },
    { Icon: SiDocker, delay: 1.4, x: "15%", y: "80%" },
    { Icon: SiGit, delay: 1.6, x: "45%", y: "85%" },
  ];

  // Generate particles for background animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  // Generate geometric shapes
  const shapes = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 60 + 40,
    duration: Math.random() * 25 + 20,
    delay: Math.random() * 3,
    rotation: Math.random() * 360,
  }));

  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "linear-gradient(45deg, hsl(var(--primary)/0.05), hsl(var(--secondary)/0.15))",
            "linear-gradient(90deg, hsl(var(--secondary)/0.08), hsl(var(--primary)/0.12))",
            "linear-gradient(135deg, hsl(var(--primary)/0.06), hsl(var(--secondary)/0.18))",
            "linear-gradient(45deg, hsl(var(--primary)/0.05), hsl(var(--secondary)/0.15))",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Geometric Shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute border border-primary/10 rounded-full"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            rotate: `${shape.rotation}deg`,
          }}
          animate={{
            rotate: [shape.rotation, shape.rotation + 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "linear",
          }}
        />
      ))}

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

          {/* Floating Tech Icons */}
          <div className="hidden lg:block relative h-[500px] w-full">
            {techIcons.map(({ Icon, delay, x, y }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: [0, -15, 0],
                  x: [0, 8, 0],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{
                  opacity: { delay, duration: 0.6 },
                  scale: { delay, duration: 0.6, type: "spring" },
                  y: { 
                    duration: 2.5 + index * 0.3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: delay + 0.8
                  },
                  x: { 
                    duration: 3 + index * 0.4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: delay + 1
                  },
                  rotate: { 
                    duration: 4 + index * 0.2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: delay + 1.2
                  }
                }}
                style={{
                  position: "absolute",
                  left: x,
                  top: y,
                }}
                className="group cursor-pointer"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-white/20 to-white/5 dark:from-white/10 dark:to-white/5 backdrop-blur-md border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:from-white/30 hover:to-white/10">
                  <Icon className="w-10 h-10 text-slate-700 dark:text-slate-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
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
