import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: `How ${SITE_NAME} researches, writes and updates its compatibility guides.`,
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Editorial Policy", href: "/editorial-policy" }]} />

      <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
        Editorial Policy
      </h1>
      <p className="mt-2 font-mono text-xs text-ink/50">Last updated 14 September 2026</p>

      <div className="prose-content mt-8 space-y-5 text-ink/90">
        <p>
          This page sets out how content on {SITE_NAME} is researched,
          written and kept current, so readers know what to expect from a
          guide before they act on it.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink">
          How we research
        </h2>
        <p>
          Technical specifications (coil resistance, wattage ranges, pod
          capacity) are sourced from manufacturer packaging, manufacturer
          datasheets and official product listings, and are clearly framed
          in our guides as manufacturer-stated figures rather than
          independent lab measurements. Regulatory and health-related
          statements reference official UK sources, including GOV.UK, the
          Medicines and Healthcare products Regulatory Agency (MHRA), the
          NHS and Trading Standards guidance, and are written to reflect
          those sources accurately rather than restating manufacturer
          marketing claims.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink">
          What we won&apos;t do
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            We do not accept payment, free products or any other
            consideration in exchange for favourable coverage of a specific
            brand or device.
          </li>
          <li>
            We do not publish invented review scores, star ratings, user
            counts or testimonials.
          </li>
          <li>
            We do not claim to have personally lab-tested a product&apos;s
            resistance, output or performance; where we describe a setup or
            example, it&apos;s presented as general guidance, not a test
            result.
          </li>
        </ul>

        <h2 className="font-heading text-xl font-bold text-ink">
          Keeping guides current
        </h2>
        <p>
          Each guide carries a visible “last updated” date. We review guides
          periodically and after any relevant change to UK vaping
          regulation, such as changes to nicotine strength limits, tank or
          bottle capacity rules, or age-of-sale law, and update the
          published date whenever a guide&apos;s content changes materially.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink">
          Corrections
        </h2>
        <p>
          If you spot something inaccurate or out of date, please let us
          know via our{" "}
          <Link href="/contact" className="text-teal underline hover:text-teal-dark">
            contact page
          </Link>
          . We correct factual errors as soon as we&apos;re able to verify
          them, and update the relevant guide&apos;s last-updated date when
          we do.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink">
          Who writes for {SITE_NAME}
        </h2>
        <p>
          Content is written and edited by our UK-based editorial team. We
          don&apos;t publish fabricated individual bylines, qualifications
          or biographies. See our{" "}
          <Link href="/about" className="text-teal underline hover:text-teal-dark">
            about page
          </Link>{" "}
          for more on who this site is written for.
        </p>
      </div>
    </div>
  );
}
