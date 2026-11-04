/**
 * Main theme configuration.
 *
 * `url` is the deployment origin. For GitHub Pages project sites, keep the
 * repository name in `basePath` (for example `/my-blog`). Use `/` for custom
 * domains and `<username>.github.io` repositories.
 */
export const SITE = {
  title: "Bento Blog",
  description: "A bento-style technical archive built with Astro.",
  author: "Your Name",
  language: "ko",
  locale: "ko-KR",
  url: "https://champa-champei.github.io",
  basePath: "/notion-like/blog",
  brand: {
    name: "bento",
    accent: "blog",
  },
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/champa-champei/notion-like/blog",
    },
    {
      label: "RSS",
      href: "/rss.xml",
    },
  ],
  storagePrefix: "notion-like",
  features: {
    transitions: true,
  },
} as const;

export const GENERATE_SLUG_FROM_TITLE = true;

// Named exports keep imports concise throughout the theme.
export const SITE_TITLE = SITE.title;
export const SITE_DESCRIPTION = SITE.description;
export const TRANSITION_API = SITE.features.transitions;
