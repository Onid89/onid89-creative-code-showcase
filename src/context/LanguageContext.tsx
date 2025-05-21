
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
    en: 'After an international career in the world of dance, with experiences at renowned theaters such as Deutsche Oper Berlin, Theater Chemnitz, and Semperoper Dresden, I decided to take on a new professional challenge in the field of web development. Driven by curiosity, a passion for technology, and the desire to build concrete digital solutions, I completed the Full Stack Web Development program at DCI Career Institute in Berlin in February 2025.',
    de: 'Nach einer internationalen Karriere in der Welt des Tanzes, mit Erfahrungen an renommierten Theatern wie der Deutschen Oper Berlin, dem Theater Chemnitz und der Semperoper Dresden, habe ich mich dazu entschieden, eine neue berufliche Herausforderung im Bereich der Webentwicklung anzunehmen. Getrieben von Neugier, einer Leidenschaft für Technologie und dem Wunsch, konkrete digitale Lösungen zu entwickeln, habe ich im Februar 2025 das Full Stack Web Development Programm am DCI Career Institute in Berlin abgeschlossen.',
    it: 'Dopo una carriera internazionale nel mondo della danza, con esperienze in teatri rinomati come la Deutsche Oper Berlin, il Theater Chemnitz e la Semperoper Dresden, ho deciso di affrontare una nuova sfida professionale nel campo dello sviluppo web. Spinto dalla curiosità, dalla passione per la tecnologia e dal desiderio di creare soluzioni digitali concrete, ho completato il programma di Full Stack Web Development presso il DCI Career Institute di Berlino nel febbraio 2025.'
  },
  'about.career.p2': {
    en: 'Throughout my training, I gained hands-on experience with HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB, and collaborated on real-world projects that strengthened both my technical and communication skills. Following the course, I completed a two-month internship at Drengr Tech IT Solution, where I applied my knowledge in a professional setting and contributed to the frontend development of web applications.',
    de: 'Während meiner Ausbildung sammelte ich praktische Erfahrungen mit HTML, CSS, JavaScript, React, Node.js, Express und MongoDB und arbeitete an realen Projekten, die sowohl meine technischen als auch meine kommunikativen Fähigkeiten stärkten. Im Anschluss an den Kurs absolvierte ich ein zweimonatiges Praktikum bei Drengr Tech IT Solution, wo ich mein Wissen in einem professionellen Umfeld anwenden und zur Frontend-Entwicklung von Webanwendungen beitragen konnte.',
    it: 'Durante la mia formazione, ho acquisito esperienza pratica con HTML, CSS, JavaScript, React, Node.js, Express e MongoDB, e ho collaborato a progetti reali che hanno rafforzato sia le mie competenze tecniche sia quelle comunicative. Al termine del corso, ho svolto un tirocinio di due mesi presso Drengr Tech IT Solution, dove ho applicato le mie conoscenze in un contesto professionale e contribuito allo sviluppo frontend di applicazioni web.'
  },
  'about.career.p3': {
    en: 'My background in the performing arts has taught me discipline, teamwork, and an eye for detail qualities I now bring to my new path in tech. I am currently seeking my first professional opportunity as a Junior Web Developer, where I can continue to grow, learn, and contribute to innovative digital projects in a dynamic and supportive environment.',
    de: 'Mein Hintergrund in den darstellenden Künsten hat mir Disziplin, Teamarbeit und ein Auge fürs Detail vermittelt Qualitäten, die ich nun auf meinem neuen Weg in der Tech-Welt einbringe. Derzeit suche ich meine erste berufliche Gelegenheit als Junior Web Developer, um weiter zu wachsen, zu lernen und zu innovativen digitalen Projekten in einem dynamischen und unterstützenden Umfeld beizutragen.',
    it: 'La mia esperienza nelle arti performative mi ha insegnato disciplina, lavoro di squadra e attenzione ai dettagli qualità che ora porto con me nel mio nuovo percorso nel settore tecnologico. Attualmente sono alla ricerca della mia prima opportunità professionale come Junior Web Developer, dove possa continuare a crescere, imparare e contribuire a progetti digitali innovativi in un ambiente dinamico e stimolante.'
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
    en: 'My First Web Portfolio',
    de: 'Mein erstes Web-Portfolio',
    it: 'Il mio primo portfolio web'
  },
  'projects.project1.desc': {
    en: 'A simple and functional portfolio, created to showcase my first projects as a web developer. It includes basic HTML, CSS, and JavaScript, with a focus on structure and clean code.',
    de: 'Ein einfaches und funktionales Portfolio, das erstellt wurde, um meine ersten Projekte als Webentwickler vorzustellen. Es enthält grundlegendes HTML, CSS und JavaScript, mit Fokus auf Struktur und sauberen Code.',
    it: 'Un portfolio semplice e funzionale, realizzato per presentare i miei primi progetti come sviluppatore web. Include HTML, CSS e JavaScript base, con attenzione alla struttura e alla pulizia del codice.'
  },
  'projects.project2.title': {
    en: 'Weather Application',
    de: 'Wetter-App',
    it: 'Applicazione Meteo'
  },
  'projects.project2.desc': {
    en: 'A weather application that displays current conditions and forecasts using real-time data from an API. Built with HTML, CSS, and JavaScript.',
    de: 'Eine Wetteranwendung, die aktuelle Bedingungen und Wettervorhersagen anzeigt, basierend auf Echtzeitdaten von einer API. Erstellt mit HTML, CSS und JavaScript.',
    it: 'Un\'applicazione meteo che mostra le condizioni attuali e le previsioni del tempo, utilizzando dati in tempo reale da un\'API. Realizzata con HTML, CSS e JavaScript.'
  },
  'projects.project3.title': {
    en: 'World-Trivia Game',
    de: 'Welt-Trivia-Spiel',
    it: 'Gioco di Trivia Mondiale'
  },
  'projects.project3.desc': {
    en: 'A dynamic trivia game built with HTML, CSS, and JavaScript. The app presents multiple-choice questions, checks answers in real-time, and tracks the final score.',
    de: 'Ein dynamisches Quizspiel, entwickelt mit HTML, CSS und JavaScript. Die Anwendung zeigt Multiple-Choice-Fragen, prüft die Antworten in Echtzeit und verfolgt den Endpunktestand.',
    it: 'Un gioco a quiz dinamico sviluppato con HTML, CSS e JavaScript. L’applicazione presenta domande a scelta multipla, verifica le risposte in tempo reale e tiene traccia del punteggio finale.'
  },
  'projects.project4.title': {
    en: 'Code Square Chat',
    de: 'Code Square Chat',
    it: 'Code Square Chat'
  },
  'projects.project4.desc': {
    en: 'Code Square Chat (CSC) is a real-time chat application built for seamless and secure communication. It includes user registration, public chat rooms, private messaging, and a responsive UI optimized for mobile and desktop devices. CSC is the final project of the DCI Full Stack Web Development course.',
    de: 'Code Square Chat (CSC) ist eine Echtzeit-Chat-Anwendung, die für nahtlose und sichere Kommunikation entwickelt wurde. Sie bietet Benutzerregistrierung, öffentliche Chaträume, private Nachrichten und eine responsive Benutzeroberfläche, die für Mobilgeräte und Desktops optimiert ist. CSC ist das Abschlussprojekt des DCI Full Stack Web Development Kurses.',
    it: 'Code Square Chat (CSC) è un\'applicazione di chat in tempo reale progettata per una comunicazione fluida e sicura. Include registrazione degli utenti, stanze pubbliche, messaggistica privata e un\'interfaccia responsive ottimizzata per dispositivi mobili e desktop. CSC è il progetto finale del corso Full Stack Web Development di DCI.'
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
