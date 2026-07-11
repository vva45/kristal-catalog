// src/app/products/windows/page.tsx
//
// Windows landing page: premium intro + the four material banners.

import Link from "next/link";
import CategoryHero from "../../../components/CategoryHero";

const materials = [
  {
    href: "/products/windows/pvc",
    label: "PVC",
    tagline: "High-performance PVC systems",
    image: "/categories/images/pvc-category.png",
  },
  {
    href: "/products/windows/aluminium",
    label: "Aluminium",
    tagline: "Modern design with superior durability",
    image: "/categories/images/aluminium-category.png",
  },
  {
    href: "/products/windows/steel",
    label: "Steel",
    tagline: "Durable and corrosion-resistant steel systems",
    image: "/categories/images/steel-category.png",
  },
  {
    href: "/products/windows/wood",
    label: "Wood",
    tagline: "Natural beauty and durability",
    image: "/categories/images/wood-category.png",
  },
];

export default function WindowsPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <CategoryHero
        title="Windows"
        description="From energy-efficient PVC to ultra-slim steel profiles - premium window systems engineered for performance, durability and timeless design."
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
                alt={material.label}
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
