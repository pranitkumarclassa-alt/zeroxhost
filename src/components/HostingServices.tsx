'use client';

import { motion } from 'framer-motion';
import { Gamepad2, Server, Bot, Layers, Globe, ArrowRight, Zap, Shield, Cpu } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Minecraft Hosting',
    desc: 'High-frequency Ryzen 9 7950X nodes for the ultimate lag-free gaming experience.',
    icon: Gamepad2,
    href: '/games',
    color: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-500',
    tag: 'Extreme Perf'
  },
  {
    title: 'Cloud VPS',
    desc: 'Scalable KVM-virtualized servers with dedicated resources and full root access.',
    icon: Server,
    href: '/vps',
    color: 'from-blue-500/20 to-indigo-500/20',
    iconColor: 'text-blue-500',
    tag: 'Enterprise'
  },
  {
    title: 'Discord Bot Hosting',
    desc: '24/7 uptime for your communities. Optimized for Node.js, Python, and Java.',
    icon: Bot,
    href: '/bots',
    color: 'from-purple-500/20 to-violet-500/20',
    iconColor: 'text-purple-500',
    tag: 'Low Latency'
  },
  {
    title: 'Virtual Dedicated (VDS)',
    desc: 'Dedicated CPU cores and RAM with the flexibility of a virtual environment.',
    icon: Layers,
    href: '/vds',
    color: 'from-cyan-500/20 to-blue-500/20',
    iconColor: 'text-cyan-500',
    tag: 'Isolated'
  },
  {
    title: 'Web Hosting',
    desc: 'LiteSpeed-powered shared hosting with cPanel and free SSL for your business.',
    icon: Globe,
    href: '/webhosting',
    color: 'from-orange-500/20 to-amber-500/20',
    iconColor: 'text-orange-500',
    tag: 'Instant'
  }
];

export default function HostingServices() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4"
          >
            Elite Solutions
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter"
          >
            Supreme <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Hosting Services</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-bold text-lg uppercase tracking-tight">
            Enterprise-grade infrastructure designed for modern workloads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link 
                href={service.href}
                className="group block p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden h-full"
              >
                {/* Gradient Background Glow */}
                <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${service.color} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-10">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-blue-600/10 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-500">
                      <service.icon className={`${service.iconColor} w-8 h-8 shadow-[0_0_20px_rgba(37,99,235,0.3)]`} />
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[9px] font-black uppercase tracking-widest text-gray-500 group-hover:text-blue-400 transition-colors">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-4xl font-black text-white mb-6 group-hover:text-blue-400 transition-colors tracking-tighter">{service.title}</h3>
                  <p className="text-gray-500 text-lg font-bold leading-relaxed mb-10 group-hover:text-gray-400 transition-colors">{service.desc}</p>

                  <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-[0.3em] border-t border-white/5 pt-8">
                    <span className="text-blue-500">Configure Node</span>
                    <div className="flex items-center gap-2 text-gray-500 group-hover:text-white transition-colors">
                      Deploy <ArrowRight size={16} className="group-hover:translate-x-2 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Infrastructure Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="group p-10 rounded-[3rem] bg-blue-600/5 border border-blue-500/20 relative overflow-hidden flex flex-col justify-center items-center text-center lg:col-span-1 md:col-span-2"
          >
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(37,99,235,0.4)]">
                <Shield size={32} className="text-white fill-white/20" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">Enterprise Shield</h3>
              <p className="text-blue-400/70 text-[10px] font-black uppercase tracking-[0.3em] mb-8">Layer 7 DDoS Mitigation</p>
              <p className="text-gray-400 text-sm font-bold leading-relaxed mb-10 max-w-[240px] mx-auto">
                Advanced protection included on every node by default.
              </p>
              <button className="px-10 py-4 rounded-2xl bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.25em] hover:bg-blue-700 transition-all shadow-xl">
                Network Status
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
