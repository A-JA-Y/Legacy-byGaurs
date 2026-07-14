"use client";

import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { useRouter } from "next/navigation";
import submitForm from "../api/submitform";
import { downloadBrochure } from "@/utils/brochure";

// Brochure gate. Every "Download Brochure" / "Know More" CTA on the site opens
// this modal; the PDF is only released once the lead has been submitted.
const InvestmentModal = ({ isOpen, onClose, setIsSubmitted }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({ name: false, phone: false, email: false });

  const [submitError, setSubmitError] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {
      name: formData.name.trim() === "",
      phone: formData.phone.trim() === "",
      email: formData.email.trim() === "",
    };
    setErrors(newErrors);
    const hasError = Object.values(newErrors).some(Boolean);
    setSubmitError(hasError);
    return !hasError;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
    setSubmitError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);

      await submitForm({ data: formData });

      setIsSubmitted?.(true);
      if (typeof window !== "undefined") {
        localStorage.setItem("formSubmitted", "true");
        localStorage.setItem("plansUnlocked", "true");
      }

      downloadBrochure();
      onClose?.();
      router.push("/thank-you");
    } catch (err) {
      setSubmitError(true);
      setLoading(false);
    }
  };

  const inputBase =
    "srfm-input-common w-full px-3 py-[10px] text-base bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.25)] rounded-md outline-none placeholder-[rgba(0,0,0,0.5)] text-gray-800 transition-colors duration-200 focus:border-[#c8952a] focus:ring-1 focus:ring-[rgba(200,149,42,0.15)]";

  const errorInput = "border-red-500";

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
    >
      <div className="pum-container relative bg-white w-[90%] lg:w-[40%] border-4 border-[#1A2352] rounded-lg shadow-2xl p-8">
        <div className="pum-content popmake-content" tabIndex={0}>
          <h4 className="text-lg font-bold leading-snug mb-1">
            <mark className="bg-transparent text-[#c8952a]">
              Download the Legacy by Gaurs Brochure
            </mark>
          </h4>

          <p className="text-gray-700 text-sm mb-5">
            Fill in your details and the brochure will download instantly. Our team
            will also help with pricing and site-visit assistance.
          </p>

          <div className="srfm-form-container">
            {submitError && (
              <p className="flex items-center gap-2 text-red-600 text-sm mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                  <path d="M9.99935 18.3327C14.6017 18.3327 18.3327 14.6017 18.3327 9.99935C18.3327 5.39698 14.6017 1.66602 9.99935 1.66602C5.39698 1.66602 1.66602 5.39698 1.66602 9.99935C1.66602 14.6017 5.39698 18.3327 9.99935 18.3327Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 6.66602V9.99935" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 13.334H10.0083" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>There was an error trying to submit your form. Please try again.</span>
              </p>
            )}

            <div className="flex flex-col gap-[18px]">
              <div className="srfm-block-single srfm-block srfm-input-block srfm-block-width-100">
                <div className="srfm-block-wrap">
                  <input
                    className={`${inputBase} ${errors.name ? errorInput : ""}`}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name *"
                    maxLength={100}
                    autoComplete="name"
                    aria-required="true"
                  />
                </div>
                {errors.name && (
                  <div className="srfm-error-wrap mt-1">
                    <div className="srfm-error-message text-red-500 text-xs">
                      This field is required.
                    </div>
                  </div>
                )}
              </div>

              <div className="srfm-block-single srfm-block srfm-input-block srfm-block-width-100">
                <div className="srfm-block-wrap">
                  <input
                    className={`${inputBase} ${errors.phone ? errorInput : ""}`}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number *"
                    maxLength={15}
                    autoComplete="tel"
                    aria-required="true"
                  />
                </div>
                {errors.phone && (
                  <div className="srfm-error-wrap mt-1">
                    <div className="srfm-error-message text-red-500 text-xs">
                      This field is required.
                    </div>
                  </div>
                )}
              </div>

              <div className="srfm-block-single srfm-block srfm-email-block srfm-block-width-100">
                <div className="srfm-email-block">
                  <div className="srfm-block-wrap relative">
                    <input
                      className={`${inputBase} pr-10 ${errors.email ? errorInput : ""}`}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email ID *"
                      autoComplete="email"
                      aria-required="true"
                    />
                    <FaEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-[#c8952a] text-base pointer-events-none" />
                  </div>
                  {errors.email && (
                    <div className="srfm-error-wrap mt-1">
                      <div className="srfm-error-message text-red-500 text-xs">
                        This field is required.
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                id="srfm-submit-btn"
                className={`srfm-btn-frontend srfm-button srfm-submit-button bg-[#c8952a] hover:bg-[#b07d1f] text-white text-sm font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors duration-300 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                <div className="srfm-submit-wrap">
                  {loading ? "Submitting..." : "Download Brochure"}
                </div>
              </button>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="pum-close popmake-close absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#1A2352] text-white text-xs font-bold flex items-center justify-center hover:bg-[#2c3a7a] transition-colors duration-200 z-10"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default InvestmentModal;
