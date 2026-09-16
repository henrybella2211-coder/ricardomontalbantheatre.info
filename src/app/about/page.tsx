import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Coil & Cloud, an independent UK reference site for pod, coil and e-liquid compatibility.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />

      <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
        About {SITE_NAME}
      </h1>

      <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden border-2 border-ink/10">
        <Image
          src="/images/vape-display-case-shop.jpg"
          alt="Retail display case holding a range of different vaping devices"
          fill
          sizes="(min-width: 768px) 720px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="prose-content mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink/90">
        <p>
          {SITE_NAME} is an independent UK website focused specifically on
          one problem: working out which pod, coil or e-liquid actually
          fits your device, and why a setup that should work sometimes
          doesn&apos;t. We&apos;re not a shop and we don&apos;t sell
          hardware or e-liquid. We publish reference guides written for
          adults who already vape and need a plain-English answer to a
          specific compatibility or troubleshooting question.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          What we cover
        </h2>
        <p>
          Our guides focus on coil families and resistance ranges, pod
          capacity and fill limits, VG/PG ratio pairing, nicotine salts, and
          common mechanical problems such as leaking pods. We write for
          people who already own a specific device and want a direct answer,
          not a general introduction to vaping.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Who writes this
        </h2>
        <p>
          Content on {SITE_NAME} is written and edited by our UK-based
          editorial team. We don&apos;t publish individual staff bylines or
          biographies, and we don&apos;t claim professional medical,
          engineering or laboratory qualifications. Specification figures
          quoted in our guides are taken from manufacturer packaging and
          official product listings and are labelled as manufacturer-stated,
          not independently lab-tested by us. See our{" "}
          <Link href="/editorial-policy" className="text-teal underline hover:text-teal-dark">
            editorial policy
          </Link>{" "}
          for more detail on how we research and update content.
        </p>

        <h2 className="font-heading text-2xl font-bold text-ink">
          Who this site is for
        </h2>
        <p>
          {SITE_NAME} is intended for adults aged 18 and over in the UK who
          already smoke or vape, or who are researching vaping products for
          factual, practical reasons. It is not intended for anyone under 18
          or for people who have never smoked or vaped, and nothing on this
          site is intended to encourage vaping among non-smokers. Read our
          full{" "}
          <Link href="/age-notice" className="text-teal underline hover:text-teal-dark">
            age notice
          </Link>{" "}
          for more detail.
        </p>

        <p>
          Questions, corrections or feedback are welcome via our{" "}
          <Link href="/contact" className="text-teal underline hover:text-teal-dark">
            contact page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
