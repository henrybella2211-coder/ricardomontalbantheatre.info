import Link from "next/link";
import CoilIcon from "./CoilIcon";
import { SITE_NAME } from "@/lib/site";

const navLinks = [
  { href: "/guides", label: "Compatibility Guides" },
  { href: "/coils", label: "Coils" },
  { href: "/pods", label: "Pods" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="border-b-2 border-ink/10 bg-bg/95 backdrop-blur supports-[backdrop-filter]:bg-bg/80 sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-none border-2 border-teal bg-teal text-bg">
            <CoilIcon className="h-5 w-5" />
          </span>
          <span>
            Coil <span className="text-teal">&amp;</span> Cloud
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 font-mono text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-ink/80 transition-colors hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Primary" className="md:hidden">
          <ul className="flex items-center gap-4 font-mono text-xs">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-ink/80 hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="sr-only">{SITE_NAME}: compatibility, specs and setup, sorted.</p>
    </header>
  );
}
