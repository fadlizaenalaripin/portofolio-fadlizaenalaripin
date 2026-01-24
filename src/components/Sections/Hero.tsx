'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import { ArrowRight, FileText, Volume2 } from 'lucide-react';
import SplineBackground from '../client/SplineBackground'

export default function Hero({ onNavClick }: { onNavClick: (section: string) => void }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeWord, setActiveWord] = useState(''); 
  
  const speechParts = [
    "Neural interface established.",
    "Welcome to the digital workspace of Fadli, Zaenal, Aripin.",
    "Specializing in Data Intelligence and Machine Learning engineering.",
    "Transforming complex datasets into actionable strategic assets.",
    "System is operational and ready for new challenges.",
    "Open for project collaborations or professional inquiries.", // Ini bagian penawaran kerja samanya
    "Let's build the future of intelligence together."
  ];

  const speakGreeting = useCallback(async () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(true);

      for (const part of speechParts) {
        await new Promise((resolve) => {
          const msg = new SpeechSynthesisUtterance(part);
          msg.lang = 'en-US';
          msg.pitch = 0.5;
          msg.rate = 0.85;
          msg.volume = 1;

          msg.onstart = () => {
            setActiveWord(part);
          };

          msg.onend = () => {
            resolve(null);
          };

          const voices = window.speechSynthesis.getVoices();
          msg.voice = voices.find(v => v.name.includes('Google US English')) || 
                      voices.find(v => v.name.includes('English United States')) ||
                      voices[0];

          window.speechSynthesis.speak(msg);
        });
      }
      
      setIsPlaying(false);
      setTimeout(() => setActiveWord(''), 2000);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.speechSynthesis.getVoices();
    }

    const timer = setTimeout(() => {
      speakGreeting();
    }, 4500);

    return () => {
      clearTimeout(timer);
      if (typeof window !== 'undefined') window.speechSynthesis.cancel();
    };
  }, [speakGreeting]);

  return (
    <section className="relative h-[100dvh] w-full bg-black overflow-hidden flex flex-col">
      <SplineBackground />

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none" />

      {/* HEADER NAMA & SPEAKER */}
      <div className="relative z-50 w-full flex justify-between items-start px-6 py-10 md:px-12 pointer-events-none">
        <div className="flex flex-col">
          <span className="text-white font-light tracking-[0.3em] text-[10px] uppercase opacity-70">
            {portfolioData.name}
          </span>
        </div>

        <div className="flex flex-col items-end gap-4 pointer-events-auto">
          <button 
            onClick={speakGreeting}
            className={`p-4 rounded-full border border-white/10 transition-all duration-500 bg-black/40 backdrop-blur-md ${
              isPlaying ? 'bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)] border-cyan-400' : 'hover:border-white/30'
            }`}
          >
            <Volume2 size={18} className={`${isPlaying ? 'text-black animate-pulse' : 'text-white/40'}`} />
          </button>

          <div className="h-10 flex items-center justify-end">
            <AnimatePresence mode="wait">
              {activeWord && (
                <motion.div
                  key={activeWord}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="bg-cyan-500 text-black px-3 py-1 rounded shadow-lg"
                >
                  <span className="font-mono text-[10px] font-black uppercase whitespace-nowrap">
                    {activeWord}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* --- CONTENT UTAMA (DISEJAJARKAN KE KIRI) --- */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 pointer-events-none md:mt-[-8vh]">
        <div className="w-full text-left">
          <h1 className="text-[12vw] md:text-8xl font-black tracking-tighter text-white leading-[0.8] uppercase">
            DATA <br /> <span className="text-white/20">INTELLIGENCE</span>
          </h1>
          <p className="text-white/60 text-[9px] md:text-[10px] tracking-[0.5em] font-medium uppercase mt-4">
            Specialized in <span className="text-white opacity-100 font-bold">ML</span> & <span className="text-white opacity-100 font-bold">Analytics Engineering</span>
          </p>
        </div>

        {/* TOMBOL AKSI - TETAP DI KANAN TAPI DINAIKKAN POSISINYA */}
        <div className="flex flex-col gap-4 w-60 md:w-72 mt-12 md:mt-0 pointer-events-auto md:absolute md:top-[45%] md:-translate-y-1/2 md:right-12">
          <button 
            onClick={() => onNavClick('projects')}
            className="px-6 py-4 bg-white text-black font-black text-[10px] tracking-[0.2em] uppercase flex items-center justify-between hover:bg-cyan-500 transition-all shadow-xl"
          >
            VIEW PROJECTS <ArrowRight size={16} />
          </button>
          <button 
            onClick={() => window.open('/cvfadli.pdf', '_blank')}
            className="px-6 py-4 border border-white/20 text-white font-bold text-[10px] tracking-[0.2em] uppercase flex items-center justify-between hover:bg-white/5 transition-all"
          >
            DOWNLOAD CV <FileText size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}