import ProductCard from "../../../../components/ProductCard";

export default function SteelPage() {
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

          <ProductCard
            title="PRESTO"
            image="/images/steel/presto.png"
            pdf="/pdf/steel/presto.pdf"
          />

          <ProductCard
            title="UNICO"
            image="/images/steel/unico.png"
            pdf="/pdf/steel/unico.pdf"
          />

          <ProductCard
            title="UNICO XS"
            image="/images/steel/unico-xs.png"
            pdf="/pdf/steel/unico-xs.pdf"
          />

          <ProductCard
            title="UNICO XS CASEMENT"
            image="/images/steel/unico-xs-casement.png"
            pdf="/pdf/steel/unico-xs-casement.pdf"
          />

        </div>
      </div>
    </main>
  );
}