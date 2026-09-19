import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SpecBadge from "@/components/SpecBadge";
import JsonLd from "@/components/JsonLd";
import { getArticle } from "@/lib/articles";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const article = getArticle(
  "al-fakher-hypermax-prime-50k-pod-and-coil-compatibility-explained"
)!;

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
          The{" "}
          <a
            href="https://localsupplies.co.uk/collections/al-fakher-50k-hypermax-prime-prefilled-kits"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal underline hover:text-teal-dark"
          >
            Al Fakher 50K
          </a>{" "}
          kit is a rechargeable pod device built around what Al Fakher calls
          a &quot;Snap Dual&quot; module system. That name refers to how the
          replaceable part works: rather than a separate coil that pushes
          into a reusable pod shell, each snap-on pod arrives with its mesh
          coil already built in. This guide sets out exactly what that means
          for compatibility, where the pod&apos;s e-liquid capacity sits against
          UK limits, and how the whole design compares structurally to the
          closed and open pod systems covered elsewhere on this site.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          What &quot;Snap Dual&quot; actually means
        </h2>
        <p>
          On an open pod system, the pod or tank is a reusable shell and the
          coil is a separate part you push or screw in, replaced on its own
          every one to three weeks or so. The HyperMax Prime 50K doesn&apos;t
          work that way. Its Snap Dual pod is a single sealed module: the
          mesh coil sits inside the pod itself, manufactured and sealed as
          one unit, and it clicks (&quot;snaps&quot;) into the device body via
          magnetic contacts. There is no separate coil to pull out and
          replace inside the pod. When a pod&apos;s e-liquid runs out, or the
          built-in coil reaches the end of its life, the entire pod is
          discarded and swapped for a new one, while the rechargeable body
          itself is kept and reused.
        </p>
        <p>
          This is functionally the same coil-in-pod arrangement used by many
          closed, pre-filled pod kits, just applied to a device with
          refillable-style branding and a much higher rated puff count.
          The distinguishing feature isn&apos;t how the coil is built in, but
          that the battery is rechargeable rather than single-use, and the
          pod is bought and swapped separately rather than the whole device
          being thrown away.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Why the pods aren&apos;t interchangeable with other systems
        </h2>
        <p>
          Because the coil is built into the pod at manufacture, compatibility
          runs in one direction only: a Snap Dual pod is designed to fit the
          HyperMax Prime 50K&apos;s specific magnetic contact layout and pod bay
          dimensions, and nothing else. It won&apos;t click into another brand&apos;s
          pod bay, and another brand&apos;s closed pod won&apos;t fit this device
          either, even where the general shape looks similar. This is the
          same brand-specific fitting logic that applies across pod vaping
          generally, covered in more depth in our guide to{" "}
          <Link
            href="/guides/pod-coil-compatibility-how-to-check-before-you-buy"
            className="text-teal underline hover:text-teal-dark"
          >
            checking pod and coil compatibility before you buy
          </Link>
          . In practice this means the only replacement part to shop for is
          the pod itself, sold specifically for this device, rather than a
          coil and a pod bought as two separate line items.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Spec summary
        </h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Spec</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Device type</td>
                <td>Rechargeable pod kit, Snap Dual sealed pod module</td>
              </tr>
              <tr>
                <td>Battery</td>
                <td className="font-mono">1000mAh built-in, USB-C</td>
              </tr>
              <tr>
                <td>Charge time</td>
                <td className="font-mono">~35 minutes, manufacturer-stated</td>
              </tr>
              <tr>
                <td>Pod capacity</td>
                <td className="font-mono">Up to 2ml (UK regulatory cap)</td>
              </tr>
              <tr>
                <td>Nicotine strength</td>
                <td className="font-mono">Up to 20mg/ml salts; some lower-strength freebase</td>
              </tr>
              <tr>
                <td>Puff rating</td>
                <td>Up to 50,000, manufacturer estimate across device lifetime</td>
              </tr>
              <tr>
                <td>Typical kit price</td>
                <td className="font-mono">Under £15</td>
              </tr>
              <tr>
                <td>Typical replacement pod price</td>
                <td className="font-mono">Around £7–£8 each</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The &quot;up to 50,000 puffs&quot; figure is Al Fakher&apos;s own stated
          estimate for the device across its rechargeable body and multiple
          replacement pods used over its lifetime, not a figure from a
          single pod or something {SITE_NAME} has independently verified.
          Treat it as a manufacturer target rather than a confirmed number.
          The kit has drawn attention from UK vape reviewers since launch,
          though we haven&apos;t tested it ourselves and don&apos;t repeat or
          endorse any specific review score here.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          E-liquid capacity within UK limits
        </h2>
        <p>
          Each Snap Dual pod holds up to 2ml of e-liquid, which sits exactly
          at the regulatory ceiling for a single nicotine-containing tank,
          pod or cartridge under the Tobacco and Related Products
          Regulations (TRPR), regardless of a device&apos;s stated puff rating
          or battery size. Kits are typically bundled with a bottle of
          refill e-liquid at the UK&apos;s separate 10ml cap per bottle, and
          nicotine salt strengths go up to the UK&apos;s 20mg/ml cap, with some
          lower-strength freebase flavour variants also available. None of
          this is unique to the HyperMax Prime 50K: it&apos;s the same 2ml/10ml/
          20mg/ml framework that applies to closed pods generally, set out
          in more detail in our{" "}
          <Link href="/pods" className="text-teal underline hover:text-teal-dark">
            pod reference
          </Link>
          .
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          How this compares to closed and open pod systems
        </h2>
        <p>
          Structurally, the HyperMax Prime 50K sits firmly on the closed
          side of the closed-versus-open divide we cover in our guide to{" "}
          <Link
            href="/guides/replacing-your-coil-vs-replacing-the-whole-pod"
            className="text-teal underline hover:text-teal-dark"
          >
            replacing your coil versus replacing the whole pod
          </Link>
          . On an open system, you buy a coil (see our{" "}
          <Link href="/coils" className="text-teal underline hover:text-teal-dark">
            coil reference
          </Link>{" "}
          for the common resistance families) and refill e-liquid as two
          separate consumables, and the coil alone typically needs
          replacing every one to three weeks while the pod shell lasts much
          longer. On the HyperMax Prime 50K, as with any closed system,
          there&apos;s only one consumable to buy: the pod, which bundles a
          fresh coil and a fresh 2ml of e-liquid together every time. What
          sets it apart from many closed disposable-style devices isn&apos;t the
          pod mechanism itself but the rechargeable battery, which is also
          why it remained legal to sell in the UK after the 1 June 2025 ban
          on single-use disposable vapes; a device with a rechargeable
          battery and a replaceable pod falls outside that ban regardless of
          how high its puff rating is marketed.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Availability and replacement pods
        </h2>
        <p>
          Kits sold as the{" "}
          <a
            href="https://localsupplies.co.uk/collections/al-fakher-50k-hypermax-prime-prefilled-kits"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal underline hover:text-teal-dark"
          >
            Al Fakher HyperMax Prime 50K
          </a>{" "}
          are stocked by multiple established UK vape retailers, typically
          priced under £15 for the device plus one pod, across a wide range
          of fruit, menthol and mixed flavours (Blue Razz Lemonade, Lush
          Ice, Two Apple, Grape Mint, Peach Ice, Magic Love and Cool Mango
          among them, though exact ranges vary by retailer and aren&apos;t
          exhaustive). Once the first pod is used up, only the pod itself
          needs replacing, not the device body. Separately sold{" "}
          <a
            href="https://localsupplies.co.uk/collections/al-fakher-hypermax-prime-50k-prefilled-pods"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal underline hover:text-teal-dark"
          >
            Al Fakher 50K pods
          </a>{" "}
          run at around £7–£8 each, which is the ongoing running cost to
          budget for rather than the price of the kit itself.
        </p>

        <p>
          Because the coil is fixed inside the pod, there&apos;s no coil
          resistance to check or e-liquid ratio to match beyond what&apos;s
          already pre-filled by Al Fakher; compatibility here is simply a
          matter of buying pods listed specifically for this device rather
          than assuming any closed pod of a similar size will click in.
        </p>
      </div>
    </article>
  );
}
