import { Metadata } from 'next';
import VpsClient from './VpsClient';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Cloud VPS Hosting India | NVMe SSD | Root Access | Delhi",
  description: "High-performance Cloud VPS hosting in India. KVM virtualized, full root access, and enterprise NVMe storage in Delhi data center. Deploy your apps in seconds.",
  keywords: ["cloud vps india", "linux vps india", "windows vps india", "cheap vps delhi", "nvme vps india", "kvm vps india", "best vps for developers india"],
  alternates: {
    canonical: '/vps',
  },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "VPS Hosting",
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
      "name": "VPS Hosting Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basic VPS"
          },
          "priceCurrency": "INR",
          "price": "150"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pro VPS"
          },
          "priceCurrency": "INR",
          "price": "600"
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
            "name": "Cloud VPS",
            "item": "https://zeroxhost.space/vps"
          }
        ]
      }} />
      <VpsClient />
    </>
  );
}
