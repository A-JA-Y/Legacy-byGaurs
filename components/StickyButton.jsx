"use client";
import { FaDownload } from "react-icons/fa";

import { useModal } from "./ModalContext";

// The brochure is always gated: this only ever opens the enquiry modal, and the
// PDF is released by InvestmentModal once the lead has been submitted.
export default function StickyDownloadButton() {
  const { openModal } = useModal();

  return (
    <button
      onClick={openModal}
      aria-label="Download the Legacy by Gaurs brochure"
      className="
        pulse-gold fixed bottom-16 right-0
        flex flex-col items-center justify-center
        bg-[#c8952a] text-white font-semibold
        shadow-lg transition-all duration-300
        hover:bg-[#b07d1f] hover:px-[10px] cursor-pointer
        px-[7px] py-[10px] z-[1000]
        rounded-l-md rounded-r-none
      "
    >
      <FaDownload size={16} className="rotate-90" />

      <div className="mt-[6px] flex flex-col items-center text-[11px] font-semibold leading-[1.1]">
        {"Brochure".split("").map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>
    </button>
  );
}
