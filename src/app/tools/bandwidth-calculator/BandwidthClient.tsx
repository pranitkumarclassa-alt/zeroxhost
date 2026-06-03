'use client';

import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import BandwidthCalculator from '@/components/BandwidthCalculator';
import Footer from '@/components/Footer';
import { Globe } from 'lucide-react';

export default function BandwidthCalculatorClient() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500/30 bg-transparent">
      <Navbar />
      
      <div className="relative z-10">
        <SubpageHero 
          category="Free Tools"
          title="Bandwidth"
          subtitle="Requirement Tool"
          description="Calculate exactly how much data transfer your website or application will consume. Avoid surprise overage charges with our accurate estimation tool."
          icon={Globe}
        />
        
        <section className="py-24 px-6 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <BandwidthCalculator />
            
            <div className="mt-24 prose prose-invert max-w-4xl mx-auto">
              <h2 className="text-3xl font-black text-white mb-6">Why is bandwidth important?</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Bandwidth is the amount of data that can be transferred between your server and your visitors. If your bandwidth is too low, your site may become unavailable once the limit is reached.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl">
                  <h3 className="text-xl font-bold text-white mb-4">Unmetered vs Measured</h3>
                  <p className="text-gray-500 text-sm">
                    Most of our India VPS nodes come with unmetered bandwidth on a 1Gbps port, meaning you never have to worry about traffic spikes or overage fees.
                  </p>
                </div>
                <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl">
                  <h3 className="text-xl font-bold text-white mb-4">Traffic Optimization</h3>
                  <p className="text-gray-500 text-sm">
                    Using a CDN like Cloudflare can reduce your server's bandwidth usage by up to 60-80% by caching static assets like images and CSS.
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
