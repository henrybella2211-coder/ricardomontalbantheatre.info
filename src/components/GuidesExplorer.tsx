"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import SpecBadge from "./SpecBadge";

const categories = ["All", "Compatibility", "Troubleshooting", "Specifications"] as const;

export default function GuidesExplorer({
  articles,
  initialQuery = "",
}: {
  articles: Article[];
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory = category === "All" || article.category === category;
      if (!matchesCategory) return false;
      if (!q) return true;
      const haystack = [
        article.title,
        article.excerpt,
        article.category,
        ...article.specBadges,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [articles, query, category]);

  return (
    <div>
      <div className="flex flex-col gap-4 border-2 border-ink/10 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <label htmlFor="guide-search" className="sr-only">
          Filter compatibility guides
        </label>
        <input
          id="guide-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Filter by device, coil type, e-liquid ratio..."
          className="w-full rounded-none border-2 border-ink/15 bg-bg px-3 py-2 font-mono text-sm text-ink placeholder:text-ink/40 focus-visible:border-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal sm:max-w-xs"
        />
        <div
          role="group"
          aria-label="Filter by category"
          className="flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              aria-pressed={category === cat}
              className={`rounded-none border-2 px-3 py-1.5 font-mono text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal ${
                category === cat
                  ? "border-teal bg-teal text-bg"
                  : "border-ink/15 bg-transparent text-ink/70 hover:border-teal hover:text-teal"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 font-mono text-xs text-ink/50" aria-live="polite">
        {filtered.length} of {articles.length} guide{articles.length === 1 ? "" : "s"} shown
      </p>

      {filtered.length === 0 ? (
        <p className="mt-8 border-2 border-dashed border-ink/15 p-8 text-center text-ink/60">
          No guides match that filter. Try a broader term such as “coil”,
          “leak” or “ratio”.
        </p>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <Link
              key={article.slug}
              href={`/guides/${article.slug}`}
              className="group relative flex flex-col border-2 border-ink/12 bg-white p-5 transition-colors hover:border-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              <span className="absolute -top-3 right-4">
                <SpecBadge className="bg-bg">{article.specBadges[0]}</SpecBadge>
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-teal">
                {article.category}
              </span>
              <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-ink group-hover:text-teal">
                {article.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {article.specBadges.map((badge) => (
                  <SpecBadge key={badge}>{badge}</SpecBadge>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between font-mono text-xs text-ink/50">
                <span>{article.readTime}</span>
                <span>{article.lastUpdatedLabel}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
