import { FaMapMarkerAlt, FaGolfBall, FaRoad, FaCrown, FaBuilding, FaAward, FaGem, FaShieldAlt } from "react-icons/fa";
import Reveal from "./Reveal";

const keyReasons = [
  { icon: <FaGolfBall />, text: "Frontage on an 18-hole Greg Norman golf course" },
  { icon: <FaMapMarkerAlt />, text: "Inside Jaypee Greens, an established luxury township" },
  { icon: <FaRoad />, text: "Minutes from Pari Chowk, metro & the Yamuna Expressway" },
  { icon: <FaGem />, text: "Scarcity: only 265 condominiums and 20 villas" },
  { icon: <FaBuilding />, text: "Four 34-storey towers with a connecting sky bridge" },
];

const additionalValue = [
  { icon: <FaCrown />, text: "Every home a 4 BHK — no compromise inventory" },
  { icon: <FaAward />, text: "Gaurs Group: 30 years, 75,000+ units delivered" },
  { icon: <FaShieldAlt />, text: "RERA registered — UPRERAPRJ688396/10/2024" },
];

const InvestList = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, i) => (
      <li
        key={i}
        className="group flex items-center gap-3 rounded-lg px-3 py-2 -mx-3 transition-all duration-300 hover:bg-white hover:shadow-md hover:translate-x-1 cursor-default"
      >
        <span className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0 bg-[#DCA54A]/10 text-[#DCA54A] text-base transition-all duration-300 group-hover:bg-[#DCA54A] group-hover:text-white group-hover:scale-110">
          {item.icon}
        </span>
        <span className="text-gray-800 text-sm">{item.text}</span>
      </li>
    ))}
  </ul>
);

export default function ReasonsToInvest() {
  return (
    <section className="w-full bg-[#FAF8F4] py-16 px-6" id="investment">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        <Reveal className="text-center">
          <p className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3">
            Reasons to Invest
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Where Growth Meets Grandeur
          </h2>

          <div className="gold-rule mx-auto mt-5" style={{ background: "linear-gradient(90deg, transparent, #DCA54A, transparent)" }} />

          <p className="text-gray-600 text-sm mt-4 max-w-2xl mx-auto">
            An address inside an established golf township, from a developer with a
            30-year delivery record — scarcity and credibility in one place.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 md:px-[8rem]">

          <Reveal>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Key Reasons
            </h4>
            <InvestList items={keyReasons} />
          </Reveal>

          <Reveal delay={120}>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Additional Value
            </h4>
            <InvestList items={additionalValue} />
          </Reveal>

        </div>

        <Reveal>
          <p className="text-gray-600 text-sm mt-6 leading-relaxed text-center">
            For buyers, this means a residence crafted to be cherished for generations.
            For investors, it is a genuinely finite asset in Greater Noida&apos;s most
            established luxury address.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
