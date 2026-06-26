import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chikmagaluru & Sakleshpura Trip | 16–18 Oct 2026",
  description:
    "3-day travel itinerary for Chikmagaluru and Sakleshpura — coffee plantations, Mullayanagiri, Kemmangundi, Manjarabad Fort, Bisle Viewpoint and more.",
  keywords: [
    "Chikmagaluru",
    "Sakleshpura",
    "Karnataka travel",
    "Western Ghats",
    "coffee plantation tour",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
