// Endless luxury ticker. The track is duplicated so the loop is seamless;
// the copy is aria-hidden so screen readers hear the list once.
const defaultItems = [
  "Buckingham",
  "Edinburgh",
  "Kensington",
  "Versailles",
  "House of Royals",
  "HELIX Sky Bridge",
  "Windsor Podium",
  "Legacy Villas",
  "18-Hole Greg Norman Golf Course",
  "Jaypee Greens",
];

function Track({ items, dark, hidden = false }) {
  return (
    <ul className="marquee-track" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-center gap-12 whitespace-nowrap">
          <span
            className={`text-2xl md:text-4xl font-semibold tracking-tight transition-colors duration-300 ${
              dark ? "text-[#F5E7C8]/85 hover:text-[#DCA54A]" : "text-[#1A2352]/85 hover:text-[#C49A2B]"
            }`}
            style={{ fontFamily: "var(--font-work-sans)" }}
          >
            {item}
          </span>
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="text-[#DCA54A] flex-shrink-0">
            <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" fill="currentColor" />
          </svg>
        </li>
      ))}
    </ul>
  );
}

export default function Marquee({ items = defaultItems, reverse = false, speed = 45, tone = "light" }) {
  const dark = tone === "dark";

  return (
    <div
      className={`w-full py-7 md:py-9 border-y ${
        dark ? "bg-[#0F1535] border-[#DCA54A]/20" : "bg-[#FAF8F4] border-[#e8dfc8]"
      }`}
    >
      <div className={`marquee ${reverse ? "marquee-reverse" : ""}`} style={{ "--marquee-speed": `${speed}s` }}>
        <Track items={items} dark={dark} />
        <Track items={items} dark={dark} hidden />
      </div>
    </div>
  );
}
