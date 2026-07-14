import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ReasonsToInvest from "@/components/ReasonToInvest";
import VillaFeatures from "@/components/PremiumInventory";
import StickyDownloadButton from "@/components/StickyButton";
import ModalWrapper from "@/components/ModalWrapper";
import { brand } from "@/data/brand";
import {
  condoUnits,
  towers,
  villas,
  specifications,
  fmt,
  PRICE_ON_REQUEST,
} from "@/data/residences";

export const metadata: Metadata = {
  title: "Legacy by Gaurs Residences | 4 BHK Condominiums & Legacy Villas",
  description:
    "Legacy by Gaurs offers 265 four-bedroom condominiums across the Buckingham, Edinburgh, Kensington and Versailles towers (3,510–4,765 sq. ft.) plus 20 ultra-luxury Legacy Villas at Jaypee Greens, Greater Noida.",
  alternates: { canonical: `${brand.site}/villas-configurations` },
};

export default function ResidencesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Residences"
        title="Residences & Configurations"
        subtitle="Magnificent 4 BHK condominiums and lavish Legacy Villas — a harmonious blend of super-luxury apartments and ultra-luxurious villas."
      />
      <ModalWrapper />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="prose max-w-none text-gray-700">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6 border-b pb-4">
              Legacy by Gaurs — Configurations
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              An epitome of unparalleled luxury nestled within Jaypee Greens, Legacy by
              Gaurs offers a harmonious blend of <strong>super-luxury 4 BHK
              condominiums</strong> and <strong>ultra-luxurious Legacy Villas</strong>.
              There are {brand.condoUnits} condominiums across four towers and only{" "}
              {villas.total} villas — every residence meticulously crafted to provide a
              living experience cherished for generations.
            </p>
            <p className="text-lg leading-relaxed">
              Residences offer stunning views of a pristine golf course on one side and
              the expansive Pari Chowk on the other, ensuring an uninterrupted horizon
              to admire.
            </p>
          </div>

          {/* Towers */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Four Iconic Towers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {towers.map((t) => (
                <div
                  key={t.name}
                  className="bg-[#1A2352] text-center py-7 px-3 rounded-lg"
                >
                  <p className="text-lg font-bold text-[#DCA54A]">{t.name}</p>
                  <p className="text-[#C9CEE4] text-[11px] mt-2 leading-snug">{t.spec}</p>
                  <p className="text-[#8F97B8] text-[11px] mt-1">
                    {t.units.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              Each tower rises to 34 floors over three basements and a stilt level. The{" "}
              <strong>HELIX</strong> sky bridge connects them — a landscaped deck of
              yoga zones, herbal gardens, an open-air theatre and indoor games,
              suspended above the treeline.
            </p>
          </div>

          {/* Unit table */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Condominium Unit Plans — All 4 BHK
            </h2>
            <p className="mb-6 text-gray-700">
              Every unit comprises 4 bedrooms, a living room, a dining/family lounge, a
              kitchen, a dress, 4 toilets, a utility with toilet, a foyer and 2–3
              balconies.
            </p>

            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
              <table className="w-full text-sm text-left min-w-[760px]">
                <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Unit</th>
                    <th className="px-5 py-4">Tower</th>
                    <th className="px-5 py-4">Balconies</th>
                    <th className="px-5 py-4">Carpet</th>
                    <th className="px-5 py-4">Covered</th>
                    <th className="px-5 py-4">Balcony</th>
                    <th className="px-5 py-4">Total</th>
                    <th className="px-5 py-4">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {condoUnits.map((u) => (
                    <tr key={u.id} className="border-t border-[#e5dcc5]">
                      <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">
                        {u.unit}
                      </td>
                      <td className="px-5 py-4 text-gray-600">{u.tower}</td>
                      <td className="px-5 py-4 text-gray-600">{u.balconies}</td>
                      <td className="px-5 py-4 text-gray-600 whitespace-nowrap">
                        {fmt(u.carpetSqft)}
                      </td>
                      <td className="px-5 py-4 text-gray-600 whitespace-nowrap">
                        {fmt(u.coveredSqft)}
                      </td>
                      <td className="px-5 py-4 text-gray-600 whitespace-nowrap">
                        {fmt(u.balconySqft)}
                      </td>
                      <td className="px-5 py-4 text-gray-800 font-semibold whitespace-nowrap">
                        {fmt(u.totalSqft)}
                      </td>
                      <td className="px-5 py-4 text-[#c8922a] font-semibold whitespace-nowrap">
                        {PRICE_ON_REQUEST}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed italic">
              All areas in sq. ft. Carpet area is as per the RERA Act. Common floor area
              of 519.26 sq. ft. is included in the total. 1 sq. mt. = 10.764 sq. ft.
            </p>
          </div>

          {/* Villas */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              The Legacy Villas — Only {villas.total}
            </h2>
            <p className="mb-6 text-gray-700">
              Numbered LV01 to LV21, the Legacy Villas rise through ground, mezzanine,
              first, second and terrace levels over one or two basements. Their cluster
              sits between the golf course and Pari Chowk, along a 12.0 m
              right-of-way road.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  Double Basement — {villas.doubleBasement.length} villas
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {villas.doubleBasement.join(", ")}
                </p>
              </div>
              <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5]">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  Single Basement — {villas.singleBasement.length} villas
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {villas.singleBasement.join(", ")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {villas.levels.map((l) => (
                <span
                  key={l}
                  className="text-[13px] text-[#5c4a2a] bg-[#faf6e8] px-3 py-1.5 rounded-full border border-[#d4c9ae]"
                >
                  {l}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-600 mt-6">
              <Link href="/floor-plans" className="text-[#c8922a] hover:underline font-semibold">
                View every villa level plan &rarr;
              </Link>
            </p>
          </div>

          {/* Specifications */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Premium Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {specifications.map((s) => (
                <div
                  key={s.title}
                  className="bg-white p-6 rounded-lg border border-[#e5dcc5]"
                >
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[#c8922a] mb-3">
                    {s.title}
                  </h3>
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className="rounded-full flex-shrink-0 mt-1.5"
                          style={{ width: 5, height: 5, background: "#DCA54A", display: "inline-block" }}
                        />
                        <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-sm text-yellow-800 mt-6">
              <strong>Note:</strong> Per the brochure, units are handed over as a raw
              structure with façade development. Works not listed in the specifications
              fall within the buyer&apos;s scope. Specifications are subject to minor
              variations during construction, and natural stone inherently varies in
              colour, pattern and grain.
            </div>
          </div>

          <div className="text-center pt-8 border-t border-[#e5dcc5]">
            <Link
              href="/contact-us"
              className="inline-block bg-[#DCA54A] hover:bg-[#C08F3C] text-white text-base font-semibold tracking-widest uppercase px-10 py-4 rounded-md transition-colors shadow-md"
            >
              Get Price List &amp; Availability
            </Link>
          </div>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
      <VillaFeatures />
      <ReasonsToInvest />
    </>
  );
}
