'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Terminal, Cpu, Globe, ChevronDown } from 'lucide-react';
import { portfolioData } from '@/lib/data';

function ProjectCard({ project, isExpanded, onToggle, accentColor }: any) {
  const isCyan = accentColor === 'cyan';
  const accentHex = isCyan ? 'text-cyan-400' : 'text-purple-400';
  const borderClass = isCyan ? 'group-hover:border-cyan-500/50' : 'group-hover:border-purple-500/50';

  return (
    <motion.div 
      layout
      className={`group relative bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 ${borderClass} ${isExpanded ? 'ring-1 ring-white/10' : ''}`}
    >
      {/* Project Image - Fixed Aspect Ratio */}
      <div className="relative aspect-video overflow-hidden bg-zinc-800">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000";
          }}
        />
        {/* Tech Badges Overlay */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((t: string) => (
            <span key={t} className="px-2 py-0.5 bg-black/70 backdrop-blur-md border border-white/10 text-[7px] text-white/90 rounded-md uppercase font-bold">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <Terminal size={12} className={accentHex} />
          <span className="text-[8px] font-bold tracking-[0.2em] text-white/30 uppercase italic">{project.category}</span>
        </div>

        <h4 className="text-lg font-bold text-white tracking-tight mb-2 line-clamp-1">
          {project.title}
        </h4>
        
        <p className="text-white/40 text-xs leading-relaxed mb-5 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center justify-between gap-3">
          <button 
            onClick={onToggle}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all ${
              isExpanded ? 'bg-white text-black' : 'bg-white/5 text-white hover:bg-white/10'
            }`}
          >
            {isExpanded ? 'Hide' : 'Process'}
            <ChevronDown size={14} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
          
          <div className="flex gap-1.5">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 text-white/40 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                <Github size={14} />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 text-white/40 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            className="overflow-hidden bg-white/[0.02] border-t border-white/5"
          >
            <div className="p-5 space-y-4">
              {(project.steps || []).map((step: any, i: number) => (
                <div key={i} className="flex gap-3">
                  <div className={`shrink-0 w-5 h-5 rounded-md bg-zinc-800 flex items-center justify-center text-[9px] font-bold ${accentHex}`}>
                    {i+1}
                  </div>
                  <div>
                    <h5 className="text-white text-[10px] font-bold uppercase">{step.title}</h5>
                    <p className="text-white/30 text-[9px] leading-snug">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="projects" className="bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <span className="text-cyan-500 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Portfolio</span>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4">
            Featured<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Projects</span>
          </h2>
          <div className="h-1 w-20 bg-cyan-500 rounded-full" />
        </div>

        {/* Web Systems Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="text-cyan-500" size={18} />
            <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em]">Engineering & Web</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects
              .filter(p => p.category.toLowerCase().includes("web"))
              .map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  accentColor="cyan"
                  isExpanded={expandedId === project.id}
                  onToggle={() => setExpandedId(expandedId === project.id ? null : project.id)}
                />
              ))}
          </div>
        </div>

        {/* Data Intelligence Grid */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="text-purple-500" size={18} />
            <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em]">Data & Intelligence</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects
              .filter(p => !p.category.toLowerCase().includes("web"))
              .map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  accentColor="purple"
                  isExpanded={expandedId === project.id}
                  onToggle={() => setExpandedId(expandedId === project.id ? null : project.id)}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}