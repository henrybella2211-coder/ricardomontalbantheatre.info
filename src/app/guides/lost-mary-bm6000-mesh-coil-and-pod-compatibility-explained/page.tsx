import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SpecBadge from "@/components/SpecBadge";
import JsonLd from "@/components/JsonLd";
import { getArticle } from "@/lib/articles";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const article = getArticle(
  "lost-mary-bm6000-mesh-coil-and-pod-compatibility-explained"
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
            href="https://localsupplies.co.uk/collections/lost-mary-bm6000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal underline hover:text-teal-dark"
          >
            Lost Mary BM6000
          </a>{" "}
          is a rechargeable, refillable pod system rather than a single-use
          disposable. It fires by draw activation, with no fire button, and
          its replacement pods carry the coil built in rather than as a
          separate swappable part. This guide sets out what that coil
          arrangement means for compatibility, how draw activation differs
          from button-fired devices, and where the BM6000 sits against the
          other pod systems covered on this site.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          The coil is built into the pod, not separate
        </h2>
        <p>
          On an open pod system or a sub-ohm tank, the coil is a distinct
          part that pushes or screws into a reusable pod shell and is
          typically swapped out on its own every week or two. The BM6000
          doesn&apos;t work that way. Each replacement pod arrives with its
          mesh coil already sealed inside as one manufactured unit, so
          there&apos;s no separate coil to pull out and replace within the
          pod itself. When a pod is empty, or its built-in coil has reached
          the end of its working life, the whole pod is swapped for a new
          one, while the rechargeable battery body is kept and reused.
        </p>
        <p>
          This is the same coil-in-pod design used across most closed pod
          kits, and it&apos;s worth being clear about the distinction: what
          makes the BM6000 a rechargeable device rather than a disposable
          isn&apos;t the coil, it&apos;s the USB-C battery and the fact that the
          pod is bought and replaced separately from the device body. The
          mesh coil construction itself is the same general approach used
          in plenty of closed systems, covered in more general terms in our
          guide to{" "}
          <Link
            href="/guides/kanthal-mesh-ceramic-coils-whats-the-difference"
            className="text-teal underline hover:text-teal-dark"
          >
            Kanthal, mesh and ceramic coils
          </Link>
          .
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Why pods are specific to this device
        </h2>
        <p>
          Because the mesh coil is sealed into the pod at manufacture,
          compatibility runs one way only: a BM6000 pod is built to fit the
          BM6000&apos;s own contact pins and pod bay dimensions, and nothing
          else. It won&apos;t click into a different closed-pod device, and
          another brand&apos;s pod won&apos;t fit the BM6000 body, even where the
          outward shape looks broadly similar. This is the same
          brand-specific fitting logic that applies to closed pod vaping in
          general, which we cover in more depth in our guide to{" "}
          <Link
            href="/guides/pod-coil-compatibility-how-to-check-before-you-buy"
            className="text-teal underline hover:text-teal-dark"
          >
            checking pod and coil compatibility before you buy
          </Link>
          . In practice, the only part to shop for once the kit is bought is
          the replacement pod itself, listed specifically for the BM6000,
          rather than a coil and a pod bought separately as two line items.
          For a wider look at how closed and open systems differ on this
          point, see our{" "}
          <Link href="/coils" className="text-teal underline hover:text-teal-dark">
            coil reference
          </Link>{" "}
          and{" "}
          <Link href="/pods" className="text-teal underline hover:text-teal-dark">
            pod reference
          </Link>
          .
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Draw-activated firing, not a button
        </h2>
        <p>
          The BM6000 has no fire button at all. It&apos;s draw-activated,
          meaning an internal sensor detects the change in airflow as soon
          as you inhale through the mouthpiece and fires the coil
          automatically for the duration of the draw. This is a different
          firing mechanism to button-fired devices, including many sub-ohm
          tanks and mods, where you hold a button down to fire the coil
          independently of inhaling, and where a locked or faulty button
          can stop the device firing altogether. Draw activation removes
          that button-press step, but it also means there&apos;s nothing to
          physically lock the device when it&apos;s not in use beyond keeping
          it capped or stored away from anything that could pull air
          through the mouthpiece.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Charging and everyday use
        </h2>
        <p>
          The BM6000 charges over USB-C, with Lost Mary stating a full
          charge takes roughly 45 to 60 minutes, though the retailer
          listing notes the cable itself isn&apos;t included in the box, so
          it&apos;s worth having a spare USB-C lead on hand before the battery
          runs flat. Because the device is draw-activated rather than
          button-fired, there&apos;s no indicator light to press or firing
          button to click through a set number of times to check remaining
          battery, which some button-fired mods use as a rough charge
          gauge; any charge status is limited to whatever indicator light
          the device itself provides while plugged in. None of this affects
          pod compatibility directly, but it&apos;s part of the day-to-day
          difference between a draw-activated closed pod kit like this one
          and a button-fired mod or sub-ohm tank.
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
                <td>Rechargeable pod kit, built-in mesh coil per pod</td>
              </tr>
              <tr>
                <td>Activation</td>
                <td>Draw-activated, no fire button</td>
              </tr>
              <tr>
                <td>Charging</td>
                <td className="font-mono">USB-C, approx. 45–60 min (cable not included)</td>
              </tr>
              <tr>
                <td>Nicotine strength</td>
                <td className="font-mono">20mg/ml (UK regulatory cap), all flavours</td>
              </tr>
              <tr>
                <td>Puff rating</td>
                <td>Up to 6,000, manufacturer estimate per pod</td>
              </tr>
              <tr>
                <td>Flavour range</td>
                <td>Around 48 flavours across ice, fruit and cola styles</td>
              </tr>
              <tr>
                <td>Typical kit price</td>
                <td className="font-mono">Around £7.49</td>
              </tr>
              <tr>
                <td>Typical replacement pod price</td>
                <td className="font-mono">Around £4.99 each</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The &quot;up to 6,000 puffs&quot; figure is Lost Mary&apos;s own stated
          estimate for a single pod, not an independently verified number
          and not directly comparable to a disposable&apos;s total-device puff
          count, since a BM6000 body works through multiple pods over its
          lifetime. The 45–60 minute charge time is also a manufacturer
          figure rather than something {SITE_NAME} has timed itself, and
          the retailer listing notes the charging cable isn&apos;t included in
          the box. The flavour range runs to roughly 48 options spanning
          ice and menthol styles such as Banana Ice and Fresh Mint, fruit
          flavours including Blueberry and Triple Mango, and cola-style
          options like Cola and Pink Lemonade, though exact ranges vary by
          retailer and this isn&apos;t an exhaustive list.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Where this fits against closed and open systems
        </h2>
        <p>
          Structurally, the BM6000 sits on the closed side of the divide we
          cover in our guide to{" "}
          <Link
            href="/guides/replacing-your-coil-vs-replacing-the-whole-pod"
            className="text-teal underline hover:text-teal-dark"
          >
            replacing your coil versus replacing the whole pod
          </Link>
          . There&apos;s no coil resistance to check or e-liquid ratio to match
          beyond what&apos;s already sealed into the pod at manufacture, so
          compatibility comes down to a single question: is this pod listed
          for the BM6000 specifically, rather than assuming any
          similar-looking closed pod will fit. Being rechargeable with a
          replaceable pod, rather than a fully single-use device, is also
          why the BM6000 remained legal to sell in the UK after the 1 June
          2025 ban on single-use disposable vapes, a distinction that
          applies regardless of how its puff rating is marketed. As with
          every product covered on this site, the BM6000 is intended for
          adults aged 18 and over only, and nothing here should be read as
          a claim that vaping is safe or a health recommendation of any
          kind.
        </p>
      </div>
    </article>
  );
}
