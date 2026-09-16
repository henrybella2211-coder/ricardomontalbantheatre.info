import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SpecBadge from "@/components/SpecBadge";
import JsonLd from "@/components/JsonLd";
import { getArticle } from "@/lib/articles";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const article = getArticle("coil-resistance-eliquid-ratio-explained")!;

const faqs = [
  {
    question: "Can I use any e-liquid in a sub-ohm tank?",
    answer:
      "Sub-ohm coils are designed around thicker, higher-VG e-liquid. A very thin, high-PG liquid can flood a sub-ohm coil and lead to a harsh or wet hit, so it's worth matching the VG/PG ratio to the coil rather than assuming any bottle will do.",
  },
  {
    question: "Are nicotine salts only for MTL pods?",
    answer:
      "Nic salts are most commonly paired with higher-resistance MTL coils because they deliver nicotine smoothly at higher strengths without as much throat hit, which suits the lower-power, tighter-draw way MTL pods are used. They can be used in some lower-wattage sub-ohm setups too, but they're less common there.",
  },
  {
    question: "What's the maximum nicotine strength allowed in the UK?",
    answer:
      "UK-regulated e-liquid is capped at 20mg/ml nicotine strength under the Tobacco and Related Products Regulations. Bottles of nicotine-containing e-liquid are limited to 10ml, and any single tank, pod or cartridge holding nicotine e-liquid is limited to 2ml capacity, whether refillable or pre-filled.",
  },
];

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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqJsonLd} />
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
          Coil resistance and e-liquid ratio are the two specs that matter
          most when setting up a device, and they&apos;re closely linked. Get
          them right together and a pod or tank performs the way it was
          designed to. Mismatch them and you&apos;ll typically end up with either
          weak, harsh flavour or a leaking, gurgling pod, even with a coil
          that&apos;s otherwise perfectly compatible. This guide is a good
          starting point if you haven&apos;t read our other two references yet:{" "}
          <Link href="/guides/pod-coil-compatibility-how-to-check-before-you-buy" className="text-teal underline hover:text-teal-dark">
            pod and coil compatibility
          </Link>{" "}
          and{" "}
          <Link href="/guides/why-does-my-pod-leak-causes-and-fixes" className="text-teal underline hover:text-teal-dark">
            why pods leak and how to fix it
          </Link>
          .
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Sub-ohm versus above-1-ohm coils
        </h2>
        <p>
          &quot;Sub-ohm&quot; simply means a coil with resistance below 1.0 ohm.
          Lower resistance allows more current to flow at a given voltage,
          which generates more heat and vapour, so sub-ohm coils are built
          for direct-to-lung (DTL) vaping: a loose, lung-filling draw similar
          to breathing normally. Coils above 1.0 ohm restrict current more,
          run at lower wattage, and are built for mouth-to-lung (MTL)
          vaping: a tighter draw pulled into the mouth first, closer to
          drawing on a cigarette. Neither is objectively better; they suit
          different vaping styles and different e-liquids.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Why VG/PG ratio needs to match your device
        </h2>
        <p>
          VG (vegetable glycerine) is thick and produces dense vapour. PG
          (propylene glycol) is thin, carries flavour well and produces a
          stronger throat hit at a given nicotine strength. Sub-ohm DTL coils
          have larger wicking ports and higher power, so they can pull
          thicker, high-VG liquid through efficiently. MTL coils have smaller
          wicking ports and run at lower power, so they&apos;re built around
          thinner, higher-PG liquid that saturates the wick without flooding
          it. Put high-VG liquid in a low-power MTL pod and, in our view,
          you&apos;re one of the more likely causes of a pod that leaks or
          gurgles despite being set up correctly in every other respect.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Nicotine salts and higher-resistance coils
        </h2>
        <p>
          Nicotine salt e-liquids use a different chemical form of nicotine
          that&apos;s smoother at higher strengths than standard &quot;freebase&quot;
          nicotine. Because they&apos;re typically vaped at higher strengths and
          lower wattages, nic salts are most often paired with higher-
          resistance MTL coils in pod systems, rather than sub-ohm DTL setups
          where a high nicotine strength would usually feel too harsh. UK-
          regulated e-liquid, including nic salts, is capped at 20mg/ml
          nicotine strength under the Tobacco and Related Products
          Regulations (TRPR). Bottles of nicotine-containing e-liquid are
          limited to 10ml, and any single tank, pod or cartridge holding
          nicotine e-liquid is limited to 2ml capacity, whether refillable or
          pre-filled.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Simple compatibility table
        </h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Coil resistance</th>
                <th>Draw style</th>
                <th>VG/PG ratio</th>
                <th>Nicotine type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono">1.0Ω+</td>
                <td>MTL</td>
                <td>50/50 or 60PG/40VG</td>
                <td>Nic salts, higher strengths</td>
              </tr>
              <tr>
                <td className="font-mono">0.6Ω–1.0Ω</td>
                <td>Restricted DTL</td>
                <td>60/40 VG/PG</td>
                <td>Freebase or lower-strength nic salt</td>
              </tr>
              <tr>
                <td className="font-mono">0.15Ω–0.5Ω</td>
                <td>Open DTL</td>
                <td>70/30 or higher VG</td>
                <td>Freebase, typically lower strengths</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          These are general, widely-used pairings rather than fixed rules;
          check the coil packaging and pod manufacturer&apos;s guidance for
          your specific device, since the exact recommended range can vary
          between manufacturers. According to the NHS, vaping is not risk-
          free but is substantially less harmful than smoking for adults who
          already smoke, and switching from disposables to a refillable pod
          or tank system is now the main route into vaping since single-use
          disposable vapes became illegal to sell across the UK from 1 June
          2025.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Quick FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-2 border-ink/10 bg-white p-4">
              <h3 className="font-heading text-base font-bold text-ink">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm text-ink/75">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
