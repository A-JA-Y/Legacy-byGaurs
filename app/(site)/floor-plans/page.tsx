import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import FloorPlanSection from "@/components/FloorPageSection";

import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import { brand } from "@/data/brand";

const TITLE =
  "Legacy by Gaurs Floor Plan | 4 BHK Condominium & Villa Layouts + PDF";
const DESCRIPTION =
  "Explore Legacy by Gaurs floor plans — 4 BHK condominiums from 3,510 to 4,765 sq. ft. across the Buckingham, Edinburgh, Kensington and Versailles towers, plus 20 Legacy Villas. Download the PDF.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${brand.site}/floor-plans`,
  },
  keywords:
    "Legacy by Gaurs floor plan, Legacy by Gaurs villas floor plan, Buckingham Edinburgh Kensington Versailles, 4 BHK Jaypee Greens, Legacy Villa floor plan",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${brand.site}/floor-plans`,
    type: "website",
    images: [
      {
        url: `${brand.site}/legacy-hero.webp`,
        width: 1200,
        height: 630,
        alt: "Legacy by Gaurs floor plans",
      },
    ],
  },
};

export default function FloorPlansPage() {
  return (
    <>
      <PageBanner
        eyebrow="Floor Plans"
        title="Legacy by Gaurs Floor Plans"
        subtitle="Eight 4 BHK unit plans across four towers, seven Legacy Villa levels, and the master township plan."
      />
      <ModalWrapper />
      <FloorPlanSection />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
