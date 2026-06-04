'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Cpu, Globe } from 'lucide-react';

const features = [
  {
    title: 'Extreme Hardware',
    desc: 'Powered by AMD Ryzen 9 7950X and EPYC 7003 processors for maximum performance.',
    icon: Cpu,
  },
  {
    title: 'Elite Peering',
    desc: 'Direct peering with major Indian ISPs ensuring sub-20ms latency across the subcontinent.',
    icon: Globe,
  },
  {
    title: 'L7 DDoS Shield',
    desc: 'Advanced 12Tbps+ mitigation specialized for gaming and enterprise web protocols.',
    icon: Shield,
  },
  {
    title: 'Rapid Deployment',
    desc: 'Our proprietary automation system deploys your node in under 60 seconds.',
    icon: Zap,
  },
];

export default function HexiumFeatures() {
  return (
    <section className="py-24 px-6 relative bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/10 transition-colors" />
              
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 group-hover:bg-blue-600/20 transition-all duration-500">
                <f.icon className="text-blue-500 w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-black text-white mb-4 tracking-tighter group-hover:text-blue-400 transition-colors uppercase">{f.title}</h3>
              <p className="text-gray-500 text-sm font-bold leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
