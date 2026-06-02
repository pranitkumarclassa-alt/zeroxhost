'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Gamepad2, Server, Bot, Cpu, HardDrive, Shield, MapPin, Globe, Layers, MessageSquare, Loader2, Activity } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useCurrency } from '@/lib/CurrencyContext';

// Fallback data if DB is empty
const fallbackGameTiers = [
  { name: 'Starter', desc: 'Entry-level gaming', price: 50, ram: '2GB DDR4 RAM', cpu: '1 vCore CPU', ssd: '4GB NVMe SSD' },
  { name: 'Performance', desc: 'Smooth gameplay', price: 100, ram: '4GB DDR4 RAM', cpu: '150% CPU', ssd: '6GB NVMe SSD' },
  { name: 'Ultra Boost', desc: 'Power players', price: 200, ram: '6GB DDR4 RAM', cpu: '200% CPU', ssd: '20GB NVMe SSD', featured: true, badge: 'MOST POPULAR' },
  { name: 'Pro Max', desc: 'For communities', price: 350, ram: '8GB DDR4 RAM', cpu: '250% CPU', ssd: '30GB NVMe SSD' },
  { name: 'Enterprise', desc: 'Large servers', price: 500, ram: '12GB DDR4 RAM', cpu: '300% CPU', ssd: '40GB NVMe SSD' },
  { name: 'Titan', desc: 'Heavy modpacks', price: 800, ram: '16GB DDR4 RAM', cpu: '350% CPU', ssd: '50GB NVMe SSD' },
  { name: 'VIP', desc: 'Networks & hubs', price: 1200, ram: '32GB DDR4 RAM', cpu: '400% CPU', ssd: '60GB NVMe SSD' },
  { name: 'GOD', desc: 'Ultimate tier', price: 2000, ram: '64GB DDR4 RAM', cpu: '500% CPU', ssd: '100GB NVMe SSD' },
];

const fallbackVpsTiers = [
  { name: 'Basic', desc: 'Small apps & testing', price: 150, ram: '2GB RAM', cpu: '1 vCore', ssd: '30GB SSD', bandwidth: '1TB Bandwidth' },
  { name: 'Standard', desc: 'Websites & moderate workloads', price: 250, ram: '4GB RAM', cpu: '2 vCore', ssd: '30GB SSD', bandwidth: '2TB Bandwidth' },
  { name: 'Advanced', desc: 'Growing projects', price: 400, ram: '8GB RAM', cpu: '3 vCore', ssd: '50GB SSD', featured: true, badge: 'MOST POPULAR' },
  { name: 'Pro', desc: 'Production workloads', price: 600, ram: '16GB RAM', cpu: '4 vCore', ssd: '100GB SSD' },
  { name: 'Ultra', desc: 'Enterprise power', price: 900, ram: '32GB RAM', cpu: '8 vCore', ssd: '150GB SSD' },
  { name: 'GOD', desc: 'Extreme workloads', price: 2000, ram: '64GB RAM', cpu: '12 vCore', ssd: '200GB SSD' },
];

const fallbackWebTiers = [
  { name: 'Starter Web', desc: 'Small sites', price: 100, ram: '4GB RAM', ssd: '30GB Disk', ssl: 'Free SSL', panel: 'cPanel', bandwidth: 'Unmetered' },
  { name: 'Pro Web', desc: 'Growing sites', price: 200, ram: '8GB RAM', ssd: '50GB Disk', ssl: 'Free SSL', panel: 'cPanel', bandwidth: 'Unmetered', featured: true, badge: 'MOST POPULAR' },
];

const fallbackVdsTiers = [
  { name: 'Standard VDS', desc: 'Dedicated resources', price: 1500, ram: '8GB DDR4', cpu: '2 Dedicated Cores', ssd: '100GB NVMe', bandwidth: '10TB Bandwidth' },
  { name: 'Pro VDS', desc: 'Enterprise power', price: 3000, ram: '16GB DDR4', cpu: '4 Dedicated Cores', ssd: '200GB NVMe', bandwidth: '20TB Bandwidth', featured: true, badge: 'BEST VALUE' },
  { name: 'Ultra VDS', desc: 'Heavy workloads', price: 5000, ram: '32GB DDR4', cpu: '8 Dedicated Cores', ssd: '400GB NVMe', bandwidth: 'Unmetered' },
];

const fallbackBotTiers = [
  { name: 'Mini Bot', desc: 'Small discord bots', price: 99, ram: '1GB RAM', cpu: '50% CPU', ssd: '5GB NVMe', backup: 'Daily Backups' },
  { name: 'Standard Bot', desc: 'Production bots', price: 199, ram: '2GB RAM', cpu: '100% CPU', ssd: '10GB NVMe', backup: 'Daily Backups', featured: true, badge: 'MOST POPULAR' },
  { name: 'Advanced Bot', desc: 'Bot networks', price: 399, ram: '4GB RAM', cpu: '200% CPU', ssd: '20GB NVMe', backup: 'Daily Backups' },
];

const gamesList = [
  { name: 'Minecraft', icon: Gamepad2 },
  { name: 'Ark: Survival', icon: Zap },
  { name: 'TF2', icon: Shield },
  { name: 'Insurgency', icon: Server },
  { name: 'CS:GO', icon: Zap },
  { name: 'Mumble', icon: MessageSquare },
  { name: 'GMod', icon: Layers },
  { name: 'Hytale', icon: Globe },
  { name: 'Among Us', icon: Bot },
  { name: 'GTA (FiveM)', icon: Activity },
];

const mainCategories = [
  { 
    id: 'games', 
    name: 'Games', 
    icon: Gamepad2,
    description: 'DOMINATE THE COMPETITION WITH OUR HIGH-TICK RATE GAME SERVERS. POWERED BY RYZEN 9 & NVME GEN4 HARDWARE FOR ZERO-LAG PERFORMANCE.',
    banner: '🎮 MINECRAFT, ARK, CS:GO, GTA, AMONG US & MORE — ALL ON PREMIUM HARDWARE.'
  },
  { 
    id: 'web', 
    name: 'Web', 
    icon: Globe,
    description: 'LIGHTNING FAST WEB HOSTING SOLUTIONS POWERED BY LITESPEED & NVME SSD. PERFECT FOR PORTFOLIOS, BLOGS & BUSINESS WEBSITES.',
    banner: '🌐 FAST, SECURE SHARED WEB HOSTING WITH CPANEL AND FREE SSL.'
  },
  { 
    id: 'vps', 
    name: 'VPS', 
    icon: Server,
    description: 'ENTERPRISE-GRADE VIRTUAL PRIVATE SERVERS WITH DEDICATED RESOURCES, ROOT ACCESS & ULTRA-LOW LATENCY INDIA NODES.',
    banner: '⚡ KVM-VIRTUALIZED VPS — INTEL E5 V4 & INTEL PLATINUM 8269CY IN DELHI.'
  },
  { 
    id: 'vds', 
    name: 'VDS', 
    icon: Layers,
    description: 'DEDICATED SERVER PERFORMANCE WITH VPS FLEXIBILITY & 100% ISOLATED RESOURCES FOR MISSION-CRITICAL APPLICATIONS.',
    banner: '💎 BARE-METAL PERFORMANCE WITH DEDICATED CPU CORES AND RAM.'
  },
  { 
    id: 'bots', 
    name: 'Bots', 
    icon: Bot,
    description: '24/7 UPTIME FOR YOUR DISCORD, TELEGRAM & WHATSAPP BOTS. EASY MANAGEMENT PANEL & INSTANT PROVISIONING.',
    banner: '🤖 RUN DISCORD, TELEGRAM & WHATSAPP BOTS 24/7 WITH AUTO-RESTART.'
  },
];

interface PricingProps {
  initialCategory?: string;
  hideTabs?: boolean;
}

export default function Pricing({ initialCategory = 'games', hideTabs = false }: PricingProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeGame, setActiveGame] = useState('Minecraft');
  const [dbProducts, setDbProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { formatPrice } = useCurrency();

  const currentCategoryInfo = mainCategories.find(c => c.id === activeCategory) || mainCategories[0];

  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('display_order', { ascending: true })
        .order('created_at', { ascending: false });
      if (!error && data) setDbProducts(data);
    } catch (err) {
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const getTiers = () => {
    const categoryProducts = dbProducts.filter(p => p.category === activeCategory);
    
    // If we have products in DB for this category, return them exclusively
    if (categoryProducts.length > 0) {
      return categoryProducts.map(p => ({
        id: p.id,
        name: p.name,
        desc: p.description,
        price: p.price,
        original_price: p.original_price,
        featured: p.featured,
        badge: p.badge,
        game_icon: p.game_icon,
        ...p.specs
      }));
    }

    // Only fallback if there is absolutely no data in the database for this category
    if (loading) return []; // Don't show fallback while loading from DB

    switch (activeCategory) {
      case 'games': return fallbackGameTiers;
      case 'vps': return fallbackVpsTiers;
      case 'web': return fallbackWebTiers;
      case 'vds': return fallbackVdsTiers;
      case 'bots': return fallbackBotTiers;
      default: return [];
    }
  };

  return (
    <section id="pricing" className="py-32 px-6 relative overflow-hidden bg-transparent">
      {/* Background Decorative Elements - Halix Style */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Banner Section - Halix Style Prominence */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative group overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-blue-600/20 border border-blue-500/30 p-1 backdrop-blur-3xl shadow-[0_0_50px_rgba(37,99,235,0.15)]">
            <div className="bg-[#0a0a0a]/90 rounded-[1.9rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-indigo-600/5 pointer-events-none" />
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.5)] group-hover:scale-110 transition-transform duration-500">
                  <Zap size={32} className="text-white fill-white" />
                </div>
                <div>
                  <h4 className="text-white font-black text-lg uppercase tracking-[0.15em] mb-1">{currentCategoryInfo.banner}</h4>
                  <div className="flex items-center gap-3">
                    <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping" />
                    <p className="text-blue-400 text-xs font-black uppercase tracking-widest">Limited Slots Available • India Node Live</p>
                  </div>
                </div>
              </div>
              <Link 
                href="https://discord.gg/56VcDMZbrj" 
                target="_blank"
                className="px-10 py-4 rounded-2xl bg-blue-600 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-700 hover:scale-105 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] relative z-10 whitespace-nowrap"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Heading Section - Halix Style */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[11px] font-black uppercase tracking-[0.3em] mb-8 shadow-[0_0_30px_rgba(37,99,235,0.15)] backdrop-blur-xl"
          >
            <Server size={14} />
            {activeCategory} Infrastructure
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-[90px] font-black text-white mb-8 tracking-tighter leading-[0.9] font-montserrat"
          >
            Power your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">Digital World</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-4xl mx-auto font-black text-sm md:text-base leading-relaxed uppercase tracking-[0.1em] mb-12"
          >
            {currentCategoryInfo.description}
          </motion.p>
        </div>

        {/* Categories Tabs - Exactly like Halix centered pills */}
        {!hideTabs && (
          <div className="flex flex-wrap justify-center gap-3 mb-20">
            {mainCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-4 px-10 py-5 rounded-[2rem] font-black text-[12px] uppercase tracking-[0.25em] transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white border-blue-400 shadow-[0_0_50px_rgba(37,99,235,0.4)] scale-105 z-10'
                    : 'bg-white/[0.03] text-gray-500 border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20'
                }`}
              >
                <cat.icon size={18} className={activeCategory === cat.id ? 'text-white' : 'text-blue-500'} />
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* Pricing Cards - Halix Style Vertical Power Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {loading ? (
            <div className="col-span-full py-40 flex flex-col items-center justify-center">
              <Loader2 className="animate-spin text-blue-600 mb-6" size={80} />
              <p className="text-gray-500 font-black uppercase tracking-[0.5em] text-[10px]">Synchronizing Nodes...</p>
            </div>
          ) : (
            getTiers().map((tier, index) => (
              <motion.div
                key={tier.id || tier.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col p-12 rounded-[4rem] border transition-all duration-700 group overflow-hidden ${
                  tier.featured 
                    ? 'bg-gradient-to-br from-blue-600/30 via-[#0a0a0a]/40 to-[#0a0a0a]/40 border-blue-500 shadow-[0_40px_120px_rgba(37,99,235,0.3)] scale-105 z-20' 
                    : 'bg-[#0a0a0a]/40 backdrop-blur-xl border-white/10 hover:border-blue-500/50 hover:bg-[#0a0a0a]/60'
                }`}
              >
                {/* Internal Card Glow */}
                <div className={`absolute -top-24 -right-24 w-64 h-64 blur-[100px] rounded-full transition-all duration-1000 ${
                  tier.featured ? 'bg-blue-600/40' : 'bg-blue-600/5 group-hover:bg-blue-600/20'
                }`} />

                {tier.badge && (
                  <div className="absolute top-8 right-10 px-6 py-2 rounded-full bg-blue-600 text-white text-[9px] font-black uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(37,99,235,0.5)] z-30">
                    {tier.badge}
                  </div>
                )}

                <div className="relative z-10 mb-12">
                  <div className="w-20 h-20 rounded-3xl bg-blue-600/10 flex items-center justify-center mb-8 border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-600/20 transition-all duration-500">
                    {(() => {
                      const Icon = currentCategoryInfo.icon || Package;
                      return <Icon size={40} className="text-blue-500" />;
                    })()}
                  </div>
                  <h3 className="text-gray-500 font-black uppercase tracking-[0.3em] text-[11px] mb-2">{tier.desc}</h3>
                  <h4 className="text-5xl font-black text-white group-hover:text-blue-400 transition-colors tracking-tighter">{tier.name}</h4>
                </div>

                <div className="relative z-10 mb-12">
                  <div className="flex flex-col">
                    {tier.original_price && (
                      <span className="text-lg font-black text-gray-600 line-through mb-1 opacity-60">
                        {formatPrice(tier.original_price)}
                      </span>
                    )}
                    <div className="flex items-baseline gap-2">
                      <span className="text-8xl font-black text-white group-hover:text-blue-400 transition-all duration-500 tracking-tighter">
                        {formatPrice(tier.price)}
                      </span>
                      <span className="text-gray-500 font-black text-sm uppercase tracking-widest">/mo</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 space-y-6 flex-grow mb-12">
                  {Object.entries(tier).map(([key, value]) => {
                    if (['id', 'name', 'desc', 'price', 'featured', 'badge', 'game_icon', 'original_price', 'category', 'display_order', 'created_at'].includes(key)) return null;
                    return (
                      <div key={key} className="flex items-center gap-5 group/item">
                        <div className="w-8 h-8 rounded-2xl bg-blue-600/10 flex items-center justify-center border border-blue-500/20 group-hover/item:bg-blue-600 group-hover/item:border-blue-400 transition-all duration-300">
                          <Check className="text-blue-500 group-hover/item:text-white w-4 h-4" />
                        </div>
                        <span className="text-gray-300 font-black text-[16px] group-hover/item:text-white transition-colors">{String(value)}</span>
                      </div>
                    );
                  })}
                  
                  {/* Default Performance Specs */}
                  <div className="pt-6 border-t border-white/5 space-y-6">
                    <div className="flex items-center gap-5">
                      <div className="w-8 h-8 rounded-2xl bg-green-500/10 flex items-center justify-center border border-green-500/20">
                        <Shield className="text-green-500 w-4 h-4" />
                      </div>
                      <span className="text-gray-400 font-black text-[13px] uppercase tracking-widest">Advanced DDoS Shield</span>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="w-8 h-8 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                        <MapPin className="text-blue-500 w-4 h-4" />
                      </div>
                      <span className="text-gray-400 font-black text-[13px] uppercase tracking-widest">India Tier-3 Node</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="https://discord.gg/56VcDMZbrj"
                  target="_blank"
                  className={`relative z-10 w-full py-6 rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] text-center transition-all duration-500 overflow-hidden ${
                    tier.featured
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-[0_20px_50px_rgba(37,99,235,0.4)] hover:scale-[1.05] active:scale-[0.98]'
                      : 'bg-white/5 text-white hover:bg-blue-600 border border-white/10 hover:border-blue-400 hover:scale-[1.05] active:scale-[0.98]'
                  }`}
                >
                  <span className="relative z-10">Configure Now</span>
                  {tier.featured && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                  )}
                </Link>
              </motion.div>
            ))
          )}
        </div>

        {/* Custom Setup Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 rounded-[3rem] bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] -z-10 rounded-full" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="text-left">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Need a custom {activeCategory === 'games' ? activeGame : activeCategory} setup?
              </h3>
              <p className="text-gray-400 font-medium text-lg max-w-2xl">
                Tell us your slot count, plugins or modpack — we'll provision it instantly. Our team is ready to build your dream infrastructure.
              </p>
            </div>
            <Link
              href="https://discord.gg/56VcDMZbrj"
              target="_blank"
              className="px-10 py-5 rounded-2xl bg-blue-600 text-white font-black text-lg transition-all hover:bg-blue-700 hover:scale-[1.05] shadow-[0_0_40px_rgba(37,99,235,0.4)] flex items-center gap-3 whitespace-nowrap"
            >
              Talk to us on Discord <MessageSquare size={24} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
