'use client';

import { useState, useEffect } from 'react';

export default function SplineBackground() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [coords, setCoords] = useState({ x: '0.0000', y: '0.0000' });

  useEffect(() => {
    setMounted(true);
    
    // Update koordinat secara berkala agar loading terasa "hidup"
    const coordInterval = setInterval(() => {
      setCoords({
        x: Math.random().toFixed(4),
        y: Math.random().toFixed(4)
      });
    }, 200);

    // Simulasi Progress Loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowVideo(true), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => {
      clearInterval(interval);
      clearInterval(coordInterval);
    };
  }, []);

  if (!mounted) return <div className="absolute inset-0 bg-black" />;

  return (
    <div className="absolute inset-0 z-0 bg-black overflow-hidden">
      
      {/* --- HUD LOADING SCREEN --- */}
      {!showVideo && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-50 px-10">
          <div className="w-full max-w-md relative">
            
            <div className="flex justify-between items-end mb-2">
              <div className="flex flex-col">
                <span className="text-[10px] text-cyan-500/40 tracking-[0.3em] uppercase">System Status</span>
                <span className="text-xs text-cyan-400 tracking-[0.2em] font-bold">INITIALIZING AI_CORE</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-cyan-500/40 block leading-none">SECTOR: 7G-01</span>
                <span className="text-xl font-mono text-cyan-400 leading-none">{progress}%</span>
              </div>
            </div>

            <div className="w-full h-[4px] bg-cyan-950/50 rounded-full overflow-hidden border border-cyan-500/20 relative">
              <div 
                className="h-full bg-cyan-400 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_1.5s_infinite]" />
            </div>

            <div className="mt-4 flex justify-between font-mono text-[8px] text-cyan-500/40 uppercase tracking-widest">
              <div className="flex flex-col gap-1">
                {/* Karakter > sekarang dibungkus aman */}
                <span>{">"} X: {coords.x}</span>
                <span>{">"} Y: {coords.y}</span>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <span>NEURAL_LINK: ACTIVE</span>
                <span>LATENCY: 12MS</span>
              </div>
            </div>

            <div className="absolute -inset-x-20 -inset-y-40 pointer-events-none overflow-hidden opacity-20">
               <div className="w-full h-1/2 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-[scan_3s_infinite]" />
            </div>
          </div>
        </div>
      )}

      {/* --- VIDEO BACKGROUND --- */}
      <div className={`w-full h-full transition-all duration-[2000ms] ease-in-out ${showVideo ? 'opacity-90 scale-100 blur-0' : 'opacity-0 scale-125 blur-2xl'}`}>
        <video
          autoPlay
          loop
          muted
          playsInline
          suppressHydrationWarning
          className="w-full h-full object-cover"
        >
          <source src="/animasi.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 z-[5] bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />
      <div className="absolute inset-0 z-[4] bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)] opacity-60 pointer-events-none" />

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}