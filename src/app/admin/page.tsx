'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Trash2, Edit2, LogOut, Package, 
  Gamepad2, Server, Bot, Globe, Layers, 
  Save, X, Loader2, ArrowRight, ExternalLink, 
  Handshake, Zap, Calculator as CalcIcon, Settings
} from 'lucide-react';
import Image from 'next/image';
import { checkSession, logoutAction, getProducts, addProduct, updateProduct, deleteProduct, getPartners, addPartner, updatePartner, deletePartner, seedProducts, getSettings, updateSettings } from '../actions';
import { importedProducts } from '@/lib/importedData';

const categories = ['games', 'web', 'vps', 'vds', 'bots', 'deals'];

const mainCategories = [
  { id: 'games', name: 'Games', icon: Gamepad2 },
  { id: 'web', name: 'Web', icon: Globe },
  { id: 'vps', name: 'VPS', icon: Server },
  { id: 'vds', name: 'VDS', icon: Layers },
  { id: 'bots', name: 'Bots', icon: Bot },
  { id: 'deals', name: 'Deals', icon: Zap },
];

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'products' | 'deals' | 'partners' | 'calculator'>('products');
  const [products, setProducts] = useState<any[]>([]);
  const [partners, setPartners] = useState<any[]>([]);
  const [calcSettings, setCalcSettings] = useState({
    basePrice: 50,
    ramPrice: 25,
    cpuPrice: 50,
    ssdPrice: 2,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [editingPartner, setEditingPartner] = useState<any>(null);
  const router = useRouter();

  // Product Form state
  const [formData, setFormData] = useState({
    category: 'games',
    name: '',
    description: '',
    price: '',
    original_price: '',
    specs: {} as any,
    featured: false,
    badge: '',
    game_icon: '⛏️',
    display_order: '0',
  });

  // Partner Form state
  const [partnerFormData, setPartnerFormData] = useState({
    name: '',
    logo_url: '',
    server_link: '',
    description: '',
  });

  const fetchProducts = async () => {
    const result = await getProducts();
    if (result.success) setProducts(result.data || []);
    else console.error('Error fetching products:', result.error);
  };

  const fetchPartners = async () => {
    const result = await getPartners();
    if (result.success) setPartners(result.data || []);
    else console.error('Error fetching partners:', result.error);
  };

  const fetchCalcSettings = async () => {
    const result = await getSettings('calculator_prices');
    if (result.success && result.data) setCalcSettings(result.data);
  };

  const handleLogout = async () => {
    await logoutAction();
    router.push('/login');
  };

  const handleImportData = async () => {
    if (confirm('Import all products and pricing from ZeroxHost? This will add to existing data.')) {
      setLoading(true);
      const result = await seedProducts(importedProducts);
      if (result.success) {
        alert('Data imported successfully!');
        fetchProducts();
      } else {
        alert('Import failed: ' + result.error);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        const isAuth = await checkSession();
        if (!isAuth) {
          router.push('/login');
          return;
        }
        setIsAuthenticated(true);
        setLoading(false); // Show the UI shell immediately
        
        // Fetch data in the background
        setDataLoading(true);
        await Promise.all([fetchProducts(), fetchPartners(), fetchCalcSettings()]);
        setDataLoading(false);
      } catch (error) {
        console.error('Failed to initialize admin dashboard:', error);
        router.push('/login');
      }
    };
    init();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const dataToSubmit = {
        ...formData,
        specs: typeof formData.specs === 'string' ? JSON.parse(formData.specs) : formData.specs
      };

      if (editingProduct) {
        const result = await updateProduct(editingProduct.id, dataToSubmit);
        if (!result.success) alert(result.error);
      } else {
        const result = await addProduct(dataToSubmit);
        if (!result.success) alert(result.error);
      }

      setIsModalOpen(false);
      setEditingProduct(null);
      setFormData({
        category: 'games',
        name: '',
        description: '',
        price: '',
        original_price: '',
        specs: {} as any,
        featured: false,
        badge: '',
        game_icon: '⛏️',
        display_order: '0',
      });
      fetchProducts();
    } catch (err) {
      alert('Error: Invalid JSON in specs');
    } finally {
      setLoading(false);
    }
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingPartner) {
        const result = await updatePartner(editingPartner.id, partnerFormData);
        if (!result.success) alert(result.error);
      } else {
        const result = await addPartner(partnerFormData);
        if (!result.success) alert(result.error);
      }

      setIsPartnerModalOpen(false);
      setEditingPartner(null);
      setPartnerFormData({
        name: '',
        logo_url: '',
        server_link: '',
        description: '',
      });
      fetchPartners();
    } catch (err) {
      alert('Error processing partner data');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      const result = await deleteProduct(id);
      if (!result.success) alert(result.error);
      else fetchProducts();
    }
  };

  const handleDeletePartner = async (id: string) => {
    if (confirm('Are you sure you want to delete this partner?')) {
      const result = await deletePartner(id);
      if (!result.success) alert(result.error);
      else fetchPartners();
    }
  };

  const openEdit = (product: any) => {
    setEditingProduct(product);
    setFormData({
      category: product.category,
      name: product.name,
      description: product.description,
      price: product.price,
      original_price: product.original_price || '',
      specs: product.specs,
      featured: product.featured,
      badge: product.badge || '',
      game_icon: product.game_icon || '⛏️',
      display_order: String(product.display_order || '0'),
    });
    setIsModalOpen(true);
  };

  const openPartnerEdit = (partner: any) => {
    setEditingPartner(partner);
    setPartnerFormData({
      name: partner.name,
      logo_url: partner.logo_url,
      server_link: partner.server_link,
      description: partner.description || '',
    });
    setIsPartnerModalOpen(true);
  };

  if (loading || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center">
        <Loader2 className="animate-spin text-blue-600" size={48} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-white p-6 md:p-12 relative overflow-hidden selection:bg-blue-500/30">
      {/* Dynamic Background Overlays for Aesthetic Depth */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - More Aesthetic Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        >
          <div className="flex items-center gap-6">
            <div className="relative h-20 w-20 rounded-[2rem] border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.2)] bg-black/50 backdrop-blur-xl group cursor-pointer">
              <Image
                src="https://cdn.discordapp.com/icons/1504088095220568094/2bf6ee2d2f71b5f3c631ad01556207d8.webp?size=2048"
                alt="Zerox Host"
                fill
                unoptimized
                className="object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
                <span className="text-[10px] font-black text-green-500 uppercase tracking-[0.3em]">System Online</span>
              </div>
              <h1 className="text-xl font-black text-white uppercase tracking-tighter">ZEROX<span className="text-blue-500">HOST</span></h1>
              <p className="text-[8px] font-black text-gray-500 uppercase tracking-[0.4em] leading-none mt-1">Management</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 flex-wrap">
            {activeTab !== 'partners' && activeTab !== 'calculator' ? (
              <button
                onClick={() => {
                  setEditingProduct(null);
                  setFormData({
                    category: activeTab === 'deals' ? 'deals' : 'games',
                    name: '',
                    description: '',
                    price: '',
                    original_price: '',
                    specs: {} as any,
                    featured: false,
                    badge: '',
                    game_icon: '⛏️',
                    display_order: '0',
                  });
                  setIsModalOpen(true);
                }}
                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-[0.2em] transition-all hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] flex items-center gap-3 group"
              >
                <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" /> 
                New {activeTab === 'deals' ? 'Deal' : 'Deployment'}
              </button>
            ) : activeTab === 'partners' ? (
              <button
                onClick={() => {
                  setEditingPartner(null);
                  setPartnerFormData({
                    name: '',
                    logo_url: '',
                    server_link: '',
                    description: '',
                  });
                  setIsPartnerModalOpen(true);
                }}
                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-[0.2em] transition-all hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] flex items-center gap-3 group"
              >
                <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" /> Add Partner
              </button>
            ) : null}
            
            <div className="h-10 w-px bg-white/10 mx-2 hidden md:block" />

            <button
              onClick={handleImportData}
              className="px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-blue-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/50 transition-all font-black text-[10px] uppercase tracking-widest flex items-center gap-2"
              title="Import all data"
            >
              <Zap size={16} /> Sync Data
            </button>
            
            <button
              onClick={handleLogout}
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-gray-400 hover:text-white hover:bg-red-500/20 hover:border-red-500/50 transition-all group"
              title="Logout"
            >
              <LogOut size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Aesthetic Tab Switcher */}
        <div className="flex gap-2 mb-12 bg-white/[0.02] p-2 rounded-[2rem] border border-white/5 w-fit backdrop-blur-xl">
          {[
            { id: 'products', label: 'Infrastructure', icon: Server },
            { id: 'deals', label: 'Flash Deals', icon: Zap },
            { id: 'partners', label: 'Partners', icon: Handshake },
            { id: 'calculator', label: 'Economics', icon: CalcIcon }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-8 py-4 rounded-[1.4rem] font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center gap-3 ${
                activeTab === tab.id 
                  ? 'bg-blue-600 text-white shadow-[0_10px_30px_rgba(37,99,235,0.3)]' 
                  : 'text-gray-500 hover:text-white hover:bg-white/5'
              }`}
            >
              <tab.icon size={14} className={activeTab === tab.id ? 'text-white' : 'text-gray-600'} />
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab !== 'partners' ? (
          <>
            {/* Stats / Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { label: activeTab === 'deals' ? 'Active Deals' : 'Total Assets', value: activeTab === 'deals' ? products.filter(p => p.category === 'deals').length : products.filter(p => p.category !== 'deals').length, icon: activeTab === 'deals' ? Zap : Package },
                { label: 'Categories', value: activeTab === 'deals' ? 1 : categories.length - 1, icon: Layers },
                { label: 'Active Node', value: 'Delhi-1', icon: Globe },
                { label: 'Status', value: 'Online', icon: Server, color: 'text-green-500' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-6 rounded-[2rem] hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center">
                      <stat.icon size={20} className="text-blue-500" />
                    </div>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{stat.label}</span>
                  </div>
                  <div className={`text-2xl font-black ${stat.color || 'text-white'}`}>{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dataLoading ? (
                <div className="col-span-full py-20 flex flex-col items-center justify-center bg-white/[0.01] rounded-[3rem] border border-white/5">
                  <Loader2 className="animate-spin text-blue-600 mb-4" size={48} />
                  <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">Accessing Secure Database...</p>
                </div>
              ) : (
                <AnimatePresence>
                  {products
                    .filter(p => activeTab === 'deals' ? p.category === 'deals' : p.category !== 'deals')
                    .map((product) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="group relative bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-all border border-blue-500/10">
                            {(() => {
                              const Icon = mainCategories.find(c => c.id === product.category)?.icon || Package;
                              return <Icon size={24} className="text-blue-500" />;
                            })()}
                          </div>
                          <div>
                            <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors">{product.name}</h3>
                            <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest">{product.category}</span>
                          </div>
                        </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => openEdit(product)}
                            className="p-2.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-500 hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_15px_rgba(37,99,235,0.1)]"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(product.id)}
                            className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-[0_0_15px_rgba(239,68,68,0.1)]"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>

                      <p className="text-gray-400 text-sm font-medium mb-6 line-clamp-2 h-10 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2 mb-8">
                        {Object.entries(product.specs || {}).slice(0, 4).map(([k, v]) => (
                          <div key={k} className="px-3 py-2 rounded-xl bg-white/[0.03] border border-white/5">
                            <div className="text-[7px] font-black text-gray-600 uppercase tracking-widest">{k}</div>
                            <div className="text-[9px] font-bold text-gray-300 truncate">{String(v)}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-white/5">
                        <div className="flex flex-col">
                          {product.original_price && (
                            <span className="text-[10px] font-bold text-gray-600 line-through">₹{product.original_price}</span>
                          )}
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-black text-white">₹{product.price}</span>
                            <span className="text-[10px] font-bold text-gray-500 uppercase">/mo</span>
                          </div>
                        </div>
                        {product.featured && (
                          <span className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-[9px] font-black text-blue-400 uppercase tracking-widest shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                            Featured
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Partners Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dataLoading ? (
                <div className="col-span-full py-20 flex flex-col items-center justify-center bg-white/[0.01] rounded-[3rem] border border-white/5">
                  <Loader2 className="animate-spin text-blue-600 mb-4" size={48} />
                  <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">Retrieving Partners...</p>
                </div>
              ) : (
                <>
                  <AnimatePresence>
                    {partners.map((partner) => (
                      <motion.div
                        key={partner.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="group relative bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                      >
                        <div className="flex justify-between items-start mb-6">
                          <div className="flex items-center gap-4">
                            <div className="relative w-16 h-16 rounded-2xl border border-white/10 overflow-hidden bg-white/5">
                              <Image
                                src={partner.logo_url}
                                alt={partner.name}
                                fill
                                unoptimized
                                className="object-cover"
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
                          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => openPartnerEdit(partner)}
                              className="p-2.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-500 hover:bg-blue-600 hover:text-white transition-all"
                            >
                              <Edit2 size={16} />
                            </button>
                            <button
                              onClick={() => handleDeletePartner(partner.id)}
                              className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>

                        <p className="text-gray-400 text-sm font-medium leading-relaxed">
                          {partner.description || 'No description provided.'}
                        </p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {partners.length === 0 && (
                    <div className="col-span-full py-20 text-center">
                      <div className="inline-flex p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 mb-6">
                        <Handshake size={48} className="text-gray-700" />
                      </div>
                      <h3 className="text-xl font-black text-white mb-2">No Partners Found</h3>
                      <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">Start by adding your first strategic partner</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </>
        )}

        {activeTab === 'calculator' && (
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-12 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16 rounded-[1.5rem] bg-blue-600/10 flex items-center justify-center border border-blue-500/20">
                  <CalcIcon size={32} className="text-blue-500" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight">Calculator Settings</h2>
                  <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">Configure dynamic resource pricing</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Base Platform Price</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={calcSettings.basePrice}
                      onChange={(e) => setCalcSettings({ ...calcSettings, basePrice: parseFloat(e.target.value) })}
                      className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white font-black outline-none focus:border-blue-600/50 transition-all"
                    />
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xs">INR</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Price per GB RAM</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={calcSettings.ramPrice}
                      onChange={(e) => setCalcSettings({ ...calcSettings, ramPrice: parseFloat(e.target.value) })}
                      className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white font-black outline-none focus:border-blue-600/50 transition-all"
                    />
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xs">/ GB</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Price per vCore CPU</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={calcSettings.cpuPrice}
                      onChange={(e) => setCalcSettings({ ...calcSettings, cpuPrice: parseFloat(e.target.value) })}
                      className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white font-black outline-none focus:border-blue-600/50 transition-all"
                    />
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xs">/ Core</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Price per GB SSD</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={calcSettings.ssdPrice}
                      onChange={(e) => setCalcSettings({ ...calcSettings, ssdPrice: parseFloat(e.target.value) })}
                      className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white font-black outline-none focus:border-blue-600/50 transition-all"
                    />
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xs">/ GB</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/5">
                <button
                  onClick={async () => {
                    setLoading(true);
                    const result = await updateSettings('calculator_prices', calcSettings);
                    if (result.success) alert('Calculator settings saved successfully!');
                    else alert('Error: ' + result.error);
                    setLoading(false);
                  }}
                  disabled={loading}
                  className="w-full py-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm uppercase tracking-[0.25em] transition-all flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(37,99,235,0.2)]"
                >
                  {loading ? <Loader2 className="animate-spin" /> : <Save size={20} />}
                  Save Global Configuration
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>

      {/* Deployment Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-10 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-black text-white uppercase tracking-tight">
                  {editingProduct ? 'Update Node' : 'New Deployment'}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                      className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white font-bold outline-none focus:border-blue-600/50 transition-all appearance-none cursor-pointer"
                    >
                      {categories.map(c => (
                        <option key={c} value={c} className="bg-[#111]">{c.toUpperCase()}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Asset Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white font-bold outline-none focus:border-blue-600/50 transition-all placeholder:text-gray-700"
                      placeholder="e.g. RTX Game Node"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Description</label>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white font-bold outline-none focus:border-blue-600/50 transition-all h-32 resize-none placeholder:text-gray-700"
                    placeholder="High performance gaming node in Delhi NCR..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Monthly Cost (₹)</label>
                    <input
                      type="text"
                      required
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white font-bold outline-none focus:border-blue-600/50 transition-all placeholder:text-gray-700"
                      placeholder="999"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Original Price (₹) - For Strike-through</label>
                    <input
                      type="text"
                      value={formData.original_price}
                      onChange={(e) => setFormData({ ...formData, original_price: e.target.value })}
                      className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white font-bold outline-none focus:border-blue-600/50 transition-all placeholder:text-gray-700"
                      placeholder="1499"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Badge (Optional)</label>
                    <input
                      type="text"
                      value={formData.badge}
                      onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                      className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white font-bold outline-none focus:border-blue-600/50 transition-all placeholder:text-gray-700"
                      placeholder="e.g. Popular"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Display Order (Lower first)</label>
                    <input
                      type="number"
                      value={formData.display_order}
                      onChange={(e) => setFormData({ ...formData, display_order: e.target.value })}
                      className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white font-bold outline-none focus:border-blue-600/50 transition-all placeholder:text-gray-700"
                      placeholder="0"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Specs (JSON Format)</label>
                  <textarea
                    rows={4}
                    value={typeof formData.specs === 'object' ? JSON.stringify(formData.specs, null, 2) : String(formData.specs)}
                    onChange={(e) => setFormData({ ...formData, specs: e.target.value })}
                    className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white font-mono text-sm outline-none focus:border-blue-600/50 transition-all placeholder:text-gray-700"
                    placeholder='{"ram": "4GB", "cpu": "2 vCore", "ssd": "30GB"}'
                  />
                </div>

                <div className="flex items-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/5">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-6 h-6 rounded-lg accent-blue-600 cursor-pointer"
                  />
                  <label htmlFor="featured" className="text-sm font-black uppercase tracking-widest text-gray-400 cursor-pointer select-none">
                    Feature this product on homepage
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-6 rounded-2xl bg-blue-600 text-white font-black text-sm uppercase tracking-[0.2em] transition-all hover:bg-blue-700 hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] flex items-center justify-center gap-3"
                >
                  {loading ? <Loader2 className="animate-spin" size={20} /> : (
                    <>{editingProduct ? 'Commit Changes' : 'Initialize Node'} <Save size={20} /></>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Partner Modal */}
      <AnimatePresence>
        {isPartnerModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPartnerModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-10 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-black text-white uppercase tracking-tight">
                  {editingPartner ? 'Update Partner' : 'Add Partner'}
                </h2>
                <button
                  onClick={() => setIsPartnerModalOpen(false)}
                  className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handlePartnerSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Partner Name (Optional)</label>
                  <input
                    type="text"
                    value={partnerFormData.name}
                    onChange={(e) => setPartnerFormData({ ...partnerFormData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white font-bold outline-none focus:border-blue-600/50 transition-all placeholder:text-gray-700"
                    placeholder="e.g. Hexium Nodes"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Logo URL (Optional)</label>
                  <input
                    type="text"
                    value={partnerFormData.logo_url}
                    onChange={(e) => setPartnerFormData({ ...partnerFormData, logo_url: e.target.value })}
                    className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white font-bold outline-none focus:border-blue-600/50 transition-all placeholder:text-gray-700"
                    placeholder="https://example.com/logo.png"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Server Link (Optional)</label>
                  <input
                    type="text"
                    value={partnerFormData.server_link}
                    onChange={(e) => setPartnerFormData({ ...partnerFormData, server_link: e.target.value })}
                    className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white font-bold outline-none focus:border-blue-600/50 transition-all placeholder:text-gray-700"
                    placeholder="https://discord.gg/yourserver"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Description (Optional)</label>
                  <textarea
                    value={partnerFormData.description}
                    onChange={(e) => setPartnerFormData({ ...partnerFormData, description: e.target.value })}
                    className="w-full bg-white/5 border border-white/5 rounded-2xl p-5 text-white font-bold outline-none focus:border-blue-600/50 transition-all h-32 resize-none placeholder:text-gray-700"
                    placeholder="Briefly describe the partner community or project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-6 rounded-2xl bg-blue-600 text-white font-black text-sm uppercase tracking-[0.2em] transition-all hover:bg-blue-700 hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] flex items-center justify-center gap-3"
                >
                  {loading ? <Loader2 className="animate-spin" size={20} /> : (
                    <>{editingPartner ? 'Update Partner' : 'Register Partner'} <Save size={20} /></>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

