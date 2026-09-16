import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `What cookies ${SITE_NAME} does and does not use.`,
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cookie Policy", href: "/cookie-policy" }]} />

      <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
        Cookie Policy
      </h1>
      <p className="mt-2 font-mono text-xs text-ink/50">Last updated 14 September 2026</p>

      <div className="prose-content mt-8 space-y-5 text-ink/90">
        <p>
          This is a short, plain answer to “does this site use cookies”:
          {" "}{SITE_NAME} does not currently use tracking or advertising
          cookies of any kind. We don&apos;t run third-party analytics,
          advertising networks or social media tracking scripts on this
          site, so there is no cookie consent banner, because there is
          nothing non-essential to ask consent for.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink">
          Strictly necessary cookies
        </h2>
        <p>
          Depending on how the site is hosted, your browser may receive a
          small number of strictly necessary cookies that are essential for
          basic functionality, such as maintaining secure delivery of the
          site over HTTPS. These do not track you across other websites and
          do not require consent under UK cookie rules, because they are
          necessary for the site to work at all.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink">
          What we don&apos;t use
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>No advertising or retargeting cookies.</li>
          <li>No third-party analytics cookies (such as Google Analytics).</li>
          <li>No social media embed or tracking cookies.</li>
          <li>No cross-site tracking of any kind.</li>
        </ul>

        <h2 className="font-heading text-xl font-bold text-ink">
          If this changes
        </h2>
        <p>
          If we ever add analytics or any other non-essential cookie or
          tracking technology in future, we will update this page to
          accurately describe what&apos;s in use and add a proper consent
          mechanism before it&apos;s set, rather than retrofitting one
          afterwards. Until then, this page will continue to say plainly
          that no such cookies are used.
        </p>

        <p>
          Questions about this policy can be sent via our{" "}
          <Link href="/contact" className="text-teal underline hover:text-teal-dark">
            contact page
          </Link>
          . See also our{" "}
          <Link href="/privacy-policy" className="text-teal underline hover:text-teal-dark">
            privacy policy
          </Link>{" "}
          for how any data you do send us is handled.
        </p>
      </div>
    </div>
  );
}
