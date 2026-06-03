import { Metadata } from 'next';
import MinecraftRamClient from './MinecraftRamClient';

export const metadata: Metadata = {
  title: "Minecraft RAM Calculator | Find the Best RAM for Your Server",
  description: "Use our free Minecraft RAM calculator to estimate exactly how much memory your server needs. Based on players, mods, and view distance for 1.20+ and older versions.",
  keywords: ["minecraft ram calculator", "how much ram for minecraft server", "minecraft server requirements", "server ram estimator", "minecraft hosting india", "modded minecraft ram"],
};

export default function Page() {
  return <MinecraftRamClient />;
}
