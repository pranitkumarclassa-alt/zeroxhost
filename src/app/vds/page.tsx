'use client';

import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Pricing from '@/components/Pricing';
import HexiumFeatures from '@/components/HexiumFeatures';
import Footer from '@/components/Footer';
import { Layers } from 'lucide-react';

export default function VdsPage() {
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
        
        <Footer />
      </div>
    </main>
  );
}
