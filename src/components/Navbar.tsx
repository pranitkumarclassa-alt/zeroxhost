'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Gamepad2, Globe, Server, Layers, Bot, FileText, Activity, MessageSquare, Users, Handshake, BookOpen, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCurrency } from '@/lib/CurrencyContext';
import { useLanguage } from '@/lib/LanguageContext';

const hostingDropdown = [
  { name: 'VPS Hosting', href: '/vps', icon: Server },
  { name: 'Game Servers', href: '/games', icon: Gamepad2 },
  { name: 'VDS Hosting', href: '/vds', icon: Layers },
  { name: 'Web Hosting', href: '/webhosting', icon: Globe },
  { name: 'Bot Hosting', href: '/bots', icon: Bot },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { currency, setCurrency } = useCurrency();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hostingServices = [
    { name: 'VPS Hosting', desc: t('nav.vpsHostingDesc'), icon: Server, href: '/vps' },
    { name: 'Game Servers', desc: t('nav.gameServersDesc'), icon: Gamepad2, href: '/games' },
    { name: 'VDS Hosting', desc: t('nav.vdsHostingDesc'), icon: Layers, href: '/vds' },
    { name: 'Web Hosting', desc: t('nav.webHostingDesc'), icon: Globe, href: '/webhosting' },
    { name: 'Bot Hosting', desc: t('nav.botHostingDesc'), icon: Bot, href: '/bots' },
    { name: 'Network', desc: 'Live system status', icon: Activity, href: '/network' },
    { name: 'Knowledge Base', desc: 'Tutorials & guides', icon: BookOpen, href: '/knowledgebase' },
    { name: 'Blog', desc: 'Hosting guides', icon: BookOpen, href: '/blog' },
  ];

  const partnerLinks = [
    { name: t('nav.partnership'), desc: t('nav.partnershipDesc'), icon: Handshake, href: '/partnership' },
  ];

  const legalLink = { name: t('nav.legal'), href: '/legal' };

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'hi', label: 'Hindi', flag: '🇮🇳' },
    { code: 'es', label: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', label: 'French', flag: '🇫🇷' },
  ] as const;

  const pathname = usePathname();

  const navItems = [
    { name: 'Pricing', href: '/pricing', icon: Activity },
    { name: 'Deals', href: '/pricing?category=deals', icon: Zap },
  ];

  const companyDropdown = [
    { name: 'Partners', href: '/partnership', icon: Handshake },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: t('nav.reseller'), href: '/reseller', icon: Users },
    { name: 'Legal', href: '/legal', icon: FileText },
    { name: 'Live Status', href: 'https://status.zeroxhost.space', icon: Activity },
  ];

  const isActiveNavItem = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6",
        scrolled ? "py-4" : "py-8"
      )}
    >
      <div className="max-w-[1440px] mx-auto">
        <div 
          className={cn(
            "relative flex items-center justify-between px-8 py-3.5 rounded-[2rem] transition-all duration-500 border backdrop-blur-2xl",
            scrolled 
              ? "bg-[#05050a]/80 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
              : "bg-white/[0.02] border-white/5 shadow-2xl"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative h-11 w-11 rounded-2xl overflow-hidden group-hover:scale-110 transition-all duration-500 border border-white/10 group-hover:border-blue-500/50 shadow-[0_0_20px_rgba(0,0,0,0.4)]">
              <Image
                src="https://cdn.discordapp.com/icons/1504088095220568094/2bf6ee2d2f71b5f3c631ad01556207d8.webp?size=2048"
                alt="ZEROX HOST - Premium India Hosting Logo"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white tracking-tighter leading-tight font-montserrat uppercase">ZEROX<span className="text-blue-500">HOST</span></span>
              <span className="text-[8px] font-black text-gray-500 uppercase tracking-[0.4em] leading-none font-jakarta">Elite Cloud</span>
            </div>
          </Link>

          {/* Centered Nav Links */}
          <div className="hidden lg:flex items-center gap-1.5 min-w-0 flex-nowrap bg-white/[0.03] border border-white/5 rounded-full p-1.5 backdrop-blur-md">
            <div 
              className="relative group/hosting h-full flex items-center"
              onMouseEnter={() => setActiveDropdown('hosting')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300",
                activeDropdown === 'hosting' 
                  ? "bg-blue-600/20 text-white" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}>
                Services <ChevronDown size={10} className={cn("transition-transform duration-300", activeDropdown === 'hosting' && "rotate-180")} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'hosting' && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    className="absolute top-full left-0 pt-4 w-[560px] z-[110]"
                  >
                    <div className="bg-[#05050a]/98 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-6 shadow-[0_40px_100px_rgba(0,0,0,0.8)] grid grid-cols-2 gap-3 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400" />
                      
                      {hostingServices.slice(0, 6).map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-4 p-4 rounded-[1.5rem] bg-white/[0.02] border border-white/5 transition-all duration-300 hover:bg-blue-600/10 hover:border-blue-500/30 group/item"
                        >
                          <div className="w-11 h-11 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400 group-hover/item:scale-110 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-300 shadow-inner">
                            <item.icon size={18} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[11px] font-black uppercase tracking-[0.15em] text-white">{item.name}</span>
                            <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mt-1 group-hover/item:text-blue-400/70 transition-colors line-clamp-1">{item.desc}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navItems.map((item) => {
              const active = isActiveNavItem(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group relative overflow-hidden rounded-full px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300",
                    active 
                      ? 'text-white bg-blue-600/20' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  )}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {item.name}
                  </span>
                </Link>
              );
            })}

            <div 
              className="relative group/company h-full flex items-center"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300",
                activeDropdown === 'company' 
                  ? "bg-blue-600/20 text-white" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}>
                Explore <ChevronDown size={10} className={cn("transition-transform duration-300", activeDropdown === 'company' && "rotate-180")} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    className="absolute top-full left-0 pt-4 w-[240px] z-[110]"
                  >
                    <div className="bg-[#05050a]/98 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-3 shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex flex-col gap-1 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-500" />
                      
                      {companyDropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-500/30 group/item"
                        >
                          <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-300">
                            <item.icon size={14} />
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language & Currency in one sleek group */}
            <div className="flex items-center gap-2 bg-white/[0.03] border border-white/5 rounded-full px-4 py-1.5 backdrop-blur-md">
              <div 
                className="relative group/lang"
                onMouseEnter={() => setActiveDropdown('lang')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1.5 text-[10px] font-black text-gray-400 hover:text-white transition-all uppercase tracking-widest py-1">
                  {languages.find(l => l.code === language)?.code.toUpperCase()}
                  <ChevronDown size={10} className="text-blue-500" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'lang' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full right-0 pt-4 w-[160px] z-[120]"
                    >
                      <div className="bg-[#05050a]/98 backdrop-blur-3xl border border-white/10 rounded-2xl p-2 shadow-2xl overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-600" />
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLanguage(lang.code);
                              setActiveDropdown(null);
                            }}
                            className={cn(
                              "w-full flex items-center justify-between px-4 py-2.5 rounded-xl transition-all text-[10px] font-black uppercase tracking-widest",
                              language === lang.code ? "bg-blue-600 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"
                            )}
                          >
                            <span>{lang.label}</span>
                            <span>{lang.flag}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="w-px h-3 bg-white/10" />

              <button
                onClick={() => setCurrency(currency === 'INR' ? 'USD' : 'INR')}
                className="text-[10px] font-black text-gray-400 hover:text-white transition-all uppercase tracking-widest py-1 flex items-center gap-1.5"
              >
                {currency}
                <div className="w-1 h-1 rounded-full bg-blue-500" />
              </button>
            </div>

            <Link
              href="https://panel.zeroxhost.space/auth/login"
              className="px-8 py-3.5 rounded-full bg-blue-600 text-white text-[11px] font-black uppercase tracking-[0.25em] transition-all hover:bg-blue-700 shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95 border border-blue-400/30"
            >
              Client Area
            </Link>
          </div>
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 top-full pt-4 w-40 z-[110]"
                      >
                        <div className="bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-3 shadow-2xl">
                          {languages.map((lang) => (
                            <button
                              key={lang.code}
                              onClick={() => { setLanguage(lang.code); setActiveDropdown(null); }}
                              className={cn(
                                "flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-[10px] font-black transition-all mb-1 uppercase tracking-widest",
                                language === lang.code ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                              )}
                            >
                              <span>{lang.label}</span>
                              <span>{lang.flag}</span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="w-px h-3 bg-white/10" />

                {/* Currency Switcher */}
                <div 
                  className="relative group/curr"
                  onMouseEnter={() => setActiveDropdown('currency')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1.5 text-[10px] font-black text-gray-300 hover:text-white transition-all uppercase tracking-widest py-1"
                  >
                    <span>{currency}</span>
                    <ChevronDown size={10} className="text-blue-500" />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === 'currency' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 top-full pt-4 w-32 z-[110]"
                      >
                        <div className="bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-3 shadow-2xl">
                          {(['INR','USD'] as const).map((c) => (
                            <button
                              key={c}
                              onClick={() => { setCurrency(c); setActiveDropdown(null); }}
                              className={cn(
                                "w-full px-4 py-2.5 rounded-xl text-[10px] font-black transition-all mb-1 uppercase tracking-widest",
                                currency === c ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                              )}
                            >
                              {c}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="https://panel.zeroxhost.space/auth/login"
                className="px-8 py-4 rounded-2xl bg-blue-600 text-white text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:bg-blue-700 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95 border border-blue-400/30"
              >
                Client Area
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[120] lg:hidden"
          >
            <div className="absolute inset-0 bg-[#05050a]/95 backdrop-blur-3xl" />
            
            <div className="relative h-full flex flex-col p-8 overflow-y-auto font-jakarta">
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-xl overflow-hidden border border-white/10">
                    <Image
                      src="https://cdn.discordapp.com/icons/1504088095220568094/2bf6ee2d2f71b5f3c631ad01556207d8.webp?size=2048"
                      alt="Logo"
                      fill
                      unoptimized
                    />
                  </div>
                  <span className="text-lg font-black text-white uppercase tracking-tighter">ZEROX<span className="text-blue-500">HOST</span></span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-all shadow-inner"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 space-y-12">
                <div className="space-y-4">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] px-2 block">Hosting Solutions</span>
                  <div className="grid grid-cols-1 gap-2">
                    {hostingServices.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-blue-600/10 hover:border-blue-500/30 transition-all group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <item.icon size={18} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[11px] font-black uppercase tracking-wider text-white">{item.name}</span>
                          <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mt-0.5 line-clamp-1">{item.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] px-2 block">Quick Access</span>
                  <div className="grid grid-cols-2 gap-2">
                    {navItems.concat(companyDropdown.slice(0, 2)).map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all"
                      >
                        <item.icon size={14} className="text-blue-500" />
                        <span className="text-[10px] font-black uppercase tracking-wider text-white">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-white/10 space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Language</span>
                    <div className="grid grid-cols-3 gap-1">
                      {languages.slice(0, 3).map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsOpen(false);
                          }}
                          className={cn(
                            "py-2.5 rounded-lg text-[9px] font-black transition-all",
                            language === lang.code ? "bg-blue-600 text-white" : "bg-white/5 text-gray-500"
                          )}
                        >
                          {lang.code.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Currency</span>
                    <div className="flex gap-1">
                      {(['INR', 'USD'] as const).map((c) => (
                        <button
                          key={c}
                          onClick={() => {
                            setCurrency(c);
                            setIsOpen(false);
                          }}
                          className={cn(
                            "flex-1 py-2.5 rounded-lg text-[9px] font-black transition-all",
                            currency === c ? "bg-blue-600 text-white" : "bg-white/5 text-gray-500"
                          )}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href="https://panel.zeroxhost.space/auth/login"
                  className="w-full py-5 rounded-2xl bg-blue-600 text-white text-center text-xs font-black uppercase tracking-[0.25em] shadow-[0_0_30px_rgba(37,99,235,0.3)] border border-blue-400/30"
                  onClick={() => setIsOpen(false)}
                >
                  Access Client Area
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
