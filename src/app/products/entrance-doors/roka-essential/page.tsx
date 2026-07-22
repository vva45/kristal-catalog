// src/app/products/entrance-doors/roka-essential/page.tsx

import DoorHero from "../../../../components/doors/DoorHero";
import DoorIntro from "../../../../components/doors/DoorIntro";
import DoorFeatures from "../../../../components/doors/DoorFeatures";
import PartnerDoorCard from "../../../../components/PartnerDoorCard";
import PartnerBanner from "../../../../components/PartnerBanner";
import SectionTitle from "../../../../components/cards/SectionTitle";
import { rokaEssentialDoors, rokaEssentialBrand } from "../../../../data/partners/roka-essential";

export default function RokaEssentialPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <DoorHero
        eyebrow="ROKA - Entrance Doors"
        title="Roka Essential"
        description="Top quality at an attractive price. 8 carefully selected entrance door designs on the ROKA Exclusive profile system, built for timeless, versatile style."
        image="/images/entrance-doors/roka-essential-8.jpg"
        ctaLabel="See example designs"
        ctaHref="#models"
      />

      <DoorIntro
        title="Elegance and durability, without the premium price"
        paragraphs={[
          "Essential brings together an affordable price and the highest quality standards. Its 8 models were carefully selected for timeless, versatile, minimalist design that suits single-family homes of any style.",
          "Every door comes with 3-pane glazing (Ug 0.5 W/m²K with a black warm-edge spacer), a 3-point security lock, and a stainless steel handle - the same attention to detail as the rest of the ROKA range, at entry-level pricing.",
        ]}
        image="/images/entrance-doors/roka-essential-1.jpg"
      />

      <DoorFeatures
        eyebrow="Why Roka Essential"
        title="Quality first, at an accessible price"
        features={[
          {
            icon: "💶",
            title: "Attractive pricing",
            description:
              "The same ROKA quality standards, positioned as the accessible entry point to the range.",
          },
          {
            icon: "🎨",
            title: "6 standard colours",
            description:
              "Matt or fine-structure finish, from classic white to anthracite and black.",
          },
          {
            icon: "🪟",
            title: "3-pane glazing as standard",
            description:
              "Ug 0.5 W/m²K glazing with a warm-edge spacer, clear or satin glass.",
          },
        ]}
      />

      <section id="models" className="max-w-7xl mx-auto px-8 py-20 scroll-mt-24">
        <SectionTitle
          title="Example Designs"
          description="3 of the 8 Essential models - see the complete collection on the catalogue below."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {rokaEssentialDoors.map((model) => (
            <PartnerDoorCard key={model.id} model={model} />
          ))}
        </div>
      </section>

      <PartnerBanner
        brand={rokaEssentialBrand}
        catalogPdf="/pdf/entrance-doors/roka-essential-catalogue.pdf"
        catalogLabel="Download Essential Catalogue (PDF)"
      />
    </main>
  );
}
