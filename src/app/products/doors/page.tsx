// src/app/products/doors/page.tsx
//
// Doors landing page: premium intro + the four material banners.

import Link from "next/link";
import CategoryHero from "../../../components/CategoryHero";

const materials = [
  {
    href: "/products/doors/pvc",
    label: "PVC",
    tagline: "Energy-efficient entrance door systems",
    image: "/categories/images/pvc-category.png",
  },
  {
    href: "/products/doors/aluminium",
    label: "Aluminium",
    tagline: "Premium aluminium entrance solutions",
    image: "/categories/images/aluminium-category.png",
  },
  {
    href: "/products/doors/steel",
    label: "Steel",
    tagline: "Maximum strength and security",
    image: "/categories/images/steel-category.png",
  },
  {
    href: "/products/doors/wood",
    label: "Wood",
    tagline: "Natural elegance with modern performance",
    image: "/categories/images/wood-category.png",
  },
];

export default function DoorsPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <CategoryHero
        title="Doors"
        description="Entrance doors, sliding and folding terrace doors, and interior solutions - across four premium materials, each with its own character and performance."
      />

      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid gap-8">
          {materials.map((material) => (
            <Link
              key={material.href}
              href={material.href}
              className="group relative overflow-hidden rounded-2xl h-[360px] block"
            >
              <img
                src={material.image}
                alt={`${material.label} Doors`}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <h2 className="text-5xl font-bold text-white">
                  {material.label}
                </h2>
                <p className="text-white/80 mt-2">{material.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
