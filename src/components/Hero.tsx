
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gradient">
              Gerardo Michele Mussuto
            </h1>
            <h2 className="text-xl xs:text-2xl sm:text-3xl text-accent-gradient">
              Fullstack Web Developer
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
              I'm an artist turned Web Developer with a solid background as a professional opera dancer. My artistic career has equipped me with a strong sense of creativity, discipline, and attention to detail, qualities that I now passionately apply to the world of technology and software development.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-primary hover:bg-primary/80 text-white">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10">
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-56 h-56 xs:w-64 xs:h-64 md:w-80 md:h-80 rounded-full overflow-hidden italian-border p-1">
              <img
                src="/lovable-uploads/2ae4a85c-065d-455f-9088-80896bca56ff.png"
                alt="Gerardo Michele Mussuto"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
