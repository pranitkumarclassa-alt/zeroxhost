'use client';

import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Footer from '@/components/Footer';
import { Database, Shield, Zap, Globe, Cpu, HardDrive } from 'lucide-react';
import { motion } from 'framer-motion';

const specs = [
  { label: 'Network', value: '100 Gbps+ Capacity', icon: Globe },
  { label: 'Storage', value: 'Enterprise NVMe Gen4', icon: HardDrive },
  { label: 'Compute', value: 'AMD EPYC & Ryzen 9', icon: Cpu },
  { label: 'Uptime', value: '99.99% Guaranteed', icon: Zap },
];

export default function DatacenterPage() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500/30 bg-transparent">
      <Navbar />
      
      <div className="relative z-10">
        <SubpageHero 
          category="Infrastructure"
          title="Tier-IV"
          subtitle="Datacenters"
          description="Global infrastructure designed for maximum reliability, speed, and security."
          icon={Database}
        />
        
        <section className="py-24 px-6 bg-transparent">
          <div className="max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                  Powering the <span className="text-blue-500">Next Generation</span> of Hosting.
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-12">
                  ZeroXHost operates out of world-class Tier-IV facilities. Our infrastructure is built with full redundancy, ensuring that your services stay online even in the event of hardware failure or power outages.
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                  {specs.map((spec) => (
                    <div key={spec.label} className="group">
                      <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <spec.icon size={20} className="text-blue-500" />
                      </div>
                      <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-2">{spec.label}</h4>
                      <p className="text-gray-500 font-bold text-sm">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full" />
                <div className="relative bg-white/[0.02] border border-white/5 p-4 rounded-[3rem] backdrop-blur-3xl">
                  <div className="aspect-video rounded-[2.5rem] bg-gray-900 overflow-hidden relative">
                    {/* Placeholder for datacenter image/video */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Database size={80} className="text-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all">
                <Shield size={40} className="text-blue-500 mb-8" />
                <h3 className="text-2xl font-black text-white mb-6">Physical Security</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-bold">
                  24/7 on-site security, biometric access control, and extensive CCTV monitoring ensure that your physical hardware is always protected.
                </p>
              </div>
              <div className="p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all">
                <Zap size={40} className="text-blue-500 mb-8" />
                <h3 className="text-2xl font-black text-white mb-6">N+1 Redundancy</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-bold">
                  All critical systems, including power, cooling, and network connectivity, are built with N+1 redundancy to prevent single points of failure.
                </p>
              </div>
              <div className="p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all">
                <Globe size={40} className="text-blue-500 mb-8" />
                <h3 className="text-2xl font-black text-white mb-6">Global Network</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-bold">
                  Strategic peering with major ISPs and internet exchanges (IXPs) ensures the lowest possible latency and maximum throughput globally.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </main>
  );
}
