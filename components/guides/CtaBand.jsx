import GuidePicture from "./GuidePicture";
import CtaButton from "./CtaButton";

/**
 * @param {{
 *   media: any, eyebrow?: string, title: string, text?: string, align?: "center" | "left",
 *   ctas?: { label: string, action?: "brochure", href?: string, icon?: string, variant?: string, cta?: string }[]
 * }} props
 */
// Full-bleed parallax call-to-action between chapters.
export default function CtaBand({ media, eyebrow, title, text, ctas = [], align = "center" }) {
  const centered = align === "center";
  return (
    <section className="relative isolate overflow-hidden bg-[#0F1535] text-white">
      <div className="absolute inset-[-18%_0] -z-10" data-parallax="0.16">
        <GuidePicture media={media} sizes="100vw" className="h-full w-full object-cover opacity-70" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0B1030]/85 via-[#0F1535]/65 to-[#0B1030]/90" />
      <div className="absolute inset-0 -z-10 banner-lines opacity-50 pointer-events-none" />

      <div className={`mx-auto max-w-5xl px-6 py-24 md:py-32 ${centered ? "text-center" : ""}`}>
        {eyebrow ? (
          <p data-reveal="up" className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#DCA54A]">
            {eyebrow}
          </p>
        ) : null}
        <p
          data-reveal="up"
          data-reveal-delay="80"
          className="text-3xl font-bold leading-tight text-[#F5E7C8] md:text-5xl"
          style={{ fontFamily: "var(--font-work-sans)" }}
        >
          {title}
        </p>
        {text ? (
          <p
            data-reveal="up"
            data-reveal-delay="160"
            className={`mt-6 text-base leading-relaxed text-white/75 md:text-lg ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
          >
            {text}
          </p>
        ) : null}
        {ctas.length ? (
          <div
            data-reveal="up"
            data-reveal-delay="240"
            className={`mt-10 flex flex-wrap gap-3 ${centered ? "justify-center" : ""}`}
          >
            {ctas.map((c) => (
              <CtaButton key={c.label} {...c} size="lg">
                {c.label}
              </CtaButton>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
