'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Megaphone, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="relative z-[110] overflow-hidden bg-transparent border-b border-white/5"
      >
        <div className="relative h-12 md:h-14 flex items-center justify-center px-4 overflow-hidden group">
          {/* Background Banner Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lylvdeeorhjxevbdlqhm.supabase.co/storage/v1/object/public/website%20material/ChatGPT%20Image%20Jun%201,%202026,%2002_52_03%20PM.png"
              alt="Banner"
              fill
              className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105 transition-transform duration-1000"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-transparent to-[#020202]" />
            <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
          </div>

          <div className="relative z-10 flex items-center gap-3 md:gap-6">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-md">
              <Megaphone size={12} className="text-blue-400" />
              <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">New Update</span>
            </div>
            
            <p className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.15em] flex items-center gap-2">
              Next-Gen <span className="text-blue-500">Delhi Nodes</span> are now live. Experience sub-10ms latency!
              <ArrowRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
            </p>

            <button 
              onClick={() => setIsVisible(false)}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-all text-gray-500 hover:text-white"
            >
              <X size={14} />
            </button>
          </div>

          {/* Animated Glow Line */}
          <motion.div 
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 h-[1px] w-1/3 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
