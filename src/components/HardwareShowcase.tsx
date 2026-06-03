'use client';

import { motion } from 'framer-motion';
import { Cpu, HardDrive, Zap, ShieldCheck } from 'lucide-react';

const specs = [
  {
    label: 'PROCESSOR',
    value: 'Ryzen 9 7950X',
    desc: '5.7GHz Boost Clock for maximum single-threaded performance.',
    icon: Cpu,
    color: 'text-blue-500'
  },
  {
    label: 'STORAGE',
    value: 'NVMe Gen4 SSD',
    desc: 'Up to 7,000MB/s read speeds for instant world loading.',
    icon: HardDrive,
    color: 'text-indigo-500'
  },
  {
    label: 'MEMORY',
    value: 'DDR5 5200MHz',
    desc: 'Extreme bandwidth for high-capacity modded communities.',
    icon: Zap,
    color: 'text-blue-400'
  },
  {
    label: 'PROTECTION',
    value: '12Tbps+ DDoS',
    desc: 'Advanced L7 mitigation specialized for gaming protocols.',
    icon: ShieldCheck,
    color: 'text-indigo-400'
  }
];

export default function HardwareShowcase() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-4"
            >
              Hardware Excellence
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white leading-tight"
            >
              Enterprise-Grade<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Pure Performance.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 font-bold uppercase tracking-widest text-[10px] lg:mb-4"
          >
            Powered by the latest AMD & NVMe technologies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-blue-500/10 transition-colors">
                <spec.icon size={100} />
              </div>
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <spec.icon className={`${spec.color} w-7 h-7`} />
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2">{spec.label}</div>
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">{spec.value}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{spec.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-[2rem] bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xl"
        >
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.6)]">
              <Zap size={20} className="text-white fill-white" />
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-sm">300% Faster than competitors</h4>
              <p className="text-gray-500 text-xs font-bold">Benchmark data based on internal testing vs industry standard nodes.</p>
            </div>
          </div>
          <button className="px-10 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
            View Benchmarks
          </button>
        </motion.div>
      </div>
    </section>
  );
}
