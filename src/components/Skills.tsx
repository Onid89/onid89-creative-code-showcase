
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
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", category: "frontend" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "backend" },
];

// Transferable skills from artistic career
const transferableSkills = [
  { name: 'skills.creativity', description: 'skills.creativity.desc', color: 'primary' },
  { name: 'skills.discipline', description: 'skills.discipline.desc', color: 'accent' },
  { name: 'skills.attention', description: 'skills.attention.desc', color: 'white' },
  { name: 'skills.teamwork', description: 'skills.teamwork.desc', color: 'primary' },
  { name: 'skills.problem', description: 'skills.problem.desc', color: 'accent' },
  { name: 'skills.time', description: 'skills.time.desc', color: 'white' },
];

export default function Skills() {
  const { t } = useLanguage();
  
  return (
    <section id="skills" className="bg-secondary/20 section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">{t('skills.title')}</h2>
          <Separator className="w-20 bg-accent h-1 rounded-full" />
          <p className="text-muted-foreground mt-4 text-center max-w-2xl">
            {t('skills.subtitle')}
          </p>
        </div>
        
        {/* Technologies grid - similar to the reference image */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-4 rounded-lg bg-black text-white hover:scale-105 transition-transform"
            >
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="w-12 h-12 mb-3"
                style={{ filter: tech.name === "Next.js" ? "invert(1)" : "none" }}
              />
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Transferable skills from artistic career */}
        <div className="mt-12 glass border border-accent/20 rounded-lg p-6 hover:italian-border transition-all">
          <h3 className="text-xl font-semibold mb-4 text-center text-accent">{t('skills.transferable')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {transferableSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`text-${skill.color} text-xl font-bold mb-2`}>{t(skill.name)}</div>
                <p className="text-muted-foreground">
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
