'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, HardDrive, Check, ArrowRight } from 'lucide-react';
import { useCurrency } from '@/lib/CurrencyContext';

const plans = [
  {
    name: 'Starter',
    cpu: 2,
    ram: 4,
    ssd: 50,
    price: 499,
    features: ['Standard Support', 'Basic DDoS Protection', '1 Backup Slot']
  },
  {
    name: 'Professional',
    cpu: 4,
    ram: 8,
    ssd: 100,
    price: 899,
    features: ['Priority Support', 'Advanced DDoS Protection', '3 Backup Slots', 'Dedicated IPv4']
  },
  {
    name: 'Enterprise',
    cpu: 8,
    ram: 16,
    ssd: 250,
    price: 1699,
    features: ['24/7 Premium Support', 'Enterprise DDoS Protection', 'Daily Backups', '2 Dedicated IPv4']
  },
  {
    name: 'Titan',
    cpu: 16,
    ram: 32,
    ssd: 500,
    price: 3199,
    features: ['Dedicated Account Manager', 'Custom Networking', 'Unlimited Backups', '4 Dedicated IPv4']
  }
];

export default function VpsCostCalculator() {
  const [selectedPlan, setSelectedPlan] = useState(plans[1]);
  const { formatPrice } = useCurrency();

  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-[3rem] p-8 md:p-16 backdrop-blur-3xl shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h3 className="text-3xl font-black text-white mb-8">Compare VPS Sizes</h3>
          <p className="text-gray-500 font-bold mb-12">Select a plan to see the resource breakdown and features. Find the best cost-to-performance ratio for your needs.</p>
          
          <div className="space-y-4">
            {plans.map((plan) => (
              <button
                key={plan.name}
                onClick={() => setSelectedPlan(plan)}
                className={`w-full p-6 rounded-2xl border transition-all flex items-center justify-between group ${
                  selectedPlan.name === plan.name 
                  ? 'bg-blue-600/10 border-blue-500/50 text-white' 
                  : 'bg-white/5 border-white/5 text-gray-500 hover:border-white/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${selectedPlan.name === plan.name ? 'bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.8)]' : 'bg-gray-700'}`} />
                  <span className="font-black uppercase tracking-widest text-xs">{plan.name}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs font-bold">{plan.ram}GB RAM / {plan.cpu} vCores</span>
                  <ArrowRight size={14} className={`transition-transform ${selectedPlan.name === plan.name ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-blue-600/10 border border-blue-500/20 rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden group/card">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-12">
              <div>
                <h4 className="text-blue-500 font-black uppercase tracking-[0.2em] text-[10px] mb-2">Recommended Plan</h4>
                <h2 className="text-4xl font-black text-white">{selectedPlan.name} VPS</h2>
              </div>
              <div className="text-right">
                <div className="text-3xl font-black text-white">{formatPrice(selectedPlan.price)}</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">per month</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
                <Cpu size={20} className="text-blue-500 mx-auto mb-3" />
                <div className="text-white font-black text-lg">{selectedPlan.cpu}</div>
                <div className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">vCores</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
                <Zap size={20} className="text-blue-500 mx-auto mb-3" />
                <div className="text-white font-black text-lg">{selectedPlan.ram}GB</div>
                <div className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">RAM</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
                <HardDrive size={20} className="text-blue-500 mx-auto mb-3" />
                <div className="text-white font-black text-lg">{selectedPlan.ssd}GB</div>
                <div className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">NVMe</div>
              </div>
            </div>

            <ul className="space-y-4 mb-12">
              {selectedPlan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-400">
                  <Check size={16} className="text-blue-500" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full py-5 rounded-xl bg-blue-600 text-white font-black text-xs uppercase tracking-[0.25em] hover:bg-blue-700 transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)]">
              Select This Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
