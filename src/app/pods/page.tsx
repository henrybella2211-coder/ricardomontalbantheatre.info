import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SpecBadge from "@/components/SpecBadge";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pod Reference",
  description:
    "A reference guide to UK pod system capacity limits, refillable versus pre-filled pods, and how e-liquid ratio should match your pod type.",
  alternates: { canonical: "/pods" },
};

const podTypes = [
  {
    name: "Refillable open pods",
    capacity: "Up to 2ml",
    ratio: "50/50 or 60PG/40VG",
    notes:
      "You fill these yourself from a bottle. Nicotine e-liquid tanks and pods are capped at 2ml capacity under UK regulations regardless of the pod's physical size.",
  },
  {
    name: "Closed / pre-filled pods",
    capacity: "2ml, sealed",
    ratio: "Fixed by manufacturer, usually nic salt",
    notes:
      "Arrive pre-filled and are discarded once empty. The coil is usually built into the pod itself, so the whole unit is replaced together.",
  },
  {
    name: "Refillable sub-ohm pods",
    capacity: "2ml (nicotine) tank chamber",
    ratio: "60/40 or 70/30 VG/PG",
    notes:
      "Higher-wattage pod systems that take swappable sub-ohm coils, sitting between a small MTL pod kit and a full tank mod.",
  },
];

export default function PodsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pods", href: "/pods" }]} />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
            Pod Reference
          </h1>
          <p className="mt-4 text-ink/75">
            UK pod systems fall into a few broad categories depending on
            whether you refill them yourself and what coil they use. Fill
            capacity is also tightly regulated, which shapes how these
            devices are designed. See our{" "}
            <Link href="/guides/why-does-my-pod-leak-causes-and-fixes" className="text-teal underline hover:text-teal-dark">
              leaking pod troubleshooting guide
            </Link>{" "}
            if yours isn&apos;t behaving as it should.
          </p>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-ink/10">
          <Image
            src="/images/pod-device-wooden-table.jpg"
            alt="Black box mod pod device resting on a brown wooden table"
            fill
            sizes="(min-width: 1024px) 35vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <h2 className="mt-12 font-heading text-2xl font-bold text-ink">
        Pod types
      </h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {podTypes.map((pod) => (
          <div key={pod.name} className="relative border-2 border-ink/12 bg-white p-5">
            <span className="absolute -top-3 right-4">
              <SpecBadge>{pod.capacity}</SpecBadge>
            </span>
            <h3 className="font-heading text-lg font-bold text-ink">{pod.name}</h3>
            <dl className="mt-3 space-y-1.5 text-sm">
              <div className="flex gap-2">
                <dt className="font-mono text-xs uppercase text-ink/45">Typical ratio</dt>
                <dd className="text-ink/75">{pod.ratio}</dd>
              </div>
            </dl>
            <p className="mt-3 text-sm text-ink/75">{pod.notes}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 border-2 border-teal/30 bg-teal/5 p-6">
        <h2 className="font-heading text-xl font-bold text-ink">
          UK capacity rules, in plain terms
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink/80">
          Under the Tobacco and Related Products Regulations (TRPR), any
          single tank, pod or cartridge holding nicotine-containing e-liquid
          is limited to 2ml capacity, whether it&apos;s refillable or arrives
          pre-filled, and bottles of nicotine e-liquid are capped at 10ml.
          Nicotine strength is capped at 20mg/ml. Since single-use disposable
          vapes became illegal to sell across the UK from 1 June 2025,
          rechargeable and refillable pod systems have become the main
          replacement route for people who previously used disposables.
        </p>
      </div>

      <p className="mt-8 text-sm text-ink/60">
        For how coil resistance interacts with VG/PG ratio and nicotine
        type in more depth, read our guide to{" "}
        <Link href="/guides/coil-resistance-eliquid-ratio-explained" className="text-teal underline hover:text-teal-dark">
          coil resistance and e-liquid ratio explained
        </Link>
        . Capacities and ratios above are general reference figures rather
        than measurements {SITE_NAME} has independently tested.
      </p>
    </div>
  );
}
