'use client';

import { motion } from 'framer-motion';
import { DollarSign, Percent, ShieldCheck, Zap, Users, Globe } from 'lucide-react';

const benefits = [
  {
    title: 'High Profit Margins',
    desc: 'Get exclusive discounted rates and keep 100% of the markup you set for your clients.',
    icon: DollarSign,
  },
  {
    title: 'White Label Branding',
    desc: 'Sell our premium hosting under your own brand name. Your clients never see Zerox Host.',
    icon: Globe,
  },
  {
    title: 'Automated Billing',
    desc: 'Full WHMCS and Wise integration for automated provisioning and billing management.',
    icon: Zap,
  },
  {
    title: 'Dedicated Support',
    desc: 'Resellers get priority access to our senior engineering team for technical assistance.',
    icon: Users,
  },
  {
    title: 'Enterprise Hardware',
    desc: 'Offer your clients the same high-performance NVMe infrastructure we use.',
    icon: ShieldCheck,
  },
  {
    title: 'Scalable Resources',
    desc: 'Easily upgrade your reseller pool as your business grows without any downtime.',
    icon: Percent,
  },
];

export default function ResellerBenefits() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_20px_rgba(37,99,235,0.1)]"
          >
            Business Growth
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter font-montserrat">Reseller <span className="text-blue-500">Program</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg">Everything you need to start your own hosting company today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 rounded-[3rem] bg-white/[0.02] backdrop-blur-3xl border border-white/5 hover:bg-white/[0.04] hover:border-blue-500/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-[1.5rem] bg-blue-600/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600/20 transition-all duration-500 border border-blue-500/10">
                <benefit.icon className="text-blue-500 w-8 h-8 drop-shadow-[0_0_12px_rgba(37,99,235,0.6)]" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors font-montserrat">{benefit.title}</h3>
              <p className="text-gray-400 text-sm font-medium leading-relaxed group-hover:text-gray-300 transition-colors">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
