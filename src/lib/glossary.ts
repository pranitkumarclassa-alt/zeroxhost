export type GlossaryItem = {
  term: string;
  definition: string;
  slug: string;
  category: string;
};

export const glossaryItems: GlossaryItem[] = [
  {
    term: 'VPS (Virtual Private Server)',
    definition: 'A virtual machine sold as a service by an Internet hosting service. A VPS runs its own copy of an operating system (OS), and customers may have superuser-level access to that operating system instance, so they can install almost any software that runs on that OS.',
    slug: 'what-is-vps',
    category: 'Hosting'
  },
  {
    term: 'KVM (Kernel-based Virtual Machine)',
    definition: 'A virtualization module in the Linux kernel that allows the kernel to function as a hypervisor. KVM provides full hardware virtualization, giving each VPS its own kernel and isolated resources.',
    slug: 'what-is-kvm',
    category: 'Virtualization'
  },
  {
    term: 'DDoS (Distributed Denial of Service)',
    definition: 'A cyber-attack in which the perpetrator seeks to make a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services of a host connected to the Internet.',
    slug: 'what-is-ddos',
    category: 'Security'
  },
  {
    term: 'NVMe (Non-Volatile Memory express)',
    definition: 'A logical-device interface specification for accessing a computer\'s non-volatile storage media usually attached via PCIe bus. NVMe is significantly faster than traditional SSDs.',
    slug: 'what-is-nvme',
    category: 'Storage'
  },
  {
    term: 'SLA (Service Level Agreement)',
    definition: 'A commitment between a service provider and a client. Particular aspects of the service – quality, availability, responsibilities – are agreed between the service provider and the service user.',
    slug: 'what-is-sla',
    category: 'Business'
  }
];
