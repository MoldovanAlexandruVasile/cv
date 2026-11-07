import type { Plugin } from "vite";
import { jobs } from "../src/data/jobs.ts";
import { profile } from "../src/data/profile.ts";
import { skillGroups } from "../src/data/skills.ts";

// Where the site is published, with a trailing slash. Set SITE_URL to build
// for another address (for example a custom domain).
const FALLBACK_SITE_URL = "https://moldovanalexandru.netlify.app/";

export const resolveSiteUrl = () => {
  const url = process.env.SITE_URL || FALLBACK_SITE_URL;
  return url.endsWith("/") ? url : `${url}/`;
};

// The Romanian version lives at ?lang=ro; English is the plain URL.
const romanianUrl = (siteUrl: string) => `${siteUrl}?lang=ro`;

// Placeholder in index.html, replaced with the site URL at build time.
const SITE_URL_TOKEN = "__SITE_URL__";

// schema.org Person, so search engines can show a profile rather than a plain link.
const personJsonLd = (siteUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  image: `${siteUrl}og-image.png`,
  jobTitle: "Senior Frontend Developer",
  worksFor: { "@type": "Organization", name: jobs[0].company },
  address: { "@type": "PostalAddress", addressLocality: "Târgu Mureș", addressCountry: "RO" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Babeș-Bolyai University" },
  knowsLanguage: ["ro", "en"],
  knowsAbout: [...new Set(skillGroups.flatMap((group) => group.skills))],
  sameAs: [profile.github],
});

// schema.org WebSite, so search results show the site's name.
const websiteJsonLd = (siteUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: profile.name,
  url: siteUrl,
  inLanguage: ["en", "ro"],
});

const robotsTxt = (siteUrl: string) => `User-agent: *
Allow: /

Sitemap: ${siteUrl}sitemap.xml
`;

// One entry per language, each listing the other as its alternate (hreflang).
const sitemapXml = (siteUrl: string, lastModified: string) => {
  const alternates = `
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}"/>
    <xhtml:link rel="alternate" hreflang="ro" href="${romanianUrl(siteUrl)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}"/>`;
  const entry = (loc: string) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastModified}</lastmod>${alternates}
  </url>`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entry(siteUrl)}
${entry(romanianUrl(siteUrl))}
</urlset>
`;
};

export const seo = (siteUrl: string): Plugin => ({
  name: "cv-seo",
  transformIndexHtml: {
    order: "pre",
    handler: (html) => ({
      html: html.replaceAll(SITE_URL_TOKEN, siteUrl),
      tags: [
        {
          tag: "script",
          attrs: { type: "application/ld+json" },
          children: JSON.stringify(personJsonLd(siteUrl)),
          injectTo: "head",
        },
        {
          tag: "script",
          attrs: { type: "application/ld+json" },
          children: JSON.stringify(websiteJsonLd(siteUrl)),
          injectTo: "head",
        },
      ],
    }),
  },
  generateBundle() {
    const today = new Date().toISOString().slice(0, 10);
    this.emitFile({ type: "asset", fileName: "robots.txt", source: robotsTxt(siteUrl) });
    this.emitFile({ type: "asset", fileName: "sitemap.xml", source: sitemapXml(siteUrl, today) });
  },
});
