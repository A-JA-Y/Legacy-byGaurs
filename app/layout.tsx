import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import "lite-youtube-embed/src/lite-yt-embed.css";
import { Analytics } from '@vercel/analytics/next';



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: true,
  weight: ["400"]
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  adjustFontFallback: true,
  weight: ["600"],
  preload: false,
});




import { brand } from "@/data/brand";

const OG_IMAGE = `${brand.site}/legacy-hero.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(brand.site),

  title:
    "Legacy by Gaurs | Golf-View 4 BHK Condominiums & Villas at Jaypee Greens, Greater Noida",
  description:
    "Legacy by Gaurs offers uber-luxury 4 BHK golf-view condominiums and 20 Legacy Villas at Jaypee Greens, Greater Noida. Four towers, an 18-hole Greg Norman golf course and the House of Royals clubhouse. RERA UPRERAPRJ688396/10/2024.",

  alternates: {
    canonical: `${brand.site}/`,
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Legacy by Gaurs — Jaypee Greens, Greater Noida",
    description:
      "Uber-luxury golf-view 4 BHK condominiums and Legacy Villas by Gaurs Group.",
    url: `${brand.site}/`,
    siteName: brand.name,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Legacy by Gaurs – towers overlooking the Jaypee Greens golf course",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Legacy by Gaurs — Jaypee Greens, Greater Noida",
    description:
      "Uber-luxury golf-view 4 BHK condominiums and Legacy Villas by Gaurs Group.",
    images: [OG_IMAGE],
  },
};

import { ModalProvider } from "@/components/ModalContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable}  h-full antialiased light `}
    >
      <Analytics />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PGFWQ73S');`}
      </Script>
      <Script id="clarity-script" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wj5sfhnj3d");`}
      </Script>

      <body className="min-h-full flex flex-col overflow-x-hidden">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PGFWQ73S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
