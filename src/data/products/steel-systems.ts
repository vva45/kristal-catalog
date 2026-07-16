// data/products/steel-systems.ts
//
// Technical specs extracted from the individual steel product PDFs.
// Presto, Unico, Unico XS and Unico XS Casement are Forster systems.
// Presto is split into two separate products - "presto" (window) and
// "presto-door" (door) - since Forster sells them as distinct systems
// under the same name with different figures (105mm vs 130mm collapsed
// profile height, 6-36mm vs 5-26mm glazing). Unico, Unico XS, Unico XS
// Casement and window-Presto have their own PDFs/images already split
// out at public/pdf/steel/ and public/images/steel/. Presto (door), Presto
// XS, Norm Slide, Norm Pivot and Loft (+ Loft Folding) come from
// Katalog_Stahl_DE-21-45.pdf (steel catalog part 2/3) - their individual
// PDFs/images still need to be created the same way the aluminium ones
// were (see aluminium-systems.ts), so their image/pdf paths below are
// placeholders that will 404 until those exist.
// NOTE: Loft and Loft Folding are made by Furmaniak, not Forster - the
// catalog explicitly shows a different manufacturer logo for those two.
//
// Unico (garage) and Presto (garage) are the same Forster brand names sold
// as swing-opening ("Schwenktor") garage doors - a third variant alongside
// their window and door versions, from Katalog_Stahl_DE-46-64.pdf (steel
// catalog part 3/3, p.46-49). The catalog's own section heading calls this
// family "Schiebetore" (sliding gates) but the individual product pages
// are explicitly labelled "SCHWENKTOR" (swing/hinged opening) - going with
// the product-page label since it's more specific.

import { ProductSystem } from "./types";

export const steelSystems: ProductSystem[] = [
  {
    id: "presto",
    name: "Presto",
    material: "steel",
    manufacturer: "Forster",
    category: "window",
    image: "/images/steel/presto.png",
    pdf: "/pdf/steel/presto.pdf",
    specs: [
      { label: "Seals", value: "2" },
      { label: "Chambers", value: "1" },
      { label: "Installation depth", value: "50 mm" },
      { label: "Collapsed profile height", value: "105 mm" },
      { label: "Glazing thickness", value: "6–36 mm" },
      { label: "Thermal break", value: "None - not thermally broken" },
      { label: "Material", value: "Hot-dip galvanised, powder-coated steel, 1.5 mm wall" },
    ],
    catalogSource: "presto.pdf (steel folder, already in repo)",
  },
  {
    id: "presto-door",
    name: "Presto",
    material: "steel",
    manufacturer: "Forster",
    category: "door",
    image: "/images/steel/presto-door.png",
    pdf: "/pdf/steel/presto-door.pdf",
    specs: [
      { label: "Seals", value: "2" },
      { label: "Chambers", value: "1" },
      { label: "Installation depth", value: "50 mm" },
      { label: "Collapsed profile height", value: "130 mm" },
      { label: "Glazing thickness", value: "5–26 mm" },
      { label: "Thermal break", value: "None - not thermally broken" },
      { label: "Material", value: "Hot-dip galvanised, powder-coated steel, 1.5 mm wall" },
      { label: "Note", value: "Threshold-free (self-lowering threshold), concealed height/depth-adjustable hinges, EPDM 2-component seals, panic hardware compatible, glass/panel/AluLine-panel/garage-door-panel infill options" },
    ],
    catalogSource: "Katalog_Stahl_DE-21-45.pdf (steel catalog part 2/3, p.21-23)",
  },
  {
    id: "unico",
    name: "Unico",
    material: "steel",
    manufacturer: "Forster",
    category: "window-door",
    image: "/images/steel/unico.png",
    pdf: "/pdf/steel/unico.pdf",
    specs: [
      { label: "Seals", value: "3" },
      { label: "Chambers", value: "3" },
      { label: "Installation depth", value: "70 mm" },
      { label: "Collapsed profile height", value: "62 mm" },
      { label: "Max. glazing thickness", value: "60 mm" },
      { label: "Thermal break", value: "Stainless steel thermal break" },
      { label: "Seal material", value: "2-component EPDM rubber" },
      { label: "Note", value: "Concealed hinges; HI (higher insulation) version available" },
    ],
    catalogSource: "unico.pdf (steel folder, already in repo)",
  },
  {
    id: "unico-xs",
    name: "Unico XS",
    material: "steel",
    manufacturer: "Forster",
    category: "window",
    image: "/images/steel/unico-xs.png",
    pdf: "/pdf/steel/unico-xs.pdf",
    specs: [
      { label: "Seals", value: "3" },
      { label: "Chambers", value: "3" },
      { label: "Installation depth", value: "70 mm" },
      { label: "Collapsed profile height", value: "55 mm" },
      { label: "Max. glazing thickness", value: "60 mm" },
      { label: "Thermal break", value: "Stainless steel thermal break" },
      { label: "Seal material", value: "2-component EPDM rubber" },
      { label: "Note", value: "Ultra-slim profile, concealed hardware; HI version available" },
    ],
    catalogSource: "unico-xs.pdf (steel folder, already in repo)",
  },
  {
    id: "unico-xs-casement",
    name: "Unico XS Casement",
    material: "steel",
    manufacturer: "Forster",
    category: "window",
    image: "/images/steel/unico-xs-casement.png",
    pdf: "/pdf/steel/unico-xs-casement.pdf",
    specs: [
      { label: "Seals", value: "2" },
      { label: "Chambers", value: "3" },
      { label: "Installation depth", value: "70 mm" },
      { label: "Collapsed profile height", value: "48 mm" },
      { label: "Max. glazing thickness", value: "42 mm" },
      { label: "Thermal break", value: "Stainless steel thermal break" },
      { label: "Opening", value: "Outward-opening, tilt position adjustable" },
      { label: "Note", value: "Concealed hardware, polished welded joints" },
    ],
    catalogSource: "unico-xs-casement.pdf (steel folder, already in repo)",
  },
  {
    id: "presto-xs",
    name: "Presto XS",
    material: "steel",
    manufacturer: "Forster",
    category: "door",
    image: "/images/steel/presto-xs.png",
    pdf: "/pdf/steel/presto-xs.pdf",
    specs: [
      { label: "Glazing thickness", value: "Up to 22 mm" },
      { label: "Installation depth", value: "50 mm" },
      { label: "Thermal break", value: "None - not thermally broken" },
      { label: "Use", value: "Interior use only" },
      { label: "Visible profile width (fixed pane)", value: "From 23 mm" },
      { label: "Min. visible width (frame + sash)", value: "45 mm" },
      { label: "Note", value: "Single-leaf, ultra-slim profile; welded and polished joints" },
    ],
    catalogSource: "Katalog_Stahl_DE-21-45.pdf (steel catalog part 2/3, p.24-25)",
  },
  {
    id: "norm-slide",
    name: "Norm Slide",
    material: "steel",
    manufacturer: "Forster",
    category: "sliding-door",
    image: "/images/steel/norm-slide.png",
    pdf: "/pdf/steel/norm-slide.pdf",
    specs: [
      { label: "Leaves", value: "1-2" },
      { label: "Max. weight", value: "120 kg (Slide-Stop system up to 80 kg)" },
      { label: "Installation depth", value: "40 mm" },
      { label: "Thermal break", value: "None - not thermally broken" },
      { label: "Mounting", value: "Wall- or ceiling-mounted, fully concealed running track" },
      { label: "Note", value: "Powder-coated steel profiles, anodised/coated wall covers to match door colour" },
    ],
    catalogSource: "Katalog_Stahl_DE-21-45.pdf (steel catalog part 2/3, p.28-29)",
  },
  {
    id: "norm-pivot",
    name: "Norm Pivot",
    material: "steel",
    manufacturer: "Forster",
    category: "door",
    image: "/images/steel/norm-pivot.png",
    pdf: "/pdf/steel/norm-pivot.pdf",
    specs: [
      { label: "Seals", value: "2" },
      { label: "Chambers", value: "1" },
      { label: "Installation depth", value: "50 mm" },
      { label: "Max. width", value: "1000 mm" },
      { label: "Max. height", value: "2600 mm" },
      { label: "Max. weight", value: "100 kg" },
      { label: "Install clearances", value: "Top 60 mm / bottom 90 mm / sides 40 mm" },
      { label: "Material", value: "Non-galvanised steel, 1.5 mm wall, any RAL colour" },
      { label: "Note", value: "Self-closing pivot door with open-position lock; welded and polished joints" },
    ],
    catalogSource: "Katalog_Stahl_DE-21-45.pdf (steel catalog part 2/3, p.30-31)",
  },
  {
    id: "loft",
    name: "Loft",
    material: "steel",
    manufacturer: "Furmaniak",
    category: "door",
    image: "/images/steel/loft.png",
    pdf: "/pdf/steel/loft.pdf",
    specs: [
      { label: "Seals", value: "1" },
      { label: "Chambers", value: "1" },
      { label: "Installation depth", value: "48 mm" },
      { label: "Thermal break", value: "None - not thermally broken" },
      { label: "Glazing", value: "6 or 8 mm glass packages, optional applied glazing bars (20 mm)" },
      { label: "Visible profile width (fixed pane)", value: "20 mm" },
      { label: "Visible width (frame + sash)", value: "44 mm" },
      { label: "Note", value: "Ultra-slim frameless-look profile for single/double-leaf doors and fixed walls; 5 standard door-lite patterns plus custom designs; Lucy, welded and Focus handle options" },
    ],
    catalogSource: "Katalog_Stahl_DE-21-45.pdf (steel catalog part 2/3, p.32-33, 36)",
  },
  {
    id: "loft-folding",
    name: "Loft Folding",
    material: "steel",
    manufacturer: "Furmaniak",
    category: "folding-door",
    image: "/images/steel/loft-folding.png",
    pdf: "/pdf/steel/loft-folding.pdf",
    specs: [
      { label: "Rails", value: "1" },
      { label: "Max. weight", value: "80 kg" },
      { label: "Max. number of leaves", value: "6" },
      { label: "Installation depth", value: "48 mm" },
      { label: "Thermal break", value: "None - not thermally broken" },
      { label: "Glazing", value: "6 or 8 mm glass packages, optional applied glazing bars (20 mm)" },
      { label: "Note", value: "Frameless-look folding wall system, vertically adjustable hinges; fold configurations 3-2-1, 3-3-0, 4-2-2, 4-3-1, 5-4-1, 5-5-0, 6-5-1, 6-6-0" },
    ],
    catalogSource: "Katalog_Stahl_DE-21-45.pdf (steel catalog part 2/3, p.34-35)",
  },
  {
    id: "unico-garage",
    name: "Unico",
    material: "steel",
    manufacturer: "Forster",
    category: "garage-door",
    image: "/images/steel/unico-garage.png",
    pdf: "/pdf/steel/unico-garage.pdf",
    specs: [
      { label: "Seals", value: "2" },
      { label: "Steel profile thickness", value: "1.5 mm" },
      { label: "Panel infill", value: "40 mm segmented gate panels" },
      { label: "Installation depth", value: "70 mm" },
      { label: "Insulation", value: "Polyurethane foam-filled panel" },
      { label: "Threshold", value: "Lowered threshold" },
      { label: "Colour", value: "Any RAL colour" },
      { label: "Panel finish options", value: "Smooth surface or wood-grain structure, in RAL or veneer colours" },
    ],
    catalogSource: "Katalog_Stahl_DE-46-64.pdf (steel catalog part 3/3, p.48)",
  },
  {
    id: "presto-garage",
    name: "Presto",
    material: "steel",
    manufacturer: "Forster",
    category: "garage-door",
    image: "/images/steel/presto-garage.png",
    pdf: "/pdf/steel/presto-garage.pdf",
    specs: [
      { label: "Seals", value: "2" },
      { label: "Steel profile thickness", value: "1.5-2.0 mm" },
      { label: "Panel infill", value: "40 mm segmented gate panels" },
      { label: "Installation depth", value: "50 mm" },
      { label: "Insulation", value: "Polyurethane foam-filled panel" },
      { label: "Threshold", value: "Lowered threshold" },
      { label: "Colour", value: "Any RAL colour" },
      { label: "Panel finish options", value: "Smooth surface or wood-grain structure, in RAL or veneer colours" },
    ],
    catalogSource: "Katalog_Stahl_DE-46-64.pdf (steel catalog part 3/3, p.49)",
  },
];
