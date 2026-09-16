import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Disclaimer",
  description: `Terms of use and editorial disclaimer for ${SITE_NAME}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms & Disclaimer", href: "/terms" }]} />

      <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
        Terms &amp; Website Disclaimer
      </h1>
      <p className="mt-2 font-mono text-xs text-ink/50">Last updated 14 September 2026</p>

      <div className="prose-content mt-8 space-y-5 text-ink/90">
        <p>
          These terms apply to your use of {SITE_NAME}. By using this
          website, you accept them. If you don&apos;t agree with any part
          of them, please don&apos;t continue to use the site.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink">
          Informational purpose only
        </h2>
        <p>
          {SITE_NAME} is an independent, editorial information resource
          about vaping device compatibility. Content here is provided for
          general information purposes and does not constitute medical,
          legal or professional advice. It is not a substitute for guidance
          from a healthcare professional, and nothing on this site should be
          read as a recommendation to start vaping if you don&apos;t already
          smoke or vape.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink">
          18+ age restriction
        </h2>
        <p>
          This site and its content are intended for adults aged 18 or over.
          See our full{" "}
          <Link href="/age-notice" className="text-teal underline hover:text-teal-dark">
            age notice
          </Link>{" "}
          for detail.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink">
          Product and specification claims
        </h2>
        <p>
          Specification figures referenced in our guides (such as coil
          resistance, wattage ranges and pod capacity) are drawn from
          manufacturer packaging and official product listings and are
          described as manufacturer-stated specifications, not figures
          {" "}{SITE_NAME} has independently laboratory-tested. Manufacturers
          may change specifications between product batches or revisions
          without notice, so always cross-check against current packaging
          before purchase where it matters.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink">
          External links
        </h2>
        <p>
          Where we link to external sites, such as official UK government or
          health sources, or a manufacturer&apos;s own product page, we do so
          because we believe it&apos;s genuinely useful to the reader. We
          don&apos;t control the content of external sites and aren&apos;t
          responsible for their accuracy, availability or any transactions
          you carry out on them.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink">
          Intellectual property
        </h2>
        <p>
          Text, design and original imagery on this site belong to{" "}
          {SITE_NAME} or are used under licence (including photographs
          sourced from Unsplash under the Unsplash License). You&apos;re
          welcome to link to our pages; please don&apos;t reproduce whole
          articles elsewhere without asking first via our{" "}
          <Link href="/contact" className="text-teal underline hover:text-teal-dark">
            contact page
          </Link>
          .
        </p>

        <h2 className="font-heading text-xl font-bold text-ink">
          Limitation of liability
        </h2>
        <p>
          We take reasonable care to keep this site accurate and up to date,
          but we make no warranty that it is complete, error-free or
          suitable for any particular purpose. To the fullest extent
          permitted by law, {SITE_NAME} accepts no liability for loss or
          damage arising from reliance on information published here,
          including decisions made about purchasing or using vaping
          hardware or e-liquid.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink">
          Changes to these terms
        </h2>
        <p>
          We may update these terms from time to time. The date at the top
          of this page reflects the most recent revision.
        </p>
      </div>
    </div>
  );
}
