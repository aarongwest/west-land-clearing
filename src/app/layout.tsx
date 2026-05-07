import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://westlandclearing.com'),
  title: "West Land Clearing | Forestry Mulching & Land Clearing in Greater Houston, TX",
  description: "Professional land clearing, forestry mulching, stump grinding, and brush removal across Greater Houston. Pearland-based, owner-operated. Free on-site estimates.",
  keywords: "land clearing Greater Houston, forestry mulching Pearland TX, stump grinding Houston, brush removal Houston TX, land clearing contractor Pearland, tree removal Greater Houston, site clearing Brazoria County",
  openGraph: {
    title: "West Land Clearing | Forestry Mulching & Land Clearing in Greater Houston",
    description: "Professional land clearing, forestry mulching, stump grinding, and brush removal across Greater Houston. Pearland-based, owner-operated. Free on-site estimates.",
    url: "https://westlandclearing.com",
    siteName: "West Land Clearing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/west-construction.png",
        width: 1200,
        height: 630,
        alt: "West Land Clearing Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "West Land Clearing | Forestry Mulching & Land Clearing in Greater Houston, TX",
    description: "Professional land clearing, forestry mulching, stump grinding, and brush removal across Greater Houston. Pearland-based, owner-operated. Free on-site estimates.",
    images: ["/images/west-construction.png"]
  },
  alternates: {
    canonical: "https://westlandclearing.com"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-black text-zinc-100`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
