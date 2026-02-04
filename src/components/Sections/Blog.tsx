'use client';

import { useState, useEffect } from 'react'; // Tambahkan ini
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Binary, 
  Cpu, 
  Activity, 
  Loader2,
  Terminal,
  Code2,
  Globe
} from 'lucide-react';

export default function Blog() {
  // Logic untuk animasi terminal
  const logs = [
    "Fetching latest Web-Stack research...",
    "Analyzing Data Pipeline efficiency...",
    "Encrypting log files for Journal.v1...",
    "Optimizing system architecture...",
    "Syncing neural network nodes..."
  ];
  
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    const currentFullText = logs[currentLogIndex];
    
    const typingInterval = setInterval(() => {
      if (charIndex <= currentFullText.length) {
        setDisplayText(currentFullText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentLogIndex((prev) => (prev + 1) % logs.length);
        }, 2000); // Jeda sebelum ganti teks berikutnya
      }
    }, 50); // Kecepatan ngetik

    return () => clearInterval(typingInterval);
  }, [currentLogIndex]);

  return (
    <section className="h-auto min-h-screen bg-black pt-32 pb-40 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 border-b border-white/10 pb-12">
          <div className="md:col-span-8">
            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-2 w-2 bg-cyan-500 rounded-full animate-pulse" />
              <span className="text-[10px] tracking-[0.5em] text-white/40 uppercase font-black">
                Intelligence_Log.v1
              </span>
            </motion.div>
            <h2 className="text-6xl md:text-9xl font-black text-white leading-[0.8] uppercase tracking-tighter">
              DEV <br />
              <span className="text-white/10 italic">JOURNAL</span>
            </h2>
          </div>
          <div className="md:col-span-4 flex md:justify-end items-end">
             <div className="text-right">
                <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest mb-2">System Status</p>
                <p className="text-white font-mono text-sm uppercase tracking-widest italic">Standby Mode</p>
             </div>
          </div>
        </div>

        {/* --- MAIN CONTENT CARD --- */}
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="group relative border border-white/10 rounded-[3.5rem] p-12 md:p-24 overflow-hidden bg-zinc-950/50 backdrop-blur-xl flex flex-col items-center text-center"
          >
            {/* ICONS */}
            <div className="flex gap-4 mb-12">
                <div className="p-4 bg-white/5 rounded-2xl text-white/20 group-hover:text-cyan-500 transition-all duration-500 shadow-inner">
                    <Globe size={32} />
                </div>
                <div className="p-4 bg-white/5 rounded-2xl text-white/20 group-hover:text-cyan-500 transition-all duration-500 shadow-inner">
                    <Code2 size={32} />
                </div>
                <div className="p-4 bg-white/5 rounded-2xl text-white/20 group-hover:text-cyan-500 transition-all duration-500 shadow-inner">
                    <Cpu size={32} />
                </div>
            </div>

            <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8">
              Coming <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                Soon
              </span>
            </h3>

            <p className="text-white/40 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl font-medium px-4">
              I am currently documenting my journey through <span className="text-white">Modern Web Architectures</span>, 
              <span className="text-white"> System Optimization</span>, and <span className="text-white">AI integration</span>. 
              Logs are being prepared for public access.
            </p>

            {/* STATUS BADGES */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
                <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10">
                    <Loader2 size={14} className="text-cyan-500 animate-spin" />
                    <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">
                      Processing Data
                    </span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10">
                    <Activity size={14} className="text-white/20" />
                    <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">
                      System Active
                    </span>
                </div>
            </div>

            {/* --- ANIMATED TERMINAL --- */}
            <div className="w-full max-w-xl bg-black/40 border border-white/5 rounded-2xl p-6 font-mono text-left">
              <div className="flex gap-1.5 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <div className="space-y-2 text-[10px] md:text-xs tracking-tight min-h-[100px]">
                <p className="text-cyan-500/80 underline tracking-widest uppercase font-bold mb-2">Initialize_Feed...</p>
                
                {/* Bagian Log yang Berjalan */}
                <div className="flex gap-2">
                  <span className="text-white/20">[LOG]</span>
                  <p className="text-white/40">{displayText}</p>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <p className="text-white/60"> {'>'} System awaiting input</p>
                  <div className="w-2 h-4 bg-cyan-500 animate-pulse" />
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* --- FOOTER DECORATION --- */}
        <div className="mt-20 flex flex-col items-center">
             <div className="w-px h-24 bg-gradient-to-b from-cyan-500/50 to-transparent" />
             <p className="mt-6 text-[8px] font-mono text-white/20 uppercase tracking-[1em]">
               End of Transmission
             </p>
        </div>

      </div>
    </section>
  );
}