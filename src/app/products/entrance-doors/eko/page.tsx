// src/app/products/entrance-doors/eko/page.tsx
//
// Eko-Okna's own base entrance-door panel program (PVC/ALU/WOOD, plus a
// few Steel-specific fillings) - not a curated partner-brand selection
// like ROKA/Monumenta/Drutex, but Kristall Fenster's own full catalog,
// shown in full the same way the Despiro data is meant to be. Source:
// Eingangsturen_DE.pdf (212 pages).

import DoorHero from "../../../../components/doors/DoorHero";
import DoorIntro from "../../../../components/doors/DoorIntro";
import DoorFeatures from "../../../../components/doors/DoorFeatures";
import DoorBanner from "../../../../components/doors/DoorBanner";
import EkoPanelGrid from "../../../../components/doors/EkoPanelGrid";
import SectionTitle from "../../../../components/cards/SectionTitle";
import {
  patternPanels,
  glassPanels,
  embossedPanels,
  pvcModelDoors,
  claddingPanels,
  ekoGreenInfo,
  steelDoorSystems,
  steelDoorPanelFillings,
  thresholdOptions,
  generalDoorHardware,
} from "../../../../data/products/eko-door-panels";

const jumpLinks = [
  { href: "#patterns", label: `Pattern panels (${patternPanels.length})` },
  { href: "#glass", label: `Glass panels (${glassPanels.length})` },
  { href: "#embossed", label: `Embossed panels (${embossedPanels.length})` },
  { href: "#models", label: `PVC model doors (${pvcModelDoors.length})` },
  { href: "#cladding", label: `Cladding panels (${claddingPanels.length})` },
  { href: "#more", label: "Steel, thresholds & hardware" },
];

export default function EkoDoorPanelsPage() {
  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <DoorHero
        eyebrow="Eko-Okna - Entrance Doors"
        title="Eko Door Panels"
        description={`Our own base entrance-door program in PVC, Aluminium and Wood - ${
          patternPanels.length + glassPanels.length + embossedPanels.length + pvcModelDoors.length + claddingPanels.length
        } panel designs across the full range, from milled patterns to individually named cladding models.`}
        image="/images/entrance-doors/hero-entrance-doors.jpg"
        ctaLabel="Browse the range"
        ctaHref="#patterns"
      />

      <DoorIntro
        title="One panel program, three materials"
        paragraphs={[
          "Every design below is available in PVC, Aluminium (ALU) and, for most patterns, Wood - built on your choice of profile system (Aluplast, Salamander or Gealan colours for PVC, RAL for Aluminium and Wood).",
          "Panels come with a foam, plywood+XPS, or (for Wood) solid-panel filling, in 24, 36 or 48mm thickness (24/34/46mm for Wood), and can be ordered with or without the decorative Applikation overlay.",
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

      <EkoPanelGrid
        id="patterns"
        title="Pattern panels"
        description="The main gallery - 144 milled panel patterns, each available in up to three materials with its own min/max size."
        panels={patternPanels}
      />

      <EkoPanelGrid
        id="glass"
        title="Glass panels (EkoVitre)"
        description="15 glazed designs, uniform size range across PVC, Aluminium and Wood."
        panels={glassPanels}
      />

      <EkoPanelGrid
        id="embossed"
        title="Embossed panels"
        description="21 embossed PVC patterns."
        panels={embossedPanels}
      />

      <section className="max-w-7xl mx-auto px-8 py-16">
        <SectionTitle
          title="EkoGreen embossed panels"
          description="A Mediterranean-inspired embossed collection, combinable with side lights, bottom panels (Sottotraversi) and muntin bars (Scuretti)."
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-sm">
          <div className="bg-white/10 rounded-xl p-5">
            <p className="font-semibold mb-1">Thickness</p>
            <p className="text-white/70">{ekoGreenInfo.panelThicknessOptions_mm.join(" / ")} mm</p>
          </div>
          <div className="bg-white/10 rounded-xl p-5">
            <p className="font-semibold mb-1">Construction</p>
            <p className="text-white/70">{ekoGreenInfo.construction}</p>
          </div>
          <div className="bg-white/10 rounded-xl p-5">
            <p className="font-semibold mb-1">UV protection</p>
            <p className="text-white/70">{ekoGreenInfo.uvProtection}</p>
          </div>
          <div className="bg-white/10 rounded-xl p-5">
            <p className="font-semibold mb-1">Glazing</p>
            <p className="text-white/70">{ekoGreenInfo.glazingOption}</p>
          </div>
        </div>
        <p className="text-white/50 text-sm mt-6 italic">{ekoGreenInfo.note}</p>
      </section>

      <EkoPanelGrid
        id="models"
        title="PVC model doors"
        description="39 complete model doors in PVC, uniform size range."
        panels={pvcModelDoors}
      />

      <EkoPanelGrid
        id="cladding"
        title="PVC cladding panels"
        description="37 individually named designs, fully-covered sash frame with GFRP coating over a solid core, 36-70mm thick, finished independently inside and out."
        panels={claddingPanels}
      />

      <section id="more" className="max-w-7xl mx-auto px-8 py-16 scroll-mt-24">
        <SectionTitle
          title="Steel doors, thresholds & hardware"
          description="A few things that apply across the range, not tied to a single panel design."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3">Steel door profiles</h3>
            <p className="text-white/70 text-sm mb-3">
              {steelDoorSystems.profiles.join(", ")} - {steelDoorSystems.panelThickness_mm}mm galvanised steel panel,{" "}
              {steelDoorSystems.colours} colours, {steelDoorSystems.standardFillings.join(" or ").toLowerCase()} filling.
            </p>
            <ul className="text-white/60 text-sm space-y-1">
              {steelDoorPanelFillings.map((f) => (
                <li key={f.name}>
                  <span className="font-semibold text-white/80">{f.name}:</span> {f.description ?? f.fillings?.join(", ")}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3">Thresholds</h3>
            <p className="text-white/70 text-sm mb-2">
              <span className="font-semibold">{thresholdOptions.warmThreshold.name}:</span>{" "}
              {thresholdOptions.warmThreshold.variants.join(" or ").toLowerCase()} - {thresholdOptions.warmThreshold.benefit.toLowerCase()}.
            </p>
            <p className="text-white/70 text-sm">
              <span className="font-semibold">{thresholdOptions.thresholdFreeEntrance.name}:</span>{" "}
              {thresholdOptions.thresholdFreeEntrance.features.join(", ").toLowerCase()}.
            </p>
          </div>
        </div>
      </section>

      <DoorFeatures
        eyebrow="Hardware"
        title="Handles, locks & access control"
        features={[
          {
            icon: "🔑",
            title: "Handle series",
            description: `${generalDoorHardware.pullHandleSeries.length} pull-handle series plus lever handles like ${generalDoorHardware.leverHandles.slice(0, 3).join(", ")} and more.`,
          },
          {
            icon: "🔒",
            title: "Locking & closers",
            description: `${generalDoorHardware.locking.join(", ")}.`,
          },
          {
            icon: "📷",
            title: "Access control",
            description: `${generalDoorHardware.accessControl.join(", ")}, plus peephole and mail slot options.`,
          },
        ]}
      />

      <DoorBanner
        title="Not sure which panel fits your project?"
        description="Send us your opening dimensions and material preference and we'll help you pick the right Eko panel design."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </main>
  );
}
