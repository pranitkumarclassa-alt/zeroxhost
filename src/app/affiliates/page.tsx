'use client';

import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Footer from '@/components/Footer';
import { Percent, DollarSign, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AffiliatesPage() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500/30 bg-transparent">
      <Navbar />
      
      <div className="relative z-10">
        <SubpageHero 
          category="Earn with Us"
          title="Affiliate"
          subtitle="Program"
          description="Join the ZeroXHost affiliate program and earn up to 20% recurring commission for every customer you refer."
          icon={Percent}
        />
        
        <section className="py-24 px-6 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 text-center">
                <DollarSign size={40} className="text-blue-500 mx-auto mb-8" />
                <h3 className="text-2xl font-black text-white mb-4">High Commission</h3>
                <p className="text-gray-500 font-bold text-sm">Earn 15-20% recurring commission on all VPS and Game hosting plans.</p>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 text-center">
                <TrendingUp size={40} className="text-blue-500 mx-auto mb-8" />
                <h3 className="text-2xl font-black text-white mb-4">Real-time Tracking</h3>
                <p className="text-gray-500 font-bold text-sm">Monitor your clicks, conversions, and payouts in real-time through our portal.</p>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 text-center">
                <ShieldCheck size={40} className="text-blue-500 mx-auto mb-8" />
                <h3 className="text-2xl font-black text-white mb-4">Reliable Payouts</h3>
                <p className="text-gray-500 font-bold text-sm">Get paid monthly via PayPal, UPI, or Bank Transfer. Minimum payout is just $10.</p>
              </div>
            </div>

            <div className="bg-blue-600/10 border border-blue-500/20 p-12 md:p-16 rounded-[3rem] text-center backdrop-blur-3xl">
              <h2 className="text-4xl font-black text-white mb-8">Ready to start earning?</h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
                Join our affiliate community today and start monetizing your traffic. Sign up takes less than 2 minutes.
              </p>
              <button className="px-12 py-6 rounded-2xl bg-blue-600 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-700 transition-all hover:scale-[1.02]">
                Create Affiliate Account
              </button>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </main>
  );
}
