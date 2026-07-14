// src/app/products/main-gates/page.tsx

import DoorHero from "../../../components/doors/DoorHero";
import DoorIntro from "../../../components/doors/DoorIntro";
import DoorFeatures from "../../../components/doors/DoorFeatures";
import DoorBanner from "../../../components/doors/DoorBanner";

export default function MainGatesPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <DoorHero
        eyebrow="Premium Installation - Germany"
        title="Main Gates"
        description="Sliding and swing driveway gates with matching fence panels - aluminium construction, motorised operation, modern design."
        image="/categories/main-gates.png"
      />

      <DoorIntro
        title="First impressions start at the gate"
        paragraphs={[
          "A driveway gate is the first thing visitors see - and the first line of security for your property. Aluminium construction keeps gates light, corrosion-free and virtually maintenance-free.",
          "Sliding gates save space on short driveways, while swing gates suit classic entrances. Matching fence panels and wicket doors complete the perimeter in one consistent design.",
        ]}
        image="/categories/main-gates.png"
        ctaLabel="Ask about your entrance"
        ctaHref="/contact"
      />

      <DoorFeatures
        eyebrow="Why our gates"
        title="Secure, automated, built to last"
        features={[
          {
            icon: "🏗️",
            title: "Aluminium build",
            description:
              "No rust, no repainting - powder-coated aluminium stays looking sharp for decades.",
          },
          {
            icon: "📱",
            title: "Motorised access",
            description:
              "Remote controls, keypads and intercom integration for convenient entry.",
          },
          {
            icon: "🧩",
            title: "Complete perimeter",
            description:
              "Gates, wicket doors and fence panels in one matching design language.",
          },
        ]}
      />

      <DoorBanner
        title="Full range coming soon"
        description="We're preparing the complete gate and fencing catalog. Tell us about your driveway and we'll design the right entrance."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </main>
  );
}
