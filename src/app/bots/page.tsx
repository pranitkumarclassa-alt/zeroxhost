'use client';

import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Pricing from '@/components/Pricing';
import HexiumFeatures from '@/components/HexiumFeatures';
import Footer from '@/components/Footer';
import { Bot } from 'lucide-react';
import ComparisonSummary from '@/components/ComparisonSummary';

export default function BotsPage() {
  const botsComparison = [
    { feature: 'Setup Time', us: 'Instant (< 60s)', them: 'Manual / Delayed', better: true },
    { feature: 'Uptime Guarantee', us: '99.99%', them: '99.0% / Unspecified', better: true },
    { feature: 'Languages', us: 'All Major Support', them: 'Node.js Only', better: true },
    { feature: 'Auto-Restart', us: 'Native Integrated', them: 'Script-based', better: true },
    { feature: 'Control Panel', us: 'Custom Pterodactyl', them: 'Basic SSH', better: true },
  ];

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
        
        <ComparisonSummary 
          title="Bot Hosting Comparison" 
          items={botsComparison} 
        />
        
        <Footer />
      </div>
    </main>
  );
}
