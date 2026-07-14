"use client";
import { useState, useEffect } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import buckingham from "@/assets/plan-buckingham.webp";
import edinburgh from "@/assets/plan-edinburgh.webp";
import kensington from "@/assets/plan-kensington.webp";
import versailles from "@/assets/plan-versailles.webp";
import masterPlan from "@/assets/master-plan.webp";

import villaGround from "@/assets/villa-ground.webp";
import villaMezzanine from "@/assets/villa-mezzanine.webp";
import villaFirst from "@/assets/villa-first.webp";
import villaSecond from "@/assets/villa-second.webp";
import villaTerrace from "@/assets/villa-terrace.webp";
import villaBasement1 from "@/assets/villa-basement-1.webp";
import villaBasement2 from "@/assets/villa-basement-2.webp";

import { condoUnits, villas, fmt, PRICE_ON_REQUEST } from "@/data/residences";
import { MASTER_PLAN_URL } from "@/data/brand";
import { useModal } from "./ModalContext";

const towerPlans: { name: string; image: StaticImageData; units: string }[] = [
  { name: "Buckingham", image: buckingham, units: "Unit 01 & Unit 02" },
  { name: "Edinburgh", image: edinburgh, units: "Unit 03 & Unit 04" },
  { name: "Kensington", image: kensington, units: "Unit 05 & Unit 06" },
  { name: "Versailles", image: versailles, units: "Unit 07 & Unit 08" },
];

const villaPlans: { name: string; image: StaticImageData }[] = [
  { name: "Ground Floor", image: villaGround },
  { name: "Mezzanine Floor", image: villaMezzanine },
  { name: "First Floor", image: villaFirst },
  { name: "Second Floor", image: villaSecond },
  { name: "Terrace Floor", image: villaTerrace },
  { name: "First Basement", image: villaBasement1 },
  { name: "Second Basement", image: villaBasement2 },
];

type Plan = { name: string; image: StaticImageData; units?: string };

export default function FloorPlanSection() {
  const { openModal, isLeadSubmitted } = useModal();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activePlan, setActivePlan] = useState<Plan | null>(null);
  const [isMasterOpen, setIsMasterOpen] = useState(false);

  useEffect(() => {
    if (isLeadSubmitted) {
      setIsUnlocked(true);
      localStorage.setItem("plansUnlocked", "true");
    } else {
      const saved = localStorage.getItem("plansUnlocked");
      if (saved === "true") setIsUnlocked(true);
    }
  }, [isLeadSubmitted]);

  const open = (plan: Plan) => (isUnlocked ? setActivePlan(plan) : openModal());

  return (
    <section
      className="w-full py-16 px-6"
      id="floor-plans"
      aria-label="Legacy by Gaurs Floor Plans"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* H1 */}
        <div className="text-center">
          <h6 className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3">
            Floor Plans
          </h6>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Legacy by Gaurs Floor Plans — 4 BHK Condominiums &amp; Legacy Villas
          </h1>
          <p className="text-gray-600 text-sm mt-4 max-w-3xl mx-auto leading-relaxed">
            The Legacy by Gaurs floor plan collection spans four iconic towers —
            Buckingham, Edinburgh, Kensington and Versailles — each rising to 34
            floors above Jaypee Greens, plus 20 individually crafted Legacy Villas.
            Every condominium is a 4 BHK, from 3,510 to 4,765 sq. ft., with the golf
            course on one side and Pari Chowk on the other.
          </p>
        </div>

        {/* ── TOWER FLOOR PLATES ───────────────────────────────── */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Tower Floor Plans
          </h2>
          <p className="text-gray-600 text-sm mb-6 max-w-3xl">
            Each tower is 3B + GF/Stilt + 34 floors and carries two of the eight unit
            plans. Click a tower to view its typical floor plate.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {towerPlans.map((plan) => (
              <div
                key={plan.name}
                className="relative rounded-md overflow-hidden shadow-md group cursor-pointer bg-[#0e0e0e]"
                onClick={() => open(plan)}
              >
                <Image
                  src={plan.image}
                  alt={`${plan.name} tower floor plan – Legacy by Gaurs`}
                  loading="lazy"
                  className={`w-full h-[150px] object-cover transition duration-500 ${
                    !isUnlocked ? "blur-[3px] scale-105" : "group-hover:scale-105"
                  }`}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/45 text-white text-center px-2">
                  <span className="text-sm font-semibold tracking-wide">{plan.name}</span>
                  <span className="text-[11px] mt-0.5 opacity-80">{plan.units}</span>
                  <span className="text-[10px] mt-1.5 uppercase tracking-widest text-[#DCA54A]">
                    {isUnlocked ? "View plan" : "Unlock"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── UNIT AREA TABLE ──────────────────────────────────── */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Unit Plans &amp; Area Details
          </h2>
          <p className="text-gray-600 text-sm mb-6 max-w-3xl">
            Areas are as published in the official brochure. Carpet area is stated as
            per the RERA Act. All eight units are 4 BHK with a living room,
            dining/family lounge, kitchen, dress, four toilets, utility and foyer.
          </p>

          <div className="overflow-x-auto rounded-lg border border-[#e8dfc8]">
            <table className="w-full text-sm min-w-[720px]">
              <thead>
                <tr className="bg-[#faf6e8] text-left">
                  {["Unit", "Tower", "Config", "Balconies", "Carpet (sq.ft)", "Total (sq.ft)", "Price"].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 font-semibold text-[#2c1f0e] whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {condoUnits.map((u) => (
                  <tr key={u.id} className="border-t border-[#e8dfc8]">
                    <td className="px-4 py-3 font-semibold text-[#DCA54A] whitespace-nowrap">
                      {u.unit}
                    </td>
                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{u.tower}</td>
                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{u.config}</td>
                    <td className="px-4 py-3 text-gray-700">{u.balconies}</td>
                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                      {fmt(u.carpetSqft)}
                    </td>
                    <td className="px-4 py-3 text-gray-800 font-semibold whitespace-nowrap">
                      {fmt(u.totalSqft)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <button
                        onClick={openModal}
                        className="text-[#DCA54A] font-semibold hover:underline"
                      >
                        {PRICE_ON_REQUEST}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-500 mt-3 leading-relaxed">
            Total area includes covered area, balcony area and common floor area
            (519.26 sq. ft. per floor). 1 sq. mt. = 10.764 sq. ft. Pricing is shared
            on request —{" "}
            <button onClick={openModal} className="text-[#c8922a] hover:underline font-medium">
              request the current price list
            </button>
            .
          </p>
        </div>

        {/* ── LEGACY VILLAS ────────────────────────────────────── */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Legacy Villa Floor Plans
          </h2>
          <p className="text-gray-600 text-sm mb-6 max-w-3xl">
            Only {villas.total} Legacy Villas exist. {villas.doubleBasement.length} are
            built over a double basement and {villas.singleBasement.length} over a
            single basement, each rising through ground, mezzanine, first, second and
            terrace levels.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {villaPlans.map((plan) => (
              <div
                key={plan.name}
                className="relative rounded-md overflow-hidden shadow-md group cursor-pointer bg-white border border-[#e8dfc8]"
                onClick={() => open(plan)}
              >
                <Image
                  src={plan.image}
                  alt={`Legacy Villa ${plan.name} – Legacy by Gaurs`}
                  loading="lazy"
                  className={`w-full h-[150px] object-contain bg-white transition duration-500 ${
                    !isUnlocked ? "blur-[3px]" : "group-hover:scale-105"
                  }`}
                />
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 to-transparent">
                  <span className="text-white text-[11px] font-medium pb-2 text-center px-1">
                    {plan.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-[#faf6e8] border border-[#e8dfc8] rounded-lg p-4">
              <p className="text-[11px] uppercase tracking-widest text-[#c8922a] font-semibold mb-2">
                Double Basement · {villas.doubleBasement.length} villas
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                {villas.doubleBasement.join(", ")}
              </p>
            </div>
            <div className="bg-[#faf6e8] border border-[#e8dfc8] rounded-lg p-4">
              <p className="text-[11px] uppercase tracking-widest text-[#c8922a] font-semibold mb-2">
                Single Basement · {villas.singleBasement.length} villas
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                {villas.singleBasement.join(", ")}
              </p>
            </div>
          </div>
        </div>

        {/* ── MASTER PLAN ──────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center mt-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Legacy by Gaurs Master Plan
          </h2>

          <p className="text-gray-600 text-sm mb-6 max-w-2xl leading-relaxed">
            A master plan for the discerning elite. The site layout places the four
            towers and the villa cluster between the golf course on one side and Pari
            Chowk on the other, along a 12.0 m right-of-way road.
          </p>

          <div
            className="relative w-full md:w-[70%] rounded-lg overflow-hidden shadow-lg cursor-pointer group"
            onClick={() => (isUnlocked ? setIsMasterOpen(true) : openModal())}
          >
            <Image
              src={masterPlan}
              alt="Legacy by Gaurs master plan – township layout with golf course and villa cluster"
              className="w-full h-[260px] md:h-[340px] object-cover blur-[2px] scale-105"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white">
              <p className="text-lg font-semibold">Master Plan</p>
              <p className="text-sm mt-1">
                {isUnlocked ? "Click to View & Download" : "Unlock to Access"}
              </p>
              <button className="mt-4 bg-[#DCA54A] text-white text-xs px-6 py-2 rounded uppercase">
                {isUnlocked ? "View Plan" : "Unlock Now"}
              </button>
            </div>

            <span className="absolute top-3 left-3 bg-[#DCA54A] text-white text-[10px] px-2 py-1 rounded">
              Premium
            </span>
          </div>
        </div>

        {/* ── BROCHURE CTA ─────────────────────────────────────── */}
        <div className="bg-[#1A2352] rounded-xl px-6 py-10 text-center">
          <h2 className="text-2xl font-bold text-[#F5E7C8] mb-3">
            Download the Floor Plan PDF
          </h2>
          <p className="text-[#C9CEE4] text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
            The official brochure carries every unit plan for Buckingham, Edinburgh,
            Kensington and Versailles, all seven Legacy Villa levels, the master plan
            and the full specification list. Share your details and it downloads
            instantly.
          </p>
          <button
            onClick={openModal}
            className="inline-block bg-[#DCA54A] hover:bg-[#C08F3C] text-white text-xs font-semibold tracking-widest uppercase px-8 py-3.5 rounded transition-colors"
          >
            Download Brochure
          </button>
          <p className="text-[#8F97B8] text-xs mt-4">
            Looking for pricing?{" "}
            <Link href="/price" className="text-[#DCA54A] hover:underline">
              See the price page
            </Link>
          </p>
        </div>
      </div>

      {/* ── PLAN MODAL ─────────────────────────────────────────── */}
      {activePlan && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && setActivePlan(null)}
        >
          <div className="relative bg-white p-3 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto">
            <button
              onClick={() => setActivePlan(null)}
              aria-label="Close"
              className="absolute top-2 right-2 text-black text-xl z-10"
            >
              ✕
            </button>

            <Image
              src={activePlan.image}
              alt={`${activePlan.name} – Legacy by Gaurs floor plan`}
              className="w-full h-auto object-contain"
            />
            <p className="text-center text-sm font-semibold text-gray-800 py-2">
              {activePlan.name}
              {activePlan.units ? ` — ${activePlan.units}` : ""}
            </p>
          </div>
        </div>
      )}

      {/* ── MASTER PLAN MODAL ──────────────────────────────────── */}
      {isMasterOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && setIsMasterOpen(false)}
          aria-label="Legacy by Gaurs Master Plan"
        >
          <div className="relative bg-white p-4 rounded-lg max-w-4xl w-full text-center max-h-[90vh] overflow-auto">
            <button
              onClick={() => setIsMasterOpen(false)}
              aria-label="Close"
              className="absolute top-2 right-2 text-black text-xl z-10"
            >
              ✕
            </button>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Legacy by Gaurs Master Plan
            </h3>

            <Image
              src={masterPlan}
              alt="Legacy by Gaurs master plan – complete township layout"
              className="w-full h-auto object-contain mb-4"
            />

            <a
              href={MASTER_PLAN_URL}
              download
              className="inline-block bg-[#DCA54A] hover:bg-[#C08F3C] text-white text-xs px-6 py-3 rounded uppercase transition-colors"
            >
              Download Master Plan
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
