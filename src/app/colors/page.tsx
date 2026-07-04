import ColorCard from "../../components/ColorCard";

export default function ColorsPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">

      <div className="max-w-7xl mx-auto px-8 py-20">

        <h1 className="text-6xl font-bold mb-4">
  Colours & Finishes
</h1>

<p className="text-xl text-white/80 max-w-3xl mb-16">
  Discover our most popular colours and surface finishes for PVC, aluminium and steel systems.
</p>
        {/* PVC */}

        <section className="mb-20">

     <h2 className="text-4xl font-bold mb-8">
  PVC Colours
</h2>

<div className="grid md:grid-cols-4 gap-8">
  <ColorCard name="White" color="#FFFFFF" />
  <ColorCard name="Anthracite Grey" color="#4A4A4A" />
  <ColorCard name="Golden Oak" color="#B57A3F" />
  <ColorCard name="Walnut" color="#6B4A2D" />
</div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

  <a
    href="/pdf/pvc/color-aluplast.pdf"
    target="_blank"
    className="bg-white text-black p-6 rounded-xl font-semibold hover:bg-zinc-100 transition"
  >
    Aluplast Colour Collection
  </a>

  <a
    href="/pdf/pvc/color-salamander.pdf"
    target="_blank"
    className="bg-white text-black p-6 rounded-xl font-semibold hover:bg-zinc-100 transition"
  >
    Salamander Colour Collection
  </a>

  <a
    href="/pdf/pvc/color-gealan-acrylcolor.pdf"
    target="_blank"
    className="bg-white text-black p-6 rounded-xl font-semibold hover:bg-zinc-100 transition"
  >
    Gealan Acrylcolor Collection
  </a>

  <a
    href="/pdf/pvc/color-ekosun.pdf"
    target="_blank"
    className="bg-white text-black p-6 rounded-xl font-semibold hover:bg-zinc-100 transition"
  >
    Ekosun Colour Collection
  </a>

</div>

        </section>

        {/* Aluminium */}

        <section className="mb-20">

          <h2 className="text-4xl font-bold mb-8">
            Aluminium Colours
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <ColorCard
              name="RAL 7016"
              color="#383e42"
            />

            <ColorCard
              name="RAL 9005"
              color="#111111"
            />

            <ColorCard
              name="RAL 9006"
              color="#b6b6b6"
            />

            <ColorCard
              name="RAL 9007"
              color="#8f8b84"
            />

          </div>

        </section>

        {/* Steel */}

        <section className="mb-20">

          <h2 className="text-4xl font-bold mb-8">
            Steel Colours
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <ColorCard
              name="Jet Black"
              color="#101010"
            />

            <ColorCard
              name="Graphite Grey"
              color="#4b4f54"
            />

            <ColorCard
              name="Pure White"
              color="#ffffff"
            />

            <ColorCard
              name="Steel Grey"
              color="#6f7175"
            />

          </div>

        </section>

      </div>

    </main>
  );
}