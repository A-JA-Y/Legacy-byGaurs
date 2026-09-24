import type { Metadata } from "next";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata("blogs");

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
