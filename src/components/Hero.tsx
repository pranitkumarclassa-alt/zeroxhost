'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Gamepad2, Server, Bot, Zap, Activity, Globe } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const heroTabs = [
  { id: 'games', label: 'GAMES', price: '₹50', icon: Gamepad2, color: 'blue', bg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjC9YC_CqYtZd_sBR0ywBi89Xv9Bn-TYNDiQ&s' },
  { id: 'cloud', label: 'CLOUD', price: '₹150', icon: Server, color: 'purple', bg: 'https://images.rawpixel.com/image_400/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5MzQtbnVubnktNDIuanBn.jpg' },
  { id: 'apps', label: 'APPS', price: '₹80', icon: Bot, color: 'cyan', bg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa4W0-BI5CUx35ovhgfEqbeDo9obGXOMgEtg&s' },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState('cloud');
  const currentTab = heroTabs.find(t => t.id === activeTab) || heroTabs[1];

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-[-2] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Content - Exactly like Halix */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8 backdrop-blur-md"
          >
            <Server size={12} />
            {activeTab.toUpperCase()}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[100px] font-black text-white leading-[0.85] mb-8 tracking-tighter font-montserrat"
          >
            Experience<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
              Next-Gen<br />
              Hosting
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-xl mb-12 leading-relaxed font-medium italic"
          >
            Ultra-low latency India nodes powered by enterprise NVMe hardware. The ultimate choice for serious communities.
          </motion.p>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { name: 'Game servers', icon: Gamepad2, id: 'games' },
              { name: 'Cloud VPS', icon: Server, id: 'cloud' },
              { name: 'Discord bots', icon: Bot, id: 'apps' },
              { name: 'Special deals', icon: Zap, id: 'deals' },
            ].map((pill) => (
              <button
                key={pill.name}
                onClick={() => pill.id !== 'deals' && setActiveTab(pill.id)}
                className={`px-6 py-3 rounded-2xl border text-[11px] font-black uppercase tracking-widest transition-all backdrop-blur-md flex items-center gap-3 ${
                  activeTab === pill.id 
                    ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.3)]' 
                    : 'bg-white/[0.03] border-white/10 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                <pill.icon size={14} className={activeTab === pill.id ? 'text-white' : 'text-blue-500'} />
                {pill.name}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/games"
              className="group relative px-10 py-5 rounded-2xl bg-[#a855f7] text-white font-black text-xs uppercase tracking-[0.2em] transition-all hover:bg-[#9333ea] shadow-[0_0_40px_rgba(168,85,247,0.4)] overflow-hidden flex items-center gap-3"
            >
              Get started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#features"
              className="px-10 py-5 rounded-2xl bg-white/[0.03] text-white font-black text-xs uppercase tracking-[0.2em] border border-white/10 backdrop-blur-md transition-all hover:bg-white/10 flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Side: Interactive Card - Exactly like Halix */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full group-hover:bg-blue-600/30 transition-all duration-700" />
          
          <div className="relative bg-[#0a0a0a]/80 backdrop-blur-[40px] border border-white/10 rounded-[3rem] p-1 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] flex h-[550px]">
            {/* Vertical Tabs */}
            <div className="w-32 border-r border-white/5 p-4 flex flex-col gap-4 bg-black/60">
              {heroTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-500 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] scale-[1.05]'
                      : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                  }`}
                >
                  <tab.icon size={24} className={activeTab === tab.id ? 'text-white' : 'text-blue-500/50'} />
                  <span className="text-[9px] font-black tracking-widest uppercase">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-grow p-10 flex flex-col justify-between relative">
              <div className="absolute top-8 right-8 px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[8px] font-black uppercase tracking-widest z-10 animate-pulse">
                NOW FEATURING
              </div>

              <div className="space-y-6 mt-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="space-y-2">
                      <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">FROM</div>
                      <div className="text-8xl font-black text-white tracking-tighter">
                        {currentTab.price}
                        <span className="text-xl text-gray-500 tracking-normal font-bold">/month</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: 'CPU', val: activeTab === 'cloud' ? 'Platinum 8269CY' : 'Intel E5 v4' },
                        { label: 'RAM', val: 'DDR4/DDR5 ECC' },
                        { label: 'DISK', val: 'NVMe Gen4 SSD' },
                        { label: 'NETWORK', val: '10Gbps Uplink' },
                      ].map((spec) => (
                        <div key={spec.label} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
                          <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">{spec.label}</div>
                          <div className="text-[10px] font-black text-white uppercase">{spec.val}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-end justify-between">
                <div className="space-y-1">
                  <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{currentTab.label} HOSTING</div>
                  <div className="text-xs font-bold text-gray-400">High Performance Nodes</div>
                </div>
                <Link
                  href={`/${activeTab}`}
                  className="px-8 py-4 rounded-2xl bg-[#a855f7] text-white font-black text-[10px] uppercase tracking-widest hover:bg-[#9333ea] transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                >
                  View {activeTab} plans <ArrowRight size={14} />
                </Link>
              </div>

              {/* Decorative Background Image (Faded) */}
              <div className="absolute inset-0 z-[-1] opacity-30 grayscale pointer-events-none transition-all duration-700">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTab.bg}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative w-full h-full"
                  >
                    <Image 
                      src={currentTab.bg} 
                      alt={currentTab.label} 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
