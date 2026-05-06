import Image from 'next/image';
import { portfolioData } from '@/lib/dummyData'

export default function HeroSection() { 
  return(
    // 1. Pastikan section utama memiliki h-full agar merespons page.tsx
    <section className="w-full p-4 md:p-6 py-6 md:py-8 flex flex-col h-full">
      
      {/* 2. Hapus aspect dan h-[...]. Gunakan flex-1 agar ia otomatis mengisi ruang kosong tanpa tembus ke bawah layar */}
      {/* min-h-[400px] digunakan sebagai jaring pengaman untuk HP agar tidak terlalu gepeng */}
      <div className="relative w-full flex-1 min-h-[400px] rounded-3xl overflow-hidden shadow-sm border border-gray-800 group">
        
        <Image 
          src={portfolioData.mainImage} 
          alt="Profile" 
          fill 
          priority 
          quality={100} 
          // 3. Biarkan object-top agar area kepala tetap aman
          className="object-cover object-[50%_15%] transition-transform duration-1000 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
        
        {/* Floating Data Cards over Hero */}
        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4 items-end justify-between">
          <div className="flex gap-4">
            
            <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl flex items-center gap-3 shadow-lg">
              <div className="text-3xl font-black text-slate-800">{portfolioData.birthday.day}</div>
              <div className="text-xs text-slate-500 font-medium leading-tight">
                Birthday<br/>{portfolioData.birthday.monthYear}
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg flex flex-col justify-center">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Real Name</span>
              <span className="text-sm font-semibold text-slate-800">{portfolioData.realName}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter drop-shadow-xl z-10">
            {portfolioData.stageName}
          </h1>
        </div>
      </div>
    </section>
  )
};