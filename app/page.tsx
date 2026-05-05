import { 
  Home, Star, Camera, Briefcase, BarChart2, Grid, MapPin, 
  Play, SkipBack, SkipForward, Clock, Heart, Bookmark 
} from 'lucide-react';
import Image from 'next/image';


const portfolioData = {
  stageName: "ANTEDI DEV",
  realName: "ANTEDI HAIKAL",
  birthday: { day: "17", monthYear: "September 2009" },
  hometown: "Jambi, Indonesia",
  tags: ["Developer", "Designer", "Tech"],
  yearsActive: "2019 - Present",
  mainImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  mediaImages: [
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  ],
  stats: { likes: "9977", favorites: "7523", bookmarks: "4644" }
};

// --- KOMPONEN MODULAR ---

const Sidebar = () => (
  <nav className="flex md:flex-col justify-between items-center bg-white p-4 md:p-6 rounded-3xl shadow-sm border border-slate-100 h-full">
    <div className="font-bold text-2xl text-blue-500 mb-0 md:mb-12 cursor-pointer">S.</div>
    <div className="flex md:flex-col gap-6 md:gap-8 text-slate-400">
      <Home className="w-6 h-6 hover:text-blue-500 transition cursor-pointer" />
      <Star className="w-6 h-6 hover:text-blue-500 transition cursor-pointer" />
      <Camera className="w-6 h-6 hover:text-blue-500 transition cursor-pointer" />
      <Briefcase className="w-6 h-6 hover:text-blue-500 transition cursor-pointer" />
      <BarChart2 className="w-6 h-6 hover:text-blue-500 transition cursor-pointer" />
    </div>
    <div className="mt-0 md:mt-auto flex md:flex-col gap-4">
      <Grid className="w-6 h-6 text-slate-400 hover:text-blue-500 transition cursor-pointer" />
    </div>
  </nav>
);

const HeroSection = () => (
  <div className="relative w-full h-[400px] md:h-full rounded-3xl overflow-hidden shadow-sm border border-slate-100 group">
    <Image 
      src={portfolioData.mainImage} 
      alt="Profile" 
      fill 
      className="object-cover transition-transform duration-700 group-hover:scale-105"
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
);

const WidgetCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white p-5 rounded-3xl shadow-sm border border-slate-100 ${className}`}>
    {children}
  </div>
);

const RightPanel = () => (
  <div className="flex flex-col gap-4 h-full">
    {/* Hometown & Tags */}
    <WidgetCard>
      <div className="flex items-start gap-2 mb-3">
        <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
        <div>
          <h3 className="text-sm font-bold text-slate-800">Hometown</h3>
          <p className="text-xs text-slate-500">{portfolioData.hometown}</p>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap mt-3">
        {portfolioData.tags.map(tag => (
          <span key={tag} className="bg-slate-100 text-slate-600 text-[10px] px-3 py-1 rounded-full font-medium">
            {tag}
          </span>
        ))}
      </div>
    </WidgetCard>

    {/* Music Player Dummy */}
    <WidgetCard className="bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="w-full aspect-video bg-white rounded-xl mb-4 border border-slate-100 shadow-sm flex items-center justify-center">
         <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Play className="w-5 h-5 text-blue-500 ml-1" />
         </div>
      </div>
      <div className="flex justify-center gap-6 items-center text-slate-600">
        <SkipBack className="w-5 h-5 cursor-pointer hover:text-blue-500" />
        <Play className="w-8 h-8 cursor-pointer text-blue-500" fill="currentColor" />
        <SkipForward className="w-5 h-5 cursor-pointer hover:text-blue-500" />
      </div>
    </WidgetCard>

    {/* Years Active */}
    <WidgetCard className="flex items-center justify-between">
      <div>
        <h3 className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Years Active</h3>
        <p className="text-lg font-black text-slate-800">{portfolioData.yearsActive}</p>
      </div>
      <div className="bg-amber-100 p-3 rounded-full text-amber-500">
        <Clock className="w-5 h-5" />
      </div>
    </WidgetCard>

    {/* Media Thumbnail */}
    <WidgetCard>
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-bold text-slate-800">Media</h3>
      </div>
      <div className="flex gap-2">
        {portfolioData.mediaImages.map((img, idx) => (
          <div key={idx} className="relative w-full aspect-square rounded-xl overflow-hidden">
            <Image src={img} alt={`Media ${idx}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </WidgetCard>
  </div>
);

// --- MAIN PAGE (SSG by default di Next.js App Router) ---

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto h-auto md:h-[85vh] flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6">
        
        {/* Kolom 1: Navigasi Sidebar (1 Kolom) */}
        <div className="md:col-span-1 order-last md:order-first mt-4 md:mt-0">
          <Sidebar />
        </div>

        {/* Kolom 2: Hero Section Utama (7 Kolom) */}
        <div className="md:col-span-7 h-[600px] md:h-full">
          <HeroSection />
        </div>

        {/* Kolom 3: Widget Kanan (4 Kolom) */}
        <div className="md:col-span-4 h-full overflow-y-auto pr-1 custom-scrollbar">
          <RightPanel />
        </div>

      </div>

      {/* Footer / Bottom Stats Area */}
      <div className="max-w-7xl mx-auto mt-6 flex justify-center gap-8 text-slate-500 text-sm font-medium">
        <div className="flex items-center gap-2"><Heart className="w-4 h-4 text-rose-400" /> {portfolioData.stats.likes}</div>
        <div className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-400" /> {portfolioData.stats.favorites}</div>
        <div className="flex items-center gap-2"><Bookmark className="w-4 h-4 text-blue-400" /> {portfolioData.stats.bookmarks}</div>
      </div>
    </main>
  );
}