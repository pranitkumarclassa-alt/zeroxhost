'use client';

import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Footer from '@/components/Footer';
import { Globe, Zap, Shield, Activity, MapPin, Server } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NetworkPage() {
  const nodes = [
    { name: 'Delhi-NCR-01', location: 'Delhi, India', status: 'Online', latency: '4ms', load: '24%' },
    { name: 'Delhi-NCR-02', location: 'Delhi, India', status: 'Online', latency: '5ms', load: '42%' },
    { name: 'Game-Node-01', location: 'Delhi, India', status: 'Online', latency: '3ms', load: '18%' },
    { name: 'VDS-Cluster-A', location: 'Delhi, India', status: 'Online', latency: '4ms', load: '31%' },
  ];

  return (
    <main className="relative min-h-screen selection:bg-blue-500/30 bg-transparent">
      <Navbar />
      
      <div className="relative z-10">
        <SubpageHero 
          category="Infrastructure"
          title="Network &"
          subtitle="Connectivity"
          description="Real-time status of our global network infrastructure. Built on Tier-3 carrier-neutral data centers with multi-terabit DDoS protection."
          icon={Globe}
        />
        
        <section className="py-24 px-6 bg-transparent">
          <div className="max-w-7xl mx-auto">
            {/* Real-time Status Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {nodes.map((node, i) => (
                <motion.div
                  key={node.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl backdrop-blur-xl group hover:border-blue-500/30 transition-all"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center">
                      <Server size={20} className="text-blue-500" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
                      <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">{node.status}</span>
                    </div>
                  </div>
                  <h3 className="text-white font-black text-lg mb-1">{node.name}</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-6">
                    <MapPin size={10} />
                    {node.location}
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                    <div>
                      <span className="text-gray-600 text-[9px] font-black uppercase tracking-widest block mb-1">Latency</span>
                      <span className="text-white font-black text-sm">{node.latency}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 text-[9px] font-black uppercase tracking-widest block mb-1">Load</span>
                      <span className="text-white font-black text-sm">{node.load}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white/[0.02] border border-white/5 p-12 rounded-[3rem] backdrop-blur-3xl">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4">
                  <Shield className="text-blue-500" />
                  DDoS Mitigation
                </h2>
                <div className="space-y-8">
                  <p className="text-gray-400 leading-relaxed">
                    Our network features multi-layered DDoS protection capable of mitigating attacks up to 2Tbps. We use advanced traffic scrubbing to ensure only clean traffic reaches your server.
                  </p>
                  <ul className="space-y-6">
                    {[
                      { title: 'Anycast Network', desc: 'Distributed scrubbing nodes across the globe.' },
                      { title: 'L3/L4/L7 Protection', desc: 'Comprehensive protection against all attack vectors.' },
                      { title: 'Zero Latency Scrubbing', desc: 'Hardware-level filtering with no added latency.' }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0 mt-1">
                          <Zap size={12} className="text-blue-500" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                          <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/5 p-12 rounded-[3rem] backdrop-blur-3xl">
                <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4">
                  <Activity className="text-blue-500" />
                  Network Providers
                </h2>
                <div className="space-y-8">
                  <p className="text-gray-400 leading-relaxed">
                    We peer with major Tier-1 bandwidth providers in India to ensure maximum throughput and minimal hops for your data.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {['Bharti Airtel', 'Tata Comm', 'Reliance Jio', 'Vodafone Idea'].map((provider) => (
                      <div key={provider} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 font-black text-xs uppercase tracking-widest text-center">
                        {provider}
                      </div>
                    ))}
                  </div>
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
