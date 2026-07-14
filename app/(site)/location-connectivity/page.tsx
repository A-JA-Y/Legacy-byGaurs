import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import LocationAdvantages from "@/components/LocationAdvantages";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = {
  title: "Legacy by Gaurs Location — Jaypee Greens Connectivity",
  description:
    "Legacy by Gaurs location at Jaypee Greens offers seamless connectivity to Pari Chowk, metro, Yamuna Expressway and the upcoming Noida International Airport.",
  alternates: { canonical: "https://www.legacybygaurs.com/location-connectivity" },
};

const locationHighlights = [
  "Near Pari Chowk, Greater Noida",
  "Alpha 1 Metro Station — 5 mins walk (Aqua Line)",
  "30 mins drive to Noida International Airport (Jewar)",
  "12 mins drive to Buddh International Circuit (F1 Track)",
  "60 mins drive to Delhi IGI Airport",
  "8 mins to Yamuna Expressway entry",
  "Seamless connectivity to Noida–Greater Noida Expressway",
  "Well connected via DND & FNG Expressway",
];

const distanceData = [
  { destination: "Pari Chowk Metro", distance: "4 km", time: "8 mins" },
  { destination: "Yamuna Expressway entry", distance: "6 km", time: "8 mins" },
  { destination: "Noida International Airport (Jewar)", distance: "25 km", time: "30 mins" },
  { destination: "DND Flyway (Delhi border)", distance: "28 km", time: "35 mins" },
  { destination: "Galgotias University", distance: "4 km", time: "5 mins" },
  { destination: "Yatharth Hospital", distance: "5 km", time: "7 mins" },
  { destination: "Grand Venice Mall", distance: "7 km", time: "10 mins" },
  { destination: "Indira Gandhi International Airport", distance: "50 km", time: "60 mins" },
  { destination: "Buddh F1 Circuit", distance: "9 km", time: "12 mins" },
  { destination: "Six Senses Golf & Spa Resort", distance: "4 km", time: "6 mins" },
];

const educationData = [
  "Galgotias University — 5 mins",
  "Sharda University — 10 mins",
  "Bennett University — 15 mins",
  "GL Bajaj Institute of Technology — 8 mins",
  "Delhi Public School Greater Noida — 10 mins",
  "Pathways School — 12 mins",
  "Step by Step School — 15 mins",
  "Lotus Valley International School — 18 mins",
  "Jaypee Public School — 7 mins",
];

const healthcareData = [
  "Yatharth Super-Specialty Hospital — 7 mins",
  "Sharda Hospital — 10 mins",
  "Kailash Hospital — 12 mins",
  "Jaypee Hospital, Noida — 20 mins",
  "Fortis Hospital, Noida — 25 mins",
  "Apollo Hospital, Noida — 28 mins",
  "Felix Hospital — 15 mins",
];

const workspaceData = [
  "Adobe Systems, MetLife, HCL, TCS, Wipro, Samsung — 15–25 mins",
  "Advant Navis Business Park — 15 mins",
  "Knowledge Park I, II, III, IV & V — 5–15 mins",
  "Tech Zone IV — 10 mins",
  "Surajpur Industrial Area — 12 mins",
  "YEIDA Industrial Belt — 20 mins",
  "Upcoming Data Centre Park — 18 mins",
];

const lifestyleData = [
  "The Grand Venice Mall — 10 mins",
  "Ansal Plaza — 8 mins",
  "Jaypee Greens Town Centre — 7 mins",
  "Logix Mall (Noida) — 25 mins",
  "DLF Mall of India — 35 mins",
  "Radisson Blu Hotel — 5 mins",
  "Six Senses Golf & Spa Resort — 6 mins",
  "Crowne Plaza Greater Noida — 12 mins",
  "Buddh International Circuit (F1 Track) — 12 mins",
  "Yamuna Sports Complex — 25 mins",
];

const futureInfraProjects = [
  "Noida International Airport at Jewar — India's largest airport",
  "Film City at Sector 21, YEIDA — under development",
  "Jewar–YEIDA Industrial Corridor — attracting global manufacturers",
  "Metro Phase 2 expansion — more stations near Jaypee Greens",
  "FNG Expressway — Faridabad–Noida–Ghaziabad connectivity",
  "Boraki Multi-Modal Transport Hub — rail + bus + metro junction",
  "Greater Noida Data Centre Cluster — among India's largest",
  "Yamuna Expressway Industrial Development Authority — next growth driver",
];

const faqData = [
  {
    question: "Where exactly is the Legacy by Gaurs location?",
    answer: "The Legacy by Gaurs location is Jaypee Greens, Greater Noida, Gautam Buddha Nagar district, Uttar Pradesh — directly accessible from the Noida–Greater Noida Expressway and minutes from Pari Chowk."
  },
  {
    question: "What is the nearest metro station to Legacy by Gaurs?",
    answer: "The nearest metro stations are Pari Chowk Metro Station (8 minutes) and Alpha 1 Metro Station (5 minutes), both on the Aqua Line."
  },
  {
    question: "How far is the Noida International Airport from Legacy by Gaurs?",
    answer: "The Noida International Airport at Jewar is approximately 25 km / 30 minutes from the Legacy by Gaurs location — via the Yamuna Expressway."
  },
  {
    question: "Is the Legacy by Gaurs location good for investment?",
    answer: "Yes. The Legacy by Gaurs location at Jaypee Greens sits at the centre of multiple infrastructure projects — Jewar airport, Film City, FNG Expressway, metro expansion and the YEIDA industrial corridor — making it one of the strongest long-term appreciation zones in the NCR."
  },
  {
    question: "Is Legacy by Gaurs well connected to Delhi?",
    answer: "Yes — the Legacy by Gaurs location is connected to Delhi via the Noida–Greater Noida Expressway and DND Flyway, with the Delhi border reachable in approximately 35 minutes."
  },
  {
    question: "What is the Legacy by Gaurs pin code?",
    answer: "The Legacy by Gaurs location at Jaypee Greens falls under PIN code 201310."
  }
];

export default function LocationConnectivityPage() {
  return (
    <>


      {/* Main Content Section */}
      <section className="w-full bg-white py-16 px-6" id="location">
        <div className="max-w-5xl mx-auto">

          {/* Label */}
          <p className="text-center text-xs font-bold uppercase mb-4 text-[#c8922a] tracking-[0.2em]">
            Location & Connectivity
          </p>

          {/* H1 Heading */}
          <h1 className="text-center font-bold text-gray-900 mb-6 text-3xl md:text-4xl leading-tight">
            Legacy by Gaurs Location — Jaypee Greens Connectivity & Neighbourhood Guide
          </h1>

          {/* Intro Paragraph */}
          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              The Legacy by Gaurs location is one of the most strategically positioned luxury addresses in the entire National Capital Region. Set at Plot B-10 inside Jaypee Greens, the project enjoys direct, low-traffic access to the Noida–Greater Noida Expressway, Pari Chowk, the Yamuna Expressway corridor and the upcoming Noida International Airport at Jewar. For luxury home buyers and investors, location is not just a feature — it is the single most important factor that protects long-term value. And Legacy by Gaurs is built around exactly that principle.
            </p>
            <div className="mt-4">
              <a
                href="https://maps.google.com/?q=Jaypee+Greens+Golf+Course,+Greater+Noida"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#c8922a] hover:bg-[#b07d20] text-white font-semibold px-6 py-3 rounded-md transition-colors"
              >
                Get Driving Directions →
              </a>
            </div>
          </div>

          {/* H2 - Where Exactly */}
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mt-12 mb-4">
            Where Exactly is Legacy by Gaurs?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
            Legacy by Gaurs sits at Plot No. B-10, Jaypee Greens, Sectors 19 &amp; 25, in the master-planned residential belt of Greater Noida, Gautam Buddha Nagar district, Uttar Pradesh. Jaypee Greens is one of the most premium pockets of Greater Noida — an established golf township now being crowned by Gaurs Group&apos;s marquee golf-view landmark.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
            The address sits at the intersection of three major growth corridors: the Noida–Greater Noida Expressway to the west, the Yamuna Expressway to the south, and the upcoming Noida International Airport at Jewar to the south-east. This triangle of infrastructure is exactly why the Legacy by Gaurs location is being called one of the most future-proof real estate addresses in North India.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-8">
            <p className="font-semibold text-gray-800">Project Address:</p>
            <p className="text-gray-600 text-sm">
              Legacy by Gaurs<br />
              Plot No. B-10, Jaypee Greens, Sector 19 &amp; 25<br />
              Tehsil &amp; District Gautam Buddha Nagar, Uttar Pradesh 201310
            </p>
          </div>

          {/* H2 - Why Location Matters */}
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mt-12 mb-4">
            Why the Jaypee Greens Address Matters
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
            When luxury buyers choose a residence, they are not just buying square footage — they are buying the address. The Legacy by Gaurs location delivers on every parameter that drives luxury appreciation in India:
          </p>
          <ul className="space-y-2 mb-8">
            {[
              "Golf frontage — Residences overlook an 18-hole Greg Norman course on one side and Pari Chowk on the other",
              "Mature infrastructure — Wide arterial roads, organised electricity, water and sewage already in place",
              "An established township — Jaypee Greens is a delivered, gated address with its own school, sports complex and clubs",
              "Connected on all four sides — Metro, expressway, airport and arterial roads",
              "Tier-1 social infrastructure — Schools, hospitals, malls and corporate offices already operating within a 10–15 minute radius"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">✓</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
            For investors and end-users alike, the Legacy by Gaurs location at Jaypee Greens offers the rare combination of luxury, lifestyle and long-term price appreciation potential.
          </p>

          {/* Main Content with Map - Keep Original Layout */}
          <div className="flex flex-col lg:flex-row gap-12 items-start mt-8">

            {/* LEFT: TEXT */}
            <div className="flex-1 max-w-lg">

              <h3 className="font-bold text-gray-900 mb-3 text-base">
                Strategic Connectivity
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                Located in Greater Noida near Pari Chowk, the project enjoys
                seamless connectivity to Delhi and other NCR regions. With easy
                access to major expressways, metro connectivity, and upcoming
                infrastructure developments, it offers strong future growth
                potential and everyday convenience.
              </p>

              <ul className="space-y-4">
                {locationHighlights.map((item, i) => (
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
                  src="https://maps.google.com/maps?q=Jaypee+Greens+Golf+Course,+Greater+Noida&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Legacy by Gaurs Location Map"
                ></iframe>
              </div>
              <a
                href="https://maps.google.com/?q=Jaypee+Greens+Golf+Course,+Greater+Noida"
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

      {/* Connectivity Sections */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-8 text-center">
            Connectivity from Legacy by Gaurs
          </h2>

          {/* Metro Connectivity */}
          <h3 className="font-bold text-gray-900 text-xl mb-3">Metro Connectivity</h3>
          <p className="text-gray-600 leading-relaxed mb-3 text-sm">
            The Aqua Line metro brings Legacy by Gaurs residents within walking distance of fast urban transit.
          </p>
          <ul className="space-y-1 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">Pari Chowk Metro Station — 8 minutes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">Alpha 1 Metro Station — 5 minutes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">Delta 1 Metro Station — 7 minutes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">NSEZ Metro Station — 25 minutes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">Sector 51 Metro Interchange (Blue Line) — 35 minutes</span>
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6 text-sm">
            The proposed Greater Noida Metro Phase 2 expansion is set to bring stations even closer to Jaypee Greens, further enhancing the Legacy by Gaurs location advantage.
          </p>

          {/* Road Connectivity */}
          <h3 className="font-bold text-gray-900 text-xl mb-3">Road Connectivity</h3>
          <ul className="space-y-1 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">Noida–Greater Noida Expressway — directly accessible, the spine of NCR connectivity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">Yamuna Expressway entry — 8 minutes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">DND Flyway (Delhi border) — 35 minutes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">Eastern Peripheral Expressway — 15 minutes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">Greater Noida West (Noida Extension) — 20 minutes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">FNG Expressway (under construction) — 10 minutes once operational</span>
            </li>
          </ul>

          {/* Air Connectivity */}
          <h3 className="font-bold text-gray-900 text-xl mb-3">Air Connectivity</h3>
          <ul className="space-y-1 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">Noida International Airport (Jewar) — 30 minutes (India's largest airport, scheduled to begin commercial operations soon)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">Indira Gandhi International Airport (Delhi) — 60 minutes via DND</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">Hindon Airport (Ghaziabad) — 45 minutes</span>
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6 text-sm">
            The proximity to the Jewar airport is the single biggest infrastructure tailwind for the Legacy by Gaurs location at Jaypee Greens — most analysts expect 30–60% land value appreciation within a 3–5 km radius of operational airports.
          </p>

          {/* Rail Connectivity */}
          <h3 className="font-bold text-gray-900 text-xl mb-3">Rail Connectivity</h3>
          <ul className="space-y-1 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">Boraki Multi-Modal Transport Hub (under construction) — 12 minutes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">Anand Vihar Railway Terminal — 50 minutes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#c8922a] mt-1">•</span>
              <span className="text-gray-600 text-sm">New Delhi Railway Station — 65 minutes</span>
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-8 text-sm">
            Boraki Hub, once operational, will be Greater Noida's primary rail terminal — making the Legacy by Gaurs location one of the best-connected railway-adjacent luxury addresses in the NCR.
          </p>
        </div>
      </section>

      {/* Distance Snapshot Table */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-6 text-center">
            Distance Snapshot — Legacy by Gaurs Location
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-semibold">Destination</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-semibold">Distance</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-semibold">Approx. Time</th>
                </tr>
              </thead>
              <tbody>
                {distanceData.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600 text-sm">{item.destination}</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600 text-sm">{item.distance}</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600 text-sm">{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
            Education Near Legacy by Gaurs
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            Jaypee Greens is surrounded by some of the most respected schools and universities in the region — meaning families never have to commute far for quality education.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {educationData.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Healthcare Section */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
            Healthcare Near Legacy by Gaurs
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            The Legacy by Gaurs location places residents within a 7–25 minute drive of multiple super-specialty hospitals.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {healthcareData.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Workspaces Section */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
            Workspaces Near Legacy by Gaurs
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            Greater Noida and Noida together form one of India's fastest-growing IT, manufacturing and corporate hubs. The Legacy by Gaurs location at Jaypee Greens puts residents within easy reach of the region's major employment zones.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {workspaceData.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
            Lifestyle, Shopping &amp; Entertainment Near Legacy by Gaurs
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            The Legacy by Gaurs location offers a balance of premium urban lifestyle and quiet township living.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {lifestyleData.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Future-Proof Section */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-4">
            Why the Legacy by Gaurs Location is Future-Proof
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            Most luxury townships in India are sold on what they will be. Legacy by Gaurs is being launched at the exact moment its surrounding infrastructure is being delivered. Here's what's happening within a 30-minute radius:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {futureInfraProjects.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#c8922a] mt-1">•</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4 text-sm">
            When all of these projects come online over the next 2–4 years, the Legacy by Gaurs location will be at the centre of one of India's most strategically planned growth corridors.
          </p>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="w-full bg-white py-16 px-6" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-gray-900 text-2xl md:text-3xl mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 text-base mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="relative">
        <StickyDownloadButton />
      </div>

      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                "@id": "https://www.legacybygaurs.com/location-connectivity#faq",
                "mainEntity": faqData.map(item => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                  }
                }))
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://www.legacybygaurs.com/location-connectivity#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.legacybygaurs.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Location & Connectivity",
                    "item": "https://www.legacybygaurs.com/location-connectivity"
                  }
                ]
              },
              {
                "@type": "WebPage",
                "@id": "https://www.legacybygaurs.com/location-connectivity#webpage",
                "url": "https://www.legacybygaurs.com/location-connectivity",
                "name": "Legacy by Gaurs Location — Jaypee Greens Connectivity",
                "description": "Legacy by Gaurs location at Jaypee Greens offers seamless connectivity to Pari Chowk, metro, Yamuna Expressway and the upcoming Noida International Airport.",
                "breadcrumb": {
                  "@id": "https://www.legacybygaurs.com/location-connectivity#breadcrumb"
                },
                "about": {
                  "@id": "https://www.legacybygaurs.com/#residence"
                },
                "mainEntity": {
                  "@id": "https://www.legacybygaurs.com/location-connectivity#faq"
                },
                "primaryImageOfPage": "https://www.legacybygaurs.com/legacy-hero.webp",
                "inLanguage": "en-IN"
              },
              {
                "@type": "ApartmentComplex",
                "@id": "https://www.legacybygaurs.com/#residence",
                "name": "Legacy by Gaurs",
                "description": "Uber-luxury golf-view 4 BHK condominiums and Legacy Villas at Jaypee Greens, Greater Noida, by Gaurs Group. 265 condominiums across four towers plus 20 villas.",
                "url": "https://www.legacybygaurs.com/",
                "image": "https://www.legacybygaurs.com/legacy-hero.webp",
                "numberOfAccommodationUnits": 285,
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Plot No. B-10, Jaypee Greens, Sector 19 & 25",
                  "addressLocality": "Greater Noida",
                  "addressRegion": "Uttar Pradesh",
                  "postalCode": "201310",
                  "addressCountry": "IN"
                },
                "amenityFeature": [
                  { "@type": "LocationFeatureSpecification", "name": "18-Hole Greg Norman Golf Course" },
                  { "@type": "LocationFeatureSpecification", "name": "House of Royals Clubhouse" },
                  { "@type": "LocationFeatureSpecification", "name": "HELIX Sky Bridge" },
                  { "@type": "LocationFeatureSpecification", "name": "Indoor Heated Pool" }
                ]
              },
              {
                "@type": "RealEstateAgent",
                "@id": "https://www.legacybygaurs.com/#organization",
                "name": "Legacy by Gaurs - Authorised Channel Partner",
                "url": "https://www.legacybygaurs.com/",
                "logo": "https://www.legacybygaurs.com/logo.png",
                "image": "https://www.legacybygaurs.com/legacy-hero.webp",
                "telephone": "+91-9810890353",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "601, SL Tower, 6th Floor, Alpha Commercial Belt",
                  "addressLocality": "Greater Noida",
                  "addressRegion": "Uttar Pradesh",
                  "postalCode": "201310",
                  "addressCountry": "IN"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Greater Noida"
                }
              }
            ]
          })
        }}
      />
    </>
  );
}