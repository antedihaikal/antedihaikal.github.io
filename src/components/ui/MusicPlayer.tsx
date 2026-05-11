"use client";

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

// DAFTAR PLAYLIST
const PLAYLIST = [
  { id: 1, title: "Pamungkas - monolog", src: "/audio/voice-greeting.mp3" },
  { id: 2, title: "Field of View - Dandan", src: "/audio/Dandan.mp3" },
  { id: 3, title: "Nanahoshi - Tsubasa", src: "/audio/Nanahoshi - Tsubasa.mp3" }
];

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  
  const currentTrack = PLAYLIST[trackIndex];

  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // PERBAIKAN 6S+: Langsung panggil play() dan tangkap promise-nya untuk iOS lama
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(err => {
          console.log("iOS Play Error:", err);
          setIsPlaying(false);
        });
      } else {
        setIsPlaying(true);
      }
    }
  };

  const changeTrack = (newIndex: number) => {
    if (!audioRef.current) return;
    
    // PERBAIKAN 6S+: Memanipulasi DOM audio secara langsung (Synchronous)
    // Jangan menunggu React setState (trackIndex), karena delay akan diblokir oleh Safari lama
    audioRef.current.pause();
    audioRef.current.src = PLAYLIST[newIndex].src;
    audioRef.current.load();
    
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => console.log("iOS Autoplay Blocked:", err));
      }
    }
    
    // Baru update state React UI-nya
    setTrackIndex(newIndex);
    setCurrentTime(0);
  };

  const handleNext = () => changeTrack((trackIndex + 1) % PLAYLIST.length);
  const handlePrev = () => changeTrack((trackIndex - 1 + PLAYLIST.length) % PLAYLIST.length);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
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

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const safeDuration = duration > 0 ? duration : 1; 
  const progressPercent = (currentTime / safeDuration) * 100;

  return (
    <div className="relative z-50 pointer-events-auto flex flex-col w-full bg-white p-5 rounded-3xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
      
      <audio 
        ref={audioRef} 
        src={currentTrack.src} 
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onDurationChange={handleLoadedMetadata}
        onEnded={handleNext}
        preload="auto" // PERBAIKAN 6S+: Ubah dari metadata ke auto agar buffer lebih siap di iOS
        playsInline 
      />

      <div className="flex items-center gap-4">
        
        <div className="flex items-center gap-2 shrink-0">
          <button 
            type="button"
            onClick={handlePrev}
            className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-blue-600 active:scale-95 cursor-pointer touch-manipulation"
            style={{ WebkitTapHighlightColor: 'transparent' }} // Cegah blok abu-abu saat di-tap
          >
            <SkipBack className="w-4 h-4 fill-current pointer-events-none" />
          </button>

          <button 
            type="button"
            onClick={togglePlay}
            className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full active:scale-95 shadow-sm shadow-blue-200 cursor-pointer touch-manipulation"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current pointer-events-none" /> : <Play className="w-5 h-5 fill-current ml-1 pointer-events-none" />}
          </button>

          <button 
            type="button"
            onClick={handleNext}
            className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-blue-600 active:scale-95 cursor-pointer touch-manipulation"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <SkipForward className="w-4 h-4 fill-current pointer-events-none" />
          </button>
        </div>

        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-bold text-slate-800 truncate">{currentTrack.title}</h4>
            <span className="text-[11px] font-semibold text-slate-400 tabular-nums">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="relative flex items-center h-4 group/slider">
            <div className="absolute w-full h-1.5 bg-slate-100 rounded-full overflow-hidden pointer-events-none">
              <div 
                className="h-full bg-blue-600 rounded-full pointer-events-none"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            
            <div 
              className="absolute w-3 h-3 bg-blue-600 rounded-full shadow pointer-events-none"
              style={{ left: `calc(${progressPercent}% - 6px)` }}
            />

            {/* 
              PERBAIKAN 6S+: 
              1. Hapus 'touch-none' agar iOS 15 tidak memblokir geseran jari.
              2. Ubah 'opacity-0' jadi style opacity: 0.01 (Safari lama kadang tidak mendeteksi klik pada elemen tembus pandang 100%).
            */}
            <input 
              type="range" 
              min={0} 
              max={duration || 100} 
              value={currentTime} 
              onChange={handleSeek}
              onInput={handleSeek}
              className="absolute w-full h-full cursor-pointer z-20"
              style={{ 
                opacity: 0.01, 
                WebkitAppearance: 'none',
                background: 'transparent' 
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
