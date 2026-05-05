import { 
  MapPin, 
  Play, SkipBack, SkipForward, Clock
} from 'lucide-react';
import Image from 'next/image';
import { portfolioData } from './lib/dummyData';
import MusicPlayer from './components/MusicPlayer';

const WidgetCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white p-5 rounded-3xl shadow-sm border border-slate-100 ${className}`}>
    {children}
  </div>
);

export default function RightPanel(){
  return(
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
      <MusicPlayer/>

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
  )
};