"use client";

import { useState } from "react";
import GuidePicture from "./GuidePicture";

// Drag (or arrow-key) to wipe between two homes. A full-size transparent
// range input does the work, so mouse, touch and keyboard all come for free.
/** @param {{ left: any, right: any, leftLabel: string, rightLabel: string, caption?: string }} props */
export default function CompareSlider({ left, right, leftLabel, rightLabel, caption }) {
  const [pos, setPos] = useState(50);

  return (
    <figure className="w-full">
      <div
        className="compare relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[#0F1535] shadow-[0_40px_80px_-40px_rgba(15,21,53,0.7)] md:aspect-[16/8]"
        style={{ "--pos": `${pos}%` }}
      >
        <GuidePicture media={right} sizes="(max-width: 1280px) 100vw, 1200px" className="absolute inset-0 h-full w-full object-cover" />
        <div className="compare-top absolute inset-0">
          <GuidePicture media={left} sizes="(max-width: 1280px) 100vw, 1200px" className="absolute inset-0 h-full w-full object-cover" />
        </div>

        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-[#0F1535]/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F5E7C8] backdrop-blur-md md:left-6 md:top-6">
          {leftLabel}
        </span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1A2352] backdrop-blur-md md:right-6 md:top-6">
          {rightLabel}
        </span>

        <div className="compare-handle pointer-events-none absolute inset-y-0 -translate-x-1/2">
          <div className="mx-auto h-full w-[2px] bg-gradient-to-b from-transparent via-[#F5E7C8] to-transparent" />
          <div className="compare-knob absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#F5E7C8] bg-[#0F1535]/70 text-[#F5E7C8] shadow-xl backdrop-blur-md">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          step={0.5}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Compare ${leftLabel} and ${rightLabel}`}
          aria-valuetext={`${Math.round(pos)}% ${leftLabel}`}
          className="compare-range absolute inset-0 h-full w-full opacity-0"
        />
      </div>
      {caption ? (
        <figcaption className="mt-4 text-center text-sm text-[#5b6078]">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
