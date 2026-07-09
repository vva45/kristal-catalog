import Link from "next/link";

export default function DoorsPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">

        <h1 className="text-5xl font-bold mb-12">
          Doors
        </h1>

        <div className="grid gap-8">

          {/* PVC */}

          <Link
            href="/products/doors/pvc"
            className="group relative overflow-hidden rounded-2xl h-[360px] block"
          >
            <img
              src="/categories/images/pvc-category.png"
              alt="PVC Doors"
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-500
                ease-out
                group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute bottom-8 left-8">
              <h2 className="text-5xl font-bold text-white">
                PVC
              </h2>

              <p className="text-white/80 mt-2">
                Energy-efficient entrance door systems
              </p>
            </div>
          </Link>

          {/* ALUMINIUM */}

          <Link
            href="/products/doors/aluminium"
            className="group relative overflow-hidden rounded-2xl h-[360px] block"
          >
            <img
              src="/categories/images/aluminium-category.png"
              alt="Aluminium Doors"
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-500
                ease-out
                group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute bottom-8 left-8">
              <h2 className="text-5xl font-bold text-white">
                Aluminium
              </h2>

              <p className="text-white/80 mt-2">
                Premium aluminium entrance solutions
              </p>
            </div>
          </Link>

          {/* STEEL */}

          <Link
            href="/products/doors/steel"
            className="group relative overflow-hidden rounded-2xl h-[360px] block"
          >
            <img
              src="/categories/images/steel-category.png"
              alt="Steel Doors"
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-500
                ease-out
                group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute bottom-8 left-8">
              <h2 className="text-5xl font-bold text-white">
                Steel
              </h2>

              <p className="text-white/80 mt-2">
                Maximum strength and security
              </p>
            </div>
          </Link>

          {/* WOOD */}

          <Link
            href="/products/doors/wood"
            className="group relative overflow-hidden rounded-2xl h-[360px] block"
          >
            <img
              src="/categories/images/wood-category.png"
              alt="Wood Doors"
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-500
                ease-out
                group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute bottom-8 left-8">
              <h2 className="text-5xl font-bold text-white">
                Wood
              </h2>

              <p className="text-white/80 mt-2">
                Natural elegance with modern performance
              </p>
            </div>
          </Link>

        </div>

      </div>
    </main>
  );
}