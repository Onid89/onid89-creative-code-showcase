
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Project data with translation keys
const projects = [
  {
    titleKey: "projects.project1.title",
    descriptionKey: "projects.project1.desc",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
    tags: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Onid89/Web-Dev-Portfolio",
    demo: "https://onid89.github.io/Web-Dev-Portfolio/"
  },
  {
    titleKey: "projects.project2.title",
    descriptionKey: "projects.project2.desc",
    image: "/images/Weather-App.webp",
    tags: ["HTML5", "CSS3", "JavaScript","API"],
    github: "https://github.com/Onid89/Weather-App",
    demo: "https://onid89.github.io/Weather-App/"
  },
  {
    titleKey: "projects.project3.title",
    descriptionKey: "projects.project3.desc",
    image: "images/Trivia-game.webp",
    tags: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Onid89/Trivia-Game",
    demo: "https://onid89.github.io/Trivia-Game/"
  },
  {
    titleKey: "projects.project4.title",
    descriptionKey: "projects.project4.desc",
    image: "images/code-square-img.png",
    tags: ["React", "TypeScript", "SCSS", "Vite", "Node.js", "Express.js", "WebSocket", "MongoDB"],
    github: "https://github.com/Onid89/realtime-chat",
    demo: "https://csc-frontend-2gdx.onrender.com/"
  }
];

export default function Projects() {
  const { t } = useLanguage();
  
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">{t('projects.title')}</h2>
          <Separator className="w-20 bg-accent h-1 rounded-full" />
          <p className="text-muted-foreground mt-4 text-center max-w-2xl">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass overflow-hidden border-accent/20 hover:italian-border transition-all group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-semibold text-accent">{t(project.titleKey)}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{t(project.descriptionKey)}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="border-accent/30 text-accent">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-4">
                <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    {t('projects.github')}
                  </a>
                </Button>
                {project.demo && (
                  <Button asChild size="sm" className="bg-accent hover:bg-accent/80 text-white">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      {t('projects.liveDemo')}
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
