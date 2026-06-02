"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { acceptableUsePolicy, refundSections, serviceLevelAgreement, termsSections } from '@/lib/siteContent';

type LegalTab = 'terms' | 'refund' | 'aup' | 'sla';

const legalTabs: { id: LegalTab; label: string }[] = [
  { id: 'terms', label: 'Terms of Service' },
  { id: 'refund', label: 'Refund Policy' },
  { id: 'aup', label: 'Acceptable Use Policy' },
  { id: 'sla', label: 'Service Level Agreement' },
];

export default function Legal() {
  const [activeTab, setActiveTab] = useState<LegalTab>('terms');

  const getActiveSections = () => {
    switch (activeTab) {
      case 'terms':
        return termsSections;
      case 'refund':
        return refundSections;
      case 'aup':
        return acceptableUsePolicy;
      case 'sla':
        return serviceLevelAgreement;
    }
  };

  return (
    <main className="relative min-h-screen selection:bg-blue-500/30">
      <Navbar />

      <div className="relative z-10">
        <PageHeader title="Legal & Policies" subtitle="Select the policy you want to read: Terms, Refunds, AUP, or SLA." />

        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-10">
              {legalTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-3 rounded-full text-sm font-black uppercase tracking-[0.24em] transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-[0_0_30px_rgba(37,99,235,0.25)]'
                      : 'bg-white/[0.04] text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="grid gap-6">
              {getActiveSections().map((section, index) => (
                <motion.article
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 shadow-xl shadow-black/10"
                >
                  <h3 className="text-2xl font-black text-white mb-4">{section.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{section.content}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
