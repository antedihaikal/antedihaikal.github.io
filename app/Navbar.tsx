import { Search, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-4 md:px-8 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      {/* Kiri: Links */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
        <a href="#" className="hover:text-black">Shop</a>
        <a href="#" className="hover:text-black">Collections</a>
        <a href="#" className="hover:text-black">About</a>
        <a href="#" className="hover:text-black">Contact</a>
      </div>

      {/* Tengah: Logo */}
      <div className="font-black text-2xl tracking-tighter uppercase md:absolute md:left-1/2 md:-translate-x-1/2">
        Antedi Haikal
      </div>

      {/* Kanan: Icons & Cart */}
      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-600 hover:text-black"><Search size={20} /></button>
        <img 
          src="https://i.pravatar.cc/150?img=5" 
          alt="Profile" 
          className="w-8 h-8 rounded-full border border-gray-200 object-cover hidden sm:block"
        />
        <button className="flex items-center gap-2 bg-[#ff6868] text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-[#ff5252] transition">
          <ShoppingCart size={16} />
          <span>1 product</span>
        </button>
      </div>
    </nav>
  );
}