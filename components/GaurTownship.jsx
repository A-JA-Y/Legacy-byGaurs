"use client";

import Image from "next/image";
import Reveal from "./Reveal";

import golfCourse from "@/assets/golf-course.webp";
import skyBridge from "@/assets/sky-bridge.webp";
import sportsComplex from "@/assets/sports-complex.webp";
import township from "@/assets/township.webp";
import greenTownship from "@/assets/green-township.webp";

// Township highlights — Jaypee Greens, per brochure p. 12.
const cards = [
  { title: "18-Hole Greg Norman Golf Course", image: golfCourse },
  { title: "HELIX — The Sky Bridge", image: skyBridge },
  { title: "The Atlantic Sports Complex", image: sportsComplex },
  { title: "Town Centre & High-Street Retail", image: township },
  { title: "Gardens in Perfect Harmony", image: greenTownship },
];

export default function GaurTownship() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        <Reveal>
          <h6 className="text-center uppercase mb-3 text-[#c8922a] tracking-widest text-sm">
            A Royal Welcome to the Township
          </h6>

          <h2 className="text-center font-semibold text-gray-900 mb-4 text-[clamp(2rem,4vw,2.6rem)] leading-tight">
            Life at Jaypee Greens
          </h2>

          <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto text-sm leading-relaxed">
            Legacy by Gaurs sits inside Noida&apos;s most famed luxury township — a
            boundless expanse of golf, gardens, sport and leisure, built to impact and
            evolve lifestyles not just across one lifetime, but several.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="card-lift relative h-56 rounded-2xl overflow-hidden group shadow-md cursor-pointer">
                <Image
                  src={card.image}
                  alt={`${card.title} — Legacy by Gaurs, Jaypee Greens`}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 230px"
                  quality={80}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/85"></div>

                {/* Gold frame that fades in on hover */}
                <div className="absolute inset-2 rounded-xl border border-[#DCA54A]/0 transition-all duration-500 group-hover:border-[#DCA54A]/60 pointer-events-none"></div>

                <div className="absolute bottom-0 p-4 transition-transform duration-500 group-hover:-translate-y-1.5">
                  <p className="text-white text-sm font-medium leading-snug">
                    {card.title}
                  </p>
                  <span className="block h-[2px] w-0 bg-[#DCA54A] mt-2 transition-all duration-500 group-hover:w-10"></span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
