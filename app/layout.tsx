import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Barlow, Barlow_Condensed, Gilda_Display } from "next/font/google";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import "./globals.css";

const gildaDisplay = Gilda_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gilda-display",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: {
    default: "Adina Hotel & SPA – Luxury Relaxation by the Sea",
    template: "%s - Adina Hotel & SPA",
  },
  description:
    "Experience ultimate comfort and relaxation at Adina Hotel & SPA. Enjoy elegant rooms, premium spa treatments, fine dining, and breathtaking sea views – your perfect escape awaits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gildaDisplay.variable} ${barlow.variable} ${barlowCondensed.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
