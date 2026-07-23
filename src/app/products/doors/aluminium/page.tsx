// EXAMPLE: src/app/products/doors/aluminium/page.tsx
//
// Shows how DoorHero + DoorIntro + DoorFeatures + DoorProductGrid + DoorBanner
// compose together, replacing the current "coming soon" placeholder.

import DoorHero from "../../../../components/doors/DoorHero";
import DoorIntro from "../../../../components/doors/DoorIntro";
import DoorFeatures from "../../../../components/doors/DoorFeatures";
import DoorProductGrid from "../../../../components/doors/DoorProductGrid";
import DoorBanner from "../../../../components/doors/DoorBanner";
import { getDoorSystems } from "../../../../data/products/doorSystems";

export default function AluminiumDoorsPage() {
  const products = getDoorSystems("aluminium");

  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <DoorHero
        eyebrow="Premium Installation - Germany"
        title="Aluminium Doors"
        description="Entrance doors, lift-slide terrace doors and folding systems built on Aluprof, Aliplast, Deceuninck, Cortizo and Reynaers profiles."
        image="/images/hero-villa.png"
      />

      <DoorIntro
        title="Strength, security and slim sightlines"
        paragraphs={[
          "Aluminium door systems combine narrow visible profiles with excellent structural strength, making them ideal for large entrance doors and expansive lift-slide terrace openings.",
          "From the ultra-slim Cor Vision Plus lift-slide door to the Despiro entrance door collection (see the full 48-design gallery under Entrance Doors), there is a system for every project.",
        ]}
        image="/images/aluminium-material.png"
        ctaLabel="Explore colours & finishes"
        ctaHref="/colors"
      />

      <DoorFeatures
        eyebrow="Why aluminium"
        title="Built for demanding projects"
        features={[
          {
            icon: "🔒",
            title: "Security",
            description:
              "Multi-point locking and reinforced frames across the Reynaers and Cortizo ranges.",
          },
          {
            icon: "🌡️",
            title: "Thermal performance",
            description:
              "Passivhaus-certified options like MasterPatio and MB-104 Passive for the lowest heat loss.",
          },
          {
            icon: "📐",
            title: "Large formats",
            description:
              "Lift-slide systems up to 4 x 4 m per sash for uninterrupted glazed walls.",
          },
        ]}
      />

      <DoorProductGrid
        title="Aluminium Door Systems"
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
