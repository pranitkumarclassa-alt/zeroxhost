export type PSEOPage = {
  slug: string;
  title: string;
  keyword: string;
  location?: string;
  description: string;
  features: string[];
  faqs: { question: string; answer: string }[];
};

export const pseoPages: PSEOPage[] = [
  // Location-based
  {
    slug: 'vps-hosting-india',
    title: 'High-Performance VPS Hosting in India',
    keyword: 'VPS Hosting India',
    location: 'India',
    description: 'Experience ultra-low latency with our premium VPS hosting in India. Powered by AMD EPYC processors and NVMe storage, our India-based servers are perfect for local businesses and gamers.',
    features: ['Ultra-low latency (10-30ms)', 'Local UPI/NetBanking Support', 'Tier-IV Datacenter in Mumbai', '24/7 Local Support'],
    faqs: [
      { question: 'Where is the datacenter located?', answer: 'Our primary Indian datacenter is located in Mumbai, providing the best connectivity across the subcontinent.' },
      { question: 'Do you support Indian payment methods?', answer: 'Yes, we support UPI, NetBanking, and all major Indian credit/debit cards.' }
    ]
  },
  {
    slug: 'vps-hosting-delhi',
    title: 'Cheap VPS Hosting in Delhi - Low Latency',
    keyword: 'VPS Hosting Delhi',
    location: 'Delhi',
    description: 'Looking for the best VPS in Delhi? Our servers provide lightning-fast connectivity for users in North India. Ideal for high-traffic websites and game servers.',
    features: ['Strategic North India Location', 'DDoS Protection Included', 'Scalable Resources', 'Instant Setup'],
    faqs: [
      { question: 'What is the latency to Delhi?', answer: 'Users in Delhi typically see latencies under 5-10ms to our local nodes.' }
    ]
  },
  // Type-based
  {
    slug: 'cheap-vps-india',
    title: 'Cheapest VPS Hosting in India - Starting at ₹499/mo',
    keyword: 'Cheap VPS India',
    location: 'India',
    description: 'Get the best value for your money with our cheap VPS plans in India. No compromises on performance – even our budget plans feature NVMe storage and high-speed networking.',
    features: ['Affordable Pricing', 'High-Speed NVMe', 'Full Root Access', '99.9% Uptime Guarantee'],
    faqs: [
      { question: 'How can you offer such low prices?', answer: 'We own our hardware and operate with high efficiency, allowing us to pass the savings on to you.' }
    ]
  },
  {
    slug: 'minecraft-hosting-india',
    title: 'Minecraft Server Hosting India - Lag-Free Gaming',
    keyword: 'Minecraft Hosting India',
    location: 'India',
    description: 'Host your Minecraft server in India for the best gaming experience. Our servers are optimized for Paper, Purpur, and Modded Minecraft with Ryzen 9 processors.',
    features: ['Ryzen 9 7950X CPUs', 'Pterodactyl Panel', 'DDoS Protection', 'Instant Plugin Install'],
    faqs: [
      { question: 'Will my players experience lag?', answer: 'With our Mumbai nodes, players in India will experience minimal lag and smooth gameplay.' }
    ]
  }
];
