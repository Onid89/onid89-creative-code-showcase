
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <section id="about" className="bg-secondary/20 section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <Separator className="w-20 bg-accent h-1 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-accent">Career Transition</h3>
            <p className="text-muted-foreground">
              After a very successful career as an opera dancer, I decided to change my path when I learned about programming during my career. As I got more invested in technology and coding, I realized Silicon Valley had more to offer than Swan Lake. So I see greater long-term prospects in the technology industry, I made a conscious decision in favor of web development.
            </p>
            <p className="text-muted-foreground">
              To specially prepare for my career change, I took online courses on Udemy and Coursera and completed an official one-month intensive web development course, which concluded with the Digital Career Institute, which concluded with a small final project.
            </p>
            
            <h3 className="text-2xl font-semibold text-accent mt-8">Professional Approach</h3>
            <p className="text-muted-foreground">
              I'm driven by continuous learning and the desire to implement innovative solutions that blend technical skills with creativity, aiming to grow professionally and contribute to exciting projects.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="glass border-accent/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-accent">Education</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-medium">Full Stack Web Development</h4>
                      <span className="text-xs text-muted-foreground">07/2022 - 04/2023</span>
                    </div>
                    <p className="text-sm text-muted-foreground">DCI Career Institute, Berlin</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      14-month full-time training program focused on Frontend and Backend technologies within the MERN stack.
                    </p>
                  </li>
                  <li>
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-medium">High School Diploma in Accounting and Programming</h4>
                      <span className="text-xs text-muted-foreground">09/2003 - 07/2008</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Istituto Tecnico Commerciale G. Marconi</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass border-accent/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-accent">Languages</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Italian</p>
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`w-5 h-5 rounded-full ${
                            i <= 5 ? "bg-accent" : "bg-muted"
                          } mr-1`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">English</p>
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`w-5 h-5 rounded-full ${
                            i <= 4 ? "bg-accent" : "bg-muted"
                          } mr-1`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">German</p>
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`w-5 h-5 rounded-full ${
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
