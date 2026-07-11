// app/products/doors/steel/page.tsx
// Replaces the "coming soon" placeholder now that we have real steel data.

import DoorHero from "../../../../components/doors/DoorHero";
import DoorProductGrid from "../../../../components/doors/DoorProductGrid";
import { getDoorSystems } from "../../../../data/products/doorSystems";

export default function SteelDoorsPage() {
  const products = getDoorSystems("steel");

  return (
    <main className="min-h-screen bg-[#0B3270] text-white">
      <DoorHero
        eyebrow="Premium Installation - Germany"
        title="Steel Doors"
        description="Slim, corrosion-resistant steel window and door systems with an industrial, timeless look."
        image="/images/hero-villa.png"
      />

      <DoorProductGrid
        title="Steel Door Systems"
        description="Technical data sheet and full manufacturer PDF for every system."
        products={products}
      />
    </main>
  );
}
