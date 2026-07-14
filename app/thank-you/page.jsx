"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { theme } from "@/utils/theme";
import logo from "@/assets/legacy-logo.webp";
import { brand, BROCHURE_URL, BROCHURE_FILENAME } from "@/data/brand";

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("formSubmitted", "true");
      localStorage.setItem("plansUnlocked", "true");
    }

    const timeout = setTimeout(() => {
      router.push("/");
    }, 8000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${theme.bg} px-4`}>
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-lg w-full text-center flex flex-col items-center">
        <Image
          src={logo}
          alt={brand.name}
          width={160}
          height={70}
          className="w-auto object-contain mb-6 max-w-[160px]"
          priority
        />

        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className={`text-2xl md:text-3xl font-bold ${theme.textPrimary} mb-3`}>
          Thank you for your enquiry!
        </h1>
        <p className={`${theme.fontBody} text-gray-600 mb-6`}>
          Your download of the {brand.name} brochure has started, and our team will
          get back to you shortly.
        </p>

        {/* The file is large — give people a way to retry if the browser blocked
            the automatic download. */}
        <a
          href={BROCHURE_URL}
          download={BROCHURE_FILENAME}
          className="mb-8 px-6 py-2.5 rounded bg-[#DCA54A] hover:bg-[#C08F3C] text-white text-sm font-semibold tracking-widest uppercase transition-colors"
        >
          Download didn&apos;t start?
        </a>

        <div className="w-6 h-6 border-2 border-[#c8952a] border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
