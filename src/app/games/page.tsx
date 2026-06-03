import { Metadata } from 'next';
import GamesClient from './GamesClient';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Premium Game Server Hosting India | Low Latency Gaming Nodes",
  description: "Lag-free game server hosting in India. Optimized for Minecraft, FiveM, Ark, CS:GO, and more. Powered by Ryzen 9 CPUs and NVMe storage for peak performance.",
  keywords: ["game hosting india", "minecraft hosting india", "fivem server hosting india", "ark survival hosting india", "csgo hosting india", "best game servers india"],
  alternates: {
    canonical: '/games',
  },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Game Server Hosting",
    "provider": {
      "@type": "Organization",
      "name": "ZEROX HOST"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Game Hosting Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Minecraft Starter"
          },
          "priceCurrency": "INR",
          "price": "50"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "GTA FiveM Performance"
          },
          "priceCurrency": "INR",
          "price": "350"
        }
      ]
    }
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://zeroxhost.space"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Game Servers",
            "item": "https://zeroxhost.space/games"
          }
        ]
      }} />
      <GamesClient />
    </>
  );
}
