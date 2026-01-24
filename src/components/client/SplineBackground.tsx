'use client';

import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineBackground() {
  const [mounted, setMounted] = useState(false);
  const [showRobot, setShowRobot] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Simulasi Progress Loading untuk sinkron dengan HUD
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Robot muncul setelah loading selesai
          setTimeout(() => setShowRobot(true), 500);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <div className="absolute inset-0 bg-black" />;

  return (
    <div className="absolute inset-0 z-0 bg-black overflow-hidden">
      
      {/* --- HUD LOADING SCREEN --- */}
      {!showRobot && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-50 px-10">
          <div className="w-full max-w-md flex flex-col items-center">
            <span className="text-xl font-mono text-cyan-400 mb-2">{progress}%</span>
            <div className="w-48 h-[2px] bg-cyan-950 rounded-full overflow-hidden border border-cyan-500/20">
              <div 
                className="h-full bg-cyan-400 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="mt-4 text-[10px] text-cyan-500/40 tracking-[0.3em] uppercase animate-pulse">
              Initializing Neural Link
            </span>
          </div>
        </div>
      )}

      {/* --- REAL 3D ROBOT FROM SPLINE --- */}
      <div className={`w-full h-full transition-all duration-[2500ms] ease-out ${
        showRobot ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-125 blur-xl'
      }`}>
        <Spline 
          scene="https://prod.spline.design/enTt-tPufsllsL8h/scene.splinecode" 
          onLoad={() => {
            // Jika ingin robot langsung muncul saat aset 3D kelar download, 
            // bisa set setShowRobot(true) di sini.
          }}
        />
      </div>

      {/* --- OVERLAY UNTUK MENYATUKAN DENGAN DESAIN --- */}
      {/* Radial gradient agar fokus hanya di robot (tengah) dan pinggiran menyatu ke hitam pekat */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]" />
      
      {/* Overlay gradasi bawah agar teks Hero mudah dibaca */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-t from-black via-transparent to-black/60" />

      {/* Efek Grain halus (Opsional, agar kesan AI lebih kuat) */}
      <div className="absolute inset-0 z-[3] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}