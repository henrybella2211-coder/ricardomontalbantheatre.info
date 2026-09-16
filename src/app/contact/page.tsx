import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with the ${SITE_NAME} editorial team about a correction, question or feedback.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />

      <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
        Contact
      </h1>
      <p className="mt-4 text-ink/75">
        Spotted an inaccurate spec, a broken link, or have a question about
        one of our compatibility guides? Fill in the form below and it will
        open a pre-filled email in your own mail app, addressed to our
        editorial inbox. We don&apos;t operate a phone line or a physical
        office, so email is the only way to reach us.
      </p>

      <div className="mt-8">
        <ContactForm />
      </div>

      <p className="mt-6 text-sm text-ink/60">
        We aim to read every message but can&apos;t guarantee an individual
        reply to every enquiry. For data protection queries specifically, see
        our{" "}
        <Link href="/privacy-policy" className="text-teal underline hover:text-teal-dark">
          privacy policy
        </Link>
        .
      </p>
    </div>
  );
}
