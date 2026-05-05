import Sidebar from './Sidebar';
import HeroSection from './HeroSection';
import RightPanel from './RightPanel';

export default function Portfolio() {
  return (
    <div className="h-screen w-full overflow-hidden touch-manipulation">
    // grid-rows-[1fr_auto]: Baris 1 ambil sisa layar, Baris 2 ikut tinggi konten (Sidebar)
    <div className="grid grid-rows-[1fr_auto] h-screen w-full bg-slate-50 overflow-hidden relative">
      
      {/* Background - taruh di dalam div terpisah agar tidak merusak grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
      }}></div>

      {/* 1. BAGIAN KONTEN (BISA DI-SCROLL) */}
      <main className="overflow-y-auto p-4 md:p-8 z-10 custom-scrollbar">
        <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6">
          <footer className="md:hidden relative z-[100] bg-white border-t border-slate-200">
            <Sidebar />
          </footer>
          <div className="md:col-span-7 w-full md:h-full">
            <HeroSection />
          </div>
          <div className="md:col-span-4 h-full">
            <RightPanel />
          </div>
        </div>
      </main>

      {/* 2. BAGIAN SIDEBAR (DIKUNCI DI BAWAH) */}
      <footer className="md:hidden z-50 bg-white/95 backdrop-blur-md border-t border-slate-200">
        <Sidebar />
      </footer>

    </div>
    </div>
  );
}
