import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import ReraStrip from "@/components/QRsectionsm";
import ContactForm from "@/components/ContactForm";
import ModalWrapper from "@/components/ModalWrapper";
import HomePageHeader from "@/components/HomePageHeader";
import { brand } from "@/data/brand";

// Lazy load below-the-fold components
const AboutProject = dynamic(() => import("@/components/AboutProject"));
const Amenities = dynamic(() => import("@/components/Amenities"));
const GaurTownship = dynamic(() => import("@/components/GaurTownship"));
const ReasonsToInvest = dynamic(() => import("@/components/ReasonToInvest"));
const VillaFeatures = dynamic(() => import("@/components/PremiumInventory"));
const PlansSection = dynamic(() => import("@/components/FloorPlan"));
const EmiCalculator = dynamic(() => import("@/components/EmiCalculator"));
const LocationAdvantages = dynamic(() => import("@/components/LocationAdvantages"));
const WalkThroughVideo = dynamic(() => import("@/components/WalkThroughVideo"));
const BlogSection = dynamic(() => import("@/components/BlogSection"));
const NewsSection = dynamic(() => import("@/components/NewsSection"));
const EnquirySection = dynamic(() => import("@/components/EnquirySection"));
const QRSection = dynamic(() => import("@/components/QRSections"));
const StickyDownloadButton = dynamic(() => import("@/components/StickyButton"));
const Footer = dynamic(() => import("@/components/Footer"));

const HERO_IMAGE = `${brand.site}/legacy-hero.webp`;

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="hidden">
        Legacy by Gaurs — Uber-Luxury Golf-View 4 BHK Condominiums &amp; Villas at
        Jaypee Greens, Greater Noida
      </h1>

      {/* SCHEMA START */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${brand.site}/`,
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: brand.name,
            image: HERO_IMAGE,
            "@id": `${brand.site}/`,
            url: `${brand.site}/`,
            telephone: brand.partner.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: brand.project.address,
              addressLocality: brand.project.city,
              addressRegion: brand.project.state,
              postalCode: brand.project.postalCode,
              addressCountry: "IN",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Where is Legacy by Gaurs located?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Legacy by Gaurs is at ${brand.project.address}. Residences overlook an 18-hole golf course on one side and Pari Chowk on the other.`,
                },
              },
              {
                "@type": "Question",
                name: "What configurations are available at Legacy by Gaurs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Legacy by Gaurs offers 265 four-bedroom condominiums across four towers — Buckingham, Edinburgh, Kensington and Versailles — plus 20 ultra-luxury Legacy Villas. Condominiums range from 3,510 to 4,765 sq. ft.",
                },
              },
              {
                "@type": "Question",
                name: "What is the price of a residence at Legacy by Gaurs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pricing is shared on request. Submit an enquiry to receive the current price list along with the official brochure.",
                },
              },
              {
                "@type": "Question",
                name: "What is the RERA number for Legacy by Gaurs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `Legacy by Gaurs is registered under RERA number ${brand.rera.number}. Details are available at ${brand.rera.url}.`,
                },
              },
            ],
          }),
        }}
      />
      {/* SCHEMA END */}

      <HomePageHeader />
      <Hero />
      <ReraStrip />

      <main className="w-full">
        <section className="md:px-[30px] md:py-[45px] md:relative top-[-98px]">
          <div className="md:block max-w-5xl m-auto">
            <ContactForm />
          </div>
        </section>

        <ModalWrapper />

        <AboutProject heading={false} />
        <Amenities />
        <GaurTownship />
        <ReasonsToInvest />
        <VillaFeatures />
        <PlansSection />
        <EmiCalculator />
        <LocationAdvantages />
        <WalkThroughVideo />
        <BlogSection />
        <NewsSection />
        <EnquirySection />
        <QRSection />
      </main>
      <StickyDownloadButton />
      <Footer />
    </div>
  );
}
