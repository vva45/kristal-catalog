// app/products/windows/pvc/page.tsx
//
// Replaces the 22 hand-written <ProductCard> blocks with a data-driven
// list from pvc-systems.ts (window + window-door category only - the
// sliding/lift-slide-only systems show on the Doors page instead).

import ProductCard from "../../../../components/ProductCard";
import { getWindowSystems } from "../../../../data/products/doorSystems";

export default function PVCPage() {
  const products = getWindowSystems("pvc");

  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">

        <h1 className="text-5xl font-bold mb-12">
          PVC
        </h1>

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

      </div>
    </main>
  );
}
