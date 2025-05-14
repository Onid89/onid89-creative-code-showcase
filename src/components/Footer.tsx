
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a 
              href="https://github.com/Onid89" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/gerardo-michele-mussuto-89397131" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="mailto:gmomussuto89@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
          
          <Separator className="w-full max-w-md mb-6" />
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Gerardo Michele Mussuto. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Fullstack Web Developer based in Berlin, Germany
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
