const checkItems = [
  "Overlooking Pari Chowk, Greater Noida",
  "Frontage on the 18-hole Jaypee Greens golf course",
  "Delta 1 Metro Station (Aqua Line) close by",
  "Direct access to the Yamuna Expressway",
  "Seamless connectivity to the Noida–Greater Noida Expressway",
  "Short drive to the Buddh International Circuit",
  "Close to the upcoming Noida International Airport, Jewar",
  "Well connected to Delhi via DND & FNG Expressway",
];

// Query-based embed — no place-ID dependency.
const MAP_QUERY = "Jaypee+Greens+Golf+Course,+Greater+Noida";

export default function LocationAdvantages() {
  return (
    <section className="w-full bg-white py-16 px-6" id="location">
      <div className="max-w-5xl mx-auto">

        <p className="text-center text-xs font-bold uppercase mb-4 text-[#c8922a] tracking-[0.2em]">
          Location &amp; Connectivity
        </p>

        <h2 className="text-center font-bold text-gray-900 mb-14 text-3xl md:text-4xl leading-tight">
          A Legacy of Unmatched Convenience
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* LEFT: TEXT */}
          <div className="flex-1 max-w-lg">

            <h3 className="font-bold text-gray-900 mb-3 text-base">
              Strategic Connectivity
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              Set at Plot B-10 inside Jaypee Greens, Legacy by Gaurs enjoys residences
              with stunning views of a pristine golf course on one side and the
              expansive Pari Chowk on the other. With easy access to major
              expressways, metro connectivity and the upcoming Noida International
              Airport, it offers strong long-term growth and everyday convenience.
            </p>

            <ul className="space-y-4">
              {checkItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#c8922a] mt-1">✓</span>
                  <span className="text-gray-800 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: MAP */}
          <div className="flex-1 w-full">
            <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md border border-[#e5dcc5]">
              <iframe
                title="Legacy by Gaurs location – Jaypee Greens, Greater Noida"
                src={`https://maps.google.com/maps?q=${MAP_QUERY}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <a
              href={`https://maps.google.com/?q=${MAP_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-[#c8922a] hover:underline"
            >
              View on Google Maps →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
