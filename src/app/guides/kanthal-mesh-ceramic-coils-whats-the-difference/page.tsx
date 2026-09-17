import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SpecBadge from "@/components/SpecBadge";
import JsonLd from "@/components/JsonLd";
import { getArticle } from "@/lib/articles";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const article = getArticle("kanthal-mesh-ceramic-coils-whats-the-difference")!;

const faqs = [
  {
    question: "Is a mesh coil always better than a round-wire Kanthal coil?",
    answer:
      "Not necessarily. Mesh generally produces more vapour and a faster ramp-up, which suits DTL vaping, but a lot of MTL users prefer the tighter, more flavour-forward hit that a traditional round-wire coil gives at lower wattage. Which is \"better\" depends on the draw style you're after, not just the material.",
  },
  {
    question: "Do ceramic coils really last longer?",
    answer:
      "Manufacturers commonly state that ceramic elements resist gunking and hold up to sweetened or high-VG e-liquid better than exposed wire, which can translate into a longer usable life. This is a manufacturer-stated general characteristic rather than something independently lab-tested, and heavy chain vaping or a poor VG/PG match will shorten any coil's life regardless of material.",
  },
  {
    question: "Can I tell which material my coil uses just by looking at it?",
    answer:
      "Sometimes. A flat perforated strip visible through a clear tank is mesh; a tightly wound wire coil is Kanthal or a similar wire alloy; ceramic elements are usually hidden inside a pod and not visible at all. The coil packaging or the device's product page is the more reliable source, since appearance alone can be misleading on sealed pod coils.",
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
          Open the box on a pack of replacement coils and, alongside the
          resistance value, you&apos;ll usually see a material or build type
          named on the packaging: Kanthal, mesh, or ceramic being the three
          you&apos;ll run into most often across UK pod kits and tanks. The
          resistance number tells you the power and draw style a coil is
          built for, covered in our guide to{" "}
          <Link href="/guides/pod-coil-compatibility-how-to-check-before-you-buy" className="text-teal underline hover:text-teal-dark">
            checking coil compatibility before you buy
          </Link>
          . The material tells you something different: how that coil is
          likely to behave day to day. Below is what each build is, and how
          manufacturers generally describe the way it affects flavour,
          vapour, ramp-up and lifespan.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Kanthal and other round-wire coils
        </h2>
        <p>
          Kanthal is an iron-chromium-aluminium alloy wire, wound into a
          tight coil shape and wrapped in wicking cotton. It&apos;s the
          longest-established coil build and still the most common in MTL
          pod coils and many restricted-DTL coils, largely because it&apos;s
          cheap to produce and behaves predictably. Manufacturers typically
          describe round-wire Kanthal builds as flavour-forward at lower
          wattage, with a moderate ramp-up (roughly a second or so from
          pressing the fire button to full vapour, according to typical
          manufacturer specs) rather than the near-instant response of mesh.
          Stated lifespan is usually similar to other builds at the same
          resistance, in the region of one to three weeks of regular use,
          though this varies by manufacturer and how the coil is used.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Mesh coils
        </h2>
        <p>
          Instead of a wound wire, a mesh coil uses a flat, perforated sheet
          of resistance metal wrapped around or laid across the wicking
          material. The larger, more even surface area is why manufacturers
          generally market mesh builds around faster ramp-up and higher
          vapour output than an equivalent-resistance round-wire coil, since
          more of the coil&apos;s surface contacts the wick at once. Mesh is
          now the standard build in most sub-ohm DTL tanks and in many
          higher-wattage pod systems. The trade-off manufacturers note is
          that mesh coils can dry out faster if paired with thinner,
          lower-VG e-liquid than they&apos;re designed for, since the larger
          surface area draws liquid through more quickly; see our guide to{" "}
          <Link href="/guides/coil-resistance-eliquid-ratio-explained" className="text-teal underline hover:text-teal-dark">
            coil resistance and e-liquid ratio
          </Link>{" "}
          for how VG/PG ratio needs to match the coil you&apos;re using.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Ceramic coils
        </h2>
        <p>
          Ceramic builds use a heating element embedded in, or coated with, a
          ceramic material rather than leaving the resistance wire fully
          exposed to the wick. They&apos;re common in some MTL pod cartridges,
          particularly closed, pre-filled pod systems, where the coil is
          sealed inside the pod itself. Manufacturers commonly state that
          ceramic disperses heat more evenly across the wicking material,
          which they associate with a smoother draw and reduced risk of a
          burnt taste from hot spots, along with a longer stated lifespan
          under sweetened or higher-VG e-liquids that tend to gunk exposed
          wire faster. Ramp-up on ceramic builds is typically described as
          gentler and slightly slower than mesh, in keeping with the
          lower-wattage MTL setups they&apos;re usually paired with.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Comparison table
        </h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Build</th>
                <th>Usual draw style</th>
                <th>Ramp-up</th>
                <th>Vapour output</th>
                <th>Manufacturer-stated lifespan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kanthal / round-wire</td>
                <td>MTL, restricted DTL</td>
                <td>Moderate</td>
                <td>Standard</td>
                <td>1–3 weeks regular use</td>
              </tr>
              <tr>
                <td>Mesh</td>
                <td>Open DTL, higher-power MTL</td>
                <td>Fast</td>
                <td>Higher</td>
                <td>1–3 weeks regular use</td>
              </tr>
              <tr>
                <td>Ceramic</td>
                <td>MTL, closed pod systems</td>
                <td>Gentler / gradual</td>
                <td>Standard, smoother</td>
                <td>Often stated as longer under sweetened liquid</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          These are general characteristics as described by coil and device
          manufacturers, not figures {SITE_NAME} has independently
          lab-tested, and individual products vary. Two mesh coils from
          different brands at the same resistance won&apos;t necessarily
          perform identically, and how you vape, chain-vaping versus
          occasional use, and which e-liquid you run through it, has as much
          effect on real-world lifespan as the build material itself.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Does the material affect anything beyond taste and vapour?
        </h2>
        <p>
          Coil material is a performance and longevity question rather than
          a safety classification. All e-liquid and vaping devices sold in
          the UK have to meet requirements under the Tobacco and Related
          Products Regulations (TRPR), which cover emissions, labelling and
          notification to the MHRA, regardless of which coil material a
          device uses. If you&apos;re trying to work out which material your
          own device takes, our{" "}
          <Link href="/coils" className="text-teal underline hover:text-teal-dark">
            coil reference
          </Link>{" "}
          breaks coils down by resistance family, and the coil packaging or
          your device&apos;s product listing will confirm the exact build.
          If your device is a sealed pod system where the coil is built in
          rather than separately replaceable, it&apos;s also worth reading our
          guide to{" "}
          <Link href="/guides/replacing-your-coil-vs-replacing-the-whole-pod" className="text-teal underline hover:text-teal-dark">
            replacing your coil versus replacing the whole pod
          </Link>{" "}
          before you go looking for a coil that isn&apos;t sold separately.
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
