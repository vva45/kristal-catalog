// data/products/types.ts
//
// Shared shape for every window/door "system" (profile series) sold by
// Kristall Fenster, regardless of material or manufacturer. One entry here
// corresponds to one ProductCard on the catalog site AND one row of data
// the configurator can read from later.
//
// Where a system has several variants with different figures (e.g. MB-60 /
// MB-60 US / MB-60 PIVOT), the main `specs` reflect the base/most common
// variant and the differences are listed under `variants`.

export interface TechnicalSpec {
  label: string;
  value: string;
}

export type ProductCategory =
  | "window" // Fenstersystem
  | "window-door" // Fenster- und Türsystem
  | "door" // Türsystem
  | "entrance-door" // Eingangstür / Haustür
  | "sliding-door" // Schiebetürsystem
  | "lift-slide-door" // Hebeschiebetürsystem (HST/HS)
  | "folding-door" // Falttürsystem
  | "guillotine-window" // Guillotine-System (vertical sash)
  | "fire-resistant"; // Brandschutzsystem (EI-rated)

export interface ProductSystem {
  /** kebab-case, stable, used as the URL slug and React key */
  id: string;
  /** Display name exactly as marketed, e.g. "MB-45", "IDEAL 7000 NEW" */
  name: string;
  material: "pvc" | "aluminium" | "steel" | "wood";
  /** Profile manufacturer/brand, e.g. "Aluprof", "Aliplast", "Aluplast" */
  manufacturer: string;
  category: ProductCategory;
  /** Named variants of the same base system, if any (e.g. ["i", "i+"]) */
  variants?: string[];
  /** Explicit paths - kept separate from `id` on purpose: real file names
   * in /public are inconsistent (case, dashes) between image and pdf, so
   * they can't be reliably derived from the id. */
  image: string;
  pdf: string;
  /** Core technical facts only - no marketing copy (copyright-safe) */
  specs: TechnicalSpec[];
  /** Where this data came from, for traceability when specs get updated */
  catalogSource: string;
}
