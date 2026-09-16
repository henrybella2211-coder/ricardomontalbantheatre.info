import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} handles personal data, including contact form use and basic site analytics.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/privacy-policy" }]} />

      <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 font-mono text-xs text-ink/50">Last updated 14 September 2026</p>

      <div className="prose-content mt-8 space-y-5 text-ink/90">
        <p>
          This policy explains what happens to personal data when you visit
          {" "}{SITE_NAME}, in plain terms. We keep the amount of personal data
          we handle to a minimum, because this is a small, independent
          information site rather than a service that requires an account or
          login.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink">
          What data we collect
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Contact form / email.</strong> Our contact page opens a
            pre-filled email in your own email application rather than
            submitting data directly to a server on this site. Whatever
            details you choose to send us, typically your name, email
            address and message, are received in our editorial inbox in the
            same way as any other email, and are handled under standard
            UK email hosting practices.
          </li>
          <li>
            <strong>Basic technical data.</strong> Our hosting provider may
            log standard technical information (such as IP address, browser
            type and pages requested) for security and reliability purposes,
            as is normal for any website. We do not currently run a
            third-party analytics platform on this site.
          </li>
          <li>
            <strong>Cookies.</strong> See our{" "}
            <Link href="/cookie-policy" className="text-teal underline hover:text-teal-dark">
              cookie policy
            </Link>{" "}
            for full detail on cookie use.
          </li>
        </ul>

        <h2 className="font-heading text-xl font-bold text-ink">
          How we use it
        </h2>
        <p>
          Any information sent to us through the contact page is used only
          to respond to your enquiry, correct an article, or otherwise
          address what you&apos;ve raised. We do not sell personal data, and
          we do not share contact form correspondence with third parties
          except where we are legally required to.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink">
          Legal basis and your rights
        </h2>
        <p>
          Under UK GDPR and the Data Protection Act 2018, our legal basis for
          handling contact enquiries is legitimate interest, namely
          responding to messages you have chosen to send us. You have the
          right to ask what personal data we hold about you, to ask us to
          correct or delete it, and to object to how it&apos;s used. To
          exercise any of these rights, get in touch via our{" "}
          <Link href="/contact" className="text-teal underline hover:text-teal-dark">
            contact page
          </Link>
          .
        </p>

        <h2 className="font-heading text-xl font-bold text-ink">
          Third parties
        </h2>
        <p>
          This site is hosted with a standard web hosting provider, which
          processes technical request data as part of delivering the site to
          your browser. We do not use advertising networks, tracking
          pixels or third-party marketing tools on {SITE_NAME}.
        </p>

        <h2 className="font-heading text-xl font-bold text-ink">
          Changes to this policy
        </h2>
        <p>
          We may update this policy if how the site handles data changes. The
          date at the top of this page reflects the most recent update.
        </p>
      </div>
    </div>
  );
}
