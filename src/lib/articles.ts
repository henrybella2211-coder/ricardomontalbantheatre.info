export type Article = {
  slug: string;
  title: string;
  category: "Compatibility" | "Troubleshooting" | "Specifications";
  excerpt: string;
  specBadges: string[];
  datePublished: string; // ISO date
  dateModified: string; // ISO date
  lastUpdatedLabel: string; // human phrasing
  readTime: string;
  heroImage: string;
  heroAlt: string;
};

export const articles: Article[] = [
  {
    slug: "pod-coil-compatibility-how-to-check-before-you-buy",
    title: "Pod and coil compatibility: how to check before you buy",
    category: "Compatibility",
    excerpt:
      "How to identify your device's coil family, why coils aren't interchangeable between brands, and how resistance affects flavour versus vapour production.",
    specBadges: ["Coil family ID", "0.15Ω–1.8Ω range", "MTL & DTL"],
    datePublished: "2025-11-03",
    dateModified: "2026-09-10",
    lastUpdatedLabel: "Last updated 10 September 2026",
    readTime: "8 min read",
    heroImage: "/images/smok-tank-atomizer-coil.jpg",
    heroAlt:
      "Close-up of a rebuildable atomizer coil head threaded onto a sub-ohm tank",
  },
  {
    slug: "why-does-my-pod-leak-causes-and-fixes",
    title: "Why does my pod leak? Common causes and fixes",
    category: "Troubleshooting",
    excerpt:
      "The usual culprits behind a leaking pod, from a coil that isn't seated properly to overfilling and worn seals, plus a step-by-step way to work out which one is yours.",
    specBadges: ["Leak diagnosis", "Seal & O-ring check", "6-step fix list"],
    datePublished: "2025-12-15",
    dateModified: "2026-09-12",
    lastUpdatedLabel: "Last updated 12 September 2026",
    readTime: "7 min read",
    heroImage: "/images/repairing-box-mod-hands.jpg",
    heroAlt: "Hands checking a pod is correctly seated into a box mod device",
  },
  {
    slug: "coil-resistance-eliquid-ratio-explained",
    title: "Coil resistance and e-liquid ratio explained: getting the setup right",
    category: "Specifications",
    excerpt:
      "Sub-ohm versus above-1-ohm coils, why VG/PG ratio needs to match your device type, and how nicotine salts pair with higher-resistance MTL pods.",
    specBadges: ["Sub-ohm vs 1Ω+", "VG/PG pairing", "Nic salt guide"],
    datePublished: "2026-01-20",
    dateModified: "2026-09-14",
    lastUpdatedLabel: "Last updated 14 September 2026",
    readTime: "9 min read",
    heroImage: "/images/eliquid-bottle-with-device.jpg",
    heroAlt: "Bottle of e-liquid standing next to a pod mod device on a table",
  },
  {
    slug: "kanthal-mesh-ceramic-coils-whats-the-difference",
    title: "Kanthal, mesh and ceramic coils: what's the difference?",
    category: "Specifications",
    excerpt:
      "The three coil build materials you'll see most often in replacement coils, how each is said to affect flavour, vapour, ramp-up time and lifespan, and a comparison table to check your own coil against.",
    specBadges: ["Kanthal / mesh / ceramic", "Ramp-up time", "Flavour vs vapour"],
    datePublished: "2026-08-20",
    dateModified: "2026-09-16",
    lastUpdatedLabel: "Last updated 16 September 2026",
    readTime: "8 min read",
    heroImage: "/images/kanthal-mesh-ceramic-atomizer-coil.jpg",
    heroAlt:
      "Close-up of a clear atomizer tank showing the coil and wicking chamber inside",
  },
  {
    slug: "replacing-your-coil-vs-replacing-the-whole-pod",
    title: "Replacing your coil vs replacing the whole pod: how to decide",
    category: "Compatibility",
    excerpt:
      "Why some devices need a whole new pod every time and others just need a coil swap, the typical cost difference between the two, and how to check which type of system you actually own.",
    specBadges: ["Closed vs open pods", "£ per replacement", "System ID checklist"],
    datePublished: "2026-08-25",
    dateModified: "2026-09-17",
    lastUpdatedLabel: "Last updated 17 September 2026",
    readTime: "8 min read",
    heroImage: "/images/pod-vape-kit-eliquid-bottle.jpg",
    heroAlt: "Pod vape kit standing next to its e-liquid bottle on a table",
  },
  {
    slug: "al-fakher-hypermax-prime-50k-pod-and-coil-compatibility-explained",
    title: "Al Fakher HyperMax Prime 50K: pod and coil compatibility explained",
    category: "Compatibility",
    excerpt:
      "How the HyperMax Prime 50K's \"Snap Dual\" module works, why its pods aren't a separate coil-and-pod pairing like some open systems, and how the whole design compares to the closed and open pod systems covered elsewhere on this site.",
    specBadges: ["Snap Dual pods", "2ml pod cap", "Rechargeable, closed system"],
    datePublished: "2026-09-15",
    dateModified: "2026-09-18",
    lastUpdatedLabel: "Last updated 18 September 2026",
    readTime: "7 min read",
    heroImage: "/images/rechargeable-pod-vape-kit-table.jpg",
    heroAlt: "A rechargeable pod vape kit and its pod resting on a wooden table",
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
