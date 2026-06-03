'use client';

import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Pricing from '@/components/Pricing';
import HexiumFeatures from '@/components/HexiumFeatures';
import Footer from '@/components/Footer';
import { Globe } from 'lucide-react';
import ComparisonSummary from '@/components/ComparisonSummary';

export default function WebHostingClient() {
  const webComparison = [
    { feature: 'Web Server', us: 'LiteSpeed Enterprise', them: 'Apache/Nginx Standard', better: true },
    { feature: 'Caching', us: 'LSCache + Redis', them: 'None / Plugin-based', better: true },
    { feature: 'Storage', us: 'Pure NVMe Gen4 SSD', them: 'Standard HDD/SSD', better: true },
    { feature: 'Security', us: 'Imunify360 + CageFS', them: 'Standard Firewall', better: true },
    { feature: 'SSL Certificates', us: 'Free Unlimited AutoSSL', them: 'Paid / Limited', better: true },
  ];

  return (
    <main className="relative min-h-screen selection:bg-blue-500/30">
      <Navbar />
      
      <div className="relative z-10">
        <SubpageHero 
          category="Web Hosting"
          title="Launch your"
          subtitle="Digital Presence"
          description="Ultra-fast web hosting with cPanel, free SSL, and unmetered bandwidth. Optimized for speed and security."
          icon={Globe}
        />
        
        <HexiumFeatures />
        <Pricing initialCategory="web" hideTabs={true} />
        
        <ComparisonSummary 
          title="Web Hosting Comparison" 
          items={webComparison} 
        />
        
        <Footer />
      </div>
    </main>
  );
}
