// data/partners/roka.ts
//
// ROKA (Bielsko-Biała, Poland) - entrance door manufacturer, official
// site rokadoors.com (confirmed from the catalog's own back page).
//
// Per the partner arrangement, Roka Function shows 3 curated example
// models out of their 10, with a link to ROKA's own site for the full
// range and direct support on inquiries.
//
// Roka Select, Roka Signature and Monumenta are much larger collections
// (23, 298 and 197 pages respectively) - still being scoped, not yet
// added here.

import { PartnerDoorModel, PartnerBrand } from "./types";

export const rokaBrand: PartnerBrand = {
  name: "ROKA",
  officialSite: "https://rokadoors.com",
  note: "Browse the complete Function catalogue below, then get in touch with us for pricing, samples and installation.",
};

export const rokaFunctionDoors: PartnerDoorModel[] = [
  {
    id: "roka-function-1",
    code: "FUNCTION 1",
    collection: "Roka Function",
    handle: "ES 30.600 stainless steel push handle",
    glazing: { outer: "Thermofloat", inner: "Clear glass" },
    surface: "RAL 9016 traffic white, matt or fine-structure",
    uwValue: "Ud 1.05 W/m²K",
    profileSystem: "ROKA Standard 75 mm",
    image: "/images/entrance-doors/roka-function-1.jpg",
    catalogSource: "Roka-Function.pdf, p.10",
  },
  {
    id: "roka-function-8",
    code: "FUNCTION 8",
    collection: "Roka Function",
    handle: "ES 30.600 stainless steel push handle",
    glazing: { outer: "Thermofloat", inner: "Sandblasted glass with clear motifs" },
    surface: "RAL 7021 fir green, matt or fine-structure",
    uwValue: "Ud 1.3 W/m²K",
    profileSystem: "ROKA Standard 75 mm",
    image: "/images/entrance-doors/roka-function-8.jpg",
    catalogSource: "Roka-Function.pdf, p.13",
  },
  {
    id: "roka-function-10",
    code: "FUNCTION 10",
    collection: "Roka Function",
    handle: "ES 2631 stainless steel ball knob on oval rosette",
    surface: "RAL 9007 grey aluminium, matt or fine-structure",
    uwValue: "Ud 1.3 W/m²K",
    profileSystem: "ROKA Standard 65 mm",
    type: "Secondary entrance door",
    image: "/images/entrance-doors/roka-function-10.jpg",
    catalogSource: "Roka-Function.pdf, p.14",
  },
];
