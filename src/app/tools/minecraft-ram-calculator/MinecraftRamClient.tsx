'use client';

import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import MinecraftRamCalculator from '@/components/MinecraftRamCalculator';
import Footer from '@/components/Footer';
import { Gamepad2 } from 'lucide-react';

export default function MinecraftRamCalculatorPage() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500/30 bg-transparent">
      <Navbar />
      
      <div className="relative z-10">
        <SubpageHero 
          category="Free Tools"
          title="Minecraft RAM"
          subtitle="Calculator"
          description="Find the perfect amount of RAM for your Minecraft server based on player count, mods, and world settings. Stop overpaying for unused resources."
          icon={Gamepad2}
        />
        
        <section className="py-24 px-6 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <MinecraftRamCalculator />
            
            <div className="mt-24 prose prose-invert max-w-4xl mx-auto">
              <h2 className="text-3xl font-black text-white mb-6">How much RAM does a Minecraft server really need?</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Choosing the right amount of RAM is critical for a smooth, lag-free Minecraft experience. If you have too little, your TPS (Ticks Per Second) will drop, causing block lag and player disconnections. If you have too much, you're wasting money.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl">
                  <h3 className="text-xl font-bold text-white mb-4">Vanilla Servers</h3>
                  <p className="text-gray-500 text-sm">
                    Vanilla Minecraft is relatively light. For 1-5 players, 2GB is usually enough. For larger communities of 20+, we recommend 4GB to 6GB to handle exploration and entity counts.
                  </p>
                </div>
                <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl">
                  <h3 className="text-xl font-bold text-white mb-4">Modded & Skyblock</h3>
                  <p className="text-gray-500 text-sm">
                    Modpacks like RLCraft or All The Mods require significantly more memory. We recommend a minimum of 6GB for small modded servers, and 8GB-12GB for heavy modpacks with many players.
                  </p>
                </div>
              </div>

              <div className="mt-16 bg-blue-600/10 border border-blue-500/20 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Pro Tip: CPU Matters More!</h3>
                <p className="text-gray-300 text-sm">
                  While RAM is important, Minecraft is a single-threaded game. This means the **clock speed** of your CPU (like our Ryzen 9 7950X nodes) matters more than having 32GB of slow RAM.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </main>
  );
}
