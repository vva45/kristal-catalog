// EXAMPLE: products/windows/aluminium/page.tsx
//
// Same page, but data-driven: pulls from aluminium-systems.ts instead of
// 20 hand-written <ProductCard> blocks, and each card now links to its
// technical detail page. This is the pattern to copy for the PVC page too.

import ProductCard from "../../../../components/ProductCard";
import { aluminiumSystems } from "../../../../data/products/aluminium-systems";

export default function AluminiumPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">

        <h1 className="text-5xl font-bold mb-4">
          Aluminium
        </h1>

        <p className="text-white/80 mb-12">
          Premium aluminium window systems
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {aluminiumSystems.map((system) => (
            <ProductCard
              key={system.id}
              title={system.name}
              image={system.image}
              pdf={system.pdf}
              href={`/products/systems/aluminium/${system.id}`}
            />
          ))}
        </div>

      </div>
    </main>
  );
}
