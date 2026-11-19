"use client";

import { useState } from "react";
import CtaButton from "./CtaButton";

// "Which Legacy home fits you?" — four either/or questions taken straight from
// the guide's "Choose a Legacy Villa if / Choose a Legacy Condominium if" lists.
const QUESTIONS = [
  {
    q: "What do you want right outside your door?",
    villa: "A private terrace, my own entrance and no neighbours above me",
    condo: "Golf course views from height",
  },
  {
    q: "How do you want to live day to day?",
    villa: "Across several levels, with basement space for cars, storage, a theatre or staff",
    condo: "On a single level, with a lift",
  },
  {
    q: "How much fit-out are you ready to take on?",
    villa: "A larger fit-out across a house with several levels",
    condo: "I’d rather fit out one floor than several",
  },
  {
    q: "What matters most when you think about the future?",
    villa: "Rarity — being one of just twenty owners",
    condo: "A home that’s easier to price, rent out or sell later",
  },
];

export default function HomeFitQuiz() {
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const answered = answers.filter(Boolean).length;
  const villa = answers.filter((a) => a === "villa").length;
  const condo = answers.filter((a) => a === "condo").length;
  const done = answered === QUESTIONS.length;
  const lean = answered ? (villa / answered) * 100 : 50;

  const pick = (i, v) => setAnswers((prev) => prev.map((a, j) => (j === i ? v : a)));

  let verdict = null;
  if (done) {
    if (villa > condo) {
      verdict = {
        title: "A Legacy Villa fits the way you want to live",
        body: "You value a terrace, your own entrance, basement space and the rarity of being one of twenty owners — and you’re ready for a bigger fit-out. Ask for the plot size, the built-up area of each level and the usable basement area.",
        cta: { label: "Get Legacy Villa Details", href: "#book-site-visit", icon: "price", cta: "quiz-villa" },
      };
    } else if (condo > villa) {
      verdict = {
        title: "A Legacy Condominium fits the way you want to live",
        body: "You want golf views from height, single-level living with a lift, one floor to fit out, and a home that’s easier to price, rent out or sell. Compare the eight unit plans on carpet area.",
        cta: { label: "Get Condominium Price List", href: "#book-site-visit", icon: "price", cta: "quiz-condo" },
      };
    } else {
      verdict = {
        title: "You’re torn — and that’s the best reason to visit",
        body: "Half of what you want points to a villa and half to a condominium. Both share the same club, golf course and gate, so walk through both on one site visit and decide in person.",
        cta: { label: "Book a Site Visit", href: "#book-site-visit", icon: "calendar", cta: "quiz-tie" },
      };
    }
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-[#e8dfc8] bg-white shadow-[0_40px_80px_-50px_rgba(26,35,82,0.55)]">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#efe7d4] bg-[#FAF8F4] px-6 py-5 md:px-10">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#a8841e]">Interactive</p>
          <p className="mt-1 text-xl font-bold text-[#141a3d]" style={{ fontFamily: "var(--font-work-sans)" }}>
            Which Legacy home fits you?
          </p>
        </div>
        <p className="text-sm text-[#5b6078]" aria-live="polite">
          {answered} of {QUESTIONS.length} answered
        </p>
      </div>

      {/* Lean meter */}
      <div className="px-6 pt-6 md:px-10">
        <div className="flex justify-between text-[11px] font-semibold uppercase tracking-[0.2em]">
          <span className="text-[#a8841e]">Legacy Villa</span>
          <span className="text-[#1A2352]">Condominium</span>
        </div>
        <div className="relative mt-2 h-2.5 rounded-full bg-gradient-to-r from-[#DCA54A]/30 via-[#e9e4f5] to-[#1A2352]/30">
          <span
            className="absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[#1A2352] shadow-lg transition-[left] duration-700"
            style={{ left: `${100 - lean}%`, transitionTimingFunction: "var(--ease-expo)" }}
          />
        </div>
      </div>

      <ol className="grid gap-6 px-6 py-8 md:grid-cols-2 md:px-10">
        {QUESTIONS.map((item, i) => (
          <li key={item.q}>
            <fieldset>
              <legend className="mb-3 text-sm font-semibold text-[#141a3d]">
                <span className="mr-2 text-[#C49A2B]">{i + 1}.</span>
                {item.q}
              </legend>
              <div className="grid gap-2">
                {[
                  ["villa", item.villa],
                  ["condo", item.condo],
                ].map(([value, label]) => {
                  const on = answers[i] === value;
                  return (
                    <label
                      key={value}
                      className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 text-sm leading-snug transition-all duration-300 ${
                        on
                          ? value === "villa"
                            ? "border-[#C49A2B] bg-[#FFF8E8] text-[#3b2f10] shadow-sm"
                            : "border-[#1A2352] bg-[#F1F3FA] text-[#141a3d] shadow-sm"
                          : "border-[#ece4d0] text-[#4a4f66] hover:border-[#d9c79c]"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`fit-${i}`}
                        value={value}
                        checked={on}
                        onChange={() => pick(i, value)}
                        className="mt-0.5 accent-[#C49A2B]"
                      />
                      {label}
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </li>
        ))}
      </ol>

      <div className="border-t border-[#efe7d4] bg-[#0F1535] px-6 py-8 text-white md:px-10" aria-live="polite">
        {verdict ? (
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xl font-bold text-[#F5E7C8]" style={{ fontFamily: "var(--font-work-sans)" }}>
                {verdict.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{verdict.body}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <CtaButton {...verdict.cta}>{verdict.cta.label}</CtaButton>
              <button
                type="button"
                onClick={() => setAnswers(Array(QUESTIONS.length).fill(null))}
                className="rounded-full border border-white/25 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 transition hover:border-white/60 hover:text-white"
              >
                Start over
              </button>
            </div>
          </div>
        ) : (
          <p className="text-sm text-white/70">
            Answer all four to see which home suits you — then get the details for that home.
          </p>
        )}
      </div>
    </div>
  );
}
