// data/partners/drutex-dart.ts
//
// Drutex D-ART Line is a designer entrance-door collection from Drutex
// (official partner of FC Bayern Munich, per the catalog's back page),
// organised into 4 aesthetic themes - Classic, Elegance, Modern and
// Orient - each with several numbered designs. One representative
// example per theme is shown here, matching the scale already used for
// the ROKA Signature/Steel collections.
//
// IMAGE VERIFICATION NOTE: images were extracted directly from the
// source PDF (artline.pdf, one physical page per theme) using pdfimages,
// picking the largest lifestyle photo and the standalone product photo
// per page based on their position in the page's image stream (same
// method used - and visually verified - for Roka Function). Vladi should
// do a quick visual pass before publishing since this session's image
// preview didn't return a description to double-check against.

import { PartnerDoorModel, PartnerBrand } from "./types";

export const drutexDartBrand: PartnerBrand = {
  name: "Drutex D-ART Line",
  officialSite: "https://www.drutex.de",
  note: "Browse the complete D-ART Line catalogue below, then get in touch with us for pricing, samples and installation.",
};

export const drutexDartDoors: PartnerDoorModel[] = [
  {
    id: "drutex-dart-classic",
    code: "Classic 2",
    collection: "Drutex D-ART Line",
    handle: "Madeleine Antique Satin Gold",
    surface: "Anodic Graphite / Anodic Bronze",
    type: "Classic theme - timeless elegance for classic, modern-classic, Parisian or Hampton-style architecture",
    image: "/images/entrance-doors/drutex-dart-classic.jpg",
    catalogSource: "artline.pdf (Drutex D-ART Line), p.4-5 (Classic theme, p.4-9)",
  },
  {
    id: "drutex-dart-elegance",
    code: "Elegance 2",
    collection: "Drutex D-ART Line",
    handle: "Gold Splendour",
    surface: "Anodic Plum / Gold Splendour",
    type: "Elegance theme - subtle lines and refined details for modern-classic, art-deco or quiet-luxury style",
    image: "/images/entrance-doors/drutex-dart-elegance.jpg",
    catalogSource: "artline.pdf (Drutex D-ART Line), p.10-11 (Elegance theme, p.10-17)",
  },
  {
    id: "drutex-dart-modern",
    code: "Modern 11",
    collection: "Drutex D-ART Line",
    handle: "Anodic Bronze mit Maraqina",
    surface: "Metallic Cream",
    type: "Modern theme - clear lines and bold formats for contemporary, minimalist or industrial architecture",
    image: "/images/entrance-doors/drutex-dart-modern.jpg",
    catalogSource: "artline.pdf (Drutex D-ART Line), p.20-21 (Modern theme, p.14-31)",
  },
  {
    id: "drutex-dart-orient",
    code: "Prestige 2",
    collection: "Drutex D-ART Line",
    handle: "Metallic Night mit Frappucino",
    surface: "Metallic Night / Anodic Bronze",
    type: "Orient theme - light, rhythm and geometric motifs for Japandi, Wabi-Sabi and modern-zen interiors",
    image: "/images/entrance-doors/drutex-dart-orient.jpg",
    catalogSource: "artline.pdf (Drutex D-ART Line), p.32-33 (Orient theme, p.32-43)",
  },
];
