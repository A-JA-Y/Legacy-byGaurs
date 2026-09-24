import type { Metadata } from "next";
import { pageMetadata } from "@/data/seo";
import { FaPhoneAlt, FaMapMarkerAlt, FaBuilding, FaCalendarCheck } from "react-icons/fa";
import PageBanner from "@/components/PageBanner";
import EnquirySection from "@/components/EnquirySection";
import ModalWrapper from "@/components/ModalWrapper";
import StickyDownloadButton from "@/components/StickyButton";
import { brand } from "@/data/brand";
import clubLobby from "@/assets/club-lobby.webp";

export const metadata: Metadata = pageMetadata("contact");

const MAP_QUERY = "Jaypee+Greens+Golf+Course,+Greater+Noida";

const channels = [
  {
    icon: <FaPhoneAlt />,
    label: "Call Us",
    value: brand.partner.phone,
    note: "For the price list, brochure & availability",
    href: brand.partner.phoneHref,
  },
  {
    icon: <FaCalendarCheck />,
    label: "Book a Site Visit",
    value: "Tour the golf-view residences",
    note: "Share your details and we will schedule it",
    href: "#book-site-visit",
  },
  {
    icon: <FaBuilding />,
    label: "Sales Office",
    value: "SL Tower, Alpha Commercial Belt",
    note: brand.partner.office,
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Project Site",
    value: "Plot B-10, Jaypee Greens",
    note: brand.project.address,
    href: `https://maps.google.com/?q=${MAP_QUERY}`,
  },
];

export default function ContactUsPage() {
  return (
    <>
      <PageBanner
        headingLevel="h1"
        eyebrow="Get in Touch"
        title="Contact Legacy by Gaurs"
        subtitle="Request the price list, download the brochure or book a site visit of the 4 BHK golf-view homes at Jaypee Greens, Greater Noida."
        image={clubLobby}
      />
      <ModalWrapper />

      {/* Contact channels */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5" data-stagger="90">
          {channels.map((c) => {
            const external = c.href?.startsWith("http");
            const body = (
              <>
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#DCA54A]/10 text-[#C49A2B] text-lg mb-5 transition-all duration-500 group-hover:bg-[#DCA54A] group-hover:text-white group-hover:scale-110 group-hover:rotate-[8deg]">
                  {c.icon}
                </span>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#c8922a] font-semibold mb-2">{c.label}</p>
                <p className="text-lg font-semibold text-gray-900 leading-snug mb-2">{c.value}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{c.note}</p>
              </>
            );
            const cls =
              "group block h-full bg-[#FAF8F4] rounded-2xl p-7 border border-[#e8dfc8] hover:border-[#DCA54A]/60";

            return (
              <div key={c.label} data-reveal="up">
                {c.href ? (
                  <a
                    href={c.href}
                    data-tilt
                    className={cls}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {body}
                  </a>
                ) : (
                  <div data-tilt className={cls}>
                    {body}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* The Contact Us form is the enquiry form — same component, same fields,
          same brochure download on submit. */}
      <div data-reveal="up">
        <EnquirySection />
      </div>

      {/* Map */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10" data-reveal="up">
            <p className="uppercase text-xs tracking-[0.3em] text-[#DCA54A] font-semibold mb-3">Find Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Legacy by Gaurs, Jaypee Greens</h2>
          </div>
          <div
            data-reveal="mask"
            className="w-full h-[320px] md:h-[440px] rounded-2xl overflow-hidden shadow-xl border border-[#e5dcc5]"
          >
            <iframe
              title="Legacy by Gaurs location – Jaypee Greens, Greater Noida"
              src={`https://maps.google.com/maps?q=${MAP_QUERY}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
