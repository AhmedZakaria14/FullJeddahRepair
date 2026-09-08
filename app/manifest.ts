import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'صيانة جدة المتكاملة - خدمات مقاولات سباكة وكهرباء',
    short_name: 'صيانة جدة',
    description: 'أفضل مقاول وصيانة للمنازل والفلل بجدة. خدمات سباكة، كهرباء، كشف تسربات، وبلاط.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
