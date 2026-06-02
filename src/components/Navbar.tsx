'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Gamepad2, Globe, Server, Layers, Bot, FileText, Activity, MessageSquare, Users, Handshake, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCurrency } from '@/lib/CurrencyContext';
import { useLanguage } from '@/lib/LanguageContext';

const gamesDropdown = [
  { name: 'Minecraft', href: '/games/minecraft' },
  { name: 'Ark: Survival', href: '/games/ark' },
  { name: 'TF2', href: '/games/team-fortress-2' },
  { name: 'Insurgency', href: '/games/insurgency' },
  { name: 'CS:GO', href: '/games/csgo' },
  { name: 'Mumble', href: '/games/mumble' },
  { name: 'GMod', href: '/games/garrys-mod' },
  { name: 'Hytale', href: '/games/hytale' },
  { name: 'Among Us', href: '/games/among-us' },
  { name: 'GTA (FiveM)', href: '/games/gta' },
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
    { name: t('nav.games'), desc: t('nav.gameServersDesc'), icon: Gamepad2, href: '/games' },
    { name: t('nav.web'), desc: t('nav.webHostingDesc'), icon: Globe, href: '/web' },
    { name: t('nav.vps'), desc: t('nav.vpsHostingDesc'), icon: Server, href: '/vps' },
    { name: 'VDS', desc: t('nav.vdsHostingDesc'), icon: Layers, href: '/vps' },
    { name: t('nav.bots'), desc: t('nav.botHostingDesc'), icon: Bot, href: '/bots' },
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
    { name: t('nav.vps'), href: '/vps', icon: Server },
    { name: t('nav.bots'), href: '/bots', icon: Bot },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: t('nav.reseller'), href: '/reseller', icon: Users },
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
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 rounded-xl overflow-hidden group-hover:scale-110 transition-all duration-500">
              <Image
                src="https://cdn.discordapp.com/icons/1504088095220568094/2bf6ee2d2f71b5f3c631ad01556207d8.webp?size=2048"
                alt="Zerox Host"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white tracking-tighter leading-tight font-montserrat">ZEROX<span className="text-blue-500">HOST</span></span>
              <span className="text-[8px] font-black text-gray-500 uppercase tracking-[0.2em] leading-none font-jakarta">Hosting built for builders</span>
            </div>
          </Link>

          {/* Centered Nav Links */}
          <div className="hidden lg:flex flex-wrap items-center gap-3 min-w-0">
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('games')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-black uppercase tracking-[0.28em] text-gray-300 transition-all duration-300 hover:border-blue-400/50 hover:text-white hover:bg-white/10 shadow-[0_0_10px_rgba(37,99,235,0.08)]">
                <Gamepad2 size={14} className="text-blue-500" /> {t('nav.games')} <ChevronDown size={12} className={cn("transition-transform duration-300", activeDropdown === 'games' && "rotate-180")} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'games' && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[520px] bg-[#05050a]/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)] grid grid-cols-2 gap-3"
                  >
                    {gamesDropdown.map((game) => (
                      <Link
                        key={game.name}
                        href={game.href}
                        className="flex items-center gap-3 p-4 rounded-3xl bg-white/5 border border-white/5 transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-500/20"
                      >
                        <div className="w-10 h-10 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400">
                          <Gamepad2 size={16} />
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white">{game.name}</span>
                      </Link>
                    ))}
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
                    "group relative overflow-hidden rounded-full px-5 py-3 text-xs font-black uppercase tracking-[0.26em] transition-all duration-300 nav-pill",
                    active ? 'text-white bg-white/10 border border-blue-400/30 shadow-[0_0_25px_rgba(56,189,248,0.18)]' : 'text-gray-300 hover:text-white hover:bg-white/5 hover:border hover:border-white/10'
                  )}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-violet-500/10 to-cyan-400/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative z-10 flex items-center gap-2">
                    <item.icon size={14} className="text-blue-400" /> {item.name}
                  </span>
                </Link>
              );
            })}

            <div className="w-px h-6 bg-white/10 mx-2" />
            <Link href="https://status.zeroxhost.space" target="_blank" rel="noreferrer noopener" className="relative overflow-hidden rounded-full px-5 py-3 text-xs font-black uppercase tracking-[0.26em] text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-violet-500/10 to-cyan-400/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10 flex items-center gap-2"><Activity size={14} className="text-blue-400" /> Live Status</span>
            </Link>
            <Link href={legalLink.href} className="relative overflow-hidden rounded-full px-5 py-3 text-xs font-black uppercase tracking-[0.26em] text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-violet-500/10 to-cyan-400/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10 flex items-center gap-2"><FileText size={14} className="text-blue-400" /> {legalLink.name}</span>
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4 relative">
              <Link href="https://discord.gg/56VcDMZbrj" target="_blank" rel="noreferrer noopener" className="text-gray-400 hover:text-white transition-colors">
                <MessageSquare size={18} />
              </Link>

              {/* Language Switcher (Desktop) */}
              <div className="relative">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'lang' ? null : 'lang')}
                  className="flex items-center gap-1.5 text-xs font-black text-gray-300 hover:text-white transition-all uppercase"
                >
                  <span className="text-lg">{languages.find(l => l.code === language)?.flag ?? '🇺🇸'}</span>
                  <ChevronDown size={12} />
                </button>

                {/* Desktop language dropdown */}
                <AnimatePresence>
                  {activeDropdown === 'lang' && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="absolute right-0 mt-2 w-40 bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 rounded-xl p-3 shadow-2xl"
                    >
                      <div className="grid grid-cols-1 gap-2">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => { setLanguage(lang.code); setActiveDropdown(null); }}
                            className={cn(
                              "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold transition-all text-left",
                              language === lang.code ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'
                            )}
                          >
                            <span className="text-lg">{lang.flag}</span>
                            <span className="uppercase">{lang.code}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Currency Switcher (Desktop) */}
              <div className="relative">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'currency' ? null : 'currency')}
                  className="flex items-center gap-1.5 text-xs font-black text-gray-300 hover:text-white transition-all uppercase"
                >
                  {currency}
                  <ChevronDown size={12} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'currency' && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="absolute right-0 mt-2 w-32 bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 rounded-xl p-3 shadow-2xl"
                    >
                      <div className="grid grid-cols-1 gap-2">
                        {(['INR','USD'] as const).map((c) => (
                          <button
                            key={c}
                            onClick={() => { setCurrency(c); setActiveDropdown(null); }}
                            className={cn(
                              "px-3 py-2 rounded-lg text-sm font-bold transition-all text-left",
                              currency === c ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'
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

            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="px-6 py-2 rounded-xl border border-white/10 text-white text-[10px] font-black uppercase tracking-widest transition-all hover:bg-white/5"
              >
                Talk to Sales
              </Link>
              <Link
                href="https://discord.com/invite/56VcDMZbrj"
                target="_blank"
                rel="noreferrer noopener"
                className="px-6 py-2 rounded-xl bg-[#a855f7] text-white text-[10px] font-black uppercase tracking-widest transition-all hover:bg-[#9333ea] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                Billing Portal
              </Link>
              <Link href="/partnership" className="ml-2 text-xs font-bold uppercase text-gray-300 hover:text-white">{t('nav.partnership')}</Link>
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
