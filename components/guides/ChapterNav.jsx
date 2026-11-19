"use client";

import { useEffect, useRef, useState } from "react";
import { useModal } from "@/components/ModalContext";

// Sticky chapter rail with scroll-spy and a reading-progress line. It tracks
// the site header (which hides on scroll down) so the two never overlap.
/** @param {{ chapters: { id: string, label: string }[], ctaLabel?: string }} props */
export default function ChapterNav({ chapters, ctaLabel = "Download Brochure" }) {
  const { openModal } = useModal();
  const [active, setActive] = useState(chapters[0]?.id);
  const [headerShown, setHeaderShown] = useState(true);
  const [progress, setProgress] = useState(0);
  const railRef = useRef(null);

  // Follow the header's hidden state.
  useEffect(() => {
    const header = document.querySelector(".site-header");
    if (!header) return;
    const sync = () => setHeaderShown(!header.classList.contains("is-hidden"));
    sync();
    const mo = new MutationObserver(sync);
    mo.observe(header, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);

  // Scroll-spy: the last chapter whose top has passed the upper third wins.
  useEffect(() => {
    const els = chapters.map((c) => document.getElementById(c.id)).filter(Boolean);
    if (!els.length) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const line = window.innerHeight * 0.33;
        let current = els[0].id;
        for (const el of els) {
          if (el.getBoundingClientRect().top <= line) current = el.id;
        }
        setActive(current);

        const first = els[0].getBoundingClientRect().top + window.scrollY;
        const last = els[els.length - 1];
        const end = last.getBoundingClientRect().bottom + window.scrollY - window.innerHeight;
        const p = (window.scrollY - first + line) / Math.max(1, end - first + line);
        setProgress(Math.min(1, Math.max(0, p)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [chapters]);

  // Keep the active chip visible inside the horizontal rail.
  useEffect(() => {
    const rail = railRef.current;
    const chip = rail?.querySelector(`[data-chip="${active}"]`);
    if (!rail || !chip) return;
    const left = chip.offsetLeft - rail.clientWidth / 2 + chip.clientWidth / 2;
    rail.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <nav
      aria-label="On this page"
      className="chapter-nav glass-light sticky z-20 w-full border-x-0 border-t-0 shadow-[0_12px_30px_-22px_rgba(26,35,82,0.6)]"
      style={{ top: headerShown ? 72 : 0 }}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-3 md:px-8">
        <span className="hidden shrink-0 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8a6a14] md:block">
          Chapters
        </span>
        <ul ref={railRef} className="chapter-scroll flex flex-1 gap-1.5 overflow-x-auto py-3">
          {chapters.map((c, i) => {
            const on = c.id === active;
            return (
              <li key={c.id} className="shrink-0">
                <a
                  href={`#${c.id}`}
                  data-chip={c.id}
                  aria-current={on ? "true" : undefined}
                  className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-[12px] font-medium transition-all duration-300 ${
                    on
                      ? "bg-[#1A2352] text-white shadow-md"
                      : "text-[#3b3f58] hover:bg-[#1A2352]/5 hover:text-[#1A2352]"
                  }`}
                >
                  <span className={`text-[10px] tabular-nums ${on ? "text-[#DCA54A]" : "text-[#b08d3a]"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {c.label}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          onClick={openModal}
          data-cta="chapter-nav-brochure"
          className="btn-shine hidden shrink-0 rounded-full bg-gradient-to-r from-[#E2B25C] to-[#C49A2B] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0F1535] shadow-md transition hover:-translate-y-0.5 sm:block"
        >
          {ctaLabel}
        </button>
      </div>
      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-full origin-left bg-gradient-to-r from-[#a8841e] via-[#dca54a] to-[#f5e7c8]"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </nav>
  );
}
