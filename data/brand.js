// Single source of truth for project + channel-partner details.
// Project facts are taken from the official Legacy by Gaurs brochure.

export const brand = {
  name: "Legacy by Gaurs",
  shortName: "Legacy",
  developer: "Gaurs Group",
  developerLegal: "Gaursons India Ltd.",
  tagline: "It's Either In Your Genes Or Your Genius",
  positioning: "Uber-Luxury Golf-View Condominiums & Villas at Jaypee Greens, Greater Noida",

  site: "https://www.legacybygaurs.com",
  email: "care@legacybygaurs.com",

  // Channel partner (authorised marketing partner — not the developer)
  partner: {
    phone: "+91 9810890353",
    phoneHref: "tel:+919810890353",
    office:
      "601, SL Tower, 6th Floor, Alpha Commercial Belt, Greater Noida 201310, Uttar Pradesh, India",
  },

  // Developer corporate office
  corporate:
    "Gaur Biz Park, Plot No-1, Abhay Khand II, Indirapuram, Ghaziabad - 201014",

  project: {
    address:
      "Plot No. B-10, Jaypee Greens, Sector 19 & 25, Tehsil & District Gautam Buddha Nagar, Uttar Pradesh",
    locality: "Jaypee Greens, Greater Noida",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    postalCode: "201310",
    launchDate: "13-10-2024",
    lat: 28.4595,
    lng: 77.5245,
  },

  rera: {
    number: "UPRERAPRJ688396/10/2024",
    url: "https://up-rera.in/projects",
  },

  collectionAccount: {
    name: "GOLF HORIZON LLP COLLECTION A/C FOR LEGACY BY GAURS",
    number: "777705550771",
    bank: "ICICI BANK LTD",
    ifsc: "ICIC0007391",
    branch:
      "Shop No-1, Adela Mart, Gaur City 2, Sector 16 C, Greater Noida West",
  },

  // Product mix — brochure pp. 21, 50-60
  towers: ["Buckingham", "Edinburgh", "Kensington", "Versailles"],
  condoUnits: 265,
  villaUnits: 20,
  towerFloors: "3B + GF/Stilt + 34 Floors",

  // Walkthrough video. No official Legacy by Gaurs film was supplied, so the
  // section falls back to a still + enquiry CTA. Drop the YouTube ID in here to
  // switch the embed back on.
  youtubeId: null,

  // Gaurs Group track record — brochure p. 61
  stats: [
    { value: "30", label: "Years of unfaltering commitment" },
    { value: "70+", label: "Projects successfully delivered" },
    { value: "75,000+", label: "Units successfully delivered" },
    { value: "3 Lakh+", label: "Happy satisfied customers" },
    { value: "100 Mn+", label: "Sq. ft. area developed" },
    { value: "45,000+", label: "Possessions given (2014-2024)" },
  ],
};

// Served from public/ — see stage notes in README.
export const BROCHURE_URL = "/legacy-by-gaurs-brochure.pdf";
export const BROCHURE_FILENAME = "Legacy by Gaurs Brochure.pdf";
export const MASTER_PLAN_URL = "/master-plan.pdf";

export default brand;
