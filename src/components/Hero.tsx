'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
import Calculator from './Calculator';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden bg-transparent">
      {/* Background Decorative Elements - Halix Style */}
      <div className="absolute inset-0 z-[-2] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-indigo-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left Side: Content - Massive Impact */}
        <div className="flex flex-col items-start text-left lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-[0.3em] mb-10 backdrop-blur-xl shadow-[0_0_30px_rgba(37,99,235,0.1)]"
          >
            <Zap size={14} className="fill-blue-400" />
            NEXT-GENERATION CLOUD INFRASTRUCTURE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[110px] font-black text-white leading-[0.85] mb-10 tracking-tighter font-montserrat"
          >
            Unleash<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600">
              Supreme<br />
              Performance
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-xl mb-14 leading-relaxed font-black uppercase tracking-tight"
          >
            Experience ultra-low latency nodes powered by <span className="text-white">Ryzen 9 & NVMe Gen4</span>. The ultimate choice for serious communities.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              href="/pricing"
              className="group relative px-12 py-6 rounded-[2rem] bg-blue-600 text-white font-black text-sm uppercase tracking-[0.3em] transition-all hover:bg-blue-700 shadow-[0_0_50px_rgba(37,99,235,0.4)] overflow-hidden flex items-center gap-4 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Deploy Now</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
            <Link
              href="https://discord.gg/56VcDMZbrj"
              target="_blank"
              className="px-12 py-6 rounded-[2rem] bg-white/5 text-white font-black text-sm uppercase tracking-[0.3em] border border-white/10 backdrop-blur-xl transition-all hover:bg-white/10 hover:border-blue-500/50 flex items-center justify-center hover:scale-105 active:scale-95"
            >
              Community
            </Link>
          </div>
        </div>

        {/* Right Side: Massive Calculator - Halix Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full lg:pl-10"
        >
          <div className="absolute inset-0 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10 scale-100 lg:scale-[1.05] origin-right">
            <Calculator />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
