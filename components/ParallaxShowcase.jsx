import Image from "next/image";
import Link from "next/link";
import towerExterior from "../assets/tower-exterior.webp";

// Full-bleed parallax interlude between sections.
export default function ParallaxShowcase({
  image = towerExterior,
  alt = "Legacy by Gaurs towers rising above the Jaypee Greens golf course",
  eyebrow = "It's either in your genes or your genius",
  title = "Where Fairways Meet the Skyline",
  text = "Four 34-storey towers and 20 Legacy Villas beside an 18-hole Greg Norman golf course — with Pari Chowk, the Aqua Line metro and the Yamuna Expressway minutes away.",
  cta = { label: "Explore the Residences", href: "/villas-configurations" },
}) {
  return (
    <section className="relative w-full h-[78vh] min-h-[520px] overflow-hidden bg-[#0F1535]">
      <div className="absolute inset-[-18%_0]" data-parallax="0.22">
        <Image src={image} alt={alt} fill quality={78} sizes="100vw" className="object-cover" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1535]/90 via-[#0F1535]/55 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0F1535]/80 to-transparent" />

      <div className="relative h-full max-w-6xl mx-auto px-6 flex items-center">
        <div className="max-w-xl">
          <p data-reveal="up" className="uppercase text-[11px] md:text-xs tracking-[0.35em] text-[#DCA54A] font-semibold mb-5">
            {eyebrow}
          </p>
          <h2
            data-reveal="mask"
            className="text-4xl! md:text-6xl! font-bold leading-[1.05] text-[#F5E7C8]"
          >
            {title}
          </h2>
          <div data-reveal="up" data-reveal-delay="150">
            <p className="text-white/80 text-sm md:text-base leading-relaxed mt-6">{text}</p>
            {cta ? (
              <Link
                href={cta.href}
                data-magnetic
                className="btn-shine group inline-flex items-center gap-3 mt-8 border border-[#DCA54A] text-[#F5E7C8] text-xs font-semibold uppercase tracking-[0.25em] px-7 py-4 hover:bg-[#DCA54A] hover:text-[#0F1535]"
              >
                {cta.label}
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
