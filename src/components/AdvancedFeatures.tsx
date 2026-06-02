'use client';

import { motion } from 'framer-motion';
import { Cpu, Zap, Shield, Settings, BarChart, Globe } from 'lucide-react';

const advancedFeatures = [
  {
    title: 'High Performance',
    description: 'Powered by latest generation processors for performance',
    icon: Cpu,
  },
  {
    title: 'Low Latency',
    description: 'Optimized network infrastructure for minimal lag and delay',
    icon: Zap,
  },
  {
    title: 'Advanced Security',
    description: 'Our system is protected by advanced, multi-layered security protocols designed to detect, isolate, and neutralize threats in real time.',
    icon: Shield,
  },
  {
    title: 'Full Control',
    description: 'Complete server control panel with advanced configuration options',
    icon: Settings,
  },
  {
    title: 'Resource Scaling',
    description: 'Dynamic resource allocation based on server demands',
    icon: BarChart,
  },
  {
    title: 'Global Network',
    description: 'Worldwide server locations for optimal connectivity',
    icon: Globe,
  },
];

export default function AdvancedFeatures() {
  return (
    <section className="py-24 px-6 relative bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4"
          >
            Advanced Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Built for every workload,<br />from Minecraft to VPS clusters
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-16">
          {advancedFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-start p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600/20 transition-all border border-blue-500/10">
                <feature.icon className="text-blue-500 w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium text-sm group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
          {/* Added Daily Backups */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-start p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600/20 transition-all border border-blue-500/10">
              <Shield className="text-blue-500 w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">Daily Backups</h3>
            <p className="text-gray-400 leading-relaxed font-medium text-sm group-hover:text-gray-300 transition-colors">
              Automated off-site backups so your data is never lost, no matter what happens.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
