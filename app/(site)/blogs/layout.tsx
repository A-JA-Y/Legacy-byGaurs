import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Legacy by Gaurs",
  description:
    "Buyer's guides, investment analysis and real estate insight on Legacy by Gaurs, Jaypee Greens and the Greater Noida market.",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
