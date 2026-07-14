// src/app/products/accessories/page.tsx

import DoorHero from "../../../components/doors/DoorHero";
import DoorIntro from "../../../components/doors/DoorIntro";
import DoorFeatures from "../../../components/doors/DoorFeatures";
import DoorBanner from "../../../components/doors/DoorBanner";

export default function AccessoriesPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <DoorHero
        eyebrow="Premium Installation - Germany"
        title="Accessories"
        description="Handles, hinges, window sills, ventilation and smart-home hardware - the details that complete every installation."
        image="/categories/accessories.png"
      />

      <DoorIntro
        title="Details make the difference"
        paragraphs={[
          "The right handle, a security hinge or a properly fitted window sill are small parts with a big impact on daily comfort, security and the finished look.",
          "We supply and fit matching accessories for every system we install - so colours, finishes and quality stay consistent from the frame to the last screw.",
        ]}
        image="/categories/accessories.png"
        ctaLabel="Ask what fits your windows"
        ctaHref="/contact"
      />

      <DoorFeatures
        eyebrow="What we offer"
        title="Everything around the window"
        features={[
          {
            icon: "🖐️",
            title: "Handles & hardware",
            description:
              "Designer handles, lockable versions and security fittings in matching finishes.",
          },
          {
            icon: "🪟",
            title: "Sills & finishing",
            description:
              "Interior and exterior window sills, cover profiles and trims fitted cleanly.",
          },
          {
            icon: "🌬️",
            title: "Ventilation & smart",
            description:
              "Trickle vents, sensors and smart-home hardware for healthy, connected living.",
          },
        ]}
      />

      <DoorBanner
        title="Full range coming soon"
        description="We're preparing the complete accessories catalog. Ask us what's available for your windows and doors."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </main>
  );
}
