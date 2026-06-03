import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hosting Glossary | ZEROX HOST',
  description: 'A comprehensive guide to web hosting, VPS, and gaming terminology. Understand the tech behind your infrastructure with our detailed glossary.',
};

export default function GlossaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
