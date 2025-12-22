import type React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Om Tita</h3>
            <h4 className="text-xl text-primary font-medium mb-6">Software Engineer</h4>

            <p className="mb-4 text-muted-foreground">
              I'm a passionate software engineer with experience in building web applications and solving complex problems.
              My journey in tech began with a Computer Science degree from The Maharaja Sayajirao University,
              and I've been exploring new technologies and frameworks ever since.
            </p>

            <p className="mb-6 text-muted-foreground">
              I specialize in full-stack development with expertise in Python, Django, React, and Node.js.
              I enjoy working in collaborative environments and am dedicated to writing clean, maintainable code
              that delivers exceptional user experiences.
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold">Name:</p>
                <p className="text-muted-foreground">Om Tita</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p className="text-muted-foreground">omtita.codes@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold">Location:</p>
                <p className="text-muted-foreground">Vadodara, Gujarat</p>
              </div>
              <div>
                <p className="font-semibold">Education:</p>
                <p className="text-muted-foreground">B.Tech Computer Science (CGPA: 8.85)</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                Let's work together
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center">
              <img src="assets/photo.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
