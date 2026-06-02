'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Clock, Headphones, Cpu, Globe, Layers, BarChart } from 'lucide-react';

const features = [
  {
    title: 'High Performance',
    description: 'Powered by Intel Platinum 8269CY & E5 v4 processors for unmatched performance and stability.',
    icon: Cpu,
  },
  {
    title: 'Low Latency',
    description: 'Optimized network infrastructure in Delhi for minimal lag and delay across Asia.',
    icon: Zap,
  },
  {
    title: 'Advanced Security',
    description: 'Multi-layered security protocols designed to detect and neutralize threats in real time.',
    icon: Shield,
  },
  {
    title: 'Full Control',
    description: 'Complete server control panel with advanced configuration and monitoring options.',
    icon: Layers,
  },
  {
    title: 'Resource Scaling',
    description: 'Dynamic resource allocation based on your server demands and traffic spikes.',
    icon: BarChart,
  },
  {
    title: 'Global Network',
    description: 'Enterprise-grade connectivity with multiple carriers for optimal uptime and speed.',
    icon: Globe,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_20px_rgba(37,99,235,0.1)]"
          >
            Infrastructure
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter font-montserrat">Advanced <span className="text-blue-500">Features</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg">Everything you need for professional game server hosting and cloud infrastructure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 rounded-[3rem] bg-white/[0.02] backdrop-blur-3xl border border-white/5 hover:bg-white/[0.04] hover:border-blue-500/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 cursor-default"
            >
              <div className="w-16 h-16 rounded-[1.5rem] bg-blue-600/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600/20 transition-all duration-500 border border-blue-500/10">
                <feature.icon className="text-blue-500 w-8 h-8 drop-shadow-[0_0_12px_rgba(37,99,235,0.6)]" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
              <p className="text-gray-400 text-sm font-medium leading-relaxed group-hover:text-gray-300 transition-colors">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
