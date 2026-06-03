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
  },
  {
    slug: 'vps-hosting-mumbai',
    title: 'Low Latency VPS Hosting in Mumbai - Tier-IV Datacenter',
    keyword: 'VPS Hosting Mumbai',
    location: 'Mumbai',
    description: 'Host your applications in the heart of India\'s financial capital. Our Mumbai VPS nodes offer the best peering with major Indian ISPs for unmatched performance.',
    features: ['Mumbai Tier-IV Datacenter', 'Direct ISP Peering', '99.99% Uptime SLA', 'Hardware DDoS Protection'],
    faqs: [
      { question: 'Which datacenter do you use in Mumbai?', answer: 'We operate out of premium Tier-IV facilities in Mumbai, ensuring maximum redundancy and security.' }
    ]
  },
  {
    slug: 'vps-hosting-bangalore',
    title: 'High-Performance VPS Hosting in Bangalore - Tech Hub Nodes',
    keyword: 'VPS Hosting Bangalore',
    location: 'Bangalore',
    description: 'Perfect for startups and developers in India\'s Silicon Valley. Our Bangalore-optimized nodes provide lightning-fast access to local tech ecosystems.',
    features: ['Optimized for Bangalore Latency', 'Developer-First Platform', 'Scalable NVMe Storage', '24/7 Tech Support'],
    faqs: [
      { question: 'Is this better for Bangalore-based startups?', answer: 'Yes, our routing is optimized to provide the lowest latency to users in and around Karnataka.' }
    ]
  },
  {
    slug: 'vps-hosting-kolkata',
    title: 'Cheap VPS Hosting in Kolkata - East India Edge Nodes',
    keyword: 'VPS Hosting Kolkata',
    location: 'Kolkata',
    description: 'Connect with East India and neighboring regions through our Kolkata edge nodes. High-speed VPS hosting with local peering and low latency.',
    features: ['East India Strategic Node', 'Low Latency to neighboring countries', 'DDoS Protection', 'Instant Provisioning'],
    faqs: [
      { question: 'What is the connectivity like in Kolkata?', answer: 'Our Kolkata nodes are peered with major regional ISPs to ensure smooth connectivity across West Bengal and surrounding states.' }
    ]
  },
  {
    slug: 'vps-hosting-hyderabad',
    title: 'Premium VPS Hosting in Hyderabad - Cyberabad Infrastructure',
    keyword: 'VPS Hosting Hyderabad',
    location: 'Hyderabad',
    description: 'Host your business on our high-performance Hyderabad nodes. Located in the heart of Cyberabad, our servers offer unmatched reliability for enterprise applications.',
    features: ['Cyberabad Tech Hub Node', 'Tier-III Facility', 'Redundant Power', 'Advanced Monitoring'],
    faqs: [
      { question: 'Do you offer managed services in Hyderabad?', answer: 'Yes, we provide both managed and unmanaged VPS options in our Hyderabad datacenter.' }
    ]
  },
  {
    slug: 'discord-bot-hosting-india',
    title: 'Fast Discord Bot Hosting India - Node.js & Python Optimized',
    keyword: 'Discord Bot Hosting India',
    location: 'India',
    description: 'Deploy your Discord bots on our low-latency India nodes. Optimized for Discord.js, Discord.py, and JDA with 24/7 uptime and instant setup.',
    features: ['Optimized for Bot Latency', 'Pterodactyl Panel', 'Git Integration', 'Resource Monitoring'],
    faqs: [
      { question: 'Which languages do you support?', answer: 'We support all major languages including Node.js, Python, Java, Go, and Rust through our custom bot containers.' }
    ]
  },
  {
    slug: 'ryzen-vps-india',
    title: 'AMD Ryzen 9 VPS India - Extreme Compute Performance',
    keyword: 'Ryzen VPS India',
    location: 'India',
    description: 'Experience the power of AMD Ryzen 9 7950X processors in India. Perfect for high-tickrate game servers, heavy compilation, and resource-intensive apps.',
    features: ['AMD Ryzen 9 7950X CPUs', '5.7GHz Boost Clock', 'DDR5 Memory', 'Gen4 NVMe Storage'],
    faqs: [
      { question: 'Is the CPU performance dedicated?', answer: 'Yes, our Ryzen VPS plans use high-frequency cores with minimal virtualization overhead for maximum performance.' }
    ]
  }
];
