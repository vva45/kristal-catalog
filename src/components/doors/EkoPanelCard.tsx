import { EkoDoorPanel } from "../../data/products/eko-door-panels";

interface EkoPanelCardProps {
  panel: EkoDoorPanel;
}

/**
 * Compact card for the Eko door panel catalog. Unlike ProductCard /
 * PartnerDoorCard, this doesn't require a real photo per item - we have
 * 250+ of these and haven't exported per-panel images from the source
 * PDF yet. Shows a simple schematic placeholder (door outline) plus the
 * catalog code and the size range per available material instead.
 */
export default function EkoPanelCard({ panel }: EkoPanelCardProps) {
  const materials: { key: "pvc" | "alu" | "wood"; label: string }[] = [
    { key: "pvc", label: "PVC" },
    { key: "alu", label: "ALU" },
    { key: "wood", label: "WOOD" },
  ];

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col">
      <div className="bg-zinc-100 flex items-center justify-center h-40">
        <svg
          viewBox="0 0 60 100"
          className="h-28 w-auto text-zinc-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="4" y="4" width="52" height="92" rx="2" />
          <line x1="30" y1="10" x2="30" y2="90" />
          <circle cx="46" cy="50" r="1.6" fill="currentColor" />
        </svg>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-black text-base font-bold mb-3">{panel.code}</h3>

        <ul className="text-zinc-600 text-xs space-y-1 mt-auto">
          {materials
            .filter(({ key }) => panel.sizes[key])
            .map(({ key, label }) => (
              <li key={key}>
                <span className="font-semibold">{label}:</span>{" "}
                {panel.sizes[key]!.min} - {panel.sizes[key]!.max} mm
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
