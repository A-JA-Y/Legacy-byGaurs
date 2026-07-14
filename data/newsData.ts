export type NewsMeta = {
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
  featured?: boolean;
  tags?: string[];

  /* Extra */
  location?: string;
  newsType?: string;

  /* Structured Data */
  schemaMarkup?: Record<string, unknown>;
  faqSchema?: Record<string, unknown>;
};

const SITE = "https://www.legacybygaurs.com";

const NewsData: NewsMeta[] = [
  {
    id: "news-1",

    /* SEO */
    title:
      "Greater Noida Circle Rates Hiked for First Time in 9 Years — What It Means for Legacy by Gaurs Buyers",
    slug: "greater-noida-circle-rate-hike-legacy-by-gaurs-2026",
    excerpt:
      "The Greater Noida Authority approved a 3.58% circle rate hike after nine years. Here is what it actually changes for a premium buyer — and what it doesn't.",
    metaTitle:
      "Greater Noida Circle Rate Hike 2026 | What It Means for Legacy by Gaurs",
    metaDescription:
      "Greater Noida circle rates rose 3.58% after nine years. We explain what the revision changes for stamp duty, why the cost impact on premium buyers is limited, and what it signals for Legacy by Gaurs at Jaypee Greens.",
    keywords: [
      "Greater Noida circle rate hike",
      "Legacy by Gaurs",
      "Legacy by Gaurs price",
      "Greater Noida luxury homes",
      "Jewar Airport real estate",
      "Yamuna Expressway property",
      "Jaypee Greens",
      "circle rate 2026",
    ],
    canonical: `${SITE}/news/greater-noida-circle-rate-hike-legacy-by-gaurs-2026`,

    /* Display */
    image: "/news-1.webp",
    altText:
      "Aerial view of the Jaypee Greens golf township in Greater Noida, home to Legacy by Gaurs",
    date: "2026-05-06",
    updatedAt: "2026-07-14",
    author: "Admin",
    category: "Real Estate News",
    readTime: "6 min read",
    featured: true,
    tags: [
      "greater noida",
      "circle rate",
      "legacy by gaurs",
      "luxury homes",
      "real estate",
      "investment",
      "yamuna expressway",
    ],

    /* Extra */
    location: "Greater Noida",
    newsType: "Market",

    /* Structured Data */
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "Greater Noida Circle Rates Hiked for First Time in 9 Years — What It Means for Legacy by Gaurs Buyers",
      description:
        "The Greater Noida Authority approved a 3.58% circle rate hike after nine years. What it changes for premium buyers at Legacy by Gaurs, Jaypee Greens.",
      image: [`${SITE}/news-1.webp`],
      datePublished: "2026-05-06",
      dateModified: "2026-07-14",
      author: {
        "@type": "Organization",
        name: "Legacy by Gaurs",
      },
      publisher: {
        "@type": "Organization",
        name: "Legacy by Gaurs — Authorised Channel Partner",
        logo: {
          "@type": "ImageObject",
          url: `${SITE}/logo.png`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE}/news/greater-noida-circle-rate-hike-legacy-by-gaurs-2026`,
      },
      articleSection: "Real Estate",
      keywords:
        "Greater Noida circle rate, Legacy by Gaurs, Jaypee Greens, luxury homes, Jewar Airport, Yamuna Expressway",
      about: [
        {
          "@type": "Place",
          name: "Greater Noida",
        },
        {
          "@type": "ApartmentComplex",
          name: "Legacy by Gaurs",
        },
      ],
    },
  },
];

export default NewsData;
