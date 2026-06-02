import { Metadata } from 'next';
import VdsPage from './VdsClient';

export const metadata: Metadata = {
  title: "Premium VDS Hosting India | Dedicated Resources | Delhi Node",
  description: "High-performance Virtual Dedicated Servers (VDS) in India. 100% isolated CPU cores, NVMe storage, and root access in Delhi. Perfect for high-traffic apps and databases.",
  keywords: ["vds hosting india", "virtual dedicated server india", "dedicated vps india", "delhi vds", "high performance vds", "bare metal vds india"],
};

export default function Page() {
  return <VdsPage />;
}
