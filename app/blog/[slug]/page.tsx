import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';
import { blogPosts, blogSlugs, postsBySlug } from '@/lib/blog-posts';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = postsBySlug[slug];
  if (!post) return {};

  const url = `https://www.jeddahfullrepair.com/blog/${slug}`;
  return {
    title: `${post.title} | صيانة جدة`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      images: [post.image],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = postsBySlug[slug];
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== slug && item.category === post.category)
    .slice(0, 3);

  return (
    <article className="bg-gray-50 min-h-screen pb-20">
      <header className="relative h-[430px] md:h-[520px] flex items-end overflow-hidden bg-slate-900">
        <Image src={post.image} alt={post.title} fill priority className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 pb-14 text-white">
          <Link href="/blog" className="inline-flex items-center gap-2 text-amber-400 font-bold mb-6 hover:text-amber-300">
            <ArrowRight size={18} /> العودة إلى المدونة
          </Link>
          <span className="inline-flex rounded-full bg-amber-500 px-4 py-1.5 text-sm font-bold text-white mb-5">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">{post.title}</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">{post.description}</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 -mt-8 relative z-20 grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8 items-start">
        <main className="bg-white rounded-3xl shadow-xl border border-gray-100 p-7 md:p-12">
          <div
            className="blog-article-content space-y-7 text-lg text-gray-700 leading-9"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <div className="mt-14 grid md:grid-cols-2 gap-4">
            <Link href={post.serviceLink} className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-7 py-5 font-bold text-center transition-colors">
              {post.serviceLabel}
            </Link>
            <a href="tel:0546142922" className="bg-amber-500 hover:bg-amber-600 text-white rounded-2xl px-7 py-5 font-bold flex items-center justify-center gap-2 transition-colors">
              <PhoneCall size={20} /> اتصل الآن: 0546142922
            </a>
          </div>
        </main>

        <aside className="lg:sticky lg:top-24 space-y-6">
          <section className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-black text-slate-900 mb-4">محتويات المقال</h2>
            <nav className="space-y-3">
              {post.toc.slice(0, 14).map((item) => (
                <a key={item.id} href={`#${item.id}`} className="flex items-start gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors leading-6">
                  <CheckCircle2 size={16} className="mt-1 text-amber-500 shrink-0" />
                  <span>{item.title}</span>
                </a>
              ))}
            </nav>
          </section>

          {relatedPosts.length > 0 && (
            <section className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-xl font-black text-slate-900 mb-4">مقالات مرتبطة</h2>
              <div className="space-y-4">
                {relatedPosts.map((related) => (
                  <Link key={related.slug} href={`/blog/${related.slug}`} className="block text-sm font-bold text-gray-700 hover:text-blue-600 leading-7">
                    {related.title}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="bg-blue-700 rounded-3xl shadow-lg p-6 text-white">
            <h2 className="text-xl font-black mb-3">تحتاج فني الآن؟</h2>
            <p className="text-blue-100 leading-7 mb-5">أرسل تفاصيل العطل أو اتصل مباشرة لترتيب زيارة داخل جدة.</p>
            <a href="tel:0546142922" className="block rounded-2xl bg-amber-500 px-5 py-3 text-center font-black hover:bg-amber-600 transition-colors">
              0546142922
            </a>
          </section>
        </aside>
      </div>
    </article>
  );
}
