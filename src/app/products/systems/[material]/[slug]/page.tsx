// app/products/systems/[material]/[slug]/page.tsx
//
// Canonical technical detail page for ANY system (works for a "window-door"
// system whether it's linked from the Windows or the Doors listing - one
// URL per product instead of duplicating pages).
//
// Example URL: /products/systems/aluminium/mb-45
//
// NOTE: adjust the "../../../../../" import depth below if your actual
// folder structure differs (this assumes data/ and components/ sit at the
// project root, siblings of app/).

import Link from "next/link";
import { notFound } from "next/navigation";
import { aluminiumSystems } from "../../../../../data/products/aluminium-systems";
import { pvcSystems } from "../../../../../data/products/pvc-systems";
import { steelSystems } from "../../../../../data/products/steel-systems";
import { ProductSystem } from "../../../../../data/products/types";
import ProductSpecTable from "../../../../../components/ProductSpecTable";

const systemsByMaterial: Record<string, ProductSystem[]> = {
  aluminium: aluminiumSystems,
  pvc: pvcSystems,
  steel: steelSystems,
  // wood: woodSystems,  <- add once/if that catalog ever arrives
};

export function generateStaticParams() {
  return Object.entries(systemsByMaterial).flatMap(([material, systems]) =>
    systems.map((system) => ({ material, slug: system.id }))
  );
}

const categoryLabels: Record<string, string> = {
  window: "Window system",
  "window-door": "Window & door system",
  door: "Door system",
  "entrance-door": "Entrance door",
  "sliding-door": "Sliding door system",
  "lift-slide-door": "Lift-slide door system",
  "folding-door": "Folding door system",
  "guillotine-window": "Guillotine window",
  "fire-resistant": "Fire-resistant system",
};

export default async function ProductSystemPage({
  params,
}: {
  params: Promise<{ material: string; slug: string }>;
}) {
  const { material, slug } = await params;
  const systems = systemsByMaterial[material];
  const product = systems?.find((s) => s.id === slug);

  if (!product) return notFound();

  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <div className="max-w-5xl mx-auto px-8 py-16">

        <Link
          href={`/products/windows/${material}`}
          className="text-white/60 hover:text-white text-sm mb-8 inline-block"
        >
          ← Back to {material.toUpperCase()}
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-yellow-400 text-black text-xs font-bold uppercase px-3 py-1 rounded-full">
            {product.manufacturer}
          </span>
          <span className="bg-white/10 text-white/80 text-xs font-semibold uppercase px-3 py-1 rounded-full">
            {categoryLabels[product.category] ?? product.category}
          </span>
        </div>

        <h1 className="text-5xl font-bold mb-4">{product.name}</h1>

        {product.variants && product.variants.length > 0 && (
          <p className="text-white/70 mb-10">
            Available variants: {product.variants.join(", ")}
          </p>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[360px] object-contain bg-white/5 rounded-2xl mb-10"
        />

        <h2 className="text-2xl font-bold mb-4">Technical Data</h2>

        <ProductSpecTable specs={product.specs} />

        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href={product.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-zinc-800 transition px-8 py-4 rounded-lg font-semibold"
          >
            Download Technical PDF
          </a>

          <Link
            href="/contact"
            className="bg-white/10 hover:bg-white/20 transition px-8 py-4 rounded-lg font-semibold"
          >
            Ask About This System
          </Link>
        </div>

      </div>
    </main>
  );
}
