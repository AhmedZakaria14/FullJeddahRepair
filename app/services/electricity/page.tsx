import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneCall, Zap, Shield, PenTool, ChevronLeft } from 'lucide-react';
import { AnimateIn } from '@/components/AnimateIn';
import { articles } from '@/lib/electricity-articles';

export const metadata: Metadata = {
  title: 'أفضل مقاول وصيانة كهرباء بجدة | فني كهربائي منازل',
  description: 'خدمات صيانة وتأسيس الكهرباء بجدة. نقدم أمهر فني كهربائي منازل لإصلاح الأعطال، تمديد الكابلات، وتركيب الإضاءة بأسعار تنافسية. اتصل الآن 0546142922',
};

export default function ElectricityServicePage() {
  return (
    <article className="bg-white">
      {/* Service Hero */}
      <header className="relative bg-slate-900 py-24 md:py-36">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/electrical.jpg" 
            alt="صيانة كهرباء بجدة" 
            fill 
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <AnimateIn>
            <Zap className="mx-auto text-amber-500 mb-6 drop-shadow-md" size={64} />
            <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg">صيانة وتأسيس الكهرباء بجدة</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 drop-shadow-md">فني كهربائي منازل ذو خبرة لجميع أعمال التركيب والصيانة وإصلاح الطوارئ الكهربائية</p>
            <a href="tel:0546142922" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-xl transition-colors shadow-lg hover:shadow-xl">
              <PhoneCall className="mr-2 ml-3" size={24} />
              اتصل بالفني الآن: 0546142922
            </a>
          </AnimateIn>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-20 prose prose-lg md:prose-xl prose-blue">
        <AnimateIn>
          <h2 className="text-3xl font-bold text-slate-900">أهمية اختيار فني كهربائي منازل بجدة محترف</h2>
          <p className="text-gray-700 leading-relaxed">
            إن نظام الكهرباء في المنزل ليس مجرد أسلاك ولمبات؛ بل هو الشريان الأساسي الذي يحافظ على تشغيل كافة الأجهزة المنزلية بأمان وفاعلية. في مدينة حارة صيفاً مثل مدينة جدة، يصبح الاعتماد على المكيفات والأجهزة الكهربائية أمراً حتمياً على مدار الساعة. لذلك، فإن أي خلل في تأسيس الكهرباء قد يؤدي إلى أعطال متكررة ومخاطر حقيقية.
          </p>
          <p className="text-gray-700 leading-relaxed">
            نحن نوفر لك <strong>أمهر فني كهربائي منازل بجدة</strong> مدرب على التعامل مع كافة التعقيدات والتحديات الكهربائية. من تأسيس شبكات الكهرباء للفلل والمباني الجديدة، وصولاً إلى ترميم وصيانة الشبكات القديمة المتهالكة التي تسبب التماسات كهربائية المتكررة.
          </p>

          <div className="bg-slate-50 border-r-4 border-amber-500 p-8 rounded-xl my-10">
            <h3 className="text-2xl font-bold text-slate-900 mt-0 mb-6">خدمات الكهرباء التي نقدمها في صيانة جدة المتكاملة:</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start"><Shield className="text-amber-500 inline-block shrink-0 mt-1 ml-3" size={24} /> <span><strong>تأسيس الكهرباء للمباني الجديدة:</strong> نقوم بأعمال التمديدات وتأسيس الطبالين والعلب بدقة متناهية مطابقة لمواصفات شركة الكهرباء في السعودية.</span></li>
              <li className="flex items-start"><Shield className="text-amber-500 inline-block shrink-0 mt-1 ml-3" size={24} /> <span><strong>إصلاح الالتماسات الكهربائية:</strong> نستخدم أجهزة حديثة لتحديد مكان الالتماس في الجدران وإصلاحه بأسرع وقت دون الحاجة لتكسير عشوائي.</span></li>
              <li className="flex items-start"><Shield className="text-amber-500 inline-block shrink-0 mt-1 ml-3" size={24} /> <span><strong>تركيب الإنارات المتقدمة والليد (LED):</strong> نوفر خدمات تصميم وتركيب الثريات، الإنارة المخفية، وسبوت لايت في الأسقف المستعارة (الجبس بورد).</span></li>
              <li className="flex items-start"><Shield className="text-amber-500 inline-block shrink-0 mt-1 ml-3" size={24} /> <span><strong>صيانة ورفع الأحمال:</strong> توزيع وتوازن الأحمال الكهربائية لمنع نزول القاطع (الفيوز) المتكرر عند تشغيل المكيفات والأجهزة الثقيلة.</span></li>
            </ul>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <Image 
            src="/images/repairman.jpg" 
            alt="فني كهرباء محترف"
            width={800}
            height={450}
            className="rounded-3xl my-12 object-cover shadow-2xl border-4 border-slate-100 h-[450px]"
          />
        </AnimateIn>

        <AnimateIn>
          <h2 className="text-3xl font-bold text-slate-900 mt-12">مشاكل الكهرباء الشائعة في بيوت جدة وكيف نحلها</h2>
          <p className="text-gray-700 leading-relaxed">
            من خلال خبرتنا الواسعة كـ <strong>أفضل مقاول صيانة كهرباء بجدة</strong>، نواجه العديد من المشكلات الشائعة مثل:
          </p>
          <ol className="text-gray-700 space-y-3 marker:text-blue-600 marker:font-bold">
            <li><strong>انقطاع التيار المتكرر:</strong> يحدث غالباً بسبب زيادة التحميل أو قدم الأسلاك، ونحله بإعادة توزيع الأحمال وتغيير القواطع القديمة.</li>
            <li><strong>تماس كهربائي عند نزول المطر:</strong> مشكلة شائعة في فصل الشتاء في أحواش المنازل والملاحق. نعالجها بعمل عوازل مناسبة للأسلاك المكشوفة ومفاتيح التشغيل.</li>
            <li><strong>احتراق المقابس (الأفياش):</strong> بفضل استخدام قطع غير أصلية. نحن نلتزم باستخدام خامات وأفياش أصلية مطابقة لهيئة المواصفات والمقاييس لضمان الأمان.</li>
          </ol>

          <h2 className="text-3xl font-bold text-slate-900 mt-12">لماذا نحن خيارك الأمثل لخدمات الكهرباء بجدة؟</h2>
          <p className="text-gray-700 leading-relaxed mb-12">
            نلتزم بتقديم خدمة سريعة وآمنة. فريقنا يتألف من تقنيين مهرة يخضعون لاختبارات دورية ويدركون أحدث المعايير في تأسيس وصيانة الكهرباء. سواء كان طلبك تركيب لمبة بسيطة، أو تجديد كامل لشبكة الكهرباء، نحن نعامله بنفس مستوى الأهمية لضمان راحتك.
          </p>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-10 rounded-3xl mt-16 text-center shadow-xl text-white">
            <h3 className="text-3xl font-bold mb-4 mt-0 text-white">هل تواجه عطلاً كهربائياً طارئاً؟</h3>
            <p className="mb-8 text-lg font-medium opacity-90">فريقنا متواجد ومستعد لخدمتك في جميع أحياء جدة لضمان أمان عائلتك.</p>
            <a href="https://wa.me/966546142922" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#25D366] text-white px-10 py-4 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-md">
              راسلنا على الواتساب فوراً
            </a>
          </div>
        </AnimateIn>

        {/* Dynamic Electricity Articles Section */}
        <AnimateIn delay={0.4}>
          <div className="mt-24 border-t border-gray-200 pt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">مقالات ونصائح تهمك في الكهرباء</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">تعرف على أهم النصائح الفنية والخطوات الاحترافية لضمان سلامة وكفاءة منزلك عبر مقالات خبرائنا بجدة.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <Link href={`/services/electricity/articles/${article.slug}`} key={index} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="relative h-56 overflow-hidden">
                    <Image 
                      src={article.heroImage} 
                      alt={article.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 bg-amber-500 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
                      صيانة ونقاشات
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{article.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed line-clamp-3">{article.metaDescription}</p>
                    <span className="inline-flex items-center text-blue-600 font-bold group-hover:text-amber-600 transition-colors text-lg pt-4 border-t border-gray-50">
                      <span className="ml-2">اقرأ التفاصيل</span>
                      <ChevronLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </AnimateIn>

      </main>
    </article>
  );
}
