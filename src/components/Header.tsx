'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

export default function Header({ activeSection, onNavClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Blog', 'Certificates', 'Contact'];

  return (
    <>
      {/* --- TAMPILAN LAPTOP: NAVBAR BAWAH TRANSPARAN --- */}
      <div className="hidden md:flex fixed bottom-10 left-0 w-full z-[100] justify-center pointer-events-none">
        <div className="flex items-center gap-8 pointer-events-auto bg-white/5 backdrop-blur-xl px-10 py-4 rounded-full border border-white/10 shadow-2xl">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavClick(item.toLowerCase())}
              className={`text-[10px] tracking-[0.3em] uppercase font-bold transition-all ${
                activeSection === item.toLowerCase() ? 'text-white' : 'text-white/40 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* --- TAMPILAN HP: TOMBOL BULAT DI POJOK KANAN BAWAH --- */}
      <div className="md:hidden fixed bottom-10 right-6 z-[100] pointer-events-auto">
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="w-16 h-16 rounded-full bg-white text-black shadow-2xl flex items-center justify-center active:scale-90 transition-transform"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* SIDEBAR MOBILE */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[110] md:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              className="fixed right-0 top-0 h-full w-[85%] bg-zinc-950 z-[120] border-l border-white/10 md:hidden flex flex-col"
            >
              <div className="p-8 flex justify-between items-center border-b border-white/5">
                <span className="text-[10px] tracking-[0.3em] text-white/20 uppercase font-black">Navigation</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-white/40"><X size={28} /></button>
              </div>
              <div className="flex-1 overflow-y-auto px-10 py-12 flex flex-col gap-6">
                {menuItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => { onNavClick(item.toLowerCase()); setIsMobileMenuOpen(false); }}
                    className={`text-4xl font-black tracking-tighter text-left uppercase transition-colors ${
                      activeSection === item.toLowerCase() ? 'text-white' : 'text-white/20'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}