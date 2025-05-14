
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de' | 'it';

interface Translations {
  [key: string]: {
    en: string;
    de: string;
    it: string;
  };
}

// Dictionary of translations
const translations: Translations = {
  // Navbar items
  'nav.home': {
    en: 'Home',
    de: 'Startseite',
    it: 'Home'
  },
  'nav.about': {
    en: 'About',
    de: 'Über mich',
    it: 'Chi sono'
  },
  'nav.projects': {
    en: 'Projects',
    de: 'Projekte',
    it: 'Progetti'
  },
  'nav.skills': {
    en: 'Skills',
    de: 'Fähigkeiten',
    it: 'Competenze'
  },
  'nav.contact': {
    en: 'Contact',
    de: 'Kontakt',
    it: 'Contatti'
  },
  // Hero section
  'hero.title': {
    en: 'Gerardo Michele Mussuto',
    de: 'Gerardo Michele Mussuto',
    it: 'Gerardo Michele Mussuto'
  },
  'hero.subtitle': {
    en: 'Fullstack Web Developer',
    de: 'Fullstack Webentwickler',
    it: 'Sviluppatore Web Fullstack'
  },
  'hero.description': {
    en: "I'm an artist turned Web Developer with a solid background as a professional opera dancer. My artistic career has equipped me with a strong sense of creativity, discipline, and attention to detail, qualities that I now passionately apply to the world of technology and software development.",
    de: "Ich bin ein Künstler, der zum Webentwickler wurde, mit einem soliden Hintergrund als professioneller Operntänzer. Meine künstlerische Karriere hat mich mit einem starken Sinn für Kreativität, Disziplin und Liebe zum Detail ausgestattet – Eigenschaften, die ich jetzt mit Leidenschaft in der Welt der Technologie und Softwareentwicklung einsetze.",
    it: "Sono un artista diventato sviluppatore web con una solida esperienza come ballerino d'opera professionista. La mia carriera artistica mi ha fornito un forte senso di creatività, disciplina e attenzione ai dettagli, qualità che ora applico con passione al mondo della tecnologia e dello sviluppo software."
  },
  'hero.viewWork': {
    en: 'View My Work',
    de: 'Meine Arbeit ansehen',
    it: 'Guarda i miei lavori'
  },
  'hero.getInTouch': {
    en: 'Get In Touch',
    de: 'Kontaktiere mich',
    it: 'Contattami'
  },
  // Skills section
  'skills.title': {
    en: 'Skills & Technologies',
    de: 'Fähigkeiten & Technologien',
    it: 'Competenze & Tecnologie'
  },
  'skills.subtitle': {
    en: 'Technologies and tools I\'ve worked with in my journey as a developer.',
    de: 'Technologien und Tools, mit denen ich auf meinem Weg als Entwickler gearbeitet habe.',
    it: 'Tecnologie e strumenti con cui ho lavorato nel mio percorso come sviluppatore.'
  },
  'skills.frontend': {
    en: 'Frontend',
    de: 'Frontend',
    it: 'Frontend'
  },
  'skills.backend': {
    en: 'Backend',
    de: 'Backend',
    it: 'Backend'
  },
  'skills.tools': {
    en: 'Tools & Others',
    de: 'Tools & Andere',
    it: 'Strumenti & Altri'
  },
  'skills.transferable': {
    en: 'Transferable Skills from Artistic Career',
    de: 'Übertragbare Fähigkeiten aus der künstlerischen Karriere',
    it: 'Competenze trasferibili dalla carriera artistica'
  },
  'skills.creativity': {
    en: 'Creativity',
    de: 'Kreativität',
    it: 'Creatività'
  },
  'skills.creativity.desc': {
    en: 'Bringing innovative solutions to technical problems through creative thinking.',
    de: 'Innovative Lösungen für technische Probleme durch kreatives Denken entwickeln.',
    it: 'Portare soluzioni innovative ai problemi tecnici attraverso il pensiero creativo.'
  },
  'skills.discipline': {
    en: 'Discipline',
    de: 'Disziplin',
    it: 'Disciplina'
  },
  'skills.discipline.desc': {
    en: 'Maintaining focus and consistency in learning and applying new skills.',
    de: 'Fokus und Konsequenz beim Erlernen und Anwenden neuer Fähigkeiten bewahren.',
    it: 'Mantenere concentrazione e costanza nell\'apprendimento e nell\'applicazione di nuove competenze.'
  },
  'skills.attention': {
    en: 'Attention to Detail',
    de: 'Liebe zum Detail',
    it: 'Attenzione ai Dettagli'
  },
  'skills.attention.desc': {
    en: 'Ensuring precision in code and design implementation.',
    de: 'Präzision bei der Implementierung von Code und Design sicherstellen.',
    it: 'Garantire precisione nell\'implementazione del codice e del design.'
  },
  'skills.teamwork': {
    en: 'Teamwork',
    de: 'Teamarbeit',
    it: 'Lavoro di Squadra'
  },
  'skills.teamwork.desc': {
    en: 'Collaborating effectively with diverse teams to achieve common goals.',
    de: 'Effektive Zusammenarbeit mit vielfältigen Teams, um gemeinsame Ziele zu erreichen.',
    it: 'Collaborare efficacemente con team diversi per raggiungere obiettivi comuni.'
  },
  'skills.problem': {
    en: 'Problem-Solving',
    de: 'Problemlösung',
    it: 'Risoluzione dei Problemi'
  },
  'skills.problem.desc': {
    en: 'Quickly adapting to challenges and finding efficient solutions.',
    de: 'Schnelle Anpassung an Herausforderungen und Finden effizienter Lösungen.',
    it: 'Adattarsi rapidamente alle sfide e trovare soluzioni efficienti.'
  },
  'skills.time': {
    en: 'Time Management',
    de: 'Zeitmanagement',
    it: 'Gestione del Tempo'
  },
  'skills.time.desc': {
    en: 'Meeting deadlines and managing multiple tasks efficiently.',
    de: 'Einhalten von Fristen und effizientes Verwalten mehrerer Aufgaben.',
    it: 'Rispettare le scadenze e gestire in modo efficiente più attività.'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => ''
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
