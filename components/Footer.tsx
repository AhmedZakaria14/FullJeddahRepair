import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">صيانة جدة المتكاملة</h3>
            <p className="text-gray-400">
              أفضل خدمات الصيانة المنزلية في مدينة جدة. متخصصون في السباكة، الكهرباء، كشف تسربات المياه، وتركيب البلاط بأعلى معايير الجودة والأسعار التنافسية.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">الرئيسية</Link></li>
              <li><Link href="/services/electricity" className="text-gray-400 hover:text-white transition-colors">صيانة كهرباء</Link></li>
              <li><Link href="/services/plumbing" className="text-gray-400 hover:text-white transition-colors">أعمال سباكة</Link></li>
              <li><Link href="/services/leak-detection" className="text-gray-400 hover:text-white transition-colors">كشف تسربات المياه</Link></li>
              <li><Link href="/services/tiling" className="text-gray-400 hover:text-white transition-colors">معلم بلاط</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">نصائح ومقالات</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-3 text-gray-400">
              <li>المدينة: جدة، المملكة العربية السعودية</li>
              <li>ساعات العمل: على مدار الساعة 24/7</li>
              <li>الهاتف: <a href="tel:0546142922" className="hover:text-white font-bold" dir="ltr">054 614 2922</a></li>
              <li>واتساب: <a href="https://wa.me/966546142922" target="_blank" rel="noopener noreferrer" className="hover:text-white font-bold" dir="ltr">+966 54 614 2922</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 gap-4">
          <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} - صيانة جدة المتكاملة</p>
          <p className="text-sm">
            تم التصميم والتطوير بواسطة{' '}
            <a 
              href="https://nasharhub.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white font-semibold transition-colors"
            >
              Nasharhub.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
