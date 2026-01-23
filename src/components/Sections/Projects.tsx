'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/lib/data';
import { ExternalLink, Github, Terminal, ChevronDown, Activity, Code2, Database, Box } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  
  const categories = ['All', ...new Set(portfolioData.projects.map(p => p.category))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === selectedCategory);

  return (
    <section className="min-h-screen bg-black pt-32 pb-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* HEADER */}
        <div className="mb-20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-3 mb-6">
            <div className="h-2 w-2 bg-cyan-500 rounded-full shadow-[0_0_10px_#06b6d4]" />
            <span className="text-[10px] tracking-[0.5em] text-white/40 uppercase font-black">Architecture_Review</span>
          </motion.div>
          <h2 className="text-6xl md:text-9xl font-black text-white leading-[0.8] uppercase tracking-tighter">
            ENGINEERING <br />
            <span className="text-white/10 italic">WORKFLOW</span>
          </h2>
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap gap-3 mb-16 border-b border-white/5 pb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold transition-all border ${
                selectedCategory === category
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent text-white/40 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 gap-20">
          {filteredProjects.map((project: any, index: number) => (
            <motion.div
              key={project.id || index}
              layout
              className="group relative bg-zinc-950 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-cyan-500/20 transition-all duration-700"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* PROJECT MAIN PREVIEW */}
                <div className="relative h-[400px] lg:h-auto overflow-hidden bg-zinc-900 border-r border-white/5">
                  <img 
                    src={project.image} 
                    className="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000" 
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-transparent" />
                </div>

                {/* CONTENT BRIEF */}
                <div className="p-10 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6 text-cyan-500">
                    <Terminal size={18} />
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase italic">System_Logs.0{index + 1}</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-md">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-auto">
                    <button 
                      onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                      className="px-8 py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-cyan-500 transition-all"
                    >
                      {expandedProject === index ? 'Hide Logic' : 'View Case Study'} 
                      <ChevronDown className={`transition-transform duration-500 ${expandedProject === index ? 'rotate-180' : ''}`} size={16} />
                    </button>
                    <div className="flex gap-3">
                      <button className="w-14 h-14 border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-all rounded-full"><Github size={20} /></button>
                      <button className="w-14 h-14 border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-all rounded-full"><ExternalLink size={20} /></button>
                    </div>
                  </div>
                </div>
              </div>

              {/* EXPANDABLE CASE STUDY (FOTO TIAP STEP) */}
              <AnimatePresence>
                {expandedProject === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden bg-zinc-900/50 border-t border-white/5"
                  >
                    <div className="p-10 lg:p-20">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        
                        {/* Loop melalui steps yang ada di data.ts */}
                        {(project.steps || [1, 2, 3]).map((step: any, i: number) => (
                          <div key={i} className="space-y-6 group/step">
                            <div className="relative h-64 w-full bg-black rounded-3xl overflow-hidden border border-white/10 group-hover/step:border-cyan-500/50 transition-all">
                              {/* GAMBAR FOTO KODINGAN / DATA TIAP PROYEK */}
                              <img 
                                src={step.img || 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600'} 
                                className="w-full h-full object-cover opacity-30 group-hover/step:opacity-70 transition-all duration-700" 
                                alt={step.title}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                              <div className="absolute bottom-6 left-6 p-2 bg-cyan-500 rounded-lg">
                                {i === 0 ? <Database size={16} className="text-black" /> : i === 1 ? <Code2 size={16} className="text-black" /> : <Box size={16} className="text-black" />}
                              </div>
                            </div>
                            <div>
                              <span className="text-cyan-500 text-[10px] font-black uppercase tracking-widest mb-2 block">Phase 0{i + 1}</span>
                              <h4 className="text-white font-bold text-xl uppercase tracking-tighter mb-4">{step.title || 'Step Title'}</h4>
                              <p className="text-white/40 text-sm leading-relaxed">
                                {step.desc || 'Penjelasan detail mengenai kodingan atau proses pengolahan data pada tahap ini.'}
                              </p>
                            </div>
                          </div>
                        ))}

                      </div>

                      {/* WORKFLOW STATUS BAR */}
                      <div className="mt-20 p-8 border border-white/5 rounded-3xl bg-black/40 flex items-center justify-center">
                        <div className="flex items-center gap-6">
                           <Activity size={20} className="text-cyan-500 animate-pulse" />
                           <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">System_Logic_Validation_Secure</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}