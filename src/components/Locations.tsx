'use client';

import { motion } from 'framer-motion';
import { MapPin, Globe, ArrowUpRight } from 'lucide-react';

const locations = [
  {
    city: 'Mumbai',
    status: 'Live',
    region: 'Asia - India (Mumbai)',
    specs: 'Tier 4 Datacenter'
  },
  {
    city: 'Noida',
    status: 'Live',
    region: 'Asia - India (Noida)',
    specs: 'Enterprise Node'
  },
];

export default function Locations() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full -z-10 translate-x-1/2" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-[0_0_20px_rgba(37,99,235,0.1)]"
          >
            India — game server nodes
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-8 tracking-tighter"
          >
            Hosted in India,<br />
            <span className="text-blue-500">Low Latency Gameplay</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-xl font-medium leading-relaxed mb-12"
          >
            Minecraft servers run from our India nodes in Mumbai and Noida — built for low ping, stable uptime, and DDoS-protected gameplay across the region.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-[#020202] bg-blue-600 flex items-center justify-center text-white text-xs font-black shadow-xl overflow-hidden grayscale hover:grayscale-0 transition-all cursor-pointer">
                   <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-gray-500 font-bold text-sm tracking-tight italic">Trusted by 1000+ communities in India</p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Animated Map Visual (Simplified) */}
          <div className="absolute inset-0 bg-blue-600/5 blur-3xl -z-10 rounded-full" />
          
          <div className="space-y-6 relative z-10">
            <div className="text-gray-500 font-black uppercase tracking-[0.3em] text-[10px] mb-8 ml-2">Available Nodes</div>
            {locations.map((loc, index) => (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: -10, transition: { duration: 0.3 } }}
                className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:border-blue-500/40 hover:bg-white/[0.04] transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-8 relative z-10">
                  <div className="w-20 h-20 rounded-[2.5rem] bg-blue-600/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600/20 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-500">
                    <MapPin className="text-blue-500 w-10 h-10 drop-shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white mb-1 group-hover:text-blue-400 transition-colors duration-500 tracking-tighter">{loc.city}</h3>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-500 text-xs font-black uppercase tracking-widest">{loc.region}</p>
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                      <p className="text-blue-500/60 text-[10px] font-black uppercase tracking-widest italic">{loc.specs}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-green-500/10 border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.1)] relative z-10 group-hover:scale-105 transition-transform">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-green-500 text-[10px] font-black uppercase tracking-widest">{loc.status}</span>
                </div>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-10 rounded-[3rem] bg-white/[0.01] border border-white/5 flex items-center justify-between opacity-40 group hover:opacity-60 transition-all cursor-not-allowed"
            >
              <div className="flex items-center gap-8">
                <div className="w-20 h-20 rounded-[2.5rem] bg-white/5 flex items-center justify-center">
                  <Globe className="text-gray-600 w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-1 tracking-tighter italic">Global Expansion</h3>
                  <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Singapore & Frankfurt coming soon</p>
                </div>
              </div>
              <ArrowUpRight className="text-gray-700" size={32} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
