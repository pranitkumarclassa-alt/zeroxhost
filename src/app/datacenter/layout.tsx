import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Datacenters | Tier-IV Infrastructure | ZEROX HOST',
  description: 'Explore our world-class Tier-IV datacenter facilities in Mumbai and Delhi, India. Designed for maximum uptime and ultra-low latency.',
  alternates: {
    canonical: '/datacenter',
  },
};

export default function DatacenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
