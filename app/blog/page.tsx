import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { AnimateIn } from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'مدونة نصائح الصيانة المنزلية | صيانة جدة',
  description: 'مقالات ونصائح هامة حول كيفية الحفاظ على سباكة وكهرباء منزلك بجدة، وطرق الوقاية من تسربات المياه واختيار أفضل أنواع البلاط.',
};

const blogPosts = [
  {
    title: '5 علامات تدل على وجود تسربات خفية في منزلك',
    excerpt: 'تجاهل علامات تسرب المياه قد يؤدي لخسائر مبكرة في بنية المنزل وارتفاع الفواتير. تعرف على أبرز العلامات التي تتطلب تدخل فني فوري بجدة.',
    category: 'كشف تسربات',
    image: '/images/leak.jpg',
    link: '#' // Mock link
  },
  {
    title: 'كيف تختار مقاس ولون البورسلان المناسب لمجلسك',
    excerpt: 'نصائح من معلم بلاط بجدة حول كيفية اختيار الأرضية الأنسب بناءً على مساحة الغرفة واللون السائد لإعطاء شعور بالاتساع والرفاهية.',
    category: 'تبليط وسيراميك',
    image: '/images/tiling.jpg',
    link: '#' // Mock link
  },
  {
    title: 'أضرار إهمال صيانة طبلون الكهرباء وخطورته',
    excerpt: 'طبلون الكهرباء هو القلب النابض في للمنزل. نشرح لك لماذا يجب إجراء فحص دوري للقواطع للتأكد من عدم وجود التماسات مفاجئة.',
    category: 'صيانة كهرباء',
    image: '/images/home_electricity.jpg',
    link: '#' // Mock link
  },
  {
    title: 'الطرق الصحيحة لتسليك انسداد المجاري بمطبخك',
    excerpt: 'الدهون المتراكمة تؤدي لانسداد أنابيب المطبخ. اقرأ عن الطرق الطبيعية والاحترافية لتسليك البالوعة وكيف يساعدك السباك في حلها جذرياً.',
    category: 'سباكة ومجاري',
    image: '/images/plumbing.jpg',
    link: '#' // Mock link
  }
];

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimateIn>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 drop-shadow-sm">نصائح ومقالات الصيانة</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              مجموعة من الإرشادات القيمة للحفاظ على أمان وجمال بيتك من خبراء الصيانة في جدة.
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {blogPosts.map((post, index) => (
            <AnimateIn key={index} delay={index * 0.1}>
              <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col sm:flex-row h-full group">
                <div className="sm:w-2/5 relative h-64 sm:h-auto overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-md z-10">
                    {post.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent sm:hidden"></div>
                </div>
                <div className="p-8 sm:w-3/5 flex flex-col justify-center flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{post.title}</h2>
                  <p className="text-gray-600 mb-8 flex-grow leading-relaxed">{post.excerpt}</p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-blue-600 font-bold hover:text-amber-600 transition-colors cursor-pointer text-lg">
                      <span className="ml-2">اقرأ المقال كاملاً</span>
                      <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
        
        <AnimateIn delay={0.4}>
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">هل لديك استفسار فني خاص بمنزلك؟</h3>
              <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">لا تتردد في استشارة فريقنا الفني المتخصص في جدة مجاناً عبر الهاتف المباشر.</p>
              <a href="tel:0546142922" className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-xl">
                اتصل بالخبير الآن: 0546142922
              </a>
            </div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-5"></div>
          </div>
        </AnimateIn>
      </div>
    </div>
  );
}
