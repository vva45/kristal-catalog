import Link from "next/link";
import { PartnerBrand } from "../data/partners/types";
import { getLocale, t } from "@/lib/i18n";

interface PartnerBannerProps {
  brand: PartnerBrand;
  /** Local PDF path (hosted by us) for the full collection catalogue -
   * deliberately NOT the manufacturer's own site, so the customer stays
   * with Kristall Fenster instead of being routed to buy direct. */
  catalogPdf: string;
  /** Collection name inserted into the localized download label,
   * e.g. "Essential" -> "Download Essential Catalogue (PDF)".
   * Defaults to the brand name. */
  catalogName?: string;
}

export default async function PartnerBanner({
  brand,
  catalogPdf,
  catalogName,
}: PartnerBannerProps) {
  const locale = await getLocale();

  return (
    <section className="max-w-7xl mx-auto px-8 pb-20">
      <div className="bg-white/10 rounded-2xl p-12 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          {t(locale, "partnerBannerTitle", { brand: brand.name })}
        </h2>

        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          {brand.note[locale]}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-black px-8 py-4 rounded-lg text-white hover:bg-zinc-800 transition font-semibold"
          >
            {t(locale, "contactUs")}
          </Link>

          <a
            href={catalogPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 border border-white/30 px-8 py-4 rounded-lg text-white hover:bg-white/20 transition font-semibold"
          >
            {t(locale, "downloadCatalogueNamed", {
              name: catalogName ?? brand.name,
            })}
          </a>
        </div>
      </div>
    </section>
  );
}
