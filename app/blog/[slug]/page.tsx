import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, PhoneCall } from 'lucide-react';

const posts = {
  'hidden-water-leak-signs-jeddah': {
    title: '5 علامات تدل على وجود تسربات خفية في منزلك',
    description: 'تعرف على أهم علامات تسرب المياه الخفي في المنازل بجدة ومتى تحتاج إلى فني كشف تسربات قبل تفاقم الأضرار.',
    image: '/images/leak.jpg',
    serviceLink: '/services/leak-detection',
    serviceLabel: 'خدمة كشف التسربات',
    sections: [
      ['ارتفاع فاتورة المياه دون سبب واضح', 'إذا لاحظت زيادة مستمرة في الاستهلاك رغم ثبات عادات الاستخدام، فقد يكون هناك تسرب داخل الجدران أو الأرضيات.'],
      ['رطوبة أو بقع على الجدران والأسقف', 'ظهور بقع داكنة أو انتفاخ الدهان من أكثر الإشارات شيوعاً على وجود مياه خلف التشطيبات.'],
      ['رائحة عفن مستمرة', 'الرطوبة المخفية تهيئ بيئة مناسبة للعفن، لذلك لا ينبغي تجاهل الرائحة حتى لو لم يظهر مصدر المياه بوضوح.'],
      ['انخفاض ضغط المياه', 'الهبوط غير المعتاد في الضغط قد يدل على تسرب في أحد الخطوط، خصوصاً إذا ترافق مع أصوات مياه داخل الجدران.'],
      ['تشقق الأرضيات أو انتفاخها', 'قد تتأثر بعض الأرضيات والبلاط من المياه المتسربة أسفلها، وهنا يلزم كشف دقيق قبل أي تكسير عشوائي.'],
    ],
  },
  'choose-porcelain-size-color-jeddah': {
    title: 'كيف تختار مقاس ولون البورسلان المناسب لمجلسك',
    description: 'دليل مبسط لاختيار مقاس ولون البورسلان للمجالس والصالات بما يناسب المساحة والإضاءة والطابع العام للديكور.',
    image: '/images/tiling.jpg',
    serviceLink: '/services/tiling',
    serviceLabel: 'خدمة التبليط والسيراميك',
    sections: [
      ['ابدأ بمساحة المجلس', 'المقاسات الكبيرة تمنح إحساساً بالاتساع في المساحات الواسعة، بينما قد تكون المقاسات المتوسطة أكثر توازناً في الغرف الأصغر.'],
      ['اختيار اللون حسب الإضاءة', 'الألوان الفاتحة تساعد على زيادة الإحساس بالمساحة وتعكس الضوء، بينما الدرجات الداكنة تعطي حضوراً فخماً عند توفر إضاءة جيدة.'],
      ['اهتم بنسبة الهدر', 'كلما زاد مقاس البلاطة زادت أهمية التخطيط المسبق للقصات والزوايا حتى لا ترتفع نسبة الهدر.'],
      ['اجعل الفواصل جزءاً من التصميم', 'اختيار لون الروبة وسُمك الفواصل يؤثران بشكل واضح على النتيجة النهائية، وليس البلاط وحده.'],
    ],
  },
  'electrical-panel-maintenance-jeddah': {
    title: 'أضرار إهمال صيانة طبلون الكهرباء وخطورته',
    description: 'لماذا يحتاج طبلون الكهرباء إلى فحص دوري؟ تعرف على مخاطر القواطع التالفة وارتفاع الحرارة والتحميل الزائد داخل المنزل.',
    image: '/images/home_electricity.jpg',
    serviceLink: '/services/electricity',
    serviceLabel: 'خدمة صيانة الكهرباء',
    sections: [
      ['ارتفاع حرارة القواطع', 'السخونة الزائدة علامة تستحق الفحص الفوري لأنها قد ترتبط بتحميل مرتفع أو توصيل غير محكم.'],
      ['الفصل المتكرر للكهرباء', 'القاطع الذي يفصل باستمرار لا ينبغي تجاوزه أو استبداله بعشوائية، بل يجب معرفة سبب الحمل أو العطل أولاً.'],
      ['رائحة احتراق أو تغير لون الأسلاك', 'هذه من العلامات الجدية التي تستوجب إيقاف المصدر المتأثر والاستعانة بفني مؤهل.'],
      ['الفحص الدوري يقلل الأعطال', 'مراجعة التوصيلات والقواطع وتوازن الأحمال تساعد على اكتشاف المشكلة قبل أن تتحول إلى عطل أكبر.'],
    ],
  },
  'kitchen-drain-unclogging-jeddah': {
    title: 'الطرق الصحيحة لتسليك انسداد المجاري بمطبخك',
    description: 'تعرف على أسباب انسداد صرف المطبخ والطرق الآمنة للتعامل معه ومتى تحتاج إلى سباك لمعالجة المشكلة من جذورها.',
    image: '/images/plumbing.jpg',
    serviceLink: '/services/plumbing',
    serviceLabel: 'خدمة السباكة والمجاري',
    sections: [
      ['الدهون هي السبب الأشهر', 'زيوت الطبخ والدهون تلتصق داخل المواسير بمرور الوقت وتجذب بقايا الطعام حتى يتكون الانسداد.'],
      ['ابدأ بالتنظيف البسيط', 'يمكن تنظيف المصفاة والسيفون إذا كان الوصول إليهما آمناً، مع تجنب خلط المواد الكيميائية المختلفة داخل المواسير.'],
      ['تجنب الحلول العنيفة', 'استخدام أدوات حادة أو ضغط مفرط قد يتسبب في تلف المواسير أو الوصلات بدلاً من حل المشكلة.'],
      ['متى تحتاج سباكاً؟', 'إذا عاد الانسداد سريعاً أو شمل أكثر من مصرف، فالأرجح أن المشكلة أعمق وتحتاج فحصاً وتسليكاً احترافياً.'],
    ],
  },
} as const;

type BlogSlug = keyof typeof posts;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug as BlogSlug];
  if (!post) return {};

  const url = `https://www.jeddahfullrepair.com/blog/${slug}`;
  return {
    title: `${post.title} | صيانة جدة`,
    description: post.description,
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
  const post = posts[slug as BlogSlug];
  if (!post) notFound();

  return (
    <article className="bg-gray-50 min-h-screen pb-20">
      <header className="relative h-[430px] md:h-[520px] flex items-end overflow-hidden bg-slate-900">
        <Image src={post.image} alt={post.title} fill priority className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto w-full px-4 pb-14 text-white">
          <Link href="/blog" className="inline-flex items-center gap-2 text-amber-400 font-bold mb-6 hover:text-amber-300">
            <ArrowRight size={18} /> العودة إلى المدونة
          </Link>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">{post.title}</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">{post.description}</p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <main className="bg-white rounded-3xl shadow-xl border border-gray-100 p-7 md:p-12">
          <div className="space-y-10">
            {post.sections.map(([title, content]) => (
              <section key={title}>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 border-r-4 border-amber-500 pr-4">{title}</h2>
                <p className="text-lg text-gray-700 leading-9">{content}</p>
              </section>
            ))}
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-4">
            <Link href={post.serviceLink} className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-7 py-5 font-bold text-center transition-colors">
              {post.serviceLabel}
            </Link>
            <a href="tel:0546142922" className="bg-amber-500 hover:bg-amber-600 text-white rounded-2xl px-7 py-5 font-bold flex items-center justify-center gap-2 transition-colors">
              <PhoneCall size={20} /> اتصل الآن: 0546142922
            </a>
          </div>
        </main>
      </div>
    </article>
  );
}
