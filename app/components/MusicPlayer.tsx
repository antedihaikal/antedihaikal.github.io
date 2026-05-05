"use client";

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

// DAFTAR PLAYLIST (Ganti 'src' dengan path file audio aslimu)
const PLAYLIST = [
  { id: 1, title: "Pamungkas - monolog", src: "/audio/voice-greeting.mp3" },
  { id: 2, title: "Field of View - Dandan", src: "/audio/Dandan.mp3" },
  { id: 3, title: "Nanahoshi - Tsubasa", src: "/audio/Nanahoshi - Tsubasa.mp3" }
];

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // States
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  
  const currentTrack = PLAYLIST[trackIndex];

  // Format detik menjadi MM:SS
  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Toggle Play / Pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Fungsi Ganti Lagu (Next / Prev)
  const handleNext = () => {
    setTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
    setIsPlaying(true); 
    setCurrentTime(0); // Reset slider ke titik awal
  };

  const handlePrev = () => {
    setTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
    setIsPlaying(true);
    setCurrentTime(0); // Reset slider ke titik awal
  };

  // Efek ketika trackIndex berubah (load lagu baru dan otomatis play)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load(); // Memuat ulang source yang baru
      
      if (isPlaying) {
        audioRef.current.play().catch(err => {
          console.log("Autoplay dicegah browser:", err);
          setIsPlaying(false);
        });
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIndex]);

  // Update Waktu & Durasi
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      // Fallback baca durasi
      if (duration === 0 && audioRef.current.duration) {
        setDuration(audioRef.current.duration);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Interaksi Drag Slider
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Persentase progress bar
  const safeDuration = duration > 0 ? duration : 1; 
  const progressPercent = (currentTime / safeDuration) * 100;

  return (
    <div className="flex flex-col w-full bg-white p-5 rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
      
      {/* Audio Engine */}
      <audio 
        ref={audioRef} 
        src={currentTrack.src} 
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onDurationChange={handleLoadedMetadata}
        onEnded={handleNext} // INI FITUR AUTO-NEXT
        preload="metadata"
      />

      <div className="flex items-center gap-4">
        
        {/* Kontrol Musik */}
        <div className="flex items-center gap-2 shrink-0">
          <button 
            onClick={handlePrev}
            className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors active:scale-95"
          >
            <SkipBack className="w-4 h-4 fill-current" />
          </button>

          <button 
            onClick={togglePlay}
            className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all active:scale-95 shadow-sm shadow-blue-200"
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-1" />}
          </button>

          <button 
            onClick={handleNext}
            className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors active:scale-95"
          >
            <SkipForward className="w-4 h-4 fill-current" />
          </button>
        </div>

        {/* Informasi Lagu & Slider */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-bold text-slate-800 truncate">{currentTrack.title}</h4>
            <span className="text-[11px] font-semibold text-slate-400 tabular-nums">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          {/* Slider Progress Bar */}
          <div className="relative flex items-center h-4 group/slider">
            <div className="absolute w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            
            <div 
              className="absolute w-3 h-3 bg-blue-600 rounded-full shadow pointer-events-none"
              style={{ left: `calc(${progressPercent}% - 6px)` }}
            />

            <input 
              type="range" 
              min={0} 
              max={duration || 100} 
              value={currentTime} 
              onChange={handleSeek}
              className="absolute w-full h-full opacity-0 cursor-pointer z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}