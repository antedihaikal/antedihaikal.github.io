import HeroSection from "@/components/sections/HeroSection";
import Sidebar from "@/components/layout/Sidebar";
import RightPanel from "@/components/layout/RightPanel";

export default function Home() {
  return (
    <main className="flex w-full h-[100dvh] bg-gray-950 text-white overflow-hidden bg-grid">
      <Sidebar />
      
      {/* Container scroll utama: tambahkan pb-24 di HP agar konten tidak tertutup navigasi bawah */}
      <div className="flex-1 overflow-y-auto pb-24 md:pb-0">
        
        {/* Flex-col di HP (atas-bawah), lg:flex-row di Desktop (kiri-kanan) */}
        <div className="flex flex-col lg:flex-row min-h-full">
          <div className="flex-1">
            <HeroSection />
          </div>
          <RightPanel />
        </div>
        
      </div>
    </main>
  );
}