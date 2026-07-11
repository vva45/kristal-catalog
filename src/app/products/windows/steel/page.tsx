// app/products/windows/steel/page.tsx

import ProductCard from "../../../../components/ProductCard";
import { getWindowSystems } from "../../../../data/products/doorSystems";

export default function SteelPage() {
  const products = getWindowSystems("steel");

  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">

        <h1 className="text-5xl font-bold mb-4">
          Steel
        </h1>

        <p className="text-white/80 mb-12">
          Premium steel window systems
        </p>

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

      </div>
    </main>
  );
}
