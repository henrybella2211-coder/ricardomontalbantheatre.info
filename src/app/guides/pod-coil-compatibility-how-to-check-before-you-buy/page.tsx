import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SpecBadge from "@/components/SpecBadge";
import JsonLd from "@/components/JsonLd";
import { getArticle } from "@/lib/articles";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const article = getArticle("pod-coil-compatibility-how-to-check-before-you-buy")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.excerpt,
  alternates: { canonical: `/guides/${article.slug}` },
  openGraph: {
    type: "article",
    title: article.title,
    description: article.excerpt,
    publishedTime: article.datePublished,
    modifiedTime: article.dateModified,
  },
};

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: { "@type": "Organization", name: `${SITE_NAME} editorial team` },
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: `${SITE_URL}/guides/${article.slug}`,
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd data={articleJsonLd} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Compatibility Guides", href: "/guides" },
          { label: article.title, href: `/guides/${article.slug}` },
        ]}
      />

      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-teal">
        {article.category}
      </span>
      <h1 className="mt-2 font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
        {article.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {article.specBadges.map((badge) => (
          <SpecBadge key={badge}>{badge}</SpecBadge>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-ink/55">
        <span>{article.readTime}</span>
        <span aria-hidden="true">·</span>
        <span>{article.lastUpdatedLabel}</span>
      </div>

      <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden border-2 border-ink/10">
        <Image
          src={article.heroImage}
          alt={article.heroAlt}
          fill
          priority
          sizes="(min-width: 768px) 720px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="prose-content mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink/90">
        <p>
          Replacement coils and pods are not universal. A coil head that fits
          one manufacturer&apos;s pod system very rarely fits another, even
          when the devices look similar or use a similar-sounding name. Buying
          the wrong one wastes money and, in some cases, damages the device or
          the coil itself. This guide sets out how to identify your
          device&apos;s coil family before you order a replacement, what the
          resistance number printed on a coil actually tells you, and how it
          relates to the e-liquid you&apos;re using.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Why coils aren&apos;t interchangeable between brands
        </h2>
        <p>
          Coil heads are built to a specific physical fitting, contact pin
          layout and internal chamber shape designed by one manufacturer for
          one device range. Two coils can share an identical resistance
          reading, say 0.6 ohms, and still be completely incompatible,
          because the threading, magnetic snap-fit or push-fit dimensions
          differ. Some manufacturers use the same coil family across several
          devices in their own range (so a coil built for one of their pod
          kits might fit an older tank from the same brand), but that
          compatibility is brand-specific, not universal. Packaging usually
          states which devices a coil is designed for; if a listing doesn&apos;t
          say your device by name, treat it as unconfirmed rather than
          assuming it will fit.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          How to identify your device&apos;s coil family
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Check the pod or tank itself.</strong> Many pods have a
            model code printed or moulded into the plastic, often on the
            underside or along the seam.
          </li>
          <li>
            <strong>Keep the original box.</strong> The coil family name
            (for example a series or generation number) is usually printed
            on the outer packaging of the device, not just the coil pack.
          </li>
          <li>
            <strong>Match by device generation, not just device name.</strong>{" "}
            Manufacturers sometimes change the coil fitting between
            generations of the same product line while keeping a similar
            name, so a newer version of a device you already own may not
            share coils with the original.
          </li>
          <li>
            <strong>Use the retailer&apos;s compatibility listing.</strong> UK
            vape shops, both online and on the high street, typically list
            which devices a coil pack is compatible with directly in the
            product description. If it isn&apos;t listed, ask before buying.
          </li>
          <li>
            <strong>Photograph the old coil before disposing of it.</strong>{" "}
            The resistance value and any model code are printed on the coil
            body and are the fastest way for shop staff to confirm a match.
          </li>
        </ul>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Reading resistance and what it means
        </h2>
        <p>
          The resistance value, measured in ohms (Ω), is printed on every
          coil and determines how much power it needs and what kind of
          vaping experience it produces. Lower resistance generally means
          more power passes through the coil, producing more vapour; higher
          resistance restricts power flow and tends to favour flavour and a
          tighter draw. These are manufacturer-stated design ranges rather
          than figures we have independently tested:
        </p>

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Resistance range</th>
                <th>Typical wattage</th>
                <th>Draw style</th>
                <th>Usually paired with</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono">1.0Ω–1.8Ω</td>
                <td className="font-mono">8–15W</td>
                <td>Tight MTL (mouth-to-lung)</td>
                <td>50/50 VG/PG or nic salt e-liquids</td>
              </tr>
              <tr>
                <td className="font-mono">0.6Ω–1.0Ω</td>
                <td className="font-mono">15–30W</td>
                <td>Restricted DTL</td>
                <td>60/40 VG/PG</td>
              </tr>
              <tr>
                <td className="font-mono">0.15Ω–0.5Ω</td>
                <td className="font-mono">40–80W+</td>
                <td>Open DTL (direct-to-lung)</td>
                <td>70/30 or higher VG e-liquid</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          The resistance value only tells you the power and draw style a
          coil is built for. It doesn&apos;t tell you what the coil is made
          from, which affects how it actually feels in use. For how
          Kanthal wire, mesh and ceramic builds differ in flavour, vapour,
          ramp-up time and lifespan, see our guide to{" "}
          <Link href="/guides/kanthal-mesh-ceramic-coils-whats-the-difference" className="text-teal underline hover:text-teal-dark">
            Kanthal, mesh and ceramic coils
          </Link>
          .
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          A worked example: matching coil to e-liquid
        </h2>
        <p>
          Say you have a pod kit fitted with a 1.0Ω coil, run around 12W, and
          it&apos;s designed for MTL vaping. Loading that pod with a thick,
          high-VG shortfill e-liquid is likely to leave you with weak flavour
          and a wet, gurgling pod, because the wicking material in a low-power
          MTL coil isn&apos;t built to pull thick, high-VG liquid quickly
          enough. The same coil paired with a thinner, higher-PG nic salt
          e-liquid is a closer match to what the coil was designed around. In
          our experience, this mismatch, rather than a faulty coil, is one of
          the more common reasons a “broken” pod turns out to be working
          exactly as intended, just with the wrong liquid in it. For the full
          logic behind VG/PG pairing and nicotine strength, see our guide to{" "}
          <Link href="/guides/coil-resistance-eliquid-ratio-explained" className="text-teal underline hover:text-teal-dark">
            coil resistance and e-liquid ratio
          </Link>
          .
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Pre-purchase checklist
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Confirm the exact device name and generation, not just the brand.</li>
          <li>Check the coil pack explicitly lists your device as compatible.</li>
          <li>Note the resistance value of your current coil for comparison.</li>
          <li>Check the pod or tank&apos;s maximum fill capacity: under the Tobacco and Related Products Regulations, any single tank, pod or cartridge holding nicotine e-liquid is capped at 2ml, whether refillable or pre-filled, while bottles of nicotine e-liquid are capped at 10ml.</li>
          <li>If you&apos;re unsure, take the old coil or the device itself into a vape shop for a visual match.</li>
        </ul>

        <p>
          If a pod is leaking rather than simply underperforming, the cause
          is often separate from coil compatibility. Our guide to{" "}
          <Link href="/guides/why-does-my-pod-leak-causes-and-fixes" className="text-teal underline hover:text-teal-dark">
            why pods leak and how to fix it
          </Link>{" "}
          covers seating, overfilling and seal wear in more detail. You can
          also browse device and coil families directly in our{" "}
          <Link href="/coils" className="text-teal underline hover:text-teal-dark">
            coil reference
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
