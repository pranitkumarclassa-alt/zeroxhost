'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MessageSquare, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const reviews = [
  {
    name: 'Rahul Sharma',
    role: 'Game Developer',
    content: 'ZeroXHost has the best latency for Indian players. My Minecraft server runs smoothly even with 50+ players and heavy mods.',
    rating: 5,
    verified: true
  },
  {
    name: 'Anjali Gupta',
    role: 'SaaS Founder',
    content: 'The VPS performance is top-notch. AMD EPYC CPUs make a huge difference in our build times. Highly recommended!',
    rating: 5,
    verified: true
  },
  {
    name: 'Vikram Singh',
    role: 'DevOps Engineer',
    content: 'Finally a hosting provider in India that understands network routing. The Mumbai nodes are exceptionally stable.',
    rating: 5,
    verified: true
  },
  {
    name: 'Sarah Chen',
    role: 'Discord Bot Developer',
    content: 'Easy to set up and very affordable. The DDoS protection has already saved our bot from several large attacks.',
    rating: 5,
    verified: true
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-4"
          >
            Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">thousands</span> of users.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl hover:border-blue-500/30 transition-all group relative"
            >
              <div className="absolute top-8 right-8 text-white/5 group-hover:text-blue-500/10 transition-colors">
                <Quote size={60} />
              </div>
              
              <div className="flex text-yellow-500 gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium">
                "{review.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 font-black text-xs">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-white font-bold text-sm">{review.name}</h4>
                    {review.verified && <CheckCircle2 size={12} className="text-blue-500" />}
                  </div>
                  <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/10">
            <MessageSquare size={16} className="text-blue-500" />
            <span className="text-gray-400 font-bold text-sm">Join our <Link href="#" className="text-white hover:text-blue-500 transition-colors">Discord Community</Link> to see more real-time feedback.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
