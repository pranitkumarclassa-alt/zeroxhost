import { Metadata } from 'next';
import BandwidthClient from './BandwidthClient';

export const metadata: Metadata = {
  title: "Website Bandwidth Calculator | Estimate Data Transfer Needs",
  description: "Free online tool to calculate monthly bandwidth requirements for your website. Plan your hosting needs based on visitors, page size, and engagement.",
  keywords: ["bandwidth calculator", "hosting bandwidth estimator", "data transfer calculator", "website traffic tool", "vps bandwidth needs", "how much bandwidth do I need"],
};

export default function Page() {
  return <BandwidthClient />;
}
