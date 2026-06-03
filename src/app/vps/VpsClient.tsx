'use client';

import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Pricing from '@/components/Pricing';
import HexiumFeatures from '@/components/HexiumFeatures';
import Footer from '@/components/Footer';
import { Server } from 'lucide-react';
import ComparisonSummary from '@/components/ComparisonSummary';

export default function VpsClient() {
  const vpsComparison = [
    { feature: 'Processor', us: 'AMD EPYC™ 7003', them: 'Intel Xeon Old Gen', better: true },
    { feature: 'Storage', us: 'NVMe Gen4 SSD', them: 'Standard SATA/SSD', better: true },
    { feature: 'Network', us: '10 Gbps Uplink', them: '1 Gbps Shared', better: true },
    { feature: 'DDoS Protection', us: '12Tbps+ Advanced', them: 'Basic/None', better: true },
    { feature: 'Virtualization', us: 'KVM (Dedicated)', them: 'OpenVZ (Shared)', better: true },
  ];

  return (
    <main className="relative min-h-screen selection:bg-blue-500/30">
      <Navbar />
      
      <div className="relative z-10">
        <SubpageHero 
          category="Cloud Infrastructure"
          title="Scale your"
          subtitle="Cloud VPS"
          description="High-performance virtual private servers with full root access, NVMe storage, and 99.9% uptime guarantee."
          icon={Server}
        />
        
        <HexiumFeatures />
        <Pricing initialCategory="vps" hideTabs={true} />
        
        <ComparisonSummary 
          title="VPS Performance Comparison" 
          items={vpsComparison} 
        />
        
        <Footer />
      </div>
    </main>
  );
}
