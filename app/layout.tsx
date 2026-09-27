import type {Metadata} from 'next';
import { Cairo } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';

const cairo = Cairo({ subsets: ['arabic'], weight: ['400', '600', '700', '800'] });
const siteUrl = 'https://www.jeddahfullrepair.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: siteUrl,
    title: 'صيانة ومقاولات جدة المتكاملة',
    description: 'لجميع أعمال الكهرباء، السباكة، كشف التسربات وتركيب البلاط في جدة',
    siteName: 'صيانة جدة المتكاملة',
    images: [{ url: '/logo.png', width: 500, height: 500, alt: 'صيانة جدة المتكاملة' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'صيانة ومقاولات جدة المتكاملة',
    description: 'أفضل مقاول للصيانة المنزلية في جدة. خدمات سباكة، كهرباء، كشف تسربات المياه بدون تكسير، وتركيب السيراميك.',
    images: ['/logo.png'],
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'صيانة جدة المتكاملة',
      image: `${siteUrl}/logo.png`,
      '@id': `${siteUrl}/#business`,
      url: siteUrl,
      telephone: '0546142922',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'جدة',
        addressLocality: 'جدة',
        addressRegion: 'منطقة مكة المكرمة',
        postalCode: '21589',
        addressCountry: 'SA'
      },
      geo: { '@type': 'GeoCoordinates', latitude: 21.4858, longitude: 39.1925 },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '00:00',
        closes: '23:59'
      },
      priceRange: '$$'
    },
    ...[
      ['صيانة وتأسيس كهرباء','/services/electricity','صيانة وتأسيس الكهرباء بجدة','فني كهربائي منازل ذو خبرة لجميع أعمال التركيب والصيانة وإصلاح الطوارئ الكهربائية في مدينة جدة.'],
      ['أعمال سباكة','/services/plumbing','أعمال السباكة المتكاملة بجدة','معلم سباك محترف لتأسيس وصيانة كافة أعطال المياه والصرف الصحي بموثوقية عالية بجدة.'],
      ['كشف تسربات المياه','/services/leak-detection','كشف تسربات المياه بجدة بدون تكسير','نعتمد على التقنيات الإلكترونية الدقيقة لتحديد مصدر التسريب بكل احترافية حفاظاً على ديكور منزلك.'],
      ['تركيب بلاط وسيراميك','/services/tiling','معلم تركيب بلاط وسيراميك بجدة','دقة عالية في القص، وزنية مثالية، ولمسات تشطيب هندسية رائعة لكافة أنواع الأرضيات والجدران.']
    ].map(([serviceType,path,name,description]) => ({
      '@type': 'Service',
      serviceType,
      provider: { '@id': `${siteUrl}/#business` },
      areaServed: { '@type': 'City', name: 'جدة' },
      url: `${siteUrl}${path}`,
      name,
      description
    }))
  ]
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
         <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18257755118" strategy="afterInteractive" />
         <Script id="google-tag-manager" strategy="afterInteractive">{`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'AW-18257755118');
           `}</Script>
      </head>
      <body className={`${cairo.className} min-h-screen flex flex-col bg-gray-50`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
