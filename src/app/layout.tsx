import type { Metadata } from "next";
import { Cormorant_Garamond, Open_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Salve Maria Tours & Travels | Catholic Pilgrimages & Travel",
    template: "%s | Salve Maria Tours & Travels",
  },
  description:
    "Catholic pilgrimage and travel agency in Gurgaon, India. Sacred journeys, customized tours, flights, hotels, and caring guides — Journey With Grace.",
  metadataBase: new URL("https://www.salvemariatours.com"),
  openGraph: {
    title: "Salve Maria Tours & Travels",
    description:
      "Explore India and the world with trusted Catholic pilgrimage and travel experts.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${openSans.variable} min-h-screen bg-white text-ink`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
