'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, FileText, Video, ExternalLink } from 'lucide-react';

export default function BandwidthCalculator() {
  const [visitors, setVisitors] = useState(1000);
  const [pageSize, setPageSize] = useState(2); // MB
  const [pageViews, setPageViews] = useState(3);
  const [bandwidthNeeded, setBandwidthNeeded] = useState(0);

  useEffect(() => {
    // Formula: Bandwidth = Visitors * Page Size * Page Views
    const total = (visitors * (pageSize / 1024) * pageViews);
    setBandwidthNeeded(parseFloat(total.toFixed(2)));
  }, [visitors, pageSize, pageViews]);

  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-3xl relative overflow-hidden group shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <div className="space-y-10">
          {/* Monthly Visitors */}
          <div className="space-y-4 group/slider">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-white font-bold group-hover/slider:text-purple-400 transition-colors">
                <Users size={18} className="text-purple-500" />
                <span>Monthly Visitors</span>
              </div>
              <span className="text-purple-400 font-black text-lg">{visitors.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="100"
              max="100000"
              step="100"
              value={visitors}
              onChange={(e) => setVisitors(parseInt(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-600 hover:accent-purple-400 transition-all"
            />
          </div>

          {/* Page Size */}
          <div className="space-y-4 group/slider">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-white font-bold group-hover/slider:text-purple-400 transition-colors">
                <FileText size={18} className="text-purple-500" />
                <span>Average Page Size (MB)</span>
              </div>
              <span className="text-purple-400 font-black text-lg">{pageSize} MB</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="20"
              step="0.5"
              value={pageSize}
              onChange={(e) => setPageSize(parseFloat(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-600 hover:accent-purple-400 transition-all"
            />
          </div>

          {/* Page Views per Visitor */}
          <div className="space-y-4 group/slider">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-white font-bold group-hover/slider:text-purple-400 transition-colors">
                <Globe size={18} className="text-purple-500" />
                <span>Page Views per Visitor</span>
              </div>
              <span className="text-purple-400 font-black text-lg">{pageViews}</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={pageViews}
              onChange={(e) => setPageViews(parseInt(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-600 hover:accent-purple-400 transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-center p-8 rounded-[2rem] bg-purple-600/10 border border-purple-500/20 shadow-[0_0_50px_rgba(168,85,247,0.1)] hover:border-purple-500/40 transition-all duration-500 group/total">
          <h4 className="text-gray-500 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Estimated Traffic</h4>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-5xl md:text-7xl font-black text-white group-hover:text-purple-400 transition-colors duration-500">
              {bandwidthNeeded > 1024 ? (bandwidthNeeded / 1024).toFixed(2) : bandwidthNeeded}
            </span>
            <span className="text-gray-500 font-bold text-sm">{bandwidthNeeded > 1024 ? 'TB' : 'GB'}</span>
          </div>
          
          <div className="w-full h-px bg-white/10 mb-8" />
          
          <p className="text-gray-400 text-sm mb-10 leading-relaxed">
            Based on your stats, you need approx <span className="text-white font-bold">{bandwidthNeeded}GB</span> of monthly transfer. All our VPS plans include unmetered or high-limit bandwidth.
          </p>

          <button className="w-full py-5 rounded-xl bg-purple-600 text-white font-black text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:bg-purple-700 transition-all shadow-[0_0_40px_rgba(168,85,247,0.4)]">
            Explore Unmetered VPS
          </button>
        </div>
      </div>
    </div>
  );
}
