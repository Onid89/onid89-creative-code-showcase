
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
    en: 'Junior Fullstack Web Developer',
    de: 'Junior Fullstack Webentwickler',
    it: 'Junior Sviluppatore Web Fullstack'
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
  // About section
  'about.title': {
    en: 'About Me',
    de: 'Über Mich',
    it: 'Chi Sono'
  },
  'about.career.title': {
    en: 'Career Transition',
    de: 'Beruflicher Übergang',
    it: 'Transizione di Carriera'
  },
  'about.career.p1': {
    en: 'After a very successful career as an opera dancer, I decided to change my path when I learned about programming during my career. As I got more invested in technology and coding, I realized Silicon Valley had more to offer than Swan Lake. So I see greater long-term prospects in the technology industry, I made a conscious decision in favor of web development.',
    de: 'Nach einer sehr erfolgreichen Karriere als Operntänzer beschloss ich, meinen Weg zu ändern, als ich während meiner Karriere vom Programmieren erfuhr. Als ich mich mehr mit Technologie und Coding beschäftigte, erkannte ich, dass das Silicon Valley mehr zu bieten hatte als Schwanensee. Da ich in der Technologiebranche größere langfristige Perspektiven sehe, traf ich eine bewusste Entscheidung für die Webentwicklung.',
    it: 'Dopo una carriera di grande successo come ballerino d\'opera, ho deciso di cambiare strada quando ho conosciuto la programmazione durante la mia carriera. Mentre mi interessavo sempre più alla tecnologia e alla programmazione, ho capito che la Silicon Valley aveva più da offrire del Lago dei Cigni. Vedendo maggiori prospettive a lungo termine nel settore tecnologico, ho preso una decisione consapevole a favore dello sviluppo web.'
  },
  'about.career.p2': {
    en: 'To specially prepare for my career change, I took online courses on Udemy and Coursera and completed an official one-month intensive web development course, which concluded with the Digital Career Institute, which concluded with a small final project.',
    de: 'Um mich speziell auf meinen Berufswechsel vorzubereiten, absolvierte ich Online-Kurse auf Udemy und Coursera und schloss einen offiziellen einmonatigen intensiven Webentwicklungskurs ab, der mit dem Digital Career Institute endete und mit einem kleinen Abschlussprojekt abschloss.',
    it: 'Per prepararmi specificamente al cambio di carriera, ho seguito corsi online su Udemy e Coursera e ho completato un corso intensivo ufficiale di sviluppo web di un mese, che si è concluso con il Digital Career Institute, culminando in un piccolo progetto finale.'
  },
  'about.approach.title': {
    en: 'Professional Approach',
    de: 'Professioneller Ansatz',
    it: 'Approccio Professionale'
  },
  'about.approach.p1': {
    en: 'I\'m driven by continuous learning and the desire to implement innovative solutions that blend technical skills with creativity, aiming to grow professionally and contribute to exciting projects.',
    de: 'Ich werde von kontinuierlichem Lernen und dem Wunsch angetrieben, innovative Lösungen zu implementieren, die technische Fähigkeiten mit Kreativität verbinden, mit dem Ziel, mich beruflich weiterzuentwickeln und zu spannenden Projekten beizutragen.',
    it: 'Sono guidato dall\'apprendimento continuo e dal desiderio di implementare soluzioni innovative che combinano competenze tecniche e creatività, con l\'obiettivo di crescere professionalmente e contribuire a progetti entusiasmanti.'
  },
  'about.education.title': {
    en: 'Education',
    de: 'Bildung',
    it: 'Formazione'
  },
  'about.education.webdev': {
    en: 'Full Stack Web Development',
    de: 'Full Stack Webentwicklung',
    it: 'Sviluppo Web Full Stack'
  },
  'about.education.webdev.desc': {
    en: '14-month full-time training program focused on Frontend and Backend technologies within the MERN stack.',
    de: '14-monatiges Vollzeit-Trainingsprogramm mit Fokus auf Frontend- und Backend-Technologien im MERN-Stack.',
    it: 'Programma di formazione a tempo pieno di 14 mesi incentrato su tecnologie Frontend e Backend all\'interno dello stack MERN.'
  },
  'about.education.highschool': {
    en: 'High School Diploma in Accounting and Programming',
    de: 'Hochschulabschluss in Rechnungswesen und Programmierung',
    it: 'Diploma di Scuola Superiore in Contabilità e Programmazione'
  },
  'about.languages.title': {
    en: 'Languages',
    de: 'Sprachen',
    it: 'Lingue'
  },
  'about.languages.italian': {
    en: 'Italian',
    de: 'Italienisch',
    it: 'Italiano'
  },
  'about.languages.english': {
    en: 'English',
    de: 'Englisch',
    it: 'Inglese'
  },
  'about.languages.german': {
    en: 'German',
    de: 'Deutsch',
    it: 'Tedesco'
  },
  // Projects section
  'projects.title': {
    en: 'My Projects',
    de: 'Meine Projekte',
    it: 'I Miei Progetti'
  },
  'projects.subtitle': {
    en: 'Here are some of my featured projects that showcase my skills and experience.',
    de: 'Hier sind einige meiner vorgestellten Projekte, die meine Fähigkeiten und Erfahrungen zeigen.',
    it: 'Ecco alcuni dei miei progetti in evidenza che mostrano le mie capacità ed esperienze.'
  },
  'projects.project1.title': {
    en: 'First Project in Web Development Course',
    de: 'Erstes Projekt im Webentwicklungskurs',
    it: 'Primo Progetto nel Corso di Sviluppo Web'
  },
  'projects.project1.desc': {
    en: 'I developed my first portfolio using HTML, CSS, and JavaScript. I integrated Formspree to efficiently manage contact form submissions.',
    de: 'Ich entwickelte mein erstes Portfolio mit HTML, CSS und JavaScript. Ich integrierte Formspree, um Kontaktformulareinreichungen effizient zu verwalten.',
    it: 'Ho sviluppato il mio primo portfolio utilizzando HTML, CSS e JavaScript. Ho integrato Formspree per gestire efficientemente le invio di moduli di contatto.'
  },
  'projects.project2.title': {
    en: 'Design Philosophy',
    de: 'Design-Philosophie',
    it: 'Filosofia di Design'
  },
  'projects.project2.desc': {
    en: 'I prefer clean and intuitive designs that implement designs that reflect my personality and showcase my skills and drive as a frontend developer.',
    de: 'Ich bevorzuge klare und intuitive Designs, die Designs umsetzen, die meine Persönlichkeit widerspiegeln und meine Fähigkeiten und meinen Antrieb als Frontend-Entwickler zeigen.',
    it: 'Preferisco design puliti e intuitivi che implementano design che riflettono la mia personalità e mostrano le mie capacità e la mia passione come sviluppatore frontend.'
  },
  'projects.project3.title': {
    en: 'World-Trivia Game',
    de: 'Welt-Trivia-Spiel',
    it: 'Gioco di Trivia Mondiale'
  },
  'projects.project3.desc': {
    en: 'Educational Game with Unity C#: I developed a trivia game featuring questions from over 20 countries. Players can select a country, answer cultural and historical questions, and progress through multiple levels with correct and incorrect answers.',
    de: 'Lernspiel mit Unity C#: Ich entwickelte ein Trivia-Spiel mit Fragen aus über 20 Ländern. Spieler können ein Land auswählen, kulturelle und historische Fragen beantworten und mit richtigen und falschen Antworten durch mehrere Level fortschreiten.',
    it: 'Gioco educativo con Unity C#: Ho sviluppato un gioco di trivia con domande provenienti da oltre 20 paesi. I giocatori possono selezionare un paese, rispondere a domande culturali e storiche e progredire attraverso più livelli con risposte corrette e incorrette.'
  },
  'projects.project4.title': {
    en: 'Tech Insighter Dash',
    de: 'Tech Insighter Dash',
    it: 'Tech Insighter Dash'
  },
  'projects.project4.desc': {
    en: 'Built with React, JavaScript, and CSS, creating a dynamic and responsive web interface to elevate the gaming experience.',
    de: 'Gebaut mit React, JavaScript und CSS, um eine dynamische und responsive Weboberfläche zu erstellen, die das Spielerlebnis verbessert.',
    it: 'Costruito con React, JavaScript e CSS, creando un\'interfaccia web dinamica e reattiva per elevare l\'esperienza di gioco.'
  },
  'projects.github': {
    en: 'GitHub',
    de: 'GitHub',
    it: 'GitHub'
  },
  'projects.liveDemo': {
    en: 'Live Demo',
    de: 'Live-Demo',
    it: 'Demo dal vivo'
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
  },
  // Contact section
  'contact.title': {
    en: 'Get In Touch',
    de: 'Kontakt aufnehmen',
    it: 'Contattami'
  },
  'contact.subtitle': {
    en: 'Interested in working together or have questions? Feel free to reach out.',
    de: 'Interesse an einer Zusammenarbeit oder Fragen? Zögern Sie nicht, mich zu kontaktieren.',
    it: 'Interessato a collaborare o hai domande? Non esitare a contattarmi.'
  },
  'contact.form.title': {
    en: 'Send Me a Message',
    de: 'Senden Sie mir eine Nachricht',
    it: 'Inviami un messaggio'
  },
  'contact.form.name': {
    en: 'Name',
    de: 'Name',
    it: 'Nome'
  },
  'contact.form.email': {
    en: 'Email',
    de: 'E-Mail',
    it: 'Email'
  },
  'contact.form.message': {
    en: 'Message',
    de: 'Nachricht',
    it: 'Messaggio'
  },
  'contact.form.sending': {
    en: 'Sending...',
    de: 'Senden...',
    it: 'Invio in corso...'
  },
  'contact.form.send': {
    en: 'Send Message',
    de: 'Nachricht senden',
    it: 'Invia messaggio'
  },
  'contact.info.title': {
    en: 'Contact Information',
    de: 'Kontaktinformationen',
    it: 'Informazioni di contatto'
  },
  'contact.info.email': {
    en: 'Email',
    de: 'E-Mail',
    it: 'Email'
  },
  'contact.info.github': {
    en: 'GitHub',
    de: 'GitHub',
    it: 'GitHub'
  },
  'contact.info.linkedin': {
    en: 'LinkedIn',
    de: 'LinkedIn',
    it: 'LinkedIn'
  },
  'contact.location.title': {
    en: 'Location',
    de: 'Standort',
    it: 'Ubicazione'
  },
  'contact.location.desc': {
    en: 'Based in Berlin, Germany\nAvailable for remote work and local opportunities',
    de: 'Wohnhaft in Berlin, Deutschland\nVerfügbar für Remote-Arbeit und lokale Möglichkeiten',
    it: 'Situato a Berlino, Germania\nDisponibile per lavoro remoto e opportunità locali'
  },
  // Footer section
  'footer.rights': {
    en: 'All rights reserved.',
    de: 'Alle Rechte vorbehalten.',
    it: 'Tutti i diritti riservati.'
  },
  'footer.description': {
    en: 'Fullstack Web Developer based in Berlin, Germany',
    de: 'Fullstack-Webentwickler mit Sitz in Berlin, Deutschland',
    it: 'Sviluppatore Web Fullstack con sede a Berlino, Germania'
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
