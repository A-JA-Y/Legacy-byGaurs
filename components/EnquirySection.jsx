"use client";

import Image from "next/image";
import { theme } from "@/utils/theme";
import EnquiryForm from "@/components/EnquiryForm";
import logo from "@/assets/legacy-logo.webp";

export default function EnquirySection({
  logoSrc = logo,
  logoAlt = "Legacy by Gaurs",
  heading = "30 Years Of Unfaltering Commitment",
  body = "At Gaurs Group, our vision of luxury transcends mere construction — it is a continuous journey towards creating better life experiences that turn into treasured memories. With every project, we elevate our luxury craftsmanship to new heights, ensuring that our residents enjoy lives of exceptional quality and style. Our 'life-craftsmen' are selected for their extraordinary talent in designing and developing spaces that surpass all expectations. Welcome to a realm of unparalleled luxury — welcome to the enduring legacy of Gaurs.",
}) {
  return (
    <section
      id="book-site-visit"
      className={`${theme.bg} w-full md:px-[30px] md:py-[45px] px-[25px] py-5`}
    >
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:gap-16">
        {/* Left: Brand info */}
        <div className="flex flex-col gap-5 md:w-1/2">
          <div className="max-w-[300px] md:w-[50%]">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={140}
              height={60}
              className="w-auto object-contain self-start max-w-[140px]"
              priority
            />
          </div>

          <h4 className={`${theme.textPrimary} font-semibold`}>{heading}</h4>

          <p className={`${theme.fontBody} ${theme.textSecondary}`}>{body}</p>

          <hr className="border-[#C8BFA0] w-[30%] mt-2 hidden lg:block" />
        </div>

        <hr className="border-[#C8BFA0] my-6 lg:hidden" />

        {/* Right: Enquiry form */}
        <div className="lg:w-1/2">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
