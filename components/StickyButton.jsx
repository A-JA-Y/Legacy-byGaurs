"use client";
import { FaDownload } from "react-icons/fa";

import { useModal } from "./ModalContext";

// The brochure is always gated: this only ever opens the enquiry modal, and the
// PDF is released by InvestmentModal once the lead has been submitted.
//
// The tab sits above the floating Call/WhatsApp stack in the bottom-right corner
// (the stack is 128px tall below md, 152px from md). On short, landscape-phone
// viewports bottom-56 pushes the tab into the 74px header, over the menu button,
// so there it sits just above the stack instead.
export default function StickyDownloadButton() {
  const { openModal } = useModal();

  return (
    <button
      onClick={openModal}
      aria-label="Download the Legacy by Gaurs brochure"
      className="
        pulse-gold fixed bottom-56 right-0
        max-md:[@media(max-height:480px)]:bottom-36 md:[@media(max-height:480px)]:bottom-40
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
