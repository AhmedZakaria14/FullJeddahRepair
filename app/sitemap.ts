import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.jeddahfullrepair.com';
  const lastModified = new Date('2026-09-27');

  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/services/electricity`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/plumbing`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/leak-detection`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/tiling`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/blog/hidden-water-leak-signs-jeddah`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/choose-porcelain-size-color-jeddah`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/electrical-panel-maintenance-jeddah`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/kitchen-drain-unclogging-jeddah`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services/electricity/articles/profile-lighting-jeddah`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/services/electricity/articles/home-electricity-maintenance-jeddah`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/services/electricity/articles/hidden-lighting-installation-jeddah`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/services/electricity/articles/cctv-camera-installation-jeddah`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/services/electricity/articles/indoor-outdoor-lighting-jeddah`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/services/electricity/articles/certified-electrician-jeddah`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
