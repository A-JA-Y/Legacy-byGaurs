import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import EnquirySection from "@/components/EnquirySection";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: "Contact Us | Legacy by Gaurs, Jaypee Greens Greater Noida",
  description:
    "Contact Legacy by Gaurs for pricing, site visits, brochures and investment enquiries on 4 BHK golf-view condominiums and Legacy Villas at Jaypee Greens, Greater Noida.",
  alternates: { canonical: `${brand.site}/contact-us` },
};

export default function ContactUsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Speak with our team for pricing, availability, site visits and personalised assistance."
      />
      <ModalWrapper />

      {/* The Contact Us form is the enquiry form — same component, same fields,
          same brochure download on submit. */}
      <EnquirySection />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
