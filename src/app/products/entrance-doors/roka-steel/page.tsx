// src/app/products/entrance-doors/roka-steel/page.tsx

import DoorHero from "../../../../components/doors/DoorHero";
import DoorIntro from "../../../../components/doors/DoorIntro";
import DoorFeatures from "../../../../components/doors/DoorFeatures";
import PartnerDoorCard from "../../../../components/PartnerDoorCard";
import PartnerBanner from "../../../../components/PartnerBanner";
import SectionTitle from "../../../../components/cards/SectionTitle";
import { rokaSteelDoors, rokaSteelBrand } from "../../../../data/partners/roka-steel";

export default function RokaSteelPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <DoorHero
        eyebrow="ROKA - Steel Collection"
        title="Roka Steel"
        description="Slim steel profiles and large-format glazing for interior partitions, sliding and pivot doors, sound- and fire-rated doors, and full exterior door-and-window systems."
        image="/images/entrance-doors/roka-steel-exterior.jpg"
        ctaLabel="See example types"
        ctaHref="#models"
      />

      <DoorIntro
        title="One steel language, indoors and out"
        paragraphs={[
          "The Steel Collection covers the full range of openings: hinged and pivot doors, sliding doors, fixed glazed partitions, and acoustic- or fire-rated doors for interiors - plus full steel-and-glass entrance door and window systems for the exterior.",
          "Slim sightlines and large glazing areas create an architectural statement suited to galleries, boutiques, offices and prestigious private homes alike, while sharing the same profile language throughout the building.",
        ]}
        image="/images/entrance-doors/roka-steel-hinged-door.jpg"
      />

      <DoorFeatures
        eyebrow="Why Roka Steel"
        title="Built for architecture, not just openings"
        features={[
          {
            icon: "🪟",
            title: "Maximum glazing",
            description:
              "Slim steel profiles keep sightlines minimal, letting large glass areas define the space.",
          },
          {
            icon: "🚪",
            title: "Every opening type",
            description:
              "Hinged, pivot, sliding and fixed panel systems, all sharing one consistent design language.",
          },
          {
            icon: "🔇",
            title: "Sound & fire-rated options",
            description:
              "Acoustic laminated glazing and fire-rated door systems for demanding interiors.",
          },
        ]}
      />

      <section id="models" className="max-w-7xl mx-auto px-8 py-20 scroll-mt-24">
        <SectionTitle
          title="Example Door Types"
          description="A look across the range - interior and exterior - see the complete Steel Collection catalogue below."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {rokaSteelDoors.map((model) => (
            <PartnerDoorCard key={model.id} model={model} />
          ))}
        </div>
      </section>

      <PartnerBanner
        brand={rokaSteelBrand}
        catalogPdf="/pdf/entrance-doors/roka-steel-catalogue.pdf"
        catalogName="Steel"
      />
    </main>
  );
}
