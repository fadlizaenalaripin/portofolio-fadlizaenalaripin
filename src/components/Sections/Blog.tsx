'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import { ArrowUpRight, Clock, ChevronRight, Tag } from 'lucide-react';

export default function Blog() {
  // Data Blog
  const blogs = (portfolioData as any).blogs || [
    {
      id: 1,
      title: "Neural Network Architectures for Predictive Business Intelligence",
      date: "Oct 24, 2025",
      readTime: "12 min read",
      category: "Deep Learning",
      isFeatured: true,
      excerpt: "An in-depth analysis of how modern neural architectures are transforming traditional BI tools into autonomous decision-making systems."
    },
    {
      id: 2,
      title: "Optimization Algorithms in Large Scale Analytics",
      date: "Sep 12, 2025",
      readTime: "8 min read",
      category: "Mathematics",
      isFeatured: false,
      excerpt: "Evaluating the efficiency of gradient descent variants in high-dimensional data spaces."
    },
    {
      id: 3,
      title: "The Ethics of Data Privacy in AI Representative Models",
      date: "Aug 05, 2025",
      readTime: "6 min read",
      category: "Ethics",
      isFeatured: false,
      excerpt: "Protecting user identity while maintaining high model accuracy in decentralized intelligence systems."
    }
  ];

  const featured = blogs.find((b: any) => b.isFeatured) || blogs[0];
  const list = blogs.filter((b: any) => b.id !== featured.id);

  return (
    <section className="h-auto min-h-screen bg-black pt-32 pb-40 px-6 md:px-12 overflow-visible">
      <div className="max-w-7xl mx-auto">
        
        {/* --- KELOMPOK 1: HEADER --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24 border-b border-white/10 pb-12">
          <div className="md:col-span-8">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-3 mb-6">
              <div className="h-2 w-2 bg-cyan-500 rounded-full animate-pulse" />
              <span className="text-[10px] tracking-[0.5em] text-white/40 uppercase font-black">Intelligence_Log.v1</span>
            </motion.div>
            <h2 className="text-6xl md:text-9xl font-black text-white leading-[0.8] uppercase tracking-tighter">
              RESEARCH <br />
              <span className="text-white/10 italic">JOURNAL</span>
            </h2>
          </div>
        </div>

        {/* --- KELOMPOK 2: ARTIKEL UTAMA (FEATURED) --- */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-8">
             <span className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.4em]">/ Featured_Entry</span>
             <div className="h-px flex-1 bg-white/5" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 rounded-3xl overflow-hidden bg-zinc-950/50"
          >
            <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center border-r border-white/10">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                  <Clock size={14}/> {featured.readTime}
                </span>
                <span className="text-cyan-500/50 text-[10px] font-bold uppercase tracking-[0.3em] border-l border-white/10 pl-4">{featured.category}</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8 group-hover:text-cyan-400 transition-colors duration-500">
                {featured.title}
              </h3>
              <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-xl font-medium">
                {featured.excerpt}
              </p>
              <button className="w-fit px-8 py-4 bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] hover:bg-cyan-500 transition-all flex items-center gap-3 active:scale-95">
                Decrypt Full Access <ArrowUpRight size={16} />
              </button>
            </div>
            <div className="lg:col-span-5 bg-zinc-900 overflow-hidden min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a" 
                className="w-full h-full object-cover opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000" 
                alt="Visual" 
              />
            </div>
          </motion.div>
        </div>

        {/* --- KELOMPOK 3: ARSIP SISTEM (GRID LIST) --- */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">/ System_Archive</span>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {list.map((item: any, i: number) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-zinc-950/30 border border-white/5 p-10 md:p-12 rounded-3xl hover:bg-zinc-900/50 hover:border-cyan-500/30 transition-all flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-10">
                  <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{item.date}</span>
                  <div className="p-2 bg-white/5 rounded-lg">
                    <Tag size={12} className="text-white/20 group-hover:text-cyan-500 transition-colors" />
                  </div>
                </div>
                <h4 className="text-2xl md:text-3xl font-black text-white group-hover:text-white transition-all uppercase tracking-tighter leading-[1] mb-6">
                  {item.title}
                </h4>
                <p className="text-white/30 text-sm leading-relaxed mb-12 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]">{item.category}</span>
                  <button className="flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest hover:text-cyan-400 transition-all">
                    DETAILS <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}