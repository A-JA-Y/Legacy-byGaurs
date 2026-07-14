// Unit data taken verbatim from the Legacy by Gaurs brochure (pp. 50-58, 60).
// The brochure publishes no prices, so pricing is "On Request" everywhere and
// the enquiry form is the route to it. Do not invent figures here.

export const PRICE_ON_REQUEST = "On Request";

// Condominiums — 265 units across 4 towers, every one a 4 BHK.
// Each tower is 3B + GF/Stilt + 34 floors.
export const condoUnits = [
  {
    id: "unit-01",
    unit: "Unit 01",
    tower: "Buckingham",
    config: "4 BHK",
    balconies: 2,
    carpetSqft: 2404.79,
    coveredSqft: 2593.69,
    balconySqft: 810.74,
    commonSqft: 519.26,
    totalSqft: 4765,
    layout:
      "4 Bedrooms + Living Room + Dining/Family Lounge + Kitchen + 1 Dress + 4 Toilets + Utility + Toilet + Foyer + 2 Balconies",
  },
  {
    id: "unit-02",
    unit: "Unit 02",
    tower: "Buckingham",
    config: "4 BHK",
    balconies: 3,
    carpetSqft: 1912.55,
    coveredSqft: 2063.24,
    balconySqft: 445.74,
    commonSqft: 519.26,
    totalSqft: 3510,
    layout:
      "4 Bedrooms + Living Room + Dining/Family Lounge + Kitchen + 1 Dress + 4 Toilets + Utility + Toilet + Foyer + 3 Balconies",
  },
  {
    id: "unit-03",
    unit: "Unit 03",
    tower: "Edinburgh",
    config: "4 BHK",
    balconies: 3,
    carpetSqft: 1912.55,
    coveredSqft: 2063.24,
    balconySqft: 445.74,
    commonSqft: 519.26,
    totalSqft: 3510,
    layout:
      "4 Bedrooms + Living Room + Dining/Family Lounge + Kitchen + 1 Dress + 4 Toilets + Utility + Toilet + Foyer + 3 Balconies",
  },
  {
    id: "unit-04",
    unit: "Unit 04",
    tower: "Edinburgh",
    config: "4 BHK",
    balconies: 3,
    carpetSqft: 1937.09,
    coveredSqft: 2104.68,
    balconySqft: 427.33,
    commonSqft: 519.26,
    totalSqft: 3540,
    layout:
      "4 Bedrooms + Living Room + Dining/Family Lounge + Kitchen + 1 Dress + 4 Toilets + Utility + Toilet + Foyer + 3 Balconies",
  },
  {
    id: "unit-05",
    unit: "Unit 05",
    tower: "Kensington",
    config: "4 BHK",
    balconies: 3,
    carpetSqft: 1937.09,
    coveredSqft: 2104.68,
    balconySqft: 427.33,
    commonSqft: 519.26,
    totalSqft: 3540,
    layout:
      "4 Bedrooms + Living Room + Dining/Family Lounge + Kitchen + 1 Dress + 4 Toilets + Utility + Toilet + Foyer + 3 Balconies",
  },
  {
    id: "unit-06",
    unit: "Unit 06",
    tower: "Kensington",
    config: "4 BHK",
    balconies: 3,
    carpetSqft: 1912.55,
    coveredSqft: 2063.24,
    balconySqft: 445.74,
    commonSqft: 519.26,
    totalSqft: 3510,
    layout:
      "4 Bedrooms + Living Room + Dining/Family Lounge + Kitchen + 1 Dress + 4 Toilets + Utility + Toilet + Foyer + 3 Balconies",
  },
  {
    id: "unit-07",
    unit: "Unit 07",
    tower: "Versailles",
    config: "4 BHK",
    balconies: 3,
    carpetSqft: 1912.55,
    coveredSqft: 2063.24,
    balconySqft: 445.74,
    commonSqft: 519.26,
    totalSqft: 3510,
    layout:
      "4 Bedrooms + Living Room + Dining/Family Lounge + Kitchen + 1 Dress + 4 Toilets + Utility + Toilet + Foyer + 3 Balconies",
  },
  {
    id: "unit-08",
    unit: "Unit 08",
    tower: "Versailles",
    config: "4 BHK",
    balconies: 2,
    carpetSqft: 2408.88,
    coveredSqft: 2593.8,
    balconySqft: 813.11,
    commonSqft: 519.26,
    totalSqft: 4765,
    layout:
      "4 Bedrooms + Living Room + Dining/Family Lounge + Kitchen + 1 Dress + 4 Toilets + Utility + Toilet + Foyer + 2 Balconies",
  },
];

// The four towers, in brochure order.
export const towers = [
  { name: "Buckingham", units: ["Unit 01", "Unit 02"], spec: "3B + GF/Stilt + 34 Floors" },
  { name: "Edinburgh", units: ["Unit 03", "Unit 04"], spec: "3B + GF/Stilt + 34 Floors" },
  { name: "Kensington", units: ["Unit 05", "Unit 06"], spec: "3B + GF/Stilt + 34 Floors" },
  { name: "Versailles", units: ["Unit 07", "Unit 08"], spec: "3B + GF/Stilt + 34 Floors" },
];

// Legacy Villas — 20 units, numbered LV01-LV21 (there is no LV13).
export const villas = {
  total: 20,
  doubleBasement: [
    "LV01", "LV03", "LV04", "LV05", "LV06", "LV07", "LV08",
    "LV09", "LV10", "LV11", "LV12", "LV14", "LV15", "LV16",
  ],
  singleBasement: ["LV02", "LV17", "LV18", "LV19", "LV20", "LV21"],
  levels: [
    "Second Basement (double-basement villas)",
    "First Basement",
    "Ground Floor",
    "Mezzanine Floor",
    "First Floor",
    "Second Floor",
    "Terrace Floor",
  ],
};

// Specifications — brochure p. 60.
export const specifications = [
  {
    title: "Structure",
    items: [
      "R.C.C. frame structure with 100 mm thick outer R.C.C. walls",
      "Brick / block work inside as per drawings",
    ],
  },
  {
    title: "Flooring",
    items: [
      "Drawing, dining, master & other bedrooms — imported marble",
      "Dresser — laminated wooden flooring",
      "Kitchen — vitrified tiles",
      "Balcony & toilets — anti-skid tiles",
    ],
  },
  {
    title: "Air-Conditioning & Hot Water",
    items: [
      "Metered chilled-water centralized system with internal cassette units",
      "Centralized metered heat pump with circulation",
    ],
  },
  {
    title: "Kitchen",
    items: [
      "Counter with stainless steel sink, R.O., hob & chimney",
      "Modular cabinets up to 2400 mm",
      "Designer wall tiles up to false ceiling",
    ],
  },
  {
    title: "Doors, Windows & Railings",
    items: [
      "External — aluminium / UPVC sliding & openable doors and windows",
      "Internal — branded flush doors in wooden frames",
      "Balcony — glass / M.S. railings; staircase — mild steel railing",
    ],
  },
  {
    title: "Wall Finish & Wood Work",
    items: [
      "External — elegant texture paint",
      "Internal — plastic emulsion on P.O.P. punning",
      "Wardrobes in dressing rooms up to 2400 mm height",
    ],
  },
  {
    title: "Wiring & Switches",
    items: [
      "Fire-resistant copper wiring in concealed PVC conduits",
      "Modular switches and sockets",
      "TV and telephone points in all rooms",
    ],
  },
  {
    title: "Sanitary & Fire Fighting",
    items: [
      "Corrosion-free CPVC piping and fittings",
      "Taps, wash basins and wall-mounted W/C of reputed brands",
      "Firefighting works as per approved scheme",
    ],
  },
];

export const fmt = (n) =>
  n.toLocaleString("en-IN", { maximumFractionDigits: 2 });
