'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, MapPin, MessageSquare, Database, Clock, Activity, Cpu, Globe } from 'lucide-react';

const whyZerox = [
  {
    title: 'NVMe Storage',
    desc: 'Up to 10x faster than traditional SSDs. Boot your servers in a heartbeat.',
    icon: Zap,
    gradient: 'from-blue-500/10 to-transparent'
  },
  {
    title: 'DDoS Protection',
    desc: 'Advanced Layer 7 mitigation on every node to keep your game running 24/7.',
    icon: Shield,
    gradient: 'from-purple-500/10 to-transparent'
  },
  {
    title: 'India Node',
    desc: 'Delhi-based hardware with sub-20ms latency across the Indian subcontinent.',
    icon: MapPin,
    gradient: 'from-green-500/10 to-transparent'
  },
  {
    title: 'Instant Setup',
    desc: 'Automated deployment system gets your server online the moment you pay.',
    icon: Activity,
    gradient: 'from-orange-500/10 to-transparent'
  },
  {
    title: 'Daily Backups',
    desc: 'Off-site backups so your progress is always safe, no matter what happens.',
    icon: Database,
    gradient: 'from-cyan-500/10 to-transparent'
  },
  {
    title: 'Uptime SLA',
    desc: '99.9% uptime guaranteed with redundant networking and enterprise power.',
    icon: Clock,
    gradient: 'from-red-500/10 to-transparent'
  },
];

export default function WhyZerox() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-transparent">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/5 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
            >
              The Advantage
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black text-white leading-tight"
            >
              Performance you <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">can feel.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 font-medium max-w-sm italic text-lg leading-relaxed"
          >
            "We don't just host servers; we provide the foundation for your next big community."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyZerox.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`p-10 rounded-[3.5rem] bg-white/[0.01] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.03] transition-all group relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-500">
                  <item.icon size={32} className="text-blue-500 drop-shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors duration-500 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed italic text-sm">{item.desc}</p>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500/50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
