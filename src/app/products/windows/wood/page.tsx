// src/app/products/windows/wood/page.tsx

import ProductCard from "../../../../components/ProductCard";
import CategoryHero from "../../../../components/CategoryHero";

export default function WoodPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <CategoryHero
        eyebrow="Wood Windows"
        title="Wood"
        description="Natural warmth and timeless elegance, combining traditional craftsmanship with modern performance and insulation."
      />

      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          <ProductCard
            title="WOOD 78"
            image="/images/wood/wood-78.png"
            pdf="/pdf/wood/wood-78.pdf"
          />

          <ProductCard
            title="WOOD 92"
            image="/images/wood/wood-92.png"
            pdf="/pdf/wood/wood-92.pdf"
          />
        </div>
      </section>
    </main>
  );
}
