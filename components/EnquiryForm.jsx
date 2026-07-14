"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import submitForm from "@/api/submitform";
import { theme } from "@/utils/theme";
import { InputField } from "@/components/form/InputFields";
import { downloadBrochure } from "@/utils/brochure";

// The single enquiry form used everywhere on the site — the enquiry section,
// the Contact Us page and the brochure modal all render this exact component,
// so the fields, validation and behaviour can never drift apart.
//
// Submitting is the only way to get the brochure: on success we post the lead,
// start the download, then send the visitor to /thank-you.
export default function EnquiryForm({
  eyebrow = "Enquire Now",
  heading = "Wish to get a call back from our team? Fill in your details.",
  submitLabel = "Submit",
  onSubmitted,
}) {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "This field is required.";

    if (!form.phone.trim()) e.phone = "This field is required.";
    else if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim()))
      e.phone = "Please enter a valid phone number.";

    if (!form.email.trim()) e.email = "This field is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Please enter a valid email.";

    return e;
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const found = validate();
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }

    try {
      setLoading(true);
      setApiError("");

      await submitForm({ data: form });

      onSubmitted?.();
      downloadBrochure();
      router.push("/thank-you");
    } catch (err) {
      setApiError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      {eyebrow && (
        <h6 className={`${theme.fontLabel} uppercase ${theme.accent} mb-3`}>{eyebrow}</h6>
      )}
      {heading && (
        <h6 className={`${theme.fontSubheading} ${theme.textPrimary} mb-4`}>{heading}</h6>
      )}

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
        <InputField
          id="lbg-name"
          type="text"
          placeholder="Enter your name *"
          value={form.name}
          onChange={handleChange("name")}
          error={errors.name}
          maxLength={100}
          autoComplete="name"
        />

        <InputField
          id="lbg-phone"
          type="tel"
          placeholder="Phone number *"
          value={form.phone}
          onChange={handleChange("phone")}
          error={errors.phone}
          maxLength={15}
          autoComplete="tel"
        />

        <InputField
          id="lbg-email"
          type="email"
          placeholder="Email ID *"
          value={form.email}
          onChange={handleChange("email")}
          error={errors.email}
          autoComplete="email"
        />

        {apiError && <p className="text-red-500 text-sm">{apiError}</p>}

        <p className={`${theme.textMuted} text-xs leading-relaxed`}>
          Submit your details to instantly download the Legacy by Gaurs brochure.
        </p>

        <div className="pt-1">
          <button
            type="submit"
            disabled={loading}
            className={[
              "px-7 py-2.5 rounded bg-[#DCA54A] hover:bg-[#C08F3C]",
              theme.fontButton,
              "text-white uppercase",
              "transition-colors duration-200",
              loading ? "opacity-70 cursor-not-allowed" : "",
            ].join(" ")}
          >
            {loading ? "Submitting..." : submitLabel}
          </button>
        </div>
      </form>
    </>
  );
}
