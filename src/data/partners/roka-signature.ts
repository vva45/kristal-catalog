// data/partners/roka-signature.ts
//
// Roka Signature is the flagship line, organised into 7 aesthetic themes
// (not finish families like Select, not door types like Steel). Each
// theme has many numbered designs with evocative names; one example per
// theme is shown here, matching the scale used for Function/Steel.
//
// IMAGE VERIFICATION NOTE: same tool glitch as Select/Steel prevented
// visual double-checking, but each of these 7 source pages had exactly
// one image (same low-risk situation as Steel).

import { PartnerDoorModel, PartnerBrand } from "./types";

export const rokaSignatureBrand: PartnerBrand = {
  name: "ROKA Signature",
  officialSite: "https://rokadoors.com",
  note: { en: "Browse the complete Signature catalogue below, then get in touch with us for pricing, samples and installation.", de: "Browse the complete Signature catalogue below, then get in touch with us for pricing, samples and installation." },
};

export const rokaSignatureDoors: PartnerDoorModel[] = [
  {
    id: "roka-signature-earth",
    code: "Earth No. 02",
    collection: "Roka Signature",
    handle: "Sol",
    surface: "Golden Auburn",
    type: { en: "Earth theme - warm, grounded earth tones (\"Tundra\")", de: "Earth theme - warm, grounded earth tones (\"Tundra\")" },
    image: "/images/entrance-doors/roka-signature-earth.jpg",
    catalogSource: "ROKA-Signature-DE.pdf, p.36 (Earth theme, p.34-69)",
  },
  {
    id: "roka-signature-keramik",
    code: "Keramik No. 01",
    collection: "Roka Signature",
    handle: "Linea",
    surface: "Travertino Noce ceramic",
    type: { en: "Keramik (Ceramic) theme", de: "Keramik (Ceramic) theme" },
    image: "/images/entrance-doors/roka-signature-keramik.jpg",
    catalogSource: "ROKA-Signature-DE.pdf, p.70 (Keramik theme, p.70-93)",
  },
  {
    id: "roka-signature-balance",
    code: "Balance No. 01",
    collection: "Roka Signature",
    handle: "Nexus",
    surface: "Whispering Dawn",
    type: { en: "Balance theme", de: "Balance theme" },
    image: "/images/entrance-doors/roka-signature-balance.jpg",
    catalogSource: "ROKA-Signature-DE.pdf, p.97 (Balance theme, p.94-121)",
  },
  {
    id: "roka-signature-glas",
    code: "Glas No. 01",
    collection: "Roka Signature",
    handle: "Linea",
    glazing: { outer: "Klarglas (clear glass)" },
    surface: "Deep Midnight / RAL 9005",
    type: { en: "Glas (Glass) theme", de: "Glas (Glass) theme" },
    image: "/images/entrance-doors/roka-signature-glas.jpg",
    catalogSource: "ROKA-Signature-DE.pdf, p.124 (Glas theme, p.122-145)",
  },
  {
    id: "roka-signature-holz",
    code: "Holz No. 02",
    collection: "Roka Signature",
    handle: "Emblem",
    surface: "Pyrenean Velvet (wood finish)",
    type: { en: "Holz (Wood) theme", de: "Holz (Wood) theme" },
    image: "/images/entrance-doors/roka-signature-holz.jpg",
    catalogSource: "ROKA-Signature-DE.pdf, p.148 (Holz theme, p.146-177)",
  },
  {
    id: "roka-signature-liquid-metal",
    code: "Edles Flüssigmetall No. 02",
    collection: "Roka Signature",
    handle: "Viva",
    surface: "Antique Silver Nickel (liquid metal finish)",
    type: { en: "Noble Liquid Metal theme", de: "Noble Liquid Metal theme" },
    image: "/images/entrance-doors/roka-signature-liquid-metal.jpg",
    catalogSource: "ROKA-Signature-DE.pdf, p.181 (Flüssigmetall theme, p.178-199)",
  },
  {
    id: "roka-signature-vintage",
    code: "Vintage No. 01",
    collection: "Roka Signature",
    handle: "Rondure",
    surface: "Khaki / Light Antique Brass",
    type: { en: "Vintage theme", de: "Vintage theme" },
    image: "/images/entrance-doors/roka-signature-vintage.jpg",
    catalogSource: "ROKA-Signature-DE.pdf, p.203 (Vintage theme, p.200-231)",
  },
];
