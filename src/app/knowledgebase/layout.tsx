import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Knowledge Base | ZEROX HOST',
  description: 'Access over 100+ tutorials and guides to help you manage your hosting environment effectively. From VPS management to Game Server setup.',
};

export default function KnowledgeBaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
