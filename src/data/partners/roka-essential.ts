// data/partners/roka-essential.ts
//
// Roka Essential: ROKA's entry-level collection, 8 models on the ROKA
// Exclusive profile system (same core system as Select, simpler
// execution) - 3-fach glazing Ug=0.5 W/m²K as standard, 6 colours in
// matt or fine-structure. Positioned below Function on price, per the
// catalogue's own tagline "Spitzenqualität zu einem attraktiven Preis"
// (top quality at an attractive price).
//
// 3 examples shown, same scale as Function (both are the smaller/entry
// collections in the ROKA range).
//
// IMAGE VERIFICATION NOTE: Claude's image-viewing tool remained broken
// for this batch too (persistent issue for the whole session after
// Function) - matched using the same proven positional method (each of
// pages 6/7 has 4 sequential door photos in code order, same layout
// Function used, which WAS visually verified there).

import { PartnerDoorModel, PartnerBrand } from "./types";

export const rokaEssentialBrand: PartnerBrand = {
  name: "ROKA Essential",
  officialSite: "https://rokadoors.com",
  note: "Browse the complete Essential catalogue below, then get in touch with us for pricing, samples and installation.",
};

export const rokaEssentialDoors: PartnerDoorModel[] = [
  {
    id: "roka-essential-1",
    code: "ESSENTIAL 1",
    collection: "Roka Essential",
    handle: "ES 40.1000 stainless steel push handle",
    glazing: { outer: "Thermofloat", inner: "Satinato (frosted) middle pane, thermofloat inside" },
    surface: "RAL 9016 traffic white, matt or fine-structure",
    uwValue: "Ud 0.86 W/m²K",
    profileSystem: "ROKA Exclusive",
    image: "/images/entrance-doors/roka-essential-1.jpg",
    catalogSource: "ROKA_Essential_DE.pdf, p.10",
  },
  {
    id: "roka-essential-4",
    code: "ESSENTIAL 4",
    collection: "Roka Essential",
    handle: "ES 40.1000 stainless steel push handle",
    glazing: { outer: "Thermofloat", inner: "Satinato (frosted) middle pane, thermofloat inside" },
    surface: "RAL 9007 grey aluminium, matt or fine-structure",
    uwValue: "Ud 0.81 W/m²K",
    profileSystem: "ROKA Exclusive",
    type: "Flush-inset Alunox application",
    image: "/images/entrance-doors/roka-essential-4.jpg",
    catalogSource: "ROKA_Essential_DE.pdf, p.11",
  },
  {
    id: "roka-essential-8",
    code: "ESSENTIAL 8",
    collection: "Roka Essential",
    handle: "ES 40.1000 stainless steel push handle",
    surface: "RAL 9005 black, matt or fine-structure",
    uwValue: "Ud 0.79 W/m²K",
    profileSystem: "ROKA Exclusive",
    type: "5mm relief-groove surface texture",
    image: "/images/entrance-doors/roka-essential-8.jpg",
    catalogSource: "ROKA_Essential_DE.pdf, p.13",
  },
];
