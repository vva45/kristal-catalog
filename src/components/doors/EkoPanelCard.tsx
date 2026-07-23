import Image from "next/image";
import { EkoDoorPanel } from "../../data/products/eko-door-panels";

interface EkoPanelCardProps {
  panel: EkoDoorPanel;
}

/**
 * Compact card for the Eko door panel catalog. Images extracted from the
 * source catalog PDF (Eingangsturen_DE.pdf) via page-render + crop, since
 * the embedded JPEGs were split into unreliable tiles - see project notes.
 */
export default function EkoPanelCard({ panel }: EkoPanelCardProps) {
  const materials: { key: "pvc" | "alu" | "wood"; label: string }[] = [
    { key: "pvc", label: "PVC" },
    { key: "alu", label: "ALU" },
    { key: "wood", label: "WOOD" },
  ];

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col">
      <Image
        src={panel.image}
        alt={panel.code}
        width={400}
        height={400}
        sizes="(min-width: 768px) 25vw, 50vw"
        className="w-full h-40 object-contain bg-zinc-100"
      />

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
