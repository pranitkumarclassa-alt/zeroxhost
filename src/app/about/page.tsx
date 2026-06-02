'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Cpu } from 'lucide-react';

export default function About() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500/30">
      <Navbar />
      
      <div className="relative z-10">
        <PageHeader 
          title="About Zerox Host" 
          subtitle="We are India's leading hosting provider, dedicated to delivering enterprise-grade performance and unmatched reliability for gamers and developers alike."
        />

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-5xl font-black text-white drop-shadow-md">Our Mission</h2>
                <p className="text-gray-300 text-xl leading-relaxed font-bold drop-shadow-sm">
                  Founded with a vision to revolutionize the hosting industry in India, Zerox Host provides high-frequency compute power and low-latency networking. We believe that everyone deserves access to premium infrastructure without the enterprise price tag.
                </p>
                <div className="grid grid-cols-2 gap-10 pt-8">
                  <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                    <div className="text-4xl font-black text-blue-500 mb-2 shadow-blue-500/20 shadow-sm">99.9%</div>
                    <div className="text-gray-500 font-black uppercase tracking-[0.2em] text-[10px]">Uptime SLA</div>
                  </div>
                  <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                    <div className="text-4xl font-black text-blue-500 mb-2 shadow-blue-500/20 shadow-sm">Delhi</div>
                    <div className="text-gray-500 font-black uppercase tracking-[0.2em] text-[10px]">Primary Node</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-[3rem] bg-gradient-to-br from-blue-600/20 to-transparent border border-white/10 flex items-center justify-center group overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <Cpu size={120} className="text-blue-500 group-hover:scale-110 transition-transform duration-700 shadow-[0_0_50px_rgba(37,99,235,0.3)]" />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Performance First",
                  desc: "We use only the latest Intel and AMD processors coupled with NVMe storage for maximum speed.",
                  icon: Zap
                },
                {
                  title: "Security Focused",
                  desc: "Every plan includes advanced Layer 7 DDoS protection to keep your services online 24/7.",
                  icon: Shield
                },
                {
                  title: "Global Reach",
                  desc: "While we are proud of our India nodes, our network is optimized for global connectivity.",
                  icon: Globe
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-8">
                    <item.icon className="text-blue-500 w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
