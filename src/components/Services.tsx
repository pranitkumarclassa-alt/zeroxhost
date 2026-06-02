'use client';

import { motion } from 'framer-motion';
import { Gamepad2, Globe, Cpu, Server, Bot, Zap } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Game Servers',
    description: 'Minecraft, Ark, CS:GO, GTA, Among Us & more — all on premium hardware.',
    icon: Gamepad2,
    href: '#games',
    color: 'blue',
  },
  {
    title: 'Web Hosting',
    description: 'Fast, secure shared web hosting with cPanel and free SSL.',
    icon: Globe,
    href: '#web',
    color: 'blue',
  },
  {
    title: 'Bot Hosting',
    description: 'Run Discord, Telegram & WhatsApp bots 24/7 with auto-restart.',
    icon: Bot,
    href: '#bots',
    color: 'blue',
  },
  {
    title: 'VPS Hosting',
    description: 'KVM-virtualized VPS — Intel E5 v4 & Intel Platinum 8269CY in Delhi.',
    icon: Server,
    href: '#vps',
    color: 'blue',
  },
  {
    title: 'VDS Hosting',
    description: 'Bare-metal performance with dedicated CPU cores and RAM.',
    icon: Cpu,
    href: '#vds',
    color: 'blue',
  },
  {
    title: 'Instant Setup',
    description: 'Automated deployment in under 60 seconds after payment.',
    icon: Zap,
    href: '#setup',
    color: 'blue',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(37,99,235,0.1)]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
            </span>
            Premium Infrastructure
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Built for every workload
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            From Minecraft worlds to production VPS clusters — we power it all with enterprise-grade infrastructure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:border-blue-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="text-blue-500 w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors"
                >
                  Explore Service <Zap size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
