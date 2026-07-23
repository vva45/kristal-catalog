// data/partners/monumenta.ts
//
// Monumenta is confirmed as a ROKA brand (catalogue p.192: "A brand by
// ROKA. Born from ROKA's mastery, Monumenta redefines luxury doors with
// an artistic vision"), not a separate manufacturer. It's positioned very
// differently from Function/Select/Steel/Signature though: "The Gallery"
// (p.18-191) shows ~15 individually named, bespoke door designs in
// premium natural materials (marble, natural stone, hand-crafted
// Venetian plaster "Arte Veneziana", designer metal surfaces by
// DeCastelli), each presented as a unique piece rather than a
// configurable catalogue product - closer to art pieces than standard
// doors. 7 examples shown here, matching the scale used elsewhere.
//
// IMAGE VERIFICATION NOTE: same tool glitch as the other ROKA
// collections. Main image per page picked by file size (largest = the
// real photo, tiny ~2KB files were decorative accent strips, excluded).

import { PartnerDoorModel, PartnerBrand } from "./types";

export const monumentaBrand: PartnerBrand = {
  name: "Monumenta",
  officialSite: "https://rokadoors.com",
  note: { en: "Browse the complete Monumenta gallery below, then get in touch with us to discuss a bespoke piece for your project.", de: "Browse the complete Monumenta gallery below, then get in touch with us to discuss a bespoke piece for your project." },
};

export const monumentaDoors: PartnerDoorModel[] = [
  {
    id: "monumenta-patagonia-segreta",
    code: "Patagonia Segreta",
    collection: "Monumenta",
    surface: "Marmista natural stone \"Patagonia\"",
    type: { en: "The Gallery - bespoke natural stone design", de: "The Gallery - bespoke natural stone design" },
    image: "/images/entrance-doors/monumenta-patagonia-segreta.jpg",
    catalogSource: "MONUMENTA-Catalogue-2025.pdf, p.22-31",
  },
  {
    id: "monumenta-terra-infranta",
    code: "Terra Infranta",
    collection: "Monumenta",
    surface: "Arte Veneziana \"Langhe\" (hand-crafted Venetian plaster)",
    type: { en: "The Gallery - designed by Giovanni Luca Ferreri", de: "The Gallery - designed by Giovanni Luca Ferreri" },
    image: "/images/entrance-doors/monumenta-terra-infranta.jpg",
    catalogSource: "MONUMENTA-Catalogue-2025.pdf, p.40-51",
  },
  {
    id: "monumenta-tranquillo-sospeso",
    code: "Tranquillo Sospeso",
    collection: "Monumenta",
    surface: "\"Leafs\" botanical relief surface",
    type: { en: "The Gallery - bespoke sculpted design", de: "The Gallery - bespoke sculpted design" },
    image: "/images/entrance-doors/monumenta-tranquillo-sospeso.jpg",
    catalogSource: "MONUMENTA-Catalogue-2025.pdf, p.50-61",
  },
  {
    id: "monumenta-impronta-di-vita",
    code: "Impronta di Vita",
    collection: "Monumenta",
    surface: "Alchymia \"Forest Rain\"",
    type: { en: "The Gallery - bespoke textured design", de: "The Gallery - bespoke textured design" },
    image: "/images/entrance-doors/monumenta-impronta-di-vita.jpg",
    catalogSource: "MONUMENTA-Catalogue-2025.pdf, p.60-69",
  },
  {
    id: "monumenta-aurora-di-mare",
    code: "Aurora di Mare",
    collection: "Monumenta",
    surface: "DeCastelli brushed brass and copper metal surfaces",
    type: { en: "The Gallery - designer metal surface", de: "The Gallery - designer metal surface" },
    image: "/images/entrance-doors/monumenta-aurora-di-mare.jpg",
    catalogSource: "MONUMENTA-Catalogue-2025.pdf, p.84-93",
  },
  {
    id: "monumenta-grano",
    code: "Grano",
    collection: "Monumenta",
    surface: "Arte Veneziana \"Gargano\" (hand-crafted Venetian plaster)",
    type: { en: "The Gallery - designed by Giovanni Luca Ferreri", de: "The Gallery - designed by Giovanni Luca Ferreri" },
    image: "/images/entrance-doors/monumenta-grano.jpg",
    catalogSource: "MONUMENTA-Catalogue-2025.pdf, p.110-119",
  },
  {
    id: "monumenta-strelitzia-alba",
    code: "Strelitzia Alba",
    collection: "Monumenta",
    surface: "Arte Veneziana \"Caigo\" (hand-crafted Venetian plaster)",
    type: { en: "The Gallery - designed by Leo De Carlo", de: "The Gallery - designed by Leo De Carlo" },
    image: "/images/entrance-doors/monumenta-strelitzia-alba.jpg",
    catalogSource: "MONUMENTA-Catalogue-2025.pdf, p.124-133",
  },
];
