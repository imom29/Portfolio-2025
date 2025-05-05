import type React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Init AI",
      description: "An AI tool to generate ready-to-use project templates for any tech stack based on project requirement documents. Automated project initialization using Flask, GPT gpt-4o-mini model reducing setup time significantly.",
      technologies: ["Flask", "Streamlit", "Python", "GPT-4o-mini"],
      image: "https://same-assets.com/sample-images/ai_template_generator.png",
      demoLink: "https://init-ai.example.com",
      codeLink: "https://github.com/omtita/init-ai",
    },
    {
      id: 2,
      title: "MovieMilApp",
      description: "A movie discovery platform to find the latest movies, explore facts, and get personalized suggestions based on genre and cast. Implemented recommendation algorithms and an intuitive interface using ReactJs, TMDB API.",
      technologies: ["React.js", "TMDB API", "JavaScript", "CSS"],
      image: "https://same-assets.com/sample-images/movie_app.png",
      demoLink: "https://movie-mil-app.example.com",
      codeLink: "https://github.com/omtita/movie-mil-app",
    },
    {
      id: 3,
      title: "Sustainability Platform",
      description: "Developed and maintained key features of a sustainability platform using Django and React. Designed and implemented RESTful APIs to enable seamless frontend-backend integration.",
      technologies: ["Python", "Django", "React.js", "RESTful API"],
      image: "https://same-assets.com/sample-images/sustainability_platform.png",
      demoLink: "https://sustainability.example.com",
      codeLink: "https://github.com/omtita/sustainability-platform",
    },
    {
      id: 4,
      title: "Project Management Tool",
      description: "Led the backend development of a project management tool for efficient resource organization. Developed complex features, including approval flow, history tracking, resource sharing, and an interactive Gantt chart.",
      technologies: ["Node.js", "React.js", "Flask", "MongoDB"],
      image: "https://same-assets.com/sample-images/project_management.png",
      demoLink: "https://project-management.example.com",
      codeLink: "https://github.com/omtita/project-management",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one demonstrates different skills and technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-video w-full overflow-hidden bg-secondary/20">
                <div className="bg-secondary/40 w-full h-full flex items-center justify-center text-secondary-foreground/30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-20 h-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
