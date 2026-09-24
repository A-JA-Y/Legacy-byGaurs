import type { Metadata } from "next";
import { pageMetadata } from "@/data/seo";
import PageBanner from "@/components/PageBanner";
import lobby from "@/assets/lobby.webp";
import FloorPlanSection from "@/components/FloorPageSection";

import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";

export const metadata: Metadata = pageMetadata("floorPlans", {
  keywords:
    "Legacy by Gaurs floor plan, Legacy by Gaurs villas floor plan, Buckingham Edinburgh Kensington Versailles, 4 BHK Jaypee Greens, Legacy Villa floor plan",
});

export default function FloorPlansPage() {
  return (
    <>
      <PageBanner
        eyebrow="Floor Plans"
        title="Legacy by Gaurs Floor Plans"
        subtitle="4 BHK units of 3,510–4,765 sq. ft. across four towers, seven Legacy Villa levels and the master plan — download the floor plan PDF."
        image={lobby}
      />
      <ModalWrapper />
      <FloorPlanSection />
      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
