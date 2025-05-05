import type React from "react";

const Skills: React.FC = () => {
  const skills = [
    {
      id: "languages",
      category: "Languages",
      technologies: [
        { name: "Python", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 80 },
        { name: "C++", level: 75 },
        { name: "SQL", level: 80 },
      ],
    },
    {
      id: "frameworks",
      category: "Frameworks & Libraries",
      technologies: [
        { name: "Django", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "FastAPI", level: 75 },
        { name: "Flask", level: 85 },
      ],
    },
    {
      id: "tools",
      category: "Tools & Platforms",
      technologies: [
        { name: "Git/GitHub", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "RESTful APIs", level: 90 },
        { name: "Scrum/Agile", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Skills & Technologies</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are the technologies I use frequently and my proficiency level with each one.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillCategory) => (
            <div
              key={skillCategory.id}
              className="bg-card rounded-xl p-6 shadow-sm border border-border"
            >
              <h3 className="text-xl font-bold mb-6">{skillCategory.category}</h3>

              <div className="space-y-6">
                {skillCategory.technologies.map((tech) => (
                  <div key={`${skillCategory.id}-${tech.name}`}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{tech.name}</span>
                      <span className="text-muted-foreground">{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
