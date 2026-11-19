"use client";

import { useState } from "react";
import CtaButton from "./CtaButton";

// Tick-as-you-go pre-signing checklist. Items are passed in as
// { title, body } where body may contain links (rendered by the server page).
/**
 * @param {{ items: { title: string, body: import("react").ReactNode }[], doneTitle: string,
 *   doneCta: { label: string, action?: "brochure", href?: string, icon?: string, cta?: string } }} props
 */
export default function SignChecklist({ items, doneTitle, doneCta }) {
  const [checked, setChecked] = useState(() => items.map(() => false));
  const count = checked.filter(Boolean).length;
  const all = count === items.length;

  return (
    <div className="rounded-3xl border border-[#e8dfc8] bg-white p-6 shadow-[0_40px_80px_-55px_rgba(26,35,82,0.6)] md:p-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-[#141a3d]" aria-live="polite">
          {count} of {items.length} checked
        </p>
        <div className="h-2 w-40 overflow-hidden rounded-full bg-[#f1ead8] md:w-64">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#dca54a] to-[#a8841e]"
            style={{ width: `${(count / items.length) * 100}%`, transition: "width 0.6s var(--ease-expo)" }}
          />
        </div>
      </div>

      <ul className="grid gap-3 md:grid-cols-2">
        {items.map((item, i) => (
          <li key={item.title}>
            <label
              className={`flex h-full cursor-pointer gap-4 rounded-2xl border p-5 transition-all duration-300 ${
                checked[i] ? "border-[#C49A2B] bg-[#FFFAEE]" : "border-[#efe7d4] hover:border-[#dcc89a]"
              }`}
            >
              <input
                type="checkbox"
                className="peer sr-only"
                checked={checked[i]}
                onChange={() => setChecked((prev) => prev.map((c, j) => (j === i ? !c : c)))}
              />
              <span
                aria-hidden="true"
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 peer-focus-visible:ring-2 peer-focus-visible:ring-[#DCA54A] peer-focus-visible:ring-offset-2 ${
                  checked[i] ? "border-[#C49A2B] bg-[#C49A2B] text-white" : "border-[#d9cba5] text-transparent"
                }`}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6.5l2.5 2.5L10 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>
                <span className="block font-semibold text-[#141a3d]">{item.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-[#5b6078]">{item.body}</span>
              </span>
            </label>
          </li>
        ))}
      </ul>

      <div
        className={`mt-6 flex flex-col gap-4 rounded-2xl p-5 transition-all duration-500 md:flex-row md:items-center md:justify-between ${
          all ? "bg-[#0F1535] text-white" : "bg-[#FAF8F4] text-[#4a4f66]"
        }`}
      >
        <p className={`text-sm ${all ? "text-[#F5E7C8]" : ""}`}>
          {all ? doneTitle : "Work through the list before you sign — we can send every document it asks for."}
        </p>
        <CtaButton {...doneCta} variant={all ? "gold" : "navy"}>
          {doneCta.label}
        </CtaButton>
      </div>
    </div>
  );
}
