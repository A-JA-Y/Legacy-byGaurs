// Per-page SEO copy (title, meta description, canonical path).
// Source: the "Legacy by Gaurs — SEO" content document.
import { brand } from "./brand";

export const seo = {
  home: {
    path: "/",
    title: "Legacy by Gaurs | Luxury 4 BHK at Jaypee Greens",
    description:
      "Legacy by Gaurs offers luxury 4 BHK golf-view condos & villas at Jaypee Greens, Greater Noida. Check price, floor plans & book a site visit.",
  },
  about: {
    path: "/about-legacy-by-gaurs",
    title: "About Legacy by Gaurs | Golf-View Jaypee Greens",
    description:
      "About Legacy by Gaurs: 4 towers, 265 luxury 4 BHK condos & 20 villas at Jaypee Greens, Greater Noida, by an 18-hole Greg Norman golf course.",
  },
  configurations: {
    path: "/villas-configurations",
    title: "Legacy by Gaurs Configurations | 4 BHK & Villas",
    description:
      "Legacy by Gaurs configurations: 4 BHK condos from 3,510 to 4,765 sq. ft. in 4 towers, plus 20 Legacy Villas at Jaypee Greens, Greater Noida.",
  },
  price: {
    path: "/price",
    title: "Legacy by Gaurs Price List 2026 | 4 BHK & Villas",
    description:
      "Legacy by Gaurs price list 2026: 4 BHK condos of 3,510-4,765 sq. ft. & 20 Legacy Villas at Jaypee Greens. Get the official price & EMI plan.",
  },
  floorPlans: {
    path: "/floor-plans",
    title: "Legacy by Gaurs Floor Plan | 4 BHK & Villa Layouts",
    description:
      "Legacy by Gaurs floor plans: 4 BHK units of 3,510-4,765 sq. ft. in 4 towers, Legacy Villa levels & master plan. Download the floor plan PDF.",
  },
  location: {
    path: "/location-connectivity",
    title: "Legacy by Gaurs Location & Map | Jaypee Greens",
    description:
      "Legacy by Gaurs location: Plot B-10, Jaypee Greens, Greater Noida. Close to Pari Chowk, Aqua Line metro, Yamuna Expressway & Jewar Airport.",
  },
  amenities: {
    path: "/amenities",
    title: "Legacy by Gaurs Amenities | Clubhouse, Pool & Golf",
    description:
      "Legacy by Gaurs amenities: House of Royals clubhouse, HELIX sky bridge, indoor heated pool, spa & an 18-hole golf course at Jaypee Greens.",
    image: "/amenities-banner.webp",
  },
  contact: {
    path: "/contact-us",
    title: "Contact Legacy by Gaurs | Site Visit & Price List",
    description:
      "Contact Legacy by Gaurs for price list, brochure & site visit of 4 BHK golf-view homes at Jaypee Greens, Greater Noida. Call +91 9810890353.",
  },
  gaursGroup: {
    path: "/about-gaurs-group",
    title: "About Gaurs Group | Developer of Legacy by Gaurs",
    description:
      "About Gaurs Group, the developer of Legacy by Gaurs: 30 years since 1995, 70+ projects, 75,000+ units delivered & 3 lakh+ happy customers.",
  },
  blogs: {
    path: "/blogs",
    title: "Legacy by Gaurs Blog | Buyer Guides & Investment",
    description:
      "Legacy by Gaurs blog: buyer guides, investment analysis & Jewar Airport insights for Jaypee Greens and the Greater Noida luxury home market.",
  },
  news: {
    path: "/news",
    title: "Legacy by Gaurs News | Greater Noida Updates 2026",
    description:
      "Legacy by Gaurs news: latest updates on Jaypee Greens, Greater Noida circle rates, property policy & infrastructure that affect home buyers.",
  },
};

// Builds a Next.js Metadata object for a page key above. `title.absolute`
// keeps the exact title from the SEO doc (no template suffix).
export function pageMetadata(key, extra = {}) {
  const page = seo[key];
  const url = page.path === "/" ? `${brand.site}/` : `${brand.site}${page.path}`;
  const image = `${brand.site}${page.image || "/legacy-hero.webp"}`;

  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: brand.name,
      type: "website",
      locale: "en_IN",
      images: [{ url: image, width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image],
    },
    ...extra,
  };
}
