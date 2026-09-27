import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SpecBadge from "@/components/SpecBadge";
import JsonLd from "@/components/JsonLd";
import { getArticle } from "@/lib/articles";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const article = getArticle("which-nic-salt-strength-suits-which-coil-and-device")!;

const faqs = [
  {
    question: "Can I use a high nic salt strength in a sub-ohm tank?",
    answer:
      "You can, but it's uncommon. Sub-ohm coils run at higher wattage and produce more vapour per puff, so a strength like 20mg tends to feel much harsher there than it would through a lower-powered MTL coil. Most nic salt ranges are formulated with MTL pod systems in mind rather than sub-ohm setups.",
  },
  {
    question: "Does a higher-resistance coil mean I need a stronger nic salt?",
    answer:
      "Not necessarily. Coil resistance affects how much vapour and throat sensation you get per puff, not how much nicotine you need. Strength is really about your own nicotine intake and how a given formulation feels to you, so it's worth treating resistance and strength as two separate decisions that happen to interact.",
  },
  {
    question: "What's the maximum nic salt strength allowed in the UK?",
    answer:
      "UK-regulated e-liquid, including nic salts, is capped at 20mg/ml nicotine strength under the Tobacco and Related Products Regulations (TRPR). Bottles of nicotine-containing e-liquid are limited to 10ml, and any single tank, pod or cartridge holding nicotine e-liquid is limited to 2ml capacity, whether refillable or pre-filled.",
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
          Nic salt strength, coil resistance and device wattage are three
          separate specs that all shape the same puff, which is why the same
          bottle of e-liquid can feel completely different from one pod
          system to the next. This guide sets out how those three specs
          typically interact, so you can work out roughly what to expect
          before opening a new bottle in an unfamiliar device. It builds on
          our existing guide to{" "}
          <Link
            href="/guides/coil-resistance-eliquid-ratio-explained"
            className="text-teal underline hover:text-teal-dark"
          >
            coil resistance and e-liquid ratio
          </Link>
          , so it&apos;s worth reading that first if you haven&apos;t already.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Why nic salts pair with higher-resistance MTL coils
        </h2>
        <p>
          Nicotine salt e-liquids use a different chemical form of nicotine
          that&apos;s generally described as giving a smoother throat hit at
          higher strengths than standard &quot;freebase&quot; nicotine, which
          is a widely stated formulation characteristic rather than a health
          claim. Because they&apos;re usually vaped at higher strengths,
          nic salts are most often formulated as a 50/50 PG/VG mix, similar
          to Elux&apos;s nic salt range, which suits the smaller wicking
          ports and lower wattage of higher-resistance MTL coils (typically
          1.0Ω and above) found in most pod systems. A thinner, 50/50 liquid
          saturates a low-power MTL coil efficiently without flooding it, in
          a way a thick, high-VG liquid generally wouldn&apos;t.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Why nic salts are usually kept off sub-ohm setups
        </h2>
        <p>
          Sub-ohm coils sit below 1.0Ω, draw more current, and run at higher
          wattage to produce the denser vapour that direct-to-lung (DTL)
          vaping is built around. Running a high nic salt strength through a
          high-wattage sub-ohm coil generally means inhaling far more
          nicotine per puff than the coil and draw style were designed to
          deliver comfortably, which is usually described as feeling
          noticeably harsher than the same strength through a low-power MTL
          coil. That&apos;s the main reason nic salts are marketed and
          formulated around MTL pod systems rather than sub-ohm tanks and
          mods, not because the two are chemically incompatible.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          How strength interacts with resistance and draw
        </h2>
        <p>
          Coil resistance and wattage govern how much vapour and throat
          sensation you get from a single puff; nicotine strength governs how
          much nicotine is in that vapour. The two aren&apos;t the same
          decision, but they compound each other. A tighter-drawing,
          higher-resistance coil at low wattage delivers a smaller volume of
          vapour per puff, so a higher strength such as 20mg can feel more
          proportionate there than it would through a looser, higher-wattage
          draw, where the same strength is spread across a much larger lungful
          of vapour. This is a large part of why 20mg nic salts are
          associated with tight-draw MTL pods specifically, rather than
          being a strength that suits any coil equally.
        </p>
        <p>
          UK-regulated e-liquid, including nic salts, is capped at 20mg/ml
          nicotine strength under the Tobacco and Related Products
          Regulations (TRPR). Bottles of nicotine-containing e-liquid are
          limited to 10ml, and any single tank, pod or cartridge holding
          nicotine e-liquid is limited to 2ml capacity, whether refillable or
          pre-filled. Ranges sold within these rules, such as{" "}
          <a
            href="https://localsupplies.co.uk/collections/elux-nic-salts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal underline hover:text-teal-dark"
          >
            Elux vape liquid 5mg
          </a>{" "}
          through to the 20mg strength in the same range, give an idea of the
          spread most UK nic salt bottles are sold across, typically in 10ml
          bottles at 5mg, 10mg and 20mg strengths.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Choosing a strength: general guidance, not a fixed rule
        </h2>
        <p>
          Nicotine needs vary from person to person, so there&apos;s no
          single strength that&apos;s &quot;right&quot; for every reader.
          Many vapers who are new to nic salts, or who previously smoked
          fewer cigarettes a day, start at a lower strength such as 5mg or
          10mg and adjust from there based on how it feels through their own
          device, rather than assuming the highest available strength is the
          default choice. If you find a 20mg nic salt feels consistently too
          strong or harsh through your coil, a lower strength such as 5mg or
          10mg may suit you better, though the coil and wattage you&apos;re
          using are just as relevant to that experience as the strength
          itself. Our{" "}
          <Link href="/coils" className="text-teal underline hover:text-teal-dark">
            coil reference
          </Link>{" "}
          covers the resistance ranges most MTL pods use, and our{" "}
          <Link href="/pods" className="text-teal underline hover:text-teal-dark">
            pod reference
          </Link>{" "}
          covers how pod capacity and ratio typically pair with nic salt
          formulations.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Strength, resistance and draw reference table
        </h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Nic salt strength</th>
                <th>Typical coil resistance</th>
                <th>Draw style</th>
                <th>Where it&apos;s usually vaped</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono">20mg</td>
                <td className="font-mono">1.0Ω+</td>
                <td>Tight MTL</td>
                <td>Low-wattage MTL pod kits</td>
              </tr>
              <tr>
                <td className="font-mono">10mg</td>
                <td className="font-mono">0.8Ω–1.2Ω</td>
                <td>MTL / restricted MTL</td>
                <td>Standard MTL pod kits</td>
              </tr>
              <tr>
                <td className="font-mono">5mg</td>
                <td className="font-mono">0.6Ω–1.0Ω</td>
                <td>Restricted MTL / loose MTL</td>
                <td>Higher-airflow MTL pods</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          These are general, widely-used pairings rather than fixed rules;
          coil resistance and wattage recommendations vary between
          manufacturers, so it&apos;s worth checking the coil packaging and
          pod maker&apos;s guidance for your specific device. According to
          the NHS, vaping is not risk-free but is substantially less harmful
          than smoking for adults who already smoke, and refillable pod
          systems are now the main route into vaping since single-use
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
