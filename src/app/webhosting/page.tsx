import { Metadata } from 'next';
import WebHostingClient from './WebHostingClient';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Fast Web Hosting India | cPanel & NVMe | Delhi Servers",
  description: "Experience blazing fast web hosting in India with cPanel, free SSL, and unmetered bandwidth. Optimized for WordPress and business sites on NVMe SSD hardware.",
  keywords: ["web hosting india", "cpanel hosting india", "cheap web hosting delhi", "fast wordpress hosting india", "nvme web hosting", "business hosting india"],
  alternates: {
    canonical: '/webhosting',
  },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Hosting",
    "provider": {
      "@type": "Organization",
      "name": "ZEROX HOST"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
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
            "name": "Web Hosting",
            "item": "https://zeroxhost.space/webhosting"
          }
        ]
      }} />
      <WebHostingClient />
    </>
  );
}
