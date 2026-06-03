'use client';

import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Footer from '@/components/Footer';
import { BookOpen, Search, ArrowRight, Server, Shield, Cpu, Gamepad2, Globe, Bot, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { kbArticles, kbCategories } from '@/lib/knowledgebase';
import { useState, useMemo } from 'react';

export default function KnowledgeBasePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredArticles = useMemo(() => {
    return kbArticles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = !activeCategory || article.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const categoriesWithIcons = kbCategories.map(cat => {
    let icon = Server;
    if (cat.name === 'Security & DDoS') icon = Shield;
    if (cat.name === 'Game Server Guides') icon = Gamepad2;
    if (cat.name === 'VPS/VDS Management') icon = Cpu;
    if (cat.name === 'Web Hosting') icon = Globe;
    if (cat.name === 'Discord Bot Hosting') icon = Bot;
    
    return {
      ...cat,
      icon,
      count: kbArticles.filter(a => a.category === cat.name).length
    };
  });

  const popularArticles = kbArticles.slice(0, 6);

  return (
    <main className="relative min-h-screen selection:bg-blue-500/30 bg-transparent">
      <Navbar />
      
      <div className="relative z-10">
        <SubpageHero 
          category="Support Center"
          title="Nexus Knowledge"
          subtitle="Base"
          description="Access over 100+ tutorials and guides to help you manage your hosting environment effectively."
          icon={BookOpen}
        />
        
        <section className="py-24 px-6 bg-transparent">
          <div className="max-w-7xl mx-auto">
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-24">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative flex items-center bg-white/[0.03] border border-white/10 rounded-2xl p-2 backdrop-blur-3xl focus-within:border-blue-500/50 transition-all">
                  <div className="p-4 text-gray-500">
                    <Search size={24} />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search for tutorials, guides, or keywords..." 
                    className="w-full bg-transparent border-none outline-none text-white font-bold placeholder:text-gray-600 px-2"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="px-4 text-gray-500 hover:text-white transition-colors text-xs font-bold"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  !activeCategory 
                  ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                  : 'bg-white/5 text-gray-500 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                All Categories
              </button>
              {kbCategories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeCategory === cat.name 
                    ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                    : 'bg-white/5 text-gray-500 hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Results Display */}
            <AnimatePresence mode="wait">
              {searchQuery || activeCategory ? (
                <motion.div
                  key="search-results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
                >
                  {filteredArticles.length > 0 ? (
                    filteredArticles.map((article, i) => (
                      <Link 
                        key={article.slug} 
                        href={`/knowledgebase/${article.slug}`}
                        className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all flex flex-col h-full"
                      >
                        <div className="flex items-center justify-between mb-8">
                          <span className="px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[8px] font-black uppercase tracking-widest">
                            {article.category}
                          </span>
                          <ArrowRight size={20} className="text-gray-700 group-hover:text-blue-500 group-hover:translate-x-2 transition-all" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-500 transition-colors">{article.title}</h3>
                        <p className="text-gray-500 text-sm font-bold leading-relaxed mb-8 flex-1">{article.excerpt}</p>
                        <div className="flex flex-wrap gap-2">
                          {article.topics.slice(0, 3).map(topic => (
                            <span key={topic} className="text-[9px] font-black text-gray-700 uppercase tracking-widest">#{topic}</span>
                          ))}
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="col-span-full py-24 text-center">
                      <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-8 text-gray-500">
                        <Search size={32} />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-4">No tutorials found</h3>
                      <p className="text-gray-500 font-bold">Try adjusting your search or category filters.</p>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="categories-grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Categories Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {categoriesWithIcons.map((cat, i) => (
                      <motion.div
                        key={cat.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <button 
                          onClick={() => setActiveCategory(cat.name)}
                          className="w-full text-left group block p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all h-full relative overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-blue-500/10 transition-colors">
                            <cat.icon size={120} />
                          </div>
                          <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                              <cat.icon size={28} className="text-blue-500" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4">{cat.name}</h3>
                            <p className="text-gray-500 text-sm font-bold leading-relaxed mb-8">{cat.desc}</p>
                            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                              <span className="text-blue-500">{cat.count} Articles</span>
                              <span className="text-gray-700 group-hover:text-white flex items-center gap-2 transition-colors">
                                Browse Category <ArrowRight size={14} />
                              </span>
                            </div>
                          </div>
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  {/* Popular Articles List */}
                  <div className="bg-white/[0.02] border border-white/5 p-12 md:p-16 rounded-[3rem] backdrop-blur-3xl">
                    <h2 className="text-3xl font-black text-white mb-12 flex items-center gap-4">
                      <Zap className="text-blue-500" />
                      Popular Tutorials
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                      {popularArticles.map((article, i) => (
                        <Link key={i} href={`/knowledgebase/${article.slug}`} className="flex items-center justify-between group py-4 border-b border-white/5 last:border-0">
                          <span className="text-gray-400 font-bold group-hover:text-white transition-colors">{article.title}</span>
                          <ArrowRight size={18} className="text-gray-700 group-hover:text-blue-500 group-hover:translate-x-2 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
        
        <Footer />
      </div>
    </main>
  );
}
