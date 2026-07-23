// src/app/products/entrance-doors/roka-select/page.tsx

import DoorHero from "../../../../components/doors/DoorHero";
import DoorIntro from "../../../../components/doors/DoorIntro";
import DoorFeatures from "../../../../components/doors/DoorFeatures";
import PartnerDoorCard from "../../../../components/PartnerDoorCard";
import PartnerBanner from "../../../../components/PartnerBanner";
import SectionTitle from "../../../../components/cards/SectionTitle";
import { rokaSelectDoors, rokaSelectBrand } from "../../../../data/partners/roka-select";

export default function RokaSelectPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <DoorHero
        eyebrow="ROKA - Entrance Doors"
        title="Roka Select"
        description="22 designs built on the Wicona-engineered ROKA Exclusive aluminium profile, with three surface worlds to choose from: powder coating, real wood veneer, and ceramic."
        image="/images/entrance-doors/roka-select-19.jpg"
        ctaLabel="See example designs"
        ctaHref="#models"
      />

      <DoorIntro
        title="Robust, elegant, and made to personalise"
        paragraphs={[
          "Select doors are built on the Wicona ROKA Exclusive system, with sashes flush inside and out for a clean, modern silhouette, and a new multi-point locking system for a long-lasting, high-security seal.",
          "Choose from three personalisation packages, from the essentials to a full black-design finish, and from 20+ surfaces spanning matt or fine-structure powder coating, real oak veneer, and ceramic panels.",
        ]}
        image="/images/entrance-doors/roka-select-13.jpg"
      />

      <DoorFeatures
        eyebrow="Why Roka Select"
        title="Three surface worlds, one system"
        features={[
          {
            icon: "🎨",
            title: "Powder coating",
            description:
              "Matt or fine-structure finishes in classic RAL shades plus warm earth tones.",
          },
          {
            icon: "🌳",
            title: "Real wood veneer",
            description:
              "Genuine oak veneers (Country, Harmony, Dark, Elegant Old Oak) for a natural, timeless look.",
          },
          {
            icon: "🪨",
            title: "Ceramic surfaces",
            description:
              "Stone-inspired ceramic panels for outstanding durability and a premium finish.",
          },
        ]}
      />

      <section id="models" className="max-w-7xl mx-auto px-8 py-20 scroll-mt-24">
        <SectionTitle
          title="Example Designs"
          description="6 of the 22 Select models, two from each surface world - see the complete collection in the catalogue below."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {rokaSelectDoors.map((model) => (
            <PartnerDoorCard key={model.id} model={model} />
          ))}
        </div>
      </section>

      <PartnerBanner
        brand={rokaSelectBrand}
        catalogPdf="/pdf/entrance-doors/roka-select-catalogue.pdf"
        catalogName="Select"
      />
    </main>
  );
}
