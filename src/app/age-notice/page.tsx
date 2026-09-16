import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Age Notice",
  description: `${SITE_NAME} is intended for adults aged 18 and over. Read our full age notice.`,
  alternates: { canonical: "/age-notice" },
};

export default function AgeNoticePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Age Notice", href: "/age-notice" }]} />

      <span className="inline-block border border-amber/50 bg-amber/15 px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-amber-ink">
        18+ content
      </span>
      <h1 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl">
        Age Notice
      </h1>

      <div className="prose-content mt-8 space-y-5 text-ink/90">
        <p>
          {SITE_NAME} publishes factual, technical information about vaping
          device compatibility for an adult audience. This content is
          intended only for people aged 18 or over who already smoke or
          vape, or who are seeking factual information about vaping
          products for other legitimate reasons.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink">
          What this site is not for
        </h2>
        <p>
          Nothing published on {SITE_NAME} is intended to encourage anyone
          under the age of 18 to use vaping products, nor is it intended to
          encourage people who have never smoked or vaped to start. UK law
          sets the minimum age to purchase vaping and tobacco products at 18,
          under the Children and Young Persons Act, and retailers commonly
          enforce this with ID checks (Challenge 25 is a common retailer
          policy, not a legal requirement in itself).
        </p>

        <h2 className="font-heading text-xl font-bold text-ink">
          Why we don&apos;t use a click-through age gate
        </h2>
        <p>
          We&apos;ve chosen a clear, permanent notice rather than a
          full-screen age-verification pop-up. A click-through box is easy
          for anyone, including someone under 18, to click past without it
          verifying anything, and it can make a site&apos;s health and
          safety information harder for search engines and assistive
          technology to reach. We think a clear, honest statement like this
          one, displayed on every page, is more effective and more
          accessible.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink">
          Vaping is not risk-free
        </h2>
        <p>
          According to the NHS, vaping is not completely risk-free but
          carries a small fraction of the risk of smoking when used by
          adults who already smoke, as a way to move away from cigarettes.
          Public health bodies such as OHID (the Office for Health
          Improvement and Disparities) and Cancer Research UK take a similar
          position. Vaping products are not intended for people who have
          never smoked, and are not risk-free for anyone who uses them.
        </p>

        <p>
          For our full terms of use, see our{" "}
          <Link href="/terms" className="text-teal underline hover:text-teal-dark">
            terms &amp; disclaimer
          </Link>{" "}
          page.
        </p>
      </div>
    </div>
  );
}
