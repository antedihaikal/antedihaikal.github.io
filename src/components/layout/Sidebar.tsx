import { Home, Star, Camera, Briefcase, BarChart2, Grid } from 'lucide-react';

export default function Sidebar() {
  return (
    // 1. Ubah ke <aside> untuk semantik HTML yang lebih baik
    // 2. Mobile: fixed di bawah, z-index tinggi, background gelap
    // 3. Desktop: static, shrink-0 agar tidak gepeng, lebar 28 (112px)
    <aside className="fixed bottom-0 left-0 w-full z-[100] bg-gray-950 border-t border-gray-800 flex items-center justify-between px-8 py-4 pb-8 md:bg-transparent md:border-none md:static md:w-28 md:shrink-0 md:flex-col md:h-full md:p-6">
      
      {/* Bungkus elemen desktop agar desain putih/rounded aslinya tetap jalan */}
      <div className="flex flex-row md:flex-col w-full md:h-full justify-between items-center pointer-events-auto md:bg-white md:rounded-3xl md:border md:shadow-sm md:py-8">
        
        <div className="hidden md:flex font-bold text-2xl text-blue-500 mb-12 justify-center">A.</div>
        
        <div className="flex w-full md:w-auto justify-between md:flex-col gap-0 md:gap-8 text-slate-400 items-center">
          <Home className="w-6 h-6 text-blue-500 cursor-pointer hover:scale-110 transition-transform" />
          <Star className="w-6 h-6 hover:text-white md:hover:text-blue-500 cursor-pointer transition-all" />
          <Camera className="w-6 h-6 hover:text-white md:hover:text-blue-500 cursor-pointer transition-all" />
          <Briefcase className="w-6 h-6 hover:text-white md:hover:text-blue-500 cursor-pointer transition-all" />
          <BarChart2 className="w-6 h-6 hover:text-white md:hover:text-blue-500 cursor-pointer transition-all" />
          <Grid className="w-6 h-6 md:hidden hover:text-white cursor-pointer transition-all" />
        </div>
        
        <div className="hidden md:flex mt-auto flex-col gap-4 items-center">
          <Grid className="w-6 h-6 text-slate-400 hover:text-blue-500 cursor-pointer transition-all hover:scale-110" />
        </div>

      </div>
    </aside>
  );
}