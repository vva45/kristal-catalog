// src/app/products/entrance-doors/despiro/page.tsx
//
// Despiro / Despiro Retro Line - Eko-Okna's premium aluminium entrance
// door collection, built on the MasterLine 8 Despiro system (and its
// offset-hinge Pivot variant). Source: Eingangsturen-Despiro_DE.pdf.

import DoorHero from "../../../../components/doors/DoorHero";
import DoorIntro from "../../../../components/doors/DoorIntro";
import DoorFeatures from "../../../../components/doors/DoorFeatures";
import DoorBanner from "../../../../components/doors/DoorBanner";
import DespiroPanelGrid from "../../../../components/doors/DespiroPanelGrid";
import SectionTitle from "../../../../components/cards/SectionTitle";
import {
  despiroDesigns,
  retroLineDesigns,
  masterLine8Despiro,
  masterLine8Pivot,
  handleSeries,
  recessedHandleKA1A,
  doorHardwareAccessories,
} from "../../../../data/products/entrance-door-designs";

const jumpLinks = [
  { href: "#despiro", label: `Despiro (${despiroDesigns.length})` },
  { href: "#retro-line", label: `Retro Line (${retroLineDesigns.length})` },
  { href: "#systems", label: "MasterLine 8 systems" },
  { href: "#hardware", label: "Handles & hardware" },
];

export default function DespiroPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <DoorHero
        eyebrow="Eko-Okna - Entrance Doors"
        title="Despiro"
        description={`Our premium aluminium entrance door collection - ${
          despiroDesigns.length + retroLineDesigns.length
        } panel designs across the modern Despiro range and the classic Despiro Retro Line, built on the MasterLine 8 Despiro system.`}
        image="/images/entrance-doors/hero-entrance-doors.jpg"
        ctaLabel="Browse the range"
        ctaHref="#despiro"
      />

      <DoorIntro
        title="Extremely durable, elegant designs"
        paragraphs={[
          "77mm-thick aluminium panels, standard multi-point locking and concealed hinges (roller hinges optional) give Despiro doors the resistance to suit both new builds and renovations, with a technologically advanced panel filling that also qualifies for environmental-fund co-financed projects.",
          "Every design is available with VSG safety glazing with a warm edge as standard, a push handle or lever, and an optional recessed handle in stainless steel or black with warm/neutral/cold white or blue LED illumination.",
        ]}
        image="/images/entrance-doors/hero-entrance-doors.jpg"
      />

      <section className="max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap gap-3 pb-10 border-b border-white/10">
          {jumpLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm bg-white/10 hover:bg-yellow-400 hover:text-black transition-colors px-4 py-2 rounded-full"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <DespiroPanelGrid
        id="despiro"
        title="Despiro"
        description="39 modern panel designs (DP01-DP39), aluminium, in RAL colours or Decor finishes on select models."
        designs={despiroDesigns}
      />

      <DespiroPanelGrid
        id="retro-line"
        title="Despiro Retro Line"
        description="9 classic, embossed-moulding designs (RL01-RL09) - a homage to traditional styles, also available in the double-opening PIVOT version with an offset hinge axis."
        designs={retroLineDesigns}
      />

      <section id="systems" className="max-w-7xl mx-auto px-8 py-16 scroll-mt-24">
        <SectionTitle
          title="MasterLine 8 systems"
          description="The aluminium door systems every Despiro panel above is built into."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3">{masterLine8Despiro.system}</h3>
            <ul className="text-white/70 text-sm space-y-1">
              <li>Max size: {masterLine8Despiro.maxWidth_mm} x {masterLine8Despiro.maxHeight_mm} mm</li>
              <li>{masterLine8Despiro.lockingPoints}</li>
              <li>{masterLine8Despiro.handleRecess}</li>
              <li>Colours: {masterLine8Despiro.availableColours}</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3">{masterLine8Pivot.system}</h3>
            <ul className="text-white/70 text-sm space-y-1">
              <li>
                Pivot offset: {masterLine8Pivot.pivotOffset_mm.standard}mm standard, up to{" "}
                {masterLine8Pivot.pivotOffset_mm.max}mm ({masterLine8Pivot.pivotOffsetNote.toLowerCase()})
              </li>
              <li>{masterLine8Pivot.lockingPoints}</li>
              <li>{masterLine8Pivot.thresholdProfile}</li>
              <li>{masterLine8Pivot.handleRecess}</li>
              <li>
                Compatible panels: {masterLine8Pivot.compatiblePanelCodes.join(", ")} -{" "}
                {masterLine8Pivot.compatiblePanelNote.toLowerCase()}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <DoorFeatures
        eyebrow="Hardware"
        title="Handles & accessories"
        features={[
          {
            icon: "🔑",
            title: "Handle series",
            description: `${handleSeries.length} pull-handle series (${handleSeries
              .slice(0, 4)
              .map((h) => h.code)
              .join(", ")} and more), including electronics-ready Q series (fingerprint, keypad, bell, LED, motion sensor).`,
          },
          {
            icon: "💡",
            title: `Recessed handle ${recessedHandleKA1A.code}`,
            description: `Finishes: ${recessedHandleKA1A.finishes.join(", ")}. LED options: ${recessedHandleKA1A.ledOptions.join(", ")}.`,
          },
          {
            icon: "🔒",
            title: "Locking, closers & access control",
            description: `${doorHardwareAccessories.locking.join(", ")}; closers: ${doorHardwareAccessories.doorClosers
              .slice(0, 2)
              .join(", ")}; plus peephole, mail slot and access control options.`,
          },
        ]}
      />

      <DoorBanner
        title="Ready for a premium entrance door?"
        description="Send us your opening dimensions and finish preference and we'll help you choose the right Despiro or Retro Line design."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </main>
  );
}
