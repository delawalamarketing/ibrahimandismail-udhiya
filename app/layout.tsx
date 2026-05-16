import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { env } from "@/lib/env";
import { site } from "@/content/site";
import "../styles/globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title: {
    default: `${site.name} — Witnessed Qurbaani in the GTA | ${site.eidDateLabel}`,
    template: `%s | ${site.name}`,
  },
  description: site.shortDescription,
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: site.name,
    title: `${site.name} — Witnessed Qurbaani in the GTA`,
    description: "A premium qurbaani service for Greater Toronto. Witnessed, local, tayyib.",
    images: [
      {
        url: "/og/ibrahim-and-ismail-og.jpg",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Witnessed Qurbaani in the GTA`,
    description: site.shortDescription,
    images: ["/og/ibrahim-and-ismail-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        {children}
        <Analytics />
        <JsonLd data={localBusinessSchema()} />
      </body>
    </html>
  );
}
