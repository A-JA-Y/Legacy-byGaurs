"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaTimesCircle } from "react-icons/fa";
import submitForm from "../api/submitform";
import { downloadBrochure } from "@/utils/brochure";

// Compact lead strip that sits under the hero on the homepage.
// Same three fields and same gating as the enquiry form: submitting is what
// releases the brochure.
const ContactForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: false, phone: false, email: false });

  const validate = () => {
    const newErrors = {
      name: formData.name.trim() === "",
      phone: formData.phone.trim() === "",
      email: formData.email.trim() === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);
      setStatus(null);

      await submitForm({ data: formData });

      downloadBrochure();
      router.push("/thank-you");

      setFormData({ name: "", phone: "", email: "" });
    } catch (error) {
      setStatus("error");
      setLoading(false);
    }
  };

  const inputClass = (hasError) =>
    `w-full px-4 py-3 text-sm border rounded-md outline-none placeholder-gray-400 text-gray-700 transition-colors duration-200 focus:border-[#c8952a] focus:ring-1 focus:ring-[#c8952a] ${
      hasError ? "border-red-500" : "border-gray-300"
    }`;

  return (
    <div className="bg-white rounded-xl shadow-lg px-5 md:p-[55px] py-6 w-full border-t-2 border-[#c8952a] transition-shadow duration-500 hover:shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        {/* LEFT: Text Block */}
        <div className="md:w-1/3 flex-shrink-0">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            Legacy by Gaurs &ndash; Jaypee Greens, Greater Noida
          </h3>
          <h6 className="text-[#c8952a] mt-1 text-[0.9375rem]">
            Overlooking an 18-hole golf course
          </h6>
          <p className="text-gray-700 text-sm mt-1">
            4 BHK Condominiums &amp; Legacy Villas
          </p>
        </div>

        {/* RIGHT: Fields + Button */}
        <div className="flex-1 flex flex-col md:flex-row md:items-start gap-3">
          <div className="flex-1">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name *"
              autoComplete="name"
              className={inputClass(errors.name)}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">This field is required.</p>
            )}
          </div>

          <div className="flex-1">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number *"
              maxLength={15}
              autoComplete="tel"
              className={inputClass(errors.phone)}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">This field is required.</p>
            )}
          </div>

          <div className="flex-1">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email ID *"
              autoComplete="email"
              className={inputClass(errors.email)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">This field is required.</p>
            )}
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="btn-shine w-full md:w-auto bg-[#c8952a] hover:bg-[#b07d1f] text-white text-sm font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-all duration-300 whitespace-nowrap disabled:opacity-70 cursor-pointer hover:shadow-lg hover:shadow-[#c8952a]/30 hover:-translate-y-0.5 disabled:hover:translate-y-0"
            >
              {loading ? "Submitting..." : "Get Brochure"}
            </button>
          </div>
        </div>
      </div>

      {status === "error" && (
        <p className="flex items-center gap-2 text-red-600 mt-4 text-sm">
          <FaTimesCircle className="text-red-600" />
          Failed to submit. Please try again.
        </p>
      )}
    </div>
  );
};

export default ContactForm;
