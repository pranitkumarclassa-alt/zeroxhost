import { Metadata } from 'next';
import VpsClient from './VpsClient';

export const metadata: Metadata = {
  title: "Cloud VPS Hosting India | NVMe SSD | Root Access | Delhi",
  description: "High-performance Cloud VPS hosting in India. KVM virtualized, full root access, and enterprise NVMe storage in Delhi data center. Deploy your apps in seconds.",
  keywords: ["cloud vps india", "linux vps india", "windows vps india", "cheap vps delhi", "nvme vps india", "kvm vps india", "best vps for developers india"],
};

export default function Page() {
  return <VpsClient />;
}
