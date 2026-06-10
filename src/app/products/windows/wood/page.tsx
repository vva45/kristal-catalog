import ProductCard from "../../../../components/ProductCard";

export default function WoodPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">

        <h1 className="text-5xl font-bold mb-4">
          Wood
        </h1>

        <p className="text-white/80 mb-12">
          Natural warmth & premium craftsmanship
        </p>

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

      </div>
    </main>
  );
}