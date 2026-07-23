import { EntranceDoorDesign } from "../../data/products/entrance-door-designs";

interface DespiroPanelCardProps {
  design: EntranceDoorDesign;
}

/**
 * Card for a Despiro panel design. No per-panel photo available yet (see
 * EkoPanelCard for the same situation on the Eko Door Panels catalog) -
 * shows a schematic placeholder plus code, glazing/construction notes and
 * the aluminium size range instead.
 */
export default function DespiroPanelCard({ design }: DespiroPanelCardProps) {
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
        <h3 className="text-black text-base font-bold mb-2">{design.code}</h3>

        {design.glazing && (
          <p className="text-zinc-500 text-xs mb-2">
            {[design.glazing.front, design.glazing.middle, design.glazing.back]
              .filter(Boolean)
              .join(" · ")}
          </p>
        )}

        {design.construction && (
          <p className="text-zinc-500 text-xs mb-2">{design.construction}</p>
        )}

        <p className="text-zinc-600 text-xs mt-auto">
          ALU: {design.sizeRange.min} - {design.sizeRange.max} mm
        </p>
      </div>
    </div>
  );
}
