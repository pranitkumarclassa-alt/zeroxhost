import { Metadata } from 'next';
import { kbArticles } from '@/lib/knowledgebase';
import { comparisons } from '@/lib/comparisons';
import { pseoPages } from '@/lib/pseo';

export async function generateSitemap() {
  const baseUrl = 'https://zeroxhost.space';
  
  const staticRoutes = [
    '',
    '/vps',
    '/vds',
    '/webhosting',
    '/games',
    '/bots',
    '/pricing',
    '/about',
    '/contact',
    '/partnership',
    '/reseller',
    '/blog',
    '/legal',
    '/terms',
    '/refund',
    '/sla',
    '/aup',
    '/tools/vps-calculator',
    '/tools/minecraft-ram-calculator',
    '/tools/bandwidth-calculator',
    '/tools/vps-cost-calculator',
    '/network',
    '/knowledgebase',
    '/glossary',
    '/status',
    '/datacenter',
  ];

  const kbRoutes = kbArticles.map(a => `/knowledgebase/${a.slug}`);
  const comparisonRoutes = comparisons.map(c => `/comparisons/${c.slug}`);
  const pseoRoutes = pseoPages.map(p => `/${p.slug}`);

  const allRoutes = [...staticRoutes, ...kbRoutes, ...comparisonRoutes, ...pseoRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}

export default function sitemap() {
  return generateSitemap();
}
