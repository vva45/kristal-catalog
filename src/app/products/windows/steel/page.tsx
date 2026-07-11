// src/app/products/windows/steel/page.tsx

import ProductCard from "../../../../components/ProductCard";
import CategoryHero from "../../../../components/CategoryHero";
import { getWindowSystems } from "../../../../data/products/doorSystems";

export default function SteelPage() {
  const products = getWindowSystems("steel");

  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <CategoryHero
        eyebrow="Steel Windows"
        title="Steel"
        description="Ultra-slim profiles with a timeless industrial look and maximum strength - ideal for heritage renovations and modern architectural glazing."
      />

      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          {products.map((system) => (
            <ProductCard
              key={system.id}
              title={system.name}
              image={system.image}
              pdf={system.pdf}
              href={`/products/systems/steel/${system.id}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
