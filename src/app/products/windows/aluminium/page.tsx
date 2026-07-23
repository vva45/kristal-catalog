// src/app/products/windows/aluminium/page.tsx

import ProductCard from "../../../../components/ProductCard";
import CategoryHero from "../../../../components/CategoryHero";
import { getWindowSystems } from "../../../../data/products/doorSystems";

export default function AluminiumPage() {
  const products = getWindowSystems("aluminium");

  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <CategoryHero
        eyebrow="Aluminium Windows"
        title="Aluminium"
        description="Slim sightlines, large glazing surfaces and outstanding durability - premium aluminium window systems from Aluprof, Aliplast, Deceuninck, Cortizo and Reynaers."
      />

      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          {products.map((system) => (
            <ProductCard
              key={system.id}
              title={system.name}
              image={system.image}
              pdf={system.pdf}
              href={`/products/systems/aluminium/${system.id}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
