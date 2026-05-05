import { ArrowRight, Star } from 'lucide-react';

export default function LeftContent() {
  return (
    <div className="flex flex-col justify-center text-white z-20 space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-2">New Arrivals</p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Where Art Meets <br className="hidden md:block"/> your Style
        </h2>
        <p className="text-white/90 text-sm md:text-base max-w-sm">
          Step into the future of streetwear today.
        </p>
      </div>

      <div>
        <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-gray-100 transition w-max">
          New Drops <ArrowRight size={18} />
        </button>
      </div>

      {/* Social Proof Avatars */}
      <div className="flex items-center gap-3 pt-4">
        <div className="flex -space-x-3">
          {[1, 2, 3, 4].map((num) => (
            <img key={num} src={`https://i.pravatar.cc/100?img=${num + 10}`} alt="User" className="w-10 h-10 rounded-full border-2 border-[#ff6868] object-cover" />
          ))}
        </div>
        <div className="text-xs">
          <div className="flex text-white"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
          <p className="opacity-80 font-medium">Rated 5 Stars by<br/>The Vybe Tribe</p>
        </div>
      </div>
    </div>
  );
}