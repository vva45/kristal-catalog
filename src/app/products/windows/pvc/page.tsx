// src/app/products/windows/pvc/page.tsx
//
// Data-driven list from pvc-systems.ts (window + window-door category only).

import ProductCard from "../../../../components/ProductCard";
import CategoryHero from "../../../../components/CategoryHero";
import { getWindowSystems } from "../../../../data/products/doorSystems";

export default function PVCPage() {
  const products = getWindowSystems("pvc");

  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <CategoryHero
        eyebrow="PVC Windows"
        title="PVC"
        description="Energy-efficient, low-maintenance window systems with excellent thermal insulation - from Aluplast, Salamander, Gealan and Ekosun."
      />

      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          {products.map((system) => (
            <ProductCard
              key={system.id}
              title={system.name}
              image={system.image}
              pdf={system.pdf}
              href={`/products/systems/pvc/${system.id}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
