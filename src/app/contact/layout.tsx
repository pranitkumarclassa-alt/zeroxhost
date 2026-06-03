import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact ZeroXHost | 24/7 Support & Sales Inquiries',
  description: 'Need help with your hosting? Contact the ZeroXHost team via Discord or email for 24/7 technical support, sales inquiries, and custom hosting quotes.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
