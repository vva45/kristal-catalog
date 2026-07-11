// data/products/entrance-door-designs.ts
//
// The Aluminium catalog ends with two "door face" collections that are
// different in kind from the technical systems in aluminium-systems.ts:
// these are decorative front-door PANEL designs (glazing pattern, handle,
// frame finish, colour) built on the MB-86N system, not structural
// profiles. Useful for a "Puertas de entrada" gallery and, later, as
// configurator options (handle / glazing / colour pickers).
//
// Source: Katalog_Aluminium_DE.pdf, p. 54-63 (Despiro) and p. 63-64 (AluLine)

export interface EntranceDoorDesign {
  /** kebab-case id, e.g. "despiro-dp-01" */
  id: string;
  /** Catalog code as printed, e.g. "DP 01" */
  code: string;
  collection: "Despiro" | "AluLine";
  handle?: string;
  glazing?: {
    front?: string;
    middle?: string;
    back?: string;
  };
  /** How the stainless/alu-inox frame elements are mounted, if any */
  frameFinish?: string;
  /** Colour/finish - RAL code(s) or wood-like decor name */
  surface: string;
  /** Reference image path convention - actual files still need exporting from the PDF */
  image: string;
}

export const despiroDesigns: EntranceDoorDesign[] = [
  { id: "despiro-dp-01", code: "DP 01", collection: "Despiro", handle: "DP 60.1600, stainless steel", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float with clear stripes", back: "thermofloat, black edge" }, frameFinish: "Alu-Inox frame, surface-mounted, in/out", surface: "RAL 9016 traffic white, gloss", image: "/images/doors/despiro/dp-01.png" },
  { id: "despiro-dp-02", code: "DP 02", collection: "Despiro", handle: "DP 60.1800, stainless steel", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float with clear stripes", back: "thermofloat, black edge" }, frameFinish: "Alu-Inox frame, flush/recessed", surface: "RAL 7016 anthracite grey, matt", image: "/images/doors/despiro/dp-02.png" },
  { id: "despiro-dp-03", code: "DP 03", collection: "Despiro", handle: "DP 60.1000, stainless steel", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted glass", back: "thermofloat, black edge" }, frameFinish: "Alu-Inox frame, surface-mounted", surface: "RAL 7016 anthracite grey, matt", image: "/images/doors/despiro/dp-03.png" },
  { id: "despiro-dp-04", code: "DP 04", collection: "Despiro", handle: "DP 60.1400, stainless steel", frameFinish: "Alu-Inox frame, flush/recessed", surface: "Mahogany (wood-like finish, surcharge)", image: "/images/doors/despiro/dp-04.png" },
  { id: "despiro-dp-05", code: "DP 05", collection: "Despiro", handle: "DP 60.1600, stainless steel", frameFinish: "Milled reliefs, in/out", surface: "RAL 7016 anthracite grey", image: "/images/doors/despiro/dp-05.png" },
  { id: "despiro-dp-06", code: "DP 06", collection: "Despiro", handle: "DP 60.1000, stainless steel", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float with clear stripes", back: "thermofloat, black edge" }, frameFinish: "Milled reliefs, in/out", surface: "RAL 7001 silver grey, matt", image: "/images/doors/despiro/dp-06.png" },
  { id: "despiro-dp-07", code: "DP 07", collection: "Despiro", handle: "DP 40.1400, stainless steel", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted glass, clear border", back: "thermofloat, black edge" }, frameFinish: "Milled reliefs, in/out", surface: "RAL 3004 purple red, matt", image: "/images/doors/despiro/dp-07.png" },
  { id: "despiro-dp-08", code: "DP 08", collection: "Despiro", handle: "DP 60.800, stainless steel", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted glass, clear border", back: "thermofloat, black edge" }, surface: "RAL 9016 traffic white, gloss", image: "/images/doors/despiro/dp-08.png" },
  { id: "despiro-dp-09", code: "DP 09", collection: "Despiro", handle: "DP 60.1600, stainless steel", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted glass, clear border", back: "thermofloat, black edge" }, frameFinish: "Alu-Inox frame, flush, no offset", surface: "RAL 7016 anthracite matt / Wenge (wood-like, surcharge)", image: "/images/doors/despiro/dp-09.png" },
  { id: "despiro-dp-10", code: "DP 10", collection: "Despiro", handle: "DP 60.1800, stainless steel", surface: "RAL 9006 white aluminium, matt", image: "/images/doors/despiro/dp-10.png" },
  { id: "despiro-dp-11", code: "DP 11", collection: "Despiro", handle: "DP 60.1800, stainless steel", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted glass with clear stripes", back: "thermofloat, black edge" }, frameFinish: "Alu-Inox elements, surface-mounted", surface: "RAL 9007 grey aluminium, matt", image: "/images/doors/despiro/dp-11.png" },
  { id: "despiro-dp-12", code: "DP 12", collection: "Despiro", handle: "DP 50.1200, stainless steel", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted glass, clear border", back: "thermofloat, black edge" }, surface: "RAL 3004 purple red, matt / RAL 9007", image: "/images/doors/despiro/dp-12.png" },
  { id: "despiro-dp-13", code: "DP 13", collection: "Despiro", handle: "DP 200.1600, stainless steel", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted glass", back: "thermofloat, black edge" }, frameFinish: "Alu-Inox elements, surface-mounted", surface: "RAL 7016 anthracite grey, matt", image: "/images/doors/despiro/dp-13.png" },
  { id: "despiro-dp-14", code: "DP 14", collection: "Despiro", handle: "DP 60.1600, stainless steel", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted glass, clear stripes + black surround", back: "thermofloat, black edge" }, frameFinish: "Milled reliefs, in/out", surface: "RAL 9016 traffic white, gloss", image: "/images/doors/despiro/dp-14.png" },
  { id: "despiro-dp-15", code: "DP 15", collection: "Despiro", handle: "DP 60.1200, stainless steel", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted glass", back: "thermofloat, black edge" }, frameFinish: "Alu-Inox elements, in/out", surface: "RAL 7016 anthracite grey, matt", image: "/images/doors/despiro/dp-15.png" },
  { id: "despiro-dp-16", code: "DP 16", collection: "Despiro", handle: "DP 60.1600, stainless steel", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float with clear stripes", back: "thermofloat, black edge" }, frameFinish: "Milled reliefs, in/out", surface: "RAL 7016 anthracite grey, matt", image: "/images/doors/despiro/dp-16.png" },
  { id: "despiro-dp-17", code: "DP 17", collection: "Despiro", handle: "DP 50.1200, stainless steel", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted glass with clear stripes", back: "thermofloat, black edge" }, frameFinish: "Milled reliefs, in/out", surface: "RAL 9016 traffic white, gloss", image: "/images/doors/despiro/dp-17.png" },
  { id: "despiro-dp-18", code: "DP 18", collection: "Despiro", handle: "DP 60.800, stainless steel", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted glass with clear stripes", back: "thermofloat, black edge" }, frameFinish: "Milled reliefs + recessed Alu-Inox, no offset", surface: "RAL 7001 silver grey, matt", image: "/images/doors/despiro/dp-18.png" },
  { id: "despiro-dp-19", code: "DP 19", collection: "Despiro", handle: "DP 60.800, stainless steel", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted glass with clear stripes", back: "thermofloat, black edge" }, surface: "RAL 9016 traffic white, gloss", image: "/images/doors/despiro/dp-19.png" },
  { id: "despiro-dp-20", code: "DP 20", collection: "Despiro", handle: "DP 60.1800, stainless steel", glazing: { middle: "sandblasted glass with clear decorated surround", back: "thermofloat, black warm edge" }, frameFinish: "Rectangular scratch-guard Alu-Inox, no offset + 20x60 mm aluminium trim", surface: "RAL 7016 anthracite grey, matt", image: "/images/doors/despiro/dp-20.png" },
  { id: "despiro-dp-21", code: "DP 21", collection: "Despiro", handle: "DP 60.1800, stainless steel", frameFinish: "Alu-Inox elements, surface-mounted", surface: "RAL 7016, matt", image: "/images/doors/despiro/dp-21.png" },
  { id: "despiro-dp-22", code: "DP 22", collection: "Despiro", handle: "DP 60.1800, stainless steel", frameFinish: "Alu-Inox elements, surface-mounted", surface: "RAL 7016, matt", image: "/images/doors/despiro/dp-22.png" },
  { id: "despiro-dp-23", code: "DP 23", collection: "Despiro", handle: "DP 60.1800, stainless steel", frameFinish: "Alu-Inox elements, surface-mounted", surface: "RAL 9016, matt", image: "/images/doors/despiro/dp-23.png" },
  { id: "despiro-dp-24", code: "DP 24", collection: "Despiro", handle: "DP 60.1400", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float with clear stripes", back: "thermofloat, black edge" }, frameFinish: "Milled reliefs, in/out", surface: "RAL 3004 / RAL 9005", image: "/images/doors/despiro/dp-24.png" },
  { id: "despiro-dp-25", code: "DP 25", collection: "Despiro", handle: "DP 60.1400", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float with clear stripes", back: "thermofloat, black edge" }, frameFinish: "Alu-Inox frame", surface: "RAL 5005", image: "/images/doors/despiro/dp-25.png" },
  { id: "despiro-dp-26", code: "DP 26", collection: "Despiro", handle: "DP 40.1200", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float with clear stripes", back: "thermofloat, black edge" }, frameFinish: "Milled reliefs, in/out", surface: "RAL 7040", image: "/images/doors/despiro/dp-26.png" },
  { id: "despiro-dp-27", code: "DP 27", collection: "Despiro", handle: "DP 30.1200", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float", back: "thermofloat, black edge" }, frameFinish: "Milled reliefs, in/out", surface: "RAL 9005", image: "/images/doors/despiro/dp-27.png" },
  { id: "despiro-dp-28", code: "DP 28", collection: "Despiro", handle: "DP 60.1400", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float with clear stripes", back: "thermofloat, black edge" }, frameFinish: "Milled reliefs, in/out", surface: "RAL 1023 / RAL 9005", image: "/images/doors/despiro/dp-28.png" },
  { id: "despiro-dp-29", code: "DP 29", collection: "Despiro", handle: "DP 70.1400", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float", back: "thermofloat, black edge" }, frameFinish: "Alu-Inox frame", surface: "RAL 9005", image: "/images/doors/despiro/dp-29.png" },
  { id: "despiro-dp-30", code: "DP 30", collection: "Despiro", handle: "DP 70.1200", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float", back: "thermofloat, black edge" }, frameFinish: "Alu-Inox frame", surface: "RAL 7040", image: "/images/doors/despiro/dp-30.png" },
  { id: "despiro-dp-31", code: "DP 31", collection: "Despiro", handle: "DP 60.1600", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float", back: "thermofloat, black edge" }, frameFinish: "Alu-Inox frame", surface: "RAL 6012", image: "/images/doors/despiro/dp-31.png" },
  { id: "despiro-dp-32", code: "DP 32", collection: "Despiro", handle: "DP 60.1800", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float", back: "thermofloat, black edge" }, frameFinish: "Alu-Inox frame", surface: "RAL 9001", image: "/images/doors/despiro/dp-32.png" },
  { id: "despiro-dp-33", code: "DP 33", collection: "Despiro", handle: "DP 60.1400", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float", back: "thermofloat, black edge" }, frameFinish: "Alu-Inox frame", surface: "RAL 3004", image: "/images/doors/despiro/dp-33.png" },
  { id: "despiro-dp-34", code: "DP 34", collection: "Despiro", handle: "DP 60.1600", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float", back: "thermofloat, black edge" }, frameFinish: "Smooth panel", surface: "RAL 9001", image: "/images/doors/despiro/dp-34.png" },
  { id: "despiro-dp-35", code: "DP 35", collection: "Despiro", handle: "DP 60.1600", frameFinish: "Milled reliefs, in/out", surface: "RAL 3004", image: "/images/doors/despiro/dp-35.png" },
  { id: "despiro-dp-36", code: "DP 36", collection: "Despiro", handle: "DP 30.1400", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float", back: "thermofloat, black edge" }, surface: "RAL 7040", image: "/images/doors/despiro/dp-36.png" },
  { id: "despiro-dp-37", code: "DP 37", collection: "Despiro", handle: "DP 60.1200", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float", back: "thermofloat, black edge" }, frameFinish: "Alu-Inox frame", surface: "RAL 7016", image: "/images/doors/despiro/dp-37.png" },
  { id: "despiro-dp-38", code: "DP 38", collection: "Despiro", handle: "DP 60.1400", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float", back: "thermofloat, black edge" }, frameFinish: "Alu-Inox frame", surface: "RAL 1019", image: "/images/doors/despiro/dp-38.png" },
];

// AluLine is only teased in this catalog (24/36/48 mm aluminium-faced XPS-core
// panels, "several dozen" patterns) - it points to a separate, dedicated
// entrance-door catalog we don't have yet. No individual designs to list.
export const aluLineInfo = {
  collection: "AluLine" as const,
  panelThicknessOptions_mm: [24, 36, 48],
  construction: "Aluminium sheet outer skin, XPS foam core",
  note: "Dozens of panel patterns available; custom designs on request. Full model range is in Eko-Okna's separate entrance-door catalog (not yet provided).",
};

export const standardDoorColours = [
  { name: "Traffic white", code: "RAL 9016", finish: "gloss" },
  { name: "White aluminium", code: "RAL 9006", finish: "matt" },
  { name: "Silver grey", code: "RAL 7001", finish: "matt" },
  { name: "Grey aluminium", code: "RAL 9007", finish: "matt" },
  { name: "Purple red", code: "RAL 3004", finish: "matt" },
  { name: "Anthracite", code: "RAL 7016", finish: "matt" },
  { name: "Metallic microstructure", code: "DB 703", finish: "metallic" },
  { name: "Grey-brown", code: "RAL 8019", finish: "matt" },
];

export const woodLikeDoorFinishes = [
  { name: "Golden oak", code: "ADEC D101" },
  { name: "Walnut", code: "ADEC O102" },
  { name: "Mahogany", code: "ADEC M103" },
  { name: "Mahogany Sapeli", code: "ADEC M204" },
  { name: "Walnut vein", code: "ADEC O205" },
  { name: "Pine", code: "ADEC S106" },
  { name: "Fir", code: "ADEC J107" },
  { name: "Sweet cherry", code: "ADEC C110" },
  { name: "Cherry", code: "ADEC W109" },
  { name: "Wenge", code: "ADEC W205" },
  { name: "Winchester", code: "ADEC D207" },
];

/** Decorative glass patterns available for the light cut-outs / side lights */
export const glassOrnamentPatterns = [
  "Satinata",
  "Master-Ligne",
  "Chinchilla",
  "Master-Carre",
  "Master-Point",
];
