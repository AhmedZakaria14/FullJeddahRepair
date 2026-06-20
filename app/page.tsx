import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Clock, CheckCircle2, ChevronLeft } from 'lucide-react';
import { AnimateIn } from '@/components/AnimateIn';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'صيانة جدة - أفضل مقاول كهرباء وسباكة وكشف تسربات',
  description: 'أفضل مقاول للصيانة المنزلية في جدة. خدمات سباكة، كهرباء، كشف تسربات المياه بدون تكسير، وتركيب السيراميك والرخام.',
  alternates: {
    canonical: '/',
  },
};

const services = [
  {
    title: 'صيانة وتأسيس الكهرباء',
    description: 'إصلاح جميع الأعطال، تمديد وتأسيس، وتركيب الإنارة. فني كهربائي منازل بجدة محترف.',
    link: '/services/electricity',
    image: '/images/home_electricity.jpg',
    alt: 'كهربائي منازل بجدة لتأسيس وصيانة الكهرباء'
  },
  {
    title: 'أعمال السباكة المتكاملة',
    description: 'تسليك مجاري، إصلاح تسربات، وتركيب أطقم الحمامات والمطابخ. أفضل سباك بجدة.',
    link: '/services/plumbing',
    image: '/images/plumbing.jpg',
    alt: 'سباك بجدة لأعمال السباكة وتأسيس المواسير'
  },
  {
    title: 'كشف تسربات المياه',
    description: 'نستخدم أحدث الأجهزة الإلكترونية لكشف تسربات المياه بجدة بدون تكسير للحمامات والأسطح.',
    link: '/services/leak-detection',
    image: '/images/leak.jpg',
    alt: 'كشف تسربات المياه بجدة بدون تكسير'
  },
  {
    title: 'تركيب البلاط والسيراميك',
    description: 'ترميم وتجديد وتثبيت الأرضيات، بورسلان، رخام، وسيراميك. معلم بلاط بجدة بخبرة طويلة.',
    link: '/services/tiling',
    image: '/images/tiling.jpg',
    alt: 'معلم تركيب بلاط وسيراميك بجدة'
  }
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero.jpg" 
            alt="صيانة عامة للمنازل في جدة" 
            fill 
            className="object-cover opacity-30"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-40 flex flex-col items-center text-center">
          <AnimateIn>
            <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight drop-shadow-lg">
              خبراء الصيانة المنزلية في <span className="text-amber-500">جدة</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl text-gray-200 drop-shadow-md">
              خدمات موثوقة وسريعة في السباكة، الكهرباء، كشف التسربات وتركيب البلاط بعمالة محترفة وضمان على العمل.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.4} className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-lg mx-auto">
            <a href="tel:0546142922" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-xl text-center transition-all shadow-lg hover:shadow-xl w-full">
              اتصل الآن 0546142922
            </a>
            <a href="https://wa.me/966546142922" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20b958] text-white px-8 py-4 rounded-xl font-bold text-xl text-center transition-all shadow-lg hover:shadow-xl w-full">
              اطلب عبر واتساب
            </a>
          </AnimateIn>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimateIn>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">خدماتنا في جدة</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-xl">نقدم حلولاً متكاملة لكل ما يحتاجه منزلك بأعلى معايير الجودة.</p>
            </AnimateIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimateIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.alt} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow text-lg leading-relaxed">{service.description}</p>
                    <Link href={service.link} className="inline-flex items-center text-blue-600 font-bold hover:text-amber-600 transition-colors text-lg">
                      <span className="ml-2">اعرف المزيد</span>
                      <ChevronLeft size={20} />
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimateIn>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">لماذا نحن الخيار الأفضل بجدة؟</h2>
                <p className="text-gray-600 mb-10 text-xl leading-relaxed">
                  خبرتنا الطويلة في سوق الصيانة والمقاولات في المنطقة الغربية وتحديداً في جدة، تجعلنا الخيار الأول لسكان المدينة لحل مشاكل الكهرباء والسباكة بسرعة واحترافية.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-amber-100 p-4 rounded-xl text-amber-600 ml-6">
                      <Clock size={32} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">سرعة الاستجابة</h4>
                      <p className="text-gray-600 text-lg">نصلك أينما كنت في أحياء جدة في أسرع وقت للتعامل مع الحالات الطارئة.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 p-4 rounded-xl text-blue-600 ml-6">
                      <ShieldCheck size={32} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">عمالة محترفة وموثوقة</h4>
                      <p className="text-gray-600 text-lg">فريق فني متخصص ومدرّب على أحدث المعدات.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-green-100 p-4 rounded-xl text-green-600 ml-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">أسعار تنافسية وضمان</h4>
                      <p className="text-gray-600 text-lg">نقدم أسعاراً شفافة ومدروسة، مع ضمان جودة العمل المنجز.</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>
            
            <AnimateIn delay={0.2} className="relative h-[500px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="/images/repairman.jpg" 
                alt="فني صيانة محترف بجدة"
                fill
                className="object-cover"
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* SEO Long Form Text Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <AnimateIn className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg md:prose-xl prose-blue text-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">خدمات الصيانة الشاملة للمنازل والفلل بجدة</h2>
          <p>
            تعتبر صيانة المنازل من الضروريات التي لا غنى عنها لضمان سلامة وراحة أسرتك. نحن في <strong>صيانة جدة المتكاملة</strong> نفخر بتقديم مجموعة شاملة من خدمات الصيانة المنزلية التي تلبي احتياجات جميع الأحياء السكنية والتجارية في مدينة جدة.
          </p>
          <p>
            سواء كنت تبحث عن <strong>أفضل سباك بجدة</strong> لحل مشكلة تسرب مفاجئ في الحمام، أو تحتاج إلى <strong>صيانة كهرباء بجدة</strong> لمعالجة انقطاع التيار الكهربائي أو تأسيس إضاءة منزلك الجديد، فإن فريقنا الفني مجهز بالكامل للتعامل مع كافة الظروف.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">كشف تسربات المياه بجدة بدون تكسير</h3>
          <p>
            ارتفاع فاتورة المياه والرطوبة في الجدران هي علامات واضحة لوجود تسرب. نستخدم أحدث التقنيات لـ <strong>كشف تسربات المياه بجدة بدون تكسير</strong>، مما يوفر عليك الكثير من المال والجهد والوقت ويحمي المظهر الجمالي للحوش أو الخزان الأرضي.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">معلم بلاط وسيراميك محترف</h3>
          <p>
            إذا كنت تخطط لتجديد أرضيات منزلك أو تركيب الحوش، نوفر لك <strong>معلم بلاط بجدة</strong> متخصص في تركيب كافة أنواع البورسلان، السيراميك، والرخام بدقة عالية ووزنية ممتازة تضمن بقاء البلاط ثابتاً لسنوات طويلة.
          </p>
          <div className="mt-12 bg-white shadow-lg p-8 rounded-2xl border border-gray-100 text-center">
            <p className="text-2xl font-bold text-gray-900 mb-4">نحن في خدمتك دائمًا</p>
            <p className="text-lg text-gray-600 mb-6">اتصل بنا الآن لنصلك في أسرع وقت. نضمن لك جودة العمل، الدقة في المواعيد، والأمانة المطلقة.</p>
            <a href="tel:0546142922" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-xl transition-colors shadow-md hover:shadow-lg">
              0546142922
            </a>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
