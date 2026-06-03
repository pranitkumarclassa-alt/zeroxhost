import { Metadata } from 'next';
import WebHostingClient from './WebHostingClient';

export const metadata: Metadata = {
  title: "Fast Web Hosting India | cPanel & NVMe | Delhi Servers",
  description: "Experience blazing fast web hosting in India with cPanel, free SSL, and unmetered bandwidth. Optimized for WordPress and business sites on NVMe SSD hardware.",
  keywords: ["web hosting india", "cpanel hosting india", "cheap web hosting delhi", "fast wordpress hosting india", "nvme web hosting", "business hosting india"],
  alternates: {
    canonical: '/webhosting',
  },
};

export default function Page() {
  return <WebHostingClient />;
}
