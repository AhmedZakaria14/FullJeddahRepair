import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/lib/electricity-articles';
import { PhoneCall, CalendarCheck, ShieldCheck, Wrench, Zap, ChevronRight } from 'lucide-react';
import { AnimateIn } from '@/components/AnimateIn';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `https://jeddah-maintenance.sa/services/electricity/articles/${slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.heroImage],
    }
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Section */}
      <header className="relative bg-slate-900 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <Image 
            src={article.heroImage} 
            alt={article.title} 
            fill 
            className="object-cover opacity-40 mix-blend-overlay"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center text-white">
          <AnimateIn>
            <div className="mb-6 inline-flex items-center space-x-2 space-x-reverse text-amber-500 font-semibold bg-amber-500/10 px-4 py-2 rounded-full backdrop-blur-sm border border-amber-500/20">
              <Zap size={18} />
              <span>خدمات الكهرباء بجدة</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 drop-shadow-xl leading-tight">
              {article.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              {article.metaDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="tel:0546142922" className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1">
                <PhoneCall size={24} />
                تواصل مع الخبير: 0546142922
              </a>
              <a href="https://wa.me/966546142922" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-1">
                استشارة مجانية واتساب
              </a>
            </div>
          </AnimateIn>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Main Article Content */}
          <main className="lg:w-2/3 bg-white rounded-3xl p-6 md:p-12 shadow-xl border border-gray-100">
            {/* Breadcrumb / Back Link */}
            <nav className="mb-8 border-b border-gray-100 pb-6">
              <Link href="/services/electricity" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                <ChevronRight size={20} className="ml-1" />
                العودة لخدمات الكهرباء
              </Link>
            </nav>

            <div className="prose prose-lg md:prose-xl prose-blue max-w-none text-gray-700 leading-loose">
              {article.contentSections.map((section, idx) => (
                <AnimateIn key={idx} delay={idx * 0.1}>
                  <section id={section.id} className="scroll-mt-32 mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 border-r-4 border-amber-500 pr-4 py-1 bg-slate-50 mb-8 rounded-l-lg block">
                      {section.title}
                    </h2>
                    <div 
                      className="article-content space-y-6"
                      dangerouslySetInnerHTML={{ __html: section.content }} 
                    />
                  </section>
                </AnimateIn>
              ))}
            </div>
            
            {/* Call to action at the bottom of the article */}
            <AnimateIn delay={0.3}>
              <div className="mt-16 bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <Wrench className="mx-auto text-amber-500 mb-6 drop-shadow-md" size={56} />
                  <h3 className="text-3xl font-black mb-4">هل تحتاج إلى فني كهرباء معتمد في جدة؟</h3>
                  <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
                    نحن في صيانة جدة المتكاملة نضمن لك جودة العمل، سرعة الإنجاز، وأسعاراً تنافسية بلا رسوم خفية. خدمة متوفرة على مدار الساعة!
                  </p>
                  <a href="tel:0546142922" className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 px-10 py-4 rounded-xl font-black text-2xl transition-all shadow-lg hover:scale-105">
                    اتصل الآن: 0546142922
                  </a>
                </div>
                {/* Decorative background shapes */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-amber-500 opacity-10 blur-3xl"></div>
              </div>
            </AnimateIn>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-32 space-y-8 z-30">
              {/* Table of Contents Sticky Widget */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3 border-b pb-4">
                <ShieldCheck className="text-amber-500" />
                فهرس المقال
              </h3>
              <ul className="space-y-4">
                {article.toc.map((item, idx) => (
                  <li key={idx}>
                    <a 
                      href={`#${item.id}`} 
                      className="text-gray-600 hover:text-blue-600 font-medium transition-colors flex items-start gap-2 group"
                    >
                      <span className="text-amber-500 font-bold group-hover:translate-x-1 transition-transform">-</span>
                      <span className="leading-snug">{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <PhoneCall size={20} className="text-blue-600" />
                  للخدمة الفورية بجدة:
                </h4>
                <a href="tel:0546142922" className="flex items-center justify-center w-full bg-slate-900 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-600 transition-colors">
                  0546142922
                </a>
              </div>
            </div>
            
            {/* Related Articles Widget */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
               <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3 border-b pb-4">
                <CalendarCheck className="text-amber-500" />
                مقالات ذات صلة
              </h3>
              <div className="space-y-6">
                {articles.filter(a => a.slug !== slug).slice(0, 3).map((related, idx) => (
                  <Link href={`/services/electricity/articles/${related.slug}`} key={idx} className="block group">
                    <div className="flex gap-4 items-center">
                      <div className="w-24 h-24 relative rounded-xl overflow-hidden shrink-0">
                        <Image src={related.heroImage} alt={related.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">{related.title}</h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
