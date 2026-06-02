import { Metadata } from 'next';
import GamesClient from './GamesClient';

export const metadata: Metadata = {
  title: "Premium Game Server Hosting India | Low Latency Gaming Nodes",
  description: "Lag-free game server hosting in India. Optimized for Minecraft, FiveM, Ark, CS:GO, and more. Powered by Ryzen 9 CPUs and NVMe storage for peak performance.",
  keywords: ["game hosting india", "minecraft hosting india", "fivem server hosting india", "ark survival hosting india", "csgo hosting india", "best game servers india"],
};

export default function Page() {
  return <GamesClient />;
}
