import type {Metadata} from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';

const cairo = Cairo({ subsets: ['arabic'], weight: ['400', '600', '700', '800'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://jeddah-maintenance.sa'),
  title: {
    default: 'صيانة جدة - أفضل مقاول كهرباء وسباكة وكشف تسربات',
    template: '%s | صيانة جدة المتكاملة'
  },
  description: 'أفضل مقاول للصيانة المنزلية في جدة. خدمات سباكة، كهرباء، كشف تسربات المياه بدون تكسير، وتركيب السيراميك والرخام. عمالة محترفة وأسعار تنافسية.',
  keywords: ['صيانة منازل جدة', 'سباك جدة', 'أفضل سباك بجدة', 'صيانة كهرباء بجدة', 'كشف تسربات المياه بجدة بدون تكسير', 'معلم بلاط بجدة', 'رقم سباك بجدة', 'فني كهربائي منازل بجدة'],
  authors: [{name: 'صيانة جدة المتكاملة'}],
  creator: 'صيانة جدة المتكاملة',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781928647/%D8%B5%D9%8A%D8%A7%D8%AA%D8%A9_%D8%AC%D8%AF%D8%A9_lavi0o.png',
    apple: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781928647/%D8%B5%D9%8A%D8%A7%D8%AA%D8%A9_%D8%AC%D8%AF%D8%A9_lavi0o.png',
    shortcut: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781928647/%D8%B5%D9%8A%D8%A7%D8%AA%D8%A9_%D8%AC%D8%AF%D8%A9_lavi0o.png',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://jeddah-maintenance.sa', // Assuming a domain
    title: 'صيانة ومقاولات جدة المتكاملة',
    description: 'لجميع أعمال الكهرباء، السباكة، كشف التسربات وتركيب البلاط في جدة',
    siteName: 'صيانة جدة المتكاملة',
    images: [{
      url: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781928647/%D8%B5%D9%8A%D8%A7%D8%AA%D8%A9_%D8%AC%D8%AF%D8%A9_lavi0o.png',
      width: 500,
      height: 500,
      alt: 'صيانة جدة المتكاملة',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'صيانة ومقاولات جدة المتكاملة',
    description: 'أفضل مقاول للصيانة المنزلية في جدة. خدمات سباكة، كهرباء، كشف تسربات المياه بدون تكسير، وتركيب السيراميك.',
    images: ['https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781928647/%D8%B5%D9%8A%D8%A7%D8%AA%D8%A9_%D8%AC%D8%AF%D8%A9_lavi0o.png'],
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "صيانة جدة المتكاملة",
      "image": "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781928647/%D8%B5%D9%8A%D8%A7%D8%AA%D8%A9_%D8%AC%D8%AF%D8%A9_lavi0o.png",
      "@id": "https://jeddah-maintenance.sa",
      "url": "https://jeddah-maintenance.sa",
      "telephone": "0546142922",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "جدة",
        "addressLocality": "جدة",
        "addressRegion": "منطقة مكة المكرمة",
        "postalCode": "21589",
        "addressCountry": "SA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 21.4858,
        "longitude": 39.1925
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "priceRange": "$$"
    },
    {
      "@type": "Service",
      "serviceType": "صيانة وتأسيس كهرباء",
      "provider": { "@id": "https://jeddah-maintenance.sa" },
      "areaServed": { "@type": "City", "name": "جدة" },
      "url": "https://jeddah-maintenance.sa/services/electricity",
      "name": "صيانة وتأسيس الكهرباء بجدة",
      "description": "فني كهربائي منازل ذو خبرة لجميع أعمال التركيب والصيانة وإصلاح الطوارئ الكهربائية في مدينة جدة."
    },
    {
      "@type": "Service",
      "serviceType": "أعمال سباكة",
      "provider": { "@id": "https://jeddah-maintenance.sa" },
      "areaServed": { "@type": "City", "name": "جدة" },
      "url": "https://jeddah-maintenance.sa/services/plumbing",
      "name": "أعمال السباكة المتكاملة بجدة",
      "description": "معلم سباك محترف لتأسيس وصيانة كافة أعطال المياه والصرف الصحي بموثوقية عالية بجدة."
    },
    {
      "@type": "Service",
      "serviceType": "كشف تسربات المياه",
      "provider": { "@id": "https://jeddah-maintenance.sa" },
      "areaServed": { "@type": "City", "name": "جدة" },
      "url": "https://jeddah-maintenance.sa/services/leak-detection",
      "name": "كشف تسربات المياه بجدة بدون تكسير",
      "description": "نعتمد على التقنيات الإلكترونية الدقيقة لتحديد مصدر التسريب بكل احترافية حفاظاً على ديكور منزلك."
    },
    {
      "@type": "Service",
      "serviceType": "تركيب بلاط وسيراميك",
      "provider": { "@id": "https://jeddah-maintenance.sa" },
      "areaServed": { "@type": "City", "name": "جدة" },
      "url": "https://jeddah-maintenance.sa/services/tiling",
      "name": "معلم تركيب بلاط وسيراميك بجدة",
      "description": "دقة عالية في القص، وزنية مثالية، ولمسات تشطيب هندسية رائعة لكافة أنواع الأرضيات والجدران."
    }
  ]
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
         <script 
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
         />
      </head>
      <body className={`${cairo.className} min-h-screen flex flex-col bg-gray-50`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
