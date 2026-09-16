import Link from "next/link";
import CoilIcon from "./CoilIcon";
import { SITE_NAME } from "@/lib/site";

const sitemapGroups = [
  {
    heading: "Reference",
    links: [
      { href: "/guides", label: "Compatibility Guides" },
      { href: "/coils", label: "Coils" },
      { href: "/pods", label: "Pods" },
    ],
  },
  {
    heading: "Site",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/editorial-policy", label: "Editorial Policy" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/cookie-policy", label: "Cookie Policy" },
      { href: "/terms", label: "Terms & Disclaimer" },
      { href: "/age-notice", label: "Age Notice" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t-2 border-ink/10 bg-ink text-bg">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_2fr]">
        <div>
          <Link href="/" className="flex items-center gap-2 font-heading text-lg font-bold text-bg">
            <span className="flex h-9 w-9 items-center justify-center rounded-none border-2 border-amber bg-transparent text-amber">
              <CoilIcon className="h-5 w-5" />
            </span>
            {SITE_NAME}
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-bg/70">
            {SITE_NAME} is an independent UK reference site for pod, coil and
            e-liquid compatibility. We help adult vapers work out which
            replacement part fits their device and how to get the resistance,
            wattage and VG/PG ratio right, using manufacturer-stated
            specifications rather than our own lab testing.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {sitemapGroups.map((group) => (
            <div key={group.heading}>
              <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-amber">
                {group.heading}
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-bg/80 hover:text-bg hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-bg/15">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <p className="text-xs leading-relaxed text-bg/70">
            <strong className="text-amber">18+ only.</strong> This website and
            its content are intended for adults aged 18 or over who already
            smoke or vape, or who are seeking factual information on vaping
            products. Nothing on {SITE_NAME} is intended to encourage anyone
            under 18, or anyone who does not already smoke or vape, to start.
            Read our full{" "}
            <Link href="/age-notice" className="underline hover:text-amber">
              age notice
            </Link>
            .
          </p>
          <p className="mt-2 text-xs text-bg/50">
            &copy; {new Date().getFullYear()} {SITE_NAME}. Independent UK
            vaping information site. All specifications are manufacturer-stated
            and provided for reference only.
          </p>
        </div>
      </div>
    </footer>
  );
}
