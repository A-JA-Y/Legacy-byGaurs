"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function ImageSlider({ images, alt = "Legacy by Gaurs" }) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    stopAutoSlide();
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current !== null) {
      const delta = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(delta) > 40) (delta < 0 ? nextSlide : prevSlide)();
      touchStartX.current = null;
    }
    startAutoSlide();
  };

  const arrowClass =
    "absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full " +
    "bg-black/35 text-white backdrop-blur-sm border border-white/20 cursor-pointer " +
    "opacity-0 group-hover/slider:opacity-100 transition-all duration-300 " +
    "hover:bg-[#C49A2B] hover:border-[#C49A2B] hover:scale-110 active:scale-95";

  return (
    <div
      className="group/slider relative w-full h-full overflow-hidden rounded-lg shadow-2xl"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Images — active slide gets a slow ken-burns drift */}
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={`${alt} — image ${index + 1} of ${images.length}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10 hero-kenburns" : "opacity-0"
          }`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 512px"
          quality={80}
        />
      ))}

      {/* Soft bottom gradient so controls sit on a readable surface */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent z-10 pointer-events-none" />

      {/* Counter chip */}
      <span className="absolute top-3 right-3 z-20 text-[11px] font-semibold tracking-widest text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/15">
        {current + 1} / {images.length}
      </span>

      {/* Arrows — appear on hover */}
      <button onClick={prevSlide} aria-label="Previous image" className={`${arrowClass} left-3`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button onClick={nextSlide} aria-label="Next image" className={`${arrowClass} right-3`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dots — active dot stretches into a gold pill */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`h-2 rounded-full cursor-pointer transition-all duration-400 ${
              index === current
                ? "w-6 bg-[#DCA54A]"
                : "w-2 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
