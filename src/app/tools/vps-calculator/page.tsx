import { Metadata } from 'next';
import VpsCalculatorClient from './VpsCalculatorClient';

export const metadata: Metadata = {
  title: "VPS Cost Calculator | Estimate Your Server Pricing",
  description: "Configure your custom VPS server and get an instant price estimate. Adjust CPU, RAM, and SSD to find the perfect cloud server for your budget.",
  keywords: ["vps cost calculator", "server price estimator", "vps resource calculator", "cloud server pricing india", "cheap vps calculator", "custom vps pricing"],
};

export default function Page() {
  return <VpsCalculatorClient />;
}
