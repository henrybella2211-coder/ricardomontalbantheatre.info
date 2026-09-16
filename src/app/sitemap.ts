import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/guides",
    "/coils",
    "/pods",
    "/about",
    "/contact",
    "/privacy-policy",
    "/cookie-policy",
    "/terms",
    "/editorial-policy",
    "/age-notice",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date("2026-09-14"),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${SITE_URL}/guides/${article.slug}`,
    lastModified: new Date(article.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes];
}
