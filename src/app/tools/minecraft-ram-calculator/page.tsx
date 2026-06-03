import { Metadata } from 'next';
import MinecraftRamClient from './MinecraftRamClient';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Minecraft RAM Calculator | Optimize Your Server Memory | ZeroXHost",
  description: "Calculate the exact amount of RAM your Minecraft server needs based on players, mods, and plugins. Get expert recommendations for lag-free gaming.",
  keywords: ["minecraft ram calculator", "minecraft server memory estimator", "how much ram for minecraft server", "minecraft server hosting calculator"],
  alternates: {
    canonical: '/tools/minecraft-ram-calculator',
  },
};

export default function Page() {
  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Minecraft RAM Calculator",
    "operatingSystem": "Web",
    "applicationCategory": "GameApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "description": "Estimate the required memory (RAM) for a Minecraft server based on player count and mod/plugin load."
  };

  const breadcrumbSchema = {
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
        "name": "Tools",
        "item": "https://zeroxhost.space/knowledgebase"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Minecraft RAM Calculator",
        "item": "https://zeroxhost.space/tools/minecraft-ram-calculator"
      }
    ]
  };

  return (
    <>
      <JsonLd data={calculatorSchema} />
      <JsonLd data={breadcrumbSchema} />
      <MinecraftRamClient />
    </>
  );
}
