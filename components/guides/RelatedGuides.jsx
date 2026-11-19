import Link from "next/link";
import GuidePicture from "./GuidePicture";

// "Keep exploring" cards at the foot of a guide.
/** @param {{ items: { href: string, media: any, tag: string, title: string, text: string }[] }} props */
export default function RelatedGuides({ items }) {
  return (
    <section className="bg-[#FAF8F4] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p data-reveal="up" className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#a8841e]">
          Keep exploring
        </p>
        <p
          data-reveal="up"
          className="mb-10 text-3xl font-bold text-[#141a3d] md:text-4xl"
          style={{ fontFamily: "var(--font-work-sans)" }}
        >
          More on Legacy by Gaurs
        </p>
        <div className="grid gap-6 md:grid-cols-3" data-stagger="90">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-reveal="up"
              className="card-lift group block overflow-hidden rounded-3xl border border-[#e8dfc8] bg-white"
            >
              <div className="zoom-frame relative aspect-[16/10] overflow-hidden">
                <GuidePicture
                  media={item.media}
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1A2352] backdrop-blur">
                  {item.tag}
                </span>
              </div>
              <div className="p-6">
                <p className="text-lg font-semibold leading-snug text-[#141a3d]">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#5b6078]">{item.text}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a8841e]">
                  Read more
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
