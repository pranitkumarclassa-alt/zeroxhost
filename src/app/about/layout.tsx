import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ZeroXHost | India\'s Leading Premium Hosting Provider',
  description: 'Learn about ZeroXHost, our mission to revolutionize the Indian hosting industry, and our commitment to providing ultra-low latency, high-performance server solutions.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
