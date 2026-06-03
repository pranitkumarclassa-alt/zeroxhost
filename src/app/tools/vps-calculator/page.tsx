import { Metadata } from 'next';
import VpsCalculatorClient from './VpsCalculatorClient';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "VPS Resource Calculator | Estimate Your Server Cost | ZeroXHost",
  description: "Use our free VPS calculator to estimate your monthly hosting costs based on CPU, RAM, and SSD storage. Get instant pricing for premium India-based VPS nodes.",
  keywords: ["vps calculator", "server cost estimator", "vps pricing calculator", "hosting cost calculator", "india vps pricing"],
  alternates: {
    canonical: '/tools/vps-calculator',
  },
};

export default function Page() {
  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "VPS Resource Calculator",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "description": "Calculate and estimate the cost of Virtual Private Servers based on hardware specifications like CPU, RAM, and Storage."
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
        "name": "VPS Calculator",
        "item": "https://zeroxhost.space/tools/vps-calculator"
      }
    ]
  };

  return (
    <>
      <JsonLd data={calculatorSchema} />
      <JsonLd data={breadcrumbSchema} />
      <VpsCalculatorClient />
    </>
  );
}
