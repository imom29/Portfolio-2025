import React, { useState, useEffect, useRef } from "react";
import { useCursorGlow } from "../hooks/useCursorGlow";

const Skills: React.FC = () => {
  const [visibleBars, setVisibleBars] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('');
  // const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    {
      id: "languages",
      category: "Languages",
      icon: "💻",
      color: "from-primary/70 via-primary to-primary/80",
      bgGradient: "from-primary/5 to-primary/10",
      technologies: [
        { name: "Python", level: 90, icon: "🐍" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "JavaScript", level: 85, icon: "⚡" },
        { name: "HTML/CSS", level: 80, icon: "🎨" },
        { name: "C++", level: 75, icon: "⚙️" },
        { name: "SQL", level: 80, icon: "🗃️" },
      ],
    },
    {
      id: "frameworks",
      category: "Frameworks & Libraries",
      icon: "🔧",
      color: "from-primary/70 via-primary to-primary/80",
      bgGradient: "from-secondary/5 to-secondary/10",
      technologies: [
        { name: "Django", level: 90, icon: "🎯" },
        { name: "React.js", level: 85, icon: "⚛️" },
        { name: "Express.js", level: 80, icon: "🚀" },
        { name: "FastAPI", level: 75, icon: "⚡" },
        { name: "Flask", level: 85, icon: "🌶️" },
      ],
    },
    {
      id: "tools",
      category: "Tools & Platforms",
      icon: "🛠️",
      color: "from-primary/70 via-primary to-primary/80",
      bgGradient: "from-accent/5 to-accent/10",
      technologies: [
        { name: "Git/GitHub", level: 85, icon: "🐙" },
        { name: "PostgreSQL", level: 80, icon: "🐘" },
        { name: "RESTful APIs", level: 90, icon: "🌐" },
        { name: "Scrum/Agile", level: 85, icon: "🔄" },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate bars with staggered delay
            skills.forEach((category, categoryIndex) => {
              category.technologies.forEach((tech, techIndex) => {
                setTimeout(() => {
                  setVisibleBars(prev => [...prev, `${category.id}-${tech.name}`]);
                }, (categoryIndex * 200) + (techIndex * 100));
              });
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCategoryHover = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleCategoryLeave = () => {
    setActiveCategory('');
  };

  const { sectionRef, CursorGlow } = useCursorGlow({
    glowColor: 'bg-primary/30',
    glowSize: 20,
    centerSize: 4,
    blendMode: 'difference'
  });

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-background relative overflow-hidden">
      <CursorGlow />
      {/* Subtle background elements using theme colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header using theme colors */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are the technologies I use frequently and my proficiency level with each one.
            <span className="block mt-2 text-sm opacity-75">✨ Hover over categories to see them highlighted!</span>
          </p>
        </div>

        {/* Skills grid using theme system */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {skills.map((skillCategory, categoryIndex) => (
            <div
              key={skillCategory.id}
              className={`group relative bg-card backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-border 
                hover:shadow-md hover:scale-[1.02] transition-all duration-500 cursor-pointer
                ${activeCategory === skillCategory.id ? 'ring-1 ring-ring shadow-lg' : ''}
                animate-fade-in-up`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
              onMouseEnter={() => handleCategoryHover(skillCategory.id)}
              onMouseLeave={handleCategoryLeave}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${skillCategory.bgGradient} 
                    group-hover:scale-105 transition-all duration-300 shadow-sm border border-border`}>
                    {skillCategory.icon}
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {skillCategory.category}
                  </h3>
                </div>

                {/* Skills with theme colors */}
                <div className="space-y-6">
                  {skillCategory.technologies.map((tech, techIndex) => {
                    const barId = `${skillCategory.id}-${tech.name}`;
                    const isVisible = visibleBars.includes(barId);
                    
                    return (
                      <div 
                        key={barId}
                        className="group/skill hover:bg-accent/10 rounded-lg p-3 -m-3 transition-all duration-300"
                      >
                        {/* Skill header with icon */}
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center gap-3">
                            <span className="text-lg group-hover/skill:scale-110 transition-all duration-300">
                              {tech.icon}
                            </span>
                            <span className="font-medium text-card-foreground group-hover/skill:text-primary transition-colors duration-300">
                              {tech.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`text-sm font-bold text-muted-foreground transition-all duration-500 ${
                              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                            }`}>
                              {tech.level}%
                            </span>
                            {/* Skill level indicator dots */}
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                    tech.level >= (i + 1) * 20 
                                      ? `bg-gradient-to-r ${skillCategory.color}` 
                                      : 'bg-muted'
                                  }`}
                                  style={{ animationDelay: `${techIndex * 100 + i * 50}ms` }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Animated progress bar */}
                        <div className="relative">
                          <div className="h-3 bg-secondary/30 rounded-full overflow-hidden backdrop-blur-sm">
                            <div
                              className={`h-full bg-gradient-to-r ${skillCategory.color} rounded-full relative
                                transition-all duration-1000 ease-out shadow-sm ${
                                isVisible ? '' : 'w-0'
                              }`}
                              style={{ 
                                width: isVisible ? `${tech.level}%` : '0%',
                                transitionDelay: `${techIndex * 100}ms`
                              }}
                            >
                              {/* Subtle shine effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent 
                                translate-x-[-100%] group-hover/skill:translate-x-[100%] transition-transform duration-1000" />
                            </div>
                          </div>
                          
                          {/* Floating percentage indicator */}
                          <div 
                            className={`absolute top-0 h-3 flex items-center transition-all duration-1000 ${
                              isVisible ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{ 
                              left: isVisible ? `${Math.max(tech.level - 8, 0)}%` : '0%',
                              transitionDelay: `${techIndex * 100 + 300}ms`
                            }}
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${skillCategory.color} rounded-full shadow-sm`} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive footer stats using theme colors */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-card backdrop-blur-sm rounded-2xl border border-border shadow-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">85%</div>
              <div className="text-sm text-muted-foreground">Avg Proficiency</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Skills;