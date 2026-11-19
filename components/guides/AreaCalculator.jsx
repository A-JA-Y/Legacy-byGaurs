"use client";

import { useMemo, useState } from "react";
import CtaButton from "./CtaButton";

// Rate-on-carpet calculator for the super built-up vs carpet area guide.
// Areas come from data/residences.js (the brochure). It never shows a project
// price: the rate, fit-out and other charges are whatever the visitor types.
const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

const inrShort = (n) => {
  if (n >= 1e7) return `₹${(n / 1e7).toLocaleString("en-IN", { maximumFractionDigits: 2 })} Cr`;
  if (n >= 1e5) return `₹${(n / 1e5).toLocaleString("en-IN", { maximumFractionDigits: 2 })} L`;
  return inr(n);
};

const num = (v) => {
  const n = parseFloat(String(v).replace(/[^\d.]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : 0;
};

function Field({ id, label, hint, value, onChange, prefix = "₹", suffix, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9CEE4]">
        {label}
      </label>
      <div className="flex items-center rounded-xl border border-white/15 bg-white/5 px-4 transition focus-within:border-[#DCA54A] focus-within:bg-white/10">
        {prefix ? <span className="text-white/50">{prefix}</span> : null}
        <input
          id={id}
          inputMode="decimal"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value.replace(/[^\d.,]/g, ""))}
          className="calc-input w-full bg-transparent px-2 py-3 text-base text-white placeholder:text-white/30 focus:outline-none"
        />
        {suffix ? <span className="whitespace-nowrap text-xs text-white/50">{suffix}</span> : null}
      </div>
      {hint ? <p className="mt-1.5 text-xs text-white/45">{hint}</p> : null}
    </div>
  );
}

/** @param {{ units: { unit: string, carpetSqft: number, totalSqft: number }[] }} props */
export default function AreaCalculator({ units }) {
  // Collapse the eight unit plans into their four distinct sizes.
  const sizes = useMemo(() => {
    const map = new Map();
    for (const u of units) {
      const key = `${u.carpetSqft}-${u.totalSqft}`;
      if (!map.has(key)) map.set(key, { carpet: u.carpetSqft, total: u.totalSqft, units: [] });
      map.get(key).units.push(u.unit.replace("Unit ", ""));
    }
    return [...map.values()].sort((a, b) => a.carpet - b.carpet);
  }, [units]);

  const [sel, setSel] = useState(0);
  const [rate, setRate] = useState("");
  const [fitout, setFitout] = useState("");
  const [other, setOther] = useState("");
  const [maint, setMaint] = useState("10");

  const s = sizes[sel];
  const factor = s.total / s.carpet;
  const share = (s.carpet / s.total) * 100;
  const loading = ((s.total - s.carpet) / s.carpet) * 100;

  const r = num(rate);
  const price = r * s.total;
  const carpetRate = r * factor;
  const trueRate = (price + num(fitout) + num(other)) / s.carpet;
  const m = num(maint);

  // Ring geometry for the carpet-share dial.
  const R = 54;
  const C = 2 * Math.PI * R;

  return (
    <div className="overflow-hidden rounded-3xl bg-[#0F1535] text-white shadow-[0_50px_90px_-50px_rgba(15,21,53,0.9)] ring-1 ring-[#DCA54A]/20">
      <div className="grid lg:grid-cols-[1.05fr_1fr]">
        {/* Inputs */}
        <div className="space-y-7 border-b border-white/10 p-6 md:p-10 lg:border-b-0 lg:border-r">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#DCA54A]">Calculator</p>
            <p className="mt-2 text-2xl font-bold text-[#F5E7C8]" style={{ fontFamily: "var(--font-work-sans)" }}>
              What does the rate look like on carpet?
            </p>
          </div>

          <fieldset>
            <legend className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9CEE4]">
              1. Pick a home
            </legend>
            <div className="grid grid-cols-2 gap-2">
              {sizes.map((z, i) => (
                <label
                  key={`${z.carpet}-${z.total}`}
                  className={`cursor-pointer rounded-2xl border px-4 py-3 transition-all duration-300 ${
                    sel === i
                      ? "border-[#DCA54A] bg-[#DCA54A]/15 shadow-[0_0_0_1px_rgba(220,165,74,0.4)]"
                      : "border-white/12 bg-white/[0.03] hover:border-white/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="calc-size"
                    className="sr-only"
                    checked={sel === i}
                    onChange={() => setSel(i)}
                  />
                  <span className="block text-sm font-semibold text-white">
                    {z.total.toLocaleString("en-IN")} sq. ft. total
                  </span>
                  <span className="mt-0.5 block text-xs text-white/60">
                    {z.carpet.toLocaleString("en-IN")} carpet · Unit{z.units.length > 1 ? "s" : ""} {z.units.join(", ")}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="calc-rate"
              label="2. Rate quoted on total area"
              value={rate}
              onChange={setRate}
              suffix="/ sq. ft."
              placeholder="Enter your quote"
              hint="Prices are on request — use the rate you were given."
            />
            <Field
              id="calc-maint"
              label="Maintenance rate (example)"
              value={maint}
              onChange={setMaint}
              suffix="/ sq. ft. / month"
              hint="₹10 is an example, not the project’s rate."
            />
            <Field
              id="calc-fitout"
              label="3. Fit-out budget"
              value={fitout}
              onChange={setFitout}
              placeholder="Optional"
              hint="Homes are handed over as a raw structure."
            />
            <Field
              id="calc-other"
              label="4. Other charges"
              value={other}
              onChange={setOther}
              placeholder="Optional"
              hint="Stamp duty, registration, GST, club fee."
            />
          </div>
        </div>

        {/* Results */}
        <div className="relative p-6 md:p-10" aria-live="polite">
          <div className="flex items-center gap-6">
            <svg width="132" height="132" viewBox="0 0 132 132" className="shrink-0 -rotate-90" aria-hidden="true">
              <circle cx="66" cy="66" r={R} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
              <circle
                cx="66"
                cy="66"
                r={R}
                fill="none"
                stroke="url(#calcGold)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={C}
                strokeDashoffset={C * (1 - share / 100)}
                style={{ transition: "stroke-dashoffset 1s var(--ease-expo)" }}
              />
              <defs>
                <linearGradient id="calcGold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F5E7C8" />
                  <stop offset="100%" stopColor="#C49A2B" />
                </linearGradient>
              </defs>
            </svg>
            <div>
              <p className="text-4xl font-bold text-[#F5E7C8]" style={{ fontFamily: "var(--font-work-sans)" }}>
                {share.toFixed(0)}%
              </p>
              <p className="text-sm text-white/65">of total area is carpet</p>
              <p className="mt-2 text-sm text-white/80">
                Loading <strong className="text-[#DCA54A]">{loading.toFixed(0)}%</strong> · multiply by{" "}
                <strong className="text-[#DCA54A]">×{factor.toFixed(2)}</strong>
              </p>
            </div>
          </div>

          <dl className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <dt className="text-[11px] uppercase tracking-[0.18em] text-white/55">Rate on carpet</dt>
              <dd className="mt-1 text-xl font-semibold text-white">
                {r ? `${inr(carpetRate)} / sq. ft.` : `₹1,000 → ${inr(1000 * Number(factor.toFixed(2)))}`}
              </dd>
              {!r ? <p className="mt-1 text-xs text-white/45">Example. Enter your quote to see yours.</p> : null}
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <dt className="text-[11px] uppercase tracking-[0.18em] text-white/55">Base price on total area</dt>
              <dd className="mt-1 text-xl font-semibold text-white">{r ? inrShort(price) : "—"}</dd>
            </div>
            <div className="rounded-2xl border border-[#DCA54A]/40 bg-[#DCA54A]/10 p-4 sm:col-span-2">
              <dt className="text-[11px] uppercase tracking-[0.18em] text-[#F5E7C8]">
                The rate that tells the truth
              </dt>
              <dd className="mt-1 text-2xl font-bold text-[#F5E7C8]">
                {r ? `${inr(trueRate)} / sq. ft. of carpet` : "Add your rate to see it"}
              </dd>
              <p className="mt-1 text-xs text-white/55">(price + fit-out + other charges) ÷ carpet area</p>
            </div>
          </dl>

          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/55">Monthly maintenance at the same rate</p>
            {[
              ["Billed on carpet (as at Legacy)", s.carpet, true],
              ["If it were billed on total area", s.total, false],
            ].map(([label, area, on]) => (
              <div key={label} className="mt-3">
                <div className="flex justify-between text-sm">
                  <span className={on ? "text-white" : "text-white/60"}>{label}</span>
                  <span className={on ? "font-semibold text-[#DCA54A]" : "text-white/60"}>{inr(m * area)}</span>
                </div>
                <div className="mt-1.5 h-2 rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full ${on ? "bg-gradient-to-r from-[#F5E7C8] to-[#C49A2B]" : "bg-white/30"}`}
                    style={{ width: `${(area / s.total) * 100}%`, transition: "width 0.8s var(--ease-expo)" }}
                  />
                </div>
              </div>
            ))}
            <p className="mt-3 text-xs text-white/45">
              Compare the monthly amount between projects, never the rate alone. The actual rate is confirmed on the cost sheet.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton href="#book-site-visit" icon="file" cta="calculator-cost-sheet">
              Get the Cost Sheet
            </CtaButton>
            <CtaButton href="/floor-plans" variant="glass" cta="calculator-floor-plans">
              See the Floor Plans
            </CtaButton>
          </div>
        </div>
      </div>
    </div>
  );
}
