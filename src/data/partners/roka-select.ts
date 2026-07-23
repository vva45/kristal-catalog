// data/partners/roka-select.ts
//
// Roka Select: 22 door models across 3 finish families (powder coating,
// real wood veneer "Altholz", ceramic). Showing 6 examples - 2 per
// finish family - rather than a strict "3" since Select's natural
// structure IS the 3 finish families (Vladi's "3 per type" instruction
// was specifically for Function; for Select this felt like the more
// faithful curation).
//
// Base technical spec shared across the whole collection (from p.6-7 of
// the catalog): Wicona "ROKA Exclusive" aluminium profile system,
// flush sashes inside and out, multi-point locking, aluminium
// thermally-broken threshold, standard size up to 1150x2250mm.
// Individual Ud (door U-value) varies by model/glazing as shown below.
//
// IMAGE VERIFICATION NOTE: the 6 photos below were matched to their
// model number using the PDF's internal image/text ordering (verified
// reliable for Roka Function), but a tool glitch prevented visually
// double-checking THIS batch before handoff - please eyeball each one
// against the spec below once applied, before publishing.

import { PartnerDoorModel, PartnerBrand } from "./types";

export const rokaSelectBrand: PartnerBrand = {
  name: "ROKA Select",
  officialSite: "https://rokadoors.com",
  note: { en: "Browse the complete Select catalogue below, then get in touch with us for pricing, samples and installation.", de: "Browse the complete Select catalogue below, then get in touch with us for pricing, samples and installation." },
};

export const rokaSelectDoors: PartnerDoorModel[] = [
  {
    id: "roka-select-3",
    code: "SELECT 3",
    collection: "Roka Select",
    handle: "ES 40.1600 stainless steel push handle",
    glazing: { outer: "VSG safety glass", inner: "Satinato (frosted) middle pane, float glass inside" },
    surface: "RAL 9007 grey aluminium, matt or fine-structure",
    uwValue: "Ud 0.80 W/m²K",
    profileSystem: "Wicona ROKA Exclusive",
    image: "/images/entrance-doors/roka-select-3.jpg",
    catalogSource: "ROKA_Select_DE.pdf, p.22 (powder coating range)",
  },
  {
    id: "roka-select-7",
    code: "SELECT 7",
    collection: "Roka Select",
    handle: "ES 40.1600 stainless steel push handle",
    glazing: { outer: "VSG safety glass", inner: "Satinato (frosted) middle pane, float glass inside" },
    surface: "RAL 9007 grey aluminium, matt or fine-structure",
    uwValue: "Ud 0.84 W/m²K",
    profileSystem: "Wicona ROKA Exclusive",
    image: "/images/entrance-doors/roka-select-7.jpg",
    catalogSource: "ROKA_Select_DE.pdf, p.25 (powder coating range)",
  },
  {
    id: "roka-select-13",
    code: "SELECT 13",
    collection: "Roka Select",
    handle: "ES 130.1600, RAL 9005 black fine-structure",
    surface: "Real wood veneer - Country Oak",
    uwValue: "Ud 0.88 W/m²K",
    profileSystem: "Wicona ROKA Exclusive",
    type: { en: "Real wood veneer (Altholz) range", de: "Real wood veneer (Altholz) range" },
    image: "/images/entrance-doors/roka-select-13.jpg",
    catalogSource: "ROKA_Select_DE.pdf, p.30 (Altholz range)",
  },
  {
    id: "roka-select-15",
    code: "SELECT 15",
    collection: "Roka Select",
    handle: "ES 130.1600, RAL 9005 black fine-structure",
    surface: "Real wood veneer - Dark Oak",
    uwValue: "Ud 0.72 W/m²K",
    profileSystem: "Wicona ROKA Exclusive",
    type: { en: "Real wood veneer (Altholz) range", de: "Real wood veneer (Altholz) range" },
    image: "/images/entrance-doors/roka-select-15.jpg",
    catalogSource: "ROKA_Select_DE.pdf, p.30 (Altholz range)",
  },
  {
    id: "roka-select-19",
    code: "SELECT 19",
    collection: "Roka Select",
    handle: "ES 600.1600 flush handle, aluminium in door-frame colour",
    surface: "Ceramic - Ossido Nero",
    uwValue: "Ud 0.88 W/m²K",
    profileSystem: "Wicona ROKA Exclusive",
    type: { en: "Ceramic surface range", de: "Ceramic surface range" },
    image: "/images/entrance-doors/roka-select-19.jpg",
    catalogSource: "ROKA_Select_DE.pdf, p.34 (ceramic range)",
  },
  {
    id: "roka-select-22",
    code: "SELECT 22",
    collection: "Roka Select",
    handle: "ES 130.1600, RAL 9005 black fine-structure",
    surface: "Ceramic - Pietra Di Savoia Griga Bocciardato (new)",
    uwValue: "Ud 0.82 W/m²K",
    profileSystem: "Wicona ROKA Exclusive",
    type: { en: "Ceramic surface range", de: "Ceramic surface range" },
    image: "/images/entrance-doors/roka-select-22.jpg",
    catalogSource: "ROKA_Select_DE.pdf, p.34 (ceramic range, marked NEU/new)",
  },
];
