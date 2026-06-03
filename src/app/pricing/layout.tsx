import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hosting Pricing & Plans | ZEROX HOST',
  description: 'Affordable and high-performance hosting plans for Game Servers, VPS, VDS, and Web Hosting in India. Compare our features and prices.',
  alternates: {
    canonical: '/pricing',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
