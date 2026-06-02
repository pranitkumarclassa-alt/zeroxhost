'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { refundSections } from '@/lib/siteContent';

export default function Refund() {
  const policies = refundSections;

  return (
    <main className="relative min-h-screen selection:bg-blue-500/30">
      <Navbar />
      
      <div className="relative z-10">
        <PageHeader 
          title="Refund Policy" 
          subtitle="Our commitment to transparency and fairness in billing."
          gradient="from-cyan-400 to-blue-600"
        />

        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all"
              >
                <h3 className="text-2xl font-black text-white mb-6 group-hover:text-blue-500 transition-colors">
                  {policy.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-medium">
                  {policy.content}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
