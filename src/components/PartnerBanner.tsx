import Link from "next/link";
import { PartnerBrand } from "../data/partners/types";

interface PartnerBannerProps {
  brand: PartnerBrand;
  /** Local PDF path (hosted by us) for the full collection catalogue -
   * deliberately NOT the manufacturer's own site, so the customer stays
   * with Kristall Fenster instead of being routed to buy direct. */
  catalogPdf: string;
  catalogLabel?: string;
}

export default function PartnerBanner({
  brand,
  catalogPdf,
  catalogLabel = "Download Full Catalogue (PDF)",
}: PartnerBannerProps) {
  return (
    <section className="max-w-7xl mx-auto px-8 pb-20">
      <div className="bg-white/10 rounded-2xl p-12 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Like what you see from {brand.name}?
        </h2>

        <p className="text-white/80 mb-8 max-w-2xl mx-auto">{brand.note}</p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-black px-8 py-4 rounded-lg text-white hover:bg-zinc-800 transition font-semibold"
          >
            Contact Us
          </Link>

          <a
            href={catalogPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 border border-white/30 px-8 py-4 rounded-lg text-white hover:bg-white/20 transition font-semibold"
          >
            {catalogLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
