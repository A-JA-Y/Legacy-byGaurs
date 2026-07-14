import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import logo from "@/assets/legacy-logo.webp";
import StickyDownloadButton from "@/components/StickyButton";
import ModalWrapper from "@/components/ModalWrapper";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: "About Gaurs Group | The Developer Behind Legacy by Gaurs",
  description:
    "Gaurs Group has delivered 75,000+ units and 100 million+ sq. ft. across 30 years. Learn about the developer behind Legacy by Gaurs at Jaypee Greens, Greater Noida.",
  alternates: { canonical: `${brand.site}/about-gaurs-group` },
};

// Awards — brochure p. 61.
const awards = [
  { award: "Realty+ Excellence Awards North 2023", title: "Ultra Luxury Lifestyle Project of the Year", project: "The Islands by Gaurs" },
  { award: "Realty+ Excellence Awards North 2022", title: "Luxury Project of the Year", project: "The Islands by Gaurs" },
  { award: "Times Business Awards 2019", title: "Best Real Estate Developer of the Year", project: "Gaursons India" },
  { award: "Smart City Empowering India Awards 2020", title: "Best Smart City Developer of the Year", project: "Gaursons India" },
  { award: "Realty+ Conclave & Excellence Awards North 2024", title: "Best Selling Project of the Year", project: "Gaur NYC Residences" },
  { award: "CNBC Awaaz Real Estate Awards 2016-17", title: "Best Township Project", project: "Gaur City" },
];

const portfolio = [
  { value: "35", label: "Delivered residential projects" },
  { value: "30", label: "Delivered commercial projects" },
  { value: "3", label: "Delivered township projects" },
  { value: "24", label: "Ongoing RERA registered projects" },
];

export default function AboutGaursGroupPage() {
  return (
    <>
      <PageBanner
        eyebrow="The Developer"
        title="About Gaurs Group"
        subtitle="Since 1995, a beacon of excellence in real estate — 30 years of unfaltering commitment, and the group behind Legacy by Gaurs."
      />
      <ModalWrapper />

      {/* Intro */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/3 flex-shrink-0">
            <Image
              src={logo}
              alt={brand.developer}
              width={180}
              height={80}
              className="w-auto h-auto max-w-[180px]"
            />
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <p className="text-gray-600 text-sm leading-relaxed">
              Since its inception in 1995, Gaurs has stood as a beacon of excellence in
              real estate. Our diverse portfolio ranges from luxurious apartments to
              affordable homes, each occupied by thousands of satisfied families. Our
              unwavering commitment to earning customer trust has been our key to
              success.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              At Gaurs Group, our vision of luxury transcends mere construction — it is
              a continuous journey towards creating better life experiences that turn
              into treasured memories. Our &lsquo;life-craftsmen&rsquo; are selected for
              their extraordinary talent in designing and developing spaces that surpass
              all expectations.
            </p>

            <p className="text-xs uppercase tracking-widest text-[#c8922a] font-semibold mt-2">
              Real Estate · Retail · Education · Hotels · NBFC · Contracting · Sports · Energy
            </p>

            <div className="mt-4">
              <Link
                href="/about-legacy-by-gaurs"
                className="inline-block bg-[#DCA54A] hover:bg-[#C08F3C] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors"
              >
                Explore Legacy by Gaurs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="w-full bg-[#1A2352] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#F5E7C8] mb-3">
            The Milestones We Cherish
          </h2>
          <p className="text-center text-[#C9CEE4] text-sm mb-12 max-w-2xl mx-auto">
            A track record built over three decades.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {brand.stats.map((s) => (
              <div
                key={s.label}
                className="text-center border border-[#3A4478] rounded-lg py-6 px-3"
              >
                <p className="text-3xl md:text-4xl font-bold text-[#DCA54A]">{s.value}</p>
                <p className="text-[#C9CEE4] text-xs mt-2 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="w-full bg-[#FAF8F4] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-12">
            Delivered Portfolio
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {portfolio.map((p) => (
              <div
                key={p.label}
                className="bg-white text-center py-6 px-3 rounded-lg border-t-[3px] border-[#DCA54A]"
              >
                <p className="text-3xl font-bold text-[#2c1f0e]">{p.value}</p>
                <p className="text-gray-500 text-xs mt-2 leading-snug">{p.label}</p>
              </div>
            ))}
          </div>

          {/* Awards */}
          <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Awards &amp; Accolades
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10">
            Our trophy shelf tells the story.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {awards.map((a) => (
              <div
                key={`${a.award}-${a.title}`}
                className="bg-white p-5 rounded-lg border border-[#e8dfc8] flex flex-col gap-1.5"
              >
                <p className="text-[10px] uppercase tracking-widest text-[#c8922a] font-semibold leading-snug">
                  {a.award}
                </p>
                <p className="text-sm font-semibold text-[#2c1f0e] leading-snug">
                  {a.title}
                </p>
                <p className="text-xs text-gray-500">{a.project}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
