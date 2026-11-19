// Server-rendered JSON-LD, so the schema is in the static HTML that crawlers
// fetch (next/script would inject it client-side). `<` is escaped so content
// can never close the script tag early.
/** @param {{ data: object }} props */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
