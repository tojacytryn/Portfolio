import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        console.log('No context');
    }
    return context;
};

const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        // Hero
        'hero.greeting': 'Hi, I\'m',
        'hero.description': 'A young developer from',
        'hero.country': 'Poland',
        'hero.subtitle': 'Passionate about creating modern web applications and learning new technologies. I love turning ideas into beautiful, functional digital experiences.',
        'hero.viewWork': 'View My Work',
        'hero.getInTouch': 'Get In Touch',

        // About
        'about.title': 'About Me',
        'about.description': 'I\'m a passionate young developer from Poland with a love for creating innovative web solutions. My journey in programming started with curiosity and has evolved into a dedicated pursuit of crafting beautiful, functional, and user-friendly applications.',
        'about.technologies': 'Technologies & Tools',
        'about.yearsOld': 'Years old',
        'about.projects': 'Projects',
        'about.passion': 'Passion for programming',

        // Projects
        'projects.title': 'My Projects',
        'projects.liveDemo': 'Live Demo',
        'projects.viewCode': 'View Code',
        'projects.collaborate': 'Want to see more projects or collaborate on something amazing?',
        'projects.workTogether': 'Let\'s Work Together',
        'projects.portfolio.description': '(This website) A personal portfolio showcasing my skills and projects, built with React and Tailwind CSS.',
        'projects.twitchtts.description': 'A website that reads messages from Twitch chat with text-to-speech. Users can mute specific users and map their nicknames for better management.',
        'projects.flagmask.description': 'A lightweight CSS utility library that allows you to mask text and elements with country flags using simple CSS classes.',
        'projects.snake.description': 'A classic snake game implemented in C++ using Raylib.',

        // Contact
        'contact.title': 'Contact Me',
        'contact.connector': 'and',
        'contact.title2': 'Let\'s Work Together',
        'contact.description': 'I\'m always excited to work on new projects and collaborate with amazing people. Whether you have a project in mind, want to discuss opportunities, or just want to say hello, feel free to reach out!',
        'contact.email': 'Email',
        'contact.location': 'Location',
        'contact.locationValue': 'Poland',
        'contact.name': 'Name',
        'contact.namePlaceholder': 'Oliver Smith',
        'contact.emailPlaceholder': 'oliversmith@domain.com',
        'contact.message': 'Message',
        'contact.messagePlaceholder': 'Tell me about your project or just say hello!',
        'contact.sendMessage': 'Send Message',

        // Footer
        'footer.text': '© 2025 Dawid | Portfolio. All rights reserved.',
        'footer.text2': 'Made with ❤️',
    },
    pl: {
        // Navigation
        'nav.home': 'Strona główna',
        'nav.about': 'O mnie',
        'nav.projects': 'Projekty',
        'nav.contact': 'Kontakt',

        // Hero
        'hero.greeting': 'Cześć, jestem',
        'hero.description': 'Młody programista z',
        'hero.country': 'Polski',
        'hero.subtitle': 'Pasjonuję się tworzeniem nowoczesnych aplikacji webowych i uczeniem się nowych technologii. Uwielbiam przekształcać pomysły w piękne i funkcjonalne doświadczenia.',
        'hero.viewWork': 'Zobacz moje prace',
        'hero.getInTouch': 'Skontaktuj się',

        // About
        'about.title': 'O mnie',
        'about.description': 'Jestem młodym programistą z Polski z miłością do tworzenia innowacyjnych aplikacji internetowych. Moja podróż w programowaniu zaczęła się od ciekawości i rozwinęła się w oddane dążenie do tworzenia pięknych, funkcjonalnych i przyjaznych użytkownikowi aplikacji.',
        'about.technologies': 'Technologie i narzędzia',
        'about.yearsOld': 'lat',
        'about.projects': 'Projektów',
        'about.passion': 'Pasja do programowania',

        // Projects
        'projects.title': 'Moje projekty',
        'projects.liveDemo': 'Demo na żywo',
        'projects.viewCode': 'Zobacz kod',
        'projects.collaborate': 'Chcesz zobaczyć więcej projektów lub współpracować przy czymś niesamowitym?',
        'projects.workTogether': 'Pracujmy razem',
        'projects.portfolio.description': '(Ta strona) Osobiste portfolio prezentujące moje umiejętności i projekty, zbudowane w React i Tailwind CSS.',
        'projects.twitchtts.description': 'Aplikacja webowa czytająca czat Twitch za pomocą syntezatora mowy z opcją wyciszania i mapowania pseudonimów użytkowników.',
        'projects.flagmask.description': 'Lekka biblioteka narzędzi CSS, która pozwala maskować tekst i elementy flagami krajów za pomocą prostych klas CSS.',
        'projects.snake.description': 'Klasyczna gra w węża zaimplementowana w C++ przy użyciu Raylib.',

        // Contact
        'contact.title': 'Skontaktuj się',
        'contact.connector': 'i',
        'contact.title2': 'Pracujmy razem',
        'contact.description': 'Zawsze jestem podekscytowany możliwością pracy nad nowymi ciekawymi projektami i współpracą z niesamowitymi ludźmi. Niezależnie od tego, czy masz pomysł na projekt, chcesz coś omówić, czy po prostu chcesz się przywitać, odezwij się!',
        'contact.email': 'Email',
        'contact.location': 'Lokalizacja',
        'contact.locationValue': 'Polska',
        'contact.name': 'Imię',
        'contact.namePlaceholder': 'Jan Kowalski',
        'contact.emailPlaceholder': 'jankowalski@domena.com',
        'contact.message': 'Wiadomość',
        'contact.messagePlaceholder': 'Opowiedz mi o swoim projekcie lub po prostu się przywitaj!',
        'contact.sendMessage': 'Wyślij wiadomość',

        // Footer
        'footer.text': '© 2025 Dawid | Portfolio. Wszelkie prawa zastrzeżone.',
        'footer.text2': 'Stworzone z ❤️',
    },
    de: {
        // Navigation
        'nav.home': 'Startseite',
        'nav.about': 'Über mich',
        'nav.projects': 'Projekte',
        'nav.contact': 'Kontakt',

        // Hero
        'hero.greeting': 'Hallo, ich bin',
        'hero.description': 'Ein junger Entwickler aus',
        'hero.country': 'Polen',
        'hero.subtitle': 'Ich liebe es, moderne Webanwendungen zu entwickeln und neue Technologien zu erlernen. Es begeistert mich, Ideen in schöne und funktionale Erlebnisse zu verwandeln.',
        'hero.viewWork': 'Meine Arbeiten ansehen',
        'hero.getInTouch': 'Kontakt aufnehmen',

        // About
        'about.title': 'Über mich',
        'about.description': 'Ich bin ein junger Entwickler aus Polen mit einer Leidenschaft für innovative Webanwendungen. Meine Reise in der Programmierung begann mit Neugier und entwickelte sich zu einem engagierten Streben nach schönen, funktionalen und benutzerfreundlichen Anwendungen.',
        'about.technologies': 'Technologien und Tools',
        'about.yearsOld': 'Jahre alt',
        'about.projects': 'Projekte',
        'about.passion': 'Leidenschaft für Programmieren',

        // Projects
        'projects.title': 'Meine Projekte',
        'projects.liveDemo': 'Live-Demo',
        'projects.viewCode': 'Code ansehen',
        'projects.collaborate': 'Möchtest du mehr Projekte sehen oder gemeinsam an etwas Großartigem arbeiten?',
        'projects.workTogether': 'Lass uns zusammenarbeiten',
        'projects.portfolio.description': '(Diese Seite) Persönliches Portfolio, das meine Fähigkeiten und Projekte zeigt, gebaut mit React und Tailwind CSS.',
        'projects.twitchtts.description': 'Webanwendung, die Twitch-Chat mit Sprachausgabe vorliest, inklusive Stummschaltung und Benutzernamen-Mapping.',
        'projects.flagmask.description': 'Leichte CSS-Tool-Bibliothek, mit der Text und Elemente mit Länderflaggen über einfache CSS-Klassen maskiert werden können.',
        'projects.snake.description': 'Klassisches Snake-Spiel in C++ mit Raylib implementiert.',

        // Contact
        'contact.title': 'Kontakt',
        'contact.connector': 'und',
        'contact.title2': 'Lass uns zusammenarbeiten',
        'contact.description': 'Ich bin immer gespannt auf neue, spannende Projekte und die Zusammenarbeit mit großartigen Menschen. Ob du eine Projektidee hast, etwas besprechen möchtest oder einfach nur Hallo sagen willst – melde dich!',
        'contact.email': 'E-Mail',
        'contact.location': 'Standort',
        'contact.locationValue': 'Polen',
        'contact.name': 'Name',
        'contact.namePlaceholder': 'Max Mustermann',
        'contact.emailPlaceholder': 'maxmustermann@domain.de',
        'contact.message': 'Nachricht',
        'contact.messagePlaceholder': 'Erzähl mir von deinem Projekt oder sag einfach Hallo!',
        'contact.sendMessage': 'Nachricht senden',

        // Footer
        'footer.text': '© 2025 Dawid | Portfolio. Alle Rechte vorbehalten.',
        'footer.text2': 'Erstellt mit ❤️',
    },
    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.about': 'Sobre mí',
        'nav.projects': 'Proyectos',
        'nav.contact': 'Contacto',

        // Hero
        'hero.greeting': 'Hola, soy',
        'hero.description': 'Un joven desarrollador de',
        'hero.country': 'Polonia',
        'hero.subtitle': 'Apasionado por crear aplicaciones web modernas y aprender nuevas tecnologías. Me encanta convertir ideas en experiencias hermosas y funcionales.',
        'hero.viewWork': 'Ver mis trabajos',
        'hero.getInTouch': 'Contáctame',

        // About
        'about.title': 'Sobre mí',
        'about.description': 'Soy un joven desarrollador de Polonia con pasión por crear aplicaciones web innovadoras. Mi viaje en la programación comenzó con curiosidad y se convirtió en una dedicación por construir aplicaciones bellas, funcionales y centradas en el usuario.',
        'about.technologies': 'Tecnologías y herramientas',
        'about.yearsOld': 'años',
        'about.projects': 'Proyectos',
        'about.passion': 'Pasión por la programación',

        // Projects
        'projects.title': 'Mis proyectos',
        'projects.liveDemo': 'Demo en vivo',
        'projects.viewCode': 'Ver código',
        'projects.collaborate': '¿Quieres ver más proyectos o colaborar en algo increíble?',
        'projects.workTogether': 'Trabajemos juntos',
        'projects.portfolio.description': '(Este sitio) Portafolio personal que muestra mis habilidades y proyectos, construido con React y Tailwind CSS.',
        'projects.twitchtts.description': 'Aplicación web que lee el chat de Twitch usando síntesis de voz, con opciones para silenciar y mapear nombres de usuario.',
        'projects.flagmask.description': 'Librería CSS ligera que permite enmascarar texto y elementos con banderas usando clases CSS simples.',
        'projects.snake.description': 'Clásico juego de la serpiente implementado en C++ usando Raylib.',

        // Contact
        'contact.title': 'Contacto',
        'contact.connector': 'y',
        'contact.title2': 'Trabajemos juntos',
        'contact.description': 'Siempre estoy emocionado de trabajar en nuevos proyectos interesantes y colaborar con personas increíbles. Ya sea que tengas una idea, quieras discutir algo o simplemente saludar, ¡escríbeme!',
        'contact.email': 'Correo electrónico',
        'contact.location': 'Ubicación',
        'contact.locationValue': 'Polonia',
        'contact.name': 'Nombre',
        'contact.namePlaceholder': 'Juan Pérez',
        'contact.emailPlaceholder': 'juanperez@dominio.com',
        'contact.message': 'Mensaje',
        'contact.messagePlaceholder': '¡Cuéntame sobre tu proyecto o simplemente saluda!',
        'contact.sendMessage': 'Enviar mensaje',

        // Footer
        'footer.text': '© 2025 Dawid | Portafolio. Todos los derechos reservados.',
        'footer.text2': 'Hecho con ❤️',
    },
    fr: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.projects': 'Projets',
        'nav.contact': 'Contact',

        // Hero
        'hero.greeting': 'Salut, je suis',
        'hero.description': 'Un jeune développeur de',
        'hero.country': 'Pologne',
        'hero.subtitle': "Passionné par la création d'applications web modernes et par l'apprentissage de nouvelles technologies. J'adore transformer des idées en expériences belles et fonctionnelles.",
        'hero.viewWork': 'Voir mes projets',
        'hero.getInTouch': 'Me contacter',

        // About
        'about.title': 'À propos',
        'about.description': "Je suis un jeune développeur de Pologne passionné par la création d'applications web innovantes. Mon parcours en programmation a commencé par curiosité et s'est transformé en une quête pour créer des applications belles, fonctionnelles et conviviales.",
        'about.technologies': 'Technologies et outils',
        'about.yearsOld': 'ans',
        'about.projects': 'Projets',
        'about.passion': 'Passion pour la programmation',

        // Projects
        'projects.title': 'Mes projets',
        'projects.liveDemo': 'Démo en direct',
        'projects.viewCode': 'Voir le code',
        'projects.collaborate': 'Vous souhaitez voir plus de projets ou collaborer sur quelque chose de génial ?',
        'projects.workTogether': 'Travaillons ensemble',
        'projects.portfolio.description': '(Ce site) Portfolio personnel présentant mes compétences et projets, construit avec React et Tailwind CSS.',
        'projects.twitchtts.description': 'Application web qui lit le chat Twitch avec synthèse vocale, incluant options de sourdine et mappage des pseudos.',
        'projects.flagmask.description': 'Bibliothèque CSS légère permettant de masquer du texte et des éléments avec des drapeaux via des classes simples.',
        'projects.snake.description': 'Jeu du serpent classique implémenté en C++ avec Raylib.',

        // Contact
        'contact.title': 'Contact',
        'contact.connector': 'et',
        'contact.title2': 'Travaillons ensemble',
        'contact.description': "Je suis toujours enthousiaste à l'idée de travailler sur de nouveaux projets passionnants et de collaborer avec des personnes formidables. Que vous ayez une idée, vouliez discuter ou simplement dire bonjour, écrivez-moi !",
        'contact.email': 'Email',
        'contact.location': 'Lieu',
        'contact.locationValue': 'Pologne',
        'contact.name': 'Nom',
        'contact.namePlaceholder': 'Jean Dupont',
        'contact.emailPlaceholder': 'jeandupont@domaine.fr',
        'contact.message': 'Message',
        'contact.messagePlaceholder': 'Parlez-moi de votre projet ou dites simplement bonjour !',
        'contact.sendMessage': 'Envoyer le message',

        // Footer
        'footer.text': '© 2025 Dawid | Portfolio. Tous droits réservés.',
        'footer.text2': 'Fait avec ❤️',
    },
    ru: {
        // Navigation
        'nav.home': 'Главная',
        'nav.about': 'Обо мне',
        'nav.projects': 'Проекты',
        'nav.contact': 'Контакты',

        // Hero
        'hero.greeting': 'Привет, я',
        'hero.description': 'Молодой разработчик из',
        'hero.country': 'Польши',
        'hero.subtitle': 'Увлекаюсь созданием современных веб-приложений и изучением новых технологий. Обожаю превращать идеи в красивые и функциональные решения.',
        'hero.viewWork': 'Посмотреть работы',
        'hero.getInTouch': 'Связаться со мной',

        // About
        'about.title': 'Обо мне',
        'about.description': 'Я молодой разработчик из Польши с любовью к созданию инновационных веб-приложений. Мой путь в программировании начался с любопытства и перерос в стремление создавать красивые, функциональные и удобные приложения.',
        'about.technologies': 'Технологии и инструменты',
        'about.yearsOld': 'лет',
        'about.projects': 'Проектов',
        'about.passion': 'Страсть к программированию',

        // Projects
        'projects.title': 'Мои проекты',
        'projects.liveDemo': 'Демо',
        'projects.viewCode': 'Посмотреть код',
        'projects.collaborate': 'Хотите увидеть больше проектов или поработать над чем-то крутым?',
        'projects.workTogether': 'Давайте работать вместе',
        'projects.portfolio.description': '(Этот сайт) Личное портфолио, демонстрирующее мои навыки и проекты, создано с помощью React и Tailwind CSS.',
        'projects.twitchtts.description': 'Веб-приложение, озвучивающее чат Twitch с функциями отключения и отображения псевдонимов пользователей.',
        'projects.flagmask.description': 'Легкая CSS-библиотека, позволяющая маскировать текст и элементы флагами стран с помощью простых CSS-классов.',
        'projects.snake.description': 'Классическая игра "змейка", реализованная на C++ с использованием Raylib.',

        // Contact
        'contact.title': 'Контакты',
        'contact.connector': 'и',
        'contact.title2': 'Давайте работать вместе',
        'contact.description': 'Мне всегда интересно работать над новыми проектами и сотрудничать с замечательными людьми. Если у вас есть идея, вы хотите обсудить что-то или просто поздороваться — напишите мне!',
        'contact.email': 'Электронная почта',
        'contact.location': 'Местоположение',
        'contact.locationValue': 'Польша',
        'contact.name': 'Имя',
        'contact.namePlaceholder': 'Иван Иванов',
        'contact.emailPlaceholder': 'ivanivanov@domen.ru',
        'contact.message': 'Сообщение',
        'contact.messagePlaceholder': 'Расскажите мне о вашем проекте или просто поздоровайтесь!',
        'contact.sendMessage': 'Отправить сообщение',

        // Footer
        'footer.text': '© 2025 Dawid | Портфолио. Все права защищены.',
        'footer.text2': 'Сделано с ❤️',
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    // Function to translate text based on the current language
    const getTranslation = (key) => {
        return translations[language][key];
    };

    // Function to change the current language
    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };

    const contextValue = {
        language,        // Current language
        changeLanguage,  // Function to switch languages
        getTranslation        // Function to translate text
    };

    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    );
};
