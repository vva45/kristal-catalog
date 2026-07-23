// data/products/garage-door-systems.ts
//
// Eko-Okna's own sectional garage door line (INFINITI), plus roller doors
// and roller grilles - a completely separate product family from the
// Forster/Furmaniak steel swing (Schwenktor) garage doors already in
// steel-systems.ts (ids "unico-garage" / "presto-garage", confirmed still
// accurate against this catalog's own "Garagenschwingtore" section, p.60-63
// - same Presto/Unico steel construction, no new data needed there).
//
// Source: Garagentor_DE eko.pdf (80-page dedicated garage door catalogue,
// Eko-Okna S.A., dated 29.01.2025)

export interface InfinitiSystem {
  id: string;
  name: string;
  springType: string;
  description: string;
  maxDoorArea_m2: number;
  maxOpening: { width_mm: number; height_mm: number };
  minRevealWidth_mm: number;
  minHeadroom_mm: number;
  maxLintelHeight_mm: number;
  maxWeight_kg?: number;
  panelThickness_mm: 40 | 60;
}

/**
 * The 4 sectional door drive/spring systems, plus INFINITI ZERO (a
 * retrofit/renovation mounting kit for X/R, not a separate spring system)
 * and the INFINITI THERMO variants (60mm panel for passive-house grade
 * insulation, available as Thermo-F and Thermo-R).
 */
export const infinitiSystems: InfinitiSystem[] = [
  {
    id: "infiniti-x",
    name: "INFINITI X",
    springType: "Extension spring (\"spring-in-spring\" mechanism)",
    description: "Recommended for small garages - quick to install, no extra spring winding needed. Two springs add a safety margin against spring breakage.",
    maxDoorArea_m2: 9,
    maxOpening: { width_mm: 4500, height_mm: 3000 },
    minRevealWidth_mm: 85,
    minHeadroom_mm: 105,
    maxLintelHeight_mm: 430,
    maxWeight_kg: 130,
    panelThickness_mm: 40,
  },
  {
    id: "infiniti-f",
    name: "INFINITI F",
    springType: "Torsion spring, front-mounted",
    description: "For larger doors - torsion springs carry significantly more weight than extension springs. Needs at least 200mm headroom.",
    maxDoorArea_m2: 18,
    maxOpening: { width_mm: 6000, height_mm: 3500 },
    minRevealWidth_mm: 85,
    minHeadroom_mm: 200,
    maxLintelHeight_mm: 430,
    maxWeight_kg: 295,
    panelThickness_mm: 40,
  },
  {
    id: "infiniti-r",
    name: "INFINITI R",
    springType: "Torsion spring, rear-mounted",
    description: "Rear-mounted torsion springs allow installation with a lower lintel - as little as 90mm (120mm with electric drive).",
    maxDoorArea_m2: 12.5,
    maxOpening: { width_mm: 5500, height_mm: 3000 },
    minRevealWidth_mm: 85,
    minHeadroom_mm: 105,
    maxLintelHeight_mm: 430,
    maxWeight_kg: 165,
    panelThickness_mm: 40,
  },
  {
    id: "infiniti-thermo-f",
    name: "INFINITI Thermo F",
    springType: "Torsion spring, front-mounted",
    description: "60mm panel for passive-house-grade insulation, front torsion springs for doors up to 18m².",
    maxDoorArea_m2: 18,
    maxOpening: { width_mm: 6000, height_mm: 3000 },
    minRevealWidth_mm: 100,
    minHeadroom_mm: 200,
    maxLintelHeight_mm: 430,
    maxWeight_kg: 295,
    panelThickness_mm: 60,
  },
  {
    id: "infiniti-thermo-r",
    name: "INFINITI Thermo R",
    springType: "Torsion spring, rear-mounted",
    description: "60mm panel for passive-house-grade insulation with only 150mm headroom needed, up to 12.5m².",
    maxDoorArea_m2: 12.5,
    maxOpening: { width_mm: 5500, height_mm: 3000 },
    minRevealWidth_mm: 100,
    minHeadroom_mm: 150,
    maxLintelHeight_mm: 430,
    maxWeight_kg: 165,
    panelThickness_mm: 60,
  },
];

export const infinitiZero = {
  name: "INFINITI ZERO",
  type: "Renovation/retrofit mounting kit for INFINITI X or R",
  useCase: "Limited side room or lintel space (e.g. tunnel garages, renovation projects) - track set mounts directly to wall or ceiling",
  coverProfileOptions_mm: [120, 85],
  maxGarageWidth_mm: 5500,
  maxCeilingHeight_mm: 3000,
  standardColours: ["RAL 9016", "RAL 7016", "any RAL colour"],
};

/** U-values are given as large width x height tables in the catalogue;
 * these are the representative range, not every cell. */
export const uValueSummary = {
  standard40mm: { range_W_m2K: [0.75, 1.20], note: "40mm panel with thermal seal, varies by door size and panel count (4-7 panels)" },
  thermo60mm: { range_W_m2K: [0.70, 0.97], note: "60mm INFINITI Thermo panel, varies by door size" },
};

export const designOptions = {
  serviceDoor: { maxWidth_mm: 4500, thresholds: ["Low threshold", "High threshold"], note: "Wider doors available on request via the technical department" },
  glazingStyles: [
    { name: "Torino", frame: "INOX frame, glass pane" },
    { name: "Firenze", frame: "INOX frame, glass pane" },
    { name: "Verona", frame: "PVC frame, acrylic glass" },
  ],
  lintelCover: "Blende cover profile creates a lintel where none exists and evens out uneven openings, painted to match the door",
  aluminiumSection: { maxWidth_mm: 6000 },
  panoramaGlazing: { maxWidth_mm: 3000, note: "Without posts/mullions" },
  ventilationSection: "Expanded-metal filled section available",
};

export const panelFinishes = {
  exteriorTextures: ["Woodgrain", "Deep Mat", "Smooth (glatt)"],
  interiorTexture: "Smooth, standard colour similar to RAL 9010 (STUCCO low-embossing texture standard)",
  embossingOptions: [
    { code: "L", name: "Low embossing" },
    { code: "V", name: "High embossing" },
    { code: "F", name: "No embossing" },
  ],
};

export const colourPalette = {
  availableIn: ["Any RAL colour", "Decor foils (Aluplast, Salamander profile colours)"],
  namedOptions: [
    "AP 61 Sandgrau", "AP 95 Winchester", "AP 27 Nussbaum", "AP 19 Turner Oak Malt",
    "RAL 7016 Anthracite - smooth", "RAL 7016 Anthracite - Deep Mat", "RAL 7016 Anthracite - Woodgrain",
    "RAL 9005 Black - smooth", "RAL 7039 Sandgrau - textured", "RAL 7039 Sandgrau - Deep Mat",
    "RAL 9016 White - Woodgrain", "AP 44 White - structured",
  ],
  deepMatRalOptions: ["7016", "7039", "9005"],
};

/** All in One Design: a coordinated design language shared across
 * windows, doors, garage doors and shutters - 8 named looks. */
export const allInOneDesigns = [
  "Foggia", "Torino", "Firenze", "Livorno", "Messina", "Modena", "Trieste", "Verona",
];

export interface GarageDoorMotor {
  name: string;
  brand: string;
  thrust_N: number;
  maxDoorArea_m2?: number;
  maxDoorWeight_kg?: number;
  maxDoorWidth_m?: number;
  maxDoorHeight_m?: number;
  frequency?: string;
  features: string[];
}

export const sectionalDoorMotors: GarageDoorMotor[] = [
  { name: "Smart Io 800 N", brand: "Somfy", thrust_N: 800, maxDoorArea_m2: 12, frequency: "868-870 MHz (io)", features: ["Amperometric force sensing", "Programmable soft start/stop", "LED lighting", "Position feedback"] },
  { name: "Smart Io 1000 N", brand: "Somfy", thrust_N: 1000, maxDoorArea_m2: 15, frequency: "868-870 MHz (io)", features: ["Amperometric force sensing", "Programmable soft start/stop", "LED lighting", "Position feedback"] },
  { name: "Dexxo Compact 750 io", brand: "Somfy", thrust_N: 750, maxDoorArea_m2: 12, frequency: "868-870 MHz (io)", features: ["Ready in under 90s", "Set & Go / Serve-e-Go programming", "TaHoma compatible", "Position feedback"] },
  { name: "Home HG 600 N", brand: "Came", thrust_N: 600, maxDoorArea_m2: 10, frequency: "433.92 MHz (Space)", features: ["Soft start/stop", "Adjustable motor power", "Anti-crush encoder"] },
  { name: "Home HG 1000 N", brand: "Came", thrust_N: 1000, maxDoorArea_m2: 14, frequency: "433.92 MHz (Space)", features: ["Soft start/stop", "Adjustable motor power", "Anti-crush encoder"] },
  { name: "JIM 3 600 N", brand: "Beninca", thrust_N: 600, maxDoorArea_m2: 11, frequency: "433.92 MHz (TO.GO)", features: ["Amperometric force sensing", "Programmable soft start/stop", "LED lighting", "Position feedback"] },
  { name: "JIM 3 Turbo 600 N", brand: "Beninca", thrust_N: 600, maxDoorArea_m2: 11, frequency: "433.92 MHz (TO.GO)", features: ["Quiet operation", "Max height 3.5m", "Backup power connection", "Cycle count monitoring"] },
  { name: "JIM 4 1200 N", brand: "Beninca", thrust_N: 1200, maxDoorArea_m2: 18, frequency: "433.92 MHz (TO.GO)", features: ["Amperometric force sensing", "Programmable soft start/stop", "LED lighting"] },
  { name: "JACK24.50", brand: "Beninca", thrust_N: 600, maxDoorArea_m2: 20, features: ["Factory pre-programmed", "Amperometric obstacle detection", "Backup battery connection", "KNX/X.BE compatible", "Quick-release system", "50Nm torque"] },
  { name: "S 9060 base+", brand: "Sommer", thrust_N: 600, maxDoorWeight_kg: 120, maxDoorWidth_m: 4.5, maxDoorHeight_m: 2.5, frequency: "868.95 MHz", features: ["Max speed 24cm/s", "SOMweb smart-home compatible"] },
  { name: "S 9080 base+", brand: "Sommer", thrust_N: 800, maxDoorWeight_kg: 160, maxDoorWidth_m: 6.0, maxDoorHeight_m: 2.5, frequency: "868.95 MHz", features: ["Max speed 21cm/s", "SOMweb smart-home compatible"] },
  { name: "S 9110 base+", brand: "Sommer", thrust_N: 1100, maxDoorWeight_kg: 200, maxDoorWidth_m: 7.1, maxDoorHeight_m: 2.5, frequency: "868.95 MHz", features: ["Max speed 18cm/s", "SOMweb smart-home compatible"] },
];

export const smartHomeControl = {
  controller: "TaHoma Switch",
  controlMethods: ["Phone app", "Voice assistant", "Wall-mounted switch"],
  coverage: "Can also control window coverings and lighting as part of a wider home ecosystem",
};

export const sectionalDoorAccessoriesByBrand = {
  Somfy: ["Wall-mounted code keypad (RTS/io)", "Smoove io wall switch (battery-powered)", "Universal RTS receiver (TaHoma compatible)", "Signal light (open/close indicator)", "Backup battery (5-10 cycles/24h)", "RTS wall sender (up to 30m range, 3 devices)", "TaHoma controller", "Master Pro Bitech photocells", "pro.UP programmer module"],
  Beninca: ["Wall housing + TO.GO remote", "WiFi module (2 channels, SUPLA app)", "Car remote holder", "IRI.LAMP two-colour LED signal light", "DA.BT-SW backup battery", "BE.CODE wireless keypad (up to 100m range)"],
};

export const equipmentPackages = {
  quiet: { name: "INFINITI Quiet", items: ["Belt-driven track", "Quiet-running rollers", "RAL 9016 painted hardware"] },
  safe: { name: "INFINITI Safe", items: ["Emergency-release battery", "Photocell", "Mechanical carriage lock", "Thermal seal"] },
  premium: { name: "INFINITI Premium", items: ["Belt-driven track", "Quiet-running rollers", "RAL 9016 painted hardware", "Mechanical carriage lock", "Photocell", "Plastic foot", "Thermal seal", "Emergency-release battery", "Levelling profile"], note: "Combines Quiet + Safe plus extra elements" },
};

export const warranty = {
  years: 5,
  scope: "Manufacturing defects on all Eko-Okna-made INFINITI sectional garage doors, including latent defects discovered during use",
};

// ---------------------------------------------------------------------
// Roller doors (Rolltore) and roller grilles (Rollgitter/Rollroste)
// ---------------------------------------------------------------------

export interface RollerSystem {
  id: string;
  name: string;
  type: "door" | "grille";
  useCase: string;
  boxSizes_mm: number[];
  guides: string;
  maxWidth_mm: number;
  maxHeight_mm: number;
  maxArea_m2: number;
  colourOptions: string[];
  drives: string[];
}

export const rollerSystems: RollerSystem[] = [
  {
    id: "bgr-sk",
    name: "BGR SK",
    type: "door",
    useCase: "Residential garages and outbuildings",
    boxSizes_mm: [250, 300, 350],
    guides: "PP75 (PA55 armour only), PP89, PP110, PP110 Z",
    maxWidth_mm: 6000,
    maxHeight_mm: 4900,
    maxArea_m2: 15,
    colourOptions: ["Aluprof", "full RAL palette"],
    drives: ["Inel", "Yooda", "Somfy (Optimo RTS, Rollixo RTS/io, Inel CENT_D smart home)"],
  },
  {
    id: "intense",
    name: "Intense",
    type: "door",
    useCase: "Warehouses, workshops and production halls - large openings",
    boxSizes_mm: [300, 360, 400],
    guides: "PP90/91",
    maxWidth_mm: 6400,
    maxHeight_mm: 6000,
    maxArea_m2: 30,
    colourOptions: ["Polfendo", "full RAL palette"],
    drives: ["Kraftmaster tubular motor (Rollixo Optimo RTS, Rollixo RTS/io, Proline controllers)"],
  },
  {
    id: "bkr-sk",
    name: "BKR SK",
    type: "grille",
    useCase: "Commercial spaces needing light and airflow with visibility",
    boxSizes_mm: [250, 300, 350],
    guides: "PP89, PP110",
    maxWidth_mm: 5000,
    maxHeight_mm: 4850,
    maxArea_m2: 15,
    colourOptions: ["Aluprof", "full RAL palette"],
    drives: ["Tubular motor, TaHoma compatible"],
  },
  {
    id: "minilook-56",
    name: "Minilook 56",
    type: "grille",
    useCase: "General commercial use, 56mm profile",
    boxSizes_mm: [250],
    guides: "PP66",
    maxWidth_mm: 4000,
    maxHeight_mm: 4000,
    maxArea_m2: 15,
    colourOptions: ["Polfendo", "full RAL palette"],
    drives: ["Kraftmaster tubular motor"],
  },
  {
    id: "easylook-84",
    name: "Easylook 84",
    type: "grille",
    useCase: "Shopping centres and large commercial openings",
    boxSizes_mm: [300, 360, 400],
    guides: "PP90/91",
    maxWidth_mm: 6000,
    maxHeight_mm: 6000,
    maxArea_m2: 32,
    colourOptions: ["Polfendo", "full RAL palette"],
    drives: ["Kraftmaster tubular motor", "GFA side drive (console-mounted, no box)"],
  },
];

export const rollerDoorGrilleOptions = {
  glazingProfile: "Available for BGR SK and Intense - constant light even when fully closed",
  ventilationProfile: "Available for BGR SK and Intense - airflow for e.g. underground car parks",
};

export const rollerAccessories = [
  "Somfy io/RTS code keypad", "Pilot Somfy Keygo io/RTS", "Warning light", "Control pendant",
  "EasyON (Intense, Easylook 84)", "TS970/TS971 (for GFA side motor)", "Proline controller",
  "Wave shaft housing", "Ventilation profile", "Glazing profile", "ClickON", "windON (Intense only)",
  "Crank-hole key lock", "Flush or surface impulse switch", "Flush key switch", "Surface key switch",
  "Through-wall NHK", "Somfy Rollixo io/RTS", "Somfy Rollixo Optimo RTS", "Photocells",
  "Manual chain release", "Proline code keypad", "Pilot Proline", "Pilot Inel", "Inel CENT D",
];
