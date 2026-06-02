'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Cpu, Globe } from 'lucide-react';

const features = [
  {
    title: 'Enterprise Hardware',
    desc: 'Powered by Intel E5 v4 and Intel Platinum processors for stable VPS performance.',
    icon: Cpu,
  },
  {
    title: 'Global Network',
    desc: 'Sub-10ms latency in Delhi and sub-30ms across India.',
    icon: Globe,
  },
  {
    title: 'DDoS Protection',
    desc: 'Advanced L7 mitigation to keep your services online.',
    icon: Shield,
  },
  {
    title: 'Instant Setup',
    desc: 'Your server is deployed automatically within seconds.',
    icon: Zap,
  },
];

export default function HexiumFeatures() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/10 transition-colors" />
              
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-6 border border-blue-500/10 group-hover:scale-110 transition-transform">
                <f.icon className="text-blue-500 w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-black text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">{f.title}</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
