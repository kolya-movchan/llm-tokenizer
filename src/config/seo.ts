export interface SEOProps {
  title: string;
  description: string;
}

export interface PageSEOConfig {
  [key: string]: SEOProps;
}

// Base URL for your website
export const BASE_URL = "https://your-domain.com";

// Available locales
export const locales = [
  "en",
  "fr",
  "it",
  "de",
  "es",
  "pt",
  "pl",
  "el",
  "ja",
  "tr",
  "kr",
  "ar",
] as const;

export const defaultLocale = "en" as Locale;
export type Locale = (typeof locales)[number];

// Helper function to get SEO props for a specific page and locale
export function getSEOProps(
  page: string,
  locale: Locale = defaultLocale
): SEOProps {
  return (
    seoConfig[page]?.[locale] ||
    seoConfig[page]?.[defaultLocale] ||
    seoConfig["home"][defaultLocale]
  );
}

// SEO configurations for different pages
export const seoConfig: Record<string, PageSEOConfig> = {
  home: {
    en: {
      title: "Welcome to Astro Basics",
      description:
        "A modern web framework for building fast websites with Astro",
    },
    es: {
      title: "Bienvenido a Astro Basics",
      description:
        "Un framework web moderno para construir sitios web rápidos con Astro",
    },
    // Add other locales here...
  },
  // Add other pages here...
};
