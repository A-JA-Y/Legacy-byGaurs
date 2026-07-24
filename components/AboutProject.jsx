"use client";
import { FaCheck } from "react-icons/fa";
import ImageSlider from "./ImageSlider";
import Reveal from "./Reveal";

import towerExterior from "../assets/tower-exterior.webp";
import golfView from "../assets/golf-view.webp";
import gallerySkyLounge from "../assets-legacybygaurs/Gallery-1-Legacy-by-Gaurs.webp";
import galleryLiving from "../assets-legacybygaurs/Gallery-2-Legacy-by-Gaurs-2.webp";
import galleryResidence from "../assets-legacybygaurs/Gallery-4-Legacy-by-Gaurs.webp";
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
        <Reveal className="hidden md:flex flex-col items-start relative w-full md:w-1/2 h-[500px]">
          <ImageSlider
            images={[
              towerExterior,
              gallerySkyLounge,
              golfView,
              galleryLiving,
              clubhouse,
              galleryResidence,
              livingArea,
            ]}
            alt="Legacy by Gaurs"
          />
        </Reveal>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">

          <Reveal>
            <h6 className="text-[#c8952a] font-semibold text-xs tracking-widest uppercase">
              It&apos;s either in your genes or your genius
            </h6>

            <Title className="text-4xl font-bold text-gray-900 leading-tight mt-4">
              About Legacy by Gaurs
            </Title>

            <div className="gold-rule mt-4" />
          </Reveal>

          <Reveal delay={100}>
            <p className="text-gray-600 text-sm leading-relaxed">
              Legacy by Gaurs is an ultra-luxury address set within Jaypee Greens,
              Greater Noida&apos;s most celebrated golf township. Four iconic towers —
              Buckingham, Edinburgh, Kensington and Versailles — rise beside 20
              individually crafted Legacy Villas.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              Every residence is a magnificent 4 BHK, framed by an 18-hole golf course
              designed by Greg Norman on one side and the expanse of Pari Chowk on the
              other. It is a harmonious blend of super-luxury condominiums and
              ultra-luxurious villas, crafted to be cherished for generations.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              Inspired by the Fleur — the emblem of nobility and timeless heritage —
              this is not merely a residence. It is a legacy.
            </p>
          </Reveal>

          {/* Checklist */}
          <Reveal delay={150}>
            <ul className="flex flex-col gap-2 mt-1">
              {[
                "18-Hole Greg Norman Golf Course",
                "House of Royals — Ultra-Modern Clubhouse",
                "HELIX — The Sky Bridge Between Towers",
                "4 BHK Condominiums & Legacy Villas",
              ].map((item) => (
                <li
                  key={item}
                  className="group flex items-start gap-2 text-gray-700 text-sm rounded-md px-2 py-1 -mx-2 transition-all duration-300 hover:bg-[#faf6e8] hover:translate-x-1"
                >
                  <FaCheck className="mt-0.5 text-[#c8952a] flex-shrink-0 text-sm transition-transform duration-300 group-hover:scale-125" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-4">
              <button
                onClick={openModal}
                className="btn-shine inline-block bg-[#c8952a] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-[#b07d1f] hover:shadow-lg hover:shadow-[#c8952a]/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                Download Brochure
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
