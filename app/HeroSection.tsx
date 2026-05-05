import Image from 'next/image';
import { portfolioData } from '@/app/lib/dummyData'

export default function HeroSection() { 
  return(
    // PERUBAHAN DI SINI: Mengganti h-[400px] menjadi aspect-[3/4] atau aspect-[4/5]
    <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-auto md:h-full rounded-3xl overflow-hidden shadow-sm border border-slate-100 group">
      
      <Image 
        src={portfolioData.mainImage} 
        alt="Profile" 
        fill 
        // TIP: Jika kepala/wajah terpotong, ubah 'object-top' menjadi 'object-center'
        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      
      {/* Floating Data Cards over Hero */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4 items-end justify-between">
        <div className="flex gap-4">
          {/* Birthday Widget */}
          <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl flex items-center gap-3 shadow-lg">
            <div className="text-3xl font-black text-slate-800">{portfolioData.birthday.day}</div>
            <div className="text-xs text-slate-500 font-medium leading-tight">
              Birthday<br/>{portfolioData.birthday.monthYear}
            </div>
          </div>
          
          {/* Real Name Widget */}
          <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg flex flex-col justify-center">
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Real Name</span>
            <span className="text-sm font-semibold text-slate-800">{portfolioData.realName}</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter drop-shadow-md">
          {portfolioData.stageName}
        </h1>
      </div>
    </div>
  )
};