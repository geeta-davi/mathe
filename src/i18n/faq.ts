import type { Lang } from "./ui";

export interface QA {
  q: string;
  a: string;
}

/**
 * Support FAQ, per locale. Short Q&A pairs — kept as data, not MDX.
 *
 * ⚠️ Answers must describe shipped behaviour. The previous set explained duels,
 * ratings, league promotion and a `privacy@mathe.games` mailbox — none of which
 * exist. Support copy that describes imaginary features generates support load
 * and contradicts the store listing.
 */
export const faq: Record<Lang, QA[]> = {
  en: [
    { q: "Is mathe free?", a: "Yes. mathe is free to download and play on Android. You can climb every ladder without spending anything." },
    { q: "Which games are in mathe?", a: "Two today: Zip, a timed path puzzle where you trace one unbroken line through every cell in checkpoint order; and Cat & Seek, a logic grid where you place one cat per row, column and colour without any two touching. More mind games are on the way." },
    { q: "Do I need an account?", a: "No. Tap once to play as a guest and start straight away. Signing in with Google keeps your streak, XP and level progress if you change device." },
    { q: "How do streaks work?", a: "Finish any level on a given day and that day counts. Miss a day and the streak resets — there's no freeze or catch-up, which is what makes keeping it mean something." },
    { q: "How do hints work?", a: "A hint is worked out from the board in front of you, not from a fixed script. Each one advances your reasoning by a single step, so you still solve the level yourself." },
    { q: "Which devices are supported?", a: "Recent Android phones. An iOS version is on the way, and a tablet layout after that." },
    { q: "How do I delete my account or data?", a: "Email geetaapppublications@gmail.com from the address linked to your account with the subject \"Delete my mathe account\". Full details are on our account deletion page." },
  ],
  es: [
    { q: "¿mathe es gratis?", a: "Sí. mathe es gratis para descargar y jugar en Android. Puedes subir todas las escaleras sin gastar nada." },
    { q: "¿Qué juegos incluye mathe?", a: "Hoy dos: Zip, un puzle de trazado con tiempo en el que dibujas un único camino continuo por todas las casillas siguiendo los puntos en orden; y Cat & Seek, una cuadrícula lógica donde colocas un gato por fila, columna y color sin que dos queden juntos. Vienen más juegos mentales." },
    { q: "¿Necesito una cuenta?", a: "No. Toca una vez para jugar como invitado y empieza al momento. Iniciar sesión con Google conserva tu racha, tu XP y tu progreso si cambias de dispositivo." },
    { q: "¿Cómo funcionan las rachas?", a: "Termina cualquier nivel en un día y ese día cuenta. Si fallas un día, la racha se reinicia: no hay congelaciones ni recuperación, y eso es lo que hace que mantenerla signifique algo." },
    { q: "¿Cómo funcionan las pistas?", a: "Cada pista se calcula a partir del tablero que tienes delante, no de un guion fijo. Avanza tu razonamiento un solo paso, así que el nivel lo resuelves tú." },
    { q: "¿Qué dispositivos son compatibles?", a: "Teléfonos Android recientes. La versión para iOS está en camino, y después un diseño para tablet." },
    { q: "¿Cómo elimino mi cuenta o mis datos?", a: "Escribe a geetaapppublications@gmail.com desde la dirección vinculada a tu cuenta con el asunto «Eliminar mi cuenta de mathe». Tienes todos los detalles en nuestra página de eliminación de cuenta." },
  ],
  fr: [
    { q: "mathe est-il gratuit ?", a: "Oui. mathe est gratuit à télécharger et à jouer sur Android. Tu peux gravir toutes les échelles sans rien dépenser." },
    { q: "Quels jeux contient mathe ?", a: "Deux aujourd'hui : Zip, un casse-tête de tracé chronométré où tu dessines un seul chemin continu à travers toutes les cases en suivant les points dans l'ordre ; et Cat & Seek, une grille logique où tu places un chat par ligne, colonne et couleur sans que deux se touchent. D'autres jeux de réflexion arrivent." },
    { q: "Ai-je besoin d'un compte ?", a: "Non. Une touche pour jouer en invité et c'est parti. La connexion avec Google conserve ta série, ton XP et ta progression si tu changes d'appareil." },
    { q: "Comment fonctionnent les séries ?", a: "Termine n'importe quel niveau dans la journée et le jour est validé. Un jour manqué et la série repart de zéro — pas de gel ni de rattrapage, et c'est ce qui donne du sens au fait de la garder." },
    { q: "Comment fonctionnent les indices ?", a: "Un indice est calculé à partir du plateau que tu as sous les yeux, pas d'un script figé. Il fait avancer ton raisonnement d'une seule étape : tu résous le niveau toi-même." },
    { q: "Quels appareils sont pris en charge ?", a: "Les téléphones Android récents. Une version iOS arrive, puis une mise en page pour tablette." },
    { q: "Comment supprimer mon compte ou mes données ?", a: "Écris à geetaapppublications@gmail.com depuis l'adresse liée à ton compte, avec pour objet « Supprimer mon compte mathe ». Tous les détails sont sur notre page de suppression de compte." },
  ],
  de: [
    { q: "Ist mathe kostenlos?", a: "Ja. mathe ist auf Android kostenlos zum Herunterladen und Spielen. Du kannst jede Leiter erklimmen, ohne etwas auszugeben." },
    { q: "Welche Spiele enthält mathe?", a: "Heute zwei: Zip, ein Pfadrätsel auf Zeit, bei dem du einen einzigen durchgehenden Weg durch jedes Feld ziehst und die Punkte der Reihe nach triffst; und Cat & Seek, ein Logikgitter, in dem du eine Katze pro Zeile, Spalte und Farbe setzt, ohne dass zwei einander berühren. Weitere Denkspiele folgen." },
    { q: "Brauche ich ein Konto?", a: "Nein. Einmal tippen, als Gast spielen und sofort loslegen. Die Anmeldung mit Google bewahrt Serie, XP und Levelfortschritt, wenn du das Gerät wechselst." },
    { q: "Wie funktionieren Serien?", a: "Schließe an einem Tag ein beliebiges Level ab, dann zählt der Tag. Ein verpasster Tag setzt die Serie zurück — kein Einfrieren, kein Nachholen, und genau das macht sie wertvoll." },
    { q: "Wie funktionieren Hinweise?", a: "Ein Hinweis wird aus dem Spielfeld vor dir berechnet, nicht aus einem festen Skript. Er bringt dein Denken genau einen Schritt weiter — das Level löst du selbst." },
    { q: "Welche Geräte werden unterstützt?", a: "Aktuelle Android-Telefone. Eine iOS-Version ist unterwegs, danach ein Tablet-Layout." },
    { q: "Wie lösche ich mein Konto oder meine Daten?", a: "Schreib an geetaapppublications@gmail.com von der mit deinem Konto verknüpften Adresse, Betreff „Mein mathe-Konto löschen“. Alle Details stehen auf unserer Seite zur Kontolöschung." },
  ],
};
