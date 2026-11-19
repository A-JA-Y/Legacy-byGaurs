import { brand } from "@/data/brand";

// Article + FAQPage + BreadcrumbList graph for a buyer-guide page, following
// the schema supplied with the content docs. The guides are standalone pages
// rather than blog posts, so the article node is typed `Article`. FAQ answers
// are the exact strings rendered on the page.
export function guideSchema({ path, headline, description, image, datePublished, dateModified, faqs, crumb }) {
  const url = `${brand.site}${path}`;
  const org = { "@type": "Organization", name: "Dealbridge", url: `${brand.site}/` };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline,
        description,
        url,
        mainEntityOfPage: url,
        image: [`${brand.site}${image}`],
        datePublished,
        dateModified,
        inLanguage: "en-IN",
        author: org,
        publisher: org,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${brand.site}/` },
          { "@type": "ListItem", position: 2, name: crumb, item: url },
        ],
      },
    ],
  };
}
