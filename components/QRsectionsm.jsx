import Image from "next/image";
import reraStrip from "../assets/rera-strip.webp";
import { brand } from "@/data/brand";

// Mobile-only RERA strip under the hero.
const ReraStrip = () => {
  return (
    <div className="block md:hidden w-full bg-[#F2EDE0] py-[5px] text-[1rem]">
      <Image
        src={reraStrip}
        alt={`${brand.name} – ${brand.positioning}`}
        className="w-full h-auto object-contain"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 400px"
        quality={80}
      />
      <p className="text-center text-[10px] leading-snug text-[#5A5A5A] px-3 pt-1">
        RERA No.:{" "}
        <a
          href={brand.rera.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#B8892A]"
        >
          {brand.rera.number}
        </a>
      </p>
    </div>
  );
};

export default ReraStrip;
