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
      title: "mathe — mental-math duels. Learn the trick, win the duel.",
      description:
        "Master mental-math shortcuts, then race real players in real-time 1v1 duels and climb the ranks. Free on iOS and Android.",
    },
    es: {
      title: "mathe — duelos de cálculo mental. Aprende el truco, gana el duelo.",
      description:
        "Domina atajos de cálculo mental y compite contra jugadores reales en duelos 1v1 en tiempo real subiendo de rango. Gratis en iOS y Android.",
    },
    fr: {
      title: "mathe — duels de calcul mental. Apprends l'astuce, gagne le duel.",
      description:
        "Maîtrise les astuces de calcul mental, puis affronte de vrais joueurs en duels 1c1 en temps réel et grimpe au classement. Gratuit sur iOS et Android.",
    },
    de: {
      title: "mathe — Kopfrechen-Duelle. Lern den Trick, gewinn das Duell.",
      description:
        "Meistere Kopfrechen-Tricks, tritt in Echtzeit-1-gegen-1-Duellen gegen echte Spieler an und steig im Rang auf. Kostenlos für iOS und Android.",
    },
  },
  features: {
    en: {
      title: "Features",
      description:
        "Tricks, real-time duels, ranked leagues, daily streaks and topic mastery — everything in mathe that makes mental math faster.",
    },
    es: {
      title: "Funciones",
      description:
        "Trucos, duelos en tiempo real, ligas por rango, rachas diarias y dominio por tema: todo lo que en mathe acelera tu cálculo mental.",
    },
    fr: {
      title: "Fonctionnalités",
      description:
        "Astuces, duels en temps réel, ligues classées, séries quotidiennes et maîtrise par thème — tout ce qui accélère ton calcul mental dans mathe.",
    },
    de: {
      title: "Funktionen",
      description:
        "Tricks, Echtzeit-Duelle, Ranglisten-Ligen, tägliche Serien und Themen-Meisterschaft — alles in mathe, das dein Kopfrechnen schneller macht.",
    },
  },
  how: {
    en: {
      title: "How it works",
      description: "Learn a trick, practice against the clock, duel a real player and climb the leagues — the mathe loop in four steps.",
    },
    es: {
      title: "Cómo funciona",
      description: "Aprende un truco, practica contra el reloj, batéte con un jugador real y sube de liga: el ciclo de mathe en cuatro pasos.",
    },
    fr: {
      title: "Comment ça marche",
      description: "Apprends une astuce, entraîne-toi contre la montre, affronte un vrai joueur et grimpe les ligues — la boucle mathe en quatre étapes.",
    },
    de: {
      title: "So funktioniert's",
      description: "Lern einen Trick, übe gegen die Uhr, duelliere dich mit echten Spielern und steig in den Ligen auf — die mathe-Schleife in vier Schritten.",
    },
  },
  download: {
    en: { title: "Download", description: "Get mathe free on iOS and Android. Play your first mental-math duel in under a minute." },
    es: { title: "Descargar", description: "Consigue mathe gratis en iOS y Android. Juega tu primer duelo de cálculo mental en menos de un minuto." },
    fr: { title: "Télécharger", description: "Obtiens mathe gratuitement sur iOS et Android. Joue ton premier duel de calcul mental en moins d'une minute." },
    de: { title: "Herunterladen", description: "Hol dir mathe kostenlos für iOS und Android. Spiel dein erstes Kopfrechen-Duell in unter einer Minute." },
  },
  support: {
    en: { title: "Support & FAQ", description: "Answers about duels, ratings, streaks, accounts and billing — plus how to reach the mathe team." },
    es: { title: "Soporte y FAQ", description: "Respuestas sobre duelos, puntuación, rachas, cuentas y pagos, y cómo contactar con el equipo de mathe." },
    fr: { title: "Aide et FAQ", description: "Réponses sur les duels, le classement, les séries, les comptes et la facturation — et comment joindre l'équipe mathe." },
    de: { title: "Hilfe & FAQ", description: "Antworten zu Duellen, Wertung, Serien, Konten und Abrechnung — und wie du das mathe-Team erreichst." },
  },
  contact: {
    en: { title: "Contact", description: "Questions, feedback or press enquiries — get in touch with the mathe team." },
    es: { title: "Contacto", description: "Preguntas, comentarios o prensa: ponte en contacto con el equipo de mathe." },
    fr: { title: "Contact", description: "Questions, retours ou demandes presse — contacte l'équipe mathe." },
    de: { title: "Kontakt", description: "Fragen, Feedback oder Presseanfragen — kontaktiere das mathe-Team." },
  },
  about: {
    en: { title: "About", description: "The team and mission behind mathe — making mental math a game worth playing every day." },
    es: { title: "Acerca de", description: "El equipo y la misión detrás de mathe: convertir el cálculo mental en un juego que vale la pena jugar cada día." },
    fr: { title: "À propos", description: "L'équipe et la mission derrière mathe — faire du calcul mental un jeu qui vaut la peine d'être joué chaque jour." },
    de: { title: "Über uns", description: "Das Team und die Mission hinter mathe — Kopfrechnen zu einem Spiel machen, das sich täglich lohnt." },
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
