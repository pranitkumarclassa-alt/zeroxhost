'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, Globe } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500/30">
      <Navbar />
      
      <div className="relative z-10">
        <PageHeader 
          title="Contact ZeroXHost" 
          subtitle="Have questions about ZeroXHost services? Our team is here to help you 24/7. Reach out via Discord or email."
        />

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 flex flex-col items-center text-center group hover:border-blue-500/30 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <MessageSquare className="text-blue-500 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Discord</h3>
                <p className="text-gray-500 font-medium mb-8 italic">Fastest response time for support and sales.</p>
                <a href="https://discord.gg/56VcDMZbrj" target="_blank" className="text-blue-500 font-black uppercase tracking-widest text-xs hover:text-blue-400">Join Server</a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 flex flex-col items-center text-center group hover:border-blue-500/30 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Mail className="text-blue-500 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Email</h3>
                <p className="text-gray-500 font-medium mb-8 italic">For formal inquiries and business proposals.</p>
                <a href="mailto:akshitkanswal111@gmail.com" className="text-blue-500 font-black uppercase tracking-widest text-xs hover:text-blue-400">Send Email</a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 flex flex-col items-center text-center group hover:border-blue-500/30 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Globe className="text-blue-500 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Status</h3>
                <p className="text-gray-500 font-medium mb-8 italic">Check our real-time network status.</p>
                <a href="https://status.zeroxhost.space/" target="_blank" className="text-blue-500 font-black uppercase tracking-widest text-xs hover:text-blue-400">View Status</a>
              </motion.div>
            </div>

            {/* Removed Contact Form */}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
