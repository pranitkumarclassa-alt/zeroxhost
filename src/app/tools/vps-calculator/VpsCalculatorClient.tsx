'use client';

import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Calculator from '@/components/Calculator';
import Footer from '@/components/Footer';
import { Cpu } from 'lucide-react';

export default function VpsCalculatorClient() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500/30 bg-transparent">
      <Navbar />
      
      <div className="relative z-10">
        <SubpageHero 
          category="Free Tools"
          title="VPS Resource"
          subtitle="Estimator"
          description="Configure your ideal Virtual Private Server and get instant pricing. Compare CPU, RAM, and SSD options to find the best value for your project."
          icon={Cpu}
        />
        
        <section className="py-24 px-6 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <Calculator />
            
            <div className="mt-24 prose prose-invert max-w-4xl mx-auto">
              <h2 className="text-3xl font-black text-white mb-6">How to choose the right VPS resources?</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Not all workloads are the same. A personal blog requires very different resources than a high-traffic database or a compilation server.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-white mb-3">Light Web Apps</h3>
                  <p className="text-gray-500 text-xs">
                    1-2 vCores and 2-4GB RAM is perfect for portfolios, small blogs, and Discord bots.
                  </p>
                </div>
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-white mb-3">Databases</h3>
                  <p className="text-gray-500 text-xs">
                    Memory is key. Aim for 8GB+ RAM to ensure fast query responses and caching.
                  </p>
                </div>
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-white mb-3">Dev Environments</h3>
                  <p className="text-gray-500 text-xs">
                    CPU power matters most. 4+ vCores will significantly speed up build times.
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
