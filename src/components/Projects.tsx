import type React from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Init AI",
      description: "An AI tool to generate ready-to-use project templates for any tech stack based on project requirement documents. Automated project initialization using Flask, GPT gpt-4o-mini model reducing setup time significantly.",
      technologies: ["Flask", "Streamlit", "Python", "GPT-4o-mini"],
      features: [
        "AI-powered project template generation",
        "Customizable tech stack selection",
        "Automated dependency management",
        "Real-time project setup"
      ]
    },
    {
      id: 2,
      title: "Code Collab",
      description: "A collaborative code editor with real-time syncing, multi-user cursors, AI chat assistance, and multi-file support—perfect for pair programming or interviews.",
      technologies: ["React.js", "TypeScript", "Socket.io", "Node.js"],
      features: [
        "Real-time code collaboration",
        "Multi-user cursor tracking",
        "AI-powered code assistance",
        "Multi-file support"
      ],
    },
    {
      id: 3,
      title: "Sustainability Platform",
      description: "Developed and maintained key features of a sustainability platform using Django and React. Designed and implemented RESTful APIs to enable seamless frontend-backend integration.",
      technologies: ["Django", "React.js", "Python", "RESTful API"],
      features: [
        "Sustainable resource tracking",
        "Real-time data analytics",
        "Custom reporting tools",
        "API-first architecture"
      ]
    },
    {
      id: 4,
      title: "Project Management Tool",
      description: "Led the backend development of a project management tool for efficient resource organization. Developed complex features, including approval flow, history tracking, resource sharing, and an interactive Gantt chart.",
      technologies: ["Node.js", "React.js", "Flask", "MongoDB"],
      features: [
        "Interactive Gantt charts",
        "Resource allocation tracking",
        "Approval workflow system",
        "Comprehensive history logging"
      ]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background via-background to-muted/20 dark:to-background">
      <div className="container mx-auto px-4 md:px-8 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
            Recent work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Projects with measurable impact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A mix of AI tooling, collaboration platforms, and enterprise-grade systems. Each shipped with clear outcomes and production-quality polish.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm shadow-[0_20px_60px_-24px_rgba(0,0,0,0.45)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent" />
              </div>

              <div className="relative p-6 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold leading-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <span className="inline-flex h-9 items-center rounded-full border border-border px-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground bg-background/70">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>

                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wide text-primary/80 font-semibold">Highlights</p>
                  <div className="grid grid-cols-1 gap-2">
                    {project.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 + i * 0.06 }}
                        className="flex items-start gap-2 rounded-lg border border-border/60 bg-background/70 px-3 py-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-0.5 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.6}
                            className="w-4 h-4"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/5 text-primary border border-primary/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.demoLink || project.codeLink) && (
                  <div className="flex flex-wrap gap-3 pt-1">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-lg hover:bg-primary/90"
                      >
                        <span>Live demo</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </a>
                    )}
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                      >
                        <span>View code</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;