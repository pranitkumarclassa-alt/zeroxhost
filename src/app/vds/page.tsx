import { Metadata } from 'next';
import VdsClient from './VdsClient';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Premium VDS Hosting India | Dedicated Resources | Delhi Node",
  description: "High-performance Virtual Dedicated Servers (VDS) in India. 100% isolated CPU cores, NVMe storage, and root access in Delhi. Perfect for high-traffic apps and databases.",
  keywords: ["vds hosting india", "virtual dedicated server india", "dedicated vps india", "delhi vds", "high performance vds", "bare metal vds india"],
  alternates: {
    canonical: '/vds',
  },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Virtual Dedicated Server (VDS)",
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
            "name": "Virtual Dedicated Server",
            "item": "https://zeroxhost.space/vds"
          }
        ]
      }} />
      <VdsClient />
    </>
  );
}
