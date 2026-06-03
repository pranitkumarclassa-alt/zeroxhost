'use client';

import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Footer from '@/components/Footer';
import { Briefcase, Users, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CareersPage() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500/30 bg-transparent">
      <Navbar />
      
      <div className="relative z-10">
        <SubpageHero 
          category="Join Our Team"
          title="Build the Future"
          subtitle="of Hosting"
          description="Help us build the most reliable and performance-oriented hosting infrastructure in India."
          icon={Briefcase}
        />
        
        <section className="py-24 px-6 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl font-black text-white mb-8">Why work at ZeroXHost?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                  <Zap size={32} className="text-blue-500 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">Fast-Paced Environment</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Work with the latest hardware and networking tech in a high-growth startup environment.</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                  <Users size={32} className="text-blue-500 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">Remote-First Culture</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">We value results over office hours. Work from anywhere in the world with a flexible schedule.</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                  <Heart size={32} className="text-blue-500 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">Competitive Benefits</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Competitive salary, performance bonuses, and free hosting for all your personal projects.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-12 md:p-16 rounded-[3rem] backdrop-blur-3xl text-center">
              <h2 className="text-3xl font-black text-white mb-6">No Open Positions Currently</h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
                We are always looking for talented individuals. If you are passionate about hosting, networking, or software engineering, send your resume to careers@zeroxhost.space
              </p>
              <button className="px-12 py-5 rounded-xl bg-blue-600 text-white font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all">
                Send Your Resume
              </button>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </main>
  );
}
