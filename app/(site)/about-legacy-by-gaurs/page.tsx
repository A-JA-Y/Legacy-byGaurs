import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import AboutProject from "@/components/AboutProject";
import GaurTownship from "@/components/GaurTownship";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: "About Legacy by Gaurs | Golf-View Residences at Jaypee Greens",
  description:
    "Learn about Legacy by Gaurs — 265 uber-luxury 4 BHK condominiums across four towers and 20 Legacy Villas at Jaypee Greens, Greater Noida, overlooking an 18-hole Greg Norman golf course.",
  alternates: { canonical: `${brand.site}/about-legacy-by-gaurs` },
};

export default function AboutLegacyByGaursPage() {
  return (
    <>
      <PageBanner
        eyebrow="The Project"
        title="About Legacy by Gaurs"
        subtitle="An ultra-luxury address inside Jaypee Greens — four iconic towers and 20 Legacy Villas, framed by a golf course on one side and Pari Chowk on the other."
      />
      <ModalWrapper />
      <AboutProject heading={true} />
      <GaurTownship />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
