// data/products/steel-systems.ts
//
// Technical specs extracted from the 4 individual steel product PDFs
// already sitting in this repo at public/pdf/steel/ (presto.pdf, unico.pdf,
// unico-xs.pdf, unico-xs-casement.pdf) - no combined catalog needed, these
// were already split. Images already exist at public/images/steel/ too.

import { ProductSystem } from "./types";

export const steelSystems: ProductSystem[] = [
  {
    id: "presto",
    name: "Presto",
    material: "steel",
    manufacturer: "Steel systems", // catalog didn't state a brand name
    category: "window-door",
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
    id: "unico",
    name: "Unico",
    material: "steel",
    manufacturer: "Steel systems",
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
    manufacturer: "Steel systems",
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
    manufacturer: "Steel systems",
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
];
