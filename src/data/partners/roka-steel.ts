// data/partners/roka-steel.ts
//
// Roka Steel is different in kind from Function/Select/Signature: it's
// not one collection of numbered door designs, it's a catalogue of DOOR
// TYPES (hinged/pivot/sliding/fixed panel/sound-proofed/fire-rated) each
// shown for interior and exterior use. It's also lighter on hard
// technical numbers than Kristall Fenster's own PVC/Aluminium/Steel
// systems - mostly Material/Finish/Glass/Hardware descriptors rather
// than frame-depth tables, so that's what's captured below (no
// fabricated dimension data).
//
// 7 representative types shown (not 22 design variants like Select,
// since Steel's "types" are the door mechanisms themselves, not finish
// options) - one interior hinged, one interior pivot, one sliding, one
// fixed panel, one sound-proofed, one fire-rated, one exterior.
//
// IMAGE VERIFICATION NOTE: same tool glitch as Select prevented visual
// double-checking, BUT each of these 7 pages had exactly ONE image (no
// ambiguity about position/order like Select's multi-image pages), so
// confidence in correct pairing is high. Still worth a quick glance
// before publishing.

import { PartnerDoorModel, PartnerBrand } from "./types";

export const rokaSteelBrand: PartnerBrand = {
  name: "ROKA Steel",
  officialSite: "https://rokadoors.com",
  note: "Browse the complete Steel Collection catalogue below, then get in touch with us for pricing and installation.",
};

export const rokaSteelDoors: PartnerDoorModel[] = [
  {
    id: "roka-steel-pivot-door",
    code: "Single Pivot Door",
    collection: "Roka Steel",
    handle: "Oslo door pull",
    glazing: { outer: "Transparent" },
    surface: "RAL 9005 (black)",
    type: "Interior - floor/ceiling pivot mechanism, no visible frame",
    image: "/images/entrance-doors/roka-steel-pivot-door.jpg",
    catalogSource: "ROKA_Steel_DE.pdf, p.24",
  },
  {
    id: "roka-steel-hinged-door",
    code: "Double Hinged Door",
    collection: "Roka Steel",
    handle: "Vienna door pull",
    glazing: { outer: "Transparent" },
    surface: "RAL 9005 (black)",
    type: "Interior - classic double-leaf hinged door",
    image: "/images/entrance-doors/roka-steel-hinged-door.jpg",
    catalogSource: "ROKA_Steel_DE.pdf, p.28",
  },
  {
    id: "roka-steel-slide-door",
    code: "Single Slide Door",
    collection: "Roka Steel",
    handle: "Oslo door pull",
    glazing: { outer: "Fluted glass" },
    surface: "RAL 9005 (black)",
    type: "Interior - sliding door",
    image: "/images/entrance-doors/roka-steel-slide-door.jpg",
    catalogSource: "ROKA_Steel_DE.pdf, p.42",
  },
  {
    id: "roka-steel-fix-panel",
    code: "Fix Panel",
    collection: "Roka Steel",
    glazing: { outer: "Frosted satinato glass or transparent" },
    surface: "RAL 9005 (black)",
    type: "Interior - fixed glazed partition panel",
    image: "/images/entrance-doors/roka-steel-fix-panel.jpg",
    catalogSource: "ROKA_Steel_DE.pdf, p.48",
  },
  {
    id: "roka-steel-sound-proofed",
    code: "Sound-Proofed Door",
    collection: "Roka Steel",
    handle: "Oslo door pull",
    glazing: { outer: "Transparent - 8.8mm (VSG 44.2) acoustic laminated glass" },
    surface: "RAL 9005 (black)",
    type: "Interior - acoustic-rated door",
    image: "/images/entrance-doors/roka-steel-sound-proofed.jpg",
    catalogSource: "ROKA_Steel_DE.pdf, p.54",
  },
  {
    id: "roka-steel-fire-rated",
    code: "Fire-Rated Door",
    collection: "Roka Steel",
    handle: "Vienna door pull",
    glazing: { outer: "Transparent" },
    surface: "RAL 9005 (black)",
    type: "Interior - fire-rated door",
    image: "/images/entrance-doors/roka-steel-fire-rated.jpg",
    catalogSource: "ROKA_Steel_DE.pdf, p.58",
  },
  {
    id: "roka-steel-exterior",
    code: "Double Door and Windows",
    collection: "Roka Steel",
    glazing: { outer: "Transparent" },
    surface: "Stainless steel, blackened finish",
    type: "Exterior - steel entrance door and window system",
    image: "/images/entrance-doors/roka-steel-exterior.jpg",
    catalogSource: "ROKA_Steel_DE.pdf, p.66",
  },
];
