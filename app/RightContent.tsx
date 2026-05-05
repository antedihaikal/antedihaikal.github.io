import { Tag, Zap, Clock, ShoppingBag } from 'lucide-react';

export default function RightContent() {
  return (
    <div className="flex flex-col justify-center items-center md:items-end text-white z-20 space-y-8 mt-10 md:mt-0">
      
      {/* Features Icon */}
      <div className="flex gap-6 md:gap-8 justify-center md:justify-end text-center w-full">
        <div className="flex flex-col items-center gap-2"><Tag size={20} className="text-white/80" /><span className="text-xs font-medium">Future<br/>Threads</span></div>
        <div className="flex flex-col items-center gap-2"><Zap size={20} className="text-white/80" /><span className="text-xs font-medium">Unique<br/>Designs</span></div>
        <div className="flex flex-col items-center gap-2"><Clock size={20} className="text-white/80" /><span className="text-xs font-medium">Limited<br/>Drops</span></div>
      </div>

      {/* Featured Product Card */}
      <div className="bg-white text-gray-900 p-4 rounded-3xl w-full max-w-[240px] shadow-xl">
        <p className="text-center text-sm font-bold text-gray-500 mb-3">Featured Product</p>
        <div className="rounded-2xl overflow-hidden mb-4 bg-gray-100 aspect-square">
          <img src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=500" alt="T-Shirt" className="w-full h-full object-cover" />
        </div>
        <h4 className="font-bold text-center">Urban Vanguard Tee</h4>
        <p className="text-xs text-gray-500 text-center mb-4 mt-1">Unmatched comfort.</p>
        <button className="w-full bg-[#ff6868] text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#ff5252] transition">
          <ShoppingBag size={18} /> $26.72
        </button>
      </div>

    </div>
  );
}