import type { Metadata } from 'next';
import Image from 'next/image';
import { PhoneCall, Search, Activity } from 'lucide-react';
import { AnimateIn } from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'كشف تسربات المياه بجدة بدون تكسير | أفضل الأجهزة الإلكترونية',
  description: 'نوفر خدمة كشف تسربات المياه بجدة بدون تكسير للحمامات، المسابح والأسطح. نستخدم أجهزة إلكترونية لكشف الخلل الدقيق وتوفير فاتورة المياه المرتفعة. اتصل: 0546142922',
  alternates: {
    canonical: '/services/leak-detection',
  },
};

export default function LeakDetectionServicePage() {
  return (
    <article className="bg-white">
      <header className="relative bg-slate-900 py-24 md:py-36">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/leak.jpg" 
            alt="كشف تسربات المياه بجدة" 
            fill 
            className="object-cover opacity-30"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <AnimateIn>
            <Activity className="mx-auto text-amber-500 mb-6 drop-shadow-md" size={64} />
            <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg">كشف تسربات المياه بجدة بدون تكسير</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 drop-shadow-md">نعتمد على التقنيات الإلكترونية الدقيقة لتحديد مصدر التسريب بكل احترافية حفاظاً على ديكور منزلك.</p>
            <a href="tel:0546142922" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-xl transition-colors shadow-lg hover:shadow-xl">
              <PhoneCall className="mr-2 ml-3" size={24} />
              اطلب كشف تسربات الآن: 0546142922
            </a>
          </AnimateIn>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-20 prose prose-lg md:prose-xl prose-blue">
        <AnimateIn>
          <h2 className="text-3xl font-bold text-slate-900">أهمية كشف تسربات المياه بجدة مبكراً</h2>
          <p className="text-gray-700 leading-relaxed">
            تسرب المياه هو العدو الخفي لأي مبنى. الكثير من سكان جدة يعانون من الارتفاع المفاجئ والغير مبرر في فاتورة المياه الوطنية، وغالباً ما يكون السبب الرئيسي هو وجود تسرب مائي خفي إما في <strong>الخزان الأرضي (البيارة أو خزان المياه)</strong>، أو شبكة المواسير الداخلية للحمامات والمطابخ.
          </p>
          <p className="text-gray-700 leading-relaxed">
            تجاهل هذه المشكلة قد يؤدي إلى عواقب وخيمة مثل تلف أساسات المبنى، ظهور التشققات العميقة، وتساقط الدهانات نتيجة الرطوبة العالية. نحن نقدم خدمة <strong>كشف تسربات المياه بجدة بدون تكسير</strong>، وهي خدمة تعتمد على الصوتيات والترددات لكشف العطل دون تشويه جدران بيتك.
          </p>

          <div className="bg-slate-50 border-r-4 border-amber-500 p-8 rounded-xl my-10">
            <h3 className="text-2xl font-bold text-slate-900 mt-0 mb-6">ما هي الأماكن التي نقوم بفحصها؟</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start"><Search className="text-amber-500 inline-block shrink-0 mt-1 ml-3" size={24} /> <span><strong>كشف خرير المياه في الحمامات:</strong> نفحص شبكات التغذية والمحابس المخفية والصرف باستخدام أجهزة الموجات فوق الصوتية.</span></li>
              <li className="flex items-start"><Search className="text-amber-500 inline-block shrink-0 mt-1 ml-3" size={24} /> <span><strong>تسربات الخزانات الأرضية والعلوية:</strong> الخزان الأرضي يعتبر من أكثر الأماكن تسريباً، نقوم باختباره وعزله إذا لزم الأمر بمواد إيبوكسي معتمدة عالمياً لمنع هدر المياه.</span></li>
              <li className="flex items-start"><Search className="text-amber-500 inline-block shrink-0 mt-1 ml-3" size={24} /> <span><strong>تسربات الأسطح:</strong> تسرب مياه الأمطار أو مياه الخزانات العلوية عبر شقوق السطح. نقوم بفحصها ومعالجتها بالعوازل المائية والحرارية (الفوم).</span></li>
              <li className="flex items-start"><Search className="text-amber-500 inline-block shrink-0 mt-1 ml-3" size={24} /> <span><strong>تسربات المسابح:</strong> فحص خطوط الدفع والشفط لحمامات السباحة في الفلل.</span></li>
            </ul>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <Image 
            src="/images/leak.jpg" 
            alt="أجهزة دقيقة لكشف تسرب المياه"
            width={800}
            height={450}
            className="rounded-3xl my-12 object-cover shadow-2xl border-4 border-slate-100 h-[450px]"
            referrerPolicy="no-referrer"
          />
        </AnimateIn>

        <AnimateIn>
          <h2 className="text-3xl font-bold text-slate-900 mt-12">كيف تعمل أجهزة كشف التسربات بدون تكسير؟</h2>
          <p className="text-gray-700 leading-relaxed">
            الأسلوب التقليدي قديماً كان يعتمد على التخمين والتكسير العشوائي للبلاط، مما يحمل العميل تكاليف باهظة في إعادة الترميم والتبليط. اليوم، جهاز <strong>الاكوافون (Aquaphon)</strong> والكاميرات الحرارية تسمح للفني بسماع ترددات خرير المياه الدقيقة خلف الجدران وتحت البلاط وتحديد النقطة المحددة للخلل بنسبة دقة تصل إلى 98%.
          </p>
          
          <h2 className="text-3xl font-bold text-slate-900 mt-12">أسباب تسرب المياه وكيف نتجنبها</h2>
          <ol className="text-gray-700 space-y-3 marker:text-blue-600 marker:font-bold">
            <li>الاستعانة بسباك غير ماهر أثناء مرحلة العظم والتشطيب.</li>
            <li>استخدام نوعيات رديئة من المواسير التي لا تتحمل ضغط مضخة المياه (الدينمو).</li>
            <li>عدم تركيب عوازل مائية جيدة قبل تبليط الحمامات والأسطح.</li>
          </ol>
          <p className="text-gray-700 leading-relaxed">
            يقوم فريقنا بعد الانتهاء من عملية الكشف بإصدار تقرير فني يوضح المشكلة والحلول المقترحة، ويمكن استخدام هذا التقرير لتقديمه لشركة المياه الوطنية في حال الرغبة في الاعتراض على فاتورة المياه العالية.
          </p>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-10 rounded-3xl mt-16 text-center shadow-xl text-white">
            <h3 className="text-3xl font-bold mb-4 mt-0 text-white">وفر مالك واحمي بيتك اليوم</h3>
            <p className="mb-8 text-lg font-medium opacity-90">لا تدع التسرب البسيط يتحول إلى ترميم مكلف. احجز موعداً لفحص منزلك.</p>
            <a href="https://wa.me/966546142922" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#25D366] text-white px-10 py-4 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-md">
              تواصل عبر واتساب لفحص التسربات
            </a>
          </div>
        </AnimateIn>
      </main>
    </article>
  );
}
