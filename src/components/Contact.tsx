
import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID!,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
          e.currentTarget,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ from_name: "", from_email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: "There was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <section id="contact" className="section-padding">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
              {t("contact.title")}
            </h2>
            <Separator className="w-20 bg-accent h-1 rounded-full" />
            <p className="text-muted-foreground mt-4 text-center max-w-2xl">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass border border-accent/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6 text-accent">
                {t("contact.form.title")}
              </h3>

              {/* ✅ FORM with correct name attributes for EmailJS template */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium mb-2">
                    {t("contact.form.name")}
                  </label>
                  <Input
                      id="from_name"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      className="bg-secondary/30 border-accent/20 focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium mb-2">
                    {t("contact.form.email")}
                  </label>
                  <Input
                      id="from_email"
                      name="from_email"
                      type="email"
                      value={formData.from_email}
                      onChange={handleChange}
                      required
                      className="bg-secondary/30 border-accent/20 focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t("contact.form.message")}
                  </label>
                  <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-secondary/30 border-accent/20 focus:border-accent min-h-[150px]"
                  />
                </div>
                <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/80 text-white"
                    disabled={isSubmitting}
                >
                  {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
                </Button>
              </form>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-6 text-accent">
                {t("contact.info.title")}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-medium">{t("contact.info.email")}</h4>
                    <a
                        href="mailto:dinomussuto89@gmail.com"
                        className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      dinomussuto89@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Github className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-medium">{t("contact.info.github")}</h4>
                    <a
                        href="https://github.com/Onid89"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      github.com/Onid89
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Linkedin className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-medium">{t("contact.info.linkedin")}</h4>
                    <a
                        href="https://www.linkedin.com/in/gerardo-michele-mussuto-895971313/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      linkedin.com/in/gerardo-michele-mussuto
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Download className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-medium">Certificate and CV</h4>
                    <a
                        href="/public/downloads/Certificate-Cv.zip"
                        download="Certificate and CV"
                        className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  {t("contact.location.title")}
                </h3>
                <p className="text-muted-foreground whitespace-pre-line">
                  {t("contact.location.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
