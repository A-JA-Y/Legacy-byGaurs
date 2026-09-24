// Numbers that count up as they scroll into view (data-count → MotionLayer).
const projectStats = [
  { value: "4", label: "Iconic towers" },
  { value: "265", label: "4 BHK condominiums" },
  { value: "20", label: "Legacy Villas" },
  { value: "18", label: "Hole Greg Norman golf course" },
  { value: "34", label: "Floors per tower" },
  { value: "4,765", label: "Sq. ft. largest residence" },
];

export default function StatsBand({
  stats = projectStats,
  eyebrow = "Legacy in Numbers",
  title = "A Finite Address, Crafted for Generations",
  tone = "dark",
}) {
  const dark = tone === "dark";

  return (
    <section
      className={`relative w-full overflow-hidden py-16 md:py-20 px-6 ${
        dark ? "bg-[#1A2352] text-[#F5E7C8]" : "bg-[#FAF8F4] text-gray-900"
      }`}
    >
      {dark ? <div className="absolute inset-0 banner-lines opacity-60 pointer-events-none" /> : null}

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12" data-reveal="up">
          <p className="uppercase text-xs tracking-[0.3em] text-[#DCA54A] font-semibold mb-3">{eyebrow}</p>
          <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${dark ? "text-[#F5E7C8]" : "text-gray-900"}`}>
            {title}
          </h2>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-3 ${stats.length > 4 ? "lg:grid-cols-6" : "lg:grid-cols-4"} gap-px rounded-2xl overflow-hidden ${
            dark ? "bg-[#DCA54A]/20" : "bg-[#e8dfc8]"
          }`}
          data-stagger="90"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              data-reveal="up"
              className={`group relative text-center px-4 py-8 transition-colors duration-500 ${
                dark ? "bg-[#1A2352] hover:bg-[#222C63]" : "bg-white hover:bg-[#fffaf0]"
              }`}
            >
              <p
                className="text-4xl md:text-5xl font-bold text-shimmer tabular-nums"
                style={{ fontFamily: "var(--font-work-sans)" }}
                data-count
              >
                {s.value}
              </p>
              <p className={`text-xs mt-3 leading-snug uppercase tracking-wider ${dark ? "text-[#C9CEE4]" : "text-gray-500"}`}>
                {s.label}
              </p>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-[#DCA54A] transition-all duration-500 group-hover:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
