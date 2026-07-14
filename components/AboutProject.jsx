"use client";
import { FaCheck } from "react-icons/fa";
import ImageSlider from "./ImageSlider";

import towerExterior from "../assets/tower-exterior.webp";
import golfView from "../assets/golf-view.webp";
import entrance from "../assets/entrance.webp";
import clubhouse from "../assets/clubhouse.webp";
import livingArea from "../assets/living-area.webp";

import { useModal } from "./ModalContext";

const AboutProject = ({ heading }) => {
  const { openModal } = useModal();
  const Title = heading ? "h1" : "h2";

  return (
    <section
      id="overview"
      className="w-full bg-white py-[70px] px-[30px] md:min-h-[750px]"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 center-box">

        {/* Left: Images */}
        <div className="hidden md:flex flex-col items-start relative w-full md:w-1/2 h-[500px]">
          <ImageSlider
            images={[towerExterior, golfView, entrance, clubhouse, livingArea]}
            alt="Legacy by Gaurs"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">

          <h6 className="text-[#c8952a] font-semibold text-xs tracking-widest uppercase">
            It&apos;s either in your genes or your genius
          </h6>

          <Title className="text-4xl font-bold text-gray-900 leading-tight">
            About Legacy by Gaurs
          </Title>

          <p className="text-gray-600 text-sm leading-relaxed">
            Legacy by Gaurs is an ultra-luxury address set within Jaypee Greens,
            Greater Noida&apos;s most celebrated golf township. Four iconic towers —
            Buckingham, Edinburgh, Kensington and Versailles — rise beside 20
            individually crafted Legacy Villas.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Every residence is a magnificent 4 BHK, framed by an 18-hole golf course
            designed by Greg Norman on one side and the expanse of Pari Chowk on the
            other. It is a harmonious blend of super-luxury condominiums and
            ultra-luxurious villas, crafted to be cherished for generations.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Inspired by the Fleur — the emblem of nobility and timeless heritage —
            this is not merely a residence. It is a legacy.
          </p>

          {/* Checklist */}
          <ul className="flex flex-col gap-2 mt-1">
            {[
              "18-Hole Greg Norman Golf Course",
              "House of Royals — Ultra-Modern Clubhouse",
              "HELIX — The Sky Bridge Between Towers",
              "4 BHK Condominiums & Legacy Villas",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-gray-700 text-sm"
              >
                <FaCheck className="mt-0.5 text-[#c8952a] flex-shrink-0 text-sm" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <button
              onClick={openModal}
              className="inline-block bg-[#c8952a] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-[#b07d1f] transition-colors duration-300 cursor-pointer"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
