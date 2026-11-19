import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/data/seo";
import { brand } from "@/data/brand";
import { guideMedia as m, heroFilms, guideVideos } from "@/data/guideMedia";
import { guideSchema } from "@/utils/guideSchema";
import GuideHero from "@/components/guides/GuideHero";
import GuidePicture from "@/components/guides/GuidePicture";
import ChapterNav from "@/components/guides/ChapterNav";
import SectionHeading from "@/components/guides/SectionHeading";
import CtaButton from "@/components/guides/CtaButton";
import CtaBand from "@/components/guides/CtaBand";
import CompareSlider from "@/components/guides/CompareSlider";
import HomeFitQuiz from "@/components/guides/HomeFitQuiz";
import YouTubeCard from "@/components/guides/YouTubeCard";
import RelatedGuides from "@/components/guides/RelatedGuides";
import JsonLd from "@/components/guides/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import EnquirySection from "@/components/EnquirySection";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

// Content: "LEGACY BY GAURS VILLA VS FLATS" doc. Published as a standalone
// page (not under /blogs), so the doc's /blogs/... slug and canonical are
// dropped for /villa-vs-flat-legacy-by-gaurs.

const PUBLISHED = "2026-11-18";
const base = pageMetadata("villaVsFlat", {
  keywords: [
    "villa vs flat",
    "villa vs flat at Legacy by Gaurs",
    "Gaurs Legacy",
    "Legacy by Gaurs",
    "villa or flat which is better",
    "difference between villa and flat",
    "luxury villas in Greater Noida",
    "4 BHK luxury apartments in Greater Noida",
    "luxury apartments in Jaypee Greens",
    "golf course property in Greater Noida",
    "property near Pari Chowk",
  ],
});

export const metadata: Metadata = {
  ...base,
  openGraph: {
    ...base.openGraph,
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
  },
};

const PHONE = brand.partner.phone;

const faqs = [
  {
    question: "Villa vs flat at Legacy by Gaurs: which should I choose?",
    answer:
      "Choose a villa if you want a private terrace, basement space and a rare home that’s one of only twenty. Choose a condominium if you want golf views from height, single-level living and a home that’s easier to fit out and resell.",
  },
  {
    question: "How many villas are there at Legacy by Gaurs?",
    answer: "Twenty Legacy Villas, built alongside the four condominium towers.",
  },
  {
    question: "What sizes are the Legacy condominiums?",
    answer:
      "All are 4 BHK, with carpet areas from 1,912 to 2,409 sq. ft. and total areas from 3,510 to 4,765 sq. ft.",
  },
  {
    question: "Why is the total area so much larger than the carpet area?",
    answer:
      "The total area includes the covered area, the balconies and a share of the common floor area of 519.26 sq. ft. per floor. Use carpet area when you compare homes.",
  },
  {
    question: "What is the price of Legacy by Gaurs?",
    answer:
      "Prices for the villas and the condominiums are shared on request. Gaurs Group hasn’t published a public price list for the project.",
  },
  {
    question: "Are the homes handed over furnished?",
    answer:
      "No. Units are handed over as a raw structure with the façade complete, and interiors are the buyer’s responsibility.",
  },
  {
    question: "How well connected is Legacy by Gaurs?",
    answer:
      "It’s close to Delta 1 Metro Station on the Aqua Line, with direct access to the Yamuna Expressway and Pari Chowk nearby.",
  },
  {
    question: "Is Legacy by Gaurs RERA registered?",
    answer: "Yes, under UP RERA number UPRERAPRJ688396/10/2024. You can verify it on up-rera.in.",
  },
];

const chapters = [
  { id: "two-homes", label: "The Two Homes" },
  { id: "space", label: "Space" },
  { id: "privacy", label: "Privacy & Setting" },
  { id: "interiors", label: "Interiors" },
  { id: "price", label: "Price" },
  { id: "upkeep", label: "Upkeep" },
  { id: "amenities", label: "Amenities" },
  { id: "resale", label: "Scarcity & Resale" },
  { id: "location", label: "Location" },
  { id: "film", label: "Film" },
  { id: "decide", label: "Which Home?" },
  { id: "questions", label: "Before You Buy" },
  { id: "faqs", label: "FAQs" },
];

const glance = [
  ["Homes", "20 villas", "265 condominiums"],
  ["Shape", "Basement to terrace", "Single-level 4 BHK"],
  ["Carpet area", "On request", "1,912–2,409 sq. ft."],
];

const comparison = [
  ["How many", "20 Legacy Villas", "265, across four towers"],
  ["Shape of the home", "A vertical house: single or double basement, ground to terrace", "A single-level 4 BHK in a 34-floor tower"],
  ["Size", "Shared on request", "1,912–2,409 sq. ft. carpet (3,510–4,765 sq. ft. total)"],
  ["Privacy & setting", "Your own entrance, a terrace, no neighbours above or below", "Height: golf course views from the upper floors"],
  ["Interiors", "Several levels plus basements to fit out", "One level to fit out"],
  ["Upkeep", "Basement waterproofing, pumps, terrace resealing and staff", "Your upkeep stays inside the home; building systems are managed"],
  ["Resale", "Scarce, with few buyers and few past sales to set a price", "A wider pool of buyers and more comparable sales"],
  ["Price", "On request", "On request"],
  ["Shared by both", "The club, the golf course, the gate and 24×7 security", "The club, the golf course, the gate and 24×7 security"],
];

const amenities = [
  "House of Royals clubhouse",
  "Indoor heated pool",
  "Kids’ pool & Jacuzzi",
  "Gym & yoga area",
  "Spa & sauna",
  "Private & open-air theatres",
  "Restaurant, café & party hall",
  "HELIX Sky Bridge",
  "Sports & herbal gardens",
  "Gated community, 24×7 security",
];

const connectivity = [
  "Delta 1 Metro Station · Aqua Line",
  "Direct access to the Yamuna Expressway",
  "Link to the Noida–Greater Noida Expressway",
  "Pari Chowk nearby",
  "The Atlantic Sports Complex nearby",
];

const chooseVilla = [
  "You want a private terrace, your own entrance and no neighbours above you",
  "You want basement space for cars, storage, a theatre or staff",
  "You’re happy to manage a larger fit-out and a house with several levels",
  "You value rarity, being one of just twenty owners",
];

const chooseCondo = [
  "You want golf course views from height",
  "You want single-level living with a lift",
  "You’d rather fit out one floor than several",
  "You want a home that’s easier to price, rent out or sell later",
];

const linkCls = "link-draw font-semibold text-[#a8841e] hover:text-[#7a5c12]";

export default function VillaVsFlatPage() {
  const schema = guideSchema({
    path: "/villa-vs-flat-legacy-by-gaurs",
    headline: "Villa vs Flat at Legacy by Gaurs: Legacy Villa or Condominium?",
    description:
      "Villa vs flat at Gaurs Legacy, Jaypee Greens: compare the 20 Legacy Villas with 4 BHK golf-side condominiums on space, privacy, interiors, upkeep and resale.",
    image: "/og/villa-vs-flat-legacy-by-gaurs.webp",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    faqs,
    crumb: "Villa vs Flat at Legacy by Gaurs",
  });

  return (
    <>
      <JsonLd data={schema} />
      <ModalWrapper />

      <GuideHero
        media={m.legacyVillas}
        film={heroFilms.villaVsFlat}
        crumb="Villa vs Flat"
        eyebrow="Buyer’s Guide · Jaypee Greens"
        title="Villa vs Flat at Legacy by Gaurs: Legacy Villa or Condominium?"
        lead={
          <p>
            Most buyers compare villas and flats across different projects. At Gaurs Legacy you can
            compare them within one gated address, because the project has 20 individually crafted
            Legacy Villas alongside its towers. The same club, the same golf course and the same gate
            serve both, so what’s left to decide is how you want to live.
          </p>
        }
        ctas={[
          { label: "Get Price List", href: "#book-site-visit", icon: "price", variant: "gold", cta: "hero-price" },
          { label: "Download Brochure", action: "brochure", icon: "download", variant: "glass", cta: "hero-brochure" },
          { label: `Call ${PHONE}`, href: brand.partner.phoneHref, icon: "phone", variant: "glass", cta: "hero-call" },
        ]}
        chips={["20 Legacy Villas", "265 4 BHK condominiums", `RERA ${brand.rera.number}`]}
        aside={
          <div className="glass-panel rounded-3xl p-7 shadow-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#DCA54A]">At a glance</p>
            <div className="mt-5 grid grid-cols-[auto_1fr_1fr] gap-x-5 gap-y-4 text-sm">
              <span />
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#F5E7C8]">Villa</span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#F5E7C8]">Condominium</span>
              {glance.map(([k, a, b]) => (
                <div key={k} className="contents">
                  <span className="text-white/55">{k}</span>
                  <span className="text-white">{a}</span>
                  <span className="text-white">{b}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-white/10 pt-5 text-sm text-white/70">
              Shared by both: the club, the golf course and the gate.
            </p>
          </div>
        }
      />

      <ChapterNav chapters={chapters} />

      {/* Intro + numbers */}
      <section className="relative bg-white px-6 pb-8 pt-20 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <p
            data-reveal="up"
            className="max-w-4xl text-xl leading-relaxed text-[#2b3050] md:text-[1.65rem] md:leading-[1.55]"
          >
            This guide covers villa vs flat at Legacy by Gaurs: what each home gives you, what each one
            asks of you, and who each suits. If you’ve been wondering “villa or flat, which is better?”,
            this is the version of the question that’s easiest to answer, because everything except the
            home itself stays the same.
          </p>

          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[#ece4d0] bg-[#ece4d0] md:grid-cols-5" data-stagger="80">
            {[
              ["20", "Legacy Villas"],
              ["265", "4 BHK condominiums"],
              ["4", "Towers"],
              ["34", "Floors per tower"],
              ["8", "Unit plans"],
            ].map(([n, l]) => (
              <div key={l} data-reveal="up" className="bg-white px-6 py-8 text-center last:col-span-2 md:last:col-span-1">
                <dt className="sr-only">{l}</dt>
                <dd>
                  <span data-count className="block text-4xl font-bold text-[#141a3d] md:text-5xl" style={{ fontFamily: "var(--font-work-sans)" }}>
                    {n}
                  </span>
                  <span className="mt-2 block text-[11px] uppercase tracking-[0.22em] text-[#8a6a14]">{l}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 01 — The two homes */}
      <section id="two-homes" className="guide-section bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading index={1} eyebrow="Legacy villa or condominium" title="The Two Homes at Legacy" />

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                media: m.towerGolf,
                tag: "265 homes · 4 towers",
                title: "The condominiums",
                body: (
                  <>
                    There are 265 condominiums across four towers, Buckingham, Edinburgh, Kensington and
                    Versailles, each 34 floors high. Every one is a 4 BHK with four toilets, a utility area
                    and a foyer, with carpet areas from 1,912 to 2,409 sq. ft. and two to three balconies.
                    Choose from eight unit plans.
                  </>
                ),
                link: { href: "/floor-plans", label: "See the eight unit plans" },
              },
              {
                media: m.legacyVillas,
                tag: "Only 20",
                title: "The villas",
                body: (
                  <>
                    There are only twenty. The villas are described as single and double basement, ground
                    to terrace, which means a multi-level house with space below ground for parking,
                    storage, a home theatre or staff quarters. Villa sizes and prices are shared on request.
                  </>
                ),
                link: { href: "/villas-configurations", label: "Explore the Legacy Villas" },
              },
            ].map((card, i) => (
              <article
                key={card.title}
                data-reveal={i === 0 ? "left" : "right"}
                className="group overflow-hidden rounded-3xl border border-[#ece4d0] bg-[#FAF8F4]"
              >
                <div className="zoom-frame relative aspect-[16/11] overflow-hidden">
                  <GuidePicture media={card.media} sizes="(max-width: 768px) 100vw, 560px" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1535]/70 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1A2352] backdrop-blur">
                    {card.tag}
                  </span>
                  <h3 className="absolute bottom-5 left-6 text-3xl font-bold text-[#F5E7C8]">{card.title}</h3>
                </div>
                <div className="p-7">
                  <p className="leading-relaxed text-[#4a4f66]">{card.body}</p>
                  <Link href={card.link.href} className={`mt-5 inline-block text-sm ${linkCls}`}>
                    {card.link.label} →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p data-reveal="up" className="mx-auto mt-16 max-w-3xl text-center text-lg leading-relaxed text-[#2b3050] md:text-xl">
            So the difference between villa and flat here isn’t the address. It’s the shape of the home:
            a vertical house with its own terrace and basements, or a single-level 4 BHK high above the
            golf course.
          </p>

          <div data-reveal="zoom" className="mt-12">
            <CompareSlider
              left={m.legacyVillas}
              right={m.towerGolf}
              leftLabel="Legacy Villa"
              rightLabel="Condominium"
              caption="Drag to compare — a vertical house with its own terrace, or a 4 BHK high above the golf course. Artistic impressions."
            />
          </div>
        </div>
      </section>

      {/* 02 — Space */}
      <section id="space" className="guide-section bg-[#FAF8F4] px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeading index={2} eyebrow="Carpet first" title="Space" />
            <div className="space-y-5 text-[17px] leading-relaxed text-[#4a4f66]" data-reveal="up">
              <p>
                Read the condominium figures carefully. The total area includes covered area, balcony area
                and a common floor area of 519.26 sq. ft. per floor. For example, Unit 02 in Buckingham has
                1,912.55 sq. ft. of carpet area against a total area of 3,510 sq. ft., so the carpet area is
                a little over half the total. Use carpet area when you compare.
              </p>
              <p>
                The villas spread their space over several levels, including the basements. When you ask
                for villa details, get the plot size, the built-up area of each level, and how much of the
                basement is usable living space.
              </p>
              <p>
                <Link href="/super-built-up-area-vs-carpet-area" className={linkCls}>
                  Read our guide to super built-up area vs carpet area →
                </Link>
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div data-reveal="up" className="rounded-3xl border border-[#ece4d0] bg-white p-7 shadow-[0_30px_60px_-45px_rgba(26,35,82,0.5)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#a8841e]">Unit 02 · Buckingham</p>
              <div className="mt-6 space-y-5">
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-[#4a4f66]">Total area</span>
                    <span className="font-semibold text-[#141a3d]">3,510 sq. ft.</span>
                  </div>
                  <div className="h-4 overflow-hidden rounded-full bg-[#f1ead8]">
                    <div className="bar-fill h-full w-full rounded-full bg-[#1A2352]/80" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-[#4a4f66]">Carpet area</span>
                    <span className="font-semibold text-[#141a3d]">1,912.55 sq. ft.</span>
                  </div>
                  <div className="h-4 overflow-hidden rounded-full bg-[#f1ead8]">
                    <div className="bar-fill h-full rounded-full bg-gradient-to-r from-[#dca54a] to-[#a8841e]" style={{ width: "54.5%" }} />
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-[#5b6078]">Carpet is a little over half the total.</p>
            </div>

            <div data-reveal="up" data-reveal-delay="120" className="rounded-3xl bg-[#0F1535] p-7 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#DCA54A]">Asking about a villa? Get:</p>
              <ul className="mt-4 space-y-3">
                {["The plot size", "The built-up area of each level", "How much of the basement is usable living space"].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-white/85">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#DCA54A]" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <CtaButton href="#book-site-visit" variant="gold" icon="file" cta="space-villa-details">
                  Request Villa Details
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Privacy */}
      <section id="privacy" className="guide-section relative overflow-hidden bg-white px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div data-reveal="left" className="relative overflow-hidden rounded-3xl">
            <div className="aspect-[4/5] md:aspect-[5/4]">
              <div className="absolute inset-[-10%_0]" data-parallax="0.1">
                <GuidePicture media={m.towerLake} sizes="(max-width: 1024px) 100vw, 600px" className="h-full w-full object-cover" />
              </div>
            </div>
            <span className="absolute bottom-4 left-4 rounded-full bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/80 backdrop-blur">
              Artistic impression
            </span>
          </div>
          <div>
            <SectionHeading index={3} eyebrow="Terrace or height" title="Privacy and Setting" />
            <p data-reveal="up" className="text-[17px] leading-relaxed text-[#4a4f66]">
              A Legacy Villa gives you your own entrance, a terrace and no neighbours above or below. A
              condominium gives you height. The master plan places the villas alongside the towers, with
              the golf course on one side and Pari Chowk on the other. If you want to see the course from
              your living room, an upper-floor condominium does that better than a villa at ground level.
            </p>
            <div data-reveal="up" className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#ece4d0] p-5">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#a8841e]">Villa</p>
                <p className="mt-2 text-sm text-[#2b3050]">Own entrance · terrace · nobody above or below</p>
              </div>
              <div className="rounded-2xl border border-[#ece4d0] p-5">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#1A2352]">Condominium</p>
                <p className="mt-2 text-sm text-[#2b3050]">Height · golf course views from upper floors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — Interiors */}
      <section id="interiors" className="guide-section relative isolate overflow-hidden bg-[#0F1535] px-6 py-20 text-white md:py-28">
        <div className="absolute inset-0 -z-10 opacity-25">
          <GuidePicture media={m.livingArea} sizes="100vw" className="h-full w-full object-cover" alt="" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0F1535] via-[#0F1535]/90 to-[#0F1535]" />
        <div className="mx-auto max-w-6xl">
          <SectionHeading index={4} dark eyebrow="The detail most buyers miss" title="Interiors: Both Homes Are a Blank Canvas" />
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div className="space-y-5 text-[17px] leading-relaxed text-white/80" data-reveal="up">
              <p>
                This is the detail most buyers miss. Units are handed over as a raw structure with façade
                development, and any work not listed in the specifications falls within the buyer’s scope.
                Whether you choose a villa or a condominium, plan your interiors budget and timeline from
                day one.
              </p>
              <p>
                The difference is scale. A condominium means fitting out one level. A villa means fitting out
                several levels plus the basements, with more wet areas, more lighting and more joinery. That
                gives you more freedom to design, along with a bigger bill and a longer fit-out.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass-panel rounded-2xl p-5">
                  <p className="text-3xl font-bold text-[#F5E7C8]" style={{ fontFamily: "var(--font-work-sans)" }}>1</p>
                  <p className="mt-1 text-sm text-white/70">level to fit out in a condominium</p>
                </div>
                <div className="glass-panel rounded-2xl p-5">
                  <p className="text-3xl font-bold text-[#F5E7C8]" style={{ fontFamily: "var(--font-work-sans)" }}>Several</p>
                  <p className="mt-1 text-sm text-white/70">levels plus basements in a villa</p>
                </div>
              </div>
            </div>
            <figure data-reveal="right" className="overflow-hidden rounded-3xl ring-1 ring-white/10">
              <div className="zoom-frame aspect-[4/3] overflow-hidden">
                <GuidePicture media={m.livingArea} sizes="(max-width: 1024px) 100vw, 620px" className="h-full w-full object-cover" />
              </div>
              <figcaption className="bg-white/5 px-5 py-3 text-xs text-white/60">
                Show-home styling, for illustration (artistic impression). Homes are handed over as a raw
                structure with the façade complete.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 05 — Price */}
      <section id="price" className="guide-section bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading index={5} eyebrow="Priced on request" title="Price" />
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div className="space-y-5 text-[17px] leading-relaxed text-[#4a4f66]" data-reveal="up">
              <p>
                Gaurs Group has not published a public price list for this project, so both formats are
                priced on request. To get a sense of the market, recent listings of luxury villas in Greater
                Noida’s Jaypee Greens township include older town-home villas at about ₹9.98–10.75 crore and
                an established villa project at ₹14.04–16.2 crore.
              </p>
              <p>
                Add the usual costs to whichever home you choose. GST applies to under-construction units,
                maintenance is billed by carpet area, and club membership is a one-time fee where it applies.
                Lenders typically finance about 75–80% of the property value, subject to eligibility. Ask for
                the official price list on the{" "}
                <Link href="/price" className={linkCls}>
                  price
                </Link>{" "}
                page.
              </p>
              <div className="flex flex-wrap gap-3 pt-3">
                <CtaButton href="#book-site-visit" icon="price" cta="price-official-list">
                  Request the Official Price List
                </CtaButton>
                <CtaButton href="/price" variant="outline" cta="price-page">
                  View Price Page
                </CtaButton>
              </div>
            </div>

            <div className="space-y-4" data-stagger="100">
              <p data-reveal="up" className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#a8841e]">
                Market reference · other Jaypee Greens villas, not Legacy prices
              </p>
              {[
                ["₹9.98–10.75 Cr", "Older town-home villas in Jaypee Greens (recent listings)"],
                ["₹14.04–16.2 Cr", "An established villa project in Jaypee Greens (recent listings)"],
              ].map(([v, l]) => (
                <div key={v} data-reveal="up" className="card-lift rounded-3xl border border-[#ece4d0] bg-[#FAF8F4] p-6">
                  <p className="text-3xl font-bold text-[#141a3d]" style={{ fontFamily: "var(--font-work-sans)" }}>{v}</p>
                  <p className="mt-1 text-sm text-[#5b6078]">{l}</p>
                </div>
              ))}
              <ul data-reveal="up" className="flex flex-wrap gap-2 pt-2">
                {["GST on under-construction units", "Maintenance billed by carpet area", "One-time club membership", "Loans ~75–80% of value"].map((c) => (
                  <li key={c} className="rounded-full border border-[#e2d6b8] px-3.5 py-1.5 text-xs text-[#5c4a2a]">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        media={m.towerPariChowk}
        eyebrow="Twenty villas · Four towers · One gate"
        title="Get the official price list for both homes"
        text="Prices for the Legacy Villas and the condominiums are shared on request. Share your details for the price list, or visit the site at Jaypee Greens with our team."
        ctas={[
          { label: "Get Price List", href: "#book-site-visit", icon: "price", variant: "gold", cta: "band-price" },
          { label: "Download Brochure", action: "brochure", icon: "download", variant: "glass", cta: "band-brochure" },
          { label: `Call ${PHONE}`, href: brand.partner.phoneHref, icon: "phone", variant: "glass", cta: "band-call" },
        ]}
      />

      {/* 06 — Upkeep */}
      <section id="upkeep" className="guide-section bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading index={6} eyebrow="Living with it" title="Upkeep" />
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <p data-reveal="up" className="text-[17px] leading-relaxed text-[#4a4f66]">
              A multi-level villa with basements needs more care than an apartment. Basements need good
              waterproofing and pumps that work through the monsoon, terraces need resealing, and the house
              needs staff to run it. A condominium keeps your own upkeep to the inside of the home, while the
              building’s systems are managed for everyone. Because maintenance is billed by carpet area, you
              pay for the space you actually use.
            </p>
            <div className="grid gap-4 sm:grid-cols-2" data-stagger="100">
              <div data-reveal="up" data-tilt className="rounded-3xl bg-[#FAF8F4] p-6 ring-1 ring-[#ece4d0]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a8841e]">Villa</p>
                <ul className="mt-4 space-y-2.5 text-sm text-[#2b3050]">
                  {["Basement waterproofing", "Pumps that work through the monsoon", "Terrace resealing", "Staff to run the house"].map((t) => (
                    <li key={t} className="flex gap-2"><span className="text-[#C49A2B]">◆</span>{t}</li>
                  ))}
                </ul>
              </div>
              <div data-reveal="up" data-tilt className="rounded-3xl bg-[#1A2352] p-6 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#DCA54A]">Condominium</p>
                <ul className="mt-4 space-y-2.5 text-sm text-white/85">
                  {["Your upkeep stays inside the home", "Building systems managed for everyone", "Maintenance billed by carpet area"].map((t) => (
                    <li key={t} className="flex gap-2"><span className="text-[#DCA54A]">◆</span>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — Amenities */}
      <section id="amenities" className="guide-section bg-[#FAF8F4] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index={7}
            eyebrow="One club for both"
            title="Amenities"
            intro="Villa and condominium owners share the same club and grounds."
          />
          <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2" data-stagger="90">
            {[
              { media: m.houseOfRoyals, label: "House of Royals clubhouse", cls: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto" },
              { media: m.indoorPool, label: "Indoor heated pool", cls: "aspect-[4/3]" },
              { media: m.clubLobby, label: "Club lobby", cls: "aspect-[4/3]" },
            ].map((tile) => (
              <figure key={tile.label} data-reveal="zoom" className={`zoom-frame group relative overflow-hidden rounded-3xl ${tile.cls}`}>
                <GuidePicture media={tile.media} sizes="(max-width: 768px) 100vw, 760px" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1535]/75 via-transparent to-transparent" />
                <figcaption className="absolute bottom-4 left-5 text-sm font-semibold text-white">{tile.label}</figcaption>
              </figure>
            ))}
          </div>
          <p data-reveal="up" className="mt-10 max-w-4xl text-[17px] leading-relaxed text-[#4a4f66]">
            Facilities include the House of Royals clubhouse, an indoor heated pool, a kids’ pool and
            Jacuzzi, a gym and yoga area, a spa and sauna, private and open-air theatres, a restaurant, café
            and party hall, and the HELIX Sky Bridge with sports and herbal gardens, all within a gated
            community with 24×7 security. See the full{" "}
            <Link href="/amenities" className={linkCls}>amenities</Link> list.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" data-stagger="40">
            {amenities.map((a) => (
              <li key={a} data-reveal="zoom" className="rounded-full border border-[#e2d6b8] bg-white px-4 py-2 text-[13px] text-[#5c4a2a]">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 08 — Scarcity & resale */}
      <section id="resale" className="guide-section relative overflow-hidden bg-white px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div data-reveal="zoom" className="relative text-center lg:text-left">
            <p
              className="text-shimmer text-[9rem] font-bold leading-none md:text-[13rem]"
              style={{ fontFamily: "var(--font-work-sans)" }}
              aria-hidden="true"
            >
              20
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[#8a6a14]">villas. That’s all.</p>
          </div>
          <div>
            <SectionHeading index={8} eyebrow="Rarity has two sides" title="Scarcity and Resale" />
            <p data-reveal="up" className="text-[17px] leading-relaxed text-[#4a4f66]">
              Twenty villas is a very small number, and that scarcity is the villa’s main investment case.
              It’s also why selling one can take time: few buyers shop at that level, and there are few past
              sales to set a price. The condominiums have a wider pool of buyers and more comparable sales, so
              they’re easier to price and easier to sell. Our post on{" "}
              <Link href="/blogs/jewar-airport-legacy-by-gaurs-smart-investment-2026" className={linkCls}>
                Jewar airport and why finite supply beats a big launch
              </Link>{" "}
              explains how limited supply supports long-term value.
            </p>
          </div>
        </div>
      </section>

      {/* 09 — Location */}
      <section id="location" className="guide-section relative isolate overflow-hidden bg-[#0F1535] text-white">
        <div className="absolute inset-[-18%_0] -z-10" data-parallax="0.14">
          <GuidePicture media={m.golfGreens} sizes="100vw" className="h-full w-full object-cover opacity-55" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0B1030]/95 via-[#0F1535]/75 to-[#0F1535]/20" />
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <SectionHeading index={9} dark eyebrow="Golf course next door" title="Location" />
            <p data-reveal="up" className="text-[17px] leading-relaxed text-white/80">
              Both homes share one of the most sought-after golf course property addresses in Greater Noida.
              The project is close to Delta 1 Metro Station on the Aqua Line, has direct access to the Yamuna
              Expressway, links to the Noida–Greater Noida Expressway, and has Pari Chowk and The Atlantic
              Sports Complex nearby. If you want property near Pari Chowk with the golf course next door,
              either home works. See{" "}
              <Link href="/location-connectivity" className="link-draw font-semibold text-[#DCA54A]">
                location and connectivity
              </Link>
              .
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2" data-stagger="70">
              {connectivity.map((c) => (
                <li key={c} data-reveal="up" className="glass-panel flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/90">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#DCA54A]" />
                  {c}
                </li>
              ))}
            </ul>
            <div data-reveal="up" className="mt-10 flex flex-wrap gap-3">
              <CtaButton href="#book-site-visit" icon="calendar" cta="location-site-visit">
                Book a Site Visit
              </CtaButton>
              <CtaButton href="/location-connectivity" variant="glass" cta="location-page">
                Location & Connectivity
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* 10 — Film */}
      <section id="film" className="guide-section bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index={10}
            eyebrow="On film"
            title="See Legacy by Gaurs"
            intro="The developer’s own walkthrough of the project, and Gaurs Group’s film on three decades of building."
          />
          <div className="grid gap-10 md:grid-cols-2">
            <div data-reveal="up"><YouTubeCard video={guideVideos.officialWalkthrough} /></div>
            <div data-reveal="up" data-reveal-delay="120"><YouTubeCard video={guideVideos.gaursGroupFilm} /></div>
          </div>
        </div>
      </section>

      {/* 11 — Decide */}
      <section id="decide" className="guide-section bg-[#FAF8F4] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading index={11} eyebrow="Make the call" title="Villa or Condominium: Which Home Fits You?" />

          <div className="grid gap-6 md:grid-cols-2">
            <div data-reveal="left" className="relative overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-[#ece4d0]">
              <span aria-hidden="true" className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#DCA54A]/15 blur-2xl" />
              <h3 className="text-2xl font-bold text-[#141a3d]">Choose a Legacy Villa If</h3>
              <ul className="mt-6 space-y-4">
                {chooseVilla.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-[#4a4f66]">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DCA54A] text-[10px] font-bold text-[#0F1535]">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal="right" className="relative overflow-hidden rounded-3xl bg-[#1A2352] p-8 text-white">
              <span aria-hidden="true" className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
              <h3 className="text-2xl font-bold text-[#F5E7C8]">Choose a Legacy Condominium If</h3>
              <ul className="mt-6 space-y-4">
                {chooseCondo.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-white/85">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F5E7C8] text-[10px] font-bold text-[#1A2352]">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* At-a-glance table */}
          <div data-reveal="up" className="mt-14 overflow-x-auto rounded-3xl border border-[#ece4d0] bg-white shadow-[0_30px_60px_-50px_rgba(26,35,82,0.5)]">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">Legacy Villa compared with Legacy condominium</caption>
              <thead>
                <tr className="bg-[#0F1535] text-[11px] uppercase tracking-[0.2em]">
                  <th scope="col" className="px-6 py-4 font-semibold text-white/60">At a glance</th>
                  <th scope="col" className="px-6 py-4 font-semibold text-[#DCA54A]">Legacy Villa</th>
                  <th scope="col" className="px-6 py-4 font-semibold text-[#F5E7C8]">Legacy Condominium</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([k, a, b]) => (
                  <tr key={k} className="border-t border-[#efe7d4] transition-colors hover:bg-[#FFFBF2]">
                    <th scope="row" className="px-6 py-4 font-semibold text-[#141a3d]">{k}</th>
                    <td className="px-6 py-4 text-[#4a4f66]">{a}</td>
                    <td className="px-6 py-4 text-[#4a4f66]">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div data-reveal="up" className="mt-14">
            <HomeFitQuiz />
          </div>
        </div>
      </section>

      {/* 12 — Questions */}
      <section id="questions" className="guide-section bg-white px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading index={12} eyebrow="Diligence" title="Questions to Ask Before You Buy" />
            <p data-reveal="up" className="text-[17px] leading-relaxed text-[#4a4f66]">
              Our{" "}
              <Link href="/blogs/legacy-by-gaurs-jaypee-greens-buyers-guide-2026" className={linkCls}>
                Legacy by Gaurs buyer’s guide
              </Link>{" "}
              goes deeper on each of these.
            </p>
            <div data-reveal="up" className="mt-8 flex flex-wrap gap-3">
              <CtaButton href="#book-site-visit" variant="navy" cta="questions-ask">
                Ask Us These Questions
              </CtaButton>
              <CtaButton action="brochure" icon="download" variant="outline" cta="questions-brochure">
                Download Brochure
              </CtaButton>
            </div>
          </div>
          <ol className="space-y-4" data-stagger="80">
            {[
              <>For a villa: what are the plot size, the built-up area of each level and the usable basement area?</>,
              <>What does the specification list include at handover, and what will you need to do yourself?</>,
              <>
                What possession date is filed on UP RERA? Check the project under registration number{" "}
                {brand.rera.number} on{" "}
                <a href={brand.rera.url} target="_blank" rel="noopener noreferrer" className={linkCls}>up-rera.in</a>.
              </>,
              <>What is the maintenance rate per sq. ft. of carpet area, and what is the club fee?</>,
              <>How much will you need, and how long will it take, to fit out the home you choose?</>,
            ].map((q, i) => (
              <li key={i} data-reveal="up" className="flex gap-5 rounded-2xl border border-[#efe7d4] bg-[#FAF8F4] p-5">
                <span className="text-2xl font-bold text-[#C49A2B]" style={{ fontFamily: "var(--font-work-sans)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 leading-relaxed text-[#2b3050]">{q}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Legacy by Gaurs */}
      <section className="bg-[#FAF8F4] px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="The project" title="Legacy by Gaurs" />
            <div className="space-y-5 text-[17px] leading-relaxed text-[#4a4f66]" data-reveal="up">
              <p>
                Legacy by Gaurs is a{" "}
                <Link href="/about-gaurs-group" className={linkCls}>Gaurs Group</Link> project in Jaypee Greens,
                Greater Noida. It combines 4 BHK luxury apartments in Greater Noida’s best-known golf township
                with a small enclave of villas, which makes it one of the few luxury apartments in Jaypee
                Greens where villas are also an option.
              </p>
              <ul className="space-y-2">
                <li>
                  <strong className="text-[#141a3d]">Homes:</strong>{" "}
                  <Link href="/villas-configurations" className={linkCls}>villas and configurations</Link> and{" "}
                  <Link href="/floor-plans" className={linkCls}>floor plans</Link>
                </li>
                <li>
                  <strong className="text-[#141a3d]">More:</strong>{" "}
                  <Link href="/about-legacy-by-gaurs" className={linkCls}>About Legacy by Gaurs</Link>
                </li>
              </ul>
              <p>
                Want a bigger apartment from the same developer?{" "}
                <a href="https://theislandbygaurs.com/" target="_blank" rel="noopener" className={linkCls}>
                  The Islands by Gaurs
                </a>
                , also in Jaypee Greens, offers 4, 5 and 6 BHK condominiums.
              </p>
            </div>
          </div>
          <div data-reveal="right" className="zoom-frame overflow-hidden rounded-3xl">
            <GuidePicture media={m.balconyView} sizes="(max-width: 1024px) 100vw, 520px" className="aspect-[4/3] h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="guide-section bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeading center eyebrow="Answers" title="FAQs" />
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* Conclusion */}
      <section className="relative isolate overflow-hidden bg-[#0F1535] px-6 py-24 text-white md:py-32">
        <div className="absolute inset-0 -z-10 banner-lines opacity-60" />
        <div className="float-orb absolute -right-24 top-10 -z-10 h-96 w-96 rounded-full bg-[#DCA54A]/15 blur-3xl" />
        <div className="mx-auto max-w-4xl text-center">
          <p data-reveal="up" className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#DCA54A]">Conclusion</p>
          <h2 data-reveal="up" className="text-[1.9rem]! font-bold leading-tight text-[#F5E7C8] md:text-[2.6rem]!">
            Same address. Two ways to live.
          </h2>
          <p data-reveal="up" className="mx-auto mt-6 max-w-3xl text-[17px] leading-relaxed text-white/80">
            At Legacy, villa vs flat comes down to the home itself, not the location. A Legacy Villa gives
            you a terrace, basements and the rarity of being one of twenty, but it’s a bigger house to fit
            out and run. A condominium gives you height, golf views and one level to furnish, and it’s
            easier to sell. Whichever you pick, plan your interiors from the start, because both are handed
            over as a blank canvas.
          </p>
          <p data-reveal="up" className="mt-6 text-white/80">
            For the official price list,{" "}
            <Link href="/contact-us" className="link-draw font-semibold text-[#DCA54A]">contact us</Link> or call{" "}
            <a href={brand.partner.phoneHref} className="link-draw font-semibold text-[#DCA54A]">{PHONE}</a>.
          </p>
          <div data-reveal="up" className="mt-10 flex flex-wrap justify-center gap-3">
            <CtaButton href="#book-site-visit" icon="price" size="lg" cta="conclusion-price">
              Get the Official Price List
            </CtaButton>
            <CtaButton href={brand.partner.phoneHref} icon="phone" variant="glass" size="lg" cta="conclusion-call">
              {`Call ${PHONE}`}
            </CtaButton>
          </div>
          <p className="mx-auto mt-14 max-w-2xl text-xs italic leading-relaxed text-white/45">
            This is not the official website of the developer. It belongs to an authorised channel partner
            and is for information and marketing only. Images are artistic impressions.
          </p>
        </div>
      </section>

      <EnquirySection
        heading="Get the official price list for the Legacy Villas & condominiums"
        body={`Prices for both homes are shared on request. Leave your details and our team will send the official price list, answer the questions in this guide, and arrange a site visit at Jaypee Greens. Prefer to talk? Call ${PHONE}.`}
      />

      <RelatedGuides
        items={[
          {
            href: "/super-built-up-area-vs-carpet-area",
            media: m.livingArea,
            tag: "Guide",
            title: "Super Built-Up Area vs Carpet Area",
            text: "What total area means at Legacy by Gaurs, carpet by unit, loading, and maintenance on carpet.",
          },
          {
            href: "/blogs/legacy-by-gaurs-jaypee-greens-buyers-guide-2026",
            media: m.towerLake,
            tag: "Blog",
            title: "Legacy by Gaurs Buyer’s Guide 2026",
            text: "Towers, unit plans, villas, amenities, RERA details and a diligence checklist.",
          },
          {
            href: "/floor-plans",
            media: m.masterBedroom,
            tag: "Plans",
            title: "Floor Plans",
            text: "Tower floor plates, villa level plans and the master plan.",
          },
        ]}
      />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
