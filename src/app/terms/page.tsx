'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { termsSections } from '@/lib/siteContent';

export default function Terms() {
  const sections = termsSections;

  return (
    <main className="relative min-h-screen selection:bg-blue-500/30">
      <Navbar />
      
      <div className="relative z-10">
        <PageHeader 
          title="Terms of Service" 
          subtitle="Please read these terms carefully before using our services. Last updated: June 2026."
        />

        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <h3 className="text-2xl font-black text-white mb-6 group-hover:text-blue-500 transition-colors">
                  {section.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-medium italic">
                  {section.content}
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
