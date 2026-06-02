'use client';

import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Pricing from '@/components/Pricing';
import HexiumFeatures from '@/components/HexiumFeatures';
import Footer from '@/components/Footer';
import { Bot } from 'lucide-react';

export default function BotsPage() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500/30">
      <Navbar />
      
      <div className="relative z-10">
        <SubpageHero 
          category="App Hosting"
          title="Deploy your"
          subtitle="Discord Bots"
          description="24/7 uptime for your Discord bots. Supporting Node.js, Python, Java, and more with instant deployment."
          icon={Bot}
        />
        
        <HexiumFeatures />
        <Pricing initialCategory="bots" hideTabs={true} />
        
        <Footer />
      </div>
    </main>
  );
}
