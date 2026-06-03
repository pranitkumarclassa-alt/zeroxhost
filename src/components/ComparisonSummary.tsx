import React from 'react';
import { Check, X, Shield, Zap, Cpu, HardDrive } from 'lucide-react';

interface ComparisonSummaryProps {
  title: string;
  items: {
    feature: string;
    us: string;
    them: string;
    better: boolean;
  }[];
}

export default function ComparisonSummary({ title, items }: ComparisonSummaryProps) {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">{title}</h2>
          <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">Why ZeroXHost leads the industry</p>
        </div>

        <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] overflow-hidden backdrop-blur-3xl">
          <div className="grid grid-cols-3 p-8 md:p-12 border-b border-white/5 bg-white/[0.01]">
            <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Infrastructure</div>
            <div className="text-center text-blue-500 font-black uppercase tracking-widest text-xs">ZeroXHost</div>
            <div className="text-center text-gray-500 font-black uppercase tracking-widest text-xs">Standard Hosting</div>
          </div>

          <div className="divide-y divide-white/5">
            {items.map((item, i) => (
              <div key={i} className="grid grid-cols-3 p-8 md:p-12 items-center hover:bg-white/[0.01] transition-colors">
                <div className="text-sm font-bold text-white">{item.feature}</div>
                <div className="text-center flex flex-col items-center gap-2">
                  <span className="text-blue-400 font-black text-xs uppercase tracking-wider">{item.us}</span>
                  <Check size={18} className="text-green-500" />
                </div>
                <div className="text-center flex flex-col items-center gap-2">
                  <span className="text-gray-600 font-bold text-xs uppercase tracking-wider">{item.them}</span>
                  <X size={18} className="text-red-500/50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
