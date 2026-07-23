import Image from "next/image";
import { EntranceDoorDesign } from "../../data/products/entrance-door-designs";

interface DespiroPanelCardProps {
  design: EntranceDoorDesign;
}

/**
 * Card for a Despiro panel design. Images extracted from the source
 * catalog PDF (Eingangsturen-Despiro_DE.pdf) via page-render + crop.
 */
export default function DespiroPanelCard({ design }: DespiroPanelCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col">
      <Image
        src={design.image}
        alt={design.code}
        width={400}
        height={400}
        sizes="(min-width: 768px) 25vw, 50vw"
        className="w-full h-40 object-contain bg-zinc-100"
      />

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
