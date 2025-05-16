
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="bg-secondary/20 section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">{t('about.title')}</h2>
          <Separator className="w-20 bg-accent h-1 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-accent">{t('about.career.title')}</h3>
            <p className="text-muted-foreground">
              {t('about.career.p1')}
            </p>
            <p className="text-muted-foreground">
              {t('about.career.p2')}
            </p>
            
            <h3 className="text-2xl font-semibold text-accent mt-8">{t('about.approach.title')}</h3>
            <p className="text-muted-foreground">
              {t('about.approach.p1')}
            </p>
          </div>

          <div className="space-y-6">
            <Card className="glass border-accent/20 hover:italian-border transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-accent">{t('about.education.title')}</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                      <h4 className="font-medium">{t('about.education.webdev')}</h4>
                      <span className="text-xs text-muted-foreground">07/2022 - 04/2023</span>
                    </div>
                    <p className="text-sm text-muted-foreground">DCI Career Institute, Berlin</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t('about.education.webdev.desc')}
                    </p>
                  </li>
                  <li>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                      <h4 className="font-medium">{t('about.education.highschool')}</h4>
                      <span className="text-xs text-muted-foreground">09/2003 - 07/2008</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Istituto Tecnico Commerciale G. Marconi</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass border-accent/20 hover:italian-border transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-accent">{t('about.languages.title')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">{t('about.languages.italian')}</p>
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${
                            i <= 5 ? "bg-accent" : "bg-muted"
                          } mr-1`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">{t('about.languages.english')}</p>
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${
                            i <= 4 ? "bg-accent" : "bg-muted"
                          } mr-1`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">{t('about.languages.german')}</p>
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${
                            i <= 3 ? "bg-accent" : "bg-muted"
                          } mr-1`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
