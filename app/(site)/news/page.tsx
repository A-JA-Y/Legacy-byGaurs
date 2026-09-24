"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import NewsData from "@/data/newsData";
import StickyDownloadButton from "@/components/StickyButton";

type News = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  excerpt: string;
  date: string;
};

export default function NewsPage() {
  const sorted: News[] = useMemo(
    () =>
      [...NewsData].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    []
  );

  const featured = sorted[0];
  const rest = sorted.slice(1);

  const categories = ["All", ...Array.from(new Set(NewsData.map((n) => n.category)))];
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? rest : rest.filter((n) => n.category === active);

  if (!featured) return null;

  return (
    <section className="w-full min-h-screen bg-white">

      {/* ── HERO ── */}
      <div className="relative overflow-hidden bg-[#0F1535] px-6 pt-16 pb-12">
        <div className="absolute inset-0 banner-lines pointer-events-none" />
        <div className="float-orb absolute -top-24 -right-20 w-80 h-80 rounded-full bg-[#DCA54A]/20 blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">

          <p className="hero-anim text-xs uppercase tracking-[0.35em] text-[#DCA54A] font-semibold mb-3">
            News &amp; Updates
          </p>

          <h1 className="hero-anim hero-anim-1 text-4xl md:text-5xl font-semibold text-[#F5E7C8] mb-3 leading-tight">
            Legacy by Gaurs News
          </h1>
          <p className="hero-anim hero-anim-2 text-white/70 text-sm md:text-base max-w-2xl mb-10">
            The latest on Jaypee Greens, Greater Noida circle rates, property policy and the infrastructure that affects home buyers.
          </p>

          {/* Featured */}
          <Link href={`/news/${featured.slug}`}>
            <div data-reveal="up" className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden group bg-white shadow-2xl shadow-black/30 ring-1 ring-white/10 transition-shadow duration-500 hover:shadow-[#DCA54A]/20">
              <div className="relative w-full h-56 md:h-auto bg-gradient-to-br from-amber-50 to-yellow-100">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 512px"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span className="inline-block text-xs font-semibold tracking-wide text-amber-700 bg-amber-50 rounded-full px-3 py-1 mb-4 w-fit">
                  {featured.category}
                </span>

                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug group-hover:text-[#A8841E] transition-colors mb-3">
                  {featured.title}
                </h2>

                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {featured.excerpt}
                </p>

                <p className="text-xs text-gray-400">
                  {new Date(featured.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </Link>

          {/* ── FILTERS ── */}
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-sm px-4 py-1.5 rounded-full border transition-all duration-300 cursor-pointer ${active === cat
                    ? "bg-[#DCA54A] text-[#0F1535] border-[#DCA54A] shadow-lg shadow-[#DCA54A]/30"
                    : "border-white/20 text-white/70 hover:border-[#DCA54A] hover:text-[#DCA54A]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* ── GRID ── */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-sm text-gray-400 mb-6">
          {filtered.length} {filtered.length === 1 ? "story" : "stories"}
          {active !== "All" && ` in ${active}`}
        </p>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-16">No stories in this category yet.</p>
        ) : (
          <div key={active} className="grid sm:grid-cols-2 md:grid-cols-3 gap-5" data-stagger="90">
            {filtered.map((news) => (
              <Link key={news.id} href={`/news/${news.slug}`} data-reveal="up" className="block">
                <div data-tilt className="group flex flex-col h-full bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-[#DCA54A]/50">
                  <div className="relative w-full h-40 bg-gradient-to-br from-amber-50 to-yellow-100">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 320px"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    />
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-2">
                      {news.category}
                    </p>

                    <h3 className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-[#A8841E] transition-colors mb-2 flex-1">
                      {news.title}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                      {news.excerpt}
                    </p>

                    <p className="text-xs text-gray-400 mt-3">
                      {new Date(news.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="relative">
        <StickyDownloadButton />
      </div>

    </section>
  );
}

