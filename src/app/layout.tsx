import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Archivo_Narrow, Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const analyticsId = process.env.NEXT_PUBLIC_GA_ID;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  return (
    <html
      lang="es"
      className={cn("font-sans", geist.variable, archivoNarrow.variable)}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        {analyticsId ? <GoogleAnalytics gaId={analyticsId} /> : null}
      </body>
    </html>
  );
}
