import { BROCHURE_URL, BROCHURE_FILENAME } from "@/data/brand";

// Triggers the brochure download. Only ever called after a lead has been
// submitted successfully — the brochure is gated behind the form everywhere.
export function downloadBrochure() {
  if (typeof document === "undefined") return;

  const link = document.createElement("a");
  link.href = BROCHURE_URL;
  link.setAttribute("download", BROCHURE_FILENAME);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default downloadBrochure;
