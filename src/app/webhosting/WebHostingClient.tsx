'use client';

import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Pricing from '@/components/Pricing';
import HexiumFeatures from '@/components/HexiumFeatures';
import Footer from '@/components/Footer';
import { Globe } from 'lucide-react';

export default function WebHostingClient() {
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
        
        <Footer />
      </div>
    </main>
  );
}
