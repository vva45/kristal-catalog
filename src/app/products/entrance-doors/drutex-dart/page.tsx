// src/app/products/entrance-doors/drutex-dart/page.tsx

import DoorHero from "../../../../components/doors/DoorHero";
import DoorIntro from "../../../../components/doors/DoorIntro";
import DoorFeatures from "../../../../components/doors/DoorFeatures";
import PartnerDoorCard from "../../../../components/PartnerDoorCard";
import PartnerBanner from "../../../../components/PartnerBanner";
import SectionTitle from "../../../../components/cards/SectionTitle";
import { drutexDartDoors, drutexDartBrand } from "../../../../data/partners/drutex-dart";

export default function DrutexDartPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <DoorHero
        eyebrow="Drutex - D-ART Line"
        title="Drutex D-ART Line"
        description="Four design worlds - Classic, Elegance, Modern and Orient - designer entrance doors from Drutex, official partner of FC Bayern Munich."
        image="/images/entrance-doors/drutex-dart-modern-lifestyle.jpg"
        ctaLabel="See a design from each theme"
        ctaHref="#models"
      />

      <DoorIntro
        title="Four themes, one design philosophy"
        paragraphs={[
          "The D-ART Line groups Drutex's designer entrance doors into four aesthetic worlds - Classic, Elegance, Modern and Orient - so you can find a character that matches your home's architecture, not just a colour.",
          "From timeless Classic forms for Parisian and Hampton-style homes to the geometric, Japandi-inspired Orient theme, each design pairs a distinctive door leaf with a matching handle and finish.",
        ]}
        image="/images/entrance-doors/drutex-dart-classic-lifestyle.jpg"
      />

      <DoorFeatures
        eyebrow="Why Drutex D-ART Line"
        title="Designer entrance doors from Drutex"
        features={[
          {
            icon: "🏛️",
            title: "Classic",
            description:
              "Timeless elegance for classic, modern-classic, Parisian or Hampton-style architecture.",
          },
          {
            icon: "✨",
            title: "Elegance",
            description:
              "Subtle lines and refined details for modern-classic, art-deco or quiet-luxury projects.",
          },
          {
            icon: "◻️",
            title: "Modern",
            description:
              "Clear lines and bold formats for contemporary, minimalist or industrial architecture.",
          },
          {
            icon: "☯️",
            title: "Orient",
            description:
              "Light, rhythm and geometric motifs for Japandi, Wabi-Sabi and modern-zen interiors.",
          },
        ]}
      />

      <section id="models" className="max-w-7xl mx-auto px-8 py-20 scroll-mt-24">
        <SectionTitle
          title="One Design From Each Theme"
          description="4 examples, one per design world - see every model in each theme in the catalogue below."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {drutexDartDoors.map((model) => (
            <PartnerDoorCard key={model.id} model={model} />
          ))}
        </div>
      </section>

      <PartnerBanner
        brand={drutexDartBrand}
        catalogPdf="/pdf/entrance-doors/drutex-dart-catalogue.pdf"
        catalogLabel="Download D-ART Line Catalogue (PDF)"
      />
    </main>
  );
}
