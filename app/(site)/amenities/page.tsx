import type { Metadata } from "next";
import { pageMetadata } from "@/data/seo";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Amenities from "@/components/Amenities";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import { brand } from "@/data/brand";
import SplitText from "@/components/SplitText";
import StatsBand from "@/components/StatsBand";
import Marquee from "@/components/Marquee";
import clubhouseImg from "@/assets/clubhouse.webp";
import skyBridgeImg from "@/assets/sky-bridge.webp";
import gardensImg from "@/assets/green-township.webp";

export const metadata: Metadata = pageMetadata("amenities");

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
    <div className="flex flex-wrap gap-2" data-stagger="35">
      {items.map((item) => (
        <span
          key={item}
          data-reveal="zoom"
          className="text-[13px] text-[#5c4a2a] bg-[#faf6e8] px-3 py-1.5 rounded-full border border-[#d4c9ae] transition-colors duration-300 hover:bg-[#DCA54A] hover:text-white hover:border-[#DCA54A] cursor-default"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

type World = {
  eyebrow: string;
  title: string;
  paras: string[];
  items: string[];
  image: StaticImageData;
  imageAlt: string;
  index: string;
  flip?: boolean;
  tint?: string;
};

// One "amenity world": a masked, parallax photograph beside its story.
function WorldSection({ eyebrow, title, paras, items, image, imageAlt, index, flip, tint = "bg-white" }: World) {
  return (
    <section className={`w-full py-20 px-6 md:px-12 lg:px-20 overflow-hidden ${tint}`}>
      <div className={`max-w-6xl mx-auto flex flex-col gap-12 lg:gap-16 items-center ${flip ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
        <div className="relative w-full lg:w-1/2">
          <div data-reveal="mask" className="zoom-frame relative h-[320px] md:h-[460px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-[-10%_0]" data-parallax="0.08">
              <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" quality={80} className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <span
            aria-hidden="true"
            className={`absolute -top-10 ${flip ? "-right-2 md:-right-6" : "-left-2 md:-left-6"} text-[7rem] md:text-[9rem] font-bold leading-none text-[#DCA54A]/15 select-none pointer-events-none`}
            style={{ fontFamily: "var(--font-work-sans)" }}
          >
            {index}
          </span>
        </div>

        <div className="w-full lg:w-1/2">
          <p data-reveal="up" className="text-xs uppercase tracking-[0.3em] text-[#c8922a] font-semibold mb-3">
            {eyebrow}
          </p>
          <h2 data-reveal="up" data-reveal-delay="80" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h2>
          <div data-reveal="up" data-reveal-delay="160">
            {paras.map((p, i) => (
              <p key={i} className={`text-base md:text-lg leading-relaxed text-gray-700 ${i === paras.length - 1 ? "mb-8" : "mb-4"}`}>
                {p}
              </p>
            ))}
          </div>
          <Pills items={items} />
        </div>
      </div>
    </section>
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
        <div className="absolute inset-[-12%_0] z-0" data-parallax="0.2">
          <Image
            src="/amenities-banner.webp"
            alt="Legacy by Gaurs amenities — the House of Royals pool at Jaypee Greens, Greater Noida"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center hero-kenburns"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0F1535]/80 z-10" />
        <div className="absolute inset-0 banner-lines z-10 pointer-events-none" />

        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="hero-anim hero-anim-1 inline-block text-[#DCA54A] text-sm md:text-base uppercase tracking-[0.35em] font-semibold mb-3">
            Lifestyle
          </span>
          <SplitText
            as="h3"
            text="Three Worlds of Indulgence"
            delay={250}
            className="block text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight text-[#F5E7C8]"
          />
          <div className="line-grow mx-auto mb-5 h-[2px] w-28" style={{ background: "linear-gradient(90deg, transparent, #DCA54A, transparent)" }} />
          <p className="hero-anim hero-anim-3 text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
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
          <h1 data-reveal="up" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Legacy by Gaurs Amenities
          </h1>

          <p data-reveal="up" data-reveal-delay="100" className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
            At Legacy by Gaurs, amenities are not an afterthought — they are the
            architecture of the lifestyle. Tee off at dawn on an 18-hole Greg Norman
            course, swim an indoor heated lap through the winter, take the sky bridge
            between towers for a yoga session above the treeline, and end the evening in
            a private theatre or the billiards lounge of the House of Royals.
          </p>
          <p data-reveal="up" data-reveal-delay="180" className="text-lg md:text-xl leading-relaxed text-gray-700">
            Three distinct amenity worlds sit stacked within the project: the{" "}
            <strong>House of Royals</strong> clubhouse, the <strong>HELIX</strong> sky
            bridge suspended between the towers, and the <strong>Windsor</strong>{" "}
            landscaped podium below. Around them lies Jaypee Greens — Noida&apos;s most
            famed luxury township.
          </p>
        </div>
      </section>

      <Marquee
        items={["House of Royals", "Club Imperial", "HELIX Sky Bridge", "Windsor Podium", "Indoor Heated Pool", "Spa & Wellness", "Private Theatre", "18-Hole Golf Course"]}
      />

      {/* House of Royals */}
      <WorldSection
        index="01"
        eyebrow="The Clubhouse"
        title="House of Royals — Club Imperial"
        image={clubhouseImg}
        imageAlt="House of Royals clubhouse at Legacy by Gaurs, Jaypee Greens"
        tint="bg-gray-50"
        paras={[
          "An epitome of luxury and modernity, this ultra-modern clubhouse is designed to offer an unparalleled experience of leisure and recreation. Whether you seek relaxation or an active lifestyle, Club Imperial ensures every need is met with its comprehensive range of amenities.",
          "Dine like royalty without leaving your castle; wake to a pool view that soothes the soul; host your grandest moments in a regal party hall.",
        ]}
        items={clubImperial}
      />

      {/* HELIX */}
      <WorldSection
        index="02"
        flip
        eyebrow="The Sky-High Luxuries"
        title="HELIX — The Sky Bridge"
        image={skyBridgeImg}
        imageAlt="HELIX sky bridge connecting the towers at Legacy by Gaurs"
        paras={[
          "Step into the sky walk — a serene zone above the ordinary. From yoga decks and herbal gardens to indoor games and trellis walks, it is where wellness meets recreation. A perfect blend of greenery and activity, crafted to elevate everyday living.",
          "A bridge between towers, and a statement beyond living.",
        ]}
        items={helix}
      />

      {/* Windsor */}
      <WorldSection
        index="03"
        eyebrow="Reserved for the Few"
        title="Windsor — The Landscaped Podium"
        image={gardensImg}
        imageAlt="Windsor landscaped podium gardens at Legacy by Gaurs"
        tint="bg-gray-50"
        paras={[
          "More than just a garden, it is a carefully-crafted escape where every plant and tree is chosen to enhance your sense of peace and well-being. From the tot lot for the little ones to the mid-teens play area, every child has a space to enjoy — while fitness buffs make use of the open gym, walking tracks and courts.",
          "Landscaped to perfection, designed for indulgence.",
        ]}
        items={windsor}
      />

      <StatsBand
        eyebrow="Amenities at a Glance"
        title="A Resort Above the Fairways"
        stats={[
          { value: String(clubImperial.length), label: "Club Imperial facilities" },
          { value: String(helix.length), label: "HELIX sky-bridge features" },
          { value: String(windsor.length), label: "Windsor podium spaces" },
          { value: "18", label: "Hole Greg Norman golf course" },
        ]}
      />

      {/* Township */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 data-reveal="up" className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            And Beyond — Life at Jaypee Greens
          </h2>
          <p data-reveal="up" data-reveal-delay="100" className="text-lg text-center max-w-3xl mx-auto text-gray-700 mb-12">
            Legacy by Gaurs sits inside an established township with an identity of its
            own — one meant to impact and evolve lifestyles not just across one
            lifetime, but several.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger="90">
            {township.map((t) => (
              <div key={t.name} data-reveal="up">
                <div data-tilt className="h-full bg-gray-50 rounded-xl p-6 border-l-4 border-[#DCA54A]">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{t.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/about-legacy-by-gaurs" className="link-draw text-[#DCA54A] font-medium">
              About Legacy by Gaurs →
            </Link>
            <Link href="/about-gaurs-group" className="link-draw text-[#DCA54A] font-medium">
              About Gaurs Group →
            </Link>
            <Link href="/floor-plans" className="link-draw text-[#DCA54A] font-medium">
              Explore Floor Plans →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 bg-[#1A2352] overflow-hidden">
        <div className="absolute inset-0 banner-lines pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center" data-reveal="up">
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
              data-magnetic
              className="btn-shine px-8 py-4 bg-[#DCA54A] text-white font-semibold rounded-lg hover:bg-[#C08F3C] transition-colors text-lg"
            >
              Enquire Now
            </Link>
            <Link
              href="/location-connectivity"
              data-magnetic
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
