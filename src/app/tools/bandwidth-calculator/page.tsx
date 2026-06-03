import { Metadata } from 'next';
import BandwidthClient from './BandwidthClient';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Bandwidth Calculator | Estimate Monthly Data Usage | ZeroXHost",
  description: "Calculate your monthly bandwidth requirements for web hosting and VPS. Plan your data usage accurately for high-traffic websites and applications.",
  keywords: ["bandwidth calculator", "data usage estimator", "web hosting bandwidth", "vps bandwidth calculator", "monthly traffic estimator"],
  alternates: {
    canonical: '/tools/bandwidth-calculator',
  },
};

export default function Page() {
  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Bandwidth Calculator",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "description": "Calculate and estimate monthly bandwidth usage based on expected traffic and page sizes."
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
        "name": "Bandwidth Calculator",
        "item": "https://zeroxhost.space/tools/bandwidth-calculator"
      }
    ]
  };

  return (
    <>
      <JsonLd data={calculatorSchema} />
      <JsonLd data={breadcrumbSchema} />
      <BandwidthClient />
    </>
  );
}
