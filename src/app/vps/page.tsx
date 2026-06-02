'use client';

import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Pricing from '@/components/Pricing';
import HexiumFeatures from '@/components/HexiumFeatures';
import Footer from '@/components/Footer';
import { Server } from 'lucide-react';

export default function VpsPage() {
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
        
        <Footer />
      </div>
    </main>
  );
}
