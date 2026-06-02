'use client';

import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import ResellerBenefits from '@/components/ResellerBenefits';
import Footer from '@/components/Footer';
import { resellerPolicy } from '@/lib/siteContent';
import { Users } from 'lucide-react';

export default function ResellerPage() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500/30">
      <Navbar />
      
      <div className="relative z-10">
        <SubpageHero 
          category="Reseller Program"
          title="Start Your Own"
          subtitle="Hosting Business"
          description="Become a partner and leverage our enterprise-grade infrastructure to launch your own hosting brand with zero upfront hardware costs."
          icon={Users}
        />
        
        <ResellerBenefits />

        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-blue-500 uppercase tracking-[0.3em] text-xs font-black mb-4">Reseller Hosting Policy</p>
              <h2 className="text-5xl font-black text-white">Reseller Hosting Policy</h2>
              <p className="text-gray-400 mt-4 max-w-3xl mx-auto leading-relaxed">
                This page explains the responsibilities, limitations, billing, and acceptable use terms that apply to ZeroXHost reseller accounts.
              </p>
            </div>

            <div className="grid gap-6">
              {resellerPolicy.map((item, index) => (
                <div key={item.title} className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all">
                  <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </main>
  );
}
