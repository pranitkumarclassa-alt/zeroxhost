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
  { name: 'VDS Hosting', href: '/vps', icon: Layers },
  { name: 'Web Hosting', href: '/web-hosting', icon: Globe },
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
    { name: 'VDS Hosting', desc: t('nav.vdsHostingDesc'), icon: Layers, href: '/vps' },
    { name: 'Web Hosting', desc: t('nav.webHostingDesc'), icon: Globe, href: '/web-hosting' },
    { name: 'Bot Hosting', desc: t('nav.botHostingDesc'), icon: Bot, href: '/bots' },
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
        "sticky top-0 left-0 right-0 z-[100] transition-all duration-500 px-6",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div className="max-w-[1400px] mx-auto">
        <div 
          className={cn(
            "relative flex items-center justify-between px-8 py-3 rounded-full transition-all duration-500 border",
            scrolled 
              ? "bg-black/80 backdrop-blur-2xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
              : "bg-black/40 backdrop-blur-xl border-white/5 shadow-2xl"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative h-12 w-12 rounded-2xl overflow-hidden group-hover:scale-110 transition-all duration-500 border border-white/10 group-hover:border-blue-500/50">
              <Image
                src="https://cdn.discordapp.com/icons/1504088095220568094/2bf6ee2d2f71b5f3c631ad01556207d8.webp?size=2048"
                alt="Zerox Host"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-tighter leading-tight font-montserrat uppercase">ZEROX<span className="text-blue-500">HOST</span></span>
              <span className="text-[9px] font-black text-gray-500 uppercase tracking-[0.3em] leading-none font-jakarta">Supreme Infrastructure</span>
            </div>
          </Link>

          {/* Centered Nav Links */}
          <div className="hidden lg:flex items-center gap-3 min-w-0 flex-nowrap">
            <div 
              className="relative group/hosting h-full flex items-center"
              onMouseEnter={() => setActiveDropdown('hosting')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={cn(
                "flex items-center gap-2 rounded-full border px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300",
                activeDropdown === 'hosting' 
                  ? "bg-blue-600/20 border-blue-500/50 text-white shadow-[0_0_20px_rgba(37,99,235,0.2)]" 
                  : "bg-white/5 border-white/10 text-gray-300 hover:border-blue-400/50 hover:text-white hover:bg-white/10"
              )}>
                <Server size={12} className="text-blue-500" /> Hosting Services <ChevronDown size={10} className={cn("transition-transform duration-300", activeDropdown === 'hosting' && "rotate-180")} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'hosting' && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[520px] z-[110]"
                  >
                    <div className="bg-[#05050a]/95 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 shadow-[0_40px_100px_rgba(0,0,0,0.6)] grid grid-cols-2 gap-4 relative">
                      {/* Decorative Glow inside dropdown */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                      
                      {hostingDropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-4 p-5 rounded-[2rem] bg-white/[0.03] border border-white/5 transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-500/30 group/item"
                        >
                          <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400 group-hover/item:scale-110 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-300">
                            <item.icon size={20} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[12px] font-black uppercase tracking-[0.2em] text-white">{item.name}</span>
                            <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mt-0.5 group-hover/item:text-blue-400/70 transition-colors">Enterprise Grade</span>
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
                    "group relative overflow-hidden rounded-full px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 nav-pill",
                    active 
                      ? 'text-white bg-blue-600/20 border border-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,0.25)]' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 border border-transparent'
                  )}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-violet-500/5 to-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative z-10 flex items-center gap-2">
                    <item.icon size={14} className={cn("transition-colors duration-300", active ? "text-blue-400" : "text-gray-500 group-hover:text-blue-400")} /> {item.name}
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
                "flex items-center gap-2 rounded-full border px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300",
                activeDropdown === 'company' 
                  ? "bg-blue-600/20 border-blue-500/50 text-white shadow-[0_0_20px_rgba(37,99,235,0.2)]" 
                  : "bg-white/5 border-white/10 text-gray-300 hover:border-blue-400/50 hover:text-white hover:bg-white/10"
              )}>
                <Layers size={12} className="text-blue-500" /> Company <ChevronDown size={10} className={cn("transition-transform duration-300", activeDropdown === 'company' && "rotate-180")} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[240px] z-[110]"
                  >
                    <div className="bg-[#05050a]/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-4 shadow-[0_40px_100px_rgba(0,0,0,0.6)] flex flex-col gap-1 relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                      
                      {companyDropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5 transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-500/30 group/item"
                        >
                          <div className="w-8 h-8 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400 group-hover/item:scale-110 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-300">
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
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4 relative">
              <Link href="https://discord.gg/56VcDMZbrj" target="_blank" rel="noreferrer noopener" className="text-gray-400 hover:text-white transition-colors">
                <MessageSquare size={18} />
              </Link>

              {/* Language & Currency in one sleek group */}
              <div className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-2xl px-4 py-2">
                {/* Language Switcher */}
                <div 
                  className="relative group/lang"
                  onMouseEnter={() => setActiveDropdown('lang')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1.5 text-[10px] font-black text-gray-300 hover:text-white transition-all uppercase tracking-widest py-1"
                  >
                    <span>{languages.find(l => l.code === language)?.code.toUpperCase()}</span>
                    <ChevronDown size={10} className="text-blue-500" />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === 'lang' && (
                      <motion.div
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
                href="https://discord.com/invite/56VcDMZbrj"
                target="_blank"
                rel="noreferrer noopener"
                className="px-8 py-3 rounded-2xl bg-blue-600 text-white text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:bg-blue-700 shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:scale-105 active:scale-95"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 mt-4 mx-6 p-8 bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-2xl"
          >
            <div className="grid gap-8">
              <div>
                <div className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-6 ml-2">Services</div>
                <div className="grid grid-cols-1 gap-2">
                  {hostingServices.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon size={20} className="text-blue-500" />
                      <span className="text-sm font-bold text-white uppercase tracking-wider">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-6 ml-2">Explore</div>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    { name: 'Pricing', href: '/pricing', icon: Activity },
                    { name: 'Deals', href: '/pricing?category=deals', icon: Zap },
                    { name: 'Partners', href: '/partners', icon: Handshake },
                    { name: 'Blog', href: '/blog', icon: BookOpen },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon size={20} className="text-blue-500" />
                      <span className="text-sm font-bold text-white uppercase tracking-wider">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-6 ml-2">Partners</div>
                <div className="grid grid-cols-1 gap-2">
                  {partnerLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      <link.icon size={20} className="text-blue-500" />
                      <span className="text-sm font-bold text-white uppercase tracking-wider">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-6 ml-2">{t('nav.legal')}</div>
                <div className="grid grid-cols-1 gap-2">
                  <Link
                    href={legalLink.href}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <FileText size={20} className="text-blue-500" />
                    <span className="text-sm font-bold text-white uppercase tracking-wider">{legalLink.name}</span>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-6 pt-6 border-t border-white/10">
                <div className="space-y-4 px-2">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Language</span>
                  <div className="grid grid-cols-5 gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsOpen(false);
                        }}
                        className={cn(
                          "px-2 py-2 rounded-xl text-[9px] font-black transition-all w-full",
                          language === lang.code ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]" : "bg-white/5 text-gray-500 hover:text-gray-300"
                        )}
                      >
                        {lang.code.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 px-2">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Currency</span>
                  <div className="grid grid-cols-2 gap-2">
                    {(['INR', 'USD'] as const).map((c) => (
                      <button
                        key={c}
                        onClick={() => {
                          setCurrency(c);
                          setIsOpen(false);
                        }}
                        className={cn(
                          "px-2 py-2 rounded-xl text-[9px] font-black transition-all w-full",
                          currency === c ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]" : "bg-white/5 text-gray-500 hover:text-gray-300"
                        )}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                <Link
                  href="/login"
                  className="w-full py-4 rounded-xl bg-blue-600 text-white text-center text-xs font-black uppercase tracking-[0.2em]"
                  onClick={() => setIsOpen(false)}
                >
                  Login to Portal
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
