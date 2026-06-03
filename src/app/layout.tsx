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
  metadataBase: new URL('https://zeroxhost.space'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: "ZEROX HOST | Premium India Hosting | Game, VPS, VDS, Web & Bot Hosting",
    template: "%s | ZEROX HOST"
  },
  description: "Experience ultra-low latency with ZEROX HOST. Premium India-based hosting solutions featuring Game Servers, Cloud VPS, Dedicated VDS, and Web Hosting on enterprise NVMe hardware in Delhi. 24/7 Support & Global DDoS Protection.",
  keywords: [
    "zerox host", "zeroxhost", "india game hosting", "minecraft hosting india", "vps india", "vds hosting india", "delhi data center", "low latency gaming india", "nvme vps india", "cheap vps india", "dedicated game server india", "discord bot hosting india", "web hosting india", "cpanel hosting india", "ryzen game hosting", "fivem hosting india", "ark hosting india", "csgo hosting india", "tf2 hosting india", "gmod hosting india", "hytale hosting india", "among us server hosting", "rust server hosting india", "best vps for gaming india", "high tickrate minecraft india", "managed vps india", "unmanaged vps india", "ddos protected hosting india", "free ssl web hosting", "unmetered bandwidth vps", "linux vps india", "windows vps india", "kvm vps india", "enterprise hosting delhi", "tier 3 data center india", "24/7 hosting support", "halix cloud alternative", "zeroxhost.space", "zeroxhost.com", "best hosting for developers india", "python bot hosting", "nodejs hosting india", "php web hosting", "mysql hosting", "dedicated ip vps", "root access vps", "cloud hosting delhi", "performance hosting india", "gaming nodes india", "ssd hosting india", "nvme hosting india", "ddos protection game servers", "best india hosting 2026", "cheap minecraft servers india", "premium vds india", "bare metal vds india", "virtual private server delhi", "virtual dedicated server india", "web host india", "hosting services india"
  ],
  authors: [{ name: "ZEROX HOST Team" }],
  creator: "ZEROX HOST",
  publisher: "ZEROX HOST",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://zeroxhost.space",
    siteName: "ZEROX HOST",
    title: "ZEROX HOST | Premium India Hosting Solutions",
    description: "Ultra-fast India hosting with 24/7 support. Game, VPS, VDS, and Web hosting on Ryzen 9 & NVMe Gen4 hardware.",
    images: [
      {
        url: "https://cdn.discordapp.com/icons/1504088095220568094/2bf6ee2d2f71b5f3c631ad01556207d8.webp?size=2048",
        width: 1200,
        height: 630,
        alt: "ZEROX HOST Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZEROX HOST | Premium India Hosting",
    description: "Premium Game, VPS, VDS, and Web hosting in Delhi, India. Ultra-low latency & DDoS protection.",
    images: ["https://cdn.discordapp.com/icons/1504088095220568094/2bf6ee2d2f71b5f3c631ad01556207d8.webp?size=2048"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

import VideoBackground from "@/components/VideoBackground";
import JsonLd from "@/components/JsonLd";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ZEROX HOST",
    "url": "https://zeroxhost.space",
    "logo": "https://cdn.discordapp.com/icons/1504088095220568094/2bf6ee2d2f71b5f3c631ad01556207d8.webp?size=2048",
    "description": "Premium India-based hosting solutions featuring Game Servers, Cloud VPS, Dedicated VDS, and Web Hosting.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "akshitkanswal111@gmail.com",
      "contactType": "customer support"
    },
    "sameAs": [
      "https://discord.gg/56VcDMZbrj"
    ]
  };

  return (
    <html lang="en" className={`${montserrat.variable} ${plusJakartaSans.variable}`}>
      <body className="font-jakarta bg-transparent">
        <JsonLd data={organizationData} />
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
