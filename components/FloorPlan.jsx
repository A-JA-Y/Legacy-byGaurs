"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import buckingham from "@/assets/plan-buckingham.webp";
import edinburgh from "@/assets/plan-edinburgh.webp";
import kensington from "@/assets/plan-kensington.webp";
import versailles from "@/assets/plan-versailles.webp";
import masterPlan from "@/assets/master-plan.webp";

import { MASTER_PLAN_URL } from "@/data/brand";
import { useModal } from "./ModalContext";
import Reveal from "./Reveal";

// The four condominium towers — brochure pp. 50-53.
const plans = [
  { name: "Buckingham", image: buckingham },
  { name: "Edinburgh", image: edinburgh },
  { name: "Kensington", image: kensington },
  { name: "Versailles", image: versailles },
];

export default function PlansSection() {
  const { openModal, isLeadSubmitted } = useModal();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activePlan, setActivePlan] = useState(null);
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

  return (
    <section className="w-full py-16 px-6" id="plans">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        <Reveal className="text-center">
          <h6 className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3">
            Floor Plans
          </h6>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Plans That Speak of Finesse
          </h2>

          <div className="gold-rule mx-auto mt-5" style={{ background: "linear-gradient(90deg, transparent, #DCA54A, transparent)" }} />

          <p className="text-gray-600 text-sm mt-4 max-w-2xl mx-auto">
            Four iconic towers, each rising to 34 floors. Every residence is a 4 BHK,
            from 3,510 to 4,765 sq. ft.
          </p>
        </Reveal>

        {/* TOWER FLOOR PLATES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 80}>
              <div
                className="card-lift relative rounded-md overflow-hidden shadow-md group cursor-pointer bg-[#0e0e0e]"
                onClick={() => (isUnlocked ? setActivePlan(plan) : openModal())}
              >
                <Image
                  src={plan.image}
                  alt={`${plan.name} tower floor plan – Legacy by Gaurs`}
                  className={`w-full h-[140px] object-cover transition duration-500 ${
                    !isUnlocked ? "blur-[3px] scale-105" : "group-hover:scale-105"
                  }`}
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white transition-colors duration-300 group-hover:bg-black/55">
                  <span className="text-sm font-semibold tracking-wide">{plan.name}</span>
                  <span className="text-[11px] mt-0.5 opacity-90 transition-transform duration-300 group-hover:scale-105">
                    {isUnlocked ? "View plan" : "🔒 Unlock"}
                  </span>
                  <span className="block h-[2px] w-0 bg-[#DCA54A] mt-2 transition-all duration-400 group-hover:w-8" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* MASTER PLAN */}
        <Reveal className="flex flex-col items-center text-center mt-6">
          <h6 className="text-xl md:text-2xl font-semibold mb-2 text-[#dca54a]">
            Master Plan
          </h6>

          <p className="text-gray-600 text-sm mb-6 max-w-lg">
            A master plan for the discerning elite — four towers, 20 Legacy Villas,
            the golf course on one side and Pari Chowk on the other.
          </p>

          <div
            className="relative w-full md:w-[70%] rounded-lg overflow-hidden shadow-lg cursor-pointer group transition-shadow duration-500 hover:shadow-2xl hover:shadow-[#DCA54A]/20"
            onClick={() => (isUnlocked ? setIsMasterOpen(true) : openModal())}
          >
            <Image
              src={masterPlan}
              alt="Legacy by Gaurs master plan – township layout"
              className="w-full h-[260px] md:h-[320px] object-cover blur-[2px] scale-105 transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white transition-colors duration-300 group-hover:bg-black/60">
              <p className="text-lg font-semibold">Master Plan</p>
              <p className="text-sm mt-1">
                {isUnlocked ? "Click to View & Download" : "Unlock to Access"}
              </p>

              <button className="btn-shine mt-4 bg-[#DCA54A] text-white text-xs px-6 py-2 rounded uppercase transition-transform duration-300 group-hover:scale-105">
                {isUnlocked ? "View Plan" : "Unlock Now"}
              </button>
            </div>

            <span className="absolute top-3 left-3 bg-[#DCA54A] text-white text-[10px] px-2 py-1 rounded">
              Premium
            </span>
          </div>
        </Reveal>
      </div>

      {/* TOWER PLAN MODAL */}
      {activePlan && (
        <div
          className="modal-backdrop fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && setActivePlan(null)}
        >
          <div className="modal-pop relative bg-white p-3 rounded-lg max-w-3xl w-full">
            <button
              onClick={() => setActivePlan(null)}
              aria-label="Close"
              className="absolute top-2 right-2 text-black text-xl z-10"
            >
              ✕
            </button>

            <Image
              src={activePlan.image}
              alt={`${activePlan.name} tower floor plan – Legacy by Gaurs`}
              className="w-full h-auto object-contain"
            />
            <p className="text-center text-sm font-semibold text-gray-800 pb-1">
              {activePlan.name} — 3B + GF/Stilt + 34 Floors
            </p>
          </div>
        </div>
      )}

      {/* MASTER PLAN MODAL */}
      {isMasterOpen && (
        <div
          className="modal-backdrop fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && setIsMasterOpen(false)}
        >
          <div className="modal-pop relative bg-white p-4 rounded-lg max-w-4xl w-full text-center">
            <button
              onClick={() => setIsMasterOpen(false)}
              aria-label="Close"
              className="absolute top-2 right-2 text-black text-xl z-10"
            >
              ✕
            </button>

            <Image
              src={masterPlan}
              alt="Legacy by Gaurs master plan – township layout"
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
