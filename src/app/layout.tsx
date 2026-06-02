import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { CurrencyProvider } from "@/lib/CurrencyContext";
import { LanguageProvider } from "@/lib/LanguageContext";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: "ZEROX HOST | Premium India Hosting",
  description: "Premium game servers, VPS, VDS, web and bot hosting on enterprise NVMe hardware in Delhi, India — with global DDoS protection.",
  icons: {
    icon: "https://cdn.discordapp.com/icons/1504088095220568094/2bf6ee2d2f71b5f3c631ad01556207d8.webp?size=2048",
  },
};

import VideoBackground from "@/components/VideoBackground";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${plusJakartaSans.variable}`}>
      <body className="font-jakarta bg-transparent">
        <LanguageProvider>
          <CurrencyProvider>
            <VideoBackground />
            {children}
          </CurrencyProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
