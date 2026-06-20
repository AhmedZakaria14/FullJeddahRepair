"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    // Avoid batching with Next.js Link navigation transition
    // to ensure the menu closes immediately and loading.tsx is visible
    setTimeout(() => {
      setIsOpen(false);
    }, 0);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781928647/%D8%B5%D9%8A%D8%A7%D8%AA%D8%A9_%D8%AC%D8%AF%D8%A9_lavi0o.png" 
                alt="صيانة جدة المتكاملة"
                width={50}
                height={50}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <span className="text-xl sm:text-2xl font-bold text-blue-700">
                صيانة جدة المتكاملة
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-bold transition-colors">الرئيسية</Link>
            <Link href="/services/electricity" className="text-gray-700 hover:text-blue-600 font-bold transition-colors">كهرباء</Link>
            <Link href="/services/plumbing" className="text-gray-700 hover:text-blue-600 font-bold transition-colors">سباكة</Link>
            <Link href="/services/leak-detection" className="text-gray-700 hover:text-blue-600 font-bold transition-colors">كشف تسربات</Link>
            <Link href="/services/tiling" className="text-gray-700 hover:text-blue-600 font-bold transition-colors">تبليط</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-bold transition-colors">المدونة</Link>
          </nav>
          <div className="hidden md:flex">
            <a href="tel:0546142922" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-bold transition-colors">
              اتصل الآن 0546142922
            </a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-100 overflow-hidden bg-white shadow-inner"
          >
            <div className="px-4 py-4 space-y-1 flex flex-col h-[calc(100vh-80px)] overflow-y-auto">
              <Link onClick={closeMenu} href="/" className="block px-4 py-5 text-lg font-bold text-gray-700 hover:text-blue-600 focus:text-blue-600 hover:bg-blue-50 focus:bg-blue-50 rounded-xl transition-colors border-b border-gray-50">الرئيسية</Link>
              <Link onClick={closeMenu} href="/services/electricity" className="block px-4 py-5 text-lg font-bold text-gray-700 hover:text-blue-600 focus:text-blue-600 hover:bg-blue-50 focus:bg-blue-50 rounded-xl transition-colors border-b border-gray-50">كهرباء</Link>
              <Link onClick={closeMenu} href="/services/plumbing" className="block px-4 py-5 text-lg font-bold text-gray-700 hover:text-blue-600 focus:text-blue-600 hover:bg-blue-50 focus:bg-blue-50 rounded-xl transition-colors border-b border-gray-50">سباكة</Link>
              <Link onClick={closeMenu} href="/services/leak-detection" className="block px-4 py-5 text-lg font-bold text-gray-700 hover:text-blue-600 focus:text-blue-600 hover:bg-blue-50 focus:bg-blue-50 rounded-xl transition-colors border-b border-gray-50">كشف تسربات</Link>
              <Link onClick={closeMenu} href="/services/tiling" className="block px-4 py-5 text-lg font-bold text-gray-700 hover:text-blue-600 focus:text-blue-600 hover:bg-blue-50 focus:bg-blue-50 rounded-xl transition-colors border-b border-gray-50">تبليط</Link>
              <Link onClick={closeMenu} href="/blog" className="block px-4 py-5 text-lg font-bold text-gray-700 hover:text-blue-600 focus:text-blue-600 hover:bg-blue-50 focus:bg-blue-50 rounded-xl transition-colors border-b border-gray-50">المدونة</Link>
              <div className="pt-6 mt-auto mb-8">
                <a onClick={closeMenu} href="tel:0546142922" className="block w-full text-center px-4 py-5 border border-transparent rounded-xl font-bold text-xl text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-md">
                  اتصل الآن 0546142922
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
