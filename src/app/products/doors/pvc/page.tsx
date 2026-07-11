// src/app/products/doors/pvc/page.tsx
//
// Premium layout (hero + intro + features + grid + banner), matching the
// aluminium doors page. Product grid is data-driven from pvc-systems.ts,
// which also removes the old hand-written 27-card list.

import DoorHero from "../../../../components/doors/DoorHero";
import DoorIntro from "../../../../components/doors/DoorIntro";
import DoorFeatures from "../../../../components/doors/DoorFeatures";
import DoorProductGrid from "../../../../components/doors/DoorProductGrid";
import DoorBanner from "../../../../components/doors/DoorBanner";
import { getDoorSystems } from "../../../../data/products/doorSystems";

export default function PVCDoorsPage() {
  const products = getDoorSystems("pvc");

  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <DoorHero
        eyebrow="Premium Installation - Germany"
        title="PVC Doors"
        description="Energy-efficient entrance, sliding and lift-slide door systems built on Aluplast, Salamander, Gealan and Ekosun profiles."
        image="/images/hero-villa.png"
      />

      <DoorIntro
        title="Comfort, efficiency and everyday value"
        paragraphs={[
          "PVC door systems deliver excellent thermal insulation with very low maintenance, making them the go-to choice for modern homes and renovation projects alike.",
          "From the compact Ideal 4000 to the passive-house-grade Energeto 8000 and the wide-opening HST 85 lift-slide door, the range covers every budget and opening type.",
        ]}
        image="/images/pvc-material.png"
        ctaLabel="Explore colours & finishes"
        ctaHref="/colors"
      />

      <DoorFeatures
        eyebrow="Why PVC"
        title="Efficient, quiet and low-maintenance"
        features={[
          {
            icon: "🌡️",
            title: "Thermal insulation",
            description:
              "Multi-chamber profiles reach Uw values as low as 0.72 W/m²K on the Energeto 8000.",
          },
          {
            icon: "🧼",
            title: "Low maintenance",
            description:
              "Weatherproof surfaces that never need painting - just an occasional wipe-down.",
          },
          {
            icon: "🎨",
            title: "Colours & finishes",
            description:
              "A wide range of solid colours and wood-effect foils to match any façade.",
          },
        ]}
      />

      <DoorProductGrid
        title="PVC Door Systems"
        description="Technical data sheet and full manufacturer PDF for every system."
        products={products}
      />

      <DoorBanner
        title="Not sure which system fits your project?"
        description="Send us your dimensions and we'll recommend the right door system."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </main>
  );
}
