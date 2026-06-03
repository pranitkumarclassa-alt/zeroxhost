import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discord Bot Hosting India | 24/7 Node.js, Python, Java | ZEROX HOST',
  description: 'Fast and reliable Discord bot hosting in India. Supporting Node.js, Python, Java, and Go with 24/7 uptime and instant setup.',
  alternates: {
    canonical: '/bots',
  },
};

export default function BotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
