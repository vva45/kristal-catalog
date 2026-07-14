// src/app/products/roller-shutters/page.tsx

import DoorHero from "../../../components/doors/DoorHero";
import DoorIntro from "../../../components/doors/DoorIntro";
import DoorFeatures from "../../../components/doors/DoorFeatures";
import DoorBanner from "../../../components/doors/DoorBanner";

export default function RollerShuttersPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <DoorHero
        eyebrow="Premium Installation - Germany"
        title="Roller Shutters"
        description="Shade, privacy and security in one system - front-mounted, top-mounted or fully concealed, with manual or electric operation."
        image="/categories/roller-shutters.png"
      />

      <DoorIntro
        title="Comfort at the touch of a button"
        paragraphs={[
          "Roller shutters keep summer heat out and winter warmth in, darken bedrooms completely and add a physical barrier against break-ins.",
          "Available in adaptation, top-mounted and flush-mounted versions to suit both new builds and renovations, with a full RAL colour range to match your windows.",
        ]}
        image="/categories/roller-shutters.png"
        ctaLabel="Explore colours & finishes"
        ctaHref="/colors"
      />

      <DoorFeatures
        eyebrow="Why roller shutters"
        title="More than sun protection"
        features={[
          {
            icon: "🌡️",
            title: "Thermal comfort",
            description:
              "An insulating air layer in front of the glass cuts heat loss in winter and overheating in summer.",
          },
          {
            icon: "🔇",
            title: "Noise reduction",
            description:
              "Closed shutters noticeably dampen street noise for quieter interiors.",
          },
          {
            icon: "⚡",
            title: "Manual or electric",
            description:
              "From simple strap operation to motorised shutters with timers and smart-home control.",
          },
        ]}
      />

      <DoorBanner
        title="Full range coming soon"
        description="We're preparing the complete roller shutter catalog. In the meantime, tell us about your project and we'll recommend the right solution."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </main>
  );
}
