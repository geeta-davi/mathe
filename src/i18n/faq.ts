import type { Lang } from "./ui";

export interface QA {
  q: string;
  a: string;
}

/** Support FAQ, per locale. Short Q&A pairs — kept as data, not MDX. */
export const faq: Record<Lang, QA[]> = {
  en: [
    { q: "Is mathe free?", a: "Yes. mathe is free to download and play on iOS and Android. Some optional cosmetic or convenience items may be offered as in-app purchases, but you can climb the ranks without spending anything." },
    { q: "How do duels work?", a: "You're matched with another player of similar rating and both answer the same 10 questions, seeded fairly. The faster, more accurate player wins the duel and gains rating." },
    { q: "What are leagues and ratings?", a: "Every duel adjusts your rating. Ratings group you into leagues — Bronze, Silver, Gold and beyond. Each week the top players in your league are promoted, and the lowest can drop." },
    { q: "Do I need an account?", a: "You can start learning right away. An account (a username, optionally an email) lets you save progress, keep your rating and play ranked duels across devices." },
    { q: "Which devices are supported?", a: "mathe runs on recent iPhone and Android phones. A tablet layout is on the way." },
    { q: "How do streaks work?", a: "Play at least one session a day to keep your streak alive and earn coins. Life gets busy — that's what streak freezes are for." },
    { q: "How do I delete my account or data?", a: "You can delete your account from the app settings, or email privacy@mathe.games and we'll help." },
  ],
  es: [
    { q: "¿mathe es gratis?", a: "Sí. mathe es gratis para descargar y jugar en iOS y Android. Algunos artículos cosméticos o de conveniencia pueden ofrecerse como compras dentro de la app, pero puedes subir de rango sin gastar nada." },
    { q: "¿Cómo funcionan los duelos?", a: "Te emparejamos con otro jugador de rango similar y ambos respondéis las mismas 10 preguntas, repartidas con justicia. Gana el duelo quien sea más rápido y preciso, y suma puntos." },
    { q: "¿Qué son las ligas y la puntuación?", a: "Cada duelo ajusta tu puntuación. La puntuación te agrupa en ligas: Bronce, Plata, Oro y más. Cada semana los mejores de tu liga ascienden y los últimos pueden descender." },
    { q: "¿Necesito una cuenta?", a: "Puedes empezar a aprender de inmediato. Una cuenta (un nombre de usuario y, opcionalmente, un correo) te permite guardar tu progreso, mantener tu puntuación y jugar duelos por rango en varios dispositivos." },
    { q: "¿Qué dispositivos son compatibles?", a: "mathe funciona en iPhone y teléfonos Android recientes. Pronto habrá una versión para tablet." },
    { q: "¿Cómo funcionan las rachas?", a: "Juega al menos una sesión al día para mantener tu racha y ganar monedas. La vida se complica: para eso están los congeladores de racha." },
    { q: "¿Cómo elimino mi cuenta o mis datos?", a: "Puedes eliminar tu cuenta desde los ajustes de la app o escribir a privacy@mathe.games y te ayudaremos." },
  ],
  fr: [
    { q: "mathe est-il gratuit ?", a: "Oui. mathe est gratuit à télécharger et à jouer sur iOS et Android. Certains objets cosmétiques ou pratiques peuvent être proposés en achats intégrés, mais tu peux grimper au classement sans rien dépenser." },
    { q: "Comment fonctionnent les duels ?", a: "Tu es associé à un joueur de classement similaire et vous répondez tous les deux aux mêmes 10 questions, tirées équitablement. Le joueur le plus rapide et le plus précis gagne le duel et des points." },
    { q: "Que sont les ligues et le classement ?", a: "Chaque duel ajuste ton classement. Le classement te répartit dans des ligues — Bronze, Argent, Or et au-delà. Chaque semaine, les meilleurs de ta ligue montent et les derniers peuvent descendre." },
    { q: "Ai-je besoin d'un compte ?", a: "Tu peux commencer à apprendre tout de suite. Un compte (un pseudo, éventuellement un e-mail) te permet de sauvegarder ta progression, de conserver ton classement et de jouer des duels classés sur plusieurs appareils." },
    { q: "Quels appareils sont pris en charge ?", a: "mathe fonctionne sur les iPhone et téléphones Android récents. Une mise en page pour tablette arrive bientôt." },
    { q: "Comment fonctionnent les séries ?", a: "Joue au moins une session par jour pour garder ta série active et gagner des pièces. La vie est chargée — c'est à ça que servent les gels de série." },
    { q: "Comment supprimer mon compte ou mes données ?", a: "Tu peux supprimer ton compte depuis les réglages de l'app, ou écrire à privacy@mathe.games et nous t'aiderons." },
  ],
  de: [
    { q: "Ist mathe kostenlos?", a: "Ja. mathe ist kostenlos zum Herunterladen und Spielen auf iOS und Android. Einige optionale kosmetische oder komfortable Extras können als In-App-Käufe angeboten werden, aber du kannst ohne Ausgaben im Rang aufsteigen." },
    { q: "Wie funktionieren Duelle?", a: "Du wirst mit einem Spieler ähnlicher Wertung gematcht und beide beantworten dieselben 10 Fragen, fair verteilt. Wer schneller und genauer ist, gewinnt das Duell und Wertungspunkte." },
    { q: "Was sind Ligen und Wertung?", a: "Jedes Duell passt deine Wertung an. Die Wertung teilt dich in Ligen ein — Bronze, Silber, Gold und darüber hinaus. Jede Woche steigen die Besten deiner Liga auf, die Letzten können absteigen." },
    { q: "Brauche ich ein Konto?", a: "Du kannst sofort mit dem Lernen loslegen. Ein Konto (ein Benutzername, optional eine E-Mail) speichert deinen Fortschritt, behält deine Wertung und lässt dich gewertete Duelle geräteübergreifend spielen." },
    { q: "Welche Geräte werden unterstützt?", a: "mathe läuft auf aktuellen iPhones und Android-Handys. Ein Tablet-Layout ist in Arbeit." },
    { q: "Wie funktionieren Serien?", a: "Spiel mindestens eine Session pro Tag, um deine Serie am Leben zu halten und Münzen zu verdienen. Der Alltag kommt dazwischen — dafür gibt es Serien-Freezes." },
    { q: "Wie lösche ich mein Konto oder meine Daten?", a: "Du kannst dein Konto in den App-Einstellungen löschen oder eine E-Mail an privacy@mathe.games schreiben — wir helfen dir." },
  ],
};
