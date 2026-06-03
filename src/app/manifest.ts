import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ZeroXHost | Premium India Hosting',
    short_name: 'ZeroXHost',
    description: 'High-performance India-based hosting for Game Servers, VPS, and Web Hosting.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#2563eb',
    icons: [
      {
        src: 'https://cdn.discordapp.com/icons/1504088095220568094/2bf6ee2d2f71b5f3c631ad01556207d8.webp?size=192',
        sizes: '192x192',
        type: 'image/webp',
      },
      {
        src: 'https://cdn.discordapp.com/icons/1504088095220568094/2bf6ee2d2f71b5f3c631ad01556207d8.webp?size=512',
        sizes: '512x512',
        type: 'image/webp',
      },
    ],
  }
}
