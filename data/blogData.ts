export type BlogMeta = {
  id: string;

  /* SEO */
  title: string;
  slug: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonical: string;
  altText?: string;

  /* Display */
  image: string;
  date: string;
  updatedAt: string;
  author: string;
  category: string;
  readTime: string;
  tags: string[];
  featured: boolean;

  /* JSON-LD */
  schemaMarkup?:
  | Record<string, unknown>
  | Record<string, unknown>[];
  faqSchema?: Record<string, unknown>;
};

const SITE = "https://www.legacybygaurs.com";

const PUBLISHER = {
  "@type": "Organization",
  name: "Legacy by Gaurs — Authorised Channel Partner",
  logo: {
    "@type": "ImageObject",
    url: `${SITE}/logo.png`,
  },
};

export const blogData: BlogMeta[] = [
  {
    id: "blog-1",

    /* SEO */
    title: "Legacy by Gaurs: The Complete Buyer's Guide 2026",
    slug: "legacy-by-gaurs-jaypee-greens-buyers-guide-2026",
    excerpt:
      "Four towers, 265 four-bedroom condominiums, 20 villas and an 18-hole Greg Norman golf course. Everything the brochure discloses — and everything it doesn't.",
    metaTitle:
      "Legacy by Gaurs Buyer's Guide 2026 | 4 BHK & Villas at Jaypee Greens",
    metaDescription:
      "A complete buyer's guide to Legacy by Gaurs — the four towers, all eight 4 BHK unit plans (3,510–4,765 sq. ft.), the 20 Legacy Villas, amenities, RERA details and what to verify before you buy at Jaypee Greens, Greater Noida.",
    keywords: [
      "Legacy by Gaurs",
      "Legacy by Gaurs Jaypee Greens",
      "Legacy by Gaurs price",
      "Legacy by Gaurs floor plan",
      "4 BHK Greater Noida",
      "Gaurs Group",
      "Legacy Villas",
    ],
    canonical: `${SITE}/blogs/legacy-by-gaurs-jaypee-greens-buyers-guide-2026`,

    /* Display */
    image: "/blog-1.webp",
    altText:
      "Legacy by Gaurs towers overlooking the 18-hole golf course at Jaypee Greens, Greater Noida",
    date: "2026-04-25",
    updatedAt: "2026-07-14",
    author: "Admin",
    category: "Real Estate",
    readTime: "12 min read",
    tags: [
      "Legacy by Gaurs",
      "Jaypee Greens",
      "Buyer's Guide",
      "4 BHK",
      "Greater Noida",
    ],
    featured: true,

    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Legacy by Gaurs: The Complete Buyer's Guide to Jaypee Greens' Newest Landmark",
      description:
        "A complete buyer's guide to Legacy by Gaurs — towers, unit plans, villas, amenities, RERA details and a diligence checklist.",
      image: `${SITE}/blog-1.webp`,
      datePublished: "2026-04-25",
      dateModified: "2026-07-14",
      author: { "@type": "Organization", name: "Legacy by Gaurs" },
      publisher: PUBLISHER,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE}/blogs/legacy-by-gaurs-jaypee-greens-buyers-guide-2026`,
      },
      about: {
        "@type": "ApartmentComplex",
        name: "Legacy by Gaurs",
        numberOfAccommodationUnits: 285,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Plot No. B-10, Jaypee Greens, Sector 19 & 25",
          addressLocality: "Greater Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201310",
          addressCountry: "IN",
        },
      },
    },

    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where exactly is Legacy by Gaurs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Plot No. B-10, Jaypee Greens, Sector 19 & 25, Tehsil and District Gautam Buddha Nagar, Uttar Pradesh. Residences overlook the 18-hole golf course on one side and Pari Chowk on the other.",
          },
        },
        {
          "@type": "Question",
          name: "What configurations are available at Legacy by Gaurs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only 4 BHK. There are 265 four-bedroom condominiums across four towers — Buckingham, Edinburgh, Kensington and Versailles — ranging from 3,510 to 4,765 sq. ft. total area, plus 20 Legacy Villas.",
          },
        },
        {
          "@type": "Question",
          name: "What is the price of a 4 BHK at Legacy by Gaurs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gaurs Group has not published a public price list for this project. Pricing is released per unit and depends on the tower, the floor and the orientation. Submit an enquiry to receive the current official price list along with the brochure.",
          },
        },
        {
          "@type": "Question",
          name: "Is Legacy by Gaurs RERA registered?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The RERA registration number is UPRERAPRJ688396/10/2024, verifiable at up-rera.in. The launch date recorded in the brochure is 13 October 2024.",
          },
        },
        {
          "@type": "Question",
          name: "Is the unit handed over ready to move in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The brochure specifies that units are handed over as a raw structure with façade development, and that works not listed in the specifications fall within the buyer's scope. Budget for fit-out separately.",
          },
        },
      ],
    },
  },

  {
    id: "blog-2",

    /* SEO */
    title:
      "Jewar Airport and the Case for Legacy by Gaurs: Why Finite Supply Beats a Big Launch",
    slug: "jewar-airport-legacy-by-gaurs-smart-investment-2026",
    excerpt:
      "Every project near Jewar is sold on the airport. A clear-eyed look at why supply — not proximity — is the argument that actually holds for a 265-unit project inside a delivered township.",
    metaTitle:
      "Jewar Airport & Legacy by Gaurs | Greater Noida Investment Analysis 2026",
    metaDescription:
      "Is Legacy by Gaurs a smart 2026 investment? An honest analysis of the Jewar airport thesis, the scarcity argument for a 265-unit project inside Jaypee Greens, and the risks worth naming.",
    keywords: [
      "Legacy by Gaurs investment",
      "Jewar Airport real estate",
      "Noida International Airport",
      "Jaypee Greens Greater Noida",
      "Greater Noida property investment",
      "Yamuna Expressway property",
    ],
    canonical: `${SITE}/blogs/jewar-airport-legacy-by-gaurs-smart-investment-2026`,

    /* Display */
    image: "/blog-2.webp",
    altText:
      "The House of Royals clubhouse at Legacy by Gaurs, Jaypee Greens, Greater Noida",
    date: "2026-05-02",
    updatedAt: "2026-07-14",
    author: "Admin",
    category: "Investment",
    readTime: "10 min read",
    tags: [
      "Investment",
      "Jewar Airport",
      "Legacy by Gaurs",
      "Greater Noida",
      "Jaypee Greens",
    ],
    featured: false,

    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Jewar Airport and the Case for Legacy by Gaurs: Why Finite Supply Beats a Big Launch",
      description:
        "An investment analysis of Legacy by Gaurs in the context of the Noida International Airport and the Greater Noida supply picture.",
      image: `${SITE}/blog-2.webp`,
      datePublished: "2026-05-02",
      dateModified: "2026-07-14",
      author: { "@type": "Organization", name: "Legacy by Gaurs" },
      publisher: PUBLISHER,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE}/blogs/jewar-airport-legacy-by-gaurs-smart-investment-2026`,
      },
    },

    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Will the Jewar airport increase property prices at Legacy by Gaurs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The airport is expected to re-rate land values across its catchment, which is positive for the corridor. Whether that flows into a specific unit depends on supply. Legacy by Gaurs is capped at 265 condominiums and 20 villas, with no scope for further phases.",
          },
        },
        {
          "@type": "Question",
          name: "Is Legacy by Gaurs a good investment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The structural arguments are finite supply, a uniform 4 BHK inventory with no low-end tier, and an already-delivered township around it. The counterweights are a high entry cost, a raw-structure handover requiring fit-out capital, and thinner resale depth in the largest units.",
          },
        },
        {
          "@type": "Question",
          name: "What is the smallest unit at Legacy by Gaurs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "3,510 sq. ft. total area (1,912.55 sq. ft. carpet). Every condominium in the project is a 4 BHK; there is no smaller configuration.",
          },
        },
      ],
    },
  },
];

export default blogData;
