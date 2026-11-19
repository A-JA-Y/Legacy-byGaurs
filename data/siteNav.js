export const siteNavLinks = [
  { label: "Home", href: "/" },
  { label: "About Legacy by Gaurs", href: "/about-legacy-by-gaurs" },
  { label: "Residences", href: "/villas-configurations" },
  { label: "Price", href: "/price" },
  { label: "Floor Plans", href: "/floor-plans" },
  { label: "Location & Connectivity", href: "/location-connectivity" },
  { label: "Amenities", href: "/amenities" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "About Gaurs Group", href: "/about-gaurs-group" },
  { label: "Blogs", href: "/blogs" },
  { label: "News", href: "/news" },
];

// Buyer guides live in the footer only, to keep the two-row header as it is.
export const guideLinks = [
  { label: "Villa vs Flat", href: "/villa-vs-flat-legacy-by-gaurs" },
  { label: "Super Built-Up vs Carpet Area", href: "/super-built-up-area-vs-carpet-area" },
];

export const footerNavLinks = [...siteNavLinks, ...guideLinks];
