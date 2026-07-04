import Link from "next/link";

export default function MaterialsPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">

      <section className="max-w-7xl mx-auto px-8 py-20">

        <h1 className="text-6xl font-bold mb-4">
          Materials
        </h1>

        <p className="text-xl text-white/80 max-w-3xl mb-20">
          Premium materials designed for performance,
          durability and aesthetics.
        </p>

        {/* PVC */}

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">

          <img
            src="/images/pvc-material.png"
            alt="PVC Windows"
            className="rounded-2xl w-full h-[320px] object-cover"
          />

          <div>
            <h2 className="text-4xl font-bold mb-4">
              PVC
            </h2>

            <p className="text-white/80 mb-6">
              Energy efficient and versatile systems,
              ideal for modern homes and renovation projects.
            </p>

            <ul className="space-y-3 text-white/90">
              <li>✓ Excellent thermal insulation</li>
              <li>✓ Low maintenance</li>
              <li>✓ Wide range of colours and finishes</li>
            </ul>

            <Link
              href="/products/windows/pvc"
              className="inline-block mt-8 bg-black px-6 py-3 rounded-lg"
            >
              Explore PVC Systems
            </Link>
          </div>

        </div>

        {/* Aluminium */}

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">

          <img
            src="/images/aluminium-material.png"
            alt="Aluminium Windows"
            className="rounded-2xl w-full h-[320px] object-cover"
          />

          <div>
            <h2 className="text-4xl font-bold mb-4">
              Aluminium
            </h2>

            <p className="text-white/80 mb-6">
              Contemporary aesthetics with exceptional
              durability and slim architectural lines.
            </p>

            <ul className="space-y-3 text-white/90">
              <li>✓ Slim sightlines</li>
              <li>✓ Large glazing surfaces</li>
              <li>✓ Outstanding durability</li>
            </ul>

            <Link
              href="/products/windows/aluminium"
              className="inline-block mt-8 bg-black px-6 py-3 rounded-lg"
            >
              Explore Aluminium Systems
            </Link>
          </div>

        </div>

        {/* Steel */}

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">

          <img
            src="/images/steel-material.png"
            alt="Steel Windows"
            className="rounded-2xl w-full h-[320px] object-cover"
          />

          <div>
            <h2 className="text-4xl font-bold mb-4">
              Steel
            </h2>

            <p className="text-white/80 mb-6">
              Ultra-slim profiles with timeless
              industrial aesthetics and maximum strength.
            </p>

            <ul className="space-y-3 text-white/90">
              <li>✓ Exceptional strength</li>
              <li>✓ Premium architectural appearance</li>
              <li>✓ Ultra slim profiles</li>
            </ul>

            <Link
              href="/products/windows/steel"
              className="inline-block mt-8 bg-black px-6 py-3 rounded-lg"
            >
              Explore Steel Systems
            </Link>
          </div>

        </div>

        {/* Wood */}

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">

          <img
            src="/images/wood-material.png"
            alt="Wood Windows"
            className="rounded-2xl w-full h-[320px] object-cover"
          />

          <div>
            <h2 className="text-4xl font-bold mb-4">
              Wood
            </h2>

            <p className="text-white/80 mb-6">
              Natural warmth and timeless elegance,
              combining traditional beauty with modern performance.
            </p>

            <ul className="space-y-3 text-white/90">
              <li>✓ Natural appearance</li>
              <li>✓ Excellent insulation</li>
              <li>✓ Sustainable material</li>
            </ul>

            <Link
              href="/products/windows/wood"
              className="inline-block mt-8 bg-black px-6 py-3 rounded-lg"
            >
              Explore Wood Systems
            </Link>
          </div>

        </div>

        {/* CTA */}

        <div className="bg-white/10 rounded-2xl p-12 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Not sure which material is right for you?
          </h2>

          <p className="text-white/80 mb-8">
            Our team can help you choose the perfect
            solution for your project.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-black px-8 py-4 rounded-lg"
          >
            Contact Us
          </Link>

        </div>

      </section>

    </main>
  );
}