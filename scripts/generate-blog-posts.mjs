import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const PHONE = '0546142922';

const docs = [
  ['best-water-leak-detection-company-jeddah', 'أفضل شركة لكشف تسربات المياه في جدة دون إتلاف التشطيبات | 0546142922', 'leak', 'كشف تسربات', '/images/leak.jpg', '/services/leak-detection', 'خدمة كشف تسربات المياه', '1u7rx1Y9REhlUdzUbli68nPsNysimvG5oVLPu-ZJRuoM'],
  ['water-leak-detection-hamdaniya-jeddah', 'شركة كشف تسربات المياه في الحمدانية جدة لفحص المنازل والفلل | 0546142922', 'leak', 'كشف تسربات', '/images/leak.jpg', '/services/leak-detection', 'كشف تسربات الحمدانية', '1g-3jKtzsxOXbcpw24szgKdVFZeGQ_kACs-aUWdJDEFc'],
  ['tank-leak-detection-before-insulation-repair-jeddah', 'كشف تسربات الخزانات وفحص الخزان قبل العزل والإصلاح | 0546142922', 'leak', 'كشف تسربات', '/images/leak.jpg', '/services/leak-detection', 'كشف تسربات الخزانات', '1_YV0Z6CM4aUaW2NF0o-L9QsRwadzRdi3Awa9icjCCaI'],
  ['water-leak-detection-moisture-source-jeddah', 'شركة كشف تسربات المياه لتحديد مصدر الرطوبة قبل الإصلاح | 0546142922', 'leak', 'كشف تسربات', '/images/leak.jpg', '/services/leak-detection', 'تحديد مصدر الرطوبة', '1RKVJlh8kD9AX9TE2xqojxaimkZhoRPUvZMlx9uFgaqk'],
  ['best-water-leak-detection-no-random-breaking-jeddah', 'أفضل شركة كشف تسربات المياه بجدة بدون تكسير عشوائي للتشطيبات | 0546142922', 'leak', 'كشف تسربات', '/images/leak.jpg', '/services/leak-detection', 'كشف بدون تكسير عشوائي', '1Z8YGdDwQGbYjTbSN1t0n_5Rp2IOQV7agjYTSnWs7HUA'],
  ['plumber-teacher-jeddah-water-drainage-networks', 'معلم سباك بجدة لتأسيس وصيانة شبكات المياه والصرف | 0546142922', 'plumbing', 'سباكة', '/images/plumbing.jpg', '/services/plumbing', 'خدمة السباكة', '1byY2NyrBZCAk1Lx3S-vC394s1JVw9_yI7GeSP9beM7w'],
  ['sanitary-technician-services-jeddah', 'خدمات معلم صحي تأسيس وصيانة | 0546142922', 'plumbing', 'سباكة', '/images/plumbing.jpg', '/services/plumbing', 'خدمات معلم صحي', '1RMu1dAk5Y0e2kLOuDkkF0l9Wreni9dkTfGC6KcbX5Kw'],
  ['best-plumber-number-jeddah-emergency', 'رقم افضل سباك في جدة عند حدوث عطل مفاجئ | 0546142922', 'plumbing', 'سباكة', '/images/plumbing.jpg', '/services/plumbing', 'رقم سباك بجدة', '19RApjwiy8cwmCL4RuQFPyFZc_9CGq0Va6ZCQ6YeGIlM'],
  ['best-plumbing-companies-jeddah-homes-facilities', 'أفضل شركات السباكة لخدمة المنازل والمنشآت في جدة | 0546142922', 'plumbing', 'سباكة', '/images/plumbing.jpg', '/services/plumbing', 'شركات السباكة', '1Fe4JhbG9pF0QN3U8BcwS313v9ykF5ay1xOO0T02i4Sg'],
  ['plumbing-contractor-jeddah-villas-buildings', 'مقاول سباكة جدة لتأسيس وتشطيب الفلل والعمائر | 0546142922', 'plumbing', 'سباكة', '/images/plumbing.jpg', '/services/plumbing', 'مقاول سباكة جدة', '1Xtg64qc88S64M55kvgPDfeNpyzgWFSuWSaKxgjfwhOE'],
  ['home-electrician-jeddah-maintenance-installation', 'كهربائي منازل جدة لصيانة الأعطال والتأسيس | 0546142922', 'electricity', 'كهرباء', '/images/home_electricity.jpg', '/services/electricity', 'خدمة صيانة الكهرباء', '1n87mvN8b7USfSI-At9O-LhjZsbjOFjixp7XSAbAN9Co'],
  ['best-electrician-jeddah-safe-accurate-service', 'أفضل كهربائي بجدة لخدمة آمنة ودقيقة | 0546142922', 'electricity', 'كهرباء', '/images/electrician_jeddah.jpg', '/services/electricity', 'أفضل كهربائي بجدة', '1CcgCxYWhuFsNgJXX_-INOn7M5yn1Sk9A8_HQIpABqH4'],
  ['electrician-teacher-jeddah-organized-finishing', 'معلم كهربائي بجدة للتأسيس والتشطيب المنظم | 0546142922', 'electricity', 'كهرباء', '/images/electrical.jpg', '/services/electricity', 'معلم كهربائي بجدة', '1qp6UUKHGfBvM54g3LN9_mALtgNErbvzHyQ9hXS0twBM'],
  ['best-electric-technician-jeddah-emergency-repair', 'افضل فني كهربائي بجدة لإصلاح الأعطال والطوارئ | 0546142922', 'electricity', 'كهرباء', '/images/home_electricity.jpg', '/services/electricity', 'فني كهربائي طوارئ', '1ChW7g0s59iCIffKZEqcln_sq6QwICBpkU38xunsQwuc'],
  ['best-electricity-maintenance-company-jeddah', 'أفضل شركة صيانة كهرباء في جدة لخدمة منظمة وآمنة | 0546142922', 'electricity', 'كهرباء', '/images/electrical.jpg', '/services/electricity', 'شركة صيانة كهرباء', '1uS7sBkGDzTVV7C8FOqYU_MknWHQrp1QfFUH6l09Sf_M'],
];

const existingPosts = [
  {
    slug: 'hidden-water-leak-signs-jeddah',
    title: '5 علامات تدل على وجود تسربات خفية في منزلك',
    description: 'تعرف على أهم علامات تسرب المياه الخفي في المنازل بجدة ومتى تحتاج إلى فني كشف تسربات قبل تفاقم الأضرار.',
    category: 'كشف تسربات',
    image: '/images/leak.jpg',
    serviceLink: '/services/leak-detection',
    serviceLabel: 'خدمة كشف التسربات',
    keywords: ['تسربات خفية', 'كشف تسربات المياه بجدة', 'فحص تسريب المياه'],
    toc: [
      { id: 'water-bill', title: 'ارتفاع فاتورة المياه دون سبب واضح' },
      { id: 'moisture-spots', title: 'رطوبة أو بقع على الجدران والأسقف' },
      { id: 'mold-smell', title: 'رائحة عفن مستمرة' },
      { id: 'low-pressure', title: 'انخفاض ضغط المياه' },
      { id: 'floor-cracks', title: 'تشقق الأرضيات أو انتفاخها' },
    ],
    html: '<section id="water-bill"><h2>ارتفاع فاتورة المياه دون سبب واضح</h2><p>إذا لاحظت زيادة مستمرة في الاستهلاك رغم ثبات عادات الاستخدام، فقد يكون هناك تسرب داخل الجدران أو الأرضيات. ويمكنك مقارنة ذلك مع دليل <a href="/blog/best-water-leak-detection-company-jeddah">أفضل شركة لكشف تسربات المياه في جدة</a>.</p></section><section id="moisture-spots"><h2>رطوبة أو بقع على الجدران والأسقف</h2><p>ظهور بقع داكنة أو انتفاخ الدهان من أكثر الإشارات شيوعاً على وجود مياه خلف التشطيبات.</p></section><section id="mold-smell"><h2>رائحة عفن مستمرة</h2><p>الرطوبة المخفية تهيئ بيئة مناسبة للعفن، لذلك لا ينبغي تجاهل الرائحة حتى لو لم يظهر مصدر المياه بوضوح.</p></section><section id="low-pressure"><h2>انخفاض ضغط المياه</h2><p>الهبوط غير المعتاد في الضغط قد يدل على تسرب في أحد الخطوط، خصوصاً إذا ترافق مع أصوات مياه داخل الجدران.</p></section><section id="floor-cracks"><h2>تشقق الأرضيات أو انتفاخها</h2><p>قد تتأثر بعض الأرضيات والبلاط من المياه المتسربة أسفلها، وهنا يلزم كشف دقيق قبل أي تكسير عشوائي.</p></section>',
  },
  {
    slug: 'choose-porcelain-size-color-jeddah',
    title: 'كيف تختار مقاس ولون البورسلان المناسب لمجلسك',
    description: 'دليل مبسط لاختيار مقاس ولون البورسلان للمجالس والصالات بما يناسب المساحة والإضاءة والطابع العام للديكور.',
    category: 'تبليط وسيراميك',
    image: '/images/tiling.jpg',
    serviceLink: '/services/tiling',
    serviceLabel: 'خدمة التبليط والسيراميك',
    keywords: ['معلم تركيب بلاط', 'بورسلان جدة', 'تركيب سيراميك'],
    toc: [
      { id: 'room-size', title: 'ابدأ بمساحة المجلس' },
      { id: 'lighting-color', title: 'اختيار اللون حسب الإضاءة' },
      { id: 'waste-ratio', title: 'اهتم بنسبة الهدر' },
      { id: 'grout-lines', title: 'اجعل الفواصل جزءاً من التصميم' },
    ],
    html: '<section id="room-size"><h2>ابدأ بمساحة المجلس</h2><p>المقاسات الكبيرة تمنح إحساساً بالاتساع في المساحات الواسعة، بينما قد تكون المقاسات المتوسطة أكثر توازناً في الغرف الأصغر.</p></section><section id="lighting-color"><h2>اختيار اللون حسب الإضاءة</h2><p>الألوان الفاتحة تساعد على زيادة الإحساس بالمساحة وتعكس الضوء، بينما الدرجات الداكنة تعطي حضوراً فخماً عند توفر إضاءة جيدة.</p></section><section id="waste-ratio"><h2>اهتم بنسبة الهدر</h2><p>كلما زاد مقاس البلاطة زادت أهمية التخطيط المسبق للقصات والزوايا حتى لا ترتفع نسبة الهدر.</p></section><section id="grout-lines"><h2>اجعل الفواصل جزءاً من التصميم</h2><p>اختيار لون الروبة وسُمك الفواصل يؤثران بشكل واضح على النتيجة النهائية، وليس البلاط وحده.</p></section>',
  },
  {
    slug: 'electrical-panel-maintenance-jeddah',
    title: 'أضرار إهمال صيانة طبلون الكهرباء وخطورته',
    description: 'لماذا يحتاج طبلون الكهرباء إلى فحص دوري؟ تعرف على مخاطر القواطع التالفة وارتفاع الحرارة والتحميل الزائد داخل المنزل.',
    category: 'صيانة كهرباء',
    image: '/images/home_electricity.jpg',
    serviceLink: '/services/electricity',
    serviceLabel: 'خدمة صيانة الكهرباء',
    keywords: ['صيانة كهرباء جدة', 'كهربائي منازل جدة', 'فني كهربائي بجدة'],
    toc: [
      { id: 'breaker-heat', title: 'ارتفاع حرارة القواطع' },
      { id: 'power-trips', title: 'الفصل المتكرر للكهرباء' },
      { id: 'burning-smell', title: 'رائحة احتراق أو تغير لون الأسلاك' },
      { id: 'regular-check', title: 'الفحص الدوري يقلل الأعطال' },
    ],
    html: '<section id="breaker-heat"><h2>ارتفاع حرارة القواطع</h2><p>السخونة الزائدة علامة تستحق الفحص الفوري لأنها قد ترتبط بتحميل مرتفع أو توصيل غير محكم. راجع أيضًا مقال <a href="/blog/home-electrician-jeddah-maintenance-installation">كهربائي منازل جدة</a>.</p></section><section id="power-trips"><h2>الفصل المتكرر للكهرباء</h2><p>القاطع الذي يفصل باستمرار لا ينبغي تجاوزه أو استبداله بعشوائية، بل يجب معرفة سبب الحمل أو العطل أولاً.</p></section><section id="burning-smell"><h2>رائحة احتراق أو تغير لون الأسلاك</h2><p>هذه من العلامات الجدية التي تستوجب إيقاف المصدر المتأثر والاستعانة بفني مؤهل.</p></section><section id="regular-check"><h2>الفحص الدوري يقلل الأعطال</h2><p>مراجعة التوصيلات والقواطع وتوازن الأحمال تساعد على اكتشاف المشكلة قبل أن تتحول إلى عطل أكبر.</p></section>',
  },
  {
    slug: 'kitchen-drain-unclogging-jeddah',
    title: 'الطرق الصحيحة لتسليك انسداد المجاري بمطبخك',
    description: 'تعرف على أسباب انسداد صرف المطبخ والطرق الآمنة للتعامل معه ومتى تحتاج إلى سباك لمعالجة المشكلة من جذورها.',
    category: 'سباكة ومجاري',
    image: '/images/plumbing.jpg',
    serviceLink: '/services/plumbing',
    serviceLabel: 'خدمة السباكة والمجاري',
    keywords: ['سباك بجدة', 'تسليك مجاري جدة', 'تصليح سباكة'],
    toc: [
      { id: 'grease', title: 'الدهون هي السبب الأشهر' },
      { id: 'simple-cleaning', title: 'ابدأ بالتنظيف البسيط' },
      { id: 'avoid-force', title: 'تجنب الحلول العنيفة' },
      { id: 'call-plumber', title: 'متى تحتاج سباكاً؟' },
    ],
    html: '<section id="grease"><h2>الدهون هي السبب الأشهر</h2><p>زيوت الطبخ والدهون تلتصق داخل المواسير بمرور الوقت وتجذب بقايا الطعام حتى يتكون الانسداد. للمشكلات الأعمق راجع مقال <a href="/blog/plumber-teacher-jeddah-water-drainage-networks">معلم سباك بجدة</a>.</p></section><section id="simple-cleaning"><h2>ابدأ بالتنظيف البسيط</h2><p>يمكن تنظيف المصفاة والسيفون إذا كان الوصول إليهما آمناً، مع تجنب خلط المواد الكيميائية المختلفة داخل المواسير.</p></section><section id="avoid-force"><h2>تجنب الحلول العنيفة</h2><p>استخدام أدوات حادة أو ضغط مفرط قد يتسبب في تلف المواسير أو الوصلات بدلاً من حل المشكلة.</p></section><section id="call-plumber"><h2>متى تحتاج سباكاً؟</h2><p>إذا عاد الانسداد سريعاً أو شمل أكثر من مصرف، فالأرجح أن المشكلة أعمق وتحتاج فحصاً وتسليكاً احترافياً.</p></section>',
  },
];

const keywordMap = {
  leak: ['كشف تسربات المياه بجدة', 'شركة كشف تسربات المياه بجدة', 'اسعار كشف تسربات المياه بجدة', 'فحص تسريب المياه بدون تكسير جدة', 'تقرير كشف تسربات المياه المعتمد بجدة'],
  plumbing: ['سباك بجدة', 'معلم سباك بجدة', 'فني سباكة منازل جدة', 'رقم سباك بجدة', 'تصليح سباكة وتمديدات بجده'],
  electricity: ['كهربائي منازل جدة', 'كهربائي بجدة', 'معلم كهربائي بجدة', 'فني كهربائي بجدة', 'شركة صيانة كهرباء في جدة'],
};

const relatedLinks = {
  leak: [
    ['شركة كشف تسربات المياه بجدة', '/services/leak-detection'],
    ['فحص تسريب المياه بدون تكسير جدة', '/blog/best-water-leak-detection-no-random-breaking-jeddah'],
    ['كشف تسربات الخزانات', '/blog/tank-leak-detection-before-insulation-repair-jeddah'],
    ['تحديد مصدر الرطوبة', '/blog/water-leak-detection-moisture-source-jeddah'],
    ['سباك كشف تسربات', '/blog/plumber-teacher-jeddah-water-drainage-networks'],
  ],
  plumbing: [
    ['معلم سباك بجدة', '/blog/plumber-teacher-jeddah-water-drainage-networks'],
    ['رقم سباك بجدة', '/blog/best-plumber-number-jeddah-emergency'],
    ['مقاول سباكة جدة', '/blog/plumbing-contractor-jeddah-villas-buildings'],
    ['خدمات السباكة', '/services/plumbing'],
    ['كشف تسربات المياه', '/services/leak-detection'],
  ],
  electricity: [
    ['كهربائي منازل جدة', '/blog/home-electrician-jeddah-maintenance-installation'],
    ['أفضل كهربائي بجدة', '/blog/best-electrician-jeddah-safe-accurate-service'],
    ['معلم كهربائي بجدة', '/blog/electrician-teacher-jeddah-organized-finishing'],
    ['شركة صيانة كهرباء في جدة', '/blog/best-electricity-maintenance-company-jeddah'],
    ['صيانة الكهرباء', '/services/electricity'],
  ],
};

function slugifyHeading(text, index) {
  return `section-${index + 1}`;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildDescription(paragraphs) {
  const first = paragraphs.find((line) => line.length > 70) || paragraphs[1] || paragraphs[0] || '';
  return first.replace(/\s+/g, ' ').slice(0, 158);
}

function linkify(text, group, currentSlug) {
  let output = escapeHtml(text);
  for (const [label, href] of relatedLinks[group]) {
    if (href.endsWith(currentSlug)) continue;
    const escaped = escapeHtml(label);
    if (output.includes(escaped) && !output.includes(`>${escaped}</a>`)) {
      output = output.replace(escaped, `<a href="${href}">${escaped}</a>`);
    }
  }
  return output;
}

function htmlFromText(text, group, currentSlug) {
  const lines = text.replace(/^\uFEFF/, '').split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const title = lines.shift();
  const toc = [];
  const html = [];
  let openSection = false;
  let paragraphBuffer = [];
  let headingIndex = 0;

  function flushParagraph() {
    if (!paragraphBuffer.length) return;
    const paragraph = paragraphBuffer.join(' ');
    html.push(`<p>${linkify(paragraph, group, currentSlug)}</p>`);
    paragraphBuffer = [];
  }

  for (const line of lines) {
    const isH3 = /^\d+[\-.]\s+/.test(line);
    const isH2 = !isH3 && line.length < 90 && !/[.؟:]$/.test(line);

    if (isH2 || isH3) {
      flushParagraph();
      if (isH2) {
        if (openSection) html.push('</section>');
        const id = slugifyHeading(line, headingIndex++);
        toc.push({ id, title: line });
        html.push(`<section id="${id}"><h2>${escapeHtml(line)}</h2>`);
        openSection = true;
      } else {
        html.push(`<h3>${escapeHtml(line.replace(/^\d+[\-.]\s+/, ''))}</h3>`);
      }
    } else {
      paragraphBuffer.push(line);
    }
  }

  flushParagraph();
  if (openSection) html.push('</section>');

  return { title, toc, html: html.join('') };
}

async function fetchDoc(id) {
  return execFileSync('curl', [
    '-L',
    '-s',
    `https://docs.google.com/document/d/${id}/export?format=txt`,
  ], { encoding: 'utf8', maxBuffer: 1024 * 1024 * 4 });
}

const generatedPosts = [];

for (const [slug, fallbackTitle, group, category, image, serviceLink, serviceLabel, id] of docs) {
  const text = await fetchDoc(id);
  const { title, toc, html } = htmlFromText(text, group, slug);
  const paragraphs = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  generatedPosts.push({
    slug,
    title: title || fallbackTitle,
    description: buildDescription(paragraphs.slice(1)),
    category,
    image,
    serviceLink,
    serviceLabel,
    keywords: keywordMap[group],
    toc,
    html,
  });
}

const posts = [...generatedPosts, ...existingPosts];

const file = `export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  serviceLink: string;
  serviceLabel: string;
  keywords: string[];
  toc: { id: string; title: string }[];
  html: string;
};

export const blogPosts = ${JSON.stringify(posts, null, 2)} satisfies BlogPost[];

export const postsBySlug = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post])
) as Record<string, BlogPost>;

export const blogSlugs = blogPosts.map((post) => post.slug);
`;

writeFileSync('lib/blog-posts.ts', file);
console.log(`Generated ${posts.length} blog posts`);
