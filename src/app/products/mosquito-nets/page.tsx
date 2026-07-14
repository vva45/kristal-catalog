// src/app/products/mosquito-nets/page.tsx

import DoorHero from "../../../components/doors/DoorHero";
import DoorIntro from "../../../components/doors/DoorIntro";
import DoorFeatures from "../../../components/doors/DoorFeatures";
import DoorBanner from "../../../components/doors/DoorBanner";

export default function MosquitoNetsPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <DoorHero
        eyebrow="Premium Installation - Germany"
        title="Mosquito Nets"
        description="Fresh air without unwanted guests - fixed frames, hinged doors, pleated and roller insect screens for every window and door."
        image="/categories/mosquito-nets.png"
      />

      <DoorIntro
        title="Sleep with the windows open"
        paragraphs={[
          "Insect screens let you ventilate freely on summer nights while keeping mosquitoes, wasps and flies outside where they belong.",
          "From simple fixed frames for windows to pleated screens for large terrace openings, every screen is made to measure and matched to your window colour.",
        ]}
        image="/categories/mosquito-nets.png"
        ctaLabel="Ask about your windows"
        ctaHref="/contact"
      />

      <DoorFeatures
        eyebrow="Why our insect screens"
        title="Made to measure, made to last"
        features={[
          {
            icon: "📐",
            title: "Every opening type",
            description:
              "Fixed, hinged, sliding, pleated or roller versions for windows, doors and large terrace fronts.",
          },
          {
            icon: "👁️",
            title: "Nearly invisible",
            description:
              "Fine mesh keeps insects out without blocking your view or the daylight.",
          },
          {
            icon: "🎨",
            title: "Colour-matched",
            description:
              "Frames finished to match your windows - they blend in instead of standing out.",
          },
        ]}
      />

      <DoorBanner
        title="Full range coming soon"
        description="We're preparing the complete insect screen catalog. Tell us your window sizes and we'll quote the right screens."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </main>
  );
}
