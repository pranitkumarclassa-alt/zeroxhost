'use client';

import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Footer from '@/components/Footer';
import { Book, Search, Hash } from 'lucide-react';
import { motion } from 'framer-motion';
import { glossaryItems } from '@/lib/glossary';
import { useState } from 'react';

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = glossaryItems.filter(item => 
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchQuery.toLowerCase())
  ).sort((a, b) => a.term.localeCompare(b.term));

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <main className="relative min-h-screen selection:bg-blue-500/30 bg-transparent">
      <Navbar />
      
      <div className="relative z-10">
        <SubpageHero 
          category="Resources"
          title="Hosting"
          subtitle="Glossary"
          description="A comprehensive guide to web hosting, VPS, and gaming terminology. Understand the tech behind your infrastructure."
          icon={Book}
        />
        
        <section className="py-24 px-6 bg-transparent">
          <div className="max-w-7xl mx-auto">
            {/* Search and Navigation */}
            <div className="flex flex-col lg:flex-row gap-12 mb-24">
              <div className="flex-1">
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative flex items-center bg-white/[0.03] border border-white/10 rounded-2xl p-2 backdrop-blur-3xl focus-within:border-blue-500/50 transition-all">
                    <div className="p-4 text-gray-500">
                      <Search size={24} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Search for a term (e.g. VPS, KVM, NVMe)..." 
                      className="w-full bg-transparent border-none outline-none text-white font-bold placeholder:text-gray-600 px-2"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center items-center">
                {alphabet.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => {
                      const element = document.getElementById(`letter-${letter}`);
                      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black text-gray-500 hover:bg-blue-600 hover:text-white border border-white/5 transition-all"
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>

            {/* Glossary Content */}
            <div className="space-y-24">
              {alphabet.map((letter) => {
                const itemsForLetter = filteredItems.filter(item => item.term.toUpperCase().startsWith(letter));
                if (itemsForLetter.length === 0) return null;

                return (
                  <div key={letter} id={`letter-${letter}`} className="relative">
                    <div className="flex items-center gap-8 mb-12">
                      <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-3xl font-black text-blue-500">
                        {letter}
                      </div>
                      <div className="h-px flex-1 bg-white/5" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {itemsForLetter.map((item, i) => (
                        <motion.div
                          key={item.slug}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all relative overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-blue-500/10 transition-colors">
                            <Hash size={80} />
                          </div>
                          <div className="relative z-10">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[8px] font-black uppercase tracking-widest mb-6">
                              {item.category}
                            </span>
                            <h3 className="text-2xl font-black text-white mb-6 group-hover:text-blue-500 transition-colors">
                              {item.term}
                            </h3>
                            <p className="text-gray-500 text-sm font-bold leading-relaxed">
                              {item.definition}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-24">
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-8 text-gray-500">
                  <Search size={32} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">No terms found</h3>
                <p className="text-gray-500 font-bold">Try searching for something else or browse the full list.</p>
              </div>
            )}
          </div>
        </section>
        
        <Footer />
      </div>
    </main>
  );
}
