export type KBCategory = 'Getting Started' | 'Security & DDoS' | 'Game Server Guides' | 'VPS/VDS Management' | 'Web Hosting' | 'Discord Bot Hosting';

export type KBArticle = {
  slug: string;
  title: string;
  category: KBCategory;
  excerpt: string;
  readTime: string;
  lastUpdated: string;
  topics: string[];
  content: {
    heading: string;
    body: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  relatedSlugs?: string[];
  author?: {
    name: string;
    role: string;
    image?: string;
  };
};

export const kbCategories: { name: KBCategory; icon: string; desc: string }[] = [
  { name: 'Getting Started', icon: 'Server', desc: 'Everything you need to know to launch your first server.' },
  { name: 'Security & DDoS', icon: 'Shield', desc: 'Protecting your data and mitigating network attacks.' },
  { name: 'Game Server Guides', icon: 'Gamepad2', desc: 'Configuration tutorials for Minecraft, FiveM, and more.' },
  { name: 'VPS/VDS Management', icon: 'Cpu', desc: 'Advanced Linux administration and root access guides.' },
  { name: 'Web Hosting', icon: 'Globe', desc: 'cPanel tutorials, domain management, and SSL setup.' },
  { name: 'Discord Bot Hosting', icon: 'Bot', desc: 'Deploying Node.js, Python, and Java bots seamlessly.' },
];

export const kbArticles: KBArticle[] = [
  {
    slug: 'how-to-install-docker-on-ubuntu',
    title: 'How to Install Docker on Ubuntu 22.04/24.04',
    category: 'VPS/VDS Management',
    excerpt: 'Step-by-step guide to installing Docker and Docker Compose on your Ubuntu VPS.',
    readTime: '5 min read',
    lastUpdated: '2026-06-03',
    topics: ['Installation', 'Docker', 'Ubuntu', 'Containers'],
    content: [
      {
        heading: 'Prerequisites',
        body: 'Before starting, ensure you have a VPS running Ubuntu and root or sudo access. Update your system packages first: sudo apt update && sudo apt upgrade -y'
      },
      {
        heading: 'Installing Docker',
        body: 'Install the necessary dependencies, add the Docker GPG key, and then install the docker-ce package. Once installed, verify it with: sudo docker run hello-world'
      },
      {
        heading: 'Installing Docker Compose',
        body: 'Docker Compose allows you to define and run multi-container applications. Install it using the official repository to get the latest version.'
      }
    ],
    faqs: [
      {
        question: 'Does Docker work on all VPS plans?',
        answer: 'Yes, Docker works on all our KVM VPS plans. It is not recommended for LXC containers due to kernel limitations.'
      }
    ],
    relatedSlugs: ['how-to-secure-ssh-access'],
    author: {
      name: 'Akshit Kanswal',
      role: 'Head of Infrastructure'
    }
  },
  {
    slug: 'how-to-secure-ssh-access',
    title: 'How to Secure SSH Access on Linux',
    category: 'Security & DDoS',
    excerpt: 'Learn the best practices for hardening your SSH configuration and preventing unauthorized access.',
    readTime: '8 min read',
    lastUpdated: '2026-06-03',
    topics: ['Security', 'SSH', 'Linux', 'Hardening'],
    content: [
      {
        heading: 'Change Default SSH Port',
        body: 'The default port 22 is a target for automated bots. Changing it to a custom port (e.g., 2222) can reduce the number of failed login attempts in your logs.'
      },
      {
        heading: 'Disable Password Authentication',
        body: 'Using SSH keys is significantly more secure than passwords. Once your keys are set up, disable password login in /etc/ssh/sshd_config.'
      }
    ],
    relatedSlugs: ['how-to-install-docker-on-ubuntu'],
    author: {
      name: 'Harshvardhan S.',
      role: 'Chief Security Officer'
    }
  }
  // More articles can be added here
];
