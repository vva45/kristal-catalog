// src/app/products/entrance-doors/roka-function/page.tsx

import DoorHero from "../../../../components/doors/DoorHero";
import DoorIntro from "../../../../components/doors/DoorIntro";
import DoorFeatures from "../../../../components/doors/DoorFeatures";
import PartnerDoorCard from "../../../../components/PartnerDoorCard";
import PartnerBanner from "../../../../components/PartnerBanner";
import SectionTitle from "../../../../components/cards/SectionTitle";
import { rokaFunctionDoors, rokaBrand } from "../../../../data/partners/roka";

export default function RokaFunctionPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <DoorHero
        eyebrow="ROKA - Entrance Doors"
        title="Roka Function"
        description="More than just a front door. 10 construction-grade entrance door designs on the ROKA Standard profile system, built for durability with a clean, modern look."
        image="/images/entrance-doors/hero-entrance-doors.jpg"
        ctaLabel="See example designs"
        ctaHref="#models"
      />

      <DoorIntro
        title="Functionality and aesthetics, built to last"
        paragraphs={[
          "The Function collection is designed for offices, multi-family buildings and single-family homes alike, combining stability with everyday functionality.",
          "Choose from the ROKA Standard 65mm or 75mm profile system, 6 standard colours in matt or fine-structure finish, and a wide range of accessories including panic hardware, door closers and letterbox solutions.",
        ]}
        image="/images/entrance-doors/hero-entrance-doors.jpg"
      />

      <DoorFeatures
        eyebrow="Why Roka Function"
        title="Built for everyday reliability"
        features={[
          {
            icon: "🛡️",
            title: "Meets strict standards",
            description:
              "Built to demanding security and durability standards without compromising on design.",
          },
          {
            icon: "🎨",
            title: "6 standard colours",
            description:
              "Matt or fine-structure finish, from classic white to anthracite and fir green.",
          },
          {
            icon: "🔧",
            title: "Wide accessory range",
            description:
              "Panic hardware, door closers, single- or double-leaf models and letterbox solutions.",
          },
        ]}
      />

      <section id="models" className="max-w-7xl mx-auto px-8 py-20 scroll-mt-24">
        <SectionTitle
          title="Example Designs"
          description="3 of the 10 Function models - see the complete collection on ROKA's own site below."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {rokaFunctionDoors.map((model) => (
            <PartnerDoorCard key={model.id} model={model} />
          ))}
        </div>
      </section>

      <PartnerBanner
        brand={rokaBrand}
        catalogPdf="/pdf/entrance-doors/roka-function-catalogue.pdf"
        catalogLabel="Download Function Catalogue (PDF)"
      />
    </main>
  );
}
