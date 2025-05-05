import type React from "react";

const Experience: React.FC = () => {
  const experiences = [
    {
      id: "jeavio-fulltime",
      company: "Jeavio",
      position: "Software Engineer",
      tech: "Python, Django, ReactJs",
      location: "Vadodara, Gujarat",
      period: "May 2023 – Current",
      responsibilities: [
        "Developed and maintained key features of a sustainability platform using Django and React.",
        "Designed and implemented RESTful APIs to enable seamless frontend-backend integration.",
        "Served as Scrum Master for multiple sprints, ensuring sprint goals and deliverables were met on time without impacting personal development tasks, earning team appreciation for effective coordination.",
        "Optimized database queries, improving application performance."
      ]
    },
    {
      id: "jeavio-intern",
      company: "Jeavio",
      position: "Software Engineer Intern",
      tech: "NodeJs, ReactJs, Flask",
      location: "Vadodara, Gujarat",
      period: "December 2022 – May 2023",
      responsibilities: [
        "Led the backend development of a project management tool for efficient resource organization, using Node.js and React.js.",
        "Developed complex features, including approval flow, history tracking, resource sharing, and an interactive Gantt chart for comprehensive data visualization.",
        "Collaborated with stakeholders to align deliverables with requirements, receiving positive feedback for high-quality implementations."
      ]
    },
    {
      id: "iraitech-intern",
      company: "Iraitech",
      position: "Software Engineer Intern",
      tech: "NodeJs, ReactJs",
      location: "Delhi, India [Remote]",
      period: "May 2022 – September 2022",
      responsibilities: [
        "Developed an intuitive platform for browsing, recommending, and purchasing books, making it easy for users to find their next read.",
        "Utilized React.js for a dynamic user interface, Node.js for backend services, and MongoDB as a NoSQL database to ensure scalability."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Work Experience</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          My professional journey as a software engineer, working with various technologies and teams
        </p>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-6 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary/70 to-primary/30" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative group">
                {/* Timeline dot with pulsing effect */}
                <div className="absolute left-0 md:left-6 top-0 transform -translate-x-1/2 z-10">
                  <div className="w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg" />
                  <div className="w-5 h-5 rounded-full bg-primary/50 absolute top-0 left-0 animate-ping" style={{ animationDuration: '3s' }} />
                </div>

                {/* Content card - full width with left padding */}
                <div className="ml-6 md:ml-14 dark:border-primary border rounded">
                  <div className="bg-card border border-border/40 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative light:group-hover:translate-y-[-2px]">
                    {/* Top header with company and period */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 justify-between">
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <span className="bg-primary/10 text-primary py-1 px-3 rounded-full text-sm font-medium inline-block">
                        {exp.period}
                      </span>
                    </div>

                    {/* Position & Location */}
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-primary">{exp.position}</h4>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {exp.tech.split(', ').map((tech) => (
                        <span
                          key={`${exp.id}-${tech}`}
                          className="bg-secondary text-secondary-foreground text-xs py-1 px-2 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-3">
                      {exp.responsibilities.map((resp) => (
                        <div key={`${exp.id}-${resp.substring(0, 15)}`} className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                          <p className="text-sm text-muted-foreground leading-tight">{resp}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
