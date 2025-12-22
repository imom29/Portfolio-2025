import React from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiAmazon,
  SiBootstrap,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFlask,
  SiFramer,
  SiGit,
  SiGithubactions,
  SiGreensock,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

interface Category {
  id: string;
  name: string;
  icon: string;
  items: { name: string; Icon: IconType }[];
}

const Skills: React.FC = () => {
  const categories: Category[] = [
    {
      id: "languages",
      name: "Frontend",
      icon: "🎨",
      items: [
        { name: "JavaScript", Icon: SiJavascript },
        { name: "TypeScript", Icon: SiTypescript },
        { name: "React", Icon: SiReact },
        { name: "Next.js", Icon: SiNextdotjs },
        { name: "Redux", Icon: SiRedux },
        { name: "Tailwind CSS", Icon: SiTailwindcss },
        { name: "GSAP", Icon: SiGreensock },
        { name: "Framer Motion", Icon: SiFramer },
        { name: "Figma", Icon: SiFigma },
        { name: "Sass", Icon: SiSass },
        { name: "Bootstrap", Icon: SiBootstrap },
      ],
    },
    {
      id: "frameworks",
      name: "Backend",
      icon: "🛠️",
      items: [
        { name: "Node.js", Icon: SiNodedotjs },
        { name: "NestJS", Icon: SiNestjs },
        { name: "Express.js", Icon: SiExpress },
        { name: "Django", Icon: SiDjango },
        { name: "FastAPI", Icon: SiFastapi },
        { name: "Flask", Icon: SiFlask },
      ],
    },
    {
      id: "tools",
      name: "Database",
      icon: "🗄️",
      items: [
        { name: "PostgreSQL", Icon: SiPostgresql },
        { name: "MySQL", Icon: SiMysql },
        { name: "MongoDB", Icon: SiMongodb },
        { name: "Prisma", Icon: SiPrisma },
      ],
    },
    {
      id: "infra",
      name: "Tools",
      icon: "⚙️",
      items: [
        { name: "Git", Icon: SiGit },
        { name: "Docker", Icon: SiDocker },
        { name: "AWS", Icon: SiAmazon },
        { name: "CI/CD", Icon: SiGithubactions },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-background to-muted/10" id="skills">
      <div className="container mx-auto px-4 md:px-8 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-2"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-3 py-1 text-xs font-semibold text-muted-foreground">
            <span className="text-sm">✺</span>
            My stack
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Tools I build with daily</h2>
          <p className="text-muted-foreground max-w-2xl">
            Frontend polish, backend APIs, data stores, and delivery tooling—organized by where they fit.
          </p>
        </motion.div>

        <div className="space-y-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="grid grid-cols-1 lg:grid-cols-[220px,1fr] gap-6 lg:items-start"
            >
              <div className="text-3xl font-black uppercase tracking-tight text-foreground lg:text-right">
                {category.name}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 rounded-xl border border-border/70 bg-card/80 px-4 py-3 text-sm font-semibold text-foreground hover:border-primary/40 transition"
                  >
                    <span className="h-7 w-7 flex items-center justify-center rounded-md bg-background/80 border border-border/60 text-primary">
                      <item.Icon className="h-5 w-5" />
                    </span>
                    {item.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;