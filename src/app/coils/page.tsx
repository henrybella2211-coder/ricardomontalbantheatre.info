import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SpecBadge from "@/components/SpecBadge";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Coil Reference",
  description:
    "A reference guide to common vape coil types, resistance ranges and materials, and how to tell which family your device uses.",
  alternates: { canonical: "/coils" },
};

const coilTypes = [
  {
    name: "MTL round-wire / ceramic coils",
    resistance: "1.0Ω–1.8Ω",
    wicking: "Cotton or ceramic",
    notes:
      "Small wicking ports, low wattage. Built for a tight, cigarette-like draw and thinner e-liquid.",
  },
  {
    name: "Restricted DTL coils",
    resistance: "0.6Ω–1.0Ω",
    wicking: "Cotton",
    notes:
      "A middle ground: looser draw than MTL, but still power-limited enough to suit 60/40 VG/PG liquid.",
  },
  {
    name: "Sub-ohm mesh coils",
    resistance: "0.15Ω–0.5Ω",
    wicking: "Cotton, large wicking slots",
    notes:
      "Mesh or multi-strand builds heat evenly across a wider surface, suited to high-VG liquid and open DTL airflow.",
  },
  {
    name: "Dual/multi-coil builds",
    resistance: "0.12Ω–0.3Ω (combined)",
    wicking: "Cotton, high flow",
    notes:
      "Two or more coil elements wired together, generally found in higher-wattage sub-ohm tanks rather than pod systems.",
  },
];

export default function CoilsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Coils", href: "/coils" }]} />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
            Coil Reference
          </h1>
          <p className="mt-4 text-ink/75">
            Coils are usually grouped into families by how much resistance
            they offer and the draw style they&apos;re built for. This
            reference covers the broad categories you&apos;ll see across most
            UK pod kits, tanks and mods, so you know roughly what a coil is
            for before checking exact device compatibility in our{" "}
            <Link href="/guides/pod-coil-compatibility-how-to-check-before-you-buy" className="text-teal underline hover:text-teal-dark">
              compatibility guide
            </Link>
            .
          </p>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-ink/10">
          <Image
            src="/images/eliquid-bottles-box-mod.jpg"
            alt="Red box mod device standing beside several e-liquid bottles on a table"
            fill
            sizes="(min-width: 1024px) 35vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <h2 className="mt-12 font-heading text-2xl font-bold text-ink">
        Common coil families
      </h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {coilTypes.map((coil) => (
          <div key={coil.name} className="relative border-2 border-ink/12 bg-white p-5">
            <span className="absolute -top-3 right-4">
              <SpecBadge>{coil.resistance}</SpecBadge>
            </span>
            <h3 className="font-heading text-lg font-bold text-ink">{coil.name}</h3>
            <dl className="mt-3 space-y-1.5 text-sm">
              <div className="flex gap-2">
                <dt className="font-mono text-xs uppercase text-ink/45">Wicking</dt>
                <dd className="text-ink/75">{coil.wicking}</dd>
              </div>
            </dl>
            <p className="mt-3 text-sm text-ink/75">{coil.notes}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 border-2 border-amber/40 bg-amber/10 p-6">
        <h2 className="font-heading text-xl font-bold text-ink">
          Coil care basics
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-ink/80">
          <li>
            Prime a new coil by adding a few drops of e-liquid directly onto
            the visible cotton before fitting it, and let it sit for a few
            minutes before the first vape to avoid a dry hit.
          </li>
          <li>
            Chain vaping (puffing repeatedly with no gap) can outpace how
            fast a coil rewicks, particularly on lower-wattage MTL coils.
          </li>
          <li>
            A burnt taste that doesn&apos;t clear after re-priming usually
            means the coil has reached the end of its life rather than
            needing a further break-in period.
          </li>
          <li>
            Sweetened or very high-VG e-liquids tend to gunk coils faster,
            which shortens the practical lifespan compared with the same
            coil used with a clearer, lower-sweetener liquid.
          </li>
        </ul>
      </div>

      <p className="mt-8 text-sm text-ink/60">
        Resistance ranges above reflect typical, widely-available UK coil
        products and are provided as general reference, not measurements
        {SITE_NAME} has independently tested. Always check the specific coil
        packaging for the manufacturer-stated resistance and wattage range.
        For pod capacity and e-liquid ratio pairing, see our{" "}
        <Link href="/pods" className="text-teal underline hover:text-teal-dark">
          pod reference
        </Link>
        .
      </p>
    </div>
  );
}
