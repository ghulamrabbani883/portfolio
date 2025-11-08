import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ghulam Rabbani - Software Engineer Portfolio',
    short_name: 'GR Portfolio',
    description: 'Full-stack MERN engineer with 2.8+ years of experience. Portfolio showcasing projects, skills, and expertise in modern web technologies.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    orientation: 'portrait-primary',
    categories: ['business', 'productivity', 'portfolio'],
    lang: 'en-US',
    dir: 'ltr',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-512.png', 
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      }
    ],
  };
}