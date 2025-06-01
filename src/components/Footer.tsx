
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary/30 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 sm:space-x-6 mb-4 sm:mb-6">
            <a 
              href="https://github.com/Onid89" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/gerardo-michele-mussuto-895971313/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="mailto:dinomussuto89@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
          
          <div className="w-full max-w-xs sm:max-w-md mb-4 sm:mb-6 flex items-center">
            <div className="h-0.5 bg-[#008C45] flex-1"></div>
            <div className="h-0.5 bg-white dark:bg-white/100 flex-1"></div>
            <div className="h-0.5 bg-[#CD212A] flex-1"></div>
          </div>
          
          <div className="text-center">
            <p className="text-xs sm:text-sm text-muted-foreground">
              &copy; {currentYear} Gerardo Michele Mussuto. {t('footer.rights')}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              {t('footer.description')}
            </p>
            <div className="mt-4 flex gap-4 justify-center text-xs sm:text-sm">
              <a
                  href="/impressum.html"
                  className="text-muted-foreground hover:underline"
              >
                Impressum
              </a>
              <span>|</span>
              <a
                  href="/datenschutz.html"

                  className="text-muted-foreground hover:underline"
              >
                Datenschutzerklärung
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
