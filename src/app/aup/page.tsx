'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { acceptableUsePolicy } from '@/lib/siteContent';
import { motion } from 'framer-motion';

export default function AcceptableUsePolicyPage() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500/30">
      <Navbar />
      <div className="relative z-10">
        <PageHeader
          title="Acceptable Use Policy"
          subtitle="Rules and requirements for responsible service usage at ZeroXHost."
          gradient="from-purple-400 to-blue-600"
        />

        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto space-y-6">
            {acceptableUsePolicy.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 shadow-xl shadow-black/10"
              >
                <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
