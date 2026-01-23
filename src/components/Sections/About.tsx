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
      {/* Background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] pointer-events-none" />
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
                <div className="w-12 h-[2px] bg-white/30 transition-all duration-500 group-hover/main:bg-white/50" />
                <span className="text-white/40 text-[10px] tracking-[0.6em] font-black uppercase italic transition-opacity duration-500">
                  Profile Discovery
                </span>
              </div>
              
              <h2 className="text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-white leading-[0.8] mb-6">
                ABOUT <br />
                <span className="text-white/20 italic font-serif transition-all duration-500 group-hover/main:text-white/30">
                  ME
                </span>
              </h2>
              
              {/* Badge Pendidikan */}
              <motion.div
                whileHover={{ scale: 1.03, opacity: 1 }}
                className="inline-block relative mb-8 cursor-default"
              >
                <div className="relative bg-black/40 border border-white/10 border-l-4 border-l-white/20 backdrop-blur-md px-5 py-3 rounded-sm transition-all duration-500">
                   <p className="text-white/60 font-bold text-sm tracking-widest uppercase">
                     Informatics Engineering
                   </p>
                   <p className="text-white/40 text-[10px] font-medium tracking-wider uppercase mt-1">
                     STIKOM Poltek Cirebon
                   </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mb-12"
            >
              <div className="max-w-2xl border-l border-white/10 pl-8 space-y-6">
                {[
                  "I am a passionate Informatics Engineering student dedicated to mastering software development and intelligence systems.",
                  "My mission is to transform complex data into high-performance applications, bridging the gap between raw information and intelligent solutions.",
                  "I continuously explore technology trends, AI applications, and data-driven solutions to create meaningful and elegant digital experiences."
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    className="text-lg md:text-xl text-white/70 font-light leading-relaxed transition-all duration-500 hover:text-white/90"
                    whileHover={{ x: 2 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {portfolioData.about.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl transition-all duration-500 cursor-default"
                >
                  <div className="text-3xl font-black text-white transition-colors">{stat.value}</div>
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
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255,255,255,0.1)" }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-white/5 rounded-[3rem] opacity-10 blur-2xl transition-opacity duration-700" />
              
              <div className="relative w-[320px] h-[400px] md:w-[380px] md:h-[480px] bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-white/10 transition-all shadow-2xl">
                <Image 
                  src="/fadli123.jpeg" 
                  alt=""
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] transition-opacity">
                   <span className="text-[15rem] font-black text-white uppercase select-none">FZ</span>
                </div>
              </div>

              {/* Nama Floating */}
              <div className="absolute -right-6 -bottom-6 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hidden md:block">
                <p className="text-white/20 text-[8px] tracking-[1em] uppercase font-black mb-1">Authenticated</p>
                <p className="text-white text-xs tracking-widest font-bold uppercase">Fadli Zaenal Aripin</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
