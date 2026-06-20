import type { Metadata } from 'next';
import Image from 'next/image';
import { PhoneCall, Layers, CheckSquare } from 'lucide-react';
import { AnimateIn } from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'معلم بلاط بجدة | تركيب سيراميك ورخام وبورسلان',
  description: 'أفضل معلم بلاط بجدة لتركيب السيراميك، البورسلان، الرخام، والجرانيت. دقة في الوزنية، إنجاز سريع، وأسعار منافسة لتركيب أحواش ومنازل وفلل. اتصل: 0546142922',
  alternates: {
    canonical: '/services/tiling',
  },
};

export default function TilingServicePage() {
  return (
    <article className="bg-white">
      <header className="relative bg-slate-900 py-24 md:py-36">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/tiling.jpg" 
            alt="معلم بلاط بجدة" 
            fill 
            className="object-cover opacity-30"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <AnimateIn>
            <Layers className="mx-auto text-amber-500 mb-6 drop-shadow-md" size={64} />
            <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg">أفضل معلم تركيب بلاط وسيراميك بجدة</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 drop-shadow-md">دقة عالية في القص، وزنية مثالية، ولمسات تشطيب هندسية رائعة لكافة أنواع الأرضيات والجدران.</p>
            <a href="tel:0546142922" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-xl transition-colors shadow-lg hover:shadow-xl">
              <PhoneCall className="mr-2 ml-3" size={24} />
              اتصل بمعلم البلاط: 0546142922
            </a>
          </AnimateIn>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-20 prose prose-lg md:prose-xl prose-blue">
        <AnimateIn>
          <h2 className="text-3xl font-bold text-slate-900">لماذا تحتاج إلى معلم مبلط ممتاز في جدة؟</h2>
          <p className="text-gray-700 leading-relaxed">
            تعد عملية تركيب البلاط من أدق مراحل التشطيب في البناء. سوء اختيار المُبلط قد يؤدي إلى ظهور عيوب فادحة بعد فترة قصيرة، مثل «تطبيل البلاط» (صوت فراغ تحته)، عدم استواء الأرضية التي تتسبب في تراكم المياه في الحمامات، أو تكسر حواف البورسلان الناتجة عن القص الخاطئ. 
          </p>
          <p className="text-gray-700 leading-relaxed">
            نحن نوفر لك <strong>أفضل معلم بلاط بجدة</strong> يتمتع بخبرة سنوات طويلة في التعامل مع أحدث أنواع البلاط ذات القص الليزر والمقاسات الكبيرة التي تتطلب مهارة ومعدات خاصة للتركيب.
          </p>

          <div className="bg-slate-50 border-r-4 border-amber-500 p-8 rounded-xl my-10">
            <h3 className="text-2xl font-bold text-slate-900 mt-0 mb-6">تشمل خدمات تركيب البلاط لدينا:</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start"><CheckSquare className="text-amber-500 inline-block shrink-0 mt-1 ml-3" size={24} /> <span><strong>تركيب البورسلان والرخام:</strong> تركيب الأرضيات الفاخرة للفلل والمجالس باستخدام أجود أنواع الغراء المخصص لضمان التثبيت وعدم التحرك.</span></li>
              <li className="flex items-start"><CheckSquare className="text-amber-500 inline-block shrink-0 mt-1 ml-3" size={24} /> <span><strong>بلاط الأحواش والمداخل:</strong> تركيب بلاط الأحواش والانترلوك الذي يتحمل مرور السيارات العالية وتأثير العوامل الجوية الخاصة بمدينة جدة (الحرارة والرطوبة).</span></li>
              <li className="flex items-start"><CheckSquare className="text-amber-500 inline-block shrink-0 mt-1 ml-3" size={24} /> <span><strong>تبليط الحمامات والمطابخ:</strong> دقة متناهية في عمل الميول لضمان انسياب المياه بسلاسة نحو نقاط الصرف (الصفايات) دون ركود.</span></li>
              <li className="flex items-start"><CheckSquare className="text-amber-500 inline-block shrink-0 mt-1 ml-3" size={24} /> <span><strong>أعمال الترميم والتكسير:</strong> في حال كان البلاط القديم متضرراً أو حدث هبوط مائل، نقوم بتكسيره، ترحيل المخلفات (الديفان)، وإعادة صب وتعديل مستوى الأرضية قبل التبليط الجديد.</span></li>
            </ul>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <Image 
            src="/images/tiling.jpg" 
            alt="تشطيب رخام وسيراميك"
            width={800}
            height={450}
            className="rounded-3xl my-12 object-cover shadow-2xl border-4 border-slate-100 h-[450px]"
            referrerPolicy="no-referrer"
          />
        </AnimateIn>

        <AnimateIn>
          <h2 className="text-3xl font-bold text-slate-900 mt-12">سر جودة أعمال التبليط لدينا</h2>
          <p className="text-gray-700 leading-relaxed">
            نحن لا نكتفي بصف البلاط بجوار بعضه، بل نؤمن بأن التبليط هو فن هندسي. نستخدم <strong>الفواصل الصليبية والميزان الليزر</strong> لضمان استقامة خطوط الترويبة وجعل الأرضية كأنها قطعة واحدة صُنعت خصيصاً لك.
          </p>
          <p className="text-gray-700 leading-relaxed">
            علاوة على ذلك، ننصح عملائنا بنوعية البلاط الأنسب لكل مساحة (الخشن المانع للانزلاق للحمامات، اللامع للمجالس، والرخامي للمداخل). ونتعامل مع كافة المواد مثل السيراميك الأسباني، الإيطالي، الهندي والوطني السعودي بأعلى مستوى من الاحترافية.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12">كيفية التعاقد معنا</h2>
          <p className="text-gray-700 leading-relaxed mb-12">
            التسعير يعتمد على نوع وحجم البلاط (كميات تفوق المتر المربع المعتاد مثل 120x60 سم تحتاج إلى مجهود أكبر)، وحالة الأرضية السابقة. نقوم بزيارة مجانية للموقع لرفع المقاسات وتقديم تسعيرة نهائية شفافة بدون تكاليف خفية مفاجئة.
          </p>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-10 rounded-3xl mt-16 text-center shadow-xl text-white">
            <h3 className="text-3xl font-bold mb-4 mt-0 text-white">هل تخطط لتجديد أرضيات بيتك؟</h3>
            <p className="mb-8 text-lg font-medium opacity-90">نحن نضمن اللمسة الجمالية المطلوبة لمنزلك. استفسر الآن واحصل على تقييم مجاني.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0546142922" className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-md">
                اتصل واستفسر مجاناً
              </a>
              <a href="https://wa.me/966546142922" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-md">
                أرسل صور الموقع واتساب
              </a>
            </div>
          </div>
        </AnimateIn>
      </main>
    </article>
  );
}
