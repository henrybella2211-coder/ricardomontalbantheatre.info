import Link from "next/link";
import JsonLd from "./JsonLd";
import { SITE_URL } from "@/lib/site";

type Crumb = {
  label: string;
  href: string;
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm">
      <JsonLd data={jsonLd} />
      <ol className="flex flex-wrap items-center gap-1.5 font-mono text-ink/60">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === items.length - 1 ? (
              <span className="text-ink" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-teal hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
