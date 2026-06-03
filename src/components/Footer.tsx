'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MessageSquare, ShieldCheck, Activity, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  const locations = [
    { name: 'Mumbai', slug: 'vps-hosting-india' },
    { name: 'Delhi', slug: 'vps-hosting-delhi' },
    { name: 'Bangalore', slug: 'vps-hosting-bangalore' },
    { name: 'Kolkata', slug: 'vps-hosting-kolkata' },
    { name: 'Hyderabad', slug: 'vps-hosting-hyderabad' },
  ];

  const solutions = [
    { name: 'Cheap VPS India', slug: 'cheap-vps-india' },
    { name: 'Ryzen VPS', slug: 'ryzen-vps-india' },
    { name: 'Minecraft Hosting', slug: 'minecraft-hosting-india' },
    { name: 'Discord Bot Hosting', slug: 'discord-bot-hosting-india' },
  ];

  return (
    <footer className="py-24 px-6 relative overflow-hidden bg-transparent">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-8 group">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10 transition-all group-hover:scale-110 group-hover:border-blue-500/50">
              <Image
                src="https://cdn.discordapp.com/icons/1504088095220568094/2bf6ee2d2f71b5f3c631ad01556207d8.webp?size=2048"
                alt="ZEROX HOST - Footer Logo"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-white leading-none">
                  ZEROX<span className="text-blue-500">HOST</span>
                </span>
                <span className="px-1.5 py-0.5 rounded bg-blue-600/20 border border-blue-500/30 text-[8px] font-black text-blue-400 uppercase tracking-tight">
                  India
                </span>
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mt-1 text-nowrap">The Best</span>
            </div>
          </Link>
          <p className="text-gray-400 text-sm font-medium leading-relaxed mb-8">
            Premium hosting solutions for gamers and developers. Experience unmatched performance with our cutting-edge infrastructure.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://status.zeroxhost.space/" target="_blank" className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-all">
              <Activity size={12} className="text-green-500" />
              <span className="text-green-500 text-[10px] font-black uppercase tracking-widest">All systems operational</span>
            </Link>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <ShieldCheck size={12} className="text-blue-500" />
              <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest">DDoS protected</span>
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Contact Us</h4>
          <div className="space-y-6">
            <Link href="mailto:akshitkanswal111@gmail.com" className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                <Mail size={18} className="text-gray-400 group-hover:text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm mb-1 italic">Email</div>
                <div className="text-gray-400 text-sm font-bold">akshitkanswal111@gmail.com</div>
                <div className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mt-1">Sales, support & custom quotes</div>
              </div>
            </Link>
            <Link href="https://discord.gg/56VcDMZbrj" className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                <MessageSquare size={18} className="text-gray-400 group-hover:text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm mb-1 italic">Discord</div>
                <div className="text-gray-400 text-sm font-bold">Join our community</div>
                <div className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mt-1">24/7 Real-time support</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Important */}
        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Important</h4>
          <ul className="space-y-4">
            <li><Link href="/reseller" className="text-gray-400 hover:text-white text-sm font-bold transition-colors">Reseller Program</Link></li>
            <li><Link href="/partnership" className="text-gray-400 hover:text-white text-sm font-bold transition-colors">Strategic Partnership</Link></li>
            <li><Link href="/blog" className="text-gray-400 hover:text-white text-sm font-bold transition-colors">Blog</Link></li>
            <li><Link href="#calculator" className="text-gray-400 hover:text-white text-sm font-bold transition-colors">Pricing Calculator</Link></li>
            <li><Link href="#pricing" className="text-gray-400 hover:text-white text-sm font-bold transition-colors">All Pricings</Link></li>
          </ul>
        </div>

        {/* Infrastructure */}
        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Infrastructure</h4>
          <div className="space-y-4">
            <div className="text-gray-400 text-sm font-bold italic">Intel E5 v4 · Intel Platinum · Global POPs</div>
            <p className="text-gray-500 text-[10px] leading-relaxed uppercase tracking-wider font-bold">
              We use only the latest Intel and AMD server hardware to ensure your performance stays reliable and consistent.
            </p>
          </div>
        </div>
      </div>

      {/* SEO Hub - New Section */}
      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        <div>
          <h5 className="text-white font-black uppercase tracking-widest text-[10px] mb-6 flex items-center gap-2">
            <MapPin size={12} className="text-blue-500" />
            Popular Locations
          </h5>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {locations.map((loc) => (
              <Link key={loc.slug} href={`/${loc.slug}`} className="text-gray-500 hover:text-blue-500 text-xs font-bold transition-colors">
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h5 className="text-white font-black uppercase tracking-widest text-[10px] mb-6 flex items-center gap-2">
            <Globe size={12} className="text-blue-500" />
            Hosting Solutions
          </h5>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {solutions.map((sol) => (
              <Link key={sol.slug} href={`/${sol.slug}`} className="text-gray-500 hover:text-blue-500 text-xs font-bold transition-colors">
                {sol.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h5 className="text-white font-black uppercase tracking-widest text-[10px] mb-6 flex items-center gap-2">
            <Activity size={12} className="text-blue-500" />
            Resources
          </h5>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/knowledgebase" className="text-gray-500 hover:text-blue-500 text-xs font-bold transition-colors">Knowledge Base</Link>
            <Link href="/glossary" className="text-gray-500 hover:text-blue-500 text-xs font-bold transition-colors">Glossary</Link>
            <Link href="/status" className="text-gray-500 hover:text-blue-500 text-xs font-bold transition-colors">System Status</Link>
            <Link href="/datacenter" className="text-gray-500 hover:text-blue-500 text-xs font-bold transition-colors">Datacenters</Link>
          </div>
        </div>
        <div>
          <h5 className="text-white font-black uppercase tracking-widest text-[10px] mb-6 flex items-center gap-2">
            <ShieldCheck size={12} className="text-blue-500" />
            Legal & Trust
          </h5>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/terms" className="text-gray-500 hover:text-blue-500 text-xs font-bold transition-colors">Terms</Link>
            <Link href="/privacy" className="text-gray-500 hover:text-blue-500 text-xs font-bold transition-colors">Privacy</Link>
            <Link href="/refund" className="text-gray-500 hover:text-blue-500 text-xs font-bold transition-colors">Refund Policy</Link>
            <Link href="/sla" className="text-gray-500 hover:text-blue-500 text-xs font-bold transition-colors">SLA</Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex flex-col gap-2">
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
            © 2026 ZEROXHOST.SPACE - ZEROX HOST INDIA - ALL RIGHTS RESERVED
          </p>
          <p className="text-gray-700 text-[8px] font-bold uppercase tracking-[0.3em]">
            zeroxhost.space | zeroxhost.com | ZeroXHost | ZEROX HOST
          </p>
        </div>
        <div className="flex gap-8">
          <Link href="https://status.zeroxhost.space/" target="_blank" className="text-gray-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Status</Link>
          <Link href="/blog" className="text-gray-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Knowledge Base</Link>
          <Link href="#" className="text-gray-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">API</Link>
        </div>
      </div>
    </footer>
  );
}
