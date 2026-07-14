import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: "Privacy Policy & Disclaimer | Legacy by Gaurs",
  description:
    "Privacy policy and disclaimer for the Legacy by Gaurs marketing website. Read terms of use and information disclaimer.",
  alternates: { canonical: `${brand.site}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner
        eyebrow="Legal"
        title="Privacy Policy / Disclaimer"
        subtitle="Please read the following terms before using this website."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-8 text-sm text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Disclaimer</h2>
            <p>
              This is not the official website of the developer. It belongs to the
              authorised channel partner for information and marketing purposes only.
              All rights for logos and images are reserved by the developer.
            </p>
            <p className="mt-3">
              By using or accessing this website you agree with the disclaimer without
              any limitation. By accessing this website, the viewer confirms that the
              information including brochures and marketing collaterals on this website
              are solely for informational purposes only, and the viewer has not relied
              on this information for making any booking or purchase in any project of
              the company.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Privacy Policy</h2>
            <p>
              We respect your privacy. Information submitted through enquiry forms on
              this website (such as name, phone number, and email) is used only to
              respond to your request and provide project-related information.
            </p>
            <p className="mt-3">
              We do not sell your personal data to third parties. Data may be shared
              with authorised representatives solely for the purpose of assisting you
              with project-related queries.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Accuracy of Information</h2>
            <p>
              Project details, pricing, floor plans, and availability mentioned on this
              website are indicative and subject to change without prior notice. Users
              are advised to verify all details with the authorised sales team before
              making any decision.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Contact</h2>
            <p>
              For any queries regarding this website, please visit our{" "}
              <a href="/contact-us" className="text-[#DCA54A] hover:underline">
                Contact Us
              </a>{" "}
              page or call{" "}
              <a href={brand.partner.phoneHref} className="text-[#DCA54A] hover:underline">
                {brand.partner.phone}
              </a>
              .
            </p>
            <p className="mt-3">
              {brand.name} is registered under RERA number{" "}
              <strong>{brand.rera.number}</strong> —{" "}
              <a
                href={brand.rera.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DCA54A] hover:underline"
              >
                {brand.rera.url}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
