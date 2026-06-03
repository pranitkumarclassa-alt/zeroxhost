export type ComparisonData = {
  slug: string;
  title: string;
  description: string;
  items: {
    feature: string;
    option1: string;
    option2: string;
    winner?: 1 | 2 | 'tie';
  }[];
  verdict: string;
  faqs?: {
    question: string;
    answer: string;
  }[];
};

export const comparisons: ComparisonData[] = [
  {
    slug: 'linux-vps-vs-windows-vps',
    title: 'Linux VPS vs Windows VPS',
    description: 'Choosing the right operating system for your server is critical. Compare Linux and Windows VPS hosting across performance, cost, and usability.',
    items: [
      { feature: 'Operating System Cost', option1: 'Free (Open Source)', option2: 'Paid (License Required)', winner: 1 },
      { feature: 'Resource Usage', option1: 'Lightweight', option2: 'Heavy (GUI)', winner: 1 },
      { feature: 'Management', option1: 'Command Line (SSH)', option2: 'Remote Desktop (RDP)', winner: 'tie' },
      { feature: 'Security', option1: 'Strong (Unix-based)', option2: 'Vulnerable (Higher target)', winner: 1 },
      { feature: 'Gaming Support', option1: 'Limited (Minecraft, SteamCMD)', option2: 'Extensive (All Windows games)', winner: 2 }
    ],
    verdict: 'Choose Linux for most web applications, databases, and Docker. Choose Windows only if your specific software requires a Windows environment or you are heavily dependent on RDP.',
    faqs: [
      {
        question: 'Is Linux harder to use than Windows?',
        answer: 'Linux has a steeper learning curve as it primarily uses the command line, but it is much more efficient for server management once learned.'
      }
    ]
  },
  {
    slug: 'kvm-vs-lxc',
    title: 'KVM vs LXC Virtualization',
    description: 'Understand the difference between full hardware virtualization (KVM) and container-based virtualization (LXC).',
    items: [
      { feature: 'Virtualization Type', option1: 'Full Hardware', option2: 'OS-level (Container)', winner: 'tie' },
      { feature: 'Isolation', option1: 'Complete Isolation', option2: 'Shared Kernel', winner: 1 },
      { feature: 'Performance', option1: 'Near-native', option2: 'Native (No overhead)', winner: 2 },
      { feature: 'OS Support', option1: 'Any (Linux, Windows, BSD)', option2: 'Linux Only', winner: 1 },
      { feature: 'Resource Allocation', option1: 'Dedicated', option2: 'Shared/Burst', winner: 1 }
    ],
    verdict: 'KVM is the industry standard for production VPS hosting due to its superior isolation and compatibility. LXC is great for lightweight development environments and high-density Linux hosting.',
    faqs: [
      {
        question: 'Which one is better for Docker?',
        answer: 'KVM is generally better for Docker because it allows you to run your own kernel and manage kernel modules freely.'
      }
    ]
  }
];
