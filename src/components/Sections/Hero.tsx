'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import { ArrowRight, FileText, Volume2, Menu, X } from 'lucide-react';
import dynamic from 'next/dynamic';

// PERBAIKAN DI SINI: Menghapus '/next' dari path import
const Spline = dynamic(
  () => import('@splinetool/react-spline').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    ),
  }
);


export default function Hero({ onNavClick }: { onNavClick: (section: string) => void }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // FUNGSI SUARA ROBOT (Text-to-Speech)
  const speakGreeting = () => {
    const text = `
      Initializing connection. 
      Welcome. I am the digital representative of Fadli, Zaenal, Aripin. 
      He is a specialist in Data Intelligence, Machine Learning, and Business Analytics. 
      In this space, we transform complex data into strategic insights using advanced technology. 
      Feel free to explore the projects and engineered systems. 
      Intelligence is the ultimate frontier. System is now fully operational.
    `;
    
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const msg = new SpeechSynthesisUtterance(text);
      
      msg.lang = 'en-US'; 
      msg.pitch = 0.45; 
      msg.rate = 0.88;  
      msg.volume = 0.9;

      msg.onstart = () => setIsPlaying(true);
      msg.onend = () => setIsPlaying(false);

      const voices = window.speechSynthesis.getVoices();
      msg.voice = voices.find(v => v.name.includes('Google US English')) || 
                  voices.find(v => v.name.includes('Male')) || 
                  voices[0];

      window.speechSynthesis.speak(msg);
    }
  };

  const handleDownloadCV = () => {
    window.open('/cvfadli.pdf', '_blank');
  };

  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
    }
    const timer = setTimeout(() => {
      speakGreeting();
    }, 2500);

    return () => {
      clearTimeout(timer);
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <section className="relative h-[100dvh] w-full bg-black overflow-hidden flex flex-col">
      
      {/* 1. SPLINE BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full scale-[1.3] md:scale-100 translate-y-[8%] md:translate-y-0 flex items-center justify-center">
          <Spline 
            scene="https://prod.spline.design/enTt-tPufsllsL8h/scene.splinecode" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 2. OVERLAY */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none" />

      {/* 3. HEADER NAMA & SPEAKER (ATAS) */}
      <div className="relative z-20 w-full flex justify-between items-start px-6 py-10 md:px-12 pointer-events-none">
        <div className="flex flex-col">
          <span className="text-white font-light tracking-[0.3em] text-[10px] uppercase opacity-70">
            {portfolioData.name}
          </span>
        </div>

        {/* Tombol Speaker AI */}
        <button 
          onClick={speakGreeting}
          className={`pointer-events-auto p-4 rounded-full border border-white/10 transition-all duration-500 bg-black/40 backdrop-blur-md ${isPlaying ? 'bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)] border-cyan-400' : ''}`}
        >
          <Volume2 size={18} className={`${isPlaying ? 'text-black animate-pulse' : 'text-white/40'}`} />
        </button>
      </div>

      {/* 4. MAIN CONTENT (TENGAH) */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6 pointer-events-none">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 md:text-left md:w-full md:px-6">
          <h1 className="text-[12vw] md:text-8xl font-black tracking-tighter text-white leading-[0.8] uppercase">
            DATA <br /> <span className="text-white/20">INTELLIGENCE</span>
          </h1>
          <p className="mt-4 text-white/30 text-[9px] tracking-[0.3em] font-bold uppercase">Specialized in ML & Analytics</p>
        </motion.div>

        <div className="flex flex-col gap-4 w-60 md:w-72 pointer-events-auto md:absolute md:bottom-32 md:right-12">
          <button 
            onClick={() => onNavClick('projects')}
            className="px-6 py-4 bg-white text-black font-black text-[10px] tracking-[0.2em] uppercase flex items-center justify-between active:scale-95 transition-all shadow-xl shadow-white/5"
          >
            VIEW PROJECTS <ArrowRight size={16} />
          </button>
          
          <button 
            onClick={handleDownloadCV}
            className="px-6 py-4 border border-white/20 text-white font-bold text-[10px] tracking-[0.2em] uppercase flex items-center justify-between hover:bg-white/5 transition-all active:scale-95"
          >
            DOWNLOAD CV <FileText size={16} />
          </button>
        </div>
      </div>

      {/* 5. NAVBAR LAPTOP (BAWAH) */}
      <div className="hidden md:flex absolute bottom-10 left-0 w-full z-20 justify-center pointer-events-none px-4">
        <div className="flex items-center gap-6 lg:gap-8 pointer-events-auto bg-black/40 backdrop-blur-xl px-10 py-4 rounded-full border border-white/10 w-fit max-w-max mx-auto shadow-2xl overflow-hidden">
          {['Home', 'About', 'Skills', 'Projects', 'Blog', 'Certificates', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => onNavClick(item.toLowerCase())}
              className="text-[9px] lg:text-[10px] tracking-[0.3em] text-white/40 hover:text-white uppercase font-bold transition-all whitespace-nowrap"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* 6. TOMBOL MENU BULAT HP */}
      <div className="md:hidden fixed bottom-10 right-6 z-[60] pointer-events-auto">
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="w-16 h-16 rounded-full bg-white text-black shadow-2xl flex items-center justify-center active:scale-90 transition-transform"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* 7. SIDEBAR MENU HP */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[70] md:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              className="fixed right-0 top-0 h-full w-[85%] bg-zinc-950 z-[80] border-l border-white/10 md:hidden flex flex-col"
            >
              <div className="p-8 flex justify-between items-center border-b border-white/5">
                <span className="text-[10px] tracking-[0.3em] text-white/20 uppercase font-black">Menu Navigation</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-white/40 p-2"><X size={28} /></button>
              </div>

              <div className="flex-1 overflow-y-auto px-10 py-12 flex flex-col gap-6">
                {['Home', 'About', 'Skills', 'Projects', 'Blog', 'Certificates', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => { onNavClick(item.toLowerCase()); setIsMobileMenuOpen(false); }}
                    className="text-4xl font-black tracking-tighter text-white/20 hover:text-white text-left uppercase"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}