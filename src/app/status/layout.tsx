import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Network Status | ZEROX HOST',
  description: 'Live status and uptime monitoring for ZEROX HOST global infrastructure, compute nodes, and core services.',
  alternates: {
    canonical: '/status',
  },
};

export default function StatusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
