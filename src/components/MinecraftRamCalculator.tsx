'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Users, Layers, Zap, ShoppingCart } from 'lucide-react';
import { useCurrency } from '@/lib/CurrencyContext';

export default function MinecraftRamCalculator() {
  const [players, setPlayers] = useState(10);
  const [mods, setMods] = useState(0);
  const [viewDistance, setViewDistance] = useState(10);
  const [recommendedRam, setRecommendedRam] = useState(4);
  const { formatPrice } = useCurrency();

  useEffect(() => {
    // Basic formula for Minecraft RAM recommendation
    // Base: 2GB
    // Players: 100MB per player
    // Mods: 50MB per mod
    // View Distance: Significant impact above 10
    
    let ram = 2; // Base RAM
    ram += (players * 0.1); // 100MB per player
    ram += (mods * 0.05); // 50MB per mod
    
    if (viewDistance > 10) {
      ram += (viewDistance - 10) * 0.5;
    }

    // Round up to nearest GB
    setRecommendedRam(Math.ceil(ram));
  }, [players, mods, viewDistance]);

  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-3xl relative overflow-hidden group shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <div className="space-y-10">
          {/* Players */}
          <div className="space-y-4 group/slider">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-white font-bold group-hover/slider:text-green-400 transition-colors">
                <Users size={18} className="text-green-500" />
                <span>Concurrent Players</span>
              </div>
              <span className="text-green-400 font-black text-lg">{players}</span>
            </div>
            <input
              type="range"
              min="1"
              max="200"
              value={players}
              onChange={(e) => setPlayers(parseInt(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-green-600 hover:accent-green-400 transition-all"
            />
          </div>

          {/* Mods */}
          <div className="space-y-4 group/slider">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-white font-bold group-hover/slider:text-green-400 transition-colors">
                <Layers size={18} className="text-green-500" />
                <span>Number of Mods/Plugins</span>
              </div>
              <span className="text-green-400 font-black text-lg">{mods}</span>
            </div>
            <input
              type="range"
              min="0"
              max="300"
              value={mods}
              onChange={(e) => setMods(parseInt(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-green-600 hover:accent-green-400 transition-all"
            />
          </div>

          {/* View Distance */}
          <div className="space-y-4 group/slider">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-white font-bold group-hover/slider:text-green-400 transition-colors">
                <Zap size={18} className="text-green-500" />
                <span>View Distance (Chunks)</span>
              </div>
              <span className="text-green-400 font-black text-lg">{viewDistance}</span>
            </div>
            <input
              type="range"
              min="4"
              max="32"
              value={viewDistance}
              onChange={(e) => setViewDistance(parseInt(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-green-600 hover:accent-green-400 transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-center p-8 rounded-[2rem] bg-green-600/10 border border-green-500/20 shadow-[0_0_50px_rgba(34,197,94,0.1)] hover:border-green-500/40 transition-all duration-500 group/total">
          <h4 className="text-gray-500 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Recommended Plan</h4>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-5xl md:text-7xl font-black text-white group-hover/total:text-green-400 transition-colors duration-500">
              {recommendedRam}GB
            </span>
            <span className="text-gray-500 font-bold text-sm">RAM</span>
          </div>
          
          <div className="w-full h-px bg-white/10 mb-8" />
          
          <ul className="text-left w-full space-y-4 mb-10">
            {[
              'Optimized Java Flags',
              'NVMe Gen4 Storage Included',
              'Ryzen 9 7950X Performance'
            ].map((item, i) => (
              <li key={i} className="text-gray-400 text-[13px] font-bold flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                {item}
              </li>
            ))}
          </ul>

          <button className="w-full py-5 rounded-xl bg-green-600 text-white font-black text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:bg-green-700 transition-all shadow-[0_0_40px_rgba(34,197,94,0.4)]">
            <ShoppingCart size={16} />
            Get This Plan
          </button>
        </div>
      </div>
    </div>
  );
}
