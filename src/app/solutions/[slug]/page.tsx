import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import { Server, Zap, Globe, Shield, Cpu, Layers } from 'lucide-react';

interface LandingPageProps {
  params: { slug: string };
}

const landingData: Record<string, any> = {
  'vps-hosting-india': {
    title: 'VPS Hosting in India',
    subtitle: 'Low Latency Delhi Nodes',
    description: 'Experience lightning-fast performance with our India-based VPS hosting. Optimized for local traffic with < 20ms latency across major cities.',
    icon: Server,
    category: 'vps'
  },
  'cheap-vps-india': {
    title: 'Cheap VPS Hosting India',
    subtitle: 'High Performance, Low Cost',
    description: 'The most affordable VPS hosting in India without compromising on quality. Powered by Ryzen 9 CPUs and NVMe Gen4 storage.',
    icon: Zap,
    category: 'vps'
  },
  'minecraft-hosting-india': {
    title: 'Minecraft Hosting India',
    subtitle: 'Lag-Free Gaming Nodes',
    description: 'Deploy your Minecraft world on our premium India nodes. Features high-tickrate performance, DDoS protection, and 24/7 uptime.',
    icon: Layers,
    category: 'games'
  },
  'vds-hosting-india': {
    title: 'VDS Hosting India',
    subtitle: 'Dedicated Virtual Power',
    description: 'Dedicated resources with the flexibility of a VPS. Isolated CPU cores and unmetered bandwidth in our Delhi Tier-3 data center.',
    icon: Cpu,
    category: 'vds'
  },
  'web-hosting-india': {
    title: 'Web Hosting India',
    subtitle: 'Fast & Secure cPanel',
    description: 'Blazing fast web hosting for Indian businesses. Free SSL, daily backups, and unmetered bandwidth on enterprise NVMe hardware.',
    icon: Globe,
    category: 'web'
  }
};

export async function generateMetadata({ params }: LandingPageProps): Promise<Metadata> {
  const data = landingData[params.slug];
  if (!data) return { title: 'ZeroXHost Solutions' };

  return {
    title: `${data.title} | ZEROX HOST`,
    description: data.description,
    keywords: [params.slug.replace(/-/g, ' '), 'india hosting', 'delhi server', 'zeroxhost'],
  };
}

export default function LandingPage({ params }: LandingPageProps) {
  const data = landingData[params.slug];

  if (!data) {
    return <div>Page not found</div>;
  }

  return (
    <main className="relative min-h-screen selection:bg-blue-500/30 bg-transparent">
      <Navbar />
      
      <div className="relative z-10">
        <SubpageHero 
          category="Premium Solutions"
          title={data.title.split(' ').slice(0, -1).join(' ')}
          subtitle={data.title.split(' ').pop() || ''}
          description={data.description}
          icon={data.icon}
        />
        
        <Pricing initialCategory={data.category} hideTabs={true} />
        
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <h2 className="text-4xl font-black text-white mb-8">Why choose ZeroXHost for {data.title}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">India-Based Infrastructure</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our servers are strategically located in Delhi to provide the lowest possible latency to the Indian subcontinent. Perfect for gaming, e-commerce, and high-performance applications.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">Enterprise NVMe Storage</h3>
                <p className="text-gray-400 leading-relaxed">
                  We use only NVMe Gen4 SSDs in RAID configuration, offering up to 10x the speed of traditional SATA SSDs and 100x the speed of HDDs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
