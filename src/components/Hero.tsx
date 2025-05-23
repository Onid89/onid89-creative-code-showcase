
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 flex flex-col space-y-4 sm:space-y-6 text-center lg:text-left">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gradient leading-tight">
              {t('hero.title')}
            </h1>
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-accent-gradient">
              {t('hero.subtitle')}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 items-center lg:items-start">
              <Button asChild className="bg-primary hover:bg-primary/80 text-white w-full sm:w-auto">
                <a href="#projects" className="flex items-center justify-center">
                  {t('hero.viewWork')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10 w-full sm:w-auto">
                <a href="#contact">
                  {t('hero.getInTouch')}
                </a>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden italian-border p-1">
              <img
                src="/profile/profile-round.png"
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
