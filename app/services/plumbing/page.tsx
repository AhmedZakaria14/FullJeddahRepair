import type { Metadata } from 'next';
import Image from 'next/image';
import { PhoneCall, Wrench, Droplet, ShieldCheck } from 'lucide-react';
import { AnimateIn } from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'أفضل سباك بجدة | صيانة سباكة ومجاري وصرف صحي',
  description: 'هل تبحث عن أفضل سباك بجدة؟ نقدم لك خدمات السباكة المنزلية، تسليك المجاري، صيانة المواسير، وتركيب أطقم الحمامات والمطابخ بأعلى جودة. تواصل مع سباك جدة: 0546142922',
  alternates: {
    canonical: '/services/plumbing',
  },
};

export default function PlumbingServicePage() {
  return (
    <article className="bg-white">
      <header className="relative bg-slate-900 py-24 md:py-36">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/plumbing.jpg" 
            alt="سباك ممتاز بجدة" 
            fill 
            className="object-cover opacity-30"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <AnimateIn>
            <Droplet className="mx-auto text-amber-500 mb-6 drop-shadow-md" size={64} />
            <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg">أعمال السباكة المتكاملة بجدة</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 drop-shadow-md">معلم سباك محترف لتأسيس وصيانة كافة أعطال المياه والصرف الصحي بموثوقية عالية.</p>
            <a href="tel:0546142922" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-xl transition-colors shadow-lg hover:shadow-xl">
              <PhoneCall className="mr-2 ml-3" size={24} />
              اتصل بسباك متخصص: 0546142922
            </a>
          </AnimateIn>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-20 prose prose-lg md:prose-xl prose-blue">
        <AnimateIn>
          <h2 className="text-3xl font-bold text-slate-900">أفضل سباك بجدة لجميع الخدمات المنزلية</h2>
          <p className="text-gray-700 leading-relaxed">
            نظام السباكة هو من أكثر الأنظمة حساسية في أي مبنى. أي تسريب صغير أو انسداد في المجاري قد يتحول إلى كارثة تؤثر على بنية المنزل وأثاثه، خاصة مع الرطوبة العالية في مدينة جدة. لهذا السبب يجب عليك الاستعانة بـ <strong>سباك بجدة</strong> ذو كفاءة وأمانة لحل هذه المشكلات من الجذور.
          </p>
          <p className="text-gray-700 leading-relaxed">
            لدينا فريق من الفنيين المتخصصين في تأسيس وتشطيب وصيانة أعمال السباكة للفلل والعمائر والشقق. نستخدم أفضل الخامات من المواسير الحرارية والمواد العازلة التي تضمن عدم تآكلها أو تسريبها مع مرور السنوات.
          </p>

          <div className="bg-slate-50 border-r-4 border-amber-500 p-8 rounded-xl my-10">
            <h3 className="text-2xl font-bold text-slate-900 mt-0 mb-6">خدمات السباكة التي نوفرها عبر فريقنا:</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start"><Wrench className="text-amber-500 inline-block shrink-0 mt-1 ml-3" size={24} /> <span><strong>تأسيس السباكة من الصفر:</strong> نقوم بأعمال تأسيس السباكة باستخدام المواسير الحرارية (الأخضر)، مع إعطاء ضمان على التنفيذ والاختبار قبل التبليط.</span></li>
              <li className="flex items-start"><Wrench className="text-amber-500 inline-block shrink-0 mt-1 ml-3" size={24} /> <span><strong>تسليك المجاري والبيارات:</strong> معالجة انسداد البلاعات و غرف التفتيش (البيارة) في الحوش أو المطابخ بأجهزة الشفط المتقدمة والضغط (الكمبروسر).</span></li>
              <li className="flex items-start"><Wrench className="text-amber-500 inline-block shrink-0 mt-1 ml-3" size={24} /> <span><strong>تركيب وصيانة أطقم الحمامات والمطابخ:</strong> تركيب الكراسي الإفرنجية، المغاسل الرخامية الفاخرة، الدش المخفي، والخلاطات بوزنية ممتازة خالية من الخرابات.</span></li>
              <li className="flex items-start"><Wrench className="text-amber-500 inline-block shrink-0 mt-1 ml-3" size={24} /> <span><strong>غسيل وصيانة الخزانات:</strong> تنظيف الخزان الأرضي والعلوي وإصلاح العوامات التالفة لضمان توفر المياه النظيفة باستمرار وعدم تسريبها.</span></li>
            </ul>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <Image 
            src="/images/plumbing.jpg" 
            alt="تشطيب حمامات بجدة"
            width={800}
            height={450}
            className="rounded-3xl my-12 object-cover shadow-2xl border-4 border-slate-100 h-[450px]"
            referrerPolicy="no-referrer"
          />
        </AnimateIn>

        <AnimateIn>
          <h2 className="text-3xl font-bold text-slate-900 mt-12">متى تحتاج إلى استدعاء رقم سباك بجدة؟</h2>
          <p className="text-gray-700 leading-relaxed">
            إذا لاحظت أياً من العلامات التالية، فلا تتردد في الاتصال بنا:
          </p>
          <ol className="text-gray-700 space-y-3 marker:text-blue-600 marker:font-bold">
            <li>ظهور بقع رطوبة أو عفن على جدران الحمام الملاصقة لغرفة النوم.</li>
            <li>بطء في تصريف المياه من الأحواض بشكل ملحوظ.</li>
            <li>صوت تسرب أو تقطير مستمر من السيفون (صندوق الطرد).</li>
            <li>تغير في لون أو رائحة المياه القادمة من الخزان نتيجة تلوثه أو تلف المواسير القديمة (مواسير الحديد أو البي في سي القديمة).</li>
          </ol>

          <h2 className="text-3xl font-bold text-slate-900 mt-12">التميز في خدمات أعمال السباكة</h2>
          <p className="text-gray-700 leading-relaxed mb-12">
            ما يميزنا هو التزامنا بالمواعيد واحترام خصوصية المنازل. يقوم سباكونا بارتداء ملابس لائقة وتنظيف مكان العمل بعد الانتهاء من الصيانة. نحن نؤمن أن <strong>أفضل سباك بجدة</strong> ليس فقط من يصلح العطل، بل من ينصح العميل بكيفية تجنبه في المستقبل ويقدم أسعاراً معقولة خالية من الاستغلال.
          </p>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-10 rounded-3xl mt-16 text-center shadow-xl text-white">
            <h3 className="text-3xl font-bold mb-4 mt-0 text-white">هل تحتاج لحل سريع لمشكلة سباكة؟</h3>
            <p className="mb-8 text-lg font-medium opacity-90">لا تدع مشكلة السباكة تتفاقم وتؤثر على راحة بيتك. نحن هنا للمساعدة.</p>
            <a href="tel:0546142922" className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-md">
              تحدث معنا مباشرة
            </a>
          </div>
        </AnimateIn>
      </main>
    </article>
  );
}
