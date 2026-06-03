'use client';

import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import VpsCostCalculator from '@/components/VpsCostCalculator';
import Footer from '@/components/Footer';
import { Scale } from 'lucide-react';

export default function VpsCostCalculatorPage() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500/30 bg-transparent">
      <Navbar />
      
      <div className="relative z-10">
        <SubpageHero 
          category="Free Tools"
          title="VPS Cost"
          subtitle="Comparison"
          description="Compare our VPS plans side-by-side. Choose the right amount of CPU, RAM, and storage for your project at the best price point."
          icon={Scale}
        />
        
        <section className="py-24 px-6 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <VpsCostCalculator />
            
            <div className="mt-24 prose prose-invert max-w-4xl mx-auto">
              <h2 className="text-3xl font-black text-white mb-6">Which VPS size do I need?</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Choosing the right VPS size is crucial for both performance and cost-efficiency. Over-provisioning leads to wasted money, while under-provisioning causes slow performance and crashes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Vertical Scaling</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Our VPS plans allow for easy vertical scaling. You can start with a smaller plan and upgrade as your traffic and resource needs grow. Upgrades are typically instant and don't require data migration.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Cost Performance</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We've priced our plans to offer the best price-to-performance ratio in the industry. By using high-density AMD EPYC and Ryzen processors, we deliver more compute power per dollar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </main>
  );
}
