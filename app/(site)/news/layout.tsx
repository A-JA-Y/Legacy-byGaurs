import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates | Legacy by Gaurs",
  description:
    "The latest news, policy changes and infrastructure updates affecting Legacy by Gaurs, Jaypee Greens and Greater Noida.",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
