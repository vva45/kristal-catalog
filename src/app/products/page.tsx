import CategoryCard from "../../components/CategoryCard";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">

      <section className="max-w-7xl mx-auto px-8 py-20">

        <h1 className="text-6xl font-bold mb-4">
          Products
        </h1>

        <p className="text-xl text-white/80 max-w-3xl mb-16">
          Explore our complete range of premium window,
          door and architectural systems designed for
          modern living.
        </p>

        <div className="grid gap-8">
<div className="grid md:grid-cols-4 gap-6 mb-16">

  <div className="bg-white/10 rounded-xl p-6">
    <div className="text-4xl font-bold">20+</div>
    <div className="text-white/70">PVC Systems</div>
  </div>

  <div className="bg-white/10 rounded-xl p-6">
    <div className="text-4xl font-bold">15+</div>
    <div className="text-white/70">Aluminium Systems</div>
  </div>

  <div className="bg-white/10 rounded-xl p-6">
    <div className="text-4xl font-bold">15+</div>
    <div className="text-white/70">Steel Systems</div>
  </div>

  <div className="bg-white/10 rounded-xl p-6">
    <div className="text-4xl font-bold">100+</div>
    <div className="text-white/70">Configurations</div>
  </div>

</div>
          <CategoryCard
            title="Windows"
            image="/categories/windows.png"
            href="/products/windows"
          />

          <CategoryCard
            title="Doors"
            image="/categories/doors.png"
            href="/products/doors"
          />

          <CategoryCard
            title="Roller Shutters"
            image="/categories/roller-shutters.png"
            href="/products/roller-shutters"
          />

          <CategoryCard
            title="Mosquito Nets"
            image="/categories/mosquito-nets.png"
            href="/products/mosquito-nets"
          />

          <CategoryCard
            title="Garage Doors"
            image="/categories/garage-doors.png"
            href="/products/garage-doors"
          />

          <CategoryCard
            title="Main Gates"
            image="/categories/main-gates.png"
            href="/products/main-gates"
          />

          <CategoryCard
            title="Terrace & Pergolas"
            image="/categories/pergolas.png"
            href="/products/pergolas"
          />

          <CategoryCard
            title="Accessories"
            image="/categories/accessories.png"
            href="/products/accessories"
          />

        </div>

      </section>

    </main>
  );
}