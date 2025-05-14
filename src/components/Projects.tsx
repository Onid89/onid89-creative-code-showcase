
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github } from "lucide-react";

// Project data
const projects = [
  {
    title: "First Project in Web Development Course",
    description: "I developed my first portfolio using HTML, CSS, and JavaScript. I integrated Formspree to efficiently manage contact form submissions.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
    tags: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Onid89",
    demo: "https://onid89.github.io/Web-Dev-Portfolio/"
  },
  {
    title: "Design Philosophy",
    description: "I prefer clean and intuitive designs that implement designs that reflect my personality and showcase my skills and drive as a frontend developer.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
    tags: ["UI/UX", "Design", "Figma"],
    github: "https://github.com/Onid89",
    demo: ""
  },
  {
    title: "World-Trivia Game",
    description: "Educational Game with Unity C#: I developed a trivia game featuring questions from over 20 countries. Players can select a country, answer cultural and historical questions, and progress through multiple levels with correct and incorrect answers.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3",
    tags: ["Unity", "C#", "Game Development"],
    github: "https://github.com/Onid89",
    demo: ""
  },
  {
    title: "Tech Insighter Dash",
    description: "Built with React, JavaScript, and CSS, creating a dynamic and responsive web interface to elevate the gaming experience.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Onid89",
    demo: ""
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">My Projects</h2>
          <Separator className="w-20 bg-accent h-1 rounded-full" />
          <p className="text-muted-foreground mt-4 text-center max-w-2xl">
            Here are some of my featured projects that showcase my skills and experience.
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
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-semibold text-accent">{project.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
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
                    GitHub
                  </a>
                </Button>
                {project.demo && (
                  <Button asChild size="sm" className="bg-accent hover:bg-accent/80 text-white">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
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
