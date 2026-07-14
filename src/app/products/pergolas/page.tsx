// src/app/products/pergolas/page.tsx

import DoorHero from "../../../components/doors/DoorHero";
import DoorIntro from "../../../components/doors/DoorIntro";
import DoorFeatures from "../../../components/doors/DoorFeatures";
import DoorBanner from "../../../components/doors/DoorBanner";

export default function PergolasPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <DoorHero
        eyebrow="Premium Installation - Germany"
        title="Terrace & Pergolas"
        description="Bioclimatic pergolas and glass terrace systems that turn your outdoor space into a room you can use all year round."
        image="/categories/pergolas.png"
      />

      <DoorIntro
        title="Your terrace, every season"
        paragraphs={[
          "A bioclimatic pergola with rotating louvres lets you control sun and shade at will, shelters you from rain, and extends the outdoor season by months.",
          "Combine it with glass sliding walls, LED lighting and side screens to create a true outdoor living room - protected, comfortable and elegant.",
        ]}
        image="/categories/pergolas.png"
        ctaLabel="Ask about your terrace"
        ctaHref="/contact"
      />

      <DoorFeatures
        eyebrow="Why a pergola"
        title="Outdoor living, engineered"
        features={[
          {
            icon: "☀️",
            title: "Adjustable louvres",
            description:
              "Rotating roof blades control light and airflow - open to the sky or closed against rain.",
          },
          {
            icon: "🌧️",
            title: "All-weather use",
            description:
              "Integrated drainage and wind-rated construction keep the terrace usable in any season.",
          },
          {
            icon: "💡",
            title: "Comfort extras",
            description:
              "LED lighting, side glazing, screens and heaters turn the pergola into a real living space.",
          },
        ]}
      />

      <DoorBanner
        title="Full range coming soon"
        description="We're preparing the complete pergola and terrace catalog. Tell us your ideas and we'll plan your outdoor space together."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </main>
  );
}
