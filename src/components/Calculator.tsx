'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, HardDrive, Zap, ShoppingCart } from 'lucide-react';
import { useCurrency } from '@/lib/CurrencyContext';

export default function Calculator() {
  const [ram, setRam] = useState(4);
  const [cpu, setCpu] = useState(2);
  const [ssd, setSsd] = useState(50);
  const [totalPrice, setTotalPrice] = useState(0);
  const { formatPrice } = useCurrency();

  useEffect(() => {
    // Base Price: 50
    // RAM: 25 per GB
    // CPU: 50 per vCore
    // SSD: 2 per GB
    const calculated = 50 + (ram * 25) + (cpu * 50) + (ssd * 2);
    setTotalPrice(calculated);
  }, [ram, cpu, ssd]);

  return (
    <section id="calculator" className="py-24 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-4"
          >
            Pricing Calculator
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Estimate your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">server cost.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 font-medium"
          >
            Customize your resources and get instant pricing. No hidden fees.
          </motion.p>
        </div>

        <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 backdrop-blur-3xl relative overflow-hidden group shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            {/* Sliders */}
            <div className="space-y-10">
              {/* RAM */}
              <div className="space-y-4 group/slider">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-white font-bold group-hover/slider:text-blue-400 transition-colors">
                    <Zap size={18} className="text-blue-500 group-hover/slider:animate-pulse" />
                    <span>RAM (Memory)</span>
                  </div>
                  <span className="text-blue-400 font-black text-lg">{ram} GB</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="128"
                  value={ram}
                  onChange={(e) => setRam(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-400 transition-all"
                />
              </div>

              {/* CPU */}
              <div className="space-y-4 group/slider">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-white font-bold group-hover/slider:text-blue-400 transition-colors">
                    <Cpu size={18} className="text-blue-500 group-hover/slider:animate-pulse" />
                    <span>CPU Cores</span>
                  </div>
                  <span className="text-blue-400 font-black text-lg">{cpu} vCores</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="32"
                  value={cpu}
                  onChange={(e) => setCpu(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-400 transition-all"
                />
              </div>

              {/* SSD */}
              <div className="space-y-4 group/slider">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-white font-bold group-hover/slider:text-blue-400 transition-colors">
                    <HardDrive size={18} className="text-blue-500 group-hover/slider:animate-pulse" />
                    <span>NVMe SSD Storage</span>
                  </div>
                  <span className="text-blue-400 font-black text-lg">{ssd} GB</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={ssd}
                  onChange={(e) => setSsd(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-400 transition-all"
                />
              </div>
            </div>

            {/* Total Card */}
            <div className="flex flex-col justify-center items-center text-center p-8 rounded-[2rem] md:rounded-[2.5rem] bg-blue-600/10 border border-blue-500/20 shadow-[0_0_50px_rgba(37,99,235,0.1)] hover:border-blue-500/40 transition-all duration-500 group/total">
              <h4 className="text-gray-500 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Estimated Monthly</h4>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl md:text-6xl font-black text-white group-hover/total:text-blue-400 transition-colors duration-500 drop-shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                  {formatPrice(totalPrice)}
                </span>
                <span className="text-gray-500 font-bold text-sm">/mo</span>
              </div>
              
              <div className="w-full h-px bg-white/10 mb-8" />
              
              <ul className="text-left w-full space-y-4 mb-10">
                {[
                  'Free Global DDoS Protection',
                  'Instant Automated Setup',
                  'Premium NVMe Infrastructure'
                ].map((item, i) => (
                  <li key={i} className="text-gray-400 text-[13px] font-bold flex items-center gap-3 group/li">
                    <div className="w-2 h-2 rounded-full bg-blue-500 group-hover/li:scale-125 transition-transform shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-5 rounded-xl bg-blue-600 text-white font-black text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98]">
                <ShoppingCart size={16} />
                Deploy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
