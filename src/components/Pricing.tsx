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
  { id: 'games', name: 'Games', icon: Gamepad2 },
  { id: 'web', name: 'Web', icon: Globe },
  { id: 'vps', name: 'VPS', icon: Server },
  { id: 'vds', name: 'VDS', icon: Layers },
  { id: 'bots', name: 'Bots', icon: Bot },
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

  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: true });
      if (!error && data) setDbProducts(data);
    } catch (err) {
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const getTiers = () => {
    const categoryProducts = dbProducts.filter(p => p.category === activeCategory);
    
    // If we have products in DB for this category, return them
    if (categoryProducts.length > 0) {
      return categoryProducts.map(p => ({
        name: p.name,
        desc: p.description,
        price: p.price,
        featured: p.featured,
        badge: p.badge,
        game_icon: p.game_icon,
        ...p.specs
      }));
    }

    // Otherwise use fallback static data
    switch (activeCategory) {
      case 'games': return fallbackGameTiers;
      case 'web': return fallbackWebTiers;
      case 'vps': return fallbackVpsTiers;
      case 'vds': return fallbackVdsTiers;
      case 'bots': return fallbackBotTiers;
      default: return [];
    }
  };

  return (
    <section id="pricing" className="py-32 px-6 relative overflow-hidden bg-transparent">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_20px_rgba(37,99,235,0.1)]"
          >
            Starting plans
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter font-montserrat"
          >
            Pick your <span className="text-blue-500">entry plan</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto font-medium text-lg"
          >
            Real lowest prices from our catalogs — Minecraft Starter, Basic cloud VPS, and Discord Mini bot hosting. Scale up anytime.
          </motion.p>
        </div>

        {/* Categories Tabs - Halix Style */}
        {!hideTabs && (
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {mainCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.25em] transition-all ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] scale-105'
                    : 'bg-white/[0.03] text-gray-500 border border-white/5 hover:bg-white/5 hover:text-white'
                }`}
              >
                <cat.icon size={16} />
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {!hideTabs && activeCategory === 'games' && (
          <div className="flex flex-wrap justify-center gap-2 mb-16 px-4">
            {gamesList.map((game) => (
              <button
                key={game.name}
                onClick={() => setActiveGame(game.name)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                  activeGame === game.name
                    ? 'bg-blue-600/10 border-blue-500/50 text-blue-400'
                    : 'bg-white/[0.02] border-white/5 text-gray-500 hover:text-gray-300'
                }`}
              >
                <game.icon size={14} />
                {game.name}
              </button>
            ))}
          </div>
        )}

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[400px]">
          {loading ? (
            <div className="col-span-full flex items-center justify-center">
              <Loader2 className="animate-spin text-blue-500" size={48} />
            </div>
          ) : getTiers().length === 0 ? (
            <div className="col-span-full text-center p-20 bg-white/[0.02] backdrop-blur-3xl rounded-[3rem] border border-white/5">
              <h3 className="text-2xl font-black text-white mb-2">No plans available yet</h3>
              <p className="text-gray-500 font-medium">We are currently updating our offerings for this category.</p>
            </div>
          ) : (
            getTiers().map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`relative p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] flex flex-col border transition-all duration-500 group overflow-hidden ${
                  tier.featured 
                    ? 'bg-gradient-to-br from-blue-600/20 to-blue-600/5 border-blue-500/50 shadow-[0_0_80px_rgba(37,99,235,0.25)] backdrop-blur-3xl' 
                    : 'bg-white/[0.02] backdrop-blur-3xl border-white/10 hover:border-blue-500/50 hover:bg-white/[0.04] hover:shadow-[0_0_50px_rgba(37,99,235,0.15)]'
                }`}
              >
                {/* Background Glow */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 blur-[60px] rounded-full transition-all duration-700 ${
                  tier.featured ? 'bg-blue-500/30' : 'bg-blue-500/5 opacity-0 group-hover:opacity-100 group-hover:scale-125'
                }`} />

                {tier.badge && (
                  <div className="absolute top-6 right-8 px-4 py-1.5 rounded-full bg-blue-600 text-white text-[9px] font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(37,99,235,0.5)] z-10 animate-pulse">
                    {tier.badge}
                  </div>
                )}

                <div className="mb-8 text-left relative z-10">
                  <h3 className="text-gray-400 font-black uppercase tracking-[0.2em] text-[9px] mb-2 font-jakarta">{tier.desc}</h3>
                  <h4 className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors drop-shadow-md font-montserrat">{tier.name}</h4>
                </div>

                <div className="flex flex-col gap-2 mb-8 relative z-10">
                  <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">FROM</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-black text-white group-hover:text-blue-400 transition-all duration-300 drop-shadow-lg group-hover:scale-105 origin-left">
                      {formatPrice(tier.price)}
                    </span>
                    <span className="text-gray-500 font-black text-xs uppercase tracking-widest">/month</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10 flex-grow text-left relative z-10">
                  {Object.entries(tier).map(([key, value]) => {
                    if (['name', 'desc', 'price', 'featured', 'badge', 'game_icon'].includes(key)) return null;
                    return (
                      <div key={key} className="flex items-center gap-4 group/item">
                        <div className="w-6 h-6 rounded-xl bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-all border border-blue-500/10 group-hover/item:scale-110">
                          <Check className="text-blue-500 w-3.5 h-3.5" />
                        </div>
                        <span className="text-gray-300 font-bold text-[14px] drop-shadow-sm group-hover/item:text-white transition-colors">{String(value)}</span>
                      </div>
                    );
                  })}
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-5 h-5 rounded-full bg-blue-600/10 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <Check className="text-blue-500 w-3 h-3" />
                    </div>
                    <span className="text-gray-400 font-bold text-[13px] group-hover/item:text-gray-300 transition-colors">DDoS Protection</span>
                  </div>
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-5 h-5 rounded-full bg-blue-600/10 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <Check className="text-blue-500 w-3 h-3" />
                    </div>
                    <span className="text-gray-400 font-bold text-[13px] group-hover/item:text-gray-300 transition-colors">Delhi, India Node</span>
                  </div>
                </div>

                <Link
                  href="https://discord.gg/56VcDMZbrj"
                  target="_blank"
                  className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] text-center transition-all duration-300 relative z-10 ${
                    tier.featured
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98]'
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-blue-500/50 hover:scale-[1.02] active:scale-[0.98]'
                  }`}
                >
                  Buy Now
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
