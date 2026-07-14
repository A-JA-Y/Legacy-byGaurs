import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Amenities from "@/components/Amenities";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import { brand } from "@/data/brand";

const TITLE =
  "Legacy by Gaurs Amenities | House of Royals Clubhouse, HELIX Sky Bridge & Golf";
const DESCRIPTION =
  "Explore Legacy by Gaurs amenities — the House of Royals clubhouse, the HELIX sky bridge between towers, the Windsor landscaped podium, an indoor heated pool, spa and an 18-hole Greg Norman golf course at Jaypee Greens, Greater Noida.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${brand.site}/amenities` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${brand.site}/amenities`,
    type: "website",
    images: [{ url: `${brand.site}/amenities-banner.webp`, width: 1920, height: 700 }],
  },
};

// Clubhouse facilities — brochure p. 28.
const clubImperial = [
  "Café", "Restaurant", "Library", "Meeting Room", "Conference Room",
  "Lobby Lounge", "Theatre", "Party Hall", "Billiards Lounge", "Cards Room",
  "Gym and Yoga", "Game Zone", "Multipurpose Hall", "Music/Hobby Room",
  "Healthcare", "Spa, Sauna, Wellness & Treatment Zone",
  "Swimming Pool, Kids' Pool & Jacuzzi", "Indoor Heated Pool",
  "Pool-Side Outdoor Seating Deck",
];

// HELIX sky bridge — brochure p. 34.
const helix = [
  "Tree Court", "Pavillion", "Waterbody", "Lawn", "Parterre Garden",
  "Yoga & Meditation", "Seating with Trellis", "Open Air Theatre", "Chess Table",
  "Jogging Track", "Celebration Court", "Snooker Table", "Herbal Garden",
  "Bar Counter", "Table Tennis", "Carrom Board", "Foosball",
];

// Windsor podium — brochure p. 37.
const windsor = [
  "Tropical Garden", "Half Basketball Court", "Ball Pit", "Bouncing Net",
  "Interactive Spaces", "Discovering Net", "Water Feature",
  "Water Feature with Sculpture", "Flower Garden", "Badminton Court",
  "Yoga Deck", "Outdoor Gym", "Moss Garden", "Kids Gym and Play Area",
  "Sitout Space",
];

// Jaypee Greens township — brochure p. 12.
const township = [
  { name: "Town Centre", desc: "A bustling hub of activity, featuring shopping, dining and entertainment options." },
  { name: "Sports Complex — The Atlantic", desc: "A state-of-the-art sports complex designed for fitness enthusiasts and athletes alike." },
  { name: "Boomerang Club", desc: "The ultimate in recreation and relaxation, where fun and leisure come full circle." },
  { name: "Golf & Spa Resort", desc: "Tee off at dawn, unwind at dusk. Resort living that's always within reach." },
  { name: "Public School", desc: "Dedicated to nurturing the minds of the next generation." },
  { name: "Gated Community Living", desc: "Security and exclusivity, where privacy and peace of mind are guaranteed." },
];

function Pills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="text-[13px] text-[#5c4a2a] bg-[#faf6e8] px-3 py-1.5 rounded-full border border-[#d4c9ae]"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function AmenitiesPage() {
  return (
    <>
      {/* BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${brand.site}/` },
              { "@type": "ListItem", position: 2, name: "Amenities", item: `${brand.site}/amenities` },
            ],
          }),
        }}
      />

      {/* FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What amenities does Legacy by Gaurs offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Legacy by Gaurs is served by the House of Royals — an ultra-modern clubhouse with a café, restaurant, library, theatre, party hall, billiards lounge, cards room, game zone, gym and yoga, healthcare, a spa and wellness zone, an indoor heated pool, a kids' pool and jacuzzi. Above, the HELIX sky bridge adds yoga decks, herbal gardens, an open-air theatre and indoor games; below, the Windsor podium carries a badminton court, outdoor gym, kids' play areas and landscaped gardens.",
                },
              },
              {
                "@type": "Question",
                name: "Does Legacy by Gaurs have a golf course?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Legacy by Gaurs sits within Jaypee Greens, home to an 18-hole golf course designed by Greg Norman — one of the longest courses on the global golfing circuit. Residences overlook the course on one side and Pari Chowk on the other.",
                },
              },
              {
                "@type": "Question",
                name: "What is the HELIX at Legacy by Gaurs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The HELIX is a sky bridge connecting the towers — a serene zone above the ordinary, blending yoga decks, herbal gardens, a trellis walk, an open-air theatre, a jogging track and indoor games. It is a bridge between towers, and a statement beyond living.",
                },
              },
              {
                "@type": "Question",
                name: "Is there a swimming pool at Legacy by Gaurs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The House of Royals clubhouse includes a swimming pool, a kids' pool and jacuzzi, a pool-side outdoor seating deck, and a separate indoor heated pool for year-round use.",
                },
              },
              {
                "@type": "Question",
                name: "Is Legacy by Gaurs a gated community?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Jaypee Greens is a gated township offering security and exclusivity, where privacy and peace of mind are guaranteed. Residents also have access to the Atlantic sports complex, the Boomerang Club, the Town Centre and a public school within the township.",
                },
              },
            ],
          }),
        }}
      />

      {/* RealEstateAgent */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "@id": `${brand.site}/#realestateagent`,
            name: `${brand.name} — Authorised Channel Partner`,
            description: `Authorised channel partner for ${brand.name}, uber-luxury golf-view condominiums and villas by ${brand.developer} at Jaypee Greens, Greater Noida.`,
            url: `${brand.site}/`,
            image: `${brand.site}/legacy-hero.webp`,
            telephone: brand.partner.phone,
            priceRange: "₹₹₹",
            areaServed: { "@type": "Place", name: "Greater Noida, Uttar Pradesh" },
            address: {
              "@type": "PostalAddress",
              streetAddress: "601, SL Tower, 6th Floor, Alpha Commercial Belt",
              addressLocality: "Greater Noida",
              addressRegion: "Uttar Pradesh",
              postalCode: "201310",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: brand.project.lat,
              longitude: brand.project.lng,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "10:00",
              closes: "19:00",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/amenities-banner.webp"
            alt="Legacy by Gaurs amenities — the House of Royals pool at Jaypee Greens, Greater Noida"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="inline-block text-[#DCA54A] text-sm md:text-base uppercase tracking-widest font-semibold mb-3">
            Lifestyle
          </span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Amenities
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            The House of Royals clubhouse, the HELIX sky bridge and the Windsor
            podium — three amenity worlds, stacked.
          </p>
        </div>
      </section>

      <ModalWrapper />
      <Amenities />

      {/* Intro */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Legacy by Gaurs Amenities
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
            At Legacy by Gaurs, amenities are not an afterthought — they are the
            architecture of the lifestyle. Tee off at dawn on an 18-hole Greg Norman
            course, swim an indoor heated lap through the winter, take the sky bridge
            between towers for a yoga session above the treeline, and end the evening in
            a private theatre or the billiards lounge of the House of Royals.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Three distinct amenity worlds sit stacked within the project: the{" "}
            <strong>House of Royals</strong> clubhouse, the <strong>HELIX</strong> sky
            bridge suspended between the towers, and the <strong>Windsor</strong>{" "}
            landscaped podium below. Around them lies Jaypee Greens — Noida&apos;s most
            famed luxury township.
          </p>
        </div>
      </section>

      {/* House of Royals */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#c8922a] font-semibold mb-3">
            The Clubhouse
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            House of Royals — Club Imperial
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            An epitome of luxury and modernity, this ultra-modern clubhouse is designed
            to offer an unparalleled experience of leisure and recreation. Whether you
            seek relaxation or an active lifestyle, Club Imperial ensures every need is
            met with its comprehensive range of amenities.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Dine like royalty without leaving your castle; wake to a pool view that
            soothes the soul; host your grandest moments in a regal party hall.
          </p>

          <Pills items={clubImperial} />
        </div>
      </section>

      {/* HELIX */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#c8922a] font-semibold mb-3">
            The Sky-High Luxuries
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            HELIX — The Sky Bridge
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Step into the sky walk — a serene zone above the ordinary. From yoga decks
            and herbal gardens to indoor games and trellis walks, it is where wellness
            meets recreation. A perfect blend of greenery and activity, crafted to
            elevate everyday living.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            A bridge between towers, and a statement beyond living.
          </p>

          <Pills items={helix} />
        </div>
      </section>

      {/* Windsor */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#c8922a] font-semibold mb-3">
            Reserved for the Few
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Windsor — The Landscaped Podium
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            More than just a garden, it is a carefully-crafted escape where every plant
            and tree is chosen to enhance your sense of peace and well-being. From the
            tot lot for the little ones to the mid-teens play area, every child has a
            space to enjoy — while fitness buffs make use of the open gym, walking
            tracks and courts.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Landscaped to perfection, designed for indulgence.
          </p>

          <Pills items={windsor} />
        </div>
      </section>

      {/* Township */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            And Beyond — Life at Jaypee Greens
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto text-gray-700 mb-12">
            Legacy by Gaurs sits inside an established township with an identity of its
            own — one meant to impact and evolve lifestyles not just across one
            lifetime, but several.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {township.map((t) => (
              <div
                key={t.name}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border-l-4 border-[#DCA54A]"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/about-legacy-by-gaurs" className="text-[#DCA54A] hover:underline font-medium">
              About Legacy by Gaurs →
            </Link>
            <Link href="/about-gaurs-group" className="text-[#DCA54A] hover:underline font-medium">
              About Gaurs Group →
            </Link>
            <Link href="/floor-plans" className="text-[#DCA54A] hover:underline font-medium">
              Explore Floor Plans →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-[#1A2352]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5E7C8] mb-6">
            Come, Be a Part of the Legacy
          </h2>
          <p className="text-lg text-[#C9CEE4] mb-8 leading-relaxed">
            From an 18-hole Greg Norman golf course and the House of Royals clubhouse to
            a sky bridge suspended between towers, every element of Legacy by Gaurs is
            designed to be cherished for generations. Download the brochure for the full
            amenity list, floor plans and specifications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="px-8 py-4 bg-[#DCA54A] text-white font-semibold rounded-lg hover:bg-[#C08F3C] transition-colors text-lg"
            >
              Enquire Now
            </Link>
            <Link
              href="/location-connectivity"
              className="px-8 py-4 border-2 border-[#DCA54A] text-[#DCA54A] font-semibold rounded-lg hover:bg-[#DCA54A] hover:text-white transition-colors text-lg"
            >
              Location &amp; Connectivity
            </Link>
          </div>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
