import { Metadata } from 'next';

export async function generateSitemap() {
  const baseUrl = 'https://zeroxhost.space';
  
  const routes = [
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
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}

export default function sitemap() {
  return generateSitemap();
}
