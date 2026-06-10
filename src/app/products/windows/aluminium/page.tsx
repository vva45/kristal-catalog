import ProductCard from "../../../../components/ProductCard";

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

          <ProductCard
            title="MB-45"
            image="/images/aluminium/mb-45.png"
            pdf="/pdf/aluminium/mb-45.pdf"
          />

          <ProductCard
            title="MB-60"
            image="/images/aluminium/mb-60.png"
            pdf="/pdf/aluminium/mb-60.pdf"
          />

          <ProductCard
            title="MB-79N"
            image="/images/aluminium/mb-79n.png"
            pdf="/pdf/aluminium/mb-79n.pdf"
          />

          <ProductCard
            title="MB-79N CASEMENT"
            image="/images/aluminium/mb-79n-casement.png"
            pdf="/pdf/aluminium/mb-79n-casement.pdf"
          />

          <ProductCard
            title="MB-86N"
            image="/images/aluminium/mb-86n.png"
            pdf="/pdf/aluminium/mb-86n.pdf"
          />

          <ProductCard
            title="MB-104 PASSIVE"
            image="/images/aluminium/mb-104-passive.png"
            pdf="/pdf/aluminium/mb-104-passive.pdf"
          />

          <ProductCard
            title="MB-FERROLINE"
            image="/images/aluminium/mb-ferroline.png"
            pdf="/pdf/aluminium/mb-ferroline.pdf"
          />

          <ProductCard
            title="ECOFUTURAL"
            image="/images/aluminium/ecofutural.png"
            pdf="/pdf/aluminium/ecofutural.pdf"
          />

          <ProductCard
            title="SUPERIAL"
            image="/images/aluminium/superial.png"
            pdf="/pdf/aluminium/superial.pdf"
          />

          <ProductCard
            title="GENESIS"
            image="/images/aluminium/genesis.png"
            pdf="/pdf/aluminium/genesis.pdf"
          />

          <ProductCard
            title="MAXLIGHT"
            image="/images/aluminium/maxlight.png"
            pdf="/pdf/aluminium/maxlight.pdf"
          />

          <ProductCard
            title="DECALU 88 STANDARD"
            image="/images/aluminium/decalu-88-standard.png"
            pdf="/pdf/aluminium/decalu-88-standard.pdf"
          />

          <ProductCard
            title="DECALU 94 RETRO"
            image="/images/aluminium/decalu-94-retro.png"
            pdf="/pdf/aluminium/decalu-94-retro.pdf"
          />

          <ProductCard
            title="DECALU 110 STEEL"
            image="/images/aluminium/decalu-110-steel.png"
            pdf="/pdf/aluminium/decalu-110-steel.pdf"
          />

          <ProductCard
            title="DECALU 88 HIDDEN"
            image="/images/aluminium/decalu-88-hidden.png"
            pdf="/pdf/aluminium/decalu-88-hidden.pdf"
          />

          <ProductCard
            title="CORTIZO CASEMENT"
            image="/images/aluminium/cortizo-casement.png"
            pdf="/pdf/aluminium/cortizo-casement.pdf"
          />

          <ProductCard
            title="MASTERLINE 8"
            image="/images/aluminium/masterline-8.png"
            pdf="/pdf/aluminium/masterline-8.pdf"
          />

          <ProductCard
            title="MASTERLINE 8 VERDECKTER FLÜGEL"
            image="/images/aluminium/masterline-8-verdeckter-flugel.png"
            pdf="/pdf/aluminium/masterline-8-verdeckter-flugel.pdf"
          />

          <ProductCard
            title="SLIM LINE 38"
            image="/images/aluminium/slimline-38.png"
            pdf="/pdf/aluminium/slimline-38.pdf"
          />

          <ProductCard
            title="CS 77"
            image="/images/aluminium/cs-77.png"
            pdf="/pdf/aluminium/cs-77.pdf"
          />

        </div>
      </div>
    </main>
  );
}