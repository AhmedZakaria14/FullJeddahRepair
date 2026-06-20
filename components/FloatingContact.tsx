'use client';
import { Phone, MessageCircle } from 'lucide-react';

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      <a 
        href="https://wa.me/966546142922" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
        aria-label="تواصل معنا عبر واتساب"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-pulse left-0 top-0"></span>
        <MessageCircle size={28} />
      </a>
      
      <a 
        href="tel:0546142922" 
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 relative"
        aria-label="اتصل بنا الآن"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-30 animate-pulse left-0 top-0"></span>
        <Phone size={28} />
      </a>
    </div>
  );
}
