'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';

export default function Skills() {
  // Fungsi mapping untuk mengambil logo dari folder PUBLIC
  const getLogoUrl = (name: string) => {
    const n = name.toLowerCase().trim();
    
    // 1. CEK FILE LOKAL DI FOLDER PUBLIC
    if (n.includes('tabl')) return '/tableau.png';
    if (n.includes('aws') || n.includes('awas')) return '/aws.jpg';
    if (n.includes('power') || n.includes('bi')) return '/Power Bi.png';

    // 2. FALLBACK KE CDN UNTUK TECH LAIN (React, Next, dll)
    let slug = n.replace(/\s+/g, '');
    if (n.includes('sql')) slug = 'postgresql';
    if (n.includes('next')) slug = 'nextdotjs';
    if (n.includes('react')) slug = 'react';

    return `https://cdn.simpleicons.org/${slug}/white`;
  };

  const languages = [
    { name: 'Indonesian', level: 'Native Speaker' },
    { name: 'English', level: 'Professional / Fluent' },
    { name: 'German', level: 'Learning / Basic' }
  ];

  return (
    <section id="skills" className="relative min-h-screen bg-black py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Header Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-cyan-500" />
            <span className="text-cyan-500 text-[10px] tracking-[0.8em] font-black uppercase">
              Capabilities
            </span>
          </div>
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase leading-none">
            TECH <span className="text-white/10 italic">STACK</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* SISI KIRI: GRID LOGO */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-10 md:gap-14">
              {portfolioData.skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group flex flex-col items-center justify-center gap-4 text-center"
                >
                  <div className="relative w-12 h-12 md:w-16 md:h-16 transition-all duration-500 group-hover:scale-110 flex items-center justify-center">
                    <img 
                      src={getLogoUrl(skill.name)} 
                      alt={skill.name}
                      // Opacity 30 agar terlihat estetik saat diam, 100 saat hover
                      className="max-w-full max-h-full object-contain opacity-30 group-hover:opacity-100 transition-all duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://cdn.simpleicons.org/code-dot-js/white';
                      }}
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SISI KANAN: LANGUAGES (Center-Right Aligned) */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:pl-20 border-l border-white/5">
            <div className="space-y-16">
              <h3 className="text-white font-black text-[10px] tracking-[0.4em] uppercase opacity-30">
                Human Communications
              </h3>
              
              <div className="flex flex-col gap-12">
                {languages.map((lang) => (
                  <motion.div 
                    key={lang.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="group/lang"
                  >
                    <span className="text-5xl md:text-6xl font-black text-white group-hover/lang:text-cyan-400 transition-all duration-500 block leading-none uppercase tracking-tighter">
                      {lang.name}
                    </span>
                    <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white/20 mt-3 block group-hover/lang:text-white transition-colors">
                      {lang.level}
                    </span>
                    <div className="h-[1px] w-8 group-hover/lang:w-full bg-cyan-500/30 mt-4 transition-all duration-700" />
                  </motion.div>
                ))}
              </div>

              <div className="pt-24 opacity-10">
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}