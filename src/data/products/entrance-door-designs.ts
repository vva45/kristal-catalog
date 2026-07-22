// data/products/entrance-door-designs.ts
//
// Decorative front-door PANEL designs (glazing pattern, milling, frame
// finish) for the Despiro / Despiro Retro Line collections, plus the two
// aluminium door SYSTEMS they are built on (MasterLine 8 Despiro and its
// Pivot variant). These are Eko-Okna products, same manufacturer as the
// Forster/Furmaniak steel systems already in steel-systems.ts.
//
// Source: Eingangsturen-Despiro_DE.pdf (dedicated Despiro catalog, Eko-Okna
// S.A., 04.06.2025) — this SUPERSEDES the earlier despiroDesigns data that
// was summarized from Katalog_Aluminium_DE.pdf p.54-63. That version had
// only 38 panels with invented per-panel handle/RAL specifics; this
// dedicated catalog has 39 panels (DP01-DP39) with real construction/size
// data, plus a "Retro Line" (RL01-RL09) collection not previously modeled.
//
// NOTE: this catalog does not assign a specific handle model or colour to
// each panel design — those are chosen independently per standardDoorColours
// / handle series (see bottom of file). Per-panel handle/colour fields from
// the old file were dropped as unsupported by this source.

export interface EntranceDoorDesign {
  /** kebab-case id, e.g. "despiro-dp-01" */
  id: string;
  /** Catalog code as printed, e.g. "DP01" */
  code: string;
  collection: "Despiro" | "Despiro Retro Line";
  glazing?: {
    front?: string;
    middle?: string;
    back?: string;
  };
  /** Milling / relief / flush-inlay treatment of the panel, if any */
  construction?: string;
  /** Min/max panel size in mm, width x height, aluminium version */
  sizeRange: { min: string; max: string };
  /** Reference image path convention - images still need exporting from the PDF */
  image: string;
}

export const despiroDesigns: EntranceDoorDesign[] = [
  { id: "despiro-dp-01", code: "DP01", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float, clear stripes", back: "thermofloat, black warm edge" }, construction: "Flush-mounted INOX or black trim", sizeRange: { min: "500 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-01.png" },
  { id: "despiro-dp-02", code: "DP02", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float, clear stripes", back: "thermofloat, black warm edge" }, construction: "Flush-mounted INOX or black trim", sizeRange: { min: "731 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-02.png" },
  { id: "despiro-dp-03", code: "DP03", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float", back: "thermofloat, black warm edge" }, construction: "Flush-mounted INOX or black trim", sizeRange: { min: "500 x 2000", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-03.png" },
  { id: "despiro-dp-04", code: "DP04", collection: "Despiro", construction: "Flush-mounted INOX or black trim (no glazing, horizontal lines)", sizeRange: { min: "361 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-04.png" },
  { id: "despiro-dp-05", code: "DP05", collection: "Despiro", construction: "Milled panel (no glazing)", sizeRange: { min: "361 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-05.png" },
  { id: "despiro-dp-06", code: "DP06", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float, clear stripes", back: "thermofloat, black warm edge" }, construction: "Milled panel", sizeRange: { min: "720 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-06.png" },
  { id: "despiro-dp-07", code: "DP07", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted, clear border", back: "thermofloat, black warm edge" }, construction: "Milled panel", sizeRange: { min: "750 x 2000", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-07.png" },
  { id: "despiro-dp-08", code: "DP08", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted, clear border", back: "thermofloat, black warm edge" }, sizeRange: { min: "500 x 2000", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-08.png" },
  { id: "despiro-dp-09", code: "DP09", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted, clear border", back: "thermofloat, black warm edge" }, construction: "Flush-mounted INOX trim", sizeRange: { min: "750 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-09.png" },
  { id: "despiro-dp-10", code: "DP10", collection: "Despiro", construction: "Smooth panel, no pattern, flush both sides", sizeRange: { min: "361 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-10.png" },
  { id: "despiro-dp-11", code: "DP11", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float, clear stripes", back: "thermofloat, black warm edge" }, construction: "Flush-mounted INOX or black trim", sizeRange: { min: "500 x 2000", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-11.png" },
  { id: "despiro-dp-12", code: "DP12", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float, clear stripes", back: "thermofloat, black warm edge" }, sizeRange: { min: "750 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-12.png" },
  { id: "despiro-dp-13", code: "DP13", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted", back: "thermofloat, black warm edge" }, construction: "Flush-mounted INOX or black trim", sizeRange: { min: "720 x 2000", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-13.png" },
  { id: "despiro-dp-14", code: "DP14", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted, clear border", back: "thermofloat, black warm edge" }, construction: "Milled panel", sizeRange: { min: "500 x 2000", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-14.png" },
  { id: "despiro-dp-15", code: "DP15", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted", back: "thermofloat, black warm edge" }, construction: "Milled panel", sizeRange: { min: "700 x 2000", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-15.png" },
  { id: "despiro-dp-16", code: "DP16", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float, clear stripes", back: "thermofloat, black warm edge" }, construction: "Flush-mounted INOX or black trim", sizeRange: { min: "500 x 2000", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-16.png" },
  { id: "despiro-dp-17", code: "DP17", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float, clear stripes", back: "thermofloat, black warm edge" }, construction: "Milled panel", sizeRange: { min: "750 x 2000", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-17.png" },
  { id: "despiro-dp-18", code: "DP18", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float, clear stripes", back: "thermofloat, black warm edge" }, construction: "Milled panel, flush-mounted INOX/black trim", sizeRange: { min: "750 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-18.png" },
  { id: "despiro-dp-19", code: "DP19", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float, clear stripes", back: "thermofloat, black warm edge" }, sizeRange: { min: "500 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-19.png" },
  { id: "despiro-dp-20", code: "DP20", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted, clear border", back: "thermofloat, black warm edge" }, sizeRange: { min: "1000 x 1950", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-20.png" },
  { id: "despiro-dp-21", code: "DP21", collection: "Despiro", construction: "Flush-mounted INOX or black trim (no glazing)", sizeRange: { min: "720 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-21.png" },
  { id: "despiro-dp-22", code: "DP22", collection: "Despiro", construction: "Flush-mounted INOX or black trim (no glazing)", sizeRange: { min: "650 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-22.png" },
  { id: "despiro-dp-23", code: "DP23", collection: "Despiro", construction: "Flush-mounted INOX or black trim (no glazing)", sizeRange: { min: "801 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-23.png" },
  { id: "despiro-dp-24", code: "DP24", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float, clear stripes", back: "thermofloat, black warm edge" }, construction: "Milled panel", sizeRange: { min: "700 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-24.png" },
  { id: "despiro-dp-25", code: "DP25", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float, clear stripes", back: "thermofloat, black warm edge" }, construction: "Milled panel", sizeRange: { min: "650 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-25.png" },
  { id: "despiro-dp-26", code: "DP26", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted float, clear stripes", back: "thermofloat, black warm edge" }, construction: "Flush-mounted INOX or black trim", sizeRange: { min: "650 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-26.png" },
  { id: "despiro-dp-27", code: "DP27", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted", back: "thermofloat, black warm edge" }, construction: "Milled frame around glazing", sizeRange: { min: "600 x 2000", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-27.png" },
  { id: "despiro-dp-28", code: "DP28", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted, clear stripes", back: "thermofloat, black warm edge" }, construction: "Milled panel", sizeRange: { min: "550 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-28.png" },
  { id: "despiro-dp-29", code: "DP29", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted", back: "thermofloat, black warm edge" }, construction: "Flush-mounted INOX trim", sizeRange: { min: "550 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-29.png" },
  { id: "despiro-dp-30", code: "DP30", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted", back: "thermofloat, black warm edge" }, construction: "Flush-mounted INOX trim", sizeRange: { min: "550 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-30.png" },
  { id: "despiro-dp-31", code: "DP31", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted", back: "thermofloat, black warm edge" }, construction: "Flush-mounted INOX trim", sizeRange: { min: "801 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-31.png" },
  { id: "despiro-dp-32", code: "DP32", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted", back: "thermofloat, black warm edge" }, construction: "Flush-mounted INOX trim", sizeRange: { min: "550 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-32.png" },
  { id: "despiro-dp-33", code: "DP33", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted", back: "thermofloat, black warm edge" }, sizeRange: { min: "550 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-33.png" },
  { id: "despiro-dp-34", code: "DP34", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted", back: "thermofloat, black warm edge" }, construction: "Flush-mounted INOX trim", sizeRange: { min: "750 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-34.png" },
  { id: "despiro-dp-35", code: "DP35", collection: "Despiro", construction: "Milled panel (no glazing, angular lines)", sizeRange: { min: "550 x 2000", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-35.png" },
  { id: "despiro-dp-36", code: "DP36", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted", back: "thermofloat, black warm edge" }, construction: "Milled panel", sizeRange: { min: "600 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-36.png" },
  { id: "despiro-dp-37", code: "DP37", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted", back: "thermofloat, black warm edge" }, construction: "Flush-mounted INOX trim", sizeRange: { min: "600 x 1900", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-37.png" },
  { id: "despiro-dp-38", code: "DP38", collection: "Despiro", glazing: { front: "VSG 33.1 thermofloat", middle: "sandblasted", back: "thermofloat, black warm edge" }, construction: "Flush-mounted INOX trim", sizeRange: { min: "650 x 2000", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-38.png" },
  { id: "despiro-dp-39", code: "DP39", collection: "Despiro", construction: "Milled panel (vertical ribbed pattern, no glazing)", sizeRange: { min: "700 x 2000", max: "1400 x 2600" }, image: "/images/doors/despiro/dp-39.png" },
];

// Despiro Retro Line: classic/traditional panel mouldings, also available in
// the double-opening PIVOT version (offset hinge axis). Panel proportions
// scale with the overall door size.
export const retroLineDesigns: EntranceDoorDesign[] = [
  { id: "retro-rl-01", code: "RL01", collection: "Despiro Retro Line", glazing: { front: "VSG 33.1 thermofloat", middle: "float", back: "thermofloat, warm edge" }, construction: "Embossed panel moulding", sizeRange: { min: "620 x 1900", max: "1400 x 2600" }, image: "/images/doors/retro-line/rl-01.png" },
  { id: "retro-rl-02", code: "RL02", collection: "Despiro Retro Line", construction: "Embossed panel moulding (no glazing)", sizeRange: { min: "620 x 1900", max: "1400 x 2600" }, image: "/images/doors/retro-line/rl-02.png" },
  { id: "retro-rl-03", code: "RL03", collection: "Despiro Retro Line", construction: "Embossed panel moulding, 3-panel layout (no glazing)", sizeRange: { min: "620 x 1900", max: "1400 x 2600" }, image: "/images/doors/retro-line/rl-03.png" },
  { id: "retro-rl-04", code: "RL04", collection: "Despiro Retro Line", glazing: { front: "VSG 33.1 thermofloat", middle: "float Satinovo", back: "thermofloat, warm edge" }, construction: "Embossed panel moulding, twin side lights", sizeRange: { min: "850 x 1900", max: "1400 x 2600" }, image: "/images/doors/retro-line/rl-04.png" },
  { id: "retro-rl-05", code: "RL05", collection: "Despiro Retro Line", glazing: { front: "VSG 33.1 thermofloat", middle: "float Satinovo", back: "thermofloat, warm edge" }, construction: "Embossed panel moulding, muntin-bar light", sizeRange: { min: "750 x 1825", max: "1400 x 2600" }, image: "/images/doors/retro-line/rl-05.png" },
  { id: "retro-rl-06", code: "RL06", collection: "Despiro Retro Line", glazing: { front: "VSG 33.1 thermofloat", middle: "Chinchilla", back: "thermofloat, warm edge" }, construction: "Embossed panel moulding", sizeRange: { min: "810 x 1900", max: "1400 x 2600" }, image: "/images/doors/retro-line/rl-06.png" },
  { id: "retro-rl-07", code: "RL07", collection: "Despiro Retro Line", construction: "Embossed panel moulding, 2-panel layout (no glazing)", sizeRange: { min: "810 x 1900", max: "1400 x 2600" }, image: "/images/doors/retro-line/rl-07.png" },
  { id: "retro-rl-08", code: "RL08", collection: "Despiro Retro Line", construction: "Embossed panel moulding, 3-panel layout (no glazing)", sizeRange: { min: "782 x 1900", max: "1400 x 2600" }, image: "/images/doors/retro-line/rl-08.png" },
  { id: "retro-rl-09", code: "RL09", collection: "Despiro Retro Line", construction: "Embossed panel moulding, single panel (no glazing)", sizeRange: { min: "782 x 1900", max: "1400 x 2600" }, image: "/images/doors/retro-line/rl-09.png" },
];

/**
 * MasterLine 8 Despiro: the aluminium door SYSTEM (frame/sash/hardware)
 * that all despiroDesigns panels above are built into. Accepts any Despiro
 * panel design, up to the larger MasterLine 8 dimensions.
 */
export const masterLine8Despiro = {
  system: "MasterLine 8 Despiro",
  material: "Aluminium (ALU)",
  maxWidth_mm: 1500,
  maxHeight_mm: 3000,
  lockingPoints: "Multi-point locking",
  handleRecess: "Optional recessed handle (Inox or black), illuminable — selected Despiro panel models only",
  note: "Accepts all Despiro panel designs (see despiroDesigns); dimensions compatible with the panel size ranges above, capped at 1500x3000mm.",
  availableColours: "RAL, Decor (some models)",
};

/**
 * MasterLine 8 Pivot: offset-hinge (pivot-axis) version of the aluminium
 * door system, opening both inward and outward. Compatible with a curated
 * subset of Despiro panels only.
 */
export const masterLine8Pivot = {
  system: "MasterLine 8 Pivot",
  material: "Aluminium (ALU)",
  pivotOffset_mm: { standard: 301, max: 600 },
  pivotOffsetNote: "Offset depends on leaf width",
  lockingPoints: "Multi-point locking",
  coldResistant: true,
  thresholdProfile: "Frame threshold profile for in-floor recessing",
  handleRecess: "Optional recessed handle (Inox or black)",
  compatiblePanelCodes: ["DP04", "DP05", "DP10", "DP11", "DP16", "DP22", "DP23", "DP25", "DP35"],
  compatiblePanelNote: "Ask sales for other panel designs beyond this list",
  availableColours: "RAL, Decor (some models)",
};

// AluLine is only teased in the aluminium catalog (24/36/48 mm
// aluminium-faced XPS-core panels, "several dozen" patterns) - it points to
// a separate, dedicated entrance-door catalog. No individual designs to list.
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
  "Satinovo",
];

/**
 * Handle series available across Despiro / Despiro Retro Line doors.
 * Source: Eingangsturen-Despiro_DE.pdf p.40-41.
 */
export const handleSeries = [
  { code: "P1", type: "Round bar pull handle" },
  { code: "P5", type: "Round bar pull handle" },
  { code: "P8", type: "Round bar pull handle, offset grips" },
  { code: "P10", type: "Round bar pull handle" },
  { code: "P45", type: "Round bar pull handle" },
  { code: "P45B", type: "Curved round bar pull handle" },
  { code: "DP30", type: "Round bar pull handle" },
  { code: "DP40", type: "Slim round bar pull handle" },
  { code: "DP50", type: "Curved pull handle" },
  { code: "DP60", type: "Square-profile pull handle" },
  { code: "DP70", type: "Square-profile pull handle, angled grips" },
  { code: "DP80", type: "Square-profile pull handle, flush grips" },
  {
    code: "Q series",
    type: "Square tube pull handle, electronics-ready",
    electronicsOptions: ["Fingerprint reader", "Keypad", "Bell/intercom button", "LED", "Motion sensor"],
  },
];

/**
 * KA1A recessed handle shell (Griffmuschel) — available for Despiro and
 * MasterLine 8 Despiro doors specifically.
 */
export const recessedHandleKA1A = {
  code: "KA1A",
  finishes: ["RAL colours", "Black", "Inox"],
  ledOptions: ["Warm white", "Neutral white", "Cold white", "Blue"],
  compatibleWith: ["Despiro", "MasterLine 8 Despiro"],
};

export const doorHardwareAccessories = {
  peephole: {
    diameter_mm: 14,
    finish: "Chrome, satin",
    forPanelThickness_mm: { min: 15, max: 85 },
  },
  mailSlotModels: ["MILA ProStyle", "MILA", "GAVA"],
  hinges: ["Roller hinges (SFS Wala WR)", "Concealed hinges (KFV AXXENT)"],
  locking: [
    "3-point locking",
    "5-point locking",
    "Roller locking",
    "Hook locking",
    "Automatic locking (motorised, GU Security)",
  ],
  doorClosers: ["GEZE (with or without GU lock protection)", "Geze Boxer", "Dorma 93b", "Geze 5000"],
  leverHandles: ["H6 (black, gold)", "35A/1200"],
  accessControl: ["Idecom (K1 250x150 or Q10 40x40 mount)", "Sorex keypad", "Microswitch (FI30 cover mount)"],
};
