import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import DeviceLookup from "@/components/DeviceLookup";
import SpecBadge from "@/components/SpecBadge";
import { articles } from "@/lib/articles";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Pod, coil and e-liquid compatibility reference`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

const browseBy = [
  {
    title: "By Device",
    description:
      "Start from what you own. Work out your device's coil family, pod part number and the wattage range it's designed to run.",
    href: "/guides",
    cta: "Browse device guides",
  },
  {
    title: "By Coil Type",
    description:
      "Sub-ohm mesh, MTL ceramic, or a standard round-wire head — see resistance ranges and what each type is built for.",
    href: "/coils",
    cta: "See coil reference",
  },
  {
    title: "By E-liquid Ratio",
    description:
      "VG/PG ratio and nicotine strength both need to match your hardware. Check what pairs with what before you refill.",
    href: "/pods",
    cta: "See pod & ratio reference",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b-2 border-ink/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-block border border-teal/40 bg-teal/10 px-2.5 py-1 font-mono text-xs font-medium uppercase tracking-wider text-teal">
                UK compatibility reference
              </span>
              <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">
                Look up your device. Get the right coil, pod and ratio.
              </h1>
              <p className="mt-4 max-w-xl text-lg text-ink/70">
                {SITE_NAME} is a reference-style site for adult vapers who
                already own a device and need to know which replacement pod
                or coil fits it, and why their current setup might be
                underperforming.
              </p>
              <div className="mt-6">
                <DeviceLookup />
              </div>
              <p className="mt-3 font-mono text-xs text-ink/45">
                Try: “0.6 ohm”, “MTL pod”, “nic salt” or a device family name.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-ink/10">
              <Image
                src="/images/coil-mod-red-black-hero.jpg"
                alt="Red and black box mod device standing upright on a dark surface"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-heading text-2xl font-bold text-ink">Browse by</h2>
        <p className="mt-2 max-w-2xl text-ink/70">
          Three ways into the same reference material, depending on what you
          already know.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {browseBy.map((item) => (
            <div
              key={item.title}
              className="flex flex-col border-2 border-ink/12 bg-white p-6 transition-colors hover:border-teal"
            >
              <h3 className="font-heading text-xl font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-ink/70">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="mt-4 inline-flex w-fit items-center gap-1.5 border-2 border-teal px-4 py-2 font-mono text-xs font-semibold text-teal transition-colors hover:bg-teal hover:text-bg"
              >
                {item.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-ink/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-2xl font-bold text-ink">
                Featured guides
              </h2>
              <p className="mt-2 max-w-2xl text-ink/70">
                Our three launch references, covering compatibility,
                troubleshooting and the resistance/ratio relationship.
              </p>
            </div>
            <Link
              href="/guides"
              className="border-2 border-ink/15 px-4 py-2 font-mono text-xs font-semibold text-ink/70 transition-colors hover:border-teal hover:text-teal"
            >
              View all guides →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/guides/${article.slug}`}
                className="group relative flex flex-col border-2 border-ink/12 bg-bg p-5 transition-colors hover:border-teal"
              >
                <span className="absolute -top-3 right-4">
                  <SpecBadge className="bg-white">
                    {article.specBadges[0]}
                  </SpecBadge>
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-teal">
                  {article.category}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-ink group-hover:text-teal">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-ink/70">{article.excerpt}</p>
                <div className="mt-4 flex items-center justify-between font-mono text-xs text-ink/50">
                  <span>{article.readTime}</span>
                  <span>{article.lastUpdatedLabel}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="border-2 border-amber/40 bg-amber/10 p-6 sm:p-8">
          <h2 className="font-heading text-xl font-bold text-ink">
            How we source specs
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/80">
            Every resistance, wattage and capacity figure on {SITE_NAME} is
            taken from manufacturer packaging, manufacturer datasheets or
            official product listings, and is clearly attributed as a
            manufacturer-stated specification rather than something we have
            independently lab-tested. Where a spec commonly varies by batch
            or region (nicotine strength limits, tank fill volumes), we say
            so rather than quoting a single fixed figure. Regulatory facts
            reference UK sources such as GOV.UK and the MHRA. See our{" "}
            <Link href="/editorial-policy" className="underline hover:text-amber-ink">
              editorial policy
            </Link>{" "}
            for how we research and update guides.
          </p>
        </div>
      </section>
    </>
  );
}
