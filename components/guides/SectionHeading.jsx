// Chapter heading: oversized outlined numeral behind an eyebrow + H2.
// h2 sizes use the `!` modifier because globals.css sets an unlayered h2 size.
/** @param {{ index?: number, eyebrow?: string, title: string, intro?: string, dark?: boolean, center?: boolean }} props */
export default function SectionHeading({ index, eyebrow, title, intro, dark = false, center = false }) {
  return (
    <header className={`relative mb-10 md:mb-14 ${index ? "pt-6 md:pt-10" : ""} ${center ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}`}>
      {index ? (
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute -top-12 select-none text-[7rem] font-bold leading-none md:-top-20 md:text-[9.5rem] ${
            center ? "left-1/2 -translate-x-1/2" : "-left-2 md:-left-6"
          } ${dark ? "chapter-numeral-dark" : "chapter-numeral"}`}
          style={{ fontFamily: "var(--font-work-sans)" }}
        >
          {String(index).padStart(2, "0")}
        </span>
      ) : null}
      {eyebrow ? (
        <p
          data-reveal="up"
          className={`relative mb-4 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] ${
            dark ? "text-[#DCA54A]" : "text-[#a8841e]"
          }`}
        >
          <span className={`h-px w-8 ${dark ? "bg-[#DCA54A]/70" : "bg-[#C49A2B]/60"}`} />
          {eyebrow}
        </p>
      ) : null}
      <h2
        data-reveal="up"
        data-reveal-delay="80"
        className={`relative text-[1.9rem]! font-bold leading-[1.12] md:text-[2.6rem]! ${dark ? "text-[#F5E7C8]" : "text-[#141a3d]"}`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          data-reveal="up"
          data-reveal-delay="160"
          className={`relative mt-5 text-base leading-relaxed md:text-lg ${dark ? "text-white/75" : "text-[#4a4f66]"}`}
        >
          {intro}
        </p>
      ) : null}
    </header>
  );
}
