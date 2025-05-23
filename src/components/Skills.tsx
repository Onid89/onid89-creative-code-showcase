
import React from "react";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/context/LanguageContext";

// Tech stack icons and logos
const technologies = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "frontend" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "frontend" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "frontend" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "frontend" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "frontend" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", category: "frontend" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "backend" },
  { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg", category: "frontend" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg", category: "frontend" },
  { name: "csharp", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", category: "backend" }
];

// Transferable skills from artistic careerS
const transferableSkills = [
  { name: 'skills.creativity', description: 'skills.creativity.desc', color: 'white' },
  { name: 'skills.discipline', description: 'skills.discipline.desc', color: 'white' },
  { name: 'skills.attention', description: 'skills.attention.desc', color: 'white' },
  { name: 'skills.teamwork', description: 'skills.teamwork.desc', color: 'white' },
  { name: 'skills.problem', description: 'skills.problem.desc', color: 'white' },
  { name: 'skills.time', description: 'skills.time.desc', color: 'white' },
];

export default function Skills() {
  const { t } = useLanguage();
  
  return (
    <section id="skills" className="bg-secondary/20 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gradient text-center">
            {t('skills.title')}
          </h2>
          <Separator className="w-16 sm:w-20 bg-accent h-1 rounded-full" />
          <p className="text-muted-foreground mt-4 text-center max-w-2xl text-sm sm:text-base">
            {t('skills.subtitle')}
          </p>
        </div>
        
        {/* Technologies grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-3 sm:p-4 rounded-lg bg-gray-200 dark:bg-black text-black dark:text-white hover:scale-105 transition-transform"
            >
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-2 sm:mb-3"
                style={{ filter: tech.name === "Next.js" ? "invert(1)" : "none" }}
              />
              <span className="text-xs sm:text-sm font-medium text-center leading-tight">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Transferable skills */}
        <div className="glass border border-accent/20 rounded-lg p-4 sm:p-6 hover:italian-border transition-all">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center text-accent">
            {t('skills.transferable')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {transferableSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-white text-base sm:text-lg lg:text-xl font-bold mb-2">
                  {t(skill.name)}
                </div>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {t(skill.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
