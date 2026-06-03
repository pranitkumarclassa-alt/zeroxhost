'use client';

import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Pricing from '@/components/Pricing';
import HexiumFeatures from '@/components/HexiumFeatures';
import Footer from '@/components/Footer';
import { Layers } from 'lucide-react';
import ComparisonSummary from '@/components/ComparisonSummary';

export default function VdsPage() {
  const vdsComparison = [
    { feature: 'CPU Allocation', us: '100% Dedicated Cores', them: 'Shared/Burstable', better: true },
    { feature: 'Memory Bandwidth', us: 'DDR5 5200MHz', them: 'DDR4 2400MHz', better: true },
    { feature: 'Disk Throughput', us: '7,000MB/s NVMe Gen4', them: '500MB/s SATA SSD', better: true },
    { feature: 'Network Isolation', us: 'Private VLAN Ready', them: 'Shared Public IP', better: true },
    { feature: 'Hardware', us: 'Enterprise EPYC/Ryzen', them: 'Consumer Desktop', better: true },
  ];

  return (
    <main className="relative min-h-screen selection:bg-blue-500/30">
      <Navbar />
      
      <div className="relative z-10">
        <SubpageHero 
          category="Dedicated Resources"
          title="Unleash the"
          subtitle="Power of VDS"
          description="Dedicated virtual servers with isolated resources, enterprise-grade hardware, and full root control for demanding applications."
          icon={Layers}
        />
        
        <HexiumFeatures />
        <Pricing initialCategory="vds" hideTabs={true} />
        
        <ComparisonSummary 
          title="VDS vs Standard VPS" 
          items={vdsComparison} 
        />
        
        <Footer />
      </div>
    </main>
  );
}
