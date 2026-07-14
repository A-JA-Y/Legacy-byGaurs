"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { brand } from "@/data/brand";
import towerExterior from "@/assets/tower-exterior.webp";

const LiteYT = dynamic(() => import("@/components/LiteYT"), { ssr: false });

export default function WalkthroughSection() {
  const hasVideo = Boolean(brand.youtubeId);

  return (
    <section className="w-full bg-[#FAF8F4] py-16 px-6" id="walkthrough">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        <div className="text-center">
          <h6 className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3">
            {hasVideo ? "Project Walkthrough" : "A Different League"}
          </h6>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {hasVideo ? "Experience Legacy by Gaurs Virtually" : "One Lifetime Is Too Short a Window for Such a Grand View"}
          </h2>

          <p className="text-gray-600 text-sm mt-3 max-w-xl mx-auto">
            {hasVideo
              ? "Take a guided tour of the towers, the House of Royals clubhouse and the golf-facing residences."
              : "Four iconic towers rising above an 18-hole golf course. Book a site visit to walk the address in person."}
          </p>
        </div>

        <div className="relative w-full rounded-xl overflow-hidden shadow-lg max-w-[720px] mx-auto">
          <div className="aspect-video w-full h-full">
            {hasVideo ? (
              <LiteYT />
            ) : (
              <Image
                src={towerExterior}
                alt="Legacy by Gaurs – towers overlooking the Jaypee Greens golf course"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 720px"
                quality={82}
              />
            )}
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600 mb-3">
            Want complete details including pricing &amp; plans?
          </p>

          <a
            href="#book-site-visit"
            className="inline-block bg-[#DCA54A] hover:bg-[#C08F3C] text-white text-xs px-6 py-3 rounded uppercase transition-colors"
          >
            Get Full Details
          </a>
        </div>

      </div>
    </section>
  );
}
