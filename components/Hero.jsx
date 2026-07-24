"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

import heroDesktop from "../assets/legacy-hero.webp";
import heroMobile from "../assets/legacy-mb-hero.webp";
import golfView from "../assets/golf-view.webp";
import clubhouse from "../assets/clubhouse.webp";
import skyLounge from "../assets-legacybygaurs/Gallery-1-Legacy-by-Gaurs.webp";

const AUTOPLAY_MS = 6000;

// Slide 1 carries the branded banner art (title + RERA QR baked in), so its
// caption stays minimal; the rest get their own headline.
const slides = [
  {
    desktop: heroDesktop,
    mobile: heroMobile,
    alt: "Legacy by Gaurs – uber-luxury golf-view condominiums at Jaypee Greens, Greater Noida",
    title: "Where Legacy Meets Luxury",
    sub: "Uber-luxury golf-view residences at Jaypee Greens",
  },
  {
    desktop: golfView,
    alt: "Legacy by Gaurs towers at sunrise across the golf-course lake, Jaypee Greens",
    title: "Four Iconic Towers Above the Fairways",
    sub: "Buckingham · Edinburgh · Kensington · Versailles",
  },
  {
    desktop: clubhouse,
    alt: "House of Royals – the ultra-modern clubhouse at Legacy by Gaurs",
    title: "House of Royals",
    sub: "An ultra-modern clubhouse of state-of-the-art indulgence",
  },
  {
    desktop: skyLounge,
    alt: "Golf-view sky lounge residence interior at Legacy by Gaurs",
    title: "Residences Crafted for Generations",
    sub: "Magnificent 4 BHKs from 3,510 to 4,765 sq. ft.",
  },
];

const highlights = [
  "18-Hole Greg Norman Golf Course",
  "4 BHK Golf-View Condominiums",
  "20 Ultra-Luxury Legacy Villas",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  const goTo = useCallback(
    (index) => setCurrent((index + slides.length) % slides.length),
    []
  );
  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // One timeout per slide keeps the progress bar and the advance in sync.
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [current, paused, next]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current !== null) {
      const delta = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(delta) > 45) (delta < 0 ? next : prev)();
      touchStartX.current = null;
    }
    setPaused(false);
  };

  const arrowClass =
    "hidden md:flex absolute top-1/2 -translate-y-1/2 z-30 items-center justify-center w-11 h-11 rounded-full " +
    "bg-black/30 text-white backdrop-blur-sm border border-white/20 cursor-pointer " +
    "opacity-0 group-hover/hero:opacity-100 transition-all duration-300 " +
    "hover:bg-[#C49A2B] hover:border-[#C49A2B] hover:scale-110 active:scale-95";

  const active = slides[current];

  return (
    <section className="w-full">
      <div
        className="group/hero relative w-full aspect-[4/5] md:aspect-auto md:h-[78vh] overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Slides */}
        {slides.map((slide, index) => {
          const isActive = index === current;
          const slideClass = `hero-slide absolute inset-0 ${
            isActive ? "hero-slide-active z-10" : "z-0"
          }`;

          return (
            <div key={index} className={slideClass} aria-hidden={!isActive}>
              {slide.mobile ? (
                <>
                  <Image
                    src={slide.mobile}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    quality={82}
                    sizes="100vw"
                    className="hero-slide-img object-cover object-top md:hidden"
                  />
                  <Image
                    src={slide.desktop}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    quality={85}
                    sizes="100vw"
                    className="hero-slide-img object-cover object-center hidden md:block"
                  />
                </>
              ) : (
                <Image
                  src={slide.desktop}
                  alt={slide.alt}
                  fill
                  quality={85}
                  sizes="100vw"
                  className="hero-slide-img object-cover object-center"
                />
              )}
            </div>
          );
        })}

        {/* Cinematic gradients */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/75 via-black/30 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/30 to-transparent z-20 pointer-events-none" />

        {/* Caption band */}
        <div className="absolute inset-x-0 bottom-0 z-30 pb-12 md:pb-14 pointer-events-none">
          <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col gap-3 md:gap-4">

            <p className="text-white/85 text-[10px] md:text-xs tracking-[0.35em] uppercase font-semibold">
              Jaypee Greens · Greater Noida
            </p>

            {/* Re-keyed so the entrance animation replays each slide */}
            <div key={current}>
              <p
                className="hero-caption-line text-white text-2xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight max-w-2xl"
                style={{ fontFamily: "var(--font-work-sans)", textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}
              >
                {active.title}
              </p>
              <p className="hero-caption-line hero-caption-line-2 text-white/85 text-sm md:text-base mt-2 max-w-xl">
                {active.sub}
              </p>
            </div>

            {/* Feature chips — desktop only */}
            <div className="hidden md:flex flex-wrap gap-3 mt-1 pointer-events-auto">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-white text-[12px] tracking-wide font-medium px-4 py-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md transition-all duration-300 hover:bg-[#C49A2B]/80 hover:border-[#C49A2B] hover:-translate-y-0.5 cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DCA54A]" />
                  {item}
                </span>
              ))}
            </div>

            {/* Progress bars */}
            <div className="flex gap-2 mt-2 pointer-events-auto">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className="group/bar relative h-4 w-10 md:w-14 cursor-pointer"
                >
                  <span className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[3px] rounded-full bg-white/30 overflow-hidden transition-all duration-300 group-hover/bar:h-[5px]">
                    {index === current && (
                      <span
                        key={current}
                        className={`hero-progress-fill absolute inset-0 rounded-full bg-[#DCA54A] ${
                          paused ? "hero-progress-paused" : ""
                        }`}
                        style={{ "--hero-interval": `${AUTOPLAY_MS}ms` }}
                      />
                    )}
                    {index < current && (
                      <span className="absolute inset-0 rounded-full bg-white/60" />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button onClick={prev} aria-label="Previous slide" className={`${arrowClass} left-4`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button onClick={next} aria-label="Next slide" className={`${arrowClass} right-4`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Slide counter */}
        <span className="absolute top-4 left-4 md:top-auto md:bottom-14 md:left-auto md:right-8 z-30 text-[11px] font-semibold tracking-[0.2em] text-white/90 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/15">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>

        {/* Scroll cue */}
        <a
          href="#overview"
          aria-label="Scroll to overview"
          className="hidden md:block absolute bottom-3 left-1/2 -translate-x-1/2 z-30 text-white/80 hover:text-white transition-colors"
        >
          <span className="hero-scroll-cue block">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
