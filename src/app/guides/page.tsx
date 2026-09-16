import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import GuidesExplorer from "@/components/GuidesExplorer";
import { articles } from "@/lib/articles";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Compatibility Guides",
  description:
    "Every pod, coil and e-liquid compatibility guide on Coil & Cloud in one filterable reference archive, with spec badges instead of long excerpts.",
  alternates: { canonical: "/guides" },
};

export default async function GuidesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const initialQuery = params.q ?? "";

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Compatibility Guides", href: "/guides" }]} />

      <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
        Compatibility Guides
      </h1>
      <p className="mt-3 max-w-2xl text-ink/70">
        Reference articles on pod, coil and e-liquid compatibility from{" "}
        {SITE_NAME}. Filter by keyword or category below, no scrolling
        through pages of unrelated posts.
      </p>

      <div className="mt-8">
        <GuidesExplorer articles={articles} initialQuery={initialQuery} />
      </div>
    </div>
  );
}
