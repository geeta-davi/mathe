/**
 * UI-string dictionaries. Keys are shared across every locale; the
 * `useTranslations` helper falls back to English for any missing key.
 * Long-form content (legal/about/FAQ) lives in Content Collections, not here.
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
    "cta.appStore": "Download on the App Store",
    "cta.googlePlay": "Get it on Google Play",
    "cta.playFree": "Play free",

    "hero.badge": "Free · iOS & Android",
    "hero.title": "Learn the trick.\nWin the duel.",
    "hero.subtitle":
      "mathe turns mental math into real-time 1v1 duels. Master pro shortcuts, then race real people and climb the ranks.",
    "hero.note": "Free to play · no ads to start · new tricks every week",

    "stats.players": "Players",
    "stats.duels": "Duels played",
    "stats.tricks": "Math tricks",
    "stats.countries": "Countries",

    "features.title": "Everything you need to get faster",
    "features.subtitle":
      "Bite-size lessons, fair duels and a ladder worth climbing — built to make mental math a habit.",
    "feat.learn.title": "Learn real tricks",
    "feat.learn.desc":
      "Short, visual lessons for the shortcuts pros use — multiply by 11, squares, percentages, profit & loss and more.",
    "feat.duel.title": "Real-time duels",
    "feat.duel.desc":
      "Go head-to-head in fast 1v1 matches. Same 10 questions, seeded fair — speed and accuracy decide it.",
    "feat.leagues.title": "Ranked leagues",
    "feat.leagues.desc":
      "Earn rating, climb from Bronze to Gold and beyond, and fight for promotion in weekly leagues.",
    "feat.streaks.title": "Daily streaks",
    "feat.streaks.desc":
      "Keep a streak alive, collect coins and rewards, and use streak freezes on the days life gets busy.",
    "feat.mastery.title": "Topic mastery",
    "feat.mastery.desc":
      "See your weak spots at a glance and track mastery per topic so you always know what to practice next.",
    "feat.fair.title": "Fair matchmaking",
    "feat.fair.desc":
      "Rating-based matching pairs you with a worthy opponent — every duel is close, every win is earned.",

    "how.title": "From zero to duel-ready in four steps",
    "how.subtitle": "The loop that makes you faster, one short session at a time.",
    "how.step1.title": "Learn",
    "how.step1.desc": "Pick a trick and watch a 60-second visual lesson that shows exactly how it works.",
    "how.step2.title": "Practice",
    "how.step2.desc": "Drill the trick against the clock until the shortcut becomes second nature.",
    "how.step3.title": "Duel",
    "how.step3.desc": "Get matched with a real player and race through ten questions — fastest sharp mind wins.",
    "how.step4.title": "Climb",
    "how.step4.desc": "Bank rating, level up your league and chase the top of the weekly leaderboard.",

    "tricks.title": "A growing library of shortcuts",
    "tricks.subtitle": "New tricks drop every week. Here are a few players love.",
    "trick.mul11": "Multiply by 11",
    "trick.mul11.ex": "32 × 11 = 352",
    "trick.squares": "Squares 1–50",
    "trick.squares.ex": "23² = 529",
    "trick.percent": "Percentages in your head",
    "trick.percent.ex": "18% of 250",
    "trick.profit": "Profit & loss",
    "trick.profit.ex": "cost ₹1,800 → +12%",
    "trick.cube": "Cube roots",
    "trick.cube.ex": "∛54,872 = 38",
    "trick.divis": "Divisibility checks",
    "trick.divis.ex": "is 4,281 ÷ 3?",

    "leagues.title": "A ladder worth climbing",
    "leagues.subtitle":
      "Every duel moves your rating. Finish the week high enough and you're promoted — drop too low and you fall.",
    "leagues.bronze": "Bronze",
    "leagues.silver": "Silver",
    "leagues.gold": "Gold",
    "leagues.diamond": "Diamond",
    "leagues.promo": "Top 8 promote each week",

    "ctaBanner.title": "Your next duel is waiting",
    "ctaBanner.subtitle": "Download mathe free and play your first match in under a minute.",

    "footer.tagline": "Mental math, gamified. Learn the trick, win the duel.",
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

    "notFound.title": "This page took a wrong turn",
    "notFound.desc": "The page you're looking for doesn't add up. Let's get you back on track.",
    "notFound.cta": "Back to home",

    "download.title": "Download mathe",
    "download.subtitle": "Free on iOS and Android. Scan the code or tap a badge to install.",
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

    "cta.getApp": "Descarga la app",
    "cta.appStore": "Descárgala en el App Store",
    "cta.googlePlay": "Consíguela en Google Play",
    "cta.playFree": "Juega gratis",

    "hero.badge": "Gratis · iOS y Android",
    "hero.title": "Aprende el truco.\nGana el duelo.",
    "hero.subtitle":
      "mathe convierte el cálculo mental en duelos 1v1 en tiempo real. Domina atajos de expertos y compite contra gente real subiendo de rango.",
    "hero.note": "Gratis · sin anuncios al empezar · nuevos trucos cada semana",

    "stats.players": "Jugadores",
    "stats.duels": "Duelos jugados",
    "stats.tricks": "Trucos de cálculo",
    "stats.countries": "Países",

    "features.title": "Todo lo que necesitas para ser más rápido",
    "features.subtitle":
      "Lecciones breves, duelos justos y una escalera que vale la pena subir: hecho para convertir el cálculo mental en un hábito.",
    "feat.learn.title": "Aprende trucos reales",
    "feat.learn.desc":
      "Lecciones visuales y cortas con los atajos que usan los expertos: multiplicar por 11, cuadrados, porcentajes, ganancias y pérdidas y más.",
    "feat.duel.title": "Duelos en tiempo real",
    "feat.duel.desc":
      "Enfréntate cara a cara en partidas 1v1 rápidas. Las mismas 10 preguntas, repartidas con justicia: la velocidad y la precisión deciden.",
    "feat.leagues.title": "Ligas por rango",
    "feat.leagues.desc":
      "Gana puntos, sube de Bronce a Oro y más allá, y lucha por el ascenso en las ligas semanales.",
    "feat.streaks.title": "Rachas diarias",
    "feat.streaks.desc":
      "Mantén tu racha, consigue monedas y recompensas y usa congeladores de racha los días complicados.",
    "feat.mastery.title": "Dominio por tema",
    "feat.mastery.desc":
      "Detecta tus puntos débiles de un vistazo y sigue tu dominio por tema para saber siempre qué practicar.",
    "feat.fair.title": "Emparejamiento justo",
    "feat.fair.desc":
      "El emparejamiento por rango te enfrenta a un rival a tu altura: cada duelo es reñido y cada victoria se gana.",

    "how.title": "De cero a listo para el duelo en cuatro pasos",
    "how.subtitle": "El ciclo que te hace más rápido, una sesión corta a la vez.",
    "how.step1.title": "Aprende",
    "how.step1.desc": "Elige un truco y mira una lección visual de 60 segundos que muestra cómo funciona.",
    "how.step2.title": "Practica",
    "how.step2.desc": "Entrena el truco contra el reloj hasta que el atajo se vuelva natural.",
    "how.step3.title": "Duela",
    "how.step3.desc": "Te emparejamos con un jugador real y corren por diez preguntas: gana la mente rápida y afilada.",
    "how.step4.title": "Asciende",
    "how.step4.desc": "Acumula puntos, sube de liga y persigue lo más alto de la clasificación semanal.",

    "tricks.title": "Una biblioteca de atajos que no para de crecer",
    "tricks.subtitle": "Nuevos trucos cada semana. Estos son algunos favoritos.",
    "trick.mul11": "Multiplicar por 11",
    "trick.mul11.ex": "32 × 11 = 352",
    "trick.squares": "Cuadrados 1–50",
    "trick.squares.ex": "23² = 529",
    "trick.percent": "Porcentajes de cabeza",
    "trick.percent.ex": "18% de 250",
    "trick.profit": "Ganancias y pérdidas",
    "trick.profit.ex": "costo ₹1.800 → +12%",
    "trick.cube": "Raíces cúbicas",
    "trick.cube.ex": "∛54.872 = 38",
    "trick.divis": "Reglas de divisibilidad",
    "trick.divis.ex": "¿4.281 ÷ 3?",

    "leagues.title": "Una escalera que vale la pena subir",
    "leagues.subtitle":
      "Cada duelo mueve tu puntuación. Termina la semana suficientemente arriba y asciendes; baja demasiado y desciendes.",
    "leagues.bronze": "Bronce",
    "leagues.silver": "Plata",
    "leagues.gold": "Oro",
    "leagues.diamond": "Diamante",
    "leagues.promo": "Los 8 primeros ascienden cada semana",

    "ctaBanner.title": "Tu próximo duelo te espera",
    "ctaBanner.subtitle": "Descarga mathe gratis y juega tu primera partida en menos de un minuto.",

    "footer.tagline": "Cálculo mental, gamificado. Aprende el truco, gana el duelo.",
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

    "notFound.title": "Esta página se equivocó de camino",
    "notFound.desc": "La página que buscas no cuadra. Volvamos al buen camino.",
    "notFound.cta": "Volver al inicio",

    "download.title": "Descarga mathe",
    "download.subtitle": "Gratis en iOS y Android. Escanea el código o toca una insignia para instalar.",
    "download.qr": "Escanea para descargar",

    "support.title": "¿Cómo podemos ayudarte?",
    "support.subtitle": "Respuestas a las preguntas más frecuentes. ¿Sigues atascado? Escríbenos cuando quieras.",
    "support.contactCta": "Contactar con soporte",

    "contact.title": "Ponte en contacto",
    "contact.subtitle": "Preguntas, comentarios o prensa: nos encantará saber de ti.",
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
    "nav.support": "Aide",
    "nav.about": "À propos",
    "nav.download": "Télécharger",

    "cta.getApp": "Télécharger l'app",
    "cta.appStore": "Télécharger sur l'App Store",
    "cta.googlePlay": "Disponible sur Google Play",
    "cta.playFree": "Jouer gratuitement",

    "hero.badge": "Gratuit · iOS et Android",
    "hero.title": "Apprends l'astuce.\nGagne le duel.",
    "hero.subtitle":
      "mathe transforme le calcul mental en duels 1c1 en temps réel. Maîtrise les astuces des pros, puis affronte de vrais joueurs et grimpe au classement.",
    "hero.note": "Gratuit · sans pub au début · de nouvelles astuces chaque semaine",

    "stats.players": "Joueurs",
    "stats.duels": "Duels joués",
    "stats.tricks": "Astuces de calcul",
    "stats.countries": "Pays",

    "features.title": "Tout pour devenir plus rapide",
    "features.subtitle":
      "Des leçons courtes, des duels équitables et une échelle qui vaut la peine d'être gravie — pour faire du calcul mental une habitude.",
    "feat.learn.title": "Apprends de vraies astuces",
    "feat.learn.desc":
      "Des leçons visuelles et brèves sur les raccourcis des pros : multiplier par 11, carrés, pourcentages, bénéfices et pertes, et plus encore.",
    "feat.duel.title": "Duels en temps réel",
    "feat.duel.desc":
      "Affronte un adversaire en 1c1 rapide. Les mêmes 10 questions, tirées équitablement — vitesse et précision font la différence.",
    "feat.leagues.title": "Ligues classées",
    "feat.leagues.desc":
      "Gagne des points, passe de Bronze à Or et au-delà, et joue la promotion dans les ligues hebdomadaires.",
    "feat.streaks.title": "Séries quotidiennes",
    "feat.streaks.desc":
      "Garde ta série active, récolte des pièces et des récompenses, et utilise des gels de série les jours chargés.",
    "feat.mastery.title": "Maîtrise par thème",
    "feat.mastery.desc":
      "Repère tes points faibles d'un coup d'œil et suis ta maîtrise par thème pour toujours savoir quoi travailler.",
    "feat.fair.title": "Matchmaking équitable",
    "feat.fair.desc":
      "L'appariement par classement te place face à un adversaire à ta hauteur : chaque duel est serré, chaque victoire méritée.",

    "how.title": "De zéro à prêt pour le duel en quatre étapes",
    "how.subtitle": "La boucle qui te rend plus rapide, une courte session à la fois.",
    "how.step1.title": "Apprends",
    "how.step1.desc": "Choisis une astuce et regarde une leçon visuelle de 60 secondes qui montre comment elle fonctionne.",
    "how.step2.title": "Entraîne-toi",
    "how.step2.desc": "Répète l'astuce contre la montre jusqu'à ce que le raccourci devienne un réflexe.",
    "how.step3.title": "Duel",
    "how.step3.desc": "Tu es associé à un vrai joueur pour dix questions — l'esprit le plus rapide et le plus vif l'emporte.",
    "how.step4.title": "Grimpe",
    "how.step4.desc": "Accumule des points, monte de ligue et vise le sommet du classement hebdomadaire.",

    "tricks.title": "Une bibliothèque d'astuces qui s'agrandit",
    "tricks.subtitle": "De nouvelles astuces chaque semaine. En voici quelques favorites.",
    "trick.mul11": "Multiplier par 11",
    "trick.mul11.ex": "32 × 11 = 352",
    "trick.squares": "Carrés 1–50",
    "trick.squares.ex": "23² = 529",
    "trick.percent": "Pourcentages de tête",
    "trick.percent.ex": "18 % de 250",
    "trick.profit": "Bénéfices et pertes",
    "trick.profit.ex": "coût ₹1 800 → +12 %",
    "trick.cube": "Racines cubiques",
    "trick.cube.ex": "∛54 872 = 38",
    "trick.divis": "Critères de divisibilité",
    "trick.divis.ex": "4 281 ÷ 3 ?",

    "leagues.title": "Une échelle qui vaut la peine d'être gravie",
    "leagues.subtitle":
      "Chaque duel fait bouger ton classement. Termine la semaine assez haut et tu montes ; descends trop bas et tu chutes.",
    "leagues.bronze": "Bronze",
    "leagues.silver": "Argent",
    "leagues.gold": "Or",
    "leagues.diamond": "Diamant",
    "leagues.promo": "Les 8 premiers montent chaque semaine",

    "ctaBanner.title": "Ton prochain duel t'attend",
    "ctaBanner.subtitle": "Télécharge mathe gratuitement et joue ta première partie en moins d'une minute.",

    "footer.tagline": "Le calcul mental, version jeu. Apprends l'astuce, gagne le duel.",
    "footer.product": "Produit",
    "footer.company": "Entreprise",
    "footer.legal": "Légal",
    "footer.rights": "Tous droits réservés.",

    "link.features": "Fonctionnalités",
    "link.how": "Comment ça marche",
    "link.download": "Télécharger",
    "link.support": "Aide et FAQ",
    "link.contact": "Contact",
    "link.about": "À propos",
    "link.privacy": "Politique de confidentialité",
    "link.terms": "Conditions d'utilisation",
    "link.cookies": "Politique relative aux cookies",

    "notFound.title": "Cette page a pris un mauvais virage",
    "notFound.desc": "La page que tu cherches ne tombe pas juste. Reprenons le bon chemin.",
    "notFound.cta": "Retour à l'accueil",

    "download.title": "Télécharger mathe",
    "download.subtitle": "Gratuit sur iOS et Android. Scanne le code ou touche un badge pour installer.",
    "download.qr": "Scanne pour télécharger",

    "support.title": "Comment pouvons-nous aider ?",
    "support.subtitle": "Les réponses aux questions les plus fréquentes. Toujours bloqué ? Écris-nous à tout moment.",
    "support.contactCta": "Contacter l'aide",

    "contact.title": "Nous contacter",
    "contact.subtitle": "Questions, retours ou presse — nous serions ravis d'avoir de tes nouvelles.",
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
    "cta.appStore": "Im App Store laden",
    "cta.googlePlay": "Bei Google Play holen",
    "cta.playFree": "Kostenlos spielen",

    "hero.badge": "Kostenlos · iOS & Android",
    "hero.title": "Lern den Trick.\nGewinn das Duell.",
    "hero.subtitle":
      "mathe macht aus Kopfrechnen echte 1-gegen-1-Duelle in Echtzeit. Meistere Profi-Tricks, tritt gegen echte Leute an und steig im Rang auf.",
    "hero.note": "Kostenlos · anfangs werbefrei · jede Woche neue Tricks",

    "stats.players": "Spieler",
    "stats.duels": "Gespielte Duelle",
    "stats.tricks": "Rechentricks",
    "stats.countries": "Länder",

    "features.title": "Alles, um schneller zu werden",
    "features.subtitle":
      "Kurze Lektionen, faire Duelle und eine Leiter, die sich lohnt — damit Kopfrechnen zur Gewohnheit wird.",
    "feat.learn.title": "Lern echte Tricks",
    "feat.learn.desc":
      "Kurze, visuelle Lektionen zu den Abkürzungen der Profis — mal 11, Quadratzahlen, Prozente, Gewinn & Verlust und mehr.",
    "feat.duel.title": "Duelle in Echtzeit",
    "feat.duel.desc":
      "Tritt in schnellen 1-gegen-1-Matches an. Dieselben 10 Fragen, fair verteilt — Tempo und Genauigkeit entscheiden.",
    "feat.leagues.title": "Ranglisten-Ligen",
    "feat.leagues.desc":
      "Sammle Wertung, steig von Bronze über Gold hinaus auf und kämpfe in Wochenligen um den Aufstieg.",
    "feat.streaks.title": "Tägliche Serien",
    "feat.streaks.desc":
      "Halte deine Serie am Leben, sammle Münzen und Belohnungen und nutze Serien-Freezes an stressigen Tagen.",
    "feat.mastery.title": "Themen-Meisterschaft",
    "feat.mastery.desc":
      "Erkenne deine Schwachstellen auf einen Blick und verfolge deine Meisterschaft pro Thema — so weißt du immer, was als Nächstes dran ist.",
    "feat.fair.title": "Faires Matchmaking",
    "feat.fair.desc":
      "Das wertungsbasierte Matching stellt dir einen ebenbürtigen Gegner gegenüber — jedes Duell ist knapp, jeder Sieg verdient.",

    "how.title": "In vier Schritten vom Start zum Duell",
    "how.subtitle": "Die Schleife, die dich schneller macht — eine kurze Session nach der anderen.",
    "how.step1.title": "Lernen",
    "how.step1.desc": "Wähl einen Trick und schau eine 60-Sekunden-Lektion, die genau zeigt, wie er funktioniert.",
    "how.step2.title": "Üben",
    "how.step2.desc": "Übe den Trick gegen die Uhr, bis die Abkürzung in Fleisch und Blut übergeht.",
    "how.step3.title": "Duellieren",
    "how.step3.desc": "Du wirst mit einem echten Spieler gematcht und rast durch zehn Fragen — der schnellste, klarste Kopf gewinnt.",
    "how.step4.title": "Aufsteigen",
    "how.step4.desc": "Sammle Wertung, steig in der Liga auf und jage die Spitze der Wochenrangliste.",

    "tricks.title": "Eine wachsende Sammlung an Abkürzungen",
    "tricks.subtitle": "Jede Woche neue Tricks. Hier ein paar Favoriten.",
    "trick.mul11": "Mal 11 rechnen",
    "trick.mul11.ex": "32 × 11 = 352",
    "trick.squares": "Quadratzahlen 1–50",
    "trick.squares.ex": "23² = 529",
    "trick.percent": "Prozente im Kopf",
    "trick.percent.ex": "18 % von 250",
    "trick.profit": "Gewinn & Verlust",
    "trick.profit.ex": "Kosten ₹1.800 → +12 %",
    "trick.cube": "Kubikwurzeln",
    "trick.cube.ex": "∛54.872 = 38",
    "trick.divis": "Teilbarkeitsregeln",
    "trick.divis.ex": "4.281 ÷ 3?",

    "leagues.title": "Eine Leiter, die sich lohnt",
    "leagues.subtitle":
      "Jedes Duell bewegt deine Wertung. Beende die Woche weit genug oben und du steigst auf — fällst du zu tief, geht's abwärts.",
    "leagues.bronze": "Bronze",
    "leagues.silver": "Silber",
    "leagues.gold": "Gold",
    "leagues.diamond": "Diamant",
    "leagues.promo": "Die Top 8 steigen jede Woche auf",

    "ctaBanner.title": "Dein nächstes Duell wartet",
    "ctaBanner.subtitle": "Lad mathe kostenlos herunter und spiel dein erstes Match in unter einer Minute.",

    "footer.tagline": "Kopfrechnen als Spiel. Lern den Trick, gewinn das Duell.",
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

    "notFound.title": "Diese Seite hat sich verrechnet",
    "notFound.desc": "Die gesuchte Seite geht nicht auf. Bringen wir dich zurück auf Kurs.",
    "notFound.cta": "Zurück zur Startseite",

    "download.title": "mathe herunterladen",
    "download.subtitle": "Kostenlos für iOS und Android. Scanne den Code oder tippe auf ein Badge zum Installieren.",
    "download.qr": "Zum Herunterladen scannen",

    "support.title": "Wie können wir helfen?",
    "support.subtitle": "Antworten auf die häufigsten Fragen. Noch Fragen? Schreib uns jederzeit.",
    "support.contactCta": "Support kontaktieren",

    "contact.title": "Kontakt aufnehmen",
    "contact.subtitle": "Fragen, Feedback oder Presse — wir freuen uns, von dir zu hören.",
    "contact.name": "Name",
    "contact.email": "E-Mail",
    "contact.message": "Nachricht",
    "contact.send": "Nachricht senden",
    "contact.or": "Oder schreib uns direkt an",
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
