import React, { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
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

    // Check if any field is empty
    if (
      !formData.from_name.trim() ||
      !formData.from_email.trim() ||
      !formData.message.trim()
    ) {
      toast({
        variant: 'destructive',
        title: t('contact.form.errorTitle') || 'Please fill in all fields',
        description:
          t('contact.form.errorDesc') ||
          'All fields are required before submitting.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        e.currentTarget,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      toast({
        title: 'Message sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        variant: 'destructive',
        title: 'Submission failed',
        description:
          'There was an error sending your message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gradient text-center">
            {t('contact.title')}
          </h2>
          <Separator className="w-16 sm:w-20 bg-accent h-1 rounded-full" />
          <p className="text-muted-foreground mt-4 text-center max-w-2xl text-sm sm:text-base">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="glass border border-accent/20 rounded-lg p-4 sm:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-accent">
              {t('contact.form.title')}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="from_name"
                  className="block text-sm font-medium mb-2"
                >
                  {t('contact.form.name')}
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
                <label
                  htmlFor="from_email"
                  className="block text-sm font-medium mb-2"
                >
                  {t('contact.form.email')}
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
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t('contact.form.message')}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-secondary/30 border-accent/20 focus:border-accent min-h-[120px] sm:min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/80 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? t('contact.form.sending')
                  : t('contact.form.send')}
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-accent">
              {t('contact.info.title')}
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-accent mt-1 flex-shrink-0" />
                <div className="min-w-0">
                  <h4 className="font-medium text-sm sm:text-base">
                    {t('contact.info.email')}
                  </h4>
                  <a
                    href="mailto:dinomussuto89@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base break-words"
                  >
                    dinomussuto89@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Github className="h-5 w-5 sm:h-6 sm:w-6 text-accent mt-1 flex-shrink-0" />
                <div className="min-w-0">
                  <h4 className="font-medium text-sm sm:text-base">
                    {t('contact.info.github')}
                  </h4>
                  <a
                    href="https://github.com/Onid89"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base break-words"
                  >
                    github.com/Onid89
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-accent mt-1 flex-shrink-0" />
                <div className="min-w-0">
                  <h4 className="font-medium text-sm sm:text-base">
                    {t('contact.info.linkedin')}
                  </h4>
                  <a
                    href="https://www.linkedin.com/in/gerardo-michele-mussuto-895971313/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base break-words"
                  >
                    linkedin.com/in/gerardo-michele-mussuto
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <Download className="h-5 w-5 sm:h-6 sm:w-6 text-accent mt-1 flex-shrink-0" />
                <div className="min-w-0">
                  <h4 className="font-medium text-sm sm:text-base">
                    Gerardo CV
                  </h4>
                  <a
                    href="/downloads/gerardo-m-mussuto-cv.pdf"
                    download="Gerardo CV"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-accent">
                {t('contact.location.title')}
              </h3>
              <p className="text-muted-foreground whitespace-pre-line text-sm sm:text-base">
                {t('contact.location.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
