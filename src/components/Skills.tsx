
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const skillCategories = [
  {
    name: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "RESTful API", "API Integration"]
  },
  {
    name: "Tools & Others",
    skills: ["Git/GitHub", "VSCode", "Figma", "Linux", "Bootstrap", "Sass"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="bg-secondary/20 section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">Skills & Technologies</h2>
          <Separator className="w-20 bg-accent h-1 rounded-full" />
          <p className="text-muted-foreground mt-4 text-center max-w-2xl">
            Technologies and tools I've worked with in my journey as a developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass border border-accent/20 rounded-lg p-6 hover:italian-border transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-accent">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge 
                    key={i}
                    className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/30 px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass border border-accent/20 rounded-lg p-6 hover:italian-border transition-all">
          <h3 className="text-xl font-semibold mb-4 text-center text-accent">Transferable Skills from Artistic Career</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col items-center text-center">
              <div className="text-primary text-xl font-bold mb-2">Creativity</div>
              <p className="text-muted-foreground">
                Bringing innovative solutions to technical problems through creative thinking.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-accent text-xl font-bold mb-2">Discipline</div>
              <p className="text-muted-foreground">
                Maintaining focus and consistency in learning and applying new skills.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-white text-xl font-bold mb-2">Attention to Detail</div>
              <p className="text-muted-foreground">
                Ensuring precision in code and design implementation.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-primary text-xl font-bold mb-2">Teamwork</div>
              <p className="text-muted-foreground">
                Collaborating effectively with diverse teams to achieve common goals.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-accent text-xl font-bold mb-2">Problem-Solving</div>
              <p className="text-muted-foreground">
                Quickly adapting to challenges and finding efficient solutions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-white text-xl font-bold mb-2">Time Management</div>
              <p className="text-muted-foreground">
                Meeting deadlines and managing multiple tasks efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
