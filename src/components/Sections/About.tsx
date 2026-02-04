'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-black flex items-center py-16 lg:py-24 overflow-hidden group/main"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: TEXT */}
          <div className="lg:col-span-7 flex flex-col justify-start order-2 lg:order-1">
            
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mb-10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-cyan-500/50 transition-all duration-500 group-hover/main:w-20" />
                <span className="text-white/40 text-[10px] tracking-[0.6em] font-black uppercase italic transition-opacity duration-500">
                  Core Architecture
                </span>
              </div>
              
              <h2 className="text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-white leading-[0.8] mb-6">
                ABOUT <br />
                <span className="text-white/20 italic font-serif transition-all duration-500 group-hover/main:text-cyan-500/30">
                  ME
                </span>
              </h2>
              
              {/* Badge Keahlian Ganda */}
              <div className="flex flex-wrap gap-3 mb-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 border-l-4 border-l-cyan-500 backdrop-blur-md px-5 py-3 rounded-sm"
                >
                   <p className="text-white font-bold text-sm tracking-widest uppercase">
                     Fullstack Developer
                   </p>
                   <p className="text-white/40 text-[9px] font-medium tracking-wider uppercase mt-1">
                     Scalable Solutions
                   </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 border-l-4 border-l-white/40 backdrop-blur-md px-5 py-3 rounded-sm"
                >
                   <p className="text-white font-bold text-sm tracking-widest uppercase">
                     Data Intelligence
                   </p>
                   <p className="text-white/40 text-[9px] font-medium tracking-wider uppercase mt-1">
                     Pattern Recognition
                   </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Bio Baru: Tanpa Kampus & Tanpa Stack List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mb-12"
            >
              <div className="max-w-2xl border-l border-white/10 pl-8 space-y-6">
                <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed transition-all duration-500 hover:text-white">
                  I am an <span className="text-white font-bold italic">Independent Developer</span> driven by the challenge of bridging complex engineering with intelligent data insights. My focus is on crafting digital ecosystems that are not just functional, but inherently smart.
                </p>
                <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed transition-all duration-500 hover:text-white">
                  Through hands-on experience and a relentless pursuit of technical excellence, I build high-performance applications designed to solve real-world problems with precision and speed.
                </p>
                <p className="text-sm font-mono text-cyan-500/60 tracking-widest uppercase">
                  {"// MISSION: TRANSFORMING_COMPLEXITY_INTO_LOGIC"}
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {portfolioData.about.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl transition-all duration-500 cursor-default"
                >
                  <div className="text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-[10px] tracking-widest uppercase text-white/40 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: FOTO PROFIL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="absolute -inset-4 border border-white/5 rounded-[3rem] pointer-events-none" />
              <div className="absolute -top-10 -left-10 text-[10rem] font-black text-white/[0.02] select-none pointer-events-none">
                01
              </div>
              
              <div className="relative w-[320px] h-[400px] md:w-[380px] md:h-[480px] bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
                <Image 
                  src="/fadli123.jpeg" 
                  alt="Fadli Zaenal Aripin"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-10 left-10 overflow-hidden">
                  <motion.div 
                    initial={{ y: 50 }}
                    whileInView={{ y: 0 }}
                    className="flex flex-col"
                  >
                    <span className="text-cyan-400 font-mono text-[10px] tracking-tighter uppercase">SYSTEM_OPERATIONAL</span>
                    <span className="text-white font-black text-2xl tracking-tighter uppercase">FADLI ZAENAL</span>
                  </motion.div>
                </div>
              </div>

              <div className="absolute -right-6 -bottom-6 bg-black/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hidden md:block shadow-2xl">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse" />
                    <div className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse delay-75" />
                    <div className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse delay-150" />
                  </div>
                  <p className="text-white/20 text-[8px] tracking-[1em] uppercase font-black mb-1">Authenticated</p>
                  <p className="text-white text-xs tracking-widest font-bold uppercase">Independent</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}