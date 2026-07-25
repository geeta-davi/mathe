import type { Lang } from "./ui";

export type PageKey =
  | "home"
  | "features"
  | "how"
  | "download"
  | "support"
  | "contact"
  | "about"
  | "privacy"
  | "terms"
  | "cookies"
  | "delete-account";

type Meta = { title: string; description: string };

/**
 * Localized <title> + meta description per page. Titles omit the site name —
 * BaseLayout appends " · mathe" (except the home page, which sets its own).
 */
export const pageMeta: Record<PageKey, Record<Lang, Meta>> = {
  home: {
    en: {
      title: "mathe — mind games. Train your mind, one puzzle at a time.",
      description:
        "A growing collection of mind games — handcrafted logic puzzles with daily streaks, leaderboards and a ladder worth climbing. Free on Android.",
    },
    es: {
      title: "mathe — juegos mentales. Entrena tu mente, un puzle a la vez.",
      description:
        "Una colección creciente de juegos mentales: puzles de lógica hechos a mano con rachas diarias, clasificaciones y una escalera que merece la pena. Gratis en Android.",
    },
    fr: {
      title: "mathe — jeux de réflexion. Entraîne ton esprit, un casse-tête à la fois.",
      description:
        "Une collection grandissante de jeux de réflexion : des casse-têtes de logique faits main, avec séries quotidiennes, classements et une échelle à gravir. Gratuit sur Android.",
    },
    de: {
      title: "mathe — Denkspiele. Trainiere deinen Kopf, ein Rätsel nach dem anderen.",
      description:
        "Eine wachsende Sammlung von Denkspielen — handgemachte Logikrätsel mit täglichen Serien, Bestenlisten und einer Leiter, die sich lohnt. Kostenlos für Android.",
    },
  },
  features: {
    en: {
      title: "Features",
      description:
        "Handcrafted levels, daily streaks, leaderboards and hints that think — everything in mathe that turns a few minutes into a habit.",
    },
    es: {
      title: "Funciones",
      description:
        "Niveles hechos a mano, rachas diarias, clasificaciones y pistas que razonan: todo lo que en mathe convierte unos minutos en un hábito.",
    },
    fr: {
      title: "Fonctionnalités",
      description:
        "Des niveaux faits main, des séries quotidiennes, des classements et des indices qui réfléchissent — tout ce qui fait de quelques minutes une habitude.",
    },
    de: {
      title: "Funktionen",
      description:
        "Handgemachte Level, tägliche Serien, Bestenlisten und mitdenkende Hinweise — alles in mathe, das aus ein paar Minuten eine Gewohnheit macht.",
    },
  },
  how: {
    en: {
      title: "How it works",
      description: "Pick a game, solve the level, keep your streak and climb the ladder — the mathe loop in four steps.",
    },
    es: {
      title: "Cómo funciona",
      description: "Elige un juego, resuelve el nivel, mantén tu racha y sube la escalera: el ciclo de mathe en cuatro pasos.",
    },
    fr: {
      title: "Comment ça marche",
      description: "Choisis un jeu, résous le niveau, garde ta série et grimpe l'échelle — la boucle mathe en quatre étapes.",
    },
    de: {
      title: "So funktioniert's",
      description: "Wähle ein Spiel, löse das Level, halte deine Serie und erklimme die Leiter — die mathe-Schleife in vier Schritten.",
    },
  },
  download: {
    en: { title: "Download", description: "Get mathe free on Android. Solve your first level in under a minute. iOS is on the way." },
    es: { title: "Descargar", description: "Consigue mathe gratis en Android. Resuelve tu primer nivel en menos de un minuto. iOS está en camino." },
    fr: { title: "Télécharger", description: "Obtiens mathe gratuitement sur Android. Résous ton premier niveau en moins d'une minute. iOS arrive." },
    de: { title: "Herunterladen", description: "Hol dir mathe kostenlos für Android. Löse dein erstes Level in unter einer Minute. iOS kommt." },
  },
  support: {
    en: { title: "Support & FAQ", description: "Answers about levels, streaks, hints, leaderboards and accounts — plus how to reach the mathe team." },
    es: { title: "Soporte y FAQ", description: "Respuestas sobre niveles, rachas, pistas, clasificaciones y cuentas, y cómo contactar con el equipo de mathe." },
    fr: { title: "Aide et FAQ", description: "Réponses sur les niveaux, les séries, les indices, les classements et les comptes — et comment joindre l'équipe mathe." },
    de: { title: "Hilfe & FAQ", description: "Antworten zu Leveln, Serien, Hinweisen, Bestenlisten und Konten — und wie du das mathe-Team erreichst." },
  },
  contact: {
    en: { title: "Contact", description: "Questions, feedback or press enquiries — get in touch with the mathe team." },
    es: { title: "Contacto", description: "Preguntas, comentarios o prensa: ponte en contacto con el equipo de mathe." },
    fr: { title: "Contact", description: "Questions, retours ou demandes presse — contacte l'équipe mathe." },
    de: { title: "Kontakt", description: "Fragen, Feedback oder Presseanfragen — kontaktiere das mathe-Team." },
  },
  about: {
    en: { title: "About", description: "The idea behind mathe — making a few minutes of thinking a habit worth keeping." },
    es: { title: "Acerca de", description: "La idea detrás de mathe: convertir unos minutos de reflexión en un hábito que merece la pena." },
    fr: { title: "À propos", description: "L'idée derrière mathe — faire de quelques minutes de réflexion une habitude qui vaut la peine." },
    de: { title: "Über uns", description: "Die Idee hinter mathe — aus ein paar Minuten Nachdenken eine Gewohnheit machen, die sich lohnt." },
  },
  privacy: {
    en: { title: "Privacy Policy", description: "How mathe collects, uses and protects your data." },
    es: { title: "Política de privacidad", description: "Cómo mathe recopila, usa y protege tus datos." },
    fr: { title: "Politique de confidentialité", description: "Comment mathe collecte, utilise et protège tes données." },
    de: { title: "Datenschutzerklärung", description: "Wie mathe deine Daten erhebt, nutzt und schützt." },
  },
  terms: {
    en: { title: "Terms of Service", description: "The terms that govern your use of mathe." },
    es: { title: "Términos del servicio", description: "Los términos que rigen tu uso de mathe." },
    fr: { title: "Conditions d'utilisation", description: "Les conditions qui régissent ton utilisation de mathe." },
    de: { title: "Nutzungsbedingungen", description: "Die Bedingungen, die deine Nutzung von mathe regeln." },
  },
  cookies: {
    en: { title: "Cookie Policy", description: "How mathe uses cookies and similar technologies." },
    es: { title: "Política de cookies", description: "Cómo mathe usa cookies y tecnologías similares." },
    fr: { title: "Politique relative aux cookies", description: "Comment mathe utilise les cookies et technologies similaires." },
    de: { title: "Cookie-Richtlinie", description: "Wie mathe Cookies und ähnliche Technologien einsetzt." },
  },
  "delete-account": {
    en: { title: "Delete your account and data", description: "How to request deletion of your mathe account and the data linked to it." },
    es: { title: "Elimina tu cuenta y tus datos", description: "Cómo solicitar la eliminación de tu cuenta de mathe y de los datos asociados." },
    fr: { title: "Supprimer ton compte et tes données", description: "Comment demander la suppression de ton compte mathe et des données associées." },
    de: { title: "Konto und Daten löschen", description: "So beantragst du die Löschung deines mathe-Kontos und der damit verknüpften Daten." },
  },
};
