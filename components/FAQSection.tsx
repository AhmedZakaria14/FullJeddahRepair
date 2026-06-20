'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { AnimateIn } from '@/components/AnimateIn';

const faqs = [
  {
    question: 'ما هي الأحياء التي تغطونها في مدينة جدة؟',
    answer: 'نغطي جميع أحياء مدينة جدة بلا استثناء (الشمالية، الجنوبية، الشرقية، والوسطى) مثل حي الصفا، المروة، والبساتين. نتميز بسرعة الاستجابة والوصول الفوري للحالات الطارئة لمساعدتك أينما كنت.'
  },
  {
    question: 'هل تقدمون ضماناً على أعمال الصيانة والسباكة؟',
    answer: 'نعم، بكل تأكيد. نقدم ضماناً شاملاً على جودة العمل المنجز في السباكة، الكهرباء، وكشف التسربات، بالإضافة إلى ضمان موثوق على جميع قطع الغيار الأصلية المستخدمة أثناء الصيانة.'
  },
  {
    question: 'كيف يتم تحديد أسعار الصيانة وهل هناك رسوم خفية؟',
    answer: 'تعتمد الأسعار على نوع العطل وحجم العمل المطلوب. نحن نؤمن بالشفافية التامة، لذلك نقوم بتوفير تسعيرة واضحة ومدروسة للعميل بعد الفحص المبدئي، ولا نقوم بالبدء بأي أعمال قبل الموافقة النهائية.'
  },
  {
    question: 'كم يستغرق كشف تسربات المياه بدون تكسير؟',
    answer: 'بفضل الأجهزة الإلكترونية الحديثة مثل الكاميرات الحرارية وأجهزة الذبذبات الصوتية التي نستخدمها، تستغرق عملية الكشف وقتاً قصيراً لتحديد مكان الخلل بدقة تصل إلى 98% دون الحاجة لتكسير الجدران أو البلاط.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-gray-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">الأسئلة الشائعة</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">إجابات على أكثر التساؤلات شيوعاً حول خدماتنا، أسعارنا، وتغطيتنا في جميع أحياء جدة.</p>
          </div>
        </AnimateIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimateIn key={index} delay={index * 0.1}>
              <div 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-amber-500 shadow-md bg-white' : 'border-gray-200 bg-white hover:border-amber-300'}`}
              >
                <button
                  className="w-full px-6 py-6 text-right flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={`text-xl font-bold ${openIndex === index ? 'text-amber-600' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`text-amber-500 transition-transform duration-300 shrink-0 mr-4 ${openIndex === index ? 'rotate-180' : ''}`} 
                    size={24} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 text-lg leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
