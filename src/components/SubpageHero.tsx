'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface SubpageHeroProps {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
}

export default function SubpageHero({ category, title, subtitle, description, icon: Icon }: SubpageHeroProps) {
  return (
    <section className="relative pt-48 pb-24 px-6 overflow-hidden">
      {/* Halix Style Grid Background */}
      <div className="absolute inset-0 z-[-2] pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        
        {/* Animated Aurora Glows */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full opacity-40"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-[0_0_30px_rgba(37,99,235,0.2)] backdrop-blur-xl border-t-blue-400/30"
          >
            <Icon size={12} />
            {category}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter font-montserrat"
          >
            {title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
              {subtitle}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-medium"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="#pricing"
              className="group relative px-12 py-5 rounded-2xl bg-blue-600 text-white font-black text-xs uppercase tracking-[0.25em] transition-all hover:bg-blue-700 shadow-[0_0_50px_rgba(37,99,235,0.4)] overflow-hidden border-t border-blue-400/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 flex items-center gap-3">
                View Plans <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="px-12 py-5 rounded-2xl bg-white/[0.03] text-white font-black text-xs uppercase tracking-[0.25em] border border-white/10 backdrop-blur-md transition-all hover:bg-white/[0.08] hover:border-white/20 flex items-center justify-center"
            >
              Contact Sales
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
