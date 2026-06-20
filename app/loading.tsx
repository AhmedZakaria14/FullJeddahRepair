import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
      <div className="relative flex items-center justify-center mb-6">
        <div className="absolute w-20 h-20 border-4 border-amber-200 rounded-full animate-ping opacity-20"></div>
        <Loader2 className="w-14 h-14 text-amber-500 animate-spin relative z-10" />
      </div>
      <p className="text-xl font-bold text-slate-700 animate-pulse">جاري التحميل...</p>
    </div>
  );
}
