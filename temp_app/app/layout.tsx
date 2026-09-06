import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "BlueShield RO Industries | Water Treatment Systems Manufacturer, Raipur",
    template: "%s | BlueShield RO Industries",
  },
  description:
    "BlueShield RO Industries designs, manufactures and supplies water-treatment systems — RO plants, purifiers, softeners, filtration, bottling equipment and more. Manufacturer in Raipur, Chhattisgarh with PAN India delivery.",
  keywords: [
    "RO plant manufacturer",
    "water treatment",
    "water purifier",
    "water softener",
    "industrial RO",
    "Raipur",
    "Chhattisgarh",
    "BlueShield RO",
  ],
  authors: [{ name: "BlueShield RO Industries Private Limited" }],
  creator: "BlueShield RO Industries",
  metadataBase: new URL("https://blueshieldro.net"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "BlueShield RO Industries",
    title: "BlueShield RO Industries | Water Treatment Systems Manufacturer",
    description:
      "Water-treatment systems manufacturer in Raipur — RO plants, purifiers, softeners, bottling equipment. PAN India delivery and installation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueShield RO Industries | Water Treatment Systems",
    description:
      "Water-treatment systems manufacturer in Raipur — RO plants, purifiers, softeners, bottling equipment.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} antialiased`}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
