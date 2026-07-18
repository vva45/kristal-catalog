// src/app/products/entrance-doors/monumenta/page.tsx

import DoorHero from "../../../../components/doors/DoorHero";
import DoorIntro from "../../../../components/doors/DoorIntro";
import DoorFeatures from "../../../../components/doors/DoorFeatures";
import PartnerDoorCard from "../../../../components/PartnerDoorCard";
import PartnerBanner from "../../../../components/PartnerBanner";
import SectionTitle from "../../../../components/cards/SectionTitle";
import { monumentaDoors, monumentaBrand } from "../../../../data/partners/monumenta";

export default function MonumentaPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <DoorHero
        eyebrow="A Brand by ROKA"
        title="Monumenta"
        description="Doors as architectural poetry. Bespoke, artisan-crafted pieces in natural stone, hand-worked Venetian plaster and designer metal surfaces - each one unique."
        image="/images/entrance-doors/monumenta-aurora-di-mare.jpg"
        ctaLabel="See the Gallery"
        ctaHref="#models"
      />

      <DoorIntro
        title="Not a barrier to close, an invitation to open"
        paragraphs={[
          "Monumenta is ROKA's artistic vision, taken further: unique pieces built with superior craftsmanship, premium materials and the finest technology, each door treated as an individual work rather than a configurable product.",
          "Materials span natural stone and marble, hand-applied Venetian plaster (Arte Veneziana) by named designers, and designer metal surfaces - every piece is a statement, made to order.",
        ]}
        image="/images/entrance-doors/monumenta-terra-infranta.jpg"
      />

      <DoorFeatures
        eyebrow="Why Monumenta"
        title="Craftsmanship as architecture"
        features={[
          {
            icon: "🗿",
            title: "Natural materials",
            description:
              "Natural stone, marble and designer metal surfaces sourced from master material houses.",
          },
          {
            icon: "🎨",
            title: "Named designers",
            description:
              "Several pieces are hand-finished by named artisans, such as Giovanni Luca Ferreri and Leo De Carlo.",
          },
          {
            icon: "✨",
            title: "Made to order",
            description:
              "Every Monumenta piece is bespoke - built for a specific space, not off a shelf.",
          },
        ]}
      />

      <section id="models" className="max-w-7xl mx-auto px-8 py-20 scroll-mt-24">
        <SectionTitle
          title="From The Gallery"
          description="7 pieces from Monumenta's collection of nearly 200 pages of bespoke designs - see the complete gallery in the catalogue below."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {monumentaDoors.map((model) => (
            <PartnerDoorCard key={model.id} model={model} />
          ))}
        </div>
      </section>

      <PartnerBanner
        brand={monumentaBrand}
        catalogPdf="/pdf/entrance-doors/monumenta-catalogue.pdf"
        catalogLabel="Download Monumenta Catalogue (PDF)"
      />
    </main>
  );
}
