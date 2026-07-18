import Image from "next/image";
import { PartnerDoorModel } from "../data/partners/types";

interface PartnerDoorCardProps {
  model: PartnerDoorModel;
}

/**
 * Like ProductCard, but for partner-brand example doors: no "Technical
 * Data" PDF button (we don't have or want an individual spec sheet per
 * design), just the photo and the key facts printed under the model code.
 */
export default function PartnerDoorCard({ model }: PartnerDoorCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <Image
        src={model.image}
        alt={model.code}
        width={640}
        height={512}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="w-full h-80 object-cover"
      />

      <div className="p-6">
        <h3 className="text-black text-xl font-bold mb-1">{model.code}</h3>

        {model.type && (
          <p className="text-zinc-500 text-sm mb-3">{model.type}</p>
        )}

        <ul className="text-zinc-600 text-sm space-y-1">
          <li>{model.surface}</li>
          {model.uwValue && <li>{model.uwValue}</li>}
          {model.profileSystem && <li>{model.profileSystem}</li>}
        </ul>
      </div>
    </div>
  );
}
