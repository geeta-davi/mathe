/**
 * Site-wide constants.
 *
 * Single source of truth for the brand, store links and contact addresses.
 * Everything here must match reality: Google cross-checks the Play listing, the
 * Data safety declarations and these legal pages against each other, so a
 * mismatch is a rejection reason rather than a cosmetic bug.
 */

export const SITE_URL = "https://mathe.games";
export const SITE_NAME = "mathe";
/** Operator name used in the legal pages and the footer copyright. */
export const COMPANY = "mathe";
export const TAGLINE = "mind games · one puzzle a day";

/**
 * The Play package is `games.mathe` — NOT `games.mathe.app`, which was the
 * previous value here and produced a 404 store link.
 *
 * iOS is not built: there is no App Store listing, no iOS AdMob app and no
 * `GoogleService-Info.plist`. `ios: null` makes `StoreBadges` render a
 * "coming soon" badge rather than link to a listing that doesn't exist.
 */
export const STORE_LINKS = {
  ios: null as string | null,
  android: "https://play.google.com/store/apps/details?id=games.mathe",
};

/**
 * Socials are null rather than pointing at unclaimed handles — the footer skips
 * any null entry. Fill these in once the accounts actually exist.
 */
export const SOCIAL = {
  x: null as string | null,
  instagram: null as string | null,
  youtube: null as string | null,
};

/**
 * One real, monitored mailbox for everything. This is the address on the Play
 * Console listing and on the account-deletion page, so deletion requests and
 * support mail arrive somewhere that is actually read.
 */
export const CONTACT_EMAIL = "geetaapppublications@gmail.com";
export const SUPPORT_EMAIL = "geetaapppublications@gmail.com";

/**
 * Homepage proof points — deliberately NOT numeric.
 *
 * This previously advertised "250k+ players" and "12M+ duels", which were
 * invented: the app had no production release at all. Play publishes the real
 * install count, so fabricated figures are both false advertising and trivially
 * disprovable. Claims must stay true as the catalog grows.
 */
export const PROOF_POINT_KEYS = ["games", "levels", "free", "noAccount"] as const;
