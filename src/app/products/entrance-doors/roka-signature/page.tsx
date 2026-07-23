// src/app/products/entrance-doors/roka-signature/page.tsx

import DoorHero from "../../../../components/doors/DoorHero";
import DoorIntro from "../../../../components/doors/DoorIntro";
import DoorFeatures from "../../../../components/doors/DoorFeatures";
import PartnerDoorCard from "../../../../components/PartnerDoorCard";
import PartnerBanner from "../../../../components/PartnerBanner";
import SectionTitle from "../../../../components/cards/SectionTitle";
import { rokaSignatureDoors, rokaSignatureBrand } from "../../../../data/partners/roka-signature";

export default function RokaSignaturePage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <DoorHero
        eyebrow="ROKA - The Flagship Collection"
        title="Roka Signature"
        description="Seven design worlds - Earth, Ceramic, Balance, Glass, Wood, Noble Liquid Metal and Vintage - each with its own character, built on ROKA's most advanced R-Core profile system."
        image="/images/entrance-doors/roka-signature-liquid-metal.jpg"
        ctaLabel="See a design from each theme"
        ctaHref="#models"
      />

      <DoorIntro
        title="Seven inspirations, one uncompromising standard"
        paragraphs={[
          "Signature is ROKA's most advanced collection, built around the R-Core profile system and designed for those who see their front door as a statement, not an afterthought.",
          "Every theme groups dozens of individually named designs - from grounded Earth tones to the shimmer of Noble Liquid Metal - so you can find a character that matches your home, not just a colour.",
        ]}
        image="/images/entrance-doors/roka-signature-holz.jpg"
      />

      <DoorFeatures
        eyebrow="Why Roka Signature"
        title="The most advanced ROKA system"
        features={[
          {
            icon: "💎",
            title: "R-Core profile system",
            description:
              "ROKA's flagship engineering, built for the largest, most demanding designs in the range.",
          },
          {
            icon: "🎭",
            title: "7 design worlds",
            description:
              "From Earth and Wood to Ceramic and Noble Liquid Metal - a theme for every architectural style.",
          },
          {
            icon: "✍️",
            title: "Individually named designs",
            description:
              "Every model has its own identity, from surface texture down to the handle.",
          },
        ]}
      />

      <section id="models" className="max-w-7xl mx-auto px-8 py-20 scroll-mt-24">
        <SectionTitle
          title="One Design From Each Theme"
          description="7 examples, one per design world - see all 7 full themes in the catalogue below."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {rokaSignatureDoors.map((model) => (
            <PartnerDoorCard key={model.id} model={model} />
          ))}
        </div>
      </section>

      <PartnerBanner
        brand={rokaSignatureBrand}
        catalogPdf="/pdf/entrance-doors/roka-signature-catalogue.pdf"
        catalogName="Signature"
      />
    </main>
  );
}
