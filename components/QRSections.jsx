import Image from "next/image";
import qrCode from "../assets/rera-qr-code.webp";
import { brand } from "@/data/brand";

// RERA + collection-account disclosure. Figures are taken verbatim from the
// official Legacy by Gaurs brochure (p. 1).
const QRSection = () => {
  const { rera, collectionAccount: acc } = brand;

  return (
    <section className="w-full bg-[#141004] px-[30px] py-[45px]">
      <div className="max-w-screen-xl mx-auto overflow-hidden">
        <div className="float-right ml-4">
          <Image
            src={qrCode}
            alt={`RERA QR Code – ${brand.name}`}
            width={110}
            height={110}
            className="block object-contain"
            priority
          />
        </div>

        <address className="not-italic text-right text-white text-[13px] leading-[1.7] tracking-wide">
          <p className="mb-0.5">
            <strong className="tracking-widest">RERA NO.:-</strong>{" "}
            <span itemProp="identifier">{rera.number}</span>
          </p>
          <p className="mb-2 text-[#cccccc] text-[12px]">
            <a
              href={rera.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cccccc] hover:text-white no-underline"
            >
              {rera.url}
            </a>
          </p>

          <p className="mb-1">
            <strong className="tracking-widest">COLLECTION ACCOUNT DETAILS:</strong>
          </p>
          <p className="mb-0">
            <strong className="tracking-widest">NAME</strong>: {acc.name}
          </p>
          <p className="mb-1">
            <strong className="tracking-widest">COLLECTION ACCOUNT NO.</strong>:{" "}
            {acc.number}
          </p>
          <p className="mb-0.5">
            <strong className="tracking-widest">BANK NAME</strong>: {acc.bank}{" "}
            <strong className="tracking-widest">| IFSC CODE: {acc.ifsc}</strong>
          </p>
          <p className="mb-0">
            <strong className="tracking-widest">BRANCH ADDRESS</strong>: {acc.branch}
          </p>
        </address>

        <div className="clear-both" />
      </div>
    </section>
  );
};

export default QRSection;
