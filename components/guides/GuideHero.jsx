import Link from "next/link";
import SplitText from "@/components/SplitText";
import GuidePicture from "./GuidePicture";
import AmbientFilm from "./AmbientFilm";
import CtaButton from "./CtaButton";

/**
 * @typedef {{ label: string, action?: "brochure", href?: string, icon?: string, variant?: string, size?: string, cta?: string }} HeroCta
 * @param {{
 *   media: any, film?: { webm: string, mp4: string }, eyebrow?: string, title: string,
 *   lead?: import("react").ReactNode, ctas?: HeroCta[], chips?: string[], crumb?: string,
 *   aside?: import("react").ReactNode, caption?: string
 * }} props
 */
// Full-height cinematic opener for a buyer guide: brochure render as the LCP
// poster, an ambient film fading in over it, then the H1, lead and CTAs.
export default function GuideHero({
  media,
  film,
  eyebrow,
  title,
  lead,
  ctas = [],
  chips = [],
  crumb,
  aside = null,
  caption = "Artistic impression",
}) {
  const poster = (
    <GuidePicture
      media={media}
      priority
      sizes="100vw"
      className="hero-kenburns absolute inset-0 h-full w-full object-cover"
    />
  );

  // Legibility layers between the media and the copy.
  const overlay = (
    <>
      {/* Wide screens: the copy sits left, so darken left to right. */}
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-[#0B1030]/90 via-[#0F1535]/60 to-[#0F1535]/5 md:block" />
      {/* Phones: the copy spans the width and sits low, so darken bottom to top. */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0B1030]/90 via-[#0B1030]/62 to-[#0B1030]/30 md:hidden" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0B1030] via-transparent to-[#0B1030]/30" />
      <div className="absolute inset-0 -z-10 banner-lines opacity-60 pointer-events-none" />
      <div className="float-orb absolute -left-24 top-16 -z-10 h-80 w-80 rounded-full bg-[#DCA54A]/20 blur-3xl pointer-events-none" />
    </>
  );

  return (
    <section className="relative isolate flex min-h-[calc(100svh-74px)] w-full items-end overflow-hidden bg-[#0F1535] text-white">
      {film ? (
        <AmbientFilm webm={film.webm} mp4={film.mp4} label="background film" poster={poster} overlay={overlay} />
      ) : (
        <>
          <div className="absolute inset-0 -z-10" data-parallax="0.12">{poster}</div>
          {overlay}
        </>
      )}

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 pb-16 pt-28 md:px-10 md:pb-20 lg:grid-cols-[1.35fr_1fr] lg:items-end">
        <div className="max-w-3xl">
          {crumb ? (
            <nav aria-label="Breadcrumb" className="hero-anim hero-anim-1 mb-6 text-[11px] uppercase tracking-[0.25em] text-white/55">
              <Link href="/" className="link-draw hover:text-white">Home</Link>
              <span className="mx-2 text-[#DCA54A]">/</span>
              <span className="text-white/80">{crumb}</span>
            </nav>
          ) : null}

          {eyebrow ? (
            <p className="hero-anim hero-anim-1 mb-5 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#DCA54A] md:text-xs">
              <span className="h-px w-10 bg-[#DCA54A]/70" />
              {eyebrow}
            </p>
          ) : null}

          <SplitText
            as="h1"
            text={title}
            delay={200}
            className="block text-[2.15rem] font-bold leading-[1.07] text-[#F5E7C8] sm:text-5xl lg:text-[3.6rem]"
          />

          <div
            className="line-grow mt-7 h-[2px] w-32"
            style={{ background: "linear-gradient(90deg, #DCA54A, transparent)", transformOrigin: "left" }}
          />

          {lead ? (
            <div className="hero-anim hero-anim-2 mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-white/80 md:text-base">
              {lead}
            </div>
          ) : null}

          {ctas.length ? (
            <div className="hero-anim hero-anim-3 mt-9 flex flex-wrap gap-3">
              {ctas.map((c) => (
                <CtaButton key={c.label} {...c} size={c.size ?? "lg"}>
                  {c.label}
                </CtaButton>
              ))}
            </div>
          ) : null}

          {chips.length ? (
            <ul className="hero-anim hero-anim-3 mt-8 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] tracking-wide text-white/75 backdrop-blur-sm"
                >
                  {chip}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {aside ? <div className="hero-anim hero-anim-3 hidden lg:block">{aside}</div> : null}
      </div>

      <p className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.25em] text-white/40 md:left-10">
        {caption}
      </p>
      <div className="hero-scroll-cue absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
