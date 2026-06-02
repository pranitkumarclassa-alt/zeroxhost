'use client';

import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Pricing from '@/components/Pricing';
import HexiumFeatures from '@/components/HexiumFeatures';
import Footer from '@/components/Footer';
import { Gamepad2, Zap, Shield, Server, MessageSquare, Layers, Globe, Bot, Activity, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const gamesList = [
  { name: 'Minecraft', href: '/games/minecraft', icon: Gamepad2, desc: 'High-tick Java & Bedrock hosting.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFImuEietF5qH0bg0Q6tUBbBXIbkiiYc7TXDy3XFvGk0pmM8k' },
  { name: 'Ark: Survival', href: '/games/ark', icon: Zap, desc: 'Evolved hosting for survivors.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg4W0L1P3uT0aQf4kwp1Q6W2m0Rvcy8hI-V4s' },
  { name: 'TF2', href: '/games/team-fortress-2', icon: Shield, desc: 'Professional Team Fortress 2 nodes.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9wM6N7eFQw1YdDA2U6NfLh7cGHe0aIJnO4g' },
  { name: 'Insurgency', href: '/games/insurgency', icon: Server, desc: 'Tactical servers for real combat.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1v4L3E4aT7qN8kI9J4h6LxG7bW3oYpC6zA' },
  { name: 'CS:GO', href: '/games/csgo', icon: Zap, desc: 'Global Offensive professional nodes.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq9HgT6ZkA2mL8vN4R1Q5h7Rr7BjR4sFsN4' },
  { name: 'Mumble', href: '/games/mumble', icon: MessageSquare, desc: 'Low-latency voice communication.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3kN9QjT2YpM7cC1L2W4h8Jw6ZVf9tBsO3d' },
  { name: 'GMod', href: '/games/garrys-mod', icon: Layers, desc: 'Creative sandbox hosting solutions.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7kQfX9U1FzH3pC5N0L1w6M2ZpVg2tLxO8' },
  { name: 'Hytale', href: '/games/hytale', icon: Globe, desc: 'Next-gen adventure server hosting.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5mV8R1F6ZxC9nB7R3J5h2K4MkE1pYyA2g' },
  { name: 'Among Us', href: '/games/among-us', icon: Bot, desc: 'Crewmate & Impostor game nodes.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7bU3P1E9vF8dC4H2K5h1L6N8mA0pDrV3s' },
  { name: 'GTA (FiveM)', href: '/games/gta', icon: Activity, desc: 'Multiplayer hosting for FiveM.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3kV2R8ZpC7uH4dA5L1f9N7Q0bM6pHyC4j' },
];

export default function GamesPage() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500/30">
      <Navbar />
      
      <div className="relative z-10">
        <SubpageHero 
          category="Premium Gaming"
          title="Choose Your"
          subtitle="Battlefield"
          description="Select from our range of high-performance gaming nodes optimized for zero-lag performance."
          icon={Gamepad2}
        />
        
        <section className="py-24 px-6 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gamesList.map((game, i) => (
                <motion.div
                  key={game.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link 
                    href={game.href}
                    className="group block overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all h-full"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={game.image}
                        alt={`${game.name} banner`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30" />
                      <div className="absolute bottom-4 left-4 rounded-full bg-blue-600/80 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-white">{game.name}</div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <game.icon size={28} className="text-blue-500" />
                        </div>
                        <ArrowRight size={24} className="text-gray-700 group-hover:text-blue-500 group-hover:translate-x-2 transition-all" />
                      </div>
                      <p className="text-gray-500 text-sm font-medium leading-relaxed">{game.desc}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <HexiumFeatures />
        <Pricing initialCategory="games" hideTabs={true} />
        
        <Footer />
      </div>
    </main>
  );
}
