import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AURELIS - Private Members Golf Club & Estate",
  description: "A quieter way to play the game. Championship golf, considered hospitality and a private community shaped around the game.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen font-sans antialiased bg-[#09130d] text-white selection:bg-[#c6f135] selection:text-[#0f2619]">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
