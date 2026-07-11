import { TechnicalSpec } from "../data/products/types";

interface ProductSpecTableProps {
  specs: TechnicalSpec[];
}

/**
 * Clean white spec table, consistent with the light cards already used
 * elsewhere on the site (ColorCard, MaterialCard) against the navy background.
 */
export default function ProductSpecTable({ specs }: ProductSpecTableProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <table className="w-full text-left">
        <tbody>
          {specs.map((spec, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-zinc-50" : "bg-white"}
            >
              <td className="px-6 py-4 text-zinc-600 font-medium w-1/2 align-top">
                {spec.label}
              </td>
              <td className="px-6 py-4 text-black font-semibold">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
