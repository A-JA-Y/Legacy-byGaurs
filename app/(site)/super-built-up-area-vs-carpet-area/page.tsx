import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/data/seo";
import { brand } from "@/data/brand";
import { condoUnits } from "@/data/residences";
import { guideMedia as m, heroFilms, guideVideos } from "@/data/guideMedia";
import { guideSchema } from "@/utils/guideSchema";
import GuideHero from "@/components/guides/GuideHero";
import GuidePicture from "@/components/guides/GuidePicture";
import ChapterNav from "@/components/guides/ChapterNav";
import SectionHeading from "@/components/guides/SectionHeading";
import CtaButton from "@/components/guides/CtaButton";
import CtaBand from "@/components/guides/CtaBand";
import AreaCalculator from "@/components/guides/AreaCalculator";
import SignChecklist from "@/components/guides/SignChecklist";
import YouTubeCard from "@/components/guides/YouTubeCard";
import RelatedGuides from "@/components/guides/RelatedGuides";
import JsonLd from "@/components/guides/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import EnquirySection from "@/components/EnquirySection";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import planBuckingham from "@/assets/plan-buckingham.webp";
import planEdinburgh from "@/assets/plan-edinburgh.webp";
import planKensington from "@/assets/plan-kensington.webp";
import planVersailles from "@/assets/plan-versailles.webp";

// Content: "thelegacybygaurs Super Built-Up Area vs Carpet Area" doc. Published
// as a standalone page (not under /blogs), so the doc's /blogs/... slug and
// canonical are dropped for /super-built-up-area-vs-carpet-area.

const PUBLISHED = "2026-11-18";
const base = pageMetadata("carpetArea", {
  keywords: [
    "super built-up area vs carpet area",
    "total area vs carpet area",
    "covered area vs carpet area",
    "maintenance on carpet area or super area",
    "price per sq. ft. on carpet area",
    "Legacy by Gaurs carpet area",
    "Legacy by Gaurs floor plans",
    "Legacy by Gaurs price",
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
    question: "What is the difference between super built-up area and carpet area?",
    answer:
      "Carpet area is the floor inside the home, including internal walls. Super built-up area adds the outer walls, balconies and a share of common areas such as lobbies, lifts and staircases.",
  },
  {
    question: "Is total area the same as super built-up area?",
    answer:
      "Yes. Total area, super area, saleable area and super built-up area all describe the home plus a share of the building. At Legacy by Gaurs, total area is covered area, balcony area and common floor area added together.",
  },
  {
    question: "What is covered area in a flat?",
    answer:
      "Covered area is usually the home measured to the outside of its walls. It includes the carpet area plus the outer walls, columns and shafts, and it is smaller than total area.",
  },
  {
    question: "What is the carpet area of a 4 BHK at Legacy by Gaurs?",
    answer:
      "It is 1,912.55, 1,937.09, 2,404.79 or 2,408.88 sq. ft., depending on the unit plan. These figures match the UP RERA record.",
  },
  {
    question: "What is the loading at Legacy by Gaurs?",
    answer: "About 83% to 98%, which means carpet is roughly half of total area. The NCR average is 41%.",
  },
  {
    question: "Is maintenance charged on carpet area or super area?",
    answer:
      "It varies by project. At Legacy by Gaurs it is billed on carpet area, so compare the monthly amount with other projects, not the rate per sq. ft.",
  },
  {
    question: "What does a raw-structure handover mean for the cost?",
    answer:
      "The fit-out is the buyer’s cost, so add it to the price before working out the rate per sq. ft. of carpet. Get the handover scope in writing first.",
  },
  {
    question: "How do I convert a rate on total area to a rate on carpet?",
    answer:
      "Multiply it by total area ÷ carpet area. For the 3,510 sq. ft. home that factor is about 1.83, so ₹1,000 on total area is about ₹1,830 on carpet.",
  },
];

const chapters = [
  { id: "total-vs-carpet", label: "Total vs Carpet" },
  { id: "carpet-at-legacy", label: "Carpet by Unit" },
  { id: "what-total-includes", label: "What Total Includes" },
  { id: "maintenance", label: "Maintenance" },
  { id: "rate-on-carpet", label: "Rate on Carpet" },
  { id: "explainer", label: "Explainer" },
  { id: "before-you-sign", label: "Before You Sign" },
  { id: "faqs", label: "FAQs" },
];

// The doc's table: eight unit plans, four sizes (areas in sq. ft.).
const sizes = [
  { plans: "Units 02, 03, 06, 07", carpet: 1912.55, total: 3510, pct: "54%", loading: "about 84%" },
  { plans: "Units 04, 05", carpet: 1937.09, total: 3540, pct: "55%", loading: "about 83%" },
  { plans: "Unit 01 (Buckingham)", carpet: 2404.79, total: 4765, pct: "50%", loading: "about 98%" },
  { plans: "Unit 08 (Versailles)", carpet: 2408.88, total: 4765, pct: "51%", loading: "about 98%" },
];

const plans = [
  { name: "Buckingham", img: planBuckingham, units: "Units 01 & 02" },
  { name: "Edinburgh", img: planEdinburgh, units: "Units 03 & 04" },
  { name: "Kensington", img: planKensington, units: "Units 05 & 06" },
  { name: "Versailles", img: planVersailles, units: "Units 07 & 08" },
];

const linkCls = "link-draw font-semibold text-[#a8841e] hover:text-[#7a5c12]";
const sqft = (n: number) => n.toLocaleString("en-IN", { maximumFractionDigits: 2 });

export default function CarpetAreaPage() {
  const schema = guideSchema({
    path: "/super-built-up-area-vs-carpet-area",
    headline: "Super Built-Up Area vs Carpet Area: What Total Area Means at Legacy by Gaurs",
    description:
      "Super built-up area vs carpet area at Legacy by Gaurs: what total area includes, carpet by unit, loading, and maintenance billed on carpet area.",
    image: "/og/super-built-up-area-vs-carpet-area.webp",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    faqs,
    crumb: "Super Built-Up Area vs Carpet Area",
  });

  return (
    <>
      <JsonLd data={schema} />
      <ModalWrapper />

      <GuideHero
        media={m.livingArea}
        film={heroFilms.carpetArea}
        crumb="Super Built-Up vs Carpet Area"
        eyebrow="Buyer’s Guide · Area Explained"
        title="Super Built-Up Area vs Carpet Area: What Total Area Means at Legacy by Gaurs"
        lead={
          <p>
            Legacy by Gaurs doesn’t use the words super built-up area. Its brochure says total area. The idea
            is the same, and so is the question every buyer should ask: how much of that total is the home
            itself?
          </p>
        }
        ctas={[
          { label: "Calculate Your Rate", href: "#rate-on-carpet", icon: "calc", variant: "gold", cta: "hero-calculator" },
          { label: "Get the Cost Sheet", href: "#book-site-visit", icon: "file", variant: "glass", cta: "hero-cost-sheet" },
          { label: `Call ${PHONE}`, href: brand.partner.phoneHref, icon: "phone", variant: "glass", cta: "hero-call" },
        ]}
        chips={["Carpet ≈ 50–55% of total area", "8 unit plans · 4 sizes", `RERA ${brand.rera.number}`]}
        aside={
          <div className="glass-panel rounded-3xl p-7 shadow-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#DCA54A]">3,510 sq. ft. home</p>
            <div className="mt-5 space-y-4">
              {[
                ["Total area", 3510, 100],
                ["Carpet area", 1912.55, 54.5],
              ].map(([k, v, w]) => (
                <div key={k as string}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="text-white/65">{k}</span>
                    <span className="font-semibold text-white">{sqft(v as number)} sq. ft.</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#F5E7C8] to-[#C49A2B]"
                      style={{ width: `${w}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-white/10 pt-5 text-sm text-white/70">
              Loading about 84% · rate on carpet = rate on total × 1.83
            </p>
          </div>
        }
      />

      <ChapterNav chapters={chapters} />

      {/* Intro */}
      <section className="bg-white px-6 pb-6 pt-20 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <p data-reveal="up" className="max-w-4xl text-xl leading-relaxed text-[#2b3050] md:text-[1.65rem] md:leading-[1.55]">
            This guide explains super built-up area vs carpet area using the project’s own figures. It
            covers what total area includes, how much of it is carpet in each home, and why the base used
            for maintenance matters.
          </p>
        </div>
      </section>

      {/* 01 — Total vs carpet */}
      <section id="total-vs-carpet" className="guide-section bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading index={1} eyebrow="Four names, one idea" title="Total Area vs Carpet Area" />
          <p data-reveal="up" className="max-w-3xl text-[17px] leading-relaxed text-[#4a4f66]">
            Developers use four names for the larger number: super built-up area, super area, saleable area
            and total area. They all mean the home plus a share of the building.
          </p>

          <div data-reveal="up" className="mt-8 flex flex-wrap items-center gap-2">
            {["Super built-up area", "Super area", "Saleable area", "Total area"].map((n) => (
              <span key={n} className="rounded-full border border-[#e2d6b8] bg-[#FAF8F4] px-4 py-2 text-sm text-[#5c4a2a]">
                {n}
              </span>
            ))}
            <span className="px-2 text-xl text-[#C49A2B]" aria-hidden="true">=</span>
            <span className="rounded-full bg-[#1A2352] px-4 py-2 text-sm font-semibold text-white">
              the home + a share of the building
            </span>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3" data-stagger="110">
            <article data-reveal="up" data-tilt className="rounded-3xl bg-gradient-to-br from-[#FFF8E8] to-white p-7 ring-1 ring-[#ecdcb4]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#a8841e]">Carpet area</p>
              <p className="mt-4 leading-relaxed text-[#2b3050]">
                <strong>Carpet area</strong> is the floor inside the home. Rooms and internal walls count.
                Outer walls, shafts, balconies and terraces don’t.
              </p>
            </article>
            <article data-reveal="up" data-tilt className="rounded-3xl bg-[#FAF8F4] p-7 ring-1 ring-[#ece4d0]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#1A2352]">Total area</p>
              <p className="mt-4 leading-relaxed text-[#2b3050]">
                <strong>Total area</strong>, at Legacy by Gaurs, is three things added together: covered
                area, balcony area and common floor area.
              </p>
            </article>
            <article data-reveal="up" data-tilt className="rounded-3xl bg-[#0F1535] p-7 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#DCA54A]">Loading</p>
              <p className="mt-4 leading-relaxed text-white/85">
                <strong className="text-white">Loading</strong> is the gap between the two, as a percentage
                of carpet:
              </p>
              <p className="mt-4 rounded-2xl bg-white/5 px-4 py-3 font-mono text-[13px] leading-relaxed text-[#F5E7C8] ring-1 ring-white/10">
                (total area − carpet area) ÷ carpet area × 100
              </p>
            </article>
          </div>

          <div data-reveal="up" className="mt-10 flex items-start gap-4 rounded-2xl border-l-4 border-[#DCA54A] bg-[#FAF8F4] p-6">
            <span className="text-2xl" aria-hidden="true">⚖️</span>
            <p className="leading-relaxed text-[#2b3050]">
              A January 2024 order from UP RERA limits apartment sales in the state to carpet area, so that
              is the figure that goes on the agreement.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — Carpet at Legacy */}
      <section id="carpet-at-legacy" className="guide-section bg-[#FAF8F4] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index={2}
            eyebrow="The project’s own figures"
            title="Carpet Area at Legacy by Gaurs"
            intro="The project has eight unit plans across four towers. They come down to four sizes:"
          />

          <div data-reveal="up" className="overflow-x-auto rounded-3xl border border-[#ece4d0] bg-white shadow-[0_30px_60px_-50px_rgba(26,35,82,0.5)]">
            <table className="w-full min-w-[720px] text-left text-sm">
              <caption className="sr-only">Carpet area, total area and loading for each Legacy by Gaurs unit plan</caption>
              <thead>
                <tr className="bg-[#0F1535] text-[11px] uppercase tracking-[0.2em] text-[#F5E7C8]">
                  <th scope="col" className="px-6 py-4 font-semibold">Unit plans</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Carpet area</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Total area</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Carpet as % of total</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Loading</th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((s) => (
                  <tr key={s.plans} className="border-t border-[#efe7d4] transition-colors hover:bg-[#FFFBF2]">
                    <th scope="row" className="px-6 py-4 font-semibold text-[#141a3d]">{s.plans}</th>
                    <td className="px-6 py-4 text-[#4a4f66]">{sqft(s.carpet)}</td>
                    <td className="px-6 py-4 font-semibold text-[#141a3d]">{sqft(s.total)}</td>
                    <td className="px-6 py-4 text-[#4a4f66]">{s.pct}</td>
                    <td className="px-6 py-4 font-semibold text-[#a8841e]">{s.loading}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p data-reveal="up" className="mt-4 text-sm italic text-[#5b6078]">
            Areas in sq. ft., from the project brochure. The carpet figures match the UP RERA record
            (177.68, 179.96, 223.41 and 223.79 sq. m, converted at 10.764).
          </p>

          {/* Visual: carpet inside total */}
          <div data-reveal="up" className="mt-12 rounded-3xl bg-white p-6 ring-1 ring-[#ece4d0] md:p-10">
            <div className="mb-6 flex flex-wrap items-center gap-5 text-xs text-[#5b6078]">
              <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-gradient-to-r from-[#dca54a] to-[#a8841e]" /> Carpet area</span>
              <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#1A2352]/15" /> Rest of total area</span>
            </div>
            <div className="space-y-6">
              {sizes.map((s) => (
                <div key={s.plans}>
                  <div className="mb-2 flex flex-wrap justify-between gap-2 text-sm">
                    <span className="font-semibold text-[#141a3d]">{s.plans}</span>
                    <span className="text-[#5b6078]">
                      {sqft(s.carpet)} of {sqft(s.total)} sq. ft. · <strong className="text-[#a8841e]">{s.pct}</strong>
                    </span>
                  </div>
                  <div className="relative h-5 overflow-hidden rounded-full bg-[#1A2352]/10" style={{ width: `${(s.total / 4765) * 100}%` }}>
                    <div
                      className="bar-fill h-full rounded-full bg-gradient-to-r from-[#dca54a] to-[#a8841e]"
                      style={{ width: `${(s.carpet / s.total) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-[#5b6078]">Bar length is proportional to total area.</p>
          </div>

          <p data-reveal="up" className="mt-14 text-lg font-semibold text-[#141a3d]">Two things stand out:</p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2" data-stagger="120">
            <article data-reveal="up" className="rounded-3xl bg-[#0F1535] p-8 text-white">
              <p className="text-5xl font-bold text-[#F5E7C8]" style={{ fontFamily: "var(--font-work-sans)" }}>~½</p>
              <h3 className="mt-4 text-xl font-semibold text-white">1. About half of total area is carpet.</h3>
              <p className="mt-3 leading-relaxed text-white/75">
                In the smaller homes it is 54% to 55%. In the two 4,765 sq. ft. homes it is about 50%. NCR’s
                average loading is 41% on ANAROCK’s figures, which works out to carpet of about 71% of super
                area.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="text-2xl font-bold text-[#DCA54A]">50–55%</p>
                  <p className="mt-1 text-xs text-white/60">Carpet share at Legacy</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="text-2xl font-bold text-white">~71%</p>
                  <p className="mt-1 text-xs text-white/60">At NCR’s 41% average loading</p>
                </div>
              </div>
            </article>
            <article data-reveal="up" className="rounded-3xl bg-white p-8 ring-1 ring-[#ece4d0]">
              <p className="text-5xl font-bold text-[#141a3d]" style={{ fontFamily: "var(--font-work-sans)" }}>+1,255</p>
              <h3 className="mt-4 text-xl font-semibold text-[#141a3d]">2. The bigger home adds less carpet than you’d expect.</h3>
              <p className="mt-3 leading-relaxed text-[#4a4f66]">
                Moving from 3,510 to 4,765 sq. ft. adds 1,255 sq. ft. of total area and 492 sq. ft. of
                carpet. Ask where the other 763 sq. ft. goes before you pay for it.
              </p>
              <div className="mt-6">
                <div className="flex h-10 overflow-hidden rounded-full text-[11px] font-semibold">
                  <div className="flex items-center justify-center bg-gradient-to-r from-[#dca54a] to-[#a8841e] text-[#0F1535]" style={{ width: `${(492 / 1255) * 100}%` }}>
                    492 carpet
                  </div>
                  <div className="flex flex-1 items-center justify-center bg-[#1A2352] text-white">763 elsewhere</div>
                </div>
                <p className="mt-2 text-xs text-[#5b6078]">Of the 1,255 sq. ft. extra total area</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 03 — Covered, balcony, common */}
      <section id="what-total-includes" className="guide-section bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index={3}
            eyebrow="Inside the total"
            title="Covered Area, Balcony Area and Common Floor Area"
            intro="The brochure defines total area as three parts:"
          />
          <div className="grid gap-6 md:grid-cols-3" data-stagger="110">
            {[
              {
                media: m.masterBedroom,
                title: "Covered area",
                body: "Covered area is usually the home measured to the outside of its walls. It holds the carpet area plus the outer walls, columns and shafts.",
              },
              {
                media: m.balconyView,
                title: "Balcony area",
                body: "Balcony area covers the two or three balconies each home has. They sit outside carpet.",
              },
              {
                media: m.lobbyView,
                title: "Common floor area",
                body: "Common floor area is the shared space on your floor, such as the lift lobby and staircase. The brochure puts it at 519.26 sq. ft. per floor.",
              },
            ].map((c, i) => (
              <article key={c.title} data-reveal="up" className="group overflow-hidden rounded-3xl border border-[#ece4d0] bg-[#FAF8F4]">
                <div className="zoom-frame relative aspect-[4/3] overflow-hidden">
                  <GuidePicture media={c.media} sizes="(max-width: 768px) 100vw, 380px" className="h-full w-full object-cover" />
                  <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#0F1535]/80 text-sm font-bold text-[#F5E7C8] backdrop-blur">
                    {i + 1}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#141a3d]">{c.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#4a4f66]">{c.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div data-reveal="up" className="mt-12 grid gap-8 rounded-3xl bg-[#0F1535] p-8 text-white md:grid-cols-[auto_1fr] md:items-center md:p-10">
            <div className="text-center md:text-left">
              <p className="text-6xl font-bold text-[#F5E7C8]" style={{ fontFamily: "var(--font-work-sans)" }}>1,597</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/55">sq. ft. beyond carpet</p>
            </div>
            <div>
              <p className="leading-relaxed text-white/80">
                In the 3,510 sq. ft. home these add up to about 1,597 sq. ft. beyond carpet. The split isn’t
                published, so ask for the covered area and the balcony area of your unit. With those two
                figures you can see exactly what you’re paying for.
              </p>
              <div className="mt-6">
                <CtaButton href="#book-site-visit" icon="file" cta="split-request">
                  Ask for Your Unit’s Split
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        media={m.towerGolf}
        eyebrow="Before you pay for it"
        title="Get the split of total area — in writing"
        text="Ask for the covered area, balcony area and common floor area of your unit, with the cost sheet and the handover scope."
        ctas={[
          { label: "Request Area Statement", href: "#book-site-visit", icon: "file", variant: "gold", cta: "band-area-statement" },
          { label: "Download Brochure", action: "brochure", icon: "download", variant: "glass", cta: "band-brochure" },
          { label: `Call ${PHONE}`, href: brand.partner.phoneHref, icon: "phone", variant: "glass", cta: "band-call" },
        ]}
      />

      {/* 04 — Maintenance */}
      <section id="maintenance" className="guide-section bg-white px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading index={4} eyebrow="Read the base, not just the rate" title="Maintenance on Carpet Area" />
            <div className="space-y-5 text-[17px] leading-relaxed text-[#4a4f66]" data-reveal="up">
              <p>At Legacy by Gaurs, maintenance is billed on carpet area. That changes how a rate should be read.</p>
              <p>
                Take ₹10 per sq. ft. a month as an example. On 1,913 sq. ft. of carpet it comes to about
                ₹19,100. The same rate on 3,510 sq. ft. of total area would be ₹35,100.
              </p>
              <p>
                A project that bills on carpet will usually quote a higher rate per sq. ft. than one that
                bills on super area, because the same costs are spread over a smaller number. So compare the
                monthly amount between projects, never the rate alone. The actual rate here is confirmed on
                the cost sheet.
              </p>
            </div>
          </div>
          <div data-reveal="right" className="rounded-3xl bg-[#FAF8F4] p-8 ring-1 ring-[#ece4d0] md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#a8841e]">Example · ₹10 / sq. ft. / month</p>
            <div className="mt-8 space-y-7">
              <div>
                <div className="mb-2 flex items-end justify-between">
                  <span className="text-sm text-[#2b3050]">On 1,913 sq. ft. of carpet</span>
                  <span className="text-3xl font-bold text-[#a8841e]" style={{ fontFamily: "var(--font-work-sans)" }}>₹19,100</span>
                </div>
                <div className="h-5 overflow-hidden rounded-full bg-[#ece4d0]">
                  <div className="bar-fill h-full rounded-full bg-gradient-to-r from-[#dca54a] to-[#a8841e]" style={{ width: `${(19100 / 35100) * 100}%` }} />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-end justify-between">
                  <span className="text-sm text-[#2b3050]">On 3,510 sq. ft. of total area</span>
                  <span className="text-3xl font-bold text-[#141a3d]" style={{ fontFamily: "var(--font-work-sans)" }}>₹35,100</span>
                </div>
                <div className="h-5 overflow-hidden rounded-full bg-[#ece4d0]">
                  <div className="bar-fill h-full w-full rounded-full bg-[#1A2352]" />
                </div>
              </div>
            </div>
            <p className="mt-8 text-xs leading-relaxed text-[#5b6078]">
              The maintenance figure is an example, not the project’s rate.
            </p>
          </div>
        </div>
      </section>

      {/* 05 — Rate on carpet */}
      <section id="rate-on-carpet" className="guide-section bg-[#FAF8F4] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading index={5} eyebrow="The number that matters" title="Price per Sq. Ft. on Carpet Area" />
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-5 text-[17px] leading-relaxed text-[#4a4f66]" data-reveal="up">
              <p>
                Prices are on request. Whatever rate you’re quoted on total area, multiply it by total ÷
                carpet to see it on carpet.
              </p>
              <p>
                There is one more step at this project. Homes are handed over as a raw structure with the
                façade finished, and work outside the listed specifications is the buyer’s to do. Get the
                handover scope in writing, price the fit-out, and add it.
              </p>
              <p>
                The rate that tells the truth is (price + fit-out + other charges) ÷ carpet area. Stamp duty,
                registration, GST and a one-time club membership fee count among the other charges. Ask for
                the cost sheet through the{" "}
                <Link href="/price" className={linkCls}>Legacy by Gaurs price</Link> page.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 self-start" data-stagger="120">
              {[
                ["× 1.83", "3,510 and 3,540 sq. ft. homes"],
                ["× 1.98", "4,765 sq. ft. homes"],
              ].map(([x, l]) => (
                <div key={x} data-reveal="zoom" data-tilt className="flex flex-col justify-between rounded-3xl bg-[#0F1535] p-7 text-white">
                  <p className="text-5xl font-bold text-[#F5E7C8]" style={{ fontFamily: "var(--font-work-sans)" }}>{x}</p>
                  <p className="mt-6 text-sm text-white/70">{l}</p>
                </div>
              ))}
              <div data-reveal="up" className="col-span-2 rounded-3xl border border-[#e2d6b8] bg-white p-6 text-center">
                <p className="font-mono text-[13px] text-[#141a3d]">
                  true rate = (price + fit-out + other charges) ÷ carpet area
                </p>
              </div>
            </div>
          </div>

          <div id="calculator" data-reveal="up" className="mt-16 scroll-mt-32">
            <AreaCalculator units={condoUnits} />
          </div>
        </div>
      </section>

      {/* Floor plans strip */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Study the plan" title="Four Towers, Eight Unit Plans" />
            <CtaButton href="/floor-plans" variant="outline" cta="plans-strip">
              All Floor Plans
            </CtaButton>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" data-stagger="90">
            {plans.map((p) => (
              <Link
                key={p.name}
                href="/floor-plans"
                data-reveal="up"
                className="card-lift group block overflow-hidden rounded-3xl border border-[#ece4d0] bg-[#0F1535]"
              >
                <div className="zoom-frame relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.img}
                    alt={`${p.name} tower floor plan, Legacy by Gaurs (${p.units})`}
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-contain p-3"
                  />
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <span className="font-semibold text-[#F5E7C8]">{p.name}</span>
                  <span className="text-xs text-white/60">{p.units}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — Explainer films */}
      <section id="explainer" className="guide-section bg-[#FAF8F4] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index={6}
            eyebrow="Watch"
            title="Carpet, Built-Up and Super Built-Up, on Film"
            intro="A short explainer on the three measures, and the developer’s own walkthrough of the homes those numbers describe."
          />
          <div className="grid gap-10 md:grid-cols-2">
            <div data-reveal="up"><YouTubeCard video={guideVideos.areaExplainer} /></div>
            <div data-reveal="up" data-reveal-delay="120"><YouTubeCard video={guideVideos.officialWalkthrough} /></div>
          </div>
        </div>
      </section>

      {/* 07 — Before you sign */}
      <section id="before-you-sign" className="guide-section bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading index={7} eyebrow="Checklist" title="Before You Sign" />
          <div data-reveal="up">
            <SignChecklist
              items={[
                {
                  title: "Verify on UP RERA.",
                  body: (
                    <>
                      Search {brand.rera.number} on{" "}
                      <a href={brand.rera.url} target="_blank" rel="noopener noreferrer" className={linkCls}>up-rera.in</a>.
                      Carpet is listed in sq. m, so multiply by 10.764. The completion date on record is 28
                      September 2029.
                    </>
                  ),
                },
                {
                  title: "Get the split of total area.",
                  body: "Ask for covered area, balcony area and common floor area for your unit, in writing.",
                },
                { title: "Read the area on the agreement.", body: "It should be the carpet area." },
                {
                  title: "Get the handover scope in writing.",
                  body: "List what is delivered and what you finish yourself.",
                },
                {
                  title: "Confirm the maintenance rate and its base.",
                  body: "Then work out the monthly amount.",
                },
                {
                  title: "Study the plan.",
                  body: (
                    <>
                      Start with the{" "}
                      <Link href="/floor-plans" className={linkCls}>Legacy by Gaurs floor plans</Link>.
                    </>
                  ),
                },
              ]}
              doneTitle="All six checked. Ask us for the area statement, cost sheet and handover scope for your unit."
              doneCta={{ label: "Request the Documents", href: "#book-site-visit", icon: "file", cta: "checklist-documents" }}
            />
          </div>
        </div>
      </section>

      {/* Legacy by Gaurs */}
      <section className="bg-[#FAF8F4] px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="The project" title="Legacy by Gaurs" />
            <div className="space-y-5 text-[17px] leading-relaxed text-[#4a4f66]" data-reveal="up">
              <p>
                <Link href="/about-legacy-by-gaurs" className={linkCls}>Legacy by Gaurs</Link> has 265
                four-bedroom condominiums in four towers, Buckingham, Edinburgh, Kensington and Versailles, at
                Plot B-10 in Jaypee Greens, Greater Noida. It also has 20{" "}
                <Link href="/villas-configurations" className={linkCls}>Legacy Villas</Link>. The developer is{" "}
                <Link href="/about-gaurs-group" className={linkCls}>Gaurs Group</Link>.
              </p>
              <p>
                <strong className="text-[#141a3d]">More:</strong>{" "}
                <Link href="/amenities" className={linkCls}>amenities</Link>,{" "}
                <Link href="/location-connectivity" className={linkCls}>location and connectivity</Link>, and
                the{" "}
                <Link href="/blogs/legacy-by-gaurs-jaypee-greens-buyers-guide-2026" className={linkCls}>
                  Legacy by Gaurs buyer’s guide
                </Link>
              </p>
            </div>
          </div>
          <div data-reveal="right" className="zoom-frame overflow-hidden rounded-3xl">
            <GuidePicture media={m.towerPariChowk} sizes="(max-width: 1024px) 100vw, 520px" className="aspect-[4/3] h-full w-full object-cover" />
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
        <div className="float-orb absolute -left-24 top-10 -z-10 h-96 w-96 rounded-full bg-[#DCA54A]/15 blur-3xl" />
        <div className="mx-auto max-w-4xl text-center">
          <p data-reveal="up" className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#DCA54A]">Conclusion</p>
          <h2 data-reveal="up" className="text-[1.9rem]! font-bold leading-tight text-[#F5E7C8] md:text-[2.6rem]!">
            Work out your rate on carpet
          </h2>
          <p data-reveal="up" className="mx-auto mt-6 max-w-3xl text-[17px] leading-relaxed text-white/80">
            On super built-up area vs carpet area, Legacy by Gaurs gives you both numbers, which most
            projects don’t. Carpet is about half of total area, maintenance follows carpet, and the fit-out
            is yours to add. Work out your rate on carpet with all three in mind, and ask for the split of
            total area before you sign.
          </p>
          <p data-reveal="up" className="mt-6 text-white/80">
            For the cost sheet, handover scope and area statement of any home at Legacy by Gaurs,{" "}
            <Link href="/contact-us" className="link-draw font-semibold text-[#DCA54A]">contact us</Link> or call{" "}
            <a href={brand.partner.phoneHref} className="link-draw font-semibold text-[#DCA54A]">{PHONE}</a>.
          </p>
          <div data-reveal="up" className="mt-10 flex flex-wrap justify-center gap-3">
            <CtaButton href="#book-site-visit" icon="file" size="lg" cta="conclusion-cost-sheet">
              Get the Cost Sheet
            </CtaButton>
            <CtaButton href={brand.partner.phoneHref} icon="phone" variant="glass" size="lg" cta="conclusion-call">
              {`Call ${PHONE}`}
            </CtaButton>
          </div>
          <p className="mx-auto mt-14 max-w-2xl text-xs italic leading-relaxed text-white/45">
            This page comes from an authorised channel partner and not from the developer. Areas are taken
            from the project brochure and the public UP RERA record. The maintenance figure is an example,
            not the project’s rate. Verify all areas on up-rera.in and in the builder-buyer agreement.
          </p>
        </div>
      </section>

      <EnquirySection
        heading="Get the cost sheet, handover scope and area statement"
        body={`Tell us which home you’re looking at and we’ll send its carpet, covered, balcony and common floor areas, the cost sheet and the handover scope. Prefer to talk? Call ${PHONE}.`}
      />

      <RelatedGuides
        items={[
          {
            href: "/villa-vs-flat-legacy-by-gaurs",
            media: m.legacyVillas,
            tag: "Guide",
            title: "Villa vs Flat at Legacy by Gaurs",
            text: "Compare the 20 Legacy Villas with the 4 BHK golf-side condominiums.",
          },
          {
            href: "/price",
            media: m.towerGolf,
            tag: "Price",
            title: "Legacy by Gaurs Price List 2026",
            text: "Unit sizes, costs to plan for and the EMI calculator.",
          },
          {
            href: "/blogs/legacy-by-gaurs-jaypee-greens-buyers-guide-2026",
            media: m.towerLake,
            tag: "Blog",
            title: "Legacy by Gaurs Buyer’s Guide 2026",
            text: "Towers, unit plans, villas, amenities, RERA details and a diligence checklist.",
          },
        ]}
      />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
