'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Footer from '@/components/Footer';
import HexiumFeatures from '@/components/HexiumFeatures';
import { Handshake, ExternalLink, Users, MessageSquare, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { getPartners } from '../actions';

export default function PartnershipPage() {
  const [partners, setPartners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      const result = await getPartners();
      if (result.success) {
        setPartners(result.data || []);
      }
      setLoading(false);
    };
    fetchPartners();
  }, []);

  return (
    <main className="relative min-h-screen selection:bg-blue-500/30 bg-transparent">
      <Navbar />
      
      <div className="relative z-10">
        <SubpageHero 
          category="Strategic Partnerships"
          title="Growing Together"
          subtitle="Partner with ZEROX"
          description="We collaborate with influencers, developers, and communities to build the next generation of digital infrastructure."
          icon={Handshake}
        />
        
        <section className="py-24 px-6 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-12"
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md"
                  >
                    Strategic Partnership
                  </motion.div>
                  <h2 className="text-6xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter font-montserrat">
                    Let's build <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">something big.</span>
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {[
                    { title: 'Custom Solutions', desc: 'Get tailored infrastructure built specifically for your community or project needs.' },
                    { title: 'Revenue Sharing', desc: 'Earn competitive commissions for every referral and long-term customer you bring.' },
                    { title: 'Brand Alignment', desc: 'Associate your project with India\'s premium high-performance hosting provider.' },
                    { title: 'Early Access', desc: 'Be the first to test our latest hardware nodes and experimental features.' }
                  ].map((item, i) => (                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-6 group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all">
                        <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,1)]" />
                      </div>
                      <div>
                        <h4 className="text-white font-black text-lg mb-1 uppercase tracking-tight group-hover:text-blue-400 transition-colors">{item.title}</h4>
                        <p className="text-gray-500 font-medium leading-relaxed italic text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative p-12 rounded-[3.5rem] bg-white/[0.02] backdrop-blur-3xl border border-white/10 overflow-hidden group shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 space-y-8 text-center">
                  <div className="w-20 h-20 rounded-3xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-8">
                    <MessageSquare className="text-blue-500 w-10 h-10" />
                  </div>
                  <h3 className="text-4xl font-black text-white tracking-tighter">Ready to partner?</h3>
                  <p className="text-gray-400 font-medium text-lg leading-relaxed italic">
                    We've moved our partnership applications to Discord for faster communication and better coordination. Join our server and open a ticket under the "Partnership" category.
                  </p>
                  <div className="pt-4">
                    <a 
                      href="https://discord.gg/56VcDMZbrj" 
                      target="_blank"
                      className="inline-flex items-center gap-4 px-12 py-5 rounded-2xl bg-blue-600 text-white font-black text-xs uppercase tracking-[0.25em] hover:bg-blue-700 transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:scale-[1.02]"
                    >
                      Contact on Discord <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partners Display Section */}
        <section className="py-24 px-6 bg-transparent border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Our Ecosystem</span>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">Strategic <span className="text-blue-500">Partners</span></h2>
                <p className="text-gray-500 max-w-2xl mx-auto font-medium">Join our network of elite communities and developers already scaling on ZEROX infrastructure.</p>
              </motion.div>
            </div>

            {loading ? (
              <div className="flex justify-center py-20">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : partners.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner, i) => (
                  <motion.div
                    key={partner.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-16 h-16 rounded-2xl border border-white/10 overflow-hidden bg-white/5">
                        <Image
                          src={partner.logo_url}
                          alt={partner.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors">{partner.name}</h3>
                        <a 
                          href={partner.server_link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[9px] font-black text-blue-500 uppercase tracking-widest flex items-center gap-1 hover:underline"
                        >
                          Visit Server <ExternalLink size={8} />
                        </a>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed line-clamp-3">
                      {partner.description || 'No description provided.'}
                    </p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white/[0.01] rounded-[3rem] border border-dashed border-white/10">
                <Users className="mx-auto text-gray-700 mb-4" size={48} />
                <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">New partners arriving soon</p>
              </div>
            )}
          </div>
        </section>

        <HexiumFeatures />
        
        <Footer />
      </div>
    </main>
  );
}
