import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  title: "NestVibe | PropTech Marketplace & Real Estate Marketing",
  description: "Next-gen real estate branding, 3D visualization, and qualified lead generation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-white text-slate-900`}>
        <HeroUIProvider>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            {children}
          </Suspense>
        </HeroUIProvider>
      </body>
    </html>
  );
}
