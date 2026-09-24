import Image from "next/image";
import SplitText from "./SplitText";
import defaultImage from "../assets/golf-view.webp";

// Cinematic inner-page banner: parallax photograph, drifting gold line texture,
// word-by-word title rise. Entrance animations are pure CSS so the banner
// animates on first paint without waiting for hydration.
// headingLevel="h1" on pages that have no other <h1>.
export default function PageBanner({ title, subtitle = "", eyebrow = "", image = defaultImage, imageAlt = "", headingLevel = "h2" }) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0F1535] text-white">
      {/* Parallax photograph */}
      <div className="absolute inset-[-12%_0]" data-parallax="0.18">
        <Image
          src={image}
          alt={imageAlt || `${title} — Legacy by Gaurs, Jaypee Greens`}
          fill
          priority
          quality={70}
          sizes="100vw"
          className="object-cover hero-kenburns opacity-60"
        />
      </div>

      {/* Tint, vignette and moving line texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F1535]/80 via-[#1A2352]/70 to-[#0F1535]/95" />
      <div className="absolute inset-0 banner-lines pointer-events-none" />
      <div className="float-orb absolute -top-24 -left-20 w-72 h-72 rounded-full bg-[#DCA54A]/20 blur-3xl pointer-events-none" />
      <div
        className="float-orb absolute -bottom-28 -right-16 w-80 h-80 rounded-full bg-[#C49A2B]/15 blur-3xl pointer-events-none"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative max-w-5xl mx-auto text-center px-6 py-20 md:py-28">
        {eyebrow ? (
          <p className="hero-anim hero-anim-1 inline-flex items-center gap-3 uppercase text-[11px] md:text-xs tracking-[0.35em] text-[#DCA54A] font-semibold mb-5">
            <span className="h-px w-8 bg-[#DCA54A]/70" />
            {eyebrow}
            <span className="h-px w-8 bg-[#DCA54A]/70" />
          </p>
        ) : null}

        <SplitText
          as={headingLevel}
          text={title}
          delay={250}
          className="block text-4xl! md:text-5xl! lg:text-6xl! font-bold leading-[1.08] text-[#F5E7C8]"
        />

        <div
          className="line-grow mx-auto mt-6 h-[2px] w-28"
          style={{ background: "linear-gradient(90deg, transparent, #DCA54A, transparent)" }}
        />

        {subtitle ? (
          <p className="hero-anim hero-anim-3 text-white/80 text-sm md:text-base mt-6 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        ) : null}
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-cue absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
