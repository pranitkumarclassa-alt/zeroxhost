'use client';

import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "What is ZeroXHost?",
    answer: "ZeroXHost is a premium India-based hosting provider specializing in ultra-low latency game servers, high-performance Cloud VPS, and dedicated VDS solutions. We operate our own infrastructure in Delhi and Mumbai to ensure the best possible performance for the Indian market."
  },
  {
    question: "Where are ZeroXHost servers located?",
    answer: "Our primary infrastructure is located in Tier-IV datacenters in Mumbai and Delhi, India. This allows us to provide sub-20ms latency to almost every major city in the country."
  },
  {
    question: "Does ZeroXHost offer DDoS protection?",
    answer: "Yes, every ZeroXHost plan comes with advanced Layer 7 DDoS protection as standard. Our network is capable of mitigating large-scale attacks, keeping your services online 24/7."
  },
  {
    question: "What makes ZeroXHost different from other providers?",
    answer: "ZeroXHost uses only the latest enterprise hardware, including Ryzen 9 7950X processors and NVMe Gen4 storage. Unlike budget providers, we do not oversell our resources, ensuring you get exactly what you pay for."
  },
  {
    question: "Can I upgrade my ZeroXHost plan later?",
    answer: "Absolutely! ZeroXHost allows for instant vertical scaling. You can upgrade your CPU, RAM, or storage at any time directly from our client area without any downtime."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-4"
          >
            Common Questions
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            ZeroXHost <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">FAQ</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all text-left flex items-center justify-between"
              >
                <span className="text-lg font-bold text-white group-hover:text-blue-500 transition-colors">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  {openIndex === i ? <Minus size={18} className="text-blue-500" /> : <Plus size={18} className="text-blue-500" />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-8 rounded-[2rem] bg-blue-600/5 border border-blue-500/10 text-gray-400 font-medium leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
