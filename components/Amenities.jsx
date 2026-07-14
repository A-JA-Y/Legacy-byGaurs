"use client";
import {
  FaGolfBall,
  FaSwimmingPool,
  FaBuilding,
  FaFilm,
  FaTableTennis,
  FaSpa,
  FaDumbbell,
  FaChess,
  FaGlassCheers,
  FaShieldAlt,
} from "react-icons/fa";

import clubLobby from "@/assets/club-lobby.webp";
import pool from "@/assets/pool.webp";
import gym from "@/assets/gym.webp";
import theatre from "@/assets/theatre.webp";
import billiards from "@/assets/billiards.webp";
import restaurant from "@/assets/restaurant.webp";
import partyHall from "@/assets/party-hall.webp";

const images = [clubLobby, pool, gym, theatre, billiards, restaurant, partyHall];

import ImageSlider from "@/components/ImageSlider";
import bgImg from "../assets/Lines-PNG-Free-Image.webp";
import { useModal } from "./ModalContext";

// Facilities as listed in the brochure — House of Royals / Club Imperial (p. 28),
// HELIX sky bridge (p. 34) and the Windsor podium (p. 37).
const amenities = [
  { icon: <FaGolfBall />, text: "18-Hole Greg Norman Golf Course" },
  { icon: <FaBuilding />, text: "House of Royals — Ultra-Modern Clubhouse" },
  { icon: <FaSwimmingPool />, text: "Indoor Heated Pool, Kids' Pool & Jacuzzi" },
  { icon: <FaDumbbell />, text: "Gymnasium, Yoga & Outdoor Gym" },
  { icon: <FaSpa />, text: "Spa, Sauna, Wellness & Treatment Zone" },
  { icon: <FaFilm />, text: "Private Theatre & Open-Air Theatre" },
  { icon: <FaChess />, text: "Billiards Lounge, Cards Room & Game Zone" },
  { icon: <FaGlassCheers />, text: "Restaurant, Café, Party Hall & Bar Counter" },
  { icon: <FaTableTennis />, text: "HELIX Sky Bridge — Sports & Herbal Gardens" },
  { icon: <FaShieldAlt />, text: "24×7 Security & Gated Community Living" },
];

export default function Amenities() {
  const { openModal } = useModal();

  return (
    <section
      id="amenities"
      className="w-full bg-[#1A2352] py-16 px-6 md:px-12 lg:px-20 text-[#F5E7C8] relative overflow-hidden"
    >
      {/* Decorative line texture */}
      <div
        className="absolute inset-0 opacity-3 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
        }}
      />
      <div
        className="absolute inset-0 opacity-3 transform scale-x-[-1] pointer-events-none"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "contain",
        }}
      />

      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        <div className="text-center">
          <h6 className="text-[#DCA54A] uppercase mb-4">Your Gateway to Ultimate Indulgence</h6>
          <h2 className="text-[#F5E7C8] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            A Sanctuary for Body, Mind &amp; Soul
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          <div className="flex-1 flex flex-col gap-5">
            <p className="text-sm md:text-base leading-relaxed">
              Welcome to the House of Royals — an ultra-modern clubhouse designed to
              offer state-of-the-art facilities and a sophisticated ambiance, where
              elegance meets comfort.
            </p>

            <ul className="flex flex-col gap-[18px]">
              {amenities.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="flex-shrink-0 text-lg text-[#DCA54A]">
                    {item.icon}
                  </span>
                  <span className="text-sm md:text-base">{item.text}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm md:text-base leading-relaxed mt-1">
              Whether you seek relaxation or an active lifestyle, every need is met —
              from the sky-high luxuries of the HELIX bridge to the landscaped
              Windsor podium below.
            </p>

            <div className="mt-3">
              <button
                onClick={openModal}
                className="inline-block bg-[#DCA54A] text-white text-xs rounded-[8px] font-bold uppercase px-7 py-3 cursor-pointer hover:bg-[#C08F3C] transition"
              >
                Download Brochure
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[50%] h-[300px] md:h-[550px] flex-shrink-0">
            <ImageSlider images={images} alt="Legacy by Gaurs amenities" />
          </div>

        </div>
      </div>
    </section>
  );
}
