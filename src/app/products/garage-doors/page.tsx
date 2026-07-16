// src/app/products/garage-doors/page.tsx

import DoorHero from "../../../components/doors/DoorHero";
import DoorIntro from "../../../components/doors/DoorIntro";
import DoorFeatures from "../../../components/doors/DoorFeatures";
import DoorProductGrid from "../../../components/doors/DoorProductGrid";
import DoorBanner from "../../../components/doors/DoorBanner";
import { getGarageDoorSystems } from "../../../data/products/doorSystems";

export default function GarageDoorsPage() {
  const steelProducts = getGarageDoorSystems("steel");

  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <DoorHero
        eyebrow="Premium Installation - Germany"
        title="Garage Doors"
        description="Insulated sectional garage doors with quiet, safe operation - matched in colour and style to your windows and entrance door."
        image="/categories/garage-doors.png"
      />

      <DoorIntro
        title="The biggest door in your house deserves attention"
        paragraphs={[
          "A garage door is often the largest moving element of a home. Insulated sectional panels keep the garage - and the rooms around it - warmer, while running quietly on every cycle.",
          "Panel designs, woodgrain foils and RAL colours can be matched to your façade, so the garage door completes the look instead of breaking it.",
        ]}
        image="/categories/garage-doors.png"
        ctaLabel="Explore colours & finishes"
        ctaHref="/colors"
      />

      <DoorFeatures
        eyebrow="Why sectional doors"
        title="Insulated, quiet and secure"
        features={[
          {
            icon: "🌡️",
            title: "Insulated panels",
            description:
              "Foam-filled steel sections reduce heat loss - important for attached and heated garages.",
          },
          {
            icon: "🔒",
            title: "Anti-lift security",
            description:
              "Modern locking mechanisms and guided tracks resist forced opening.",
          },
          {
            icon: "📱",
            title: "Motorised comfort",
            description:
              "Electric drives with remote control, and smart-home integration on request.",
          },
        ]}
      />

      {steelProducts.length > 0 && (
        <DoorProductGrid
          title="Steel Garage Doors"
          description="Swing-opening steel garage doors with insulated segmented panels."
          products={steelProducts}
        />
      )}

      <DoorBanner
        title="Full range coming soon"
        description="We're preparing the complete garage door catalog. Send us your opening dimensions and we'll recommend the right door."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </main>
  );
}
