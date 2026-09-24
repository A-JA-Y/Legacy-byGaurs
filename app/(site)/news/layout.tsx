import type { Metadata } from "next";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata("news");

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
