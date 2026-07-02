import { ui, defaultLang, languages, type Lang, type UIKey } from "./ui";

/** Read the active locale from the first path segment (/en/…, /fr/…). */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split("/");
  if ((languages as readonly string[]).includes(seg)) return seg as Lang;
  return defaultLang;
}

/** Translator bound to a locale, with English fallback for missing keys. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Given the current URL and a target locale, return the equivalent path in
 * that locale (used by the language switcher). Preserves the sub-path.
 */
export function switchLocalePath(url: URL, target: Lang): string {
  const segments = url.pathname.split("/").filter(Boolean);
  if ((languages as readonly string[]).includes(segments[0])) {
    segments[0] = target;
  } else {
    segments.unshift(target);
  }
  return "/" + segments.join("/") + "/";
}

/** getStaticPaths helper: one generated page per locale. */
export function localeStaticPaths() {
  return languages.map((locale) => ({ params: { locale } }));
}

/** Strip the locale prefix from a path, e.g. /fr/features/ -> features. */
export function pathWithoutLocale(url: URL): string {
  const segments = url.pathname.split("/").filter(Boolean);
  if ((languages as readonly string[]).includes(segments[0])) segments.shift();
  return segments.join("/");
}
