import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Prime SDN — Prime Surigao 2040",
    template: "%s | Prime SDN",
  },
  description:
    "A public-private movement to promote innovation in the province of Surigao del Norte, Philippines — home to the surfing capital of the Philippines, pristine island ecosystems, and a resilient, innovation-ready spirit.",
  keywords: [
    "Surigao del Norte",
    "Innovation",
    "Siargao",
    "Philippines",
    "Prime SDN",
    "2040",
    "Smart Province",
  ],
  openGraph: {
    title: "Prime SDN — Prime Surigao 2040",
    description:
      "A public-private movement to promote innovation in the province of Surigao del Norte, Philippines.",
    siteName: "Prime SDN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
