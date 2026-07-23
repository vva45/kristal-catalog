// data/partners/types.ts
//
// Separate from data/products/types.ts on purpose: these are curated
// EXAMPLES from partner manufacturers (ROKA, Monumenta), not Kristall
// Fenster's own full technical catalog. Per an explicit arrangement with
// a ROKA representative (2026-07-17): show a handful of example doors per
// collection, credit/link to the partner's own site for the full range
// and for inquiry support - do NOT try to replicate their entire catalog.

/** UI prose that must exist in both site languages. Catalog facts
 * (codes, RAL colours, profile names) stay single-valued as printed. */
export interface LocalizedText {
  en: string;
  de: string;
}

export interface PartnerDoorModel {
  /** kebab-case, e.g. "roka-function-1" */
  id: string;
  /** Catalog code as printed, e.g. "FUNCTION 1" */
  code: string;
  /** Collection name, e.g. "Roka Function" */
  collection: string;
  handle?: string;
  glazing?: {
    outer?: string;
    inner?: string;
  };
  /** Colour/finish as printed (RAL code or named finish) */
  surface: string;
  /** Thermal performance if given (Ud/Uw) */
  uwValue?: string;
  profileSystem?: string;
  /** e.g. "Secondary entrance door" for a Nebeneingangstür variant */
  type?: LocalizedText;
  image: string;
  catalogSource: string;
}

export interface PartnerBrand {
  name: string;
  /** Kept for internal reference/attribution only - NOT used as a
   * clickable CTA, so we don't send customers to buy direct from the
   * manufacturer instead of through Kristall Fenster. */
  officialSite?: string;
  note: LocalizedText;
}
