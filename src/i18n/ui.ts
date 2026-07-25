/**
 * UI-string dictionaries. Keys are shared across every locale; the
 * `useTranslations` helper falls back to English for any missing key.
 * Long-form content (legal/about/FAQ) lives in Content Collections, not here.
 *
 * ⚠️ These strings describe a SHIPPED product. mathe is a catalog of mind games
 * — today Zip (a timed path puzzle) and Cat & Seek (a logic grid). There are no
 * duels, no ratings, no matchmaking, no leagues and no mental-math content; the
 * arithmetic build was removed in the 2026-07-07 rebuild. Copy promising any of
 * those is false advertising and contradicts the Play listing, so don't
 * reintroduce it — add a key when the feature actually ships.
 */

export const languages = ["en", "es", "fr", "de"] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = "en";

// Native names for the language switcher.
export const localeNames: Record<Lang, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
};

export const ui = {
  en: {
    "skip.content": "Skip to content",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "lang.label": "Language",

    "nav.features": "Features",
    "nav.how": "How it works",
    "nav.support": "Support",
    "nav.about": "About",
    "nav.download": "Download",

    "cta.getApp": "Get the app",
    "cta.appStore": "Coming soon to iOS",
    "cta.googlePlay": "Get it on Google Play",
    "cta.playFree": "Play free",

    "hero.badge": "Free · Android · iOS soon",
    "hero.title": "Train your mind.\nOne puzzle at a time.",
    "hero.subtitle":
      "mathe is a growing collection of mind games — handcrafted logic puzzles that sharpen focus, patience and pattern-spotting. Solve a level, keep your streak, climb the ladder.",
    "hero.note": "Free to play · start as a guest · new levels every week",

    "proof.games": "Two games, more coming",
    "proof.levels": "New levels every week",
    "proof.free": "Free to play",
    "proof.noAccount": "No account required",

    "features.title": "Built to make thinking a habit",
    "features.subtitle":
      "Short sessions, honest difficulty and a ladder worth climbing — the loop that keeps you coming back.",
    "feat.levels.title": "Handcrafted levels",
    "feat.levels.desc":
      "Every level is authored and machine-verified to have exactly one solution. No dead ends, no guesswork — just a curve that ramps as you climb.",
    "feat.streak.title": "Daily streaks",
    "feat.streak.desc":
      "One puzzle a day keeps the streak alive. Miss a day and it resets — that small stake is what turns practice into a habit.",
    "feat.leaderboard.title": "Leaderboards",
    "feat.leaderboard.desc":
      "Race the clock on every Zip level, then see where your total time lands you on the global ladder.",
    "feat.hints.title": "Hints that think",
    "feat.hints.desc":
      "Stuck? Hints are worked out from your actual board, not a canned script — each one moves your reasoning forward by exactly one step.",
    "feat.catalog.title": "A growing catalog",
    "feat.catalog.desc":
      "Zip and Cat & Seek today, more mind games on the way. Each new game arrives in the same ladder, streak and XP system.",
    "feat.free.title": "Free, and yours",
    "feat.free.desc":
      "Play as a guest in one tap, or sign in to keep your progress. Delete your account and data whenever you want.",

    "how.title": "Four steps, one habit",
    "how.subtitle": "A few minutes a day is the whole commitment.",
    "how.step1.title": "Pick a game",
    "how.step1.desc": "Zip's path puzzles or Cat & Seek's logic grid. Each has its own ladder to climb.",
    "how.step2.title": "Solve the level",
    "how.step2.desc": "Work it out at your own pace. Take a hint if you need one — there's no penalty for thinking.",
    "how.step3.title": "Keep the streak",
    "how.step3.desc": "Any level you finish counts for the day. Come back tomorrow and keep it running.",
    "how.step4.title": "Climb the ladder",
    "how.step4.desc": "Clear a level to unlock the next. Difficulty ramps, and the ladder tracks how far you've come.",

    "games.title": "Two games. One habit.",
    "games.subtitle":
      "Each mind game is its own ladder, with its own rules and its own kind of thinking. More on the way.",
    "game.zip.name": "Zip",
    "game.zip.tag": "Path puzzle · timed",
    "game.zip.desc":
      "Trace a single unbroken path through every cell, hitting the numbered checkpoints in order. The clock is running.",
    "game.catseek.name": "Cat & Seek",
    "game.catseek.tag": "Logic grid · two lives",
    "game.catseek.desc":
      "Place one cat per row, column and colour — and never let two sit side by side. No timer, but you only get two mistakes.",
    "game.soon.name": "More coming",
    "game.soon.tag": "In the works",
    "game.soon.desc":
      "New mind games join the catalog with the same ladder, streak and XP you already know.",

    "ladder.title": "A ladder worth climbing",
    "ladder.subtitle":
      "Levels unlock one at a time. Each is verified solvable and graded for difficulty, so the curve is real — never random.",
    "ladder.d1": "Gentle",
    "ladder.d2": "Tricky",
    "ladder.d3": "Hard",
    "ladder.d4": "Brutal",
    "ladder.note": "Clear a level to unlock the next",

    "ctaBanner.title": "Your next puzzle is waiting",
    "ctaBanner.subtitle": "Download mathe free and solve your first level in under a minute.",

    "footer.tagline": "Mind games, daily. Solve a level, keep your streak.",
    "footer.product": "Product",
    "footer.company": "Company",
    "footer.legal": "Legal",
    "footer.rights": "All rights reserved.",

    "link.features": "Features",
    "link.how": "How it works",
    "link.download": "Download",
    "link.support": "Support & FAQ",
    "link.contact": "Contact",
    "link.about": "About",
    "link.privacy": "Privacy Policy",
    "link.terms": "Terms of Service",
    "link.cookies": "Cookie Policy",
    "link.deleteAccount": "Delete your account",

    "notFound.title": "This page took a wrong turn",
    "notFound.desc": "That link doesn't lead anywhere. Let's get you back on track.",
    "notFound.cta": "Back to home",

    "download.title": "Download mathe",
    "download.subtitle": "Free on Android. iOS is on the way — scan the code or tap the badge to install.",
    "download.qr": "Scan to download",

    "support.title": "How can we help?",
    "support.subtitle": "Answers to the questions we hear most. Still stuck? Reach us any time.",
    "support.contactCta": "Contact support",

    "contact.title": "Get in touch",
    "contact.subtitle": "Questions, feedback or press — we'd love to hear from you.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.or": "Or email us directly at",
  },

  es: {
    "skip.content": "Saltar al contenido",
    "menu.open": "Abrir menú",
    "menu.close": "Cerrar menú",
    "lang.label": "Idioma",

    "nav.features": "Funciones",
    "nav.how": "Cómo funciona",
    "nav.support": "Soporte",
    "nav.about": "Acerca de",
    "nav.download": "Descargar",

    "cta.getApp": "Consigue la app",
    "cta.appStore": "Próximamente en iOS",
    "cta.googlePlay": "Disponible en Google Play",
    "cta.playFree": "Juega gratis",

    "hero.badge": "Gratis · Android · iOS pronto",
    "hero.title": "Entrena tu mente.\nUn puzle a la vez.",
    "hero.subtitle":
      "mathe es una colección creciente de juegos mentales: puzles de lógica hechos a mano que afinan la concentración, la paciencia y la vista para los patrones. Resuelve un nivel, mantén tu racha, sube por la escalera.",
    "hero.note": "Gratis · empieza como invitado · niveles nuevos cada semana",

    "proof.games": "Dos juegos, y más en camino",
    "proof.levels": "Niveles nuevos cada semana",
    "proof.free": "Gratis para jugar",
    "proof.noAccount": "Sin necesidad de cuenta",

    "features.title": "Hecho para convertir el pensar en hábito",
    "features.subtitle":
      "Sesiones cortas, dificultad honesta y una escalera que merece la pena subir: el bucle que te hace volver.",
    "feat.levels.title": "Niveles hechos a mano",
    "feat.levels.desc":
      "Cada nivel se diseña y se verifica automáticamente para que tenga una única solución. Sin callejones sin salida ni adivinanzas: solo una curva que sube contigo.",
    "feat.streak.title": "Rachas diarias",
    "feat.streak.desc":
      "Un puzle al día mantiene viva la racha. Si fallas un día, se reinicia: ese pequeño riesgo es lo que convierte la práctica en hábito.",
    "feat.leaderboard.title": "Clasificaciones",
    "feat.leaderboard.desc":
      "Compite contra el reloj en cada nivel de Zip y mira dónde te deja tu tiempo total en la clasificación global.",
    "feat.hints.title": "Pistas que razonan",
    "feat.hints.desc":
      "¿Atascado? Las pistas se calculan a partir de tu tablero real, no de un guion prefijado: cada una avanza tu razonamiento exactamente un paso.",
    "feat.catalog.title": "Un catálogo que crece",
    "feat.catalog.desc":
      "Hoy Zip y Cat & Seek, y más juegos mentales en camino. Cada juego nuevo llega con la misma escalera, racha y XP.",
    "feat.free.title": "Gratis, y tuyo",
    "feat.free.desc":
      "Juega como invitado con un toque o inicia sesión para conservar tu progreso. Elimina tu cuenta y tus datos cuando quieras.",

    "how.title": "Cuatro pasos, un hábito",
    "how.subtitle": "Unos minutos al día es todo el compromiso.",
    "how.step1.title": "Elige un juego",
    "how.step1.desc": "Los puzles de trazado de Zip o la cuadrícula lógica de Cat & Seek. Cada uno tiene su escalera.",
    "how.step2.title": "Resuelve el nivel",
    "how.step2.desc": "Tómate tu tiempo. Usa una pista si la necesitas: pensar nunca se penaliza.",
    "how.step3.title": "Mantén la racha",
    "how.step3.desc": "Cualquier nivel que termines cuenta para el día. Vuelve mañana y sigue sumando.",
    "how.step4.title": "Sube la escalera",
    "how.step4.desc": "Supera un nivel para desbloquear el siguiente. La dificultad sube y la escalera registra tu avance.",

    "games.title": "Dos juegos. Un hábito.",
    "games.subtitle":
      "Cada juego mental es su propia escalera, con sus reglas y su forma de pensar. Y vienen más.",
    "game.zip.name": "Zip",
    "game.zip.tag": "Puzle de trazado · con tiempo",
    "game.zip.desc":
      "Traza un único camino continuo por todas las casillas, pasando por los puntos numerados en orden. El reloj corre.",
    "game.catseek.name": "Cat & Seek",
    "game.catseek.tag": "Cuadrícula lógica · dos vidas",
    "game.catseek.desc":
      "Coloca un gato por fila, columna y color, y nunca dejes que dos queden juntos. Sin reloj, pero solo tienes dos fallos.",
    "game.soon.name": "Más en camino",
    "game.soon.tag": "En preparación",
    "game.soon.desc":
      "Los nuevos juegos mentales llegan al catálogo con la misma escalera, racha y XP que ya conoces.",

    "ladder.title": "Una escalera que merece la pena",
    "ladder.subtitle":
      "Los niveles se desbloquean de uno en uno. Cada uno está verificado y graduado por dificultad, así que la curva es real, nunca aleatoria.",
    "ladder.d1": "Suave",
    "ladder.d2": "Con truco",
    "ladder.d3": "Difícil",
    "ladder.d4": "Brutal",
    "ladder.note": "Supera un nivel para desbloquear el siguiente",

    "ctaBanner.title": "Tu próximo puzle te espera",
    "ctaBanner.subtitle": "Descarga mathe gratis y resuelve tu primer nivel en menos de un minuto.",

    "footer.tagline": "Juegos mentales, cada día. Resuelve un nivel, mantén tu racha.",
    "footer.product": "Producto",
    "footer.company": "Empresa",
    "footer.legal": "Legal",
    "footer.rights": "Todos los derechos reservados.",

    "link.features": "Funciones",
    "link.how": "Cómo funciona",
    "link.download": "Descargar",
    "link.support": "Soporte y FAQ",
    "link.contact": "Contacto",
    "link.about": "Acerca de",
    "link.privacy": "Política de privacidad",
    "link.terms": "Términos del servicio",
    "link.cookies": "Política de cookies",
    "link.deleteAccount": "Elimina tu cuenta",

    "notFound.title": "Esta página se ha perdido",
    "notFound.desc": "Ese enlace no lleva a ninguna parte. Vamos a devolverte al camino.",
    "notFound.cta": "Volver al inicio",

    "download.title": "Descarga mathe",
    "download.subtitle": "Gratis en Android. iOS está en camino: escanea el código o toca el botón para instalar.",
    "download.qr": "Escanea para descargar",

    "support.title": "¿Cómo podemos ayudarte?",
    "support.subtitle": "Respuestas a las preguntas más frecuentes. ¿Sigues atascado? Escríbenos cuando quieras.",
    "support.contactCta": "Contactar con soporte",

    "contact.title": "Ponte en contacto",
    "contact.subtitle": "Preguntas, comentarios o prensa: nos encantará leerte.",
    "contact.name": "Nombre",
    "contact.email": "Correo electrónico",
    "contact.message": "Mensaje",
    "contact.send": "Enviar mensaje",
    "contact.or": "O escríbenos directamente a",
  },

  fr: {
    "skip.content": "Aller au contenu",
    "menu.open": "Ouvrir le menu",
    "menu.close": "Fermer le menu",
    "lang.label": "Langue",

    "nav.features": "Fonctionnalités",
    "nav.how": "Comment ça marche",
    "nav.support": "Assistance",
    "nav.about": "À propos",
    "nav.download": "Télécharger",

    "cta.getApp": "Obtenir l'app",
    "cta.appStore": "Bientôt sur iOS",
    "cta.googlePlay": "Disponible sur Google Play",
    "cta.playFree": "Jouer gratuitement",

    "hero.badge": "Gratuit · Android · iOS bientôt",
    "hero.title": "Entraîne ton esprit.\nUn casse-tête à la fois.",
    "hero.subtitle":
      "mathe est une collection grandissante de jeux de réflexion : des casse-têtes de logique faits main qui aiguisent la concentration, la patience et le sens du motif. Résous un niveau, garde ta série, grimpe l'échelle.",
    "hero.note": "Gratuit · commence en invité · de nouveaux niveaux chaque semaine",

    "proof.games": "Deux jeux, et d'autres à venir",
    "proof.levels": "De nouveaux niveaux chaque semaine",
    "proof.free": "Gratuit",
    "proof.noAccount": "Sans compte obligatoire",

    "features.title": "Conçu pour faire de la réflexion une habitude",
    "features.subtitle":
      "Des sessions courtes, une difficulté honnête et une échelle qui vaut la montée — la boucle qui te fait revenir.",
    "feat.levels.title": "Des niveaux faits main",
    "feat.levels.desc":
      "Chaque niveau est conçu puis vérifié automatiquement pour n'avoir qu'une seule solution. Pas d'impasse, pas de devinette — juste une courbe qui monte avec toi.",
    "feat.streak.title": "Séries quotidiennes",
    "feat.streak.desc":
      "Un casse-tête par jour garde la série en vie. Un jour manqué et elle repart de zéro : ce petit enjeu transforme la pratique en habitude.",
    "feat.leaderboard.title": "Classements",
    "feat.leaderboard.desc":
      "Cours contre la montre sur chaque niveau de Zip, puis vois où ton temps total te place au classement général.",
    "feat.hints.title": "Des indices qui réfléchissent",
    "feat.hints.desc":
      "Bloqué ? Les indices sont calculés à partir de ton plateau réel, pas d'un script figé : chacun fait avancer ton raisonnement d'exactement une étape.",
    "feat.catalog.title": "Un catalogue qui grandit",
    "feat.catalog.desc":
      "Zip et Cat & Seek aujourd'hui, d'autres jeux de réflexion en route. Chaque nouveau jeu arrive avec la même échelle, la même série et le même XP.",
    "feat.free.title": "Gratuit, et à toi",
    "feat.free.desc":
      "Joue en invité en un geste, ou connecte-toi pour conserver ta progression. Supprime ton compte et tes données quand tu veux.",

    "how.title": "Quatre étapes, une habitude",
    "how.subtitle": "Quelques minutes par jour, c'est tout l'engagement.",
    "how.step1.title": "Choisis un jeu",
    "how.step1.desc": "Les tracés de Zip ou la grille logique de Cat & Seek. Chacun a son échelle.",
    "how.step2.title": "Résous le niveau",
    "how.step2.desc": "Prends ton temps. Utilise un indice si besoin — réfléchir n'est jamais pénalisé.",
    "how.step3.title": "Garde la série",
    "how.step3.desc": "N'importe quel niveau terminé compte pour la journée. Reviens demain et poursuis.",
    "how.step4.title": "Grimpe l'échelle",
    "how.step4.desc": "Termine un niveau pour débloquer le suivant. La difficulté monte, et l'échelle suit ton parcours.",

    "games.title": "Deux jeux. Une habitude.",
    "games.subtitle":
      "Chaque jeu de réflexion est sa propre échelle, avec ses règles et sa façon de penser. D'autres arrivent.",
    "game.zip.name": "Zip",
    "game.zip.tag": "Casse-tête de tracé · chronométré",
    "game.zip.desc":
      "Trace un seul chemin continu à travers toutes les cases, en passant par les points numérotés dans l'ordre. Le chrono tourne.",
    "game.catseek.name": "Cat & Seek",
    "game.catseek.tag": "Grille logique · deux vies",
    "game.catseek.desc":
      "Place un chat par ligne, colonne et couleur — et ne laisse jamais deux chats côte à côte. Pas de chrono, mais seulement deux erreurs.",
    "game.soon.name": "D'autres arrivent",
    "game.soon.tag": "En préparation",
    "game.soon.desc":
      "Les nouveaux jeux rejoignent le catalogue avec l'échelle, la série et l'XP que tu connais déjà.",

    "ladder.title": "Une échelle qui vaut la montée",
    "ladder.subtitle":
      "Les niveaux se débloquent un par un. Chacun est vérifié et noté en difficulté, donc la courbe est réelle — jamais aléatoire.",
    "ladder.d1": "Doux",
    "ladder.d2": "Retors",
    "ladder.d3": "Difficile",
    "ladder.d4": "Brutal",
    "ladder.note": "Termine un niveau pour débloquer le suivant",

    "ctaBanner.title": "Ton prochain casse-tête t'attend",
    "ctaBanner.subtitle": "Télécharge mathe gratuitement et résous ton premier niveau en moins d'une minute.",

    "footer.tagline": "Des jeux de réflexion, chaque jour. Résous un niveau, garde ta série.",
    "footer.product": "Produit",
    "footer.company": "Entreprise",
    "footer.legal": "Mentions légales",
    "footer.rights": "Tous droits réservés.",

    "link.features": "Fonctionnalités",
    "link.how": "Comment ça marche",
    "link.download": "Télécharger",
    "link.support": "Assistance et FAQ",
    "link.contact": "Contact",
    "link.about": "À propos",
    "link.privacy": "Politique de confidentialité",
    "link.terms": "Conditions d'utilisation",
    "link.cookies": "Politique relative aux cookies",
    "link.deleteAccount": "Supprimer ton compte",

    "notFound.title": "Cette page s'est perdue",
    "notFound.desc": "Ce lien ne mène nulle part. On te remet sur la bonne voie.",
    "notFound.cta": "Retour à l'accueil",

    "download.title": "Télécharger mathe",
    "download.subtitle": "Gratuit sur Android. iOS arrive — scanne le code ou touche le bouton pour installer.",
    "download.qr": "Scanne pour télécharger",

    "support.title": "Comment pouvons-nous aider ?",
    "support.subtitle": "Les réponses aux questions les plus fréquentes. Toujours bloqué ? Écris-nous.",
    "support.contactCta": "Contacter l'assistance",

    "contact.title": "Nous contacter",
    "contact.subtitle": "Questions, retours ou presse — on serait ravis de te lire.",
    "contact.name": "Nom",
    "contact.email": "E-mail",
    "contact.message": "Message",
    "contact.send": "Envoyer le message",
    "contact.or": "Ou écris-nous directement à",
  },

  de: {
    "skip.content": "Zum Inhalt springen",
    "menu.open": "Menü öffnen",
    "menu.close": "Menü schließen",
    "lang.label": "Sprache",

    "nav.features": "Funktionen",
    "nav.how": "So funktioniert's",
    "nav.support": "Hilfe",
    "nav.about": "Über uns",
    "nav.download": "Herunterladen",

    "cta.getApp": "App holen",
    "cta.appStore": "Bald für iOS",
    "cta.googlePlay": "Jetzt bei Google Play",
    "cta.playFree": "Kostenlos spielen",

    "hero.badge": "Kostenlos · Android · iOS bald",
    "hero.title": "Trainiere deinen Kopf.\nEin Rätsel nach dem anderen.",
    "hero.subtitle":
      "mathe ist eine wachsende Sammlung von Denkspielen — handgemachte Logikrätsel, die Konzentration, Geduld und den Blick für Muster schärfen. Löse ein Level, halte deine Serie, erklimme die Leiter.",
    "hero.note": "Kostenlos · starte als Gast · jede Woche neue Level",

    "proof.games": "Zwei Spiele, weitere folgen",
    "proof.levels": "Jede Woche neue Level",
    "proof.free": "Kostenlos spielbar",
    "proof.noAccount": "Kein Konto nötig",

    "features.title": "Gemacht, damit Denken zur Gewohnheit wird",
    "features.subtitle":
      "Kurze Sessions, ehrliche Schwierigkeit und eine Leiter, die sich lohnt — die Schleife, die dich zurückbringt.",
    "feat.levels.title": "Handgemachte Level",
    "feat.levels.desc":
      "Jedes Level wird entworfen und maschinell geprüft, damit es genau eine Lösung hat. Keine Sackgassen, kein Raten — nur eine Kurve, die mit dir steigt.",
    "feat.streak.title": "Tägliche Serien",
    "feat.streak.desc":
      "Ein Rätsel am Tag hält die Serie am Leben. Ein verpasster Tag setzt sie zurück — genau dieser kleine Einsatz macht aus Übung eine Gewohnheit.",
    "feat.leaderboard.title": "Bestenlisten",
    "feat.leaderboard.desc":
      "Spiele in jedem Zip-Level gegen die Uhr und sieh, wo dich deine Gesamtzeit in der globalen Rangliste einordnet.",
    "feat.hints.title": "Hinweise, die mitdenken",
    "feat.hints.desc":
      "Feststeckt? Hinweise werden aus deinem tatsächlichen Spielfeld berechnet, nicht aus einem festen Skript — jeder bringt dein Denken genau einen Schritt weiter.",
    "feat.catalog.title": "Ein wachsender Katalog",
    "feat.catalog.desc":
      "Heute Zip und Cat & Seek, weitere Denkspiele sind unterwegs. Jedes neue Spiel kommt mit derselben Leiter, Serie und XP.",
    "feat.free.title": "Kostenlos, und deins",
    "feat.free.desc":
      "Spiele mit einem Tipp als Gast oder melde dich an, um deinen Fortschritt zu behalten. Lösche Konto und Daten jederzeit.",

    "how.title": "Vier Schritte, eine Gewohnheit",
    "how.subtitle": "Ein paar Minuten am Tag — mehr braucht es nicht.",
    "how.step1.title": "Wähle ein Spiel",
    "how.step1.desc": "Zips Pfadrätsel oder das Logikgitter von Cat & Seek. Jedes hat seine eigene Leiter.",
    "how.step2.title": "Löse das Level",
    "how.step2.desc": "Lass dir Zeit. Nimm einen Hinweis, wenn du einen brauchst — Nachdenken wird nie bestraft.",
    "how.step3.title": "Halte die Serie",
    "how.step3.desc": "Jedes abgeschlossene Level zählt für den Tag. Komm morgen wieder und mach weiter.",
    "how.step4.title": "Erklimme die Leiter",
    "how.step4.desc": "Schaffe ein Level, um das nächste freizuschalten. Die Schwierigkeit steigt, die Leiter zeigt deinen Weg.",

    "games.title": "Zwei Spiele. Eine Gewohnheit.",
    "games.subtitle":
      "Jedes Denkspiel ist seine eigene Leiter, mit eigenen Regeln und eigener Denkweise. Weitere folgen.",
    "game.zip.name": "Zip",
    "game.zip.tag": "Pfadrätsel · auf Zeit",
    "game.zip.desc":
      "Zeichne einen einzigen durchgehenden Pfad durch jedes Feld und triff die nummerierten Punkte der Reihe nach. Die Uhr läuft.",
    "game.catseek.name": "Cat & Seek",
    "game.catseek.tag": "Logikgitter · zwei Leben",
    "game.catseek.desc":
      "Setze eine Katze pro Zeile, Spalte und Farbe — und lass nie zwei nebeneinander sitzen. Keine Uhr, aber nur zwei Fehler.",
    "game.soon.name": "Mehr in Arbeit",
    "game.soon.tag": "In Vorbereitung",
    "game.soon.desc":
      "Neue Denkspiele kommen mit derselben Leiter, Serie und XP in den Katalog, die du schon kennst.",

    "ladder.title": "Eine Leiter, die sich lohnt",
    "ladder.subtitle":
      "Level schalten sich einzeln frei. Jedes ist auf Lösbarkeit geprüft und nach Schwierigkeit bewertet — die Kurve ist echt, nie zufällig.",
    "ladder.d1": "Sanft",
    "ladder.d2": "Kniffelig",
    "ladder.d3": "Schwer",
    "ladder.d4": "Brutal",
    "ladder.note": "Schaffe ein Level, um das nächste freizuschalten",

    "ctaBanner.title": "Dein nächstes Rätsel wartet",
    "ctaBanner.subtitle": "Lade mathe kostenlos und löse dein erstes Level in unter einer Minute.",

    "footer.tagline": "Denkspiele, täglich. Löse ein Level, halte deine Serie.",
    "footer.product": "Produkt",
    "footer.company": "Unternehmen",
    "footer.legal": "Rechtliches",
    "footer.rights": "Alle Rechte vorbehalten.",

    "link.features": "Funktionen",
    "link.how": "So funktioniert's",
    "link.download": "Herunterladen",
    "link.support": "Hilfe & FAQ",
    "link.contact": "Kontakt",
    "link.about": "Über uns",
    "link.privacy": "Datenschutzerklärung",
    "link.terms": "Nutzungsbedingungen",
    "link.cookies": "Cookie-Richtlinie",
    "link.deleteAccount": "Konto löschen",

    "notFound.title": "Diese Seite hat sich verlaufen",
    "notFound.desc": "Dieser Link führt ins Leere. Zurück auf den richtigen Weg.",
    "notFound.cta": "Zur Startseite",

    "download.title": "mathe herunterladen",
    "download.subtitle": "Kostenlos für Android. iOS kommt — scanne den Code oder tippe auf den Button.",
    "download.qr": "Zum Herunterladen scannen",

    "support.title": "Wie können wir helfen?",
    "support.subtitle": "Antworten auf die häufigsten Fragen. Immer noch unklar? Schreib uns jederzeit.",
    "support.contactCta": "Support kontaktieren",

    "contact.title": "Kontakt aufnehmen",
    "contact.subtitle": "Fragen, Feedback oder Presse — wir freuen uns von dir zu hören.",
    "contact.name": "Name",
    "contact.email": "E-Mail",
    "contact.message": "Nachricht",
    "contact.send": "Nachricht senden",
    "contact.or": "Oder schreib uns direkt an",
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
