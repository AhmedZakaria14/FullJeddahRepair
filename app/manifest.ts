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
        src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781928647/%D8%B5%D9%8A%D8%A7%D8%AA%D8%A9_%D8%AC%D8%AF%D8%A9_lavi0o.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781928647/%D8%B5%D9%8A%D8%A7%D8%AA%D8%A9_%D8%AC%D8%AF%D8%A9_lavi0o.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
