// data/products/eko-door-panels.ts
//
// Eko-Okna's own base entrance-door PANEL program - separate from the
// premium Despiro aluminium collection (see entrance-door-designs.ts).
// This is the general-purpose panel range shared across Kristall
// Fenster's PVC, Aluminium and Wood entrance doors (and, for a few
// groups, Steel), organised the same way the source catalog organises
// it: a big pattern gallery, then glass/embossed/model/cladding
// sub-collections.
//
// Source: Eingangsturen_DE.pdf (master "Katalog der Eingangstüren",
// Eko-Okna S.A., 18.07.2025), 212 pages. Despiro (Eingangsturen-Despiro_DE.pdf)
// is a separate, smaller premium aluminium-only catalog already covered
// in entrance-door-designs.ts - don't confuse the two.
//
// Sizes are printed per available material (PVC / ALU / WOOD); a material
// key is simply absent from an entry's `sizes` object when that material
// isn't offered for that specific design.

export interface PanelSizeRange {
  min: string;
  max: string;
}

export interface EkoDoorPanel {
  /** kebab-case id, e.g. "eko-panel-01" */
  id: string;
  /** Catalog code as printed, e.g. "Paneel 01" or a named model "AIDA ET" */
  code: string;
  group: "pattern" | "glass" | "embossed" | "model" | "cladding";
  sizes: {
    pvc?: PanelSizeRange;
    alu?: PanelSizeRange;
    wood?: PanelSizeRange;
  };
  /** Reference image path convention - images still need exporting from the PDF */
  image: string;
}

/**
 * Main pattern gallery ("Muster der Türpaneele", p.13-84): 144 milled
 * panel patterns, each in up to 3 materials (PVC/ALU/WOOD - a few of the
 * later patterns, e.g. 99/143/144, don't come in wood). No glazing option
 * on this range; a plain vs. "with Applikation" (decorative overlay)
 * finish choice exists for every pattern but isn't distinguished in the
 * catalog's own numbering.
 */
export const patternPanels: EkoDoorPanel[] = [
  { id: "eko-panel-01", code: "Paneel 01", group: "pattern", sizes: { pvc: { min: "370 x 1650", max: "900 x 2150" }, alu: { min: "370 x 1650", max: "1100 x 2450" }, wood: { min: "370 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-01.png" },
  { id: "eko-panel-02", code: "Paneel 02", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-02.png" },
  { id: "eko-panel-03", code: "Paneel 03", group: "pattern", sizes: { pvc: { min: "570 x 1750", max: "900 x 2150" }, alu: { min: "570 x 1750", max: "1100 x 2450" }, wood: { min: "570 x 1750", max: "840 x 2240" } }, image: "/images/doors/eko/panel-03.png" },
  { id: "eko-panel-04", code: "Paneel 04", group: "pattern", sizes: { pvc: { min: "590 x 1650", max: "900 x 2150" }, alu: { min: "590 x 1650", max: "1100 x 2450" }, wood: { min: "590 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-04.png" },
  { id: "eko-panel-05", code: "Paneel 05", group: "pattern", sizes: { pvc: { min: "590 x 1650", max: "900 x 2150" }, alu: { min: "590 x 1650", max: "1100 x 2450" }, wood: { min: "590 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-05.png" },
  { id: "eko-panel-06", code: "Paneel 06", group: "pattern", sizes: { pvc: { min: "370 x 1650", max: "900 x 2150" }, alu: { min: "370 x 1650", max: "1100 x 2450" }, wood: { min: "370 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-06.png" },
  { id: "eko-panel-07", code: "Paneel 07", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-07.png" },
  { id: "eko-panel-08", code: "Paneel 08", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-08.png" },
  { id: "eko-panel-09", code: "Paneel 09", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-09.png" },
  { id: "eko-panel-10", code: "Paneel 10", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-10.png" },
  { id: "eko-panel-11", code: "Paneel 11", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-11.png" },
  { id: "eko-panel-12", code: "Paneel 12", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-12.png" },
  { id: "eko-panel-13", code: "Paneel 13", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-13.png" },
  { id: "eko-panel-14", code: "Paneel 14", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-14.png" },
  { id: "eko-panel-15", code: "Paneel 15", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-15.png" },
  { id: "eko-panel-16", code: "Paneel 16", group: "pattern", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" }, alu: { min: "600 x 1650", max: "1100 x 2450" }, wood: { min: "600 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-16.png" },
  { id: "eko-panel-17", code: "Paneel 17", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-17.png" },
  { id: "eko-panel-18", code: "Paneel 18", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-18.png" },
  { id: "eko-panel-19", code: "Paneel 19", group: "pattern", sizes: { pvc: { min: "570 x 1750", max: "900 x 2150" }, alu: { min: "570 x 1750", max: "1100 x 2450" }, wood: { min: "570 x 1750", max: "840 x 2240" } }, image: "/images/doors/eko/panel-19.png" },
  { id: "eko-panel-20", code: "Paneel 20", group: "pattern", sizes: { pvc: { min: "660 x 1650", max: "900 x 2150" }, alu: { min: "660 x 1650", max: "1100 x 2450" }, wood: { min: "660 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-20.png" },
  { id: "eko-panel-21", code: "Paneel 21", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-21.png" },
  { id: "eko-panel-22", code: "Paneel 22", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-22.png" },
  { id: "eko-panel-23", code: "Paneel 23", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-23.png" },
  { id: "eko-panel-24", code: "Paneel 24", group: "pattern", sizes: { pvc: { min: "590 x 1650", max: "900 x 2150" }, alu: { min: "590 x 1650", max: "1100 x 2450" }, wood: { min: "590 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-24.png" },
  { id: "eko-panel-25", code: "Paneel 25", group: "pattern", sizes: { pvc: { min: "380 x 1650", max: "900 x 2150" }, alu: { min: "380 x 1650", max: "1100 x 2450" }, wood: { min: "380 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-25.png" },
  { id: "eko-panel-26", code: "Paneel 26", group: "pattern", sizes: { pvc: { min: "370 x 1650", max: "900 x 2150" }, alu: { min: "370 x 1650", max: "1100 x 2450" }, wood: { min: "370 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-26.png" },
  { id: "eko-panel-27", code: "Paneel 27", group: "pattern", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" }, alu: { min: "600 x 1650", max: "1100 x 2450" }, wood: { min: "600 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-27.png" },
  { id: "eko-panel-28", code: "Paneel 28", group: "pattern", sizes: { pvc: { min: "410 x 1650", max: "900 x 2150" }, alu: { min: "410 x 1650", max: "1100 x 2450" }, wood: { min: "410 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-28.png" },
  { id: "eko-panel-29", code: "Paneel 29", group: "pattern", sizes: { pvc: { min: "410 x 1650", max: "900 x 2150" }, alu: { min: "410 x 1650", max: "1100 x 2450" }, wood: { min: "410 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-29.png" },
  { id: "eko-panel-30", code: "Paneel 30", group: "pattern", sizes: { pvc: { min: "420 x 1650", max: "900 x 2150" }, alu: { min: "420 x 1650", max: "1100 x 2450" }, wood: { min: "420 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-30.png" },
  { id: "eko-panel-31", code: "Paneel 31", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-31.png" },
  { id: "eko-panel-32", code: "Paneel 32", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-32.png" },
  { id: "eko-panel-33", code: "Paneel 33", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-33.png" },
  { id: "eko-panel-34", code: "Paneel 34", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-34.png" },
  { id: "eko-panel-35", code: "Paneel 35", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-35.png" },
  { id: "eko-panel-36", code: "Paneel 36", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-36.png" },
  { id: "eko-panel-37", code: "Paneel 37", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-37.png" },
  { id: "eko-panel-38", code: "Paneel 38", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-38.png" },
  { id: "eko-panel-39", code: "Paneel 39", group: "pattern", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" }, alu: { min: "600 x 1650", max: "1100 x 2450" }, wood: { min: "600 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-39.png" },
  { id: "eko-panel-40", code: "Paneel 40", group: "pattern", sizes: { pvc: { min: "370 x 1650", max: "900 x 2150" }, alu: { min: "370 x 1650", max: "1100 x 2450" }, wood: { min: "370 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-40.png" },
  { id: "eko-panel-41", code: "Paneel 41", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-41.png" },
  { id: "eko-panel-42", code: "Paneel 42", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-42.png" },
  { id: "eko-panel-43", code: "Paneel 43", group: "pattern", sizes: { pvc: { min: "580 x 1750", max: "900 x 2150" }, alu: { min: "580 x 1750", max: "1100 x 2450" }, wood: { min: "580 x 1750", max: "840 x 2240" } }, image: "/images/doors/eko/panel-43.png" },
  { id: "eko-panel-44", code: "Paneel 44", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-44.png" },
  { id: "eko-panel-45", code: "Paneel 45", group: "pattern", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" }, alu: { min: "600 x 1650", max: "1100 x 2450" }, wood: { min: "600 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-45.png" },
  { id: "eko-panel-46", code: "Paneel 46", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-46.png" },
  { id: "eko-panel-47", code: "Paneel 47", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-47.png" },
  { id: "eko-panel-48", code: "Paneel 48", group: "pattern", sizes: { pvc: { min: "640 x 1650", max: "900 x 2150" }, alu: { min: "640 x 1650", max: "1100 x 2450" }, wood: { min: "640 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-48.png" },
  { id: "eko-panel-49", code: "Paneel 49", group: "pattern", sizes: { pvc: { min: "590 x 1650", max: "900 x 2150" }, alu: { min: "590 x 1650", max: "1100 x 2450" }, wood: { min: "590 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-49.png" },
  { id: "eko-panel-50", code: "Paneel 50", group: "pattern", sizes: { pvc: { min: "450 x 1650", max: "900 x 2150" }, alu: { min: "450 x 1650", max: "1100 x 2450" }, wood: { min: "450 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-50.png" },
  { id: "eko-panel-51", code: "Paneel 51", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-51.png" },
  { id: "eko-panel-52", code: "Paneel 52", group: "pattern", sizes: { pvc: { min: "620 x 1650", max: "900 x 2150" }, alu: { min: "620 x 1650", max: "1100 x 2450" }, wood: { min: "620 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-52.png" },
  { id: "eko-panel-53", code: "Paneel 53", group: "pattern", sizes: { pvc: { min: "640 x 1650", max: "900 x 2150" }, alu: { min: "640 x 1650", max: "1100 x 2450" }, wood: { min: "640 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-53.png" },
  { id: "eko-panel-54", code: "Paneel 54", group: "pattern", sizes: { pvc: { min: "370 x 1650", max: "900 x 2150" }, alu: { min: "370 x 1650", max: "1100 x 2450" }, wood: { min: "370 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-54.png" },
  { id: "eko-panel-55", code: "Paneel 55", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-55.png" },
  { id: "eko-panel-56", code: "Paneel 56", group: "pattern", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" }, alu: { min: "600 x 1650", max: "1100 x 2450" }, wood: { min: "600 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-56.png" },
  { id: "eko-panel-57", code: "Paneel 57", group: "pattern", sizes: { pvc: { min: "300 x 1650", max: "900 x 2150" }, alu: { min: "300 x 1650", max: "1100 x 2450" }, wood: { min: "300 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-57.png" },
  { id: "eko-panel-58", code: "Paneel 58", group: "pattern", sizes: { pvc: { min: "300 x 1650", max: "900 x 2150" }, alu: { min: "300 x 1650", max: "1100 x 2450" }, wood: { min: "300 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-58.png" },
  { id: "eko-panel-59", code: "Paneel 59", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-59.png" },
  { id: "eko-panel-60", code: "Paneel 60", group: "pattern", sizes: { pvc: { min: "400 x 1650", max: "900 x 2150" }, alu: { min: "400 x 1650", max: "1100 x 2450" }, wood: { min: "400 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-60.png" },
  { id: "eko-panel-61", code: "Paneel 61", group: "pattern", sizes: { pvc: { min: "570 x 1750", max: "900 x 2150" }, alu: { min: "570 x 1750", max: "1100 x 2450" }, wood: { min: "570 x 1750", max: "840 x 2240" } }, image: "/images/doors/eko/panel-61.png" },
  { id: "eko-panel-62", code: "Paneel 62", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" } }, image: "/images/doors/eko/panel-62.png" },
  { id: "eko-panel-63", code: "Paneel 63", group: "pattern", sizes: { pvc: { min: "500 x 1650", max: "900 x 2150" }, alu: { min: "500 x 1650", max: "1100 x 2450" }, wood: { min: "500 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-63.png" },
  { id: "eko-panel-64", code: "Paneel 64", group: "pattern", sizes: { pvc: { min: "500 x 1650", max: "900 x 2150" }, alu: { min: "500 x 1650", max: "1100 x 2450" }, wood: { min: "500 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-64.png" },
  { id: "eko-panel-65", code: "Paneel 65", group: "pattern", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" }, alu: { min: "600 x 1650", max: "1100 x 2450" }, wood: { min: "600 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-65.png" },
  { id: "eko-panel-66", code: "Paneel 66", group: "pattern", sizes: { pvc: { min: "370 x 1650", max: "900 x 2150" }, alu: { min: "370 x 1650", max: "1100 x 2450" }, wood: { min: "370 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-66.png" },
  { id: "eko-panel-67", code: "Paneel 67", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-67.png" },
  { id: "eko-panel-68", code: "Paneel 68", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-68.png" },
  { id: "eko-panel-69", code: "Paneel 69", group: "pattern", sizes: { pvc: { min: "370 x 1650", max: "900 x 2150" }, alu: { min: "370 x 1650", max: "1100 x 2450" }, wood: { min: "370 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-69.png" },
  { id: "eko-panel-70", code: "Paneel 70", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-70.png" },
  { id: "eko-panel-71", code: "Paneel 71", group: "pattern", sizes: { pvc: { min: "370 x 1650", max: "900 x 2150" }, alu: { min: "370 x 1650", max: "1100 x 2450" }, wood: { min: "370 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-71.png" },
  { id: "eko-panel-72", code: "Paneel 72", group: "pattern", sizes: { pvc: { min: "300 x 1650", max: "900 x 2150" }, alu: { min: "300 x 1650", max: "1100 x 2450" }, wood: { min: "300 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-72.png" },
  { id: "eko-panel-73", code: "Paneel 73", group: "pattern", sizes: { pvc: { min: "300 x 1650", max: "900 x 2150" }, alu: { min: "300 x 1650", max: "1100 x 2450" }, wood: { min: "300 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-73.png" },
  { id: "eko-panel-74", code: "Paneel 74", group: "pattern", sizes: { pvc: { min: "300 x 1650", max: "900 x 2150" }, alu: { min: "300 x 1650", max: "1100 x 2450" }, wood: { min: "300 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-74.png" },
  { id: "eko-panel-75", code: "Paneel 75", group: "pattern", sizes: { pvc: { min: "300 x 1650", max: "900 x 2150" }, alu: { min: "300 x 1650", max: "1100 x 2450" }, wood: { min: "300 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-75.png" },
  { id: "eko-panel-76", code: "Paneel 76", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-76.png" },
  { id: "eko-panel-77", code: "Paneel 77", group: "pattern", sizes: { pvc: { min: "620 x 1650", max: "900 x 2150" }, alu: { min: "620 x 1650", max: "1100 x 2450" }, wood: { min: "620 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-77.png" },
  { id: "eko-panel-78", code: "Paneel 78", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-78.png" },
  { id: "eko-panel-79", code: "Paneel 79", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-79.png" },
  { id: "eko-panel-80", code: "Paneel 80", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-80.png" },
  { id: "eko-panel-81", code: "Paneel 81", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-81.png" },
  { id: "eko-panel-82", code: "Paneel 82", group: "pattern", sizes: { pvc: { min: "630 x 1650", max: "900 x 2150" }, alu: { min: "630 x 1650", max: "1100 x 2450" }, wood: { min: "630 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-82.png" },
  { id: "eko-panel-83", code: "Paneel 83", group: "pattern", sizes: { pvc: { min: "590 x 1650", max: "900 x 2150" }, alu: { min: "590 x 1650", max: "1100 x 2450" }, wood: { min: "590 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-83.png" },
  { id: "eko-panel-84", code: "Paneel 84", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-84.png" },
  { id: "eko-panel-85", code: "Paneel 85", group: "pattern", sizes: { pvc: { min: "420 x 1650", max: "900 x 2150" }, alu: { min: "420 x 1650", max: "1100 x 2450" }, wood: { min: "420 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-85.png" },
  { id: "eko-panel-86", code: "Paneel 86", group: "pattern", sizes: { pvc: { min: "610 x 1650", max: "900 x 2150" }, alu: { min: "610 x 1650", max: "1100 x 2450" }, wood: { min: "610 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-86.png" },
  { id: "eko-panel-87", code: "Paneel 87", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-87.png" },
  { id: "eko-panel-88", code: "Paneel 88", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-88.png" },
  { id: "eko-panel-89", code: "Paneel 89", group: "pattern", sizes: { pvc: { min: "370 x 1650", max: "900 x 2150" }, alu: { min: "370 x 1650", max: "1100 x 2450" }, wood: { min: "370 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-89.png" },
  { id: "eko-panel-90", code: "Paneel 90", group: "pattern", sizes: { pvc: { min: "610 x 1650", max: "900 x 2150" }, alu: { min: "610 x 1650", max: "1100 x 2450" }, wood: { min: "610 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-90.png" },
  { id: "eko-panel-91", code: "Paneel 91", group: "pattern", sizes: { pvc: { min: "610 x 1650", max: "900 x 2150" }, alu: { min: "610 x 1650", max: "1100 x 2450" }, wood: { min: "610 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-91.png" },
  { id: "eko-panel-92", code: "Paneel 92", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-92.png" },
  { id: "eko-panel-93", code: "Paneel 93", group: "pattern", sizes: { pvc: { min: "370 x 1650", max: "900 x 2150" }, alu: { min: "370 x 1650", max: "1100 x 2450" }, wood: { min: "370 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-93.png" },
  { id: "eko-panel-94", code: "Paneel 94", group: "pattern", sizes: { pvc: { min: "370 x 1650", max: "900 x 2150" }, alu: { min: "370 x 1650", max: "1100 x 2450" }, wood: { min: "370 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-94.png" },
  { id: "eko-panel-95", code: "Paneel 95", group: "pattern", sizes: { pvc: { min: "380 x 1650", max: "900 x 2150" }, alu: { min: "380 x 1650", max: "1100 x 2450" }, wood: { min: "380 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-95.png" },
  { id: "eko-panel-96", code: "Paneel 96", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-96.png" },
  { id: "eko-panel-97", code: "Paneel 97", group: "pattern", sizes: { pvc: { min: "650 x 1650", max: "900 x 2150" }, alu: { min: "650 x 1650", max: "1100 x 2450" }, wood: { min: "650 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-97.png" },
  { id: "eko-panel-98", code: "Paneel 98", group: "pattern", sizes: { pvc: { min: "370 x 1650", max: "900 x 2150" }, alu: { min: "370 x 1650", max: "1100 x 2450" }, wood: { min: "370 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-98.png" },
  { id: "eko-panel-99", code: "Paneel 99", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" } }, image: "/images/doors/eko/panel-99.png" },
  { id: "eko-panel-100", code: "Paneel 100", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-100.png" },
  { id: "eko-panel-101", code: "Paneel 101", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-101.png" },
  { id: "eko-panel-102", code: "Paneel 102", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-102.png" },
  { id: "eko-panel-103", code: "Paneel 103", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-103.png" },
  { id: "eko-panel-104", code: "Paneel 104", group: "pattern", sizes: { pvc: { min: "390 x 1650", max: "900 x 2150" }, alu: { min: "390 x 1650", max: "1100 x 2450" }, wood: { min: "390 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-104.png" },
  { id: "eko-panel-105", code: "Paneel 105", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-105.png" },
  { id: "eko-panel-106", code: "Paneel 106", group: "pattern", sizes: { pvc: { min: "370 x 1650", max: "900 x 2150" }, alu: { min: "370 x 1650", max: "1100 x 2450" }, wood: { min: "370 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-106.png" },
  { id: "eko-panel-107", code: "Paneel 107", group: "pattern", sizes: { pvc: { min: "300 x 1650", max: "900 x 2150" }, alu: { min: "300 x 1650", max: "1100 x 2450" }, wood: { min: "300 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-107.png" },
  { id: "eko-panel-108", code: "Paneel 108", group: "pattern", sizes: { pvc: { min: "300 x 1650", max: "900 x 2150" }, alu: { min: "300 x 1650", max: "1100 x 2450" }, wood: { min: "300 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-108.png" },
  { id: "eko-panel-109", code: "Paneel 109", group: "pattern", sizes: { pvc: { min: "300 x 1650", max: "900 x 2150" }, alu: { min: "300 x 1650", max: "1100 x 2450" }, wood: { min: "300 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-109.png" },
  { id: "eko-panel-110", code: "Paneel 110", group: "pattern", sizes: { pvc: { min: "300 x 1650", max: "900 x 2150" }, alu: { min: "300 x 1650", max: "1100 x 2450" }, wood: { min: "300 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-110.png" },
  { id: "eko-panel-111", code: "Paneel 111", group: "pattern", sizes: { pvc: { min: "300 x 1650", max: "900 x 2150" }, alu: { min: "300 x 1650", max: "1100 x 2450" }, wood: { min: "300 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-111.png" },
  { id: "eko-panel-112", code: "Paneel 112", group: "pattern", sizes: { pvc: { min: "300 x 1650", max: "900 x 2150" }, alu: { min: "300 x 1650", max: "1100 x 2450" }, wood: { min: "300 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-112.png" },
  { id: "eko-panel-113", code: "Paneel 113", group: "pattern", sizes: { pvc: { min: "615 x 1650", max: "900 x 2150" }, alu: { min: "615 x 1650", max: "1100 x 2450" }, wood: { min: "615 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-113.png" },
  { id: "eko-panel-114", code: "Paneel 114", group: "pattern", sizes: { pvc: { min: "370 x 1650", max: "900 x 2150" }, alu: { min: "370 x 1650", max: "1100 x 2450" }, wood: { min: "370 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-114.png" },
  { id: "eko-panel-115", code: "Paneel 115", group: "pattern", sizes: { pvc: { min: "370 x 1650", max: "900 x 2150" }, alu: { min: "370 x 1650", max: "1100 x 2450" }, wood: { min: "370 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-115.png" },
  { id: "eko-panel-116", code: "Paneel 116", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-116.png" },
  { id: "eko-panel-117", code: "Paneel 117", group: "pattern", sizes: { pvc: { min: "370 x 1650", max: "900 x 2150" }, alu: { min: "370 x 1650", max: "1100 x 2450" }, wood: { min: "370 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-117.png" },
  { id: "eko-panel-118", code: "Paneel 118", group: "pattern", sizes: { pvc: { min: "560 x 1650", max: "900 x 2150" }, alu: { min: "560 x 1650", max: "1100 x 2450" }, wood: { min: "560 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-118.png" },
  { id: "eko-panel-119", code: "Paneel 119", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-119.png" },
  { id: "eko-panel-120", code: "Paneel 120", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-120.png" },
  { id: "eko-panel-121", code: "Paneel 121", group: "pattern", sizes: { pvc: { min: "370 x 1812", max: "900 x 2150" }, alu: { min: "370 x 1812", max: "1100 x 2450" }, wood: { min: "370 x 1812", max: "840 x 2240" } }, image: "/images/doors/eko/panel-121.png" },
  { id: "eko-panel-122", code: "Paneel 122", group: "pattern", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" }, alu: { min: "600 x 1650", max: "1100 x 2450" }, wood: { min: "600 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-122.png" },
  { id: "eko-panel-123", code: "Paneel 123", group: "pattern", sizes: { pvc: { min: "370 x 1650", max: "900 x 2150" }, alu: { min: "370 x 1650", max: "1100 x 2450" }, wood: { min: "370 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-123.png" },
  { id: "eko-panel-124", code: "Paneel 124", group: "pattern", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" }, alu: { min: "600 x 1650", max: "1100 x 2450" }, wood: { min: "600 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-124.png" },
  { id: "eko-panel-125", code: "Paneel 125", group: "pattern", sizes: { pvc: { min: "650 x 1650", max: "900 x 2150" }, alu: { min: "650 x 1650", max: "1100 x 2450" }, wood: { min: "650 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-125.png" },
  { id: "eko-panel-126", code: "Paneel 126", group: "pattern", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" }, alu: { min: "600 x 1650", max: "1100 x 2450" }, wood: { min: "600 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-126.png" },
  { id: "eko-panel-127", code: "Paneel 127", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-127.png" },
  { id: "eko-panel-128", code: "Paneel 128", group: "pattern", sizes: { pvc: { min: "370 x 1650", max: "900 x 2150" }, alu: { min: "370 x 1650", max: "1100 x 2450" }, wood: { min: "370 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-128.png" },
  { id: "eko-panel-129", code: "Paneel 129", group: "pattern", sizes: { pvc: { min: "370 x 1650", max: "900 x 2150" }, alu: { min: "370 x 1650", max: "1100 x 2450" }, wood: { min: "370 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-129.png" },
  { id: "eko-panel-130", code: "Paneel 130", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-130.png" },
  { id: "eko-panel-131", code: "Paneel 131", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-131.png" },
  { id: "eko-panel-132", code: "Paneel 132", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" }, wood: { min: "570 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-132.png" },
  { id: "eko-panel-133", code: "Paneel 133", group: "pattern", sizes: { pvc: { min: "590 x 1650", max: "900 x 2150" }, alu: { min: "590 x 1650", max: "1100 x 2450" }, wood: { min: "590 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-133.png" },
  { id: "eko-panel-134", code: "Paneel 134", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" } }, image: "/images/doors/eko/panel-134.png" },
  { id: "eko-panel-135", code: "Paneel 135", group: "pattern", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" }, alu: { min: "600 x 1650", max: "1100 x 2450" }, wood: { min: "600 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-135.png" },
  { id: "eko-panel-136", code: "Paneel 136", group: "pattern", sizes: { pvc: { min: "370 x 1650", max: "900 x 2150" }, alu: { min: "370 x 1650", max: "1100 x 2450" }, wood: { min: "370 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-136.png" },
  { id: "eko-panel-137", code: "Paneel 137", group: "pattern", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" }, alu: { min: "600 x 1650", max: "1100 x 2450" }, wood: { min: "600 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-137.png" },
  { id: "eko-panel-138", code: "Paneel 138", group: "pattern", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" }, alu: { min: "600 x 1650", max: "1100 x 2450" }, wood: { min: "600 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-138.png" },
  { id: "eko-panel-139", code: "Paneel 139", group: "pattern", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" }, alu: { min: "600 x 1650", max: "1100 x 2450" }, wood: { min: "600 x 1650", max: "840 x 2240" } }, image: "/images/doors/eko/panel-139.png" },
  { id: "eko-panel-140", code: "Paneel 140", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" } }, image: "/images/doors/eko/panel-140.png" },
  { id: "eko-panel-141", code: "Paneel 141", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" } }, image: "/images/doors/eko/panel-141.png" },
  { id: "eko-panel-142", code: "Paneel 142", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" } }, image: "/images/doors/eko/panel-142.png" },
  { id: "eko-panel-143", code: "Paneel 143", group: "pattern", sizes: { pvc: { min: "370 x 1650", max: "900 x 2150" }, alu: { min: "370 x 1650", max: "1100 x 2450" } }, image: "/images/doors/eko/panel-143.png" },
  { id: "eko-panel-144", code: "Paneel 144", group: "pattern", sizes: { pvc: { min: "570 x 1650", max: "900 x 2150" }, alu: { min: "570 x 1650", max: "1100 x 2450" } }, image: "/images/doors/eko/panel-144.png" },
];

/**
 * Glass panels ("Glaspaneele" / EkoVitre, p.85-95): 15 designs, uniform
 * size range across all three materials.
 */
export const glassPanels: EkoDoorPanel[] = [
  { id: "eko-glass-01", code: "Paneel 01", group: "glass", sizes: { pvc: { min: "600 x 1700", max: "950 x 2200" }, alu: { min: "600 x 1700", max: "950 x 2200" }, wood: { min: "600 x 1700", max: "950 x 2200" } }, image: "/images/doors/eko/glass-01.png" },
  { id: "eko-glass-02", code: "Paneel 02", group: "glass", sizes: { pvc: { min: "600 x 1700", max: "950 x 2200" }, alu: { min: "600 x 1700", max: "950 x 2200" }, wood: { min: "600 x 1700", max: "950 x 2200" } }, image: "/images/doors/eko/glass-02.png" },
  { id: "eko-glass-03", code: "Paneel 03", group: "glass", sizes: { pvc: { min: "600 x 1700", max: "950 x 2200" }, alu: { min: "600 x 1700", max: "950 x 2200" }, wood: { min: "600 x 1700", max: "950 x 2200" } }, image: "/images/doors/eko/glass-03.png" },
  { id: "eko-glass-04", code: "Paneel 04", group: "glass", sizes: { pvc: { min: "600 x 1700", max: "950 x 2200" }, alu: { min: "600 x 1700", max: "950 x 2200" }, wood: { min: "600 x 1700", max: "950 x 2200" } }, image: "/images/doors/eko/glass-04.png" },
  { id: "eko-glass-05", code: "Paneel 05", group: "glass", sizes: { pvc: { min: "600 x 1700", max: "950 x 2200" }, alu: { min: "600 x 1700", max: "950 x 2200" }, wood: { min: "600 x 1700", max: "950 x 2200" } }, image: "/images/doors/eko/glass-05.png" },
  { id: "eko-glass-06", code: "Paneel 06", group: "glass", sizes: { pvc: { min: "600 x 1700", max: "950 x 2200" }, alu: { min: "600 x 1700", max: "950 x 2200" }, wood: { min: "600 x 1700", max: "950 x 2200" } }, image: "/images/doors/eko/glass-06.png" },
  { id: "eko-glass-07", code: "Paneel 07", group: "glass", sizes: { pvc: { min: "600 x 1700", max: "950 x 2200" }, alu: { min: "600 x 1700", max: "950 x 2200" }, wood: { min: "600 x 1700", max: "950 x 2200" } }, image: "/images/doors/eko/glass-07.png" },
  { id: "eko-glass-08", code: "Paneel 08", group: "glass", sizes: { pvc: { min: "600 x 1700", max: "950 x 2200" }, alu: { min: "600 x 1700", max: "950 x 2200" }, wood: { min: "600 x 1700", max: "950 x 2200" } }, image: "/images/doors/eko/glass-08.png" },
  { id: "eko-glass-09", code: "Paneel 09", group: "glass", sizes: { pvc: { min: "600 x 1700", max: "950 x 2200" }, alu: { min: "600 x 1700", max: "950 x 2200" }, wood: { min: "600 x 1700", max: "950 x 2200" } }, image: "/images/doors/eko/glass-09.png" },
  { id: "eko-glass-10", code: "Paneel 10", group: "glass", sizes: { pvc: { min: "600 x 1700", max: "950 x 2200" }, alu: { min: "600 x 1700", max: "950 x 2200" }, wood: { min: "600 x 1700", max: "950 x 2200" } }, image: "/images/doors/eko/glass-10.png" },
  { id: "eko-glass-11", code: "Paneel 11", group: "glass", sizes: { pvc: { min: "600 x 1700", max: "950 x 2200" }, alu: { min: "600 x 1700", max: "950 x 2200" }, wood: { min: "600 x 1700", max: "950 x 2200" } }, image: "/images/doors/eko/glass-11.png" },
  { id: "eko-glass-12", code: "Paneel 12", group: "glass", sizes: { pvc: { min: "600 x 1700", max: "950 x 2200" }, alu: { min: "600 x 1700", max: "950 x 2200" }, wood: { min: "600 x 1700", max: "950 x 2200" } }, image: "/images/doors/eko/glass-12.png" },
  { id: "eko-glass-13", code: "Paneel 13", group: "glass", sizes: { pvc: { min: "600 x 1700", max: "950 x 2200" }, alu: { min: "600 x 1700", max: "950 x 2200" }, wood: { min: "600 x 1700", max: "950 x 2200" } }, image: "/images/doors/eko/glass-13.png" },
  { id: "eko-glass-14", code: "Paneel 14", group: "glass", sizes: { pvc: { min: "600 x 1700", max: "950 x 2200" }, alu: { min: "600 x 1700", max: "950 x 2200" }, wood: { min: "600 x 1700", max: "950 x 2200" } }, image: "/images/doors/eko/glass-14.png" },
  { id: "eko-glass-15", code: "Paneel 15", group: "glass", sizes: { pvc: { min: "600 x 1700", max: "950 x 2200" }, alu: { min: "600 x 1700", max: "950 x 2200" }, wood: { min: "600 x 1700", max: "950 x 2200" } }, image: "/images/doors/eko/glass-15.png" },
];

/**
 * Embossed panels ("Geprägte Paneele", p.96-108): 21 designs, PVC only,
 * uniform size range.
 */
export const embossedPanels: EkoDoorPanel[] = [
  { id: "eko-embossed-01", code: "Paneel 01", group: "embossed", sizes: { pvc: { min: "600 x 1750", max: "1100 x 2300" } }, image: "/images/doors/eko/embossed-01.png" },
  { id: "eko-embossed-02", code: "Paneel 02", group: "embossed", sizes: { pvc: { min: "600 x 1750", max: "1100 x 2300" } }, image: "/images/doors/eko/embossed-02.png" },
  { id: "eko-embossed-03", code: "Paneel 03", group: "embossed", sizes: { pvc: { min: "600 x 1750", max: "1100 x 2300" } }, image: "/images/doors/eko/embossed-03.png" },
  { id: "eko-embossed-04", code: "Paneel 04", group: "embossed", sizes: { pvc: { min: "600 x 1750", max: "1100 x 2300" } }, image: "/images/doors/eko/embossed-04.png" },
  { id: "eko-embossed-05", code: "Paneel 05", group: "embossed", sizes: { pvc: { min: "600 x 1750", max: "1100 x 2300" } }, image: "/images/doors/eko/embossed-05.png" },
  { id: "eko-embossed-06", code: "Paneel 06", group: "embossed", sizes: { pvc: { min: "600 x 1750", max: "1100 x 2300" } }, image: "/images/doors/eko/embossed-06.png" },
  { id: "eko-embossed-07", code: "Paneel 07", group: "embossed", sizes: { pvc: { min: "600 x 1750", max: "1100 x 2300" } }, image: "/images/doors/eko/embossed-07.png" },
  { id: "eko-embossed-08", code: "Paneel 08", group: "embossed", sizes: { pvc: { min: "600 x 1750", max: "1100 x 2300" } }, image: "/images/doors/eko/embossed-08.png" },
  { id: "eko-embossed-09", code: "Paneel 09", group: "embossed", sizes: { pvc: { min: "600 x 1750", max: "1100 x 2300" } }, image: "/images/doors/eko/embossed-09.png" },
  { id: "eko-embossed-10", code: "Paneel 10", group: "embossed", sizes: { pvc: { min: "600 x 1750", max: "1100 x 2300" } }, image: "/images/doors/eko/embossed-10.png" },
  { id: "eko-embossed-11", code: "Paneel 11", group: "embossed", sizes: { pvc: { min: "600 x 1750", max: "1100 x 2300" } }, image: "/images/doors/eko/embossed-11.png" },
  { id: "eko-embossed-12", code: "Paneel 12", group: "embossed", sizes: { pvc: { min: "600 x 1750", max: "1100 x 2300" } }, image: "/images/doors/eko/embossed-12.png" },
  { id: "eko-embossed-13", code: "Paneel 13", group: "embossed", sizes: { pvc: { min: "600 x 1750", max: "1100 x 2300" } }, image: "/images/doors/eko/embossed-13.png" },
  { id: "eko-embossed-14", code: "Paneel 14", group: "embossed", sizes: { pvc: { min: "600 x 1750", max: "1100 x 2300" } }, image: "/images/doors/eko/embossed-14.png" },
  { id: "eko-embossed-15", code: "Paneel 15", group: "embossed", sizes: { pvc: { min: "600 x 1750", max: "1100 x 2300" } }, image: "/images/doors/eko/embossed-15.png" },
  { id: "eko-embossed-16", code: "Paneel 16", group: "embossed", sizes: { pvc: { min: "600 x 1750", max: "1100 x 2300" } }, image: "/images/doors/eko/embossed-16.png" },
  { id: "eko-embossed-17", code: "Paneel 17", group: "embossed", sizes: { pvc: { min: "600 x 1750", max: "1100 x 2300" } }, image: "/images/doors/eko/embossed-17.png" },
  { id: "eko-embossed-18", code: "Paneel 18", group: "embossed", sizes: { pvc: { min: "600 x 1750", max: "1100 x 2300" } }, image: "/images/doors/eko/embossed-18.png" },
  { id: "eko-embossed-19", code: "Paneel 19", group: "embossed", sizes: { pvc: { min: "600 x 1750", max: "1100 x 2300" } }, image: "/images/doors/eko/embossed-19.png" },
  { id: "eko-embossed-20", code: "Paneel 20", group: "embossed", sizes: { pvc: { min: "600 x 1750", max: "1100 x 2300" } }, image: "/images/doors/eko/embossed-20.png" },
  { id: "eko-embossed-21", code: "Paneel 21", group: "embossed", sizes: { pvc: { min: "600 x 1750", max: "1100 x 2300" } }, image: "/images/doors/eko/embossed-21.png" },
];

/**
 * EkoGreen embossed panels ("Geprägte EkoGreen-Paneele", p.109-133):
 * Mediterranean-inspired collection combining panels with side lights,
 * bottom panels (Sottotraversi) and muntin bars (Scuretti). The catalog
 * doesn't print individual pattern numbers for this range - "a complete
 * list of designs is available from sales."
 */
export const ekoGreenInfo = {
  name: "EkoGreen",
  panelThicknessOptions_mm: [24, 36, 48],
  construction: "Hydro Exterior HDF board with XPS core, PVC foil coated",
  uvProtection: "Solar Shield technology",
  glazingOption: "Optional VSG 33.1 safety glass",
  note: "Combinable with side lights, bottom panels (Sottotraversi) and muntin bars (Scuretti). Full design list available from sales, not printed in the catalog.",
};

/**
 * PVC model doors ("Modelltüren aus PVC", p.134-155): 39 designs
 * (numbered 02-40 as printed), PVC only, uniform size range. Available
 * in Aluplast profile colours (Ideal 4000/5000/8000, EkoSun 70) or
 * Salamander profile colours (BluEvolution 92).
 */
export const pvcModelDoors: EkoDoorPanel[] = [
  { id: "eko-model-02", code: "Modell 02", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-02.png" },
  { id: "eko-model-03", code: "Modell 03", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-03.png" },
  { id: "eko-model-04", code: "Modell 04", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-04.png" },
  { id: "eko-model-05", code: "Modell 05", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-05.png" },
  { id: "eko-model-06", code: "Modell 06", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-06.png" },
  { id: "eko-model-07", code: "Modell 07", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-07.png" },
  { id: "eko-model-08", code: "Modell 08", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-08.png" },
  { id: "eko-model-09", code: "Modell 09", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-09.png" },
  { id: "eko-model-10", code: "Modell 10", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-10.png" },
  { id: "eko-model-11", code: "Modell 11", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-11.png" },
  { id: "eko-model-12", code: "Modell 12", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-12.png" },
  { id: "eko-model-13", code: "Modell 13", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-13.png" },
  { id: "eko-model-14", code: "Modell 14", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-14.png" },
  { id: "eko-model-15", code: "Modell 15", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-15.png" },
  { id: "eko-model-16", code: "Modell 16", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-16.png" },
  { id: "eko-model-17", code: "Modell 17", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-17.png" },
  { id: "eko-model-18", code: "Modell 18", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-18.png" },
  { id: "eko-model-19", code: "Modell 19", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-19.png" },
  { id: "eko-model-20", code: "Modell 20", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-20.png" },
  { id: "eko-model-21", code: "Modell 21", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-21.png" },
  { id: "eko-model-22", code: "Modell 22", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-22.png" },
  { id: "eko-model-23", code: "Modell 23", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-23.png" },
  { id: "eko-model-24", code: "Modell 24", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-24.png" },
  { id: "eko-model-25", code: "Modell 25", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-25.png" },
  { id: "eko-model-26", code: "Modell 26", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-26.png" },
  { id: "eko-model-27", code: "Modell 27", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-27.png" },
  { id: "eko-model-28", code: "Modell 28", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-28.png" },
  { id: "eko-model-29", code: "Modell 29", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-29.png" },
  { id: "eko-model-30", code: "Modell 30", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-30.png" },
  { id: "eko-model-31", code: "Modell 31", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-31.png" },
  { id: "eko-model-32", code: "Modell 32", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-32.png" },
  { id: "eko-model-33", code: "Modell 33", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-33.png" },
  { id: "eko-model-34", code: "Modell 34", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-34.png" },
  { id: "eko-model-35", code: "Modell 35", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-35.png" },
  { id: "eko-model-36", code: "Modell 36", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-36.png" },
  { id: "eko-model-37", code: "Modell 37", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-37.png" },
  { id: "eko-model-38", code: "Modell 38", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-38.png" },
  { id: "eko-model-39", code: "Modell 39", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-39.png" },
  { id: "eko-model-40", code: "Modell 40", group: "model", sizes: { pvc: { min: "600 x 1650", max: "900 x 2150" } }, image: "/images/doors/eko/model-40.png" },
];

/**
 * PVC cladding panels ("Verkleidungspaneele aus PVC", p.156-195): 37
 * individually named designs (women's names + "ET" suffix), PVC only,
 * each with its own minimum size but a shared maximum (990 x 2270mm).
 * Fully-covered sash frame with GFRP (fibreglass-reinforced plastic)
 * coating over a solid core, 36-70mm thick, independently finished
 * inside/outside, concealed hinges standard (roller hinges optional).
 */
export const claddingPanels: EkoDoorPanel[] = [
  { id: "eko-cladding-aida-et", code: "AIDA ET", group: "cladding", sizes: { pvc: { min: "600 x 1500", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-aida-et.png" },
  { id: "eko-cladding-amanda-et", code: "AMANDA ET", group: "cladding", sizes: { pvc: { min: "850 x 1950", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-amanda-et.png" },
  { id: "eko-cladding-amelie-et", code: "AMELIE ET", group: "cladding", sizes: { pvc: { min: "800 x 1850", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-amelie-et.png" },
  { id: "eko-cladding-aneta-et", code: "ANETA ET", group: "cladding", sizes: { pvc: { min: "600 x 1900", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-aneta-et.png" },
  { id: "eko-cladding-angelika-et", code: "ANGELIKA ET", group: "cladding", sizes: { pvc: { min: "760 x 1950", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-angelika-et.png" },
  { id: "eko-cladding-barbara-et", code: "BARBARA ET", group: "cladding", sizes: { pvc: { min: "800 x 1850", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-barbara-et.png" },
  { id: "eko-cladding-brigitte-et", code: "BRIGITTE ET", group: "cladding", sizes: { pvc: { min: "850 x 1950", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-brigitte-et.png" },
  { id: "eko-cladding-denisa-et", code: "DENISA ET", group: "cladding", sizes: { pvc: { min: "600 x 1900", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-denisa-et.png" },
  { id: "eko-cladding-donatela-et", code: "DONATELA ET", group: "cladding", sizes: { pvc: { min: "850 x 1950", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-donatela-et.png" },
  { id: "eko-cladding-doris-et", code: "DORIS ET", group: "cladding", sizes: { pvc: { min: "750 x 1850", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-doris-et.png" },
  { id: "eko-cladding-ester-et", code: "ESTER ET", group: "cladding", sizes: { pvc: { min: "700 x 1900", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-ester-et.png" },
  { id: "eko-cladding-flavia-et", code: "FLAVIA ET", group: "cladding", sizes: { pvc: { min: "850 x 1850", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-flavia-et.png" },
  { id: "eko-cladding-flora-et", code: "FLORA ET", group: "cladding", sizes: { pvc: { min: "500 x 1570", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-flora-et.png" },
  { id: "eko-cladding-gita-et", code: "GITA ET", group: "cladding", sizes: { pvc: { min: "600 x 1600", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-gita-et.png" },
  { id: "eko-cladding-ida-et", code: "IDA ET", group: "cladding", sizes: { pvc: { min: "600 x 1900", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-ida-et.png" },
  { id: "eko-cladding-isabela-et", code: "ISABELA ET", group: "cladding", sizes: { pvc: { min: "800 x 1850", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-isabela-et.png" },
  { id: "eko-cladding-kim-et", code: "KIM ET", group: "cladding", sizes: { pvc: { min: "800 x 1850", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-kim-et.png" },
  { id: "eko-cladding-kira-et", code: "KIRA ET", group: "cladding", sizes: { pvc: { min: "800 x 1850", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-kira-et.png" },
  { id: "eko-cladding-laura-et", code: "LAURA ET", group: "cladding", sizes: { pvc: { min: "800 x 1850", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-laura-et.png" },
  { id: "eko-cladding-lily-et", code: "LILY ET", group: "cladding", sizes: { pvc: { min: "700 x 1500", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-lily-et.png" },
  { id: "eko-cladding-manon-et", code: "MANON ET", group: "cladding", sizes: { pvc: { min: "800 x 1700", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-manon-et.png" },
  { id: "eko-cladding-marion-et", code: "MARION ET", group: "cladding", sizes: { pvc: { min: "750 x 1850", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-marion-et.png" },
  { id: "eko-cladding-megan-et", code: "MEGAN ET", group: "cladding", sizes: { pvc: { min: "600 x 1500", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-megan-et.png" },
  { id: "eko-cladding-milena-et", code: "MILENA ET", group: "cladding", sizes: { pvc: { min: "630 x 1725", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-milena-et.png" },
  { id: "eko-cladding-miranda-et", code: "MIRANDA ET", group: "cladding", sizes: { pvc: { min: "700 x 1850", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-miranda-et.png" },
  { id: "eko-cladding-miriam-et", code: "MIRIAM ET", group: "cladding", sizes: { pvc: { min: "850 x 1950", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-miriam-et.png" },
  { id: "eko-cladding-mirka-et", code: "MIRKA ET", group: "cladding", sizes: { pvc: { min: "770 x 1810", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-mirka-et.png" },
  { id: "eko-cladding-nela-et", code: "NELA ET", group: "cladding", sizes: { pvc: { min: "638 x 1722", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-nela-et.png" },
  { id: "eko-cladding-odette-et", code: "ODETTE ET", group: "cladding", sizes: { pvc: { min: "870 x 1838", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-odette-et.png" },
  { id: "eko-cladding-patricie-et", code: "PATRICIE ET", group: "cladding", sizes: { pvc: { min: "600 x 1900", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-patricie-et.png" },
  { id: "eko-cladding-penelope-et", code: "PENELOPE ET", group: "cladding", sizes: { pvc: { min: "898 x 2032", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-penelope-et.png" },
  { id: "eko-cladding-radana-et", code: "RADANA ET", group: "cladding", sizes: { pvc: { min: "750 x 1790", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-radana-et.png" },
  { id: "eko-cladding-raisa-et", code: "RAISA ET", group: "cladding", sizes: { pvc: { min: "850 x 1950", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-raisa-et.png" },
  { id: "eko-cladding-rosalie-et", code: "ROSALIE ET", group: "cladding", sizes: { pvc: { min: "740 x 1820", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-rosalie-et.png" },
  { id: "eko-cladding-sarah-et", code: "SARAH ET", group: "cladding", sizes: { pvc: { min: "500 x 1740", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-sarah-et.png" },
  { id: "eko-cladding-sofie-et", code: "SOFIE ET", group: "cladding", sizes: { pvc: { min: "850 x 1850", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-sofie-et.png" },
  { id: "eko-cladding-tania-et", code: "TANIA ET", group: "cladding", sizes: { pvc: { min: "800 x 1800", max: "990 x 2270" } }, image: "/images/doors/eko/cladding-tania-et.png" },
];

/** Panel-filling options usable with the Steel door profiles below */
export const steelDoorPanelFillings = [
  {
    name: "Standard (foam/OSB)",
    fillings: ["Polyurethane foam", "OSB board"],
  },
  {
    name: "AluLine",
    description: "Aluminium-faced panel filling, extensive pattern catalog or fully custom design. Compatible with Presto, Unico and Unico XS profiles.",
  },
  {
    name: "EkoVitre",
    description: "Glass panel filling for steel doors, large model selection or custom proposal. Compatible with Presto, Unico and Unico XS profiles.",
  },
  {
    name: "Garage door matching panel",
    description: "Matches the entrance door design to a Presto/Unico-profile sectional garage door for a unified facade look.",
  },
];

export const steelDoorSystems = {
  profiles: ["Unico", "Unico XS", "Presto"],
  panelThickness_mm: 35,
  panelMaterial: "Galvanised steel",
  colours: "RAL",
  standardFillings: ["Polyurethane foam", "OSB board"],
};

/** Threshold options shared across the whole entrance-door range */
export const thresholdOptions = {
  warmThreshold: {
    name: "Warm threshold",
    variants: ["With insulation material", "On a PVC system widening strip"],
    benefit: "Prevents thermal bridging and cold air infiltration under the floor",
  },
  thresholdFreeEntrance: {
    name: "Threshold-free entrance door",
    features: ["Double magnetic seal in a flat threshold", "Level difference to floor of up to 30mm", "Threshold drainage channel"],
    benefit: "Near-flush transition between interior and terrace - easier access for children, elderly and reduced-mobility users",
  },
};

/** General door hardware, extending doorHardwareAccessories in entrance-door-designs.ts with a few items unique to this catalog */
export const generalDoorHardware = {
  hinges: [
    "Standard hinges (JOCKER, Dr. Hahn, Wala WX, SFS Easy 3D)",
    "Roller hinges (SFS Wala WR)",
    "Concealed hinges (KFV AXXENT)",
  ],
  locking: ["3-point locking", "5-point locking", "Roller locking", "Hook locking", "Automatic locking (motorised, GU Security)"],
  doorClosers: ["GEZE (with or without GU lock protection)", "Geze Boxer", "Dorma 93b", "Geze 5000"],
  accessControl: ["Idecom (K1 250x150 or Q10 40x40 mount)", "Sorex keypad", "Microswitch (FI30 cover mount)"],
  peephole: { diameter_mm: 14, finish: "Chrome, satin", forPanelThickness_mm: { min: 15, max: 85 } },
  mailSlotModels: ["MILA ProStyle", "MILA", "GAVA"],
  leverHandles: ["Victory", "New York", "Greenteq", "Jowisz", "FKS 1080 (knob)", "Pluton", "DG59", "35A/1200", "Sobinco Touch", "M1", "M2", "P Greenteq"],
  pullHandleSeries: ["P1", "P5", "P8", "P10", "P45", "P45B", "Q5", "Q series (electronics-ready)", "DP30", "DP40", "DP50", "DP60", "DP70", "DP80"],
  recessedHandleShell: {
    code: "KA1",
    finishes: ["Joinery colour (matched to door/window finish)"],
    ledOptions: ["Warm white", "Neutral white", "Cold white", "Blue"],
    note: "LED versions available for Despiro and MasterLine 8 Despiro doors only.",
  },
};

/** Colour/material notes from the general intro (p.8-9) */
export const generalMaterialInfo = {
  materials: ["PVC", "Aluminium (ALU)", "Wood (WOOD)"],
  pvcProfileColourBrands: ["Aluplast", "Salamander", "Gealan"],
  alsoAvailableIn: "RAL",
  panelFillings: ["Polyurethane foam", "Plywood + extruded polystyrene (XPS)"],
  panelFacings: { hpl: "Veneered HPL", sheet: "Lacquered aluminium sheet" },
  fillingThickness_mm: [24, 36, 48],
  woodPanelThickness_mm: [24, 34, 46],
  finishOptions: ["Without Applikation (plain)", "With Applikation (decorative overlay)"],
};
