import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import EmiCalculator from "@/components/EmiCalculator";
import ReasonsToInvest from "@/components/ReasonToInvest";
import StickyDownloadButton from "@/components/StickyButton";
import ModalWrapper from "@/components/ModalWrapper";
import { brand } from "@/data/brand";
import { condoUnits, fmt, PRICE_ON_REQUEST } from "@/data/residences";

export const metadata: Metadata = {
  title: "Legacy by Gaurs Price 2026 | 4 BHK & Villa Price List, Jaypee Greens",
  description:
    "Legacy by Gaurs price list — 4 BHK condominiums from 3,510 to 4,765 sq. ft. across four towers, plus 20 Legacy Villas at Jaypee Greens, Greater Noida. Request the official price list and EMI plan.",
  alternates: { canonical: `${brand.site}/price` },
  keywords:
    "Legacy by Gaurs price, Legacy by Gaurs price list, Legacy by Gaurs 4 BHK price, Legacy Villa price, Jaypee Greens Greater Noida price",
};

export default function PricePage() {
  return (
    <>
      <PageBanner
        eyebrow="Investment"
        title="Price"
        subtitle="Legacy by Gaurs — 4 BHK Condominiums & Legacy Villas at Jaypee Greens, Greater Noida"
      />
      <ModalWrapper />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="prose max-w-none text-gray-700">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6 border-b pb-4">
              Legacy by Gaurs Price — Jaypee Greens, Greater Noida
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              Legacy by Gaurs is an uber-luxury development of{" "}
              <strong>265 four-bedroom condominiums</strong> across four towers —
              Buckingham, Edinburgh, Kensington and Versailles — plus{" "}
              <strong>20 Legacy Villas</strong>, at Plot B-10, Jaypee Greens. Every
              condominium is a 4 BHK, ranging from{" "}
              <strong>3,510 to 4,765 sq. ft.</strong> of total area.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Gaurs Group has not published a public price list for this project.
              Pricing is released on a per-unit basis and depends on the tower, the
              floor, and whether the residence faces the golf course or Pari Chowk. We
              share the current, official price list on request — no indicative or
              guessed figures on this page.
            </p>
            <Link
              href="/contact-us"
              className="inline-block text-[#c8922a] hover:underline font-semibold"
            >
              Get the Official Price List &rarr;
            </Link>
          </div>

          {/* Area table */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Legacy by Gaurs Unit Sizes &amp; Price List (2026)
            </h2>
            <p className="mb-6 text-gray-700">
              Areas below are as published in the official brochure. Carpet area is
              stated as per the RERA Act.
            </p>

            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
              <table className="w-full text-sm text-left min-w-[680px]">
                <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Unit</th>
                    <th className="px-5 py-4">Tower</th>
                    <th className="px-5 py-4">Configuration</th>
                    <th className="px-5 py-4">Carpet Area</th>
                    <th className="px-5 py-4">Total Area</th>
                    <th className="px-5 py-4">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {condoUnits.map((u) => (
                    <tr key={u.id} className="border-t border-[#e5dcc5]">
                      <td className="px-5 py-4 font-semibold text-gray-900">{u.unit}</td>
                      <td className="px-5 py-4 text-gray-600">{u.tower}</td>
                      <td className="px-5 py-4 text-gray-600">{u.config}</td>
                      <td className="px-5 py-4 text-gray-600 whitespace-nowrap">
                        {fmt(u.carpetSqft)} sq. ft.
                      </td>
                      <td className="px-5 py-4 text-gray-800 font-semibold whitespace-nowrap">
                        {fmt(u.totalSqft)} sq. ft.
                      </td>
                      <td className="px-5 py-4 text-[#c8922a] font-semibold whitespace-nowrap">
                        {PRICE_ON_REQUEST}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t border-[#e5dcc5] bg-[#FAF8F4]">
                    <td className="px-5 py-4 font-semibold text-gray-900">
                      Legacy Villas
                    </td>
                    <td className="px-5 py-4 text-gray-600">Villa cluster</td>
                    <td className="px-5 py-4 text-gray-600">20 units</td>
                    <td className="px-5 py-4 text-gray-600" colSpan={2}>
                      Single &amp; double basement, ground to terrace
                    </td>
                    <td className="px-5 py-4 text-[#c8922a] font-semibold whitespace-nowrap">
                      {PRICE_ON_REQUEST}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed mb-6 italic">
              Total area includes covered area, balcony area and common floor area
              (519.26 sq. ft. per floor). 1 sq. mt. = 10.764 sq. ft. Areas are as per
              the brochure and are subject to the Builder-Buyer Agreement.
            </p>

            <Link
              href="/contact-us"
              className="inline-block text-[#c8922a] hover:underline font-semibold"
            >
              Request the Official Legacy by Gaurs Price List &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What Affects the Price of a Unit
              </h2>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  <strong>Unit type:</strong> the eight unit plans range from 3,510 sq.
                  ft. (Units 02, 03, 06, 07) to 4,765 sq. ft. (Units 01 and 08).
                </li>
                <li>
                  <strong>Orientation:</strong> residences face either the golf course
                  or Pari Chowk. Golf-facing units are priced at a premium.
                </li>
                <li>
                  <strong>Floor level:</strong> each tower is 3B + GF/Stilt + 34 floors;
                  higher floors typically carry a higher rate.
                </li>
                <li>
                  <strong>Tower:</strong> Buckingham, Edinburgh, Kensington and
                  Versailles each carry a different pair of unit plans.
                </li>
                <li>
                  <strong>Villa vs. condominium:</strong> only 20 Legacy Villas exist,
                  and they are priced separately from the towers.
                </li>
              </ul>
              <p>
                Because of these variables, we share a unit-specific quote for the exact
                residence you shortlist rather than a blanket range.
              </p>
            </div>

            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Costs to Plan For
              </h2>
              <p className="mb-4">
                Beyond the unit price, budget separately for:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>
                  <strong>Stamp duty &amp; registration</strong> — currently 7% in Uttar
                  Pradesh (5% stamp duty + 2% registration), subject to government
                  revision
                </li>
                <li>
                  <strong>GST</strong> — applicable on under-construction units
                </li>
                <li>
                  <strong>Maintenance charges</strong> — billed by carpet area
                </li>
                <li>
                  <strong>Club membership fee</strong> — one-time, where applicable
                </li>
                <li>
                  <strong>Handover scope</strong> — per the brochure, units are handed
                  over as a raw structure with façade development; works not listed in
                  the specifications fall within the buyer&apos;s scope
                </li>
              </ul>
              <p>
                For a personalised total-cost calculation,{" "}
                <Link href="/contact-us" className="text-[#c8922a] hover:underline font-semibold">
                  request a callback
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              EMI Calculator — Plan Your Purchase
            </h2>
            <p className="mb-4">
              Use the calculator below to estimate your monthly outflow based on loan
              amount, down payment, tenure and interest rate. Leading banks and HFCs
              finance up to roughly 75–80% of property value, subject to eligibility.
            </p>
            <p className="italic text-sm text-gray-500 mb-6">
              (EMI figures are indicative and for planning purposes only; actual rates
              depend on your lender and profile.)
            </p>
          </div>

          {/* Project fact box */}
          <div className="bg-[#FAF8F4] p-6 rounded-lg border border-[#e5dcc5] text-sm text-gray-600 space-y-2">
            <p><strong>Project:</strong> {brand.name}, {brand.project.address}</p>
            <p><strong>Developer:</strong> {brand.developer} ({brand.developerLegal})</p>
            <p>
              <strong>RERA:</strong> {brand.rera.number} &middot; verify at{" "}
              <a
                href={brand.rera.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c8922a] hover:underline"
              >
                up-rera.in
              </a>
            </p>
            <p><strong>Launch date:</strong> {brand.project.launchDate}</p>
            <p>
              <strong>Contact:</strong>{" "}
              <a href={brand.partner.phoneHref} className="text-[#c8922a] hover:underline">
                {brand.partner.phone}
              </a>
            </p>
          </div>
        </div>
      </section>

      <EmiCalculator />
      <ReasonsToInvest />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
