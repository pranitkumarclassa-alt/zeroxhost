'use client';

import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import SubpageHero from '@/components/SubpageHero';
import Pricing from '@/components/Pricing';
import HexiumFeatures from '@/components/HexiumFeatures';
import Footer from '@/components/Footer';
import { Gamepad2, Zap, Shield, Server, MessageSquare, Layers, Globe, Bot, Activity } from 'lucide-react';

const gameMapping: Record<string, { title: string, subtitle: string, icon: any }> = {
  'minecraft': { title: 'Minecraft', subtitle: 'Lag-Free Java & Bedrock', icon: Gamepad2 },
  'ark': { title: 'Ark: Survival', subtitle: 'Evolved Hosting', icon: Zap },
  'team-fortress-2': { title: 'TF2', subtitle: 'High-Tick Servers', icon: Shield },
  'insurgency': { title: 'Insurgency', subtitle: 'Tactical Hosting', icon: Server },
  'csgo': { title: 'CS:GO', subtitle: 'Professional Grade', icon: Zap },
  'mumble': { title: 'Mumble', subtitle: 'Voice Communication', icon: MessageSquare },
  'garrys-mod': { title: 'GMod', subtitle: 'Sandbox Hosting', icon: Layers },
  'hytale': { title: 'Hytale', subtitle: 'Next-Gen Adventure', icon: Globe },
  'gta': { title: 'GTA (FiveM)', subtitle: 'Multiplayer Hosting', icon: Activity },
  'among-us': { title: 'Among Us', subtitle: 'Crewmate Hosting', icon: Bot },
};

export default function GameDynamicPage() {
  const params = useParams();
  const slug = params.slug as string;
  const gameInfo = gameMapping[slug] || { title: slug.charAt(0).toUpperCase() + slug.slice(1), subtitle: 'Game Server Hosting', icon: Gamepad2 };

  return (
    <main className="relative min-h-screen selection:bg-blue-500/30">
      <Navbar />
      
      <div className="relative z-10">
        <SubpageHero 
          category="Game Hosting"
          title={gameInfo.title}
          subtitle={gameInfo.subtitle}
          description={`Experience lightning-fast performance, unbeatable reliability, and 24/7 support for ${gameInfo.title}.`}
          icon={gameInfo.icon}
        />
        
        <HexiumFeatures />
        <Pricing initialCategory="games" hideTabs={true} />
        
        <Footer />
      </div>
    </main>
  );
}
