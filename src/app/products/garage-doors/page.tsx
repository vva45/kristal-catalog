// src/app/products/garage-doors/page.tsx
//
// INFINITI sectional garage doors (Eko-Okna's main garage door line) +
// roller doors/grilles, plus the existing swing-opening (Schwenktor)
// steel garage doors from steel-systems.ts. Source: Garagentor_DE eko.pdf.

import DoorHero from "../../../components/doors/DoorHero";
import DoorIntro from "../../../components/doors/DoorIntro";
import DoorFeatures from "../../../components/doors/DoorFeatures";
import DoorProductGrid from "../../../components/doors/DoorProductGrid";
import DoorBanner from "../../../components/doors/DoorBanner";
import SectionTitle from "../../../components/cards/SectionTitle";
import { getGarageDoorSystems } from "../../../data/products/doorSystems";
import {
  infinitiSystems,
  infinitiZero,
  designOptions,
  panelFinishes,
  colourPalette,
  allInOneDesigns,
  sectionalDoorMotors,
  equipmentPackages,
  warranty,
  rollerSystems,
  rollerAccessories,
} from "../../../data/products/garage-door-systems";

export default function GarageDoorsPage() {
  const steelProducts = getGarageDoorSystems("steel");
  const rollerDoors = rollerSystems.filter((s) => s.type === "door");
  const rollerGrilles = rollerSystems.filter((s) => s.type === "grille");

  return (
    <main className="min-h-screen bg-[#002B6B] text-white">
      <DoorHero
        eyebrow="Eko-Okna - INFINITI"
        title="Garage Doors"
        description={`Insulated sectional garage doors, roller doors and roller grilles - matched in colour and style to your windows and entrance door, backed by a ${warranty.years}-year manufacturer warranty.`}
        image="/categories/garage-doors.png"
        ctaLabel="Explore the INFINITI range"
        ctaHref="#infiniti"
      />

      <DoorIntro
        title="The biggest door in your house deserves attention"
        paragraphs={[
          "INFINITI sectional doors come in five spring/drive configurations - X, F, R and the passive-house-grade Thermo F/R - covering openings from small residential garages up to 6 x 3.5m, plus a ZERO retrofit kit for tight renovation projects.",
          "Panel finishes (Woodgrain, Deep Mat, smooth), embossing depth, and RAL or Decor foil colours can all be matched to your façade - and the All in One Design line coordinates the look across your windows, doors, gates and shutters.",
        ]}
        image="/categories/garage-doors.png"
        ctaLabel="Explore colours & finishes"
        ctaHref="/colors"
      />

      <DoorFeatures
        eyebrow="Why INFINITI"
        title="Insulated, quiet and secure"
        features={[
          {
            icon: "🌡️",
            title: "Passive-house-grade option",
            description: "INFINITI Thermo's 60mm panel and advanced seals reach U-values down to 0.70 W/m²K.",
          },
          {
            icon: "🔧",
            title: "Three equipment tiers",
            description: "Quiet, Safe and Premium packages let you dial in noise reduction and security to your needs.",
          },
          {
            icon: "📱",
            title: "Smart-home ready",
            description: "Somfy TaHoma, Came, Beninca or Sommer drives - controllable by app, voice assistant or wall switch.",
          },
        ]}
      />

      <section id="infiniti" className="max-w-7xl mx-auto px-8 py-16 scroll-mt-24">
        <SectionTitle
          title="INFINITI sectional door systems"
          description="Five spring/panel configurations to match your garage's headroom, opening size and insulation needs."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {infinitiSystems.map((sys) => (
            <div key={sys.id} className="bg-white/10 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-1">{sys.name}</h3>
              <p className="text-yellow-400 text-xs uppercase font-semibold mb-3">{sys.springType}</p>
              <p className="text-white/70 text-sm mb-4">{sys.description}</p>
              <ul className="text-white/60 text-xs space-y-1">
                <li>Max area: {sys.maxDoorArea_m2} m²</li>
                <li>Max opening: {sys.maxOpening.width_mm} x {sys.maxOpening.height_mm} mm</li>
                <li>Min headroom: {sys.minHeadroom_mm} mm</li>
                {sys.maxWeight_kg && <li>Max leaf weight: {sys.maxWeight_kg} kg</li>}
                <li>Panel: {sys.panelThickness_mm} mm</li>
              </ul>
            </div>
          ))}

          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-1">{infinitiZero.name}</h3>
            <p className="text-yellow-400 text-xs uppercase font-semibold mb-3">{infinitiZero.type}</p>
            <p className="text-white/70 text-sm mb-4">{infinitiZero.useCase}</p>
            <ul className="text-white/60 text-xs space-y-1">
              <li>Cover profile: {infinitiZero.coverProfileOptions_mm.join(" or ")} mm</li>
              <li>Max garage width: {infinitiZero.maxGarageWidth_mm} mm</li>
              <li>Max ceiling height: {infinitiZero.maxCeilingHeight_mm} mm</li>
              <li>Colours: {infinitiZero.standardColours.join(", ")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-16">
        <SectionTitle
          title="Design, finishes & colours"
          description="Service doors, glazing, panel textures and a coordinated look across your whole facade."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3">Design options</h3>
            <ul className="text-white/70 text-sm space-y-2">
              <li>Service (wicket) door up to {designOptions.serviceDoor.maxWidth_mm}mm wide, {designOptions.serviceDoor.thresholds.join(" or ").toLowerCase()}</li>
              <li>Glazing styles: {designOptions.glazingStyles.map((g) => `${g.name} (${g.frame})`).join(", ")}</li>
              <li>Aluminium section up to {designOptions.aluminiumSection.maxWidth_mm}mm, or panorama glazing up to {designOptions.panoramaGlazing.maxWidth_mm}mm without posts</li>
              <li>{designOptions.ventilationSection}</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3">Panel finishes & colours</h3>
            <ul className="text-white/70 text-sm space-y-2">
              <li>Textures: {panelFinishes.exteriorTextures.join(", ")}</li>
              <li>Embossing: {panelFinishes.embossingOptions.map((e) => `${e.name} (${e.code})`).join(", ")}</li>
              <li>Available in {colourPalette.availableIn.join(" or ")}</li>
              <li>Deep Mat available in RAL {colourPalette.deepMatRalOptions.join("/")}</li>
            </ul>
          </div>
        </div>

        <p className="text-white/60 text-sm mt-6">
          <span className="font-semibold text-white/80">All in One Design</span> coordinates your garage door with matching windows, entrance doors and shutters across {allInOneDesigns.length} looks: {allInOneDesigns.join(", ")}.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-16">
        <SectionTitle
          title="Equipment packages"
          description="Optional upgrades bundled into three tiers."
        />
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {Object.values(equipmentPackages).map((pkg) => (
            <div key={pkg.name} className="bg-white/10 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-3">{pkg.name}</h3>
              <ul className="text-white/70 text-sm space-y-1">
                {pkg.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-16">
        <SectionTitle
          title="Automation"
          description="Drives from Somfy, Came, Beninca and Sommer, all smart-home ready."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {sectionalDoorMotors.map((m) => (
            <div key={m.name} className="bg-white/10 rounded-xl p-4">
              <p className="font-semibold text-sm">{m.name}</p>
              <p className="text-yellow-400 text-xs uppercase mb-2">{m.brand}</p>
              <p className="text-white/60 text-xs">
                {m.thrust_N}N
                {m.maxDoorArea_m2 ? ` · up to ${m.maxDoorArea_m2}m²` : ""}
                {m.maxDoorWidth_m ? ` · up to ${m.maxDoorWidth_m}x${m.maxDoorHeight_m}m` : ""}
              </p>
            </div>
          ))}
        </div>
      </section>

      {steelProducts.length > 0 && (
        <DoorProductGrid
          title="Swing-Opening Steel Garage Doors"
          description="An alternative where sectional doors aren't practical - swing-opening (Schwenktor) steel garage doors with insulated panels."
          products={steelProducts}
        />
      )}

      <section className="max-w-7xl mx-auto px-8 py-16">
        <SectionTitle
          title="Roller doors & roller grilles"
          description="Compact coiling systems for tight headroom or large commercial openings."
        />
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div>
            <h3 className="font-bold text-lg mb-4">Roller doors</h3>
            <div className="space-y-4">
              {rollerDoors.map((s) => (
                <div key={s.id} className="bg-white/10 rounded-xl p-6">
                  <h4 className="font-bold mb-1">{s.name}</h4>
                  <p className="text-white/70 text-sm mb-2">{s.useCase}</p>
                  <p className="text-white/60 text-xs">
                    Up to {s.maxWidth_mm} x {s.maxHeight_mm}mm ({s.maxArea_m2}m²) · Colours: {s.colourOptions.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Roller grilles</h3>
            <div className="space-y-4">
              {rollerGrilles.map((s) => (
                <div key={s.id} className="bg-white/10 rounded-xl p-6">
                  <h4 className="font-bold mb-1">{s.name}</h4>
                  <p className="text-white/70 text-sm mb-2">{s.useCase}</p>
                  <p className="text-white/60 text-xs">
                    Up to {s.maxWidth_mm} x {s.maxHeight_mm}mm ({s.maxArea_m2}m²) · Colours: {s.colourOptions.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-white/50 text-sm mt-8">
          Accessories available across the roller door/grille range: {rollerAccessories.slice(0, 8).join(", ")} and more.
        </p>
      </section>

      <DoorBanner
        title="Not sure which garage door fits your project?"
        description="Send us your opening dimensions and headroom and we'll recommend the right INFINITI system."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </main>
  );
}
