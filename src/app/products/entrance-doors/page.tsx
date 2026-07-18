// src/app/products/entrance-doors/page.tsx
//
// Entrance Doors landing page. Unlike Windows/Doors, this category isn't
// split by material - it's organised by partner brand/collection, since
// all of these come from ROKA and Monumenta rather than Kristall
// Fenster's own material-based catalog.

import Link from "next/link";
import CategoryHero from "../../../components/CategoryHero";

const collections = [
  {
    href: "/products/entrance-doors/roka-function",
    label: "Roka Function",
    tagline: "10 entry-level designs, ROKA Standard profile system",
    badge: "ROKA",
    live: true,
  },
  {
    href: "/products/entrance-doors/roka-select",
    label: "Roka Select",
    tagline: "22 designs in Wicona aluminium, 3 personalisation packages",
    badge: "ROKA",
    live: true,
  },
  {
    href: "/products/entrance-doors/roka-steel",
    label: "Roka Steel",
    tagline: "Interior & exterior steel door, sliding and glazing systems",
    badge: "ROKA",
    live: true,
  },
  {
    href: "/products/entrance-doors/roka-signature",
    label: "Roka Signature",
    tagline: "The flagship collection, 7 signature design themes",
    badge: "ROKA",
    live: true,
  },
  {
    href: "/products/entrance-doors/monumenta",
    label: "Monumenta",
    tagline: "Bespoke, artisan-crafted monumental doors",
    badge: "Monumenta",
    live: true,
  },
];

export default function EntranceDoorsPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <CategoryHero
        eyebrow="Entrance Doors"
        title="Entrance Doors"
        description="A curated selection from specialist partner brands ROKA and Monumenta - see a few examples here, then explore each brand's full range and get support directly from them."
      />

      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.label}
              href={collection.href}
              className={`group relative overflow-hidden rounded-2xl h-[280px] block bg-white/10 ${
                collection.live ? "" : "pointer-events-none opacity-60"
              }`}
            >
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <span className="self-start bg-yellow-400 text-black text-xs font-bold uppercase px-3 py-1 rounded-full">
                  {collection.badge}
                </span>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {collection.label}
                  </h2>
                  <p className="text-white/70">{collection.tagline}</p>
                  {!collection.live && (
                    <p className="text-yellow-400 text-sm mt-3 font-semibold">
                      Coming soon
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
