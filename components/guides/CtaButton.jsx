"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaCalculator,
  FaCalendarCheck,
  FaDownload,
  FaFileAlt,
  FaPhoneAlt,
  FaPlay,
  FaRupeeSign,
} from "react-icons/fa";
import { useModal } from "@/components/ModalContext";

// Icons are looked up by name so server components can pass them as props.
const ICONS = {
  arrow: FaArrowRight,
  calc: FaCalculator,
  calendar: FaCalendarCheck,
  download: FaDownload,
  file: FaFileAlt,
  phone: FaPhoneAlt,
  play: FaPlay,
  price: FaRupeeSign,
};

const VARIANTS = {
  // Gold on navy text: the brand gold with a contrast ratio that passes AA.
  gold: "bg-gradient-to-r from-[#E2B25C] via-[#DCA54A] to-[#C49A2B] text-[#0F1535] shadow-[0_14px_34px_-14px_rgba(220,165,74,0.75)] hover:shadow-[0_18px_40px_-12px_rgba(220,165,74,0.9)]",
  navy: "bg-[#1A2352] text-white hover:bg-[#0F1535] shadow-[0_14px_30px_-16px_rgba(26,35,82,0.7)]",
  glass: "border border-white/35 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:border-white/60",
  outline: "border border-[#1A2352]/25 bg-white text-[#1A2352] hover:border-[#C49A2B] hover:text-[#8a6a14]",
};

const SIZES = {
  md: "px-6 py-3.5 text-[11px]",
  lg: "px-8 py-4 text-xs",
};

// One button for every guide CTA.
//   action="brochure"  opens the gated brochure modal (the only way to the PDF)
//   href="/contact-us" internal route, "#id" in-page anchor, "tel:" call link
// `cta` is written to data-cta so GTM can tell the buttons apart.
/**
 * @param {{ children: import("react").ReactNode, action?: "brochure", href?: string, icon?: string,
 *   variant?: "gold" | "navy" | "glass" | "outline" | string, size?: "md" | "lg" | string, cta?: string, className?: string }} props
 */
export default function CtaButton({
  children,
  action,
  href,
  icon,
  variant = "gold",
  size = "md",
  cta,
  className = "",
}) {
  const { openModal } = useModal();
  const Icon = icon ? ICONS[icon] : null;

  const cls = `btn-shine group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold uppercase tracking-[0.18em] whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCA54A] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  const inner = (
    <>
      {Icon ? <Icon aria-hidden="true" className="text-[0.95em] shrink-0" /> : null}
      <span>{children}</span>
      {!Icon ? (
        <FaArrowRight
          aria-hidden="true"
          className="text-[0.85em] shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        />
      ) : null}
    </>
  );

  if (action === "brochure") {
    return (
      <button type="button" onClick={openModal} data-magnetic data-cta={cta} className={cls}>
        {inner}
      </button>
    );
  }

  if (href?.startsWith("/")) {
    return (
      <Link href={href} data-magnetic data-cta={cta} className={cls}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={href} data-magnetic data-cta={cta} className={cls}>
      {inner}
    </a>
  );
}
