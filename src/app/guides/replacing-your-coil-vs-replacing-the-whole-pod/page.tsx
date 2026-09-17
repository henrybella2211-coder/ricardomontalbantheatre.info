import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SpecBadge from "@/components/SpecBadge";
import JsonLd from "@/components/JsonLd";
import { getArticle } from "@/lib/articles";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const article = getArticle("replacing-your-coil-vs-replacing-the-whole-pod")!;

const faqs = [
  {
    question: "Can I buy a separate coil for a closed pod system if I look hard enough?",
    answer:
      "Generally no. If a manufacturer designed a pod as a sealed, closed unit, the coil isn't sold as a standalone part for that device, because the pod and coil are built and sealed together at manufacture. Third-party \"compatible\" coils for closed systems are uncommon and not something we'd recommend buying without a listing that explicitly names your device.",
  },
  {
    question: "Is it cheaper to switch from a closed pod system to an open one?",
    answer:
      "Often yes for regular vapers, since you're buying a coil and a bottle of e-liquid separately rather than paying for a new sealed pod (which includes both) every time. It's not guaranteed, though: open systems need you to buy a separate device and manage two consumables instead of one, so the saving depends on how much you vape and how you value the convenience of a single, no-mess replacement.",
  },
  {
    question: "How do I know when a coil (not the whole pod) needs replacing?",
    answer:
      "A burnt taste that doesn't clear after re-priming, a noticeable drop in vapour or flavour, or a gurgling sound are the usual signs. On an open system, replace just the coil head first. On a closed system, that same symptom usually means the whole pod needs replacing, since the coil isn't separable.",
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
          When vapour or flavour starts to fade, what you&apos;re meant to
          replace depends entirely on which type of pod system you own. Some
          devices take a separately replaceable coil, fitted inside a pod or
          tank you keep and refill. Others use a coil built directly into
          the pod itself, so the coil and the pod are one sealed, disposable
          unit. Buying the wrong part, or assuming your device works like a
          friend&apos;s, wastes money and doesn&apos;t fix the problem. Here&apos;s
          how to tell the two apart and work out which is actually the
          better option for you.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Closed systems: the coil is built into the pod
        </h2>
        <p>
          On a closed, pre-filled pod system, the coil sits sealed inside
          the plastic pod itself, and the two are manufactured as a single
          part. There&apos;s no separate coil to unscrew or pull out; when the
          coil reaches the end of its life, or the pod runs out of
          e-liquid, you replace the entire pod. This is the simpler system
          day to day: no priming, no matching coil resistance to the right
          e-liquid, just click a new pod in. The trade-off is that you&apos;re
          paying for a new coil every single time you replace the e-liquid
          supply, even if the old coil still had life left in it.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Open systems: a separately replaceable coil
        </h2>
        <p>
          On an open or refillable system, the pod or tank is a reusable
          shell that you refill from a bottle, and the coil is a separate
          part that pushes or screws into the base. You replace the coil on
          its own, typically every one to three weeks of regular use
          according to typical manufacturer guidance, while the pod or tank
          itself can last for months. This setup needs a bit more attention,
          since the coil has to be the right family and resistance for your
          device, covered in our guide to{" "}
          <Link href="/guides/pod-coil-compatibility-how-to-check-before-you-buy" className="text-teal underline hover:text-teal-dark">
            checking coil compatibility before you buy
          </Link>
          , and the coil&apos;s build material affects how it performs; see our
          guide to{" "}
          <Link href="/guides/kanthal-mesh-ceramic-coils-whats-the-difference" className="text-teal underline hover:text-teal-dark">
            Kanthal, mesh and ceramic coils
          </Link>{" "}
          for the differences.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Typical cost difference
        </h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>System type</th>
                <th>What you replace</th>
                <th>Typical unit cost</th>
                <th>What&apos;s included</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Closed / pre-filled pod</td>
                <td>Whole pod</td>
                <td className="font-mono">£8–£15 per pack</td>
                <td>New coil and new e-liquid together</td>
              </tr>
              <tr>
                <td>Open / refillable, coil only</td>
                <td>Coil head</td>
                <td className="font-mono">£8–£12 per pack of coils</td>
                <td>New coil only, e-liquid bought separately</td>
              </tr>
              <tr>
                <td>Open / refillable, e-liquid</td>
                <td>Bottle of e-liquid</td>
                <td className="font-mono">£3–£5 per 10ml bottle</td>
                <td>E-liquid only, coil unaffected</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          These are general, widely-seen UK retail price ranges rather than
          prices {SITE_NAME} has verified against every brand, and they will
          move around with retailer promotions and pack size. One thing
          worth factoring into any running-cost comparison from later this
          year: a new Vaping Products Duty of £2.20 per 10ml of e-liquid is
          due to start on 1 October 2026, alongside a duty stamp scheme,
          under rules confirmed by GOV.UK and HMRC. Because it&apos;s charged
          per millilitre of liquid rather than per pod or per coil, it
          affects both closed and open systems, but it has a slightly larger
          relative effect on cheaper, high-volume e-liquid bottles used in
          open systems than on the smaller 2ml fill already built into most
          closed pods.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          When whole-pod replacement is actually the cheaper, more sensible option
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>You vape occasionally rather than heavily.</strong> If a
            single pod lasts you a couple of weeks, the coil and e-liquid
            wear out at roughly the same time anyway, so buying them
            separately saves little.
          </li>
          <li>
            <strong>You don&apos;t want to manage two separate consumables.</strong>{" "}
            Coil packs and e-liquid bottles need to be bought, stored and
            matched correctly; a closed pod removes that admin entirely.
          </li>
          <li>
            <strong>Your usage is light enough that coil packs go stale
            before you finish them.</strong> Buying a five-pack of coils for
            an open system only pays off if you actually get through them
            within their reasonable shelf life.
          </li>
          <li>
            <strong>You travel or vape on the move a lot.</strong> A sealed
            pod is less likely to leak in transit than a refillable one
            that&apos;s been recently topped up.
          </li>
        </ul>
        <p>
          Conversely, an open system with a separate coil tends to work out
          cheaper for heavier, regular vapers, since you&apos;re not paying for
          a fresh coil every time the e-liquid runs low, and it gives more
          control over VG/PG ratio and nicotine strength than a fixed,
          pre-filled formulation.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          How to tell which type of system you have
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Look at the base of the pod: a visible metal contact with no separate part that pulls or unscrews out usually means the coil is built in.</li>
          <li>Check whether the manufacturer or retailer sells &quot;replacement coils&quot; for your exact device by name; if only &quot;replacement pods&quot; are listed, it&apos;s a closed system.</li>
          <li>Check whether the pod has a refill port with a rubber bung or plug; closed systems typically don&apos;t have one, since they arrive pre-filled and are discarded once empty.</li>
          <li>Check the original packaging or product page: it usually states outright whether the device uses replaceable coils or replaceable pods.</li>
          <li>If in doubt, ask in a UK vape shop; staff can usually identify the system type from the device or pod alone.</li>
        </ul>

        <p>
          Once you know which system you have, our{" "}
          <Link href="/pods" className="text-teal underline hover:text-teal-dark">
            pod reference
          </Link>{" "}
          sets out the main pod categories and their fill limits, and our{" "}
          <Link href="/guides/why-does-my-pod-leak-causes-and-fixes" className="text-teal underline hover:text-teal-dark">
            leaking pod troubleshooting guide
          </Link>{" "}
          covers what to check before assuming a full replacement is needed.
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
