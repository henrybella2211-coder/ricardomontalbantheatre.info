import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SpecBadge from "@/components/SpecBadge";
import JsonLd from "@/components/JsonLd";
import { getArticle } from "@/lib/articles";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const article = getArticle("why-does-my-pod-leak-causes-and-fixes")!;

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
          A pod that&apos;s wet around the mouthpiece, dripping from the
          airflow slot, or leaving liquid pooling in the charging port is one
          of the most common complaints from pod system owners. Most of the
          time the cause is mechanical rather than a manufacturing fault, and
          most of the time it&apos;s fixable in a couple of minutes once
          you&apos;ve worked out which of a handful of usual suspects applies
          to your setup.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          First, check it&apos;s actually leaking
        </h2>
        <p>
          A small amount of moisture around the airflow holes after a pod has
          sat unused for a while is often condensation, not a leak. Warm
          vapour condenses back into liquid inside the chamber as the device
          cools, and a light wipe with a tissue usually clears it. A true
          leak is liquid actively pooling at the base of the pod, seeping
          from the seam between the pod and the coil, or running into the
          connector where the pod meets the battery.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          The six usual causes
        </h2>
        <ol className="list-decimal space-y-3 pl-6">
          <li>
            <strong>The coil isn&apos;t seated correctly.</strong> If a
            replacement coil wasn&apos;t pushed fully home, or was fitted at a
            slight angle, e-liquid can bypass the seal around it entirely.
            This is also what happens if the wrong coil is forced into a pod
            it wasn&apos;t designed for; see our guide to{" "}
            <Link href="/guides/pod-coil-compatibility-how-to-check-before-you-buy" className="text-teal underline hover:text-teal-dark">
              checking coil compatibility before you buy
            </Link>{" "}
            if you&apos;re not certain the coil is the right fit.
          </li>
          <li>
            <strong>Overfilling.</strong> Filling past the maximum-fill line
            marked on the pod leaves no air gap for the liquid to settle, so
            it gets forced out through the airflow slot, particularly when
            the device warms up.
          </li>
          <li>
            <strong>The wrong e-liquid viscosity for the pod.</strong> A
            thick, high-VG e-liquid poured into a low-wattage MTL pod
            designed around thinner, higher-PG liquid can flood the wicking
            material faster than the coil can burn it off, which shows up as
            leaking or a gurgling sound.
          </li>
          <li>
            <strong>Temperature changes.</strong> Leaving a filled device in
            a hot car, a warm pocket, or direct sunlight causes the e-liquid
            to expand and can force it past the seals, particularly on a
            pod that&apos;s already close to full.
          </li>
          <li>
            <strong>Worn seals or O-rings.</strong> The small rubber seals
            around the coil and the fill port harden and lose their grip over
            weeks of use and repeated filling, especially with high-VG
            liquids that can degrade rubber components faster.
          </li>
          <li>
            <strong>A cracked pod or a loose drip tip.</strong> Pods are
            usually fine for one refill cycle at a time but a hairline crack
            from a drop, or a drip tip that isn&apos;t pushed on fully, is an
            easy thing to miss on a quick visual check.
          </li>
        </ol>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Step-by-step troubleshooting
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Wipe the pod dry and check whether new liquid reappears within a few minutes without vaping, which points to a seal or seating issue rather than condensation.</li>
          <li>Remove the coil and refit it, pressing straight down until it clicks or sits flush, rather than at an angle.</li>
          <li>Check the fill line and empty the pod back down below it if it&apos;s been overfilled.</li>
          <li>Check the e-liquid&apos;s VG/PG ratio against what the device is designed for, and switch liquids if there&apos;s a clear mismatch.</li>
          <li>Inspect the O-ring or seal around the coil for visible flattening, cracking or a shiny, worn look, and replace the coil if the seal looks compromised.</li>
          <li>If none of the above resolves it, examine the pod body itself under good light for hairline cracks, particularly near the fill port and the base.</li>
        </ul>

        <h2 className="font-heading text-2xl font-bold text-ink">
          When to just replace the pod
        </h2>
        <p>
          Pods are a consumable part. If a pod has already had several coil
          changes, shows visible cracking, or keeps leaking after a fresh
          coil and a correct viscosity match, replacing the whole pod is
          usually more reliable than continuing to troubleshoot it.
          Manufacturer-stated coil lifespans vary by usage but many pod coils
          are designed for roughly one to three weeks of regular use before
          flavour and vapour production drop off noticeably, which is often a
          good natural point to check the seals as well. Typical replacement
          pods cost in the region of £8–£15 for a pack, depending on the
          brand and pack size.
        </p>

        <p>
          For more on how resistance and e-liquid ratio interact, which
          affects how much liquid a coil pulls through and how quickly, see
          our guide to{" "}
          <Link href="/guides/coil-resistance-eliquid-ratio-explained" className="text-teal underline hover:text-teal-dark">
            coil resistance and e-liquid ratio explained
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
